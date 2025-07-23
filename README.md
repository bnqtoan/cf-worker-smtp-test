# 🔧 SMTP Credential Tester

A modern Cloudflare Worker application that helps you test and validate SMTP server configurations with popular email providers. Perfect for developers who need to verify their email sending setup before going to production.

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/bnqtoan/cf-worker-smtp-test)

## ✨ Features

- **🌐 Clean Web Interface**: User-friendly form with responsive design
- **⚡ Real-time Testing**: Instant SMTP credential validation and test email sending
- **🔧 Popular Presets**: Pre-configured settings for:
  - AWS SES (multiple regions: US East 1, US West 2, EU West 1, AP Southeast 1)
  - Gmail
  - Outlook/Hotmail
  - Yahoo
  - Custom SMTP servers
- **🔒 Secure**: Credentials are only used for testing and never stored
- **📧 Test Email**: Sends formatted HTML test emails to verify configuration
- **🛡️ Error Handling**: Comprehensive validation and detailed error messages
- **🚀 Serverless**: Runs on Cloudflare Workers for global performance

## 🚀 Quick Start

### Deploy with One Click

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/bnqtoan/cf-worker-smtp-test)

### Manual Deployment

1. **Clone the repository**
   ```bash
   git clone https://github.com/bnqtoan/cf-worker-smtp-test.git
   cd cf-worker-smtp-test
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   
4. **Open your browser**
   Visit `http://localhost:8787` to access the SMTP tester

5. **Deploy to Cloudflare**
   ```bash
   npm run deploy
   ```

## 🛠️ Usage

1. **Select a Preset** (optional): Choose from popular email providers or use custom configuration
2. **Enter SMTP Details**:
   - Server host (e.g., `smtp.gmail.com`)
   - Port (587 for STARTTLS, 465 for SSL/TLS, 25 for unencrypted)
   - Encryption type
   - Username and password
3. **Specify Email Addresses**:
   - From: The sender email address
   - To: Test recipient email address
4. **Click "Send Test Email"** and get instant feedback

## 📋 Supported SMTP Providers

### AWS SES
- **US East 1**: `email-smtp.us-east-1.amazonaws.com:587`
- **US West 2**: `email-smtp.us-west-2.amazonaws.com:587`
- **EU West 1**: `email-smtp.eu-west-1.amazonaws.com:587`
- **AP Southeast 1**: `email-smtp.ap-southeast-1.amazonaws.com:587`

### Popular Email Providers
- **Gmail**: `smtp.gmail.com:587` (App Password required)
- **Outlook**: `smtp-mail.outlook.com:587`
- **Yahoo**: `smtp.mail.yahoo.com:587`

### Custom SMTP
Support for any SMTP server with customizable host, port, and encryption settings.

## 🔧 Configuration

The application uses the following configuration in `wrangler.jsonc`:

```json
{
  "compatibility_flags": [
    "global_fetch_strictly_public",
    "nodejs_compat"
  ]
}
```

The `nodejs_compat` flag is required to enable Node.js built-in modules used by the nodemailer package.

## 🏗️ Technical Details

- **Framework**: Cloudflare Workers
- **Language**: TypeScript
- **Email Library**: Nodemailer
- **Frontend**: Vanilla HTML/CSS/JavaScript
- **Deployment**: Wrangler CLI

## 🔒 Security & Privacy

- **No Data Storage**: SMTP credentials are only used for testing and never stored or logged
- **Temporary Connection**: Each test creates a fresh SMTP connection that's immediately closed
- **Client-Side Validation**: Form validation prevents invalid configurations from being sent
- **Error Sanitization**: Sensitive information is filtered from error messages

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built on [Cloudflare Workers](https://workers.cloudflare.com/)
- Email functionality powered by [Nodemailer](https://nodemailer.com/)
- Inspired by the need for quick SMTP configuration testing

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/bnqtoan/cf-worker-smtp-test/issues) page
2. Create a new issue with detailed information about your problem
3. For general questions, start a [Discussion](https://github.com/bnqtoan/cf-worker-smtp-test/discussions)

---

**⭐ If this project helps you, please consider giving it a star!**