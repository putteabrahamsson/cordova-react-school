import React from 'react';

const FlashLight = () => {
    const turnOnLight = () => {
        window.plugins.flashlight.available(function(isAvailable) {
            if (isAvailable) {
                // Turn on flashlight if available
              window.plugins.flashlight.switchOn(
                function() {
                    alert("Flashlight turned on")
                }, 
                function() {}, 
                {intensity: 0.6} 
              );
           
              // Turn off the flashlight after 5 seconds
              setTimeout(function() {
                window.plugins.flashlight.switchOff(); 
              }, 5000);
            } else {
              alert("Flashlight not available on this device");
            }
          });
    }

    return(
        <div>
            <input type="button" onClick={() => turnOnLight()} value="Turn on flashlight" />
        </div>
    )
}

export default FlashLight;