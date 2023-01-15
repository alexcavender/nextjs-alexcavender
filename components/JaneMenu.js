import Script from 'next/script';
import React, { useEffect, useRef, createRef } from 'react';

const JaneMenu = ({ id }) => {
    const targetRef = createRef();
    const inlineRef = createRef();

    useEffect(() => {
        const script = document.createElement("script");
        script.id  = "jane-frame-script";
        script.src = `https://api.iheartjane.com/v1/stores/${id}/embed.js`;

        if ( targetRef.current ) {
            targetRef.current.appendChild(script);
        }

        return function cleanup() {
 
            if ( targetRef.current ) {
                targetRef.current.removeChild(script);
            }
        }
    }, [id] );

    return (
        <>
            <div ref={targetRef} className="targetRef"></div>
            <Script strategy="lazyOnload">
            {
            `var getParams = function (url) {
                    var params = {};
                    var parser = document.createElement('a');
                    parser.href = url;
                    var query = parser.search.substring(1);
                    var vars = query.split('&');
                  
                    for (var i = 0; i < vars.length; i++) {
                      var pair = vars[i].split('=');
                    
                      if(pair.length > 2) {
                        params[pair[0]] = decodeURIComponent(pair[1] + '=' + pair[2]);
                      }
                      else {
                        params[pair[0]] = decodeURIComponent(pair[1]);
                      }
                    }
                  
                    if(params['path']){
                      params['path'] = params['path'].replace("path=","");
                    }
                    return params;
                  };
                  
                  var baseURL = "https://www.iheartjane.com/embed/stores/${id}/";
                  var params = getParams(window.location.href);
                  if(params['path']){
                    var newSrc = baseURL + params['path'];
                    if (params['promo_code']) {
                      newSrc = newSrc + '&promo_code=' + params['promo_code'];
                    }
                  document.getElementById('jane-menu').src = newSrc;
                }`
            }
            </Script>
        </>
    )
}
export default JaneMenu;