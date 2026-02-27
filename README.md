# Living Copy

## 🌐 About

This site is a space for me to share my journey into creative writing.
I'll add short works of fiction, blog posts, and include links to other articles
or publications I find interesting or useful. I want to pursue writing as a hobby and
potential income stream in more depth so this will allow me to document my findings and
creations as I develop as a writer and content creator.

## 🚀 Live Site

The site can be found [here](https://www.livingcopy.uk/)

## 🛠️ Built With

-   HTML / CSS / JavaScript
-   Nothing else

## 📁 Folder Structure

```text
├── css/                  # Site styling
├── data/                 # Data files for site content
├── img/                  # Images
├── js/                   # SIte interactivity
├── pages/                # Site HTML pages
├── .gitignore            # Ignore file
├── 404.html              # Custom 404 page
├── CNAME                 # GitHub Pages DNS name
├── CONTRIBUTING.md       # Repo contribution guidelines
├── index.html            # Site landing page
├── README.md             # This README.md file
├── robots.txt            # Web crawler instructions
└── sitemap.xml           # XML sitemap
```

## 🧑‍💻 How to Run Locally

```bash
# Clone the repo
git clone https://github.com/ajlmacmillan/ajlmacmillan.github.com.git
cd ajlmacmillan.github.com.git
xdg-open index.html
```

## 🧪 Tests

Tests are run using client-side JavaScript in the browser. They use the following 2 files only available in the `test` branch:

```bash
/pages/test/index.html
/js/tests.js
```

Clone the `test` branch

```bash
git clone --single-branch --branch test https://github.com/ajlmacmillan/ajlmacmillan.github.com.git
```

Then launch the app using a local HTTP server (I am using Python http.server)

```bash
python3 -m http.server 5000
```

To see the test cases:
 - Go to the Living Copy [test page](http://localhost:5000/pages/test/) in your browser
 - Open the `DevTools console` to see the test cases
 - Stop the local HTTP server to kill the connection

## 🙌 Contributing

Contributions are welcome if you find issues with the site. Please follow the [contributing guidelines](https://github.com/ajlmacmillan/ajlmacmillan.github.com/blob/main/CONTRIBUTING.md) and check for open [issues](https://github.com/ajlmacmillan/ajlmacmillan.github.com/issues).
