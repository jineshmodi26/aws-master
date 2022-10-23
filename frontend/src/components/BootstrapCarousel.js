import React, { Component } from 'react'  
     
export class BootstrapCarousel extends Component {  
        render() {  
    
                return (  
                    
                    <div className="carousel" style={{marginTop:"100px"}}>
                        <div className="carousel-inner">
                            <input className="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="true" checked="checked">
                            </input>
                            <div className="carousel-item">
                                <img src="http://fakeimg.pl/2000x800/0079D8/fff/?text=Without"></img>
                            </div>
                            
                            <input className="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="true">
                            </input>
                            <div className="carousel-item">
                                <img src="http://fakeimg.pl/2000x800/DA5930/fff/?text=JavaScript"></img>
                            </div>
                            
                            <input className="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="true">
                            </input>
                            <div className="carousel-item">
                                <img src="http://fakeimg.pl/2000x800/F90/fff/?text=Carousel"></img>
                            </div>
                            
                            <label for="carousel-3" className="carousel-control prev control-1">‹</label>
                            <label for="carousel-2" className="carousel-control next control-1">›</label>
                            <label for="carousel-1" className="carousel-control prev control-2">‹</label>
                            <label for="carousel-3" className="carousel-control next control-2">›</label>
                            <label for="carousel-2" className="carousel-control prev control-3">‹</label>
                            <label for="carousel-1" className="carousel-control next control-3">›</label>
                            <ol className="carousel-indicators">
                                <li>
                                    <label for="carousel-1" className="carousel-bullet">•</label>
                                </li>
                                <li>
                                    <label for="carousel-2" className="carousel-bullet">•</label>
                                </li>
                                <li>
                                    <label for="carousel-3" className="carousel-bullet">•</label>
                                </li>
                            </ol>
                            </div>
                        </div>
                    
                )  
        }  
}  
    
export default BootstrapCarousel 