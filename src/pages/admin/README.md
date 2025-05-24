# CrashPlan Admin Panel

This is the admin panel for the CrashPlan engineering career guidance platform. It provides tools for monitoring and managing the application.

## Features

- **Dashboard**: Overview of key metrics and activity
- **Activity Logs**: Track user actions and system events
- **Settings**: Configure application settings and preferences
- **Responsive Design**: Works on desktop and mobile devices
- **Dark Mode**: Toggle between light and dark themes

## Setup

1. Make sure you have the required dependencies installed:
   ```bash
   npm install framer-motion react-chartjs-2 chart.js @heroicons/react react-icons
   ```

2. The admin panel is available at `/admin` route.

3. Use the following credentials to log in (configured in Firebase Authentication):
   - Email: admin@example.com
   - Password: (set in Firebase Console)

## Development

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

### Available Scripts

- `npm start`: Start the development server
- `npm run build`: Build the application for production
- `npm test`: Run tests
- `npm run eject`: Eject from Create React App

## Security

- All admin routes are protected and require authentication
- Only users with admin privileges can access the admin panel
- Sensitive operations require additional confirmation

## Contributing

1. Fork the repository
2. Create a new branch for your feature (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
