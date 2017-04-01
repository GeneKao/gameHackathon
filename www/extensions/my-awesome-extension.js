// Content for 'my-awesome-extension.js'

function MyAwesomeExtension(viewer, options) {
  Autodesk.Viewing.Extension.call(this, viewer, options);
}

MyAwesomeExtension.prototype = Object.create(Autodesk.Viewing.Extension.prototype);
MyAwesomeExtension.prototype.constructor = MyAwesomeExtension;

MyAwesomeExtension.prototype.load = function() {
  alert('MyAwesomeExtension is loaded!');
  return true;
};

MyAwesomeExtension.prototype.unload = function() {
  alert('MyAwesomeExtension is now unloaded!');
  return true;
};

var config3d = {
  extensions: ['MyAwesomeExtension']
};
debugger
var viewerApp = new Autodesk.Viewing.ViewingApplication('MyViewerDiv');
viewerApp.registerViewer(viewerApp.k3D, Autodesk.Viewing.Private.GuiViewer3D, config3d);

Autodesk.Viewing.theExtensionManager.registerExtension('MyAwesomeExtension', MyAwesomeExtension);

MyAwesomeExtension.prototype.load = function() {
  // alert('MyAwesomeExtension is loaded!');

  var viewer = this.viewer;

  var lockBtn = document.getElementById('MyAwesomeLockButton');
  lockBtn.addEventListener('click', function() {
    viewer.setNavigationLock(true);
  });

  var unlockBtn = document.getElementById('MyAwesomeUnlockButton');
  unlockBtn.addEventListener('click', function() {
    viewer.setNavigationLock(false);
  });

  return true;
};
