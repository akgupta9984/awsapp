#!/bin/bash
set -e

# Run as root or with sudo
# Usage: sudo bash install_node.sh

# Update OS
apt update && apt upgrade -y

# Install build essentials
apt install -y build-essential curl git

# Install Node.js (LTS)
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs

# Install pm2 globally
npm install -g pm2

# Install nginx
apt install -y nginx

# Start and enable nginx
systemctl enable nginx
systemctl start nginx

echo "Node.js, PM2 and Nginx installed."
node -v
npm -v
pm2 -v
