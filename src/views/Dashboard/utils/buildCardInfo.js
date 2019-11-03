import {
  AccessibleForward,
  NotificationImportant,
  Fireplace,
  DoneAll
} from "@material-ui/icons";

export default () => [
  {
    ICON: NotificationImportant,
    message: "จำนวนการแจ้งเตือนทั่วไป",
    title: "การแจ้งเตือน",
    data: "100",
    color: "warning"
  },
  {
    ICON: AccessibleForward,
    message: "จำนวนการขอความช่วยเหลือ",
    title: "คำร้องขอความช่วยเหลือ",
    data: "99",
    color: "danger"
  },
  {
    ICON: Fireplace,
    message: "จำนวนสถานที่ภัยพิบัติ",
    title: "สถานที่ภัยพิบัติ",
    data: "99",
    color: "rose"
  },
  {
    ICON: DoneAll,
    message: "จำนวนการช่วยเหลือสำเร็จ",
    title: "ช่วยเหลือสำเร็จ",
    data: "99",
    color: "success"
  }
];
