# Zen-Chrome-Spoofer
 A simple extension that spoofs your user agent to make websites think think that you are using chrome
 
 This was made with zen in mind but is compatible with firefox
## How to install:
1. Download/Clone this repository
2. Open your Zen/Firefox browser
3. Navigate to `about:debugging:` 
4. Locate and click on `This Zen` (or `This Firefox`)
5. Click on Load Temporary Add-on
6. Navigate to the Zen-Chrome-Spoofer folder you downloaded
7. Select the `manifest.json` file

## How to add more URLS:
*Extension pop-up is still **WIP** but you can do so manually via adding the url into the `"host_permissions"` and `"matches"` seciton inside `manifest.json` as well as creating another rule block inside `rules.json`*

## How to add another rule block:
1. Navigate to `rules.json`
2. Copy-paste [this](RULEBLOCK.md) block onto a new section:
4. Ensure that the `id` is unique, and the previous closing bracket ends with a comma (`},`)
5. Find the `urlFilter` and replace `||example.com` with your desired URL *(`||` used to enforce the rules to subdomains)*

## Why was this made?
This was made to bypass codechum's enforcement of using a chrome/edge browser which makes it a hassle to keep on switching between browsers since I mainly use Zen (a firefox fork).


p.s
*Will continue this project if I feel the need to, so dont expect anything*
