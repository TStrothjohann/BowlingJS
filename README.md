[![Build Status](https://travis-ci.org/TStrothjohann/BowlingJS.svg?branch=master)](https://travis-ci.org/TStrothjohann/BowlingJS)
[![Code Climate](https://codeclimate.com/github/TStrothjohann/BowlingJS/badges/gpa.svg)](https://codeclimate.com/github/TStrothjohann/BowlingJS)
[![Test Coverage](https://codeclimate.com/github/TStrothjohann/BowlingJS/badges/coverage.svg)](https://codeclimate.com/github/TStrothjohann/BowlingJS)

#A Bowling score card.

This was my first JavaScript project. It was a weekend challenge after week six at Makers Academy. Scoring a Bowling game isn't as trivial as one might think. The most tricky part was to award bonuses to frames [Scoring a Bowling game](http://en.wikipedia.org/wiki/Ten-pin_bowling#Scoring). I went back to the project to wire the logic up to a simple Angular front end.

##Features:

- You can enter how many pins have been knocked down
- The app keeps track of frames 
- It awards bonuses for spares and strikes
- It calculates the overall score

##Tech
- JavaScript, tested with Jasmine, run by Grunt
- Angular, e2e-tested with Protractor
- Express / node.js server
- Materialize CSS framework
- Travis Continuous Integration, Istanbul (test coverage) and Code Climate

##Issues:
- "Game over" is actually the last frame. There might be two more rolls after this. This is why I display "Last frame" instead of "Game over". 
- Frontend can't handle the extra rolls in final frame yet. It's implemented in the back end though. This is why in front end a perfect game doesn't end with 300 points.