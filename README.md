# Zen-Chrome-Spoofer

A simple extension that spoofs your user agent to make websites think that you are using Google Chrome.

## How to Install (Permanent)

Because Zen is based on Firefox, "Temporary Add-ons" are deleted every time you close the browser. Follow these steps to install the spoofer permanently.

### 1. Enable Unsigned Extensions

Open Zen and type `about:config` in the address bar.

Click "Accept the Risk and Continue".

Search for `xpinstall.signatures.required` and double-click it to set it to `false`.

### 2. Prepare the Extension File

Open the Zen-Chrome-Spoofer folder on your computer.

Select the files inside (e.g., manifest.json, content.js, and rules.json).

Right-click and compress them into a ZIP file.

**Note:** Do not zip the parent folder; zip the files directly.

Rename the new file from `something.zip` to `Zen-Chrome-Spoofer.xpi`.

### 3. Install to Zen

Type `about:addons` in your Zen address bar.

Drag and drop your `Zen-Chrome-Spoofer.xpi` file directly into the browser window.

Click Add when the permission prompt appears.

## How to Install (Temporary/Development)

If you are actively editing the code and don't mind it disappearing after a restart:

Navigate to `about:debugging`.

Click on **This Zen** in the sidebar.

Click **Load Temporary Add-on...**.

Select the `manifest.json` file inside your project folder.
