import { useSettingOpen } from "../context/OpenSettingContext";
import logos from "../images/images";
const {SettingsIconSvg} = logos;

export default function SettingButton  () {
  const {toggleSettingWin} = useSettingOpen();
  
    return (
      <>  
        <button 
          onClick={() => toggleSettingWin()}
          className="p-2 focus:outline-none">
          <SettingsIconSvg/>
        </button>
      </>
    );
};
