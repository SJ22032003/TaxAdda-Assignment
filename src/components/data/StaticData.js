import account from "../assets/account.png";
import battery from "../assets/battery.png";
import tag from "../assets/tag.png";
import recipt from "../assets/recipt.png";
import addGST from "../assets/addgstin.png";

export const SideNavbarList = [
  {name:"Add GSTIN",image:addGST, link:"add_gstin"},
  { name: "GSTIN List", image: account, link:'gstin' },
  { name: "Return Status", image: recipt, link:'returns' },
  { name: "QRMP", image: battery , link:'qrmp'},
  { name: "TAGS", image: tag , link:'tags'},
];
