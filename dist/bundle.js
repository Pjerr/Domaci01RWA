(()=>{"use strict";var t=function(){function t(t,e,n,o){this.title=t,this.author=e,this.length=n,this.year=o,this.title=t,this.author=e,this.length=n,this.year=o}return t.prototype.showInfo=function(){return"Title: "+this.title+", author: "+this.author+", year: "+this.year+", lenght: "+this.length},t.prototype.getLength=function(){return this.length},t}(),e=function(){function t(t){this.songs=t,this.songs=[]}return t.prototype.showAlbum=function(t){var e;this.clearBox("album");for(var n=0;n<this.songs.length;n++)e=document.createElement("pre"),t.appendChild(e),(e=document.createElement("label")).innerHTML=this.songs[n].showInfo(),t.appendChild(e),e=document.createElement("pre"),t.appendChild(e);console.log(this.songs)},t.prototype.addSong=function(t){this.songs.push(t)},t.prototype.removeSong=function(t){this.songs=this.songs.filter((function(e){return e!==t}))},t.prototype.compareObjects=function(t,e){var n=parseFloat(t.getLength()),o=parseFloat(e.getLength());return n>o?1:n<o?-1:0},t.prototype.sortSongsByLenght=function(t){var e,n=this;this.clearBox("album"),this.songs.sort((function(t,e){return n.compareObjects(t,e)}));for(var o=0;o<this.songs.length;o++)e=document.createElement("pre"),t.appendChild(e),(e=document.createElement("label")).innerHTML=this.songs[o].showInfo(),t.appendChild(e),e=document.createElement("pre"),t.appendChild(e);console.log(this.songs)},t.prototype.clearBox=function(t){document.getElementById(t).innerHTML=""},t}(),n=new t("Smells like teen spirit","Nirvana","5:01",1991),o=new t("In Bloom","Nirvana","4:41",1991),r=new t("Breed","Nirvana","3:03",1991),s=new t("Drain you","Nirvana","3:43",1991),i=new t("Come as you are","Nirvana","3:39",1991),a=new e(void 0);a.addSong(n),a.addSong(o),a.addSong(r),a.addSong(s),a.addSong(i),document.getElementById("show").addEventListener("click",(function(t){return a.showAlbum(document.getElementById("album"))})),document.getElementById("sort").addEventListener("click",(function(t){return a.sortSongsByLenght(document.getElementById("album"))}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb21hY2kwMS8uL3NyYy9zb25nLnRzIiwid2VicGFjazovL2RvbWFjaTAxLy4vc3JjL2FsYnVtLnRzIiwid2VicGFjazovL2RvbWFjaTAxLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbIlNvbmciLCJ0aXRsZSIsImF1dGhvciIsImxlbmd0aCIsInllYXIiLCJ0aGlzIiwicHJvdG90eXBlIiwic2hvd0luZm8iLCJnZXRMZW5ndGgiLCJBbGJ1bSIsInNvbmdzIiwic2hvd0FsYnVtIiwiaG9zdCIsIngiLCJjbGVhckJveCIsImkiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImlubmVySFRNTCIsImNvbnNvbGUiLCJsb2ciLCJhZGRTb25nIiwicyIsInB1c2giLCJyZW1vdmVTb25nIiwiZmlsdGVyIiwib2JqIiwiY29tcGFyZU9iamVjdHMiLCJvYmoxIiwib2JqMiIsImwxIiwibDIiLCJzb3J0U29uZ3NCeUxlbmdodCIsIl90aGlzIiwic29ydCIsInMxIiwiczIiLCJlbGVtZW50SUQiLCJnZXRFbGVtZW50QnlJZCIsInMzIiwiczQiLCJzNSIsImFsYnVtIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiXSwibWFwcGluZ3MiOiJtQkFBQSxJQUFJQSxFQUFzQixXQUN0QixTQUFTQSxFQUFLQyxFQUFPQyxFQUFRQyxFQUFRQyxHQUNqQ0MsS0FBS0osTUFBUUEsRUFDYkksS0FBS0gsT0FBU0EsRUFDZEcsS0FBS0YsT0FBU0EsRUFDZEUsS0FBS0QsS0FBT0EsRUFDWkMsS0FBS0osTUFBUUEsRUFDYkksS0FBS0gsT0FBU0EsRUFDZEcsS0FBS0YsT0FBU0EsRUFDZEUsS0FBS0QsS0FBT0EsRUFTaEIsT0FQQUosRUFBS00sVUFBVUMsU0FBVyxXQUV0QixNQUFPLFVBQVlGLEtBQUtKLE1BQVEsYUFBZUksS0FBS0gsT0FBUyxXQUFhRyxLQUFLRCxLQUFPLGFBQWVDLEtBQUtGLFFBRTlHSCxFQUFLTSxVQUFVRSxVQUFZLFdBQ3ZCLE9BQU9ILEtBQUtGLFFBRVRILEVBbEJjLEdDQXJCUyxFQUF1QixXQUN2QixTQUFTQSxFQUFNQyxHQUNYTCxLQUFLSyxNQUFRQSxFQUNiTCxLQUFLSyxNQUFRLEdBa0RqQixPQWhEQUQsRUFBTUgsVUFBVUssVUFBWSxTQUFVQyxHQUVsQyxJQUFJQyxFQURKUixLQUFLUyxTQUFTLFNBRWQsSUFBSyxJQUFJQyxFQUFJLEVBQUdBLEVBQUlWLEtBQUtLLE1BQU1QLE9BQVFZLElBQ25DRixFQUFJRyxTQUFTQyxjQUFjLE9BQzNCTCxFQUFLTSxZQUFZTCxJQUNqQkEsRUFBSUcsU0FBU0MsY0FBYyxVQUN6QkUsVUFBWWQsS0FBS0ssTUFBTUssR0FBR1IsV0FDNUJLLEVBQUtNLFlBQVlMLEdBQ2pCQSxFQUFJRyxTQUFTQyxjQUFjLE9BQzNCTCxFQUFLTSxZQUFZTCxHQUVyQk8sUUFBUUMsSUFBSWhCLEtBQUtLLFFBRXJCRCxFQUFNSCxVQUFVZ0IsUUFBVSxTQUFVQyxHQUNoQ2xCLEtBQUtLLE1BQU1jLEtBQUtELElBRXBCZCxFQUFNSCxVQUFVbUIsV0FBYSxTQUFVRixHQUNuQ2xCLEtBQUtLLE1BQVFMLEtBQUtLLE1BQU1nQixRQUFPLFNBQVVDLEdBQU8sT0FBT0EsSUFBUUosTUFFbkVkLEVBQU1ILFVBQVVzQixlQUFpQixTQUFVQyxFQUFNQyxHQUM3QyxJQUFJQyxFQUFLLFdBQWFGLEVBQUtyQixhQUN2QndCLEVBQUssV0FBYUYsRUFBS3RCLGFBQzNCLE9BQUl1QixFQUFLQyxFQUNFLEVBQ1BELEVBQUtDLEdBQ0csRUFDTCxHQUVYdkIsRUFBTUgsVUFBVTJCLGtCQUFvQixTQUFVckIsR0FDMUMsSUFHSUMsRUFIQXFCLEVBQVE3QixLQUNaQSxLQUFLUyxTQUFTLFNBQ2RULEtBQUtLLE1BQU15QixNQUFLLFNBQVVDLEVBQUlDLEdBQU0sT0FBUUgsRUFBTU4sZUFBZVEsRUFBSUMsTUFFckUsSUFBSyxJQUFJdEIsRUFBSSxFQUFHQSxFQUFJVixLQUFLSyxNQUFNUCxPQUFRWSxJQUNuQ0YsRUFBSUcsU0FBU0MsY0FBYyxPQUMzQkwsRUFBS00sWUFBWUwsSUFDakJBLEVBQUlHLFNBQVNDLGNBQWMsVUFDekJFLFVBQVlkLEtBQUtLLE1BQU1LLEdBQUdSLFdBQzVCSyxFQUFLTSxZQUFZTCxHQUNqQkEsRUFBSUcsU0FBU0MsY0FBYyxPQUMzQkwsRUFBS00sWUFBWUwsR0FFckJPLFFBQVFDLElBQUloQixLQUFLSyxRQUVyQkQsRUFBTUgsVUFBVVEsU0FBVyxTQUFVd0IsR0FDakN0QixTQUFTdUIsZUFBZUQsR0FBV25CLFVBQVksSUFFNUNWLEVBckRlLEdDR3RCMkIsRUFBSyxJQUFJcEMsRUFBSywwQkFBMkIsVUFBVyxPQUFRLE1BQzVEcUMsRUFBSyxJQUFJckMsRUFBSyxXQUFZLFVBQVcsT0FBUSxNQUM3Q3dDLEVBQUssSUFBSXhDLEVBQUssUUFBUyxVQUFXLE9BQVEsTUFDMUN5QyxFQUFLLElBQUl6QyxFQUFLLFlBQWEsVUFBVyxPQUFRLE1BQzlDMEMsRUFBSyxJQUFJMUMsRUFBSyxrQkFBbUIsVUFBVyxPQUFRLE1BQ3BEMkMsRUFBUSxJQUFJbEMsT0FOWkMsR0FPSmlDLEVBQU1yQixRQUFRYyxHQUNkTyxFQUFNckIsUUFBUWUsR0FDZE0sRUFBTXJCLFFBQVFrQixHQUNkRyxFQUFNckIsUUFBUW1CLEdBQ2RFLEVBQU1yQixRQUFRb0IsR0FDQTFCLFNBQVN1QixlQUFlLFFBQzlCSyxpQkFBaUIsU0FBUyxTQUFVQyxHQUFLLE9BQU9GLEVBQU1oQyxVQUFVSyxTQUFTdUIsZUFBZSxhQUNsRnZCLFNBQVN1QixlQUFlLFFBQzlCSyxpQkFBaUIsU0FBUyxTQUFVQyxHQUFLLE9BQU9GLEVBQU1WLGtCQUFrQmpCLFNBQVN1QixlQUFlLGMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFNvbmcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBTb25nKHRpdGxlLCBhdXRob3IsIGxlbmd0aCwgeWVhcikge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLmF1dGhvciA9IGF1dGhvcjtcclxuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcclxuICAgICAgICB0aGlzLnllYXIgPSB5ZWFyO1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLmF1dGhvciA9IGF1dGhvcjtcclxuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcclxuICAgICAgICB0aGlzLnllYXIgPSB5ZWFyO1xyXG4gICAgfVxyXG4gICAgU29uZy5wcm90b3R5cGUuc2hvd0luZm8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhgVGl0bGU6ICR7dGhpcy50aXRsZX0sIGF1dGhvcjogJHt0aGlzLmF1dGhvcn0sIHNjb3JlOiAke3RoaXMueWVhcn0sIGxlbmdodDogJHt0aGlzLmxlbmd0aH1gKTtcclxuICAgICAgICByZXR1cm4gXCJUaXRsZTogXCIgKyB0aGlzLnRpdGxlICsgXCIsIGF1dGhvcjogXCIgKyB0aGlzLmF1dGhvciArIFwiLCB5ZWFyOiBcIiArIHRoaXMueWVhciArIFwiLCBsZW5naHQ6IFwiICsgdGhpcy5sZW5ndGg7XHJcbiAgICB9O1xyXG4gICAgU29uZy5wcm90b3R5cGUuZ2V0TGVuZ3RoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxlbmd0aDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gU29uZztcclxufSgpKTtcclxuZXhwb3J0IHsgU29uZyB9O1xyXG4iLCJ2YXIgQWxidW0gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBBbGJ1bShzb25ncykge1xyXG4gICAgICAgIHRoaXMuc29uZ3MgPSBzb25ncztcclxuICAgICAgICB0aGlzLnNvbmdzID0gW107XHJcbiAgICB9XHJcbiAgICBBbGJ1bS5wcm90b3R5cGUuc2hvd0FsYnVtID0gZnVuY3Rpb24gKGhvc3QpIHtcclxuICAgICAgICB0aGlzLmNsZWFyQm94KCdhbGJ1bScpO1xyXG4gICAgICAgIHZhciB4O1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zb25ncy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncHJlJyk7XHJcbiAgICAgICAgICAgIGhvc3QuYXBwZW5kQ2hpbGQoeCk7XHJcbiAgICAgICAgICAgIHggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgICAgICB4LmlubmVySFRNTCA9IHRoaXMuc29uZ3NbaV0uc2hvd0luZm8oKTtcclxuICAgICAgICAgICAgaG9zdC5hcHBlbmRDaGlsZCh4KTtcclxuICAgICAgICAgICAgeCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ByZScpO1xyXG4gICAgICAgICAgICBob3N0LmFwcGVuZENoaWxkKHgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNvbmdzKTtcclxuICAgIH07XHJcbiAgICBBbGJ1bS5wcm90b3R5cGUuYWRkU29uZyA9IGZ1bmN0aW9uIChzKSB7XHJcbiAgICAgICAgdGhpcy5zb25ncy5wdXNoKHMpO1xyXG4gICAgfTtcclxuICAgIEFsYnVtLnByb3RvdHlwZS5yZW1vdmVTb25nID0gZnVuY3Rpb24gKHMpIHtcclxuICAgICAgICB0aGlzLnNvbmdzID0gdGhpcy5zb25ncy5maWx0ZXIoZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICE9PSBzOyB9KTtcclxuICAgIH07XHJcbiAgICBBbGJ1bS5wcm90b3R5cGUuY29tcGFyZU9iamVjdHMgPSBmdW5jdGlvbiAob2JqMSwgb2JqMikge1xyXG4gICAgICAgIHZhciBsMSA9IChwYXJzZUZsb2F0KShvYmoxLmdldExlbmd0aCgpKTtcclxuICAgICAgICB2YXIgbDIgPSAocGFyc2VGbG9hdCkob2JqMi5nZXRMZW5ndGgoKSk7XHJcbiAgICAgICAgaWYgKGwxID4gbDIpXHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIGlmIChsMSA8IGwyKVxyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9O1xyXG4gICAgQWxidW0ucHJvdG90eXBlLnNvcnRTb25nc0J5TGVuZ2h0ID0gZnVuY3Rpb24gKGhvc3QpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuY2xlYXJCb3goJ2FsYnVtJyk7XHJcbiAgICAgICAgdGhpcy5zb25ncy5zb3J0KGZ1bmN0aW9uIChzMSwgczIpIHsgcmV0dXJuIChfdGhpcy5jb21wYXJlT2JqZWN0cyhzMSwgczIpKTsgfSk7XHJcbiAgICAgICAgdmFyIHg7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNvbmdzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwcmUnKTtcclxuICAgICAgICAgICAgaG9zdC5hcHBlbmRDaGlsZCh4KTtcclxuICAgICAgICAgICAgeCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgICAgIHguaW5uZXJIVE1MID0gdGhpcy5zb25nc1tpXS5zaG93SW5mbygpO1xyXG4gICAgICAgICAgICBob3N0LmFwcGVuZENoaWxkKHgpO1xyXG4gICAgICAgICAgICB4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncHJlJyk7XHJcbiAgICAgICAgICAgIGhvc3QuYXBwZW5kQ2hpbGQoeCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc29uZ3MpO1xyXG4gICAgfTtcclxuICAgIEFsYnVtLnByb3RvdHlwZS5jbGVhckJveCA9IGZ1bmN0aW9uIChlbGVtZW50SUQpIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50SUQpLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEFsYnVtO1xyXG59KCkpO1xyXG5leHBvcnQgeyBBbGJ1bSB9O1xyXG4iLCJpbXBvcnQgeyBTb25nIH0gZnJvbSBcIi4vc29uZ1wiO1xyXG5pbXBvcnQgeyBBbGJ1bSB9IGZyb20gXCIuL2FsYnVtXCI7XHJcbnZhciBzb25ncztcclxudmFyIHMxID0gbmV3IFNvbmcoXCJTbWVsbHMgbGlrZSB0ZWVuIHNwaXJpdFwiLCBcIk5pcnZhbmFcIiwgXCI1OjAxXCIsIDE5OTEpO1xyXG52YXIgczIgPSBuZXcgU29uZyhcIkluIEJsb29tXCIsIFwiTmlydmFuYVwiLCBcIjQ6NDFcIiwgMTk5MSk7XHJcbnZhciBzMyA9IG5ldyBTb25nKFwiQnJlZWRcIiwgXCJOaXJ2YW5hXCIsIFwiMzowM1wiLCAxOTkxKTtcclxudmFyIHM0ID0gbmV3IFNvbmcoXCJEcmFpbiB5b3VcIiwgXCJOaXJ2YW5hXCIsIFwiMzo0M1wiLCAxOTkxKTtcclxudmFyIHM1ID0gbmV3IFNvbmcoXCJDb21lIGFzIHlvdSBhcmVcIiwgXCJOaXJ2YW5hXCIsIFwiMzozOVwiLCAxOTkxKTtcclxudmFyIGFsYnVtID0gbmV3IEFsYnVtKHNvbmdzKTtcclxuYWxidW0uYWRkU29uZyhzMSk7XHJcbmFsYnVtLmFkZFNvbmcoczIpO1xyXG5hbGJ1bS5hZGRTb25nKHMzKTtcclxuYWxidW0uYWRkU29uZyhzNCk7XHJcbmFsYnVtLmFkZFNvbmcoczUpO1xyXG52YXIgYnRuU2hvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hvd1wiKTtcclxuYnRuU2hvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGFsYnVtLnNob3dBbGJ1bShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsYnVtXCIpKTsgfSk7XHJcbnZhciBidG5Tb3J0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb3J0XCIpO1xyXG5idG5Tb3J0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkgeyByZXR1cm4gYWxidW0uc29ydFNvbmdzQnlMZW5naHQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGJ1bVwiKSk7IH0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9