# 🎄 Candy Cane Mail 💌

*A cozy Christmas-themed mini-mailbox website for my friends & mutuals.*

## ✨ Overview

Candy Cane Mail is a cute, Christmas-inspired “inbox” website where each friend gets their own secret message.
It also includes **Bookmas**, a second page recommending books I loved this year — complete with filters, covers, and EPUB downloads.

---

# 📁 Project Structure

```
candycanemail/
│
├── index.html               # Main inbox + magical Christmas mail UI
├── styles.css               # Cozy main styling
├── script.js                # Password logic, email view logic, snow trail ✨
│
├── bookmas.html             # Book recommendation page
├── bookmas.css              # Bookmas-specific styling
│
├── logo.png                 
├── paper-plane.png/         
├── epubs/                   # EPUB downloads for recommended books
└── favicon.co/                   # Custom Christmas font
```

---

# 💌 Candy Cane Mail Features

* 📬 **Inbox-style layout** with clickable message previews
* 🔐 **Password-protected private messages**
* 💖 **Festive UI** w/ gradients, icons, and Christmas fonts
* ❄️ **Snow trail animation** that follows the cursor
* 📱 **Fully responsive mobile-friendly design**
* 🎁 **Cute footer + bookmas link**

---

# 📚 Bookmas — Book Recommendation Page

Bookmas is a festive mini-library where I share books I’ve loved.
It includes:

### ✨ Features

* 🏷️ **Genre filter bar** (Fantasy, Mystery, YA, Gothic, Romance, etc.)
* 📘 **Book grid layout** with cover thumbnails
* 📝 **Snippets + short descriptions**
* 📥 **One-click EPUB download** for each book
* 🌟 Smooth card hover interactions
* 🎄 A soft Christmas aesthetic

### 📦 The Book Data

Each book lives in a JavaScript array like:

```js
{
  id: 1,
  title: "Ace of Spades – Faridah Àbíké-Íyímídé",
  category: "Thriller",
  thumbnail: "cover-url.jpg",
  snippet: "Gossip Girl meets Get Out...",
  epub: "epubs/ace-of-spades.epub"
}
```

The script dynamically builds the grid and handles filtering + downloads.

---

# 🔐 Password System (Main Page)

Passwords are stored in `script.js` (lightweight, cute, not serious security):

```js
const passwords = {
  Stefan: "sunflower",
  Damon: "chaoswine",
  Bonnie: "witchy",
  Elena: "historybuff",
  Caroline: "partytime",
  Elijah: "gentleman"
};
```

This simply checks with `prompt()` before showing a message.

---

# 🚀 Deployment

This project is fully static and runs on any free hosting platform:
* **Netlify**

Just upload all files, ensure your homepage is `index.html`, and you’re ready.

---

# 🌟 Run Locally

1. Download the project
2. Open `index.html` or `bookmas.html` in your browser
3. Enjoy the Christmas magic ✨

---

# 💝 Credits

Created with love for my friends + Twitter mutuals.
Fonts: Google Fonts + Santa’s Air Mail.
Icons: Font Awesome.
Book covers belong to their original publishers/authors.

---

# 🎄 Final Wish

> I hope this little corner of the internet brings you some warmth, smiles, and cozy Christmas vibes.
> Thanks for visiting Candy Cane Mail! 💌📚✨
