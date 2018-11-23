import React, { Component } from 'react';
import portraitface from './portrait-face.png';
import name from './main-name-retro.png';
import cometblue from './comet-blue.png';
import cometyellow from './comet-yellow.png';
import cometorange from './comet-orange.png';
import starwhite from './star-white.png';
import underdevtxt from './under-dev-txt.png';

import alien1 from './alien1.png';
import alien2 from './alien2.png';
import alien3 from './alien3.png';

import spaceychat from './spacey-chat.png';
import './App.css';
import { findDOMNode } from 'react-dom';
import $ from 'jquery';

class App extends Component{
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    var bodyWidth = document.body.clientWidth;
    var bodyHeight = document.body.clientHeight;

    var calculateRandomCoord = function (star, maxHeight) {
      
      star.each(function() {
        var ele = $(this);
        var randPosX = Math.floor((Math.random()*bodyWidth));
        var randPosY = Math.floor((Math.random()*bodyHeight));
        var height = Math.floor((Math.random()*maxHeight));
        ele.css('left', randPosX);
        ele.css('top', randPosY); 
        ele.height(height);

      });  
    }
    
    calculateRandomCoord($(".star1"), 25);
    //calculateRandomCoord($(".star1"), 7);

    $("#name-retro").animate({right: "+=5000px", bottom: "+=5000px"}, 3000, "swing", function() {
      var bottomOff = $("#name-retro").height();
      var leftOff = $("#name-retro").offset().left;
      $(".alien").css({bottom: bottomOff + "px", left: leftOff});
      $(".alien").show();
      setTimeout(function(){
        $(".chat").show();
        var h = $(".alien").height();
        var w = $(".alien").width();
        $(".chat").css({bottom: bottomOff + h - 20 + "px", left: leftOff + w + 5 + "px"});
        $(".chat").css({"max-height": h+30});
      },2000);
      
    });

    
    setInterval(function () {
      $("#comet2").animate({left: "+=3000px", bottom: "+=3000px"}, 6000, "swing", function(){
          var left1 = Math.floor((Math.random() * 1.0 * bodyWidth));
          var newheight = Math.floor((Math.random() * 1.0 * 150) + 70);
          $("#comet2").css({left: left1 + "px", bottom: -50});
          $("#comet2").height(newheight);
        }
      );      
      
    }, 3200);
    setInterval(function () {
      $("#comet1").animate({left: "+=3000px", top: "+=3000px"}, 5000, "swing", function(){
            var left2 = Math.floor((Math.random() * 1.0 * bodyWidth));
            var newheight = Math.floor((Math.random() * 1.0 * 75) + 10);
            $("#comet1").height(newheight);
            $("#comet1").css({left: left2 + "px", top:-50});
          }
        );
    }, 2000);     

    setInterval(function () {
      $("#comet3").animate({left: "-=3000px", top: "+=3000px"}, 4000, "swing", function(){
            var left2 = Math.floor((Math.random() * 1.0 * bodyWidth));
            var newheight = Math.floor((Math.random() * 1.0 * 75) + 10);
            $("#comet3").height(newheight);
            $("#comet3").css({left: left2 + "px", top:-50});
          }
        );
    }, 2800);

    var animateAlien = function() {
      var a1 = $("#alien1");
      var a2 = $("#alien2");
      var a3 = $("#alien3");
      
      setInterval(function() {
        a1.show();
        a2.hide();
        a3.hide();
        
        setTimeout( function() {
                a2.show();
                a1.hide();
                a3.hide();
          setTimeout( function() {
                    a1.hide();
                    a2.hide();
                    a3.show();
            setTimeout( function() {
                        a1.hide();
                        a2.show();
                        a3.hide();
              setTimeout( function() {
                            a1.show();
                            a2.hide();
                            a3.hide();
                        },100); 
                    },100);
                },100);
            },100);
        }, 8000);
    }
    animateAlien();
  }
  renderStars() {
    var isWebkit = /Webkit/i.test(navigator.userAgent),
      isChrome = /Chrome/i.test(navigator.userAgent),
      isMobile = !!("ontouchstart" in window),
      isAndroid = /Android/i.test(navigator.userAgent),
      isIE = document.documentMode;

      var dotsCount = 60,
      dotsHtml = [];
      dotsCount = isMobile ? (isAndroid ? 220 : 300) : (isChrome ? 600 : 500);

      for (var i = 0; i < dotsCount; i++) {
        dotsHtml.push(<img className='star1' src={starwhite}></img>);
      }
      return dotsHtml;
  }

  render() {
    return (
      <div className="App">
        <img id="underdev" src={underdevtxt}></img>
        <img id="comet1" src={cometblue}></img>
        <img id="comet2" src={cometyellow}></img>  
        <img id="comet3" src={cometorange}></img>   

        <div className="stars">
            {this.renderStars()}

        </div>
        <img className="alien" id = "alien2" src={alien2}></img>
        <img className="alien" id = "alien3" src={alien3}></img>
        <img className="alien" id = "alien1" src={alien1}></img>
        <img className="chat" src={spaceychat}></img>

        <div className="Name-Main" style={{marginLeft: "0px", marginBottom: "0px"}}>
          <img id="name-retro" src={name}></img>
        </div>      
      </div>
    );
  }
}

export default App;
