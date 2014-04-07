/**
 * Copyright 2013 Mozilla Foundation
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Class: SampleDataEvent
module Shumway.AVM2.AS.flash.events {
  import notImplemented = Shumway.Debug.notImplemented;
  export class SampleDataEvent extends flash.events.Event {
    
    // Called whenever the class is initialized.
    static classInitializer: any = null;
    
    // Called whenever an instance of the class is initialized.
    static initializer: any = null;
    
    // List of static symbols to link.
    static staticBindings: string [] = null; // [];
    
    // List of instance symbols to link.
    static bindings: string [] = null; // ["_theposition", "_thedata", "theposition", "theposition", "thedata", "thedata", "clone", "toString"];
    
    constructor (type: string, bubbles: boolean = false, cancelable: boolean = false, theposition: number = 0, thedata: flash.utils.ByteArray = null) {
      type = "" + type; bubbles = !!bubbles; cancelable = !!cancelable; theposition = +theposition; thedata = thedata;
      false && super(undefined, undefined, undefined);
      notImplemented("Dummy Constructor: public flash.events.SampleDataEvent");
    }
    
    // JS -> AS Bindings
    static SAMPLE_DATA: string = "sampleData";
    
    _theposition: number;
    _thedata: flash.utils.ByteArray;
    theposition: number;
    thedata: flash.utils.ByteArray;
    clone: () => flash.events.Event;
    
    // AS -> JS Bindings
    
    // _theposition: number;
    // _thedata: flash.utils.ByteArray;
  }
}