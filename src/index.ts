import * as nodemailer from 'nodemailer';

interface SMTPConfig {
	host: string;
	port: number;
	secure: boolean;
	username: string;
	password: string;
	from: string;
	to: string;
}

export default {
	async fetch(request, _env, _ctx): Promise<Response> {
		const url = new URL(request.url);
		
		if (request.method === 'POST' && url.pathname === '/test-smtp') {
			return handleSMTPTest(request);
		}
		
		switch (url.pathname) {
			case '/message':
				return new Response('SMTP Credential Tester');
			case '/random':
				return new Response(crypto.randomUUID());
			default:
				return new Response('Not Found', { status: 404 });
		}
	},
} satisfies ExportedHandler<Env>;

async function handleSMTPTest(request: Request): Promise<Response> {
	try {
		const config: SMTPConfig = await request.json();
		
		if (!config.host || !config.port || !config.username || !config.password || !config.from || !config.to) {
			return new Response(JSON.stringify({
				success: false,
				message: 'Missing required fields'
			}), {
				status: 400,
				headers: { 'Content-Type': 'application/json' }
			});
		}
		
		const transporter = nodemailer.createTransport({
			host: config.host,
			port: config.port,
			secure: config.secure,
			auth: {
				user: config.username,
				pass: config.password,
			},
		});
		
		await transporter.verify();
		
		const mailOptions = {
			from: config.from,
			to: config.to,
			subject: 'SMTP Test Email',
			text: `This is a test email sent at ${new Date().toISOString()} to verify your SMTP configuration.`,
			html: `
				<h2>SMTP Test Email</h2>
				<p>This is a test email sent at <strong>${new Date().toISOString()}</strong> to verify your SMTP configuration.</p>
				<hr>
				<p><small>Configuration used:</small></p>
				<ul>
					<li>Host: ${config.host}</li>
					<li>Port: ${config.port}</li>
					<li>Encryption: ${config.secure ? 'SSL/TLS' : 'STARTTLS'}</li>
					<li>Username: ${config.username}</li>
				</ul>
			`
		};
		
		await transporter.sendMail(mailOptions);
		
		return new Response(JSON.stringify({
			success: true,
			message: `Test email sent successfully from ${config.from} to ${config.to}`
		}), {
			status: 200,
			headers: { 'Content-Type': 'application/json' }
		});
		
	} catch (error) {
		let errorMessage = 'Unknown error occurred';
		
		if (error instanceof Error) {
			errorMessage = error.message;
		}
		
		console.error('SMTP Test Error:', error);
		
		return new Response(JSON.stringify({
			success: false,
			message: `SMTP Test Failed: ${errorMessage}`
		}), {
			status: 500,
			headers: { 'Content-Type': 'application/json' }
		});
	}
}
