# Window Activity Switcher

A KWin script to switch windows between activities using shortcuts. Initially made to expose those actions to [Panel Spacer Extended](https://github.com/luisbocanegra/plasma-panel-spacer-extended) widget.

## Features

- All windows to previous/next activity
  - The same and switch to it
- Active window to previous/next activity
  - The same and switch to it
- Active window in all activities
- All windows to current activity
- All windows in all activities

### Installation via graphical interface

1. **TODO** ~~Install the script via *System Settings* > *Window Management* > *KWin Scripts* > *Get New Scripts …* > search for *Window Activity Switcher* > *Install*.~~
2. ~~Enable the script by activating its checkbox, and apply the settings.~~

### Installation from command line

```sh
git clone https://github.com/luisbocanegra/kwin-window-activity-switcher.git
cd kwin-window-activity-switcher
./install.sh
```

## Configuration

1. *System Settings* > *Keyboard* > *Shortcuts*
2. From the list on the left select *KWin*
3. Search for "[WAS]" or "activity" and *Add custom shortcut* to each desired action
