var activitySwitcher = {
  nextActivityIndex: 0,
  activities: workspace.activities,
  getNextActivity: function (direction) {
    if (direction === "forward") {
      if (this.nextActivityIndex < this.activities.length - 1) {
        this.nextActivityIndex++;
      } else {
        this.nextActivityIndex = 0;
      }
    } else if (direction === "backward") {
      if (this.nextActivityIndex > 0) {
        this.nextActivityIndex--;
      } else {
        this.nextActivityIndex = this.activities.length - 1;
      }
    }
    console.error(this.nextActivityIndex);
    return this.activities[this.nextActivityIndex];
  }
};

function moveToActivity(client, activity, switchOver) {
  const activities = client.activities
  if (!activities.includes(activity)) {
    client.activities = [activity]
    if (switchOver) workspace.currentActivity = activity
  }
}

function getMoveableClients(all) {
  return all.filter((c) => (c.moveable))
}

function allWindowsToNextActivityAndSwitch() {
  const activity = activitySwitcher.getNextActivity("forward")
  const moveable = getMoveableClients(workspace.windowList())
  for (var client of moveable) {
    moveToActivity(client, activity, true)
  }
}

function allWindowsToNextActivity() {
  const activity = activitySwitcher.getNextActivity("forward")
  const moveable = getMoveableClients(workspace.windowList())
  for (var client of moveable) {
    moveToActivity(client, activity, false)
  }
}

function allWindowsToPrevActivityAndSwitch() {
  const activity = activitySwitcher.getNextActivity("backward")
  const moveable = getMoveableClients(workspace.windowList())
  for (var client of moveable) {
    moveToActivity(client, activity, true)
  }
}

function allWindowsToPrevActivity() {
  const activity = activitySwitcher.getNextActivity("backward")
  const moveable = getMoveableClients(workspace.windowList())
  for (var client of moveable) {
    moveToActivity(client, activity, false)
  }
}

function allWindowsToCurrentActivity() {
  const activity = workspace.currentActivity
  const moveable = getMoveableClients(workspace.windowList())
  for (var client of moveable) {
    moveToActivity(client, activity, false)
  }
}

function activeWindowToNextActivityAndSwitch() {
  const activity = activitySwitcher.getNextActivity("forward")
  window = workspace.activeWindow
  if (!window.moveable) return
  moveToActivity(window, activity, true)
}

function activeWindowToNextActivity() {
  const activity = activitySwitcher.getNextActivity("forward")
  window = workspace.activeWindow
  if (!window.moveable) return
  moveToActivity(window, activity, false)
}

function activeWindowToPrevActivityAndSwitch() {
  const activity = activitySwitcher.getNextActivity("backward")
  window = workspace.activeWindow
  if (!window.moveable) return
  moveToActivity(window, activity, true)
}

function activeWindowToPrevActivity() {
  const activity = activitySwitcher.getNextActivity("backward")
  window = workspace.activeWindow
  if (!window.moveable) return
  moveToActivity(window, activity, false)
}

function allWindowsInAllActivities() {
  const moveable = getMoveableClients(workspace.windowList())
  for (var client of moveable) {
    client.activities = workspace.activities
  }
}

function activeWindowInAllActivities() {
  window = workspace.activeWindow
  if (!window.moveable) return
  window.activities = workspace.activities
}

registerShortcut("allWindowsToNextActivityAndSwitch", "[WAS] Move all windows to next activity and switch", "Meta+Shift+P", allWindowsToNextActivityAndSwitch);
registerShortcut("allWindowsToNextActivity", "[WAS] Move all windows to next activity", "", allWindowsToNextActivity);

registerShortcut("allWindowsToPrevActivityAndSwitch", "[WAS] Move all windows to previous activity and switch", "", allWindowsToPrevActivityAndSwitch);
registerShortcut("allWindowsToPrevActivity", "[WAS] Move all windows to previous activity", "", allWindowsToPrevActivity);

registerShortcut("allWindowsToCurrentActivity", "[WAS] Move all windows to currrent activity", "", allWindowsToCurrentActivity);
registerShortcut("allWindowsInAllActivities", "[WAS] All windows in all activities", "", allWindowsInAllActivities);

registerShortcut("activeWindowToNextActivityAndSwitch", "[WAS] Active window to next activity and switch", "", activeWindowToNextActivityAndSwitch);
registerShortcut("activeWindowToNextActivity", "[WAS] Active window to next activity", "", activeWindowToNextActivity);

registerShortcut("activeWindowToPrevActivityAndSwitch", "[WAS] Active window to previous activity and switch", "", activeWindowToPrevActivityAndSwitch);
registerShortcut("activeWindowToPrevActivity", "[WAS] Active window to previous activity", "", activeWindowToPrevActivity);

registerShortcut("activeWindowInAllActivities", "[WAS] Active window in all activities", "", activeWindowInAllActivities);
