import { BASE_DIR } from '../constants.yml'
import Sample from '@/lib/Sample';

const body = document.querySelector(body);

window.onscroll = function()
{
    var scrollTop =
        document.body.scrollTop || // IE、Firefox、Opera
        document.body.scrollTop;              // Chrome、Safari
}