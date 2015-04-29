[![Build Status](https://travis-ci.org/TStrothjohann/BowlingJS.svg?branch=master)](https://travis-ci.org/TStrothjohann/BowlingJS)
[![Code Climate](https://codeclimate.com/github/TStrothjohann/BowlingJS/badges/gpa.svg)](https://codeclimate.com/github/TStrothjohann/BowlingJS)
[![Test Coverage](https://codeclimate.com/github/TStrothjohann/BowlingJS/badges/coverage.svg)](https://codeclimate.com/github/TStrothjohann/BowlingJS)

A Bowling score card.


## Ways the game can end
- All fresh frames gone. No strike or spare in the 10th frame.
- spare in the 10th frame: One bonus roll (no matter if bonus roll is a strike or not.)
- strike in the 10th frame. Complete bonus frame with two rolls. Both could be strikes without effect.


##Issues:
- "Game over" is actually the last frame. There might be two more rolls after this. This is why I display "Last frame" instead of "Game over". 
- Frontend can't handle the extra rolls in final frame yet. It's implemented in the back end though. This is why in front end a perfect game doesn't end with 300 points. 
