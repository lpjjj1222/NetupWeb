
<div align="center" width="100%">
    <img src="./apps/nextjs/public/newBigLogo.png" width="128" alt="" />
</div>

# Netup </br>


### 📋 Prerequisites

Before you start, make sure you have the following installed:

1. [Bun](https://bun.sh/) & [Node.js](https://nodejs.org/) & [Git](https://git-scm.com/)

   1. Linux

    ```bash
      curl -sL https://gist.github.com/tianzx/874662fb204d32390bc2f2e9e4d2df0a/raw -o ~/downloaded_script.sh && chmod +x ~/downloaded_script.sh && source ~/downloaded_script.sh
    ```

   2. MacOS

    ```bash
      /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
      brew install git
      brew install oven-sh/bun/bun
      brew install nvm
    ```

### Installation

```bash
git clone https://github.com/lpjjj1222/NetupWeb.git
bun install
```

### Setup
Follow these steps to set up your project:

1. Add the file .env.local to the root

2. Set up the environment variables:

```bash
cp .env.example .env.local
```

3. Run the development server:

```bash
bun run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

5. (Optional alpha)`bun run tailwind-config-viewer` Open [http://localhost:3333](http://localhost:3333) in your browser to see your Tailwind CSS configuration