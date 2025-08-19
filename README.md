# AWS EC2 Node.js Application

A simple Node.js web application designed for deployment on AWS EC2 instances. This application serves as a basic web server with static file serving capabilities and demonstrates best practices for Node.js applications in cloud environments.

## 🚀 Features

- **Express.js Web Server**: Fast and minimalist web framework for Node.js
- **Static File Serving**: Serves HTML, CSS, and JavaScript files from the public directory
- **Dynamic Views**: Template-based rendering with EJS
- **Development Ready**: Includes nodemon for development with auto-restart
- **Production Optimized**: Configured for AWS EC2 deployment

## 📁 Project Structure

```
awsapp/
├── app/
│   ├── server.js          # Main application entry point
│   ├── package.json       # Dependencies and scripts
│   ├── public/            # Static assets
│   │   └── index.html     # Home page
│   ├── views/             # Template files
│   │   └── about.html     # About page
│   └── node_modules/      # Dependencies (git-ignored)
├── scripts/
│   └── install_nodes.sh   # Node.js installation script
├── .gitignore             # Git ignore rules
└── README.md              # This file
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm (Node Package Manager)

### Local Development
1. **Clone the repository**:
   ```bash
   git clone https://github.com/akgupta9984/awsapp.git
   cd awsapp
   ```

2. **Install dependencies**:
   ```bash
   cd app
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. **Access the application**:
   Open your browser and navigate to `http://localhost:3000`

### Development with Auto-restart
For development with automatic server restart on file changes:
```bash
npm run dev
```

## 🌐 AWS EC2 Deployment

### Prerequisites
- AWS EC2 instance (Ubuntu/Amazon Linux)
- Security group with port 3000 open
- SSH access to your EC2 instance

### Deployment Steps

1. **SSH into your EC2 instance**:
   ```bash
   ssh -i your-key.pem ec2-user@your-ec2-ip
   ```

2. **Install Node.js** (use the provided script):
   ```bash
   chmod +x scripts/install_nodes.sh
   ./scripts/install_nodes.sh
   ```

3. **Clone and setup the application**:
   ```bash
   git clone https://github.com/akgupta9984/awsapp.git
   cd awsapp/app
   npm install
   ```

4. **Start the application**:
   ```bash
   npm start
   ```

5. **Access your application**:
   Open `http://your-ec2-ip:3000` in your browser

### Production Deployment (PM2)
For production deployment with process management:

1. **Install PM2 globally**:
   ```bash
   npm install -g pm2
   ```

2. **Start with PM2**:
   ```bash
   pm2 start server.js --name "awsapp"
   pm2 save
   pm2 startup
   ```

## 📋 Available Scripts

- `npm start` - Start the production server
- `npm run dev` - Start development server with nodemon
- `npm test` - Run tests (if configured)

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the app directory for environment-specific configurations:
```
PORT=3000
NODE_ENV=production
```

### Port Configuration
The application runs on port 3000 by default. You can change this by setting the PORT environment variable.

## 🧪 Testing

### Manual Testing
1. **Home Page**: Visit `http://localhost:3000` to see the welcome page
2. **About Page**: Visit `http://localhost:3000/about` to see the about page
3. **Static Assets**: Verify CSS, JS, and images load correctly

### API Endpoints
- `GET /` - Home page
- `GET /about` - About page
- `GET /static/*` - Static file serving

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**:
   ```bash
   lsof -ti:3000 | xargs kill -9
   ```

2. **Permission denied**:
   ```bash
   chmod +x scripts/install_nodes.sh
   ```

3. **Node modules issues**:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

For questions or support, please open an issue on the [GitHub repository](https://github.com/akgupta9984/awsapp/issues).

---

**Happy Coding!** 🎉
