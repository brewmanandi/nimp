import UniformColor from '../classes/nodes/inputs/UniformColor.js';
import UrlImage from '../classes/nodes/inputs/UrlImage.js';
import Output from '../classes/nodes/outputs/Output.js';
import Blur from '../classes/nodes/blurs/Blur.js';
import BrightnessContrast from '../classes/nodes/color/BrightnessContrast.js';
import Greyscale from '../classes/nodes/color/Greyscale.js';
import Blend from '../classes/nodes/composing/Blend.js';
import Resize from '../classes/nodes/resize/Resize.js';
import ImageUpload from '../classes/nodes/inputs/ImageUpload.js';
import Mask from '../classes/nodes/composing/Mask.js';
import Invert from '../classes/nodes/color/Invert.js';
import Displace from '../classes/nodes/threedee/Displace.js';

const settings = {
  nodeWidth: 140,
  nodeHeight: 34,
  nodeConnectionRadius: 8,
  nodeBackgroundColor: 'hsl(209, 10%, 40%)',
  nodes: [
    {name:'Image Upload', id:'imageupload', classObject:ImageUpload},
    {name:'Image from Url', id:'urlimage', classObject:UrlImage},
    {name:'Uniform Color', id:'uniformcolor', classObject:UniformColor},
    {name:'Output', id:'output', classObject:Output},
    {name:'Blur', id:'blur', classObject:Blur},
    {name:'Brightness/Contrast', id:'brightnesscontrast', classObject:BrightnessContrast},
    {name:'Greyscale', id:'greyscale', classObject:Greyscale},
    {name:'Blend', id:'blend', classObject:Blend},
    {name:'Mask', id:'mask', classObject:Mask},
    {name:'Resize', id:'resize', classObject:Resize},
    {name:'Invert', id:'invert', classObject:Invert},
    {name:'Displace', id:'displace', classObject:Displace},
  ]
}


export default settings