import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import './navBar.css'

function NavBar() {
  return (
     <div className="navBarBox">

        <div className="navBarLeft">
            <span className="logo">facebook</span>
        </div>

        <div className="navBarCenter"> 
             <div className="seachBarBox">
               <SearchIcon className='searchIcon'/>
               <input placeholder='search for your friends' className="searchInput" />
               </div> 
         </div>

        <div className="navBarRight">
            <div className="navBarLinks">
                  <span className="navBarLink">HomePage</span>
                  <span className="navBarLink">Profle</span>
            </div>
            <div className="navBarIcons">
               <div className="navBarIcon">
                  <PersonIcon/>
                  <span className="iconTag">5</span>
               </div>
               <div className="navBarIcon">
                  <MessageIcon/>
                  <span className="iconTag">3</span>
               </div>
               <div className="navBarIcon">
                  <SettingsIcon/>
                  <span className="iconTag">2</span>
               </div>
              
              <div className="pic"> 
              <img src="/images/1.jpg" alt="error" className="profilePicImage" />
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAllBMVEVK/xBE/wBJ/RCB/l08/wBG/wlH/ABF/hJf+y52/VBK/hdh/zaN+2ZH/A5P+xd+/ldV/CKH/mSH+WV//VVr/D1N+BeH/V1V9ShX+xl9/k6N/maL+2t1+kdm/jVb+zxf/y1//mR0/0iR+3SM/lts/1R39FNk9jB0+1Jm+CZo/ER1+z+P+m6a+nV39EqH9ldQ8RCP+3uc83nUef7YAAADr0lEQVR4nO3Z3XajNhQFYEn4SEJGBxF+EmOIQjKN4ziddt7/5XrwzPQ2vWiT6WJ/9iJG1gXeS0hHRCkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPh3xUBMqneOzXtd2bH9iEv6FfAtEzv3fscd839/NZ9PBsddffC+8O8OE8XcjvoDrumzGUV+ijrk6K6hkApr20r9aLj2urbFw3ELmbg+TMPs6V65uz7Nnk0IxvZ+vg0cJAxOObmcNec+B99Wfgt3j9wQxfRsHpgO01IelhSdng9lWU7Jsg3146Upj23Mw3DsysenR0//YOL5nzP6pXTED5Ye6hRjNwe7/9I7HfMi60xdld3SjG2cx6ILfhjnDYyTyJRbHbjR6iDTrJMk+Pzbs/fzy+l5ly+vpC0PNe2rzsbYbmI+Mex8SYFudqrNypjUxliWS32qy+XF7qs5SpexoP2xI7ZFtZlM9N+ZhNSSLe93sshYltVolDVJ81ivmdhNZmLWTAz5kk20+cEEN4zn7Jum0FvKJKjoT9H5iU05k+I0yBzzeujm81NyivJwuVTlW83zpbPE9dsWMjEqptm6fjZqvlPBcCfVGd+ev3S9oyAFf57nvtubdM4mmPszffYFfxApQ4yQTWAw0Zhr6WqsHKNRHGMkG+UlbaS2sQeUDIJkIe+1lOdI65lUsFLQyoBJTQ6ybZZpJ4S1X/jsy/0ghrQmGRyko1bWuu97m12M7MzudwnHkXyvXLTWbuLWkd9v7tupW/qle23nfjrdBx3mts5GdecpfE3adcV0z0Sv7TSVmwiFeDm2xePwx/DnobgMdSOLbtfU7WVvi6Lmb3s+PZVfGx+Xpq5vvm1h3VGURh95GnbDKZrhYGPVcTPlXNR2KC1X2R89c1L9187aZRP1CVGu8o6WcTcu0TQlUdWlm6quL6UaTjpV+7m61ToSHzutXzeRiYyTob2TDe/PTNzYcbvcZn/rhlIyeU5Dmfw5xbr16bCJTALZ3Dwei2pXTdGMkkm16HxzqZpAo2Ry6XQntWzjKY9vzXET+2JBvcwXyaS0/omcE8v+Tw6cMrFnWaM9G7vOxknmla0gWp+7RlmZ4/rgzVwrOTkx14ZrPfvDNupY4WRf44xTzvysPtz1rX7U+ern8+rgtlLHfv+9clgr9/D9ZC3418/meu6Mef8/HQAAAPDB/gKiSDd0+l20AgAAAABJRU5ErkJggg==" alt="error" className="onlineSt" />
              
              </div>

            </div>
          

        </div>
        
        
     </div>
  )
}

export default NavBar