// Overrides the navigator.userAgent property
Object.defineProperty(navigator, 'userAgent', {
  get: function() {
    return "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36";
  }
});

// Overrides the vendor property (Firefox is usually empty, Chrome is Google Inc.)
Object.defineProperty(navigator, 'vendor', {
  get: function() {
    return "Google Inc.";
  }
});