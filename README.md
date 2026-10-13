# 🛒 BazarDor — বাজার দর

BazarDor is a responsive Bangla market price website that helps users explore daily prices of essential products in Bangladesh. Users can browse products, compare prices across markets, view price changes, and sign in to access protected product details.

## ✨ Features

- **Daily Market Prices:** Browse essential products with current, minimum, and maximum prices.
- **Price Change Tracking:** Explore products whose prices have increased, decreased, or remained unchanged.
- **Product Categories:** Browse products by category, including rice and vegetables.
- **Market Comparison:** Compare product prices across different markets in Bangladesh.
- **Authentication:** Sign up and sign in using Better Auth, with support for social login configuration.
- **Responsive Design:** Enjoy a user-friendly experience on mobile, tablet, and desktop devices.
- **Profile Management:** View and update your account profile.

## 🛠️ Technologies Used

- Next.js (App Router)
- React
- JavaScript (JSX)
- Tailwind CSS
- Better Auth
- MongoDB
- React Hot Toast
- Lucide React

## 🚀 Getting Started

### Prerequisites

- Node.js and npm
- MongoDB connection URI

### Installation

1. Clone the repository:

   ```bash
   git clone YOUR_GITHUB_REPOSITORY_URL
   ```

2. Navigate to the project directory:

   ```bash
   cd my-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env.local` file in the project root and configure the required environment variables:

   ```env
   BETTER_AUTH_SECRET=your_secret_key
   BETTER_AUTH_URL=http://localhost:3000
   MONGODB_URI=your_mongodb_connection_uri
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   GITHUB_CLIENT_ID=your_github_client_id
   GITHUB_CLIENT_SECRET=your_github_client_secret
   ```

   Configure Google and GitHub credentials if you want to enable those social login providers.

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```text
my-app/
├── src/
│   ├── app/
│   │   ├── api/auth/[...all]/
│   │   ├── categories/[slug]/
│   │   ├── product/[slug]/
│   │   ├── products/
│   │   ├── profile/
│   │   ├── signin/
│   │   ├── signup/
│   │   ├── layout.js
│   │   └── page.js
│   ├── components/
│   ├── data/
│   └── lib/
├── public/
├── package.json
└── README.md
```

## 🔐 Security Notes

- Never commit `.env` or `.env.local` files to GitHub.
- Keep database credentials, authentication secrets, and OAuth secrets private.
- Replace demo product prices with verified market data before using this project for real-world price reporting.

## 📌 Important Note

Product prices included during development may be sample data and should not be treated as verified live market prices.

## 👨‍💻 Author

Developed as a web development project using Next.js, JavaScript, and Better Auth.

