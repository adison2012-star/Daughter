export type CEFRLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

export interface OxfordWord {
  id: string;
  word: string;
  pos: string;
  meaning: string;
  reading: string;
  ipa: string;
  level: CEFRLevel;
}

interface RawOxfordWord {
  id: string;
  word: string;
  pos: string;
  meaning: string;
  reading: string;
  ipa: string;
  level: string;
}

const RAW_WORDS: RawOxfordWord[] = [
  {
    "id": "a1_1",
    "word": "about",
    "pos": "prep. adv.",
    "meaning": "เกี่ยวกับ",
    "reading": "เออะ บ๊าว ถึ",
    "ipa": "ʌ b ˈaʊ t",
    "level": "A1"
  },
  {
    "id": "a1_2",
    "word": "above",
    "pos": "prep. adv.",
    "meaning": "ข้างบน",
    "reading": "เออะ บ๊ะ ฝึ",
    "ipa": "ʌ b ˈʌ v",
    "level": "A1"
  },
  {
    "id": "a1_3",
    "word": "across",
    "pos": "prep. adv.",
    "meaning": "ข้าม",
    "reading": "เออะ คร้อ สึ",
    "ipa": "ʌ k r ˈɔː s",
    "level": "A1"
  },
  {
    "id": "a1_4",
    "word": "action",
    "pos": "n.",
    "meaning": "การกระทำ",
    "reading": "แอ๊ ขึ เฉอะ น",
    "ipa": "ˈæ k ʃ ʌ n",
    "level": "A1"
  },
  {
    "id": "a1_5",
    "word": "activity",
    "pos": "n.",
    "meaning": "กิจกรรม",
    "reading": "แอ่ ขึ ทิ เฝอะ ถี่",
    "ipa": "æ k t ˈɪ v ʌ t iː",
    "level": "A1"
  },
  {
    "id": "a1_6",
    "word": "actor",
    "pos": "n.",
    "meaning": "นักแสดงชาย",
    "reading": "แอ๊ ขึ เถ่อ ร",
    "ipa": "ˈæ k t ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_7",
    "word": "actress",
    "pos": "n.",
    "meaning": "นักแสดงหญิง",
    "reading": "แอ๊ ขึ เถรอะ สึ",
    "ipa": "ˈæ k t r ʌ s",
    "level": "A1"
  },
  {
    "id": "a1_8",
    "word": "add",
    "pos": "v.",
    "meaning": "เพิ่ม",
    "reading": "แอ๊ ดึ",
    "ipa": "ˈæ d",
    "level": "A1"
  },
  {
    "id": "a1_9",
    "word": "address",
    "pos": "n.",
    "meaning": "ที่อยู่",
    "reading": "แอ๊ เดระ สึ",
    "ipa": "ˈæ d r ˌe s",
    "level": "A1"
  },
  {
    "id": "a1_10",
    "word": "adult",
    "pos": "n.",
    "meaning": "ผู้ใหญ่",
    "reading": "เออะ ด๊ะ ล ถึ",
    "ipa": "ʌ d ˈʌ l t",
    "level": "A1"
  },
  {
    "id": "a1_11",
    "word": "advice",
    "pos": "n.",
    "meaning": "คำแนะนำ",
    "reading": "แอ่ ดึ ฟ้าย สึ",
    "ipa": "æ d v ˈaɪ s",
    "level": "A1"
  },
  {
    "id": "a1_12",
    "word": "afraid",
    "pos": "adj.",
    "meaning": "เกรงกลัว",
    "reading": "เออะ เฟร้ ดึ",
    "ipa": "ʌ f r ˈeɪ d",
    "level": "A1"
  },
  {
    "id": "a1_13",
    "word": "after",
    "pos": "prep.",
    "meaning": "หลังจาก",
    "reading": "แอ๊ ฝึ เถ่อ ร",
    "ipa": "ˈæ f t ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_14",
    "word": "afternoon",
    "pos": "n.",
    "meaning": "ตอนบ่าย",
    "reading": "แอ ฝึ เถ่อ ร นู้ น",
    "ipa": "ˌæ f t ɜːʴ n ˈuː n",
    "level": "A1"
  },
  {
    "id": "a1_15",
    "word": "again",
    "pos": "adv.",
    "meaning": "อีกครั้ง",
    "reading": "เออะ เก๊ะ น",
    "ipa": "ʌ g ˈe n",
    "level": "A1"
  },
  {
    "id": "a1_16",
    "word": "age",
    "pos": "n.",
    "meaning": "อายุ",
    "reading": "เอ๊ จึ",
    "ipa": "ˈeɪ dʒ",
    "level": "A1"
  },
  {
    "id": "a1_17",
    "word": "ago",
    "pos": "adv.",
    "meaning": "ที่ผ่านมา",
    "reading": "เออะ โก๊ว",
    "ipa": "ʌ g ˈəʊ",
    "level": "A1"
  },
  {
    "id": "a1_18",
    "word": "agree",
    "pos": "v.",
    "meaning": "เห็นด้วย",
    "reading": "เออะ กรี๊",
    "ipa": "ʌ g r ˈiː",
    "level": "A1"
  },
  {
    "id": "a1_19",
    "word": "air",
    "pos": "n.",
    "meaning": "อากาศ",
    "reading": "แอ๊ ร",
    "ipa": "ˈe r",
    "level": "A1"
  },
  {
    "id": "a1_20",
    "word": "airport",
    "pos": "n.",
    "meaning": "สนามบิน",
    "reading": "แอ๊ ร พอ ร ถึ",
    "ipa": "ˈe r p ˌɔː r t",
    "level": "A1"
  },
  {
    "id": "a1_21",
    "word": "all",
    "pos": "det. pron.",
    "meaning": "ทั้งหมด",
    "reading": "อ๊อ ล",
    "ipa": "ˈɔː l",
    "level": "A1"
  },
  {
    "id": "a1_22",
    "word": "also",
    "pos": "adv.",
    "meaning": "อีกด้วย",
    "reading": "อ๊อ ล โส่ว",
    "ipa": "ˈɔː l s əʊ",
    "level": "A1"
  },
  {
    "id": "a1_23",
    "word": "always",
    "pos": "adv.",
    "meaning": "เสมอ",
    "reading": "อ๊อ ล เว สึ",
    "ipa": "ˈɔː l w ˌeɪ z",
    "level": "A1"
  },
  {
    "id": "a1_24",
    "word": "amazing",
    "pos": "adj.",
    "meaning": "อัศจรรย์",
    "reading": "เออะ เม้ สิ่ ง",
    "ipa": "ʌ m ˈeɪ z ɪ ŋ",
    "level": "A1"
  },
  {
    "id": "a1_25",
    "word": "and",
    "pos": "conj.",
    "meaning": "และ",
    "reading": "เออะ น ดึ",
    "ipa": "ʌ n d",
    "level": "A1"
  },
  {
    "id": "a1_26",
    "word": "angry",
    "pos": "adj.",
    "meaning": "โกรธ",
    "reading": "แอ๊ ง กรี่",
    "ipa": "ˈæ ŋ g r iː",
    "level": "A1"
  },
  {
    "id": "a1_27",
    "word": "animal",
    "pos": "n.",
    "meaning": "สัตว์ แอ๊เหนอะ",
    "reading": "เหมอะ ล",
    "ipa": "ˈæ n ʌ m ʌ l",
    "level": "A1"
  },
  {
    "id": "a1_28",
    "word": "another",
    "pos": "det. pron.",
    "meaning": "อื่น",
    "reading": "เออะ นะ เด่อ ร",
    "ipa": "ʌ n ˈʌ ð ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_29",
    "word": "answer",
    "pos": "n. v.",
    "meaning": "คำตอบ",
    "reading": "แอ๊ น เส่อ ร",
    "ipa": "ˈæ n s ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_30",
    "word": "any",
    "pos": "det. pron.",
    "meaning": "ใดๆ",
    "reading": "เอ๊ะ หนี่",
    "ipa": "ˈe n iː",
    "level": "A1"
  },
  {
    "id": "a1_31",
    "word": "anyone",
    "pos": "pron.",
    "meaning": "ใครก็ได้",
    "reading": "เอ๊ะ หนี่ วะ น",
    "ipa": "ˈe n iː w ˌʌ n",
    "level": "A1"
  },
  {
    "id": "a1_32",
    "word": "anything",
    "pos": "pron.",
    "meaning": "อะไรก็ตาม",
    "reading": "เอ๊ะ หนี่ ติ ง",
    "ipa": "ˈe n iː θ ˌɪ ŋ",
    "level": "A1"
  },
  {
    "id": "a1_33",
    "word": "apartment",
    "pos": "n.",
    "meaning": "อพาร์ทเม้น เออะพ้าร",
    "reading": "ถึ เหมอะ น ถึ",
    "ipa": "ʌ p ˈɑː r t m ʌ n t",
    "level": "A1"
  },
  {
    "id": "a1_34",
    "word": "apple",
    "pos": "n.",
    "meaning": "แอปเปิล",
    "reading": "แอ๊ เผอะ ล",
    "ipa": "ˈæ p ʌ l",
    "level": "A1"
  },
  {
    "id": "a1_35",
    "word": "april",
    "pos": "n.",
    "meaning": "เมษายน",
    "reading": "เอ๊ เผรอะ ล",
    "ipa": "ˈeɪ p r ʌ l",
    "level": "A1"
  },
  {
    "id": "a1_36",
    "word": "area",
    "pos": "n.",
    "meaning": "พื้นที่",
    "reading": "แอ๊ ร อี่ เออะ",
    "ipa": "ˈe r iː ʌ",
    "level": "A1"
  },
  {
    "id": "a1_37",
    "word": "arm",
    "pos": "n.",
    "meaning": "แขน",
    "reading": "อ๊าร ม",
    "ipa": "ˈɑː r m",
    "level": "A1"
  },
  {
    "id": "a1_38",
    "word": "around",
    "pos": "prep. adv.",
    "meaning": "รอบๆ",
    "reading": "เอ่อ ร ร้าว น ดึ",
    "ipa": "ɜːʴ ˈaʊ n d",
    "level": "A1"
  },
  {
    "id": "a1_39",
    "word": "arrive",
    "pos": "v.",
    "meaning": "มาถึง",
    "reading": "เอ่อ ร ร้าย ฝึ",
    "ipa": "ɜːʴ ˈaɪ v",
    "level": "A1"
  },
  {
    "id": "a1_40",
    "word": "art",
    "pos": "n.",
    "meaning": "ศิลปะ",
    "reading": "อ๊าร ถึ",
    "ipa": "ˈɑː r t",
    "level": "A1"
  },
  {
    "id": "a1_41",
    "word": "article",
    "pos": "n.",
    "meaning": "บทความ อ๊าร",
    "reading": "เถอะ เขอะ ล",
    "ipa": "ˈɑː r t ʌ k ʌ l",
    "level": "A1"
  },
  {
    "id": "a1_42",
    "word": "artist",
    "pos": "n.",
    "meaning": "ศิลปิน",
    "reading": "อ๊าร เถอะ สึ ถึ",
    "ipa": "ˈɑː r t ʌ s t",
    "level": "A1"
  },
  {
    "id": "a1_43",
    "word": "as",
    "pos": "prep.",
    "meaning": "เช่น",
    "reading": "แอ๊ สึ",
    "ipa": "ˈæ z",
    "level": "A1"
  },
  {
    "id": "a1_44",
    "word": "ask",
    "pos": "v.",
    "meaning": "ถาม",
    "reading": "แอ๊ สึ ขึ",
    "ipa": "ˈæ s k",
    "level": "A1"
  },
  {
    "id": "a1_45",
    "word": "at",
    "pos": "prep.",
    "meaning": "ที่",
    "reading": "แอ๊ ถึ",
    "ipa": "ˈæ t",
    "level": "A1"
  },
  {
    "id": "a1_46",
    "word": "August",
    "pos": "n.",
    "meaning": "สิงหาคม",
    "reading": "อ๊า เกอะ สึ ถึ",
    "ipa": "ˈɑː g ʌ s t",
    "level": "A1"
  },
  {
    "id": "a1_47",
    "word": "aunt",
    "pos": "n.",
    "meaning": "ป้า",
    "reading": "แอ๊ น ถึ",
    "ipa": "ˈæ n t",
    "level": "A1"
  },
  {
    "id": "a1_48",
    "word": "autumn",
    "pos": "n.",
    "meaning": "ฤดูใบไม้ร่วง",
    "reading": "อ๊อ เถอะ ม",
    "ipa": "ˈɔː t ʌ m",
    "level": "A1"
  },
  {
    "id": "a1_49",
    "word": "away",
    "pos": "adv.",
    "meaning": "ห่างออกไป",
    "reading": "เออะ เว้",
    "ipa": "ʌ w ˈeɪ",
    "level": "A1"
  },
  {
    "id": "a1_50",
    "word": "baby",
    "pos": "n.",
    "meaning": "ที่รัก",
    "reading": "เบ๊ บี่",
    "ipa": "b ˈeɪ b iː",
    "level": "A1"
  },
  {
    "id": "a1_51",
    "word": "back",
    "pos": "n. adv.",
    "meaning": "กลับ",
    "reading": "แบ ขึ",
    "ipa": "b ˈæ k",
    "level": "A1"
  },
  {
    "id": "a1_52",
    "word": "bad",
    "pos": "adj.",
    "meaning": "แย่",
    "reading": "แบ ดึ",
    "ipa": "b ˈæ d",
    "level": "A1"
  },
  {
    "id": "a1_53",
    "word": "bag",
    "pos": "n.",
    "meaning": "ถุง",
    "reading": "แบ กึ",
    "ipa": "b ˈæ g",
    "level": "A1"
  },
  {
    "id": "a1_54",
    "word": "ball",
    "pos": "n.",
    "meaning": "ลูกบอล",
    "reading": "บอ ล",
    "ipa": "b ˈɔː l",
    "level": "A1"
  },
  {
    "id": "a1_55",
    "word": "banana",
    "pos": "n.",
    "meaning": "กล้วย",
    "reading": "เบอะ แน้ เหนอะ",
    "ipa": "b ʌ n ˈæ n ʌ",
    "level": "A1"
  },
  {
    "id": "a1_56",
    "word": "band",
    "pos": "n.",
    "meaning": "วงดนตรี",
    "reading": "แบ น ดึ",
    "ipa": "b ˈæ n d",
    "level": "A1"
  },
  {
    "id": "a1_57",
    "word": "bank",
    "pos": "n.",
    "meaning": "ธนาคาร",
    "reading": "แบ ง ขึ",
    "ipa": "b ˈæ ŋ k",
    "level": "A1"
  },
  {
    "id": "a1_58",
    "word": "bath",
    "pos": "n.",
    "meaning": "อาบน้ำ",
    "reading": "แบ ตึ",
    "ipa": "b ˈæ θ",
    "level": "A1"
  },
  {
    "id": "a1_59",
    "word": "bathroom",
    "pos": "n.",
    "meaning": "ห้องน้ำ",
    "reading": "แบ๊ ตรู ม",
    "ipa": "b ˈæ θ r ˌuː m",
    "level": "A1"
  },
  {
    "id": "a1_60",
    "word": "be",
    "pos": "v. auxiliary v.",
    "meaning": "เป็น",
    "reading": "บี",
    "ipa": "b ˈiː",
    "level": "A1"
  },
  {
    "id": "a1_61",
    "word": "beach",
    "pos": "n.",
    "meaning": "ชายหาด",
    "reading": "บี ฉึ",
    "ipa": "b ˈiː tʃ",
    "level": "A1"
  },
  {
    "id": "a1_62",
    "word": "beautiful",
    "pos": "adj.",
    "meaning": "สวย บึ",
    "reading": "ยู้ เถอะ เฝอะ ล",
    "ipa": "b j ˈuː t ʌ f ʌ l",
    "level": "A1"
  },
  {
    "id": "a1_63",
    "word": "because",
    "pos": "conj.",
    "meaning": "เพราะ",
    "reading": "บิ ค้อ สึ",
    "ipa": "b ɪ k ˈɔː z",
    "level": "A1"
  },
  {
    "id": "a1_64",
    "word": "become",
    "pos": "v.",
    "meaning": "กลายเป็น",
    "reading": "บิ คะ ม",
    "ipa": "b ɪ k ˈʌ m",
    "level": "A1"
  },
  {
    "id": "a1_65",
    "word": "bed",
    "pos": "n.",
    "meaning": "เตียง",
    "reading": "เบะ ดึ",
    "ipa": "b ˈe d",
    "level": "A1"
  },
  {
    "id": "a1_66",
    "word": "bedroom",
    "pos": "n.",
    "meaning": "ห้องนอน",
    "reading": "เบ๊ะ ดรู ม",
    "ipa": "b ˈe d r ˌuː m",
    "level": "A1"
  },
  {
    "id": "a1_67",
    "word": "beer",
    "pos": "n.",
    "meaning": "เบียร์",
    "reading": "เบีย ร",
    "ipa": "b ˈɪ r",
    "level": "A1"
  },
  {
    "id": "a1_68",
    "word": "before",
    "pos": "prep.",
    "meaning": "ก่อน",
    "reading": "บิ ฟ้อ ร",
    "ipa": "b ɪ f ˈɔː r",
    "level": "A1"
  },
  {
    "id": "a1_69",
    "word": "begin",
    "pos": "v.",
    "meaning": "เริ่ม",
    "reading": "บิ กิ้ น",
    "ipa": "b ɪ g ˈɪ n",
    "level": "A1"
  },
  {
    "id": "a1_70",
    "word": "beginning",
    "pos": "n.",
    "meaning": "จุดเริ่มต้น",
    "reading": "บิ กิ้ หนิ่ ง",
    "ipa": "b ɪ g ˈɪ n ɪ ŋ",
    "level": "A1"
  },
  {
    "id": "a1_71",
    "word": "behind",
    "pos": "prep. adv.",
    "meaning": "ด้านหลัง",
    "reading": "บิ ฮ้าย น ดึ",
    "ipa": "b ɪ h ˈaɪ n d",
    "level": "A1"
  },
  {
    "id": "a1_72",
    "word": "believe",
    "pos": "v.",
    "meaning": "เชื่อ",
    "reading": "บิ ลี้ ฝึ",
    "ipa": "b ɪ l ˈiː v",
    "level": "A1"
  },
  {
    "id": "a1_73",
    "word": "below",
    "pos": "adv. prep.",
    "meaning": "ด้านล่าง",
    "reading": "บิ โล้ว",
    "ipa": "b ɪ l ˈəʊ",
    "level": "A1"
  },
  {
    "id": "a1_74",
    "word": "best",
    "pos": "adj.",
    "meaning": "ดีที่สุด",
    "reading": "เบะ สึ ถึ",
    "ipa": "b ˈe s t",
    "level": "A1"
  },
  {
    "id": "a1_75",
    "word": "better",
    "pos": "adj.",
    "meaning": "ดีกว่า",
    "reading": "เบ๊ะ เถ่อ ร",
    "ipa": "b ˈe t ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_76",
    "word": "between",
    "pos": "prep.",
    "meaning": "ระหว่าง",
    "reading": "บิ ทวี้ น",
    "ipa": "b ɪ t w ˈiː n",
    "level": "A1"
  },
  {
    "id": "a1_77",
    "word": "bicycle",
    "pos": "n.",
    "meaning": "จักรยาน",
    "reading": "บ๊าย สิ่ เขอะ ล",
    "ipa": "b ˈaɪ s ɪ k ʌ l",
    "level": "A1"
  },
  {
    "id": "a1_78",
    "word": "big",
    "pos": "adj.",
    "meaning": "ใหญ่",
    "reading": "บิ กึ",
    "ipa": "b ˈɪ g",
    "level": "A1"
  },
  {
    "id": "a1_79",
    "word": "bike",
    "pos": "n.",
    "meaning": "จักรยาน",
    "reading": "บาย ขึ",
    "ipa": "b ˈaɪ k",
    "level": "A1"
  },
  {
    "id": "a1_80",
    "word": "bill",
    "pos": "n.",
    "meaning": "ใบแจ้งหนี้",
    "reading": "บิ ล",
    "ipa": "b ˈɪ l",
    "level": "A1"
  },
  {
    "id": "a1_81",
    "word": "bird",
    "pos": "n.",
    "meaning": "นก",
    "reading": "เบอ ร ดึ",
    "ipa": "b ˈɜːʴ d",
    "level": "A1"
  },
  {
    "id": "a1_82",
    "word": "birthday",
    "pos": "n.",
    "meaning": "วันเกิด",
    "reading": "เบ๊อ ร ตึ เด",
    "ipa": "b ˈɜːʴ θ d ˌeɪ",
    "level": "A1"
  },
  {
    "id": "a1_83",
    "word": "black",
    "pos": "adj. n.",
    "meaning": "สีดำ",
    "reading": "แบล ขึ",
    "ipa": "b l ˈæ k",
    "level": "A1"
  },
  {
    "id": "a1_84",
    "word": "blog",
    "pos": "n.",
    "meaning": "บล็อก",
    "reading": "บลอ กึ",
    "ipa": "b l ˈɔː g",
    "level": "A1"
  },
  {
    "id": "a1_85",
    "word": "blonde",
    "pos": "adj.",
    "meaning": "สีบลอนด์",
    "reading": "บลา น ดึ",
    "ipa": "b l ˈɑː n d",
    "level": "A1"
  },
  {
    "id": "a1_86",
    "word": "blue",
    "pos": "adj. n.",
    "meaning": "สีฟ้า",
    "reading": "บลู",
    "ipa": "b l ˈuː",
    "level": "A1"
  },
  {
    "id": "a1_87",
    "word": "boat",
    "pos": "n.",
    "meaning": "เรือ",
    "reading": "โบว ถึ",
    "ipa": "b ˈəʊ t",
    "level": "A1"
  },
  {
    "id": "a1_88",
    "word": "body",
    "pos": "n.",
    "meaning": "ร่างกาย",
    "reading": "บ๊า ดี่",
    "ipa": "b ˈɑː d iː",
    "level": "A1"
  },
  {
    "id": "a1_89",
    "word": "book",
    "pos": "n.",
    "meaning": "หนังสือ",
    "reading": "บุ ขึ",
    "ipa": "b ˈʊ k",
    "level": "A1"
  },
  {
    "id": "a1_90",
    "word": "boot",
    "pos": "n.",
    "meaning": "บูต",
    "reading": "บู ถึ",
    "ipa": "b ˈuː t",
    "level": "A1"
  },
  {
    "id": "a1_91",
    "word": "bored",
    "pos": "adj.",
    "meaning": "เบื่อ",
    "reading": "บอ ร ดึ",
    "ipa": "b ˈɔː r d",
    "level": "A1"
  },
  {
    "id": "a1_92",
    "word": "boring",
    "pos": "adj.",
    "meaning": "น่าเบื่อ",
    "reading": "บ๊อ หริ่ ง",
    "ipa": "b ˈɔː r ɪ ŋ",
    "level": "A1"
  },
  {
    "id": "a1_93",
    "word": "born",
    "pos": "v.",
    "meaning": "เกิด",
    "reading": "บอ ร น",
    "ipa": "b ˈɔː r n",
    "level": "A1"
  },
  {
    "id": "a1_94",
    "word": "both",
    "pos": "det. pron.",
    "meaning": "ทั้งคู่",
    "reading": "โบว ตึ",
    "ipa": "b ˈəʊ θ",
    "level": "A1"
  },
  {
    "id": "a1_95",
    "word": "bottle",
    "pos": "n.",
    "meaning": "ขวด",
    "reading": "บ๊า เถอะ ล",
    "ipa": "b ˈɑː t ʌ l",
    "level": "A1"
  },
  {
    "id": "a1_96",
    "word": "box",
    "pos": "n.",
    "meaning": "กล่อง",
    "reading": "บา ขึ สึ",
    "ipa": "b ˈɑː k s",
    "level": "A1"
  },
  {
    "id": "a1_97",
    "word": "boy",
    "pos": "n.",
    "meaning": "เด็กผู้ชาย",
    "reading": "บอย",
    "ipa": "b ˈɔɪ",
    "level": "A1"
  },
  {
    "id": "a1_98",
    "word": "boyfriend",
    "pos": "n.",
    "meaning": "แฟน",
    "reading": "บ๊อย เฟระ น ดึ",
    "ipa": "b ˈɔɪ f r ˌe n d",
    "level": "A1"
  },
  {
    "id": "a1_99",
    "word": "bread",
    "pos": "n.",
    "meaning": "ขนมปัง",
    "reading": "เบระ ดึ",
    "ipa": "b r ˈe d",
    "level": "A1"
  },
  {
    "id": "a1_100",
    "word": "break",
    "pos": "v. n.",
    "meaning": "หยุดพัก",
    "reading": "เบร ขึ",
    "ipa": "b r ˈeɪ k",
    "level": "A1"
  },
  {
    "id": "a1_101",
    "word": "breakfast",
    "pos": "n.",
    "meaning": "อาหารเช้า",
    "reading": "เบร๊ะ ขึ เฝอะ สึ ถึ",
    "ipa": "b r ˈe k f ʌ s t",
    "level": "A1"
  },
  {
    "id": "a1_102",
    "word": "bring",
    "pos": "v.",
    "meaning": "นำมา",
    "reading": "บริ ง",
    "ipa": "b r ˈɪ ŋ",
    "level": "A1"
  },
  {
    "id": "a1_103",
    "word": "brother",
    "pos": "n.",
    "meaning": "พี่ชาย",
    "reading": "บร๊ะ เด่อ ร",
    "ipa": "b r ˈʌ ð ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_104",
    "word": "brown",
    "pos": "adj. n.",
    "meaning": "สีน้ำตาล",
    "reading": "บราว น",
    "ipa": "b r ˈaʊ n",
    "level": "A1"
  },
  {
    "id": "a1_105",
    "word": "build",
    "pos": "v.",
    "meaning": "สร้าง",
    "reading": "บิ ล ดึ",
    "ipa": "b ˈɪ l d",
    "level": "A1"
  },
  {
    "id": "a1_106",
    "word": "building",
    "pos": "n.",
    "meaning": "อาคาร",
    "reading": "บิ้ ล ดิ ง",
    "ipa": "b ˈɪ l d ɪ ŋ",
    "level": "A1"
  },
  {
    "id": "a1_107",
    "word": "bus",
    "pos": "n.",
    "meaning": "รสบัส",
    "reading": "บะ สึ",
    "ipa": "b ˈʌ s",
    "level": "A1"
  },
  {
    "id": "a1_108",
    "word": "business",
    "pos": "n.",
    "meaning": "ธุรกิจ",
    "reading": "บิ้ สึ เหนอะ สึ",
    "ipa": "b ˈɪ z n ʌ s",
    "level": "A1"
  },
  {
    "id": "a1_109",
    "word": "busy",
    "pos": "adj.",
    "meaning": "ยุ่ง",
    "reading": "บิ้ สี่",
    "ipa": "b ˈɪ z iː",
    "level": "A1"
  },
  {
    "id": "a1_110",
    "word": "but",
    "pos": "conj.",
    "meaning": "แต่",
    "reading": "บะ ถึ",
    "ipa": "b ˈʌ t",
    "level": "A1"
  },
  {
    "id": "a1_111",
    "word": "butter",
    "pos": "n.",
    "meaning": "เนย",
    "reading": "บ๊ะ เถ่อ ร",
    "ipa": "b ˈʌ t ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_112",
    "word": "buy",
    "pos": "v.",
    "meaning": "ซื้อ",
    "reading": "บาย",
    "ipa": "b ˈaɪ",
    "level": "A1"
  },
  {
    "id": "a1_113",
    "word": "by",
    "pos": "prep.",
    "meaning": "โดย",
    "reading": "บาย",
    "ipa": "b ˈaɪ",
    "level": "A1"
  },
  {
    "id": "a1_114",
    "word": "bye",
    "pos": "exclam.",
    "meaning": "ลาก่อน",
    "reading": "บาย",
    "ipa": "b ˈaɪ",
    "level": "A1"
  },
  {
    "id": "a1_115",
    "word": "cafe",
    "pos": "n.",
    "meaning": "คาเฟ่",
    "reading": "เขอะ เฟ้",
    "ipa": "k ʌ f ˈeɪ",
    "level": "A1"
  },
  {
    "id": "a1_116",
    "word": "cake",
    "pos": "n.",
    "meaning": "เค้ก",
    "reading": "เค ขึ",
    "ipa": "k ˈeɪ k",
    "level": "A1"
  },
  {
    "id": "a1_117",
    "word": "call",
    "pos": "v. n.",
    "meaning": "เรียก",
    "reading": "คอ ล",
    "ipa": "k ˈɔː l",
    "level": "A1"
  },
  {
    "id": "a1_118",
    "word": "camera",
    "pos": "n.",
    "meaning": "กล้อง แค้",
    "reading": "เหม่อ ร เหรอะ",
    "ipa": "k ˈæ m ɜːʴ ʌ",
    "level": "A1"
  },
  {
    "id": "a1_119",
    "word": "capital",
    "pos": "n. adj.",
    "meaning": "เมืองหลวง",
    "reading": "แค้ เผอะ เถอะ ล",
    "ipa": "k ˈæ p ʌ t ʌ l",
    "level": "A1"
  },
  {
    "id": "a1_120",
    "word": "car",
    "pos": "n.",
    "meaning": "รถ",
    "reading": "คาร",
    "ipa": "k ˈɑː r",
    "level": "A1"
  },
  {
    "id": "a1_121",
    "word": "card",
    "pos": "n.",
    "meaning": "การ์ด",
    "reading": "คาร ดึ",
    "ipa": "k ˈɑː r d",
    "level": "A1"
  },
  {
    "id": "a1_122",
    "word": "career",
    "pos": "n.",
    "meaning": "อาชีพ",
    "reading": "เข่อ ร เรี้ย ร",
    "ipa": "k ɜːʴ ˈɪ r",
    "level": "A1"
  },
  {
    "id": "a1_123",
    "word": "carrot",
    "pos": "n.",
    "meaning": "แครอท",
    "reading": "แค้ เหรอะ ถึ",
    "ipa": "k ˈæ r ʌ t",
    "level": "A1"
  },
  {
    "id": "a1_124",
    "word": "carry",
    "pos": "v.",
    "meaning": "พก",
    "reading": "แค้ หรี่",
    "ipa": "k ˈæ r iː",
    "level": "A1"
  },
  {
    "id": "a1_125",
    "word": "cat",
    "pos": "n.",
    "meaning": "แมว",
    "reading": "แค ถึ",
    "ipa": "k ˈæ t",
    "level": "A1"
  },
  {
    "id": "a1_126",
    "word": "CD",
    "pos": "n.",
    "meaning": "ซีดี",
    "reading": "ซี ดี๊",
    "ipa": "s ˌiː d ˈiː",
    "level": "A1"
  },
  {
    "id": "a1_127",
    "word": "cent",
    "pos": "n.",
    "meaning": "ร้อยละ",
    "reading": "เซะ น ถึ",
    "ipa": "s ˈe n t",
    "level": "A1"
  },
  {
    "id": "a1_128",
    "word": "centre",
    "pos": "n.",
    "meaning": "ศูนย์",
    "reading": "เซ้ะ น เถ่อ ร",
    "ipa": "s ˈe n t ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_129",
    "word": "century",
    "pos": "n.",
    "meaning": "ศตวรรษ",
    "reading": "เซ้ะ น เฉ่อ ร หรี่",
    "ipa": "s ˈe n tʃ ɜːʴ iː",
    "level": "A1"
  },
  {
    "id": "a1_130",
    "word": "chair",
    "pos": "n.",
    "meaning": "เก้าอี้",
    "reading": "แช ร",
    "ipa": "tʃ ˈe r",
    "level": "A1"
  },
  {
    "id": "a1_131",
    "word": "change",
    "pos": "v. n.",
    "meaning": "เปลี่ยน",
    "reading": "เช น จึ",
    "ipa": "tʃ ˈeɪ n dʒ",
    "level": "A1"
  },
  {
    "id": "a1_132",
    "word": "chart",
    "pos": "n.",
    "meaning": "แผนภูมิ",
    "reading": "ชาร ถึ",
    "ipa": "tʃ ˈɑː r t",
    "level": "A1"
  },
  {
    "id": "a1_133",
    "word": "cheap",
    "pos": "adj.",
    "meaning": "ราคาถูก",
    "reading": "ชี ผึ",
    "ipa": "tʃ ˈiː p",
    "level": "A1"
  },
  {
    "id": "a1_134",
    "word": "check",
    "pos": "v.",
    "meaning": "ตรวจสอบ",
    "reading": "เชะ ขึ",
    "ipa": "tʃ ˈe k",
    "level": "A1"
  },
  {
    "id": "a1_135",
    "word": "cheese",
    "pos": "n.",
    "meaning": "ชีส",
    "reading": "ชี สึ",
    "ipa": "tʃ ˈiː z",
    "level": "A1"
  },
  {
    "id": "a1_136",
    "word": "chicken",
    "pos": "n.",
    "meaning": "ไก่",
    "reading": "ชิ เขอะ น",
    "ipa": "tʃ ˈɪ k ʌ n",
    "level": "A1"
  },
  {
    "id": "a1_137",
    "word": "child",
    "pos": "n.",
    "meaning": "เด็ก",
    "reading": "ชาย ล ดึ",
    "ipa": "tʃ ˈaɪ l d",
    "level": "A1"
  },
  {
    "id": "a1_138",
    "word": "chocolate",
    "pos": "n.",
    "meaning": "ช็อคโกแลต",
    "reading": "ช้อ เขลอะ ถึ",
    "ipa": "tʃ ˈɔː k l ʌ t",
    "level": "A1"
  },
  {
    "id": "a1_139",
    "word": "choose",
    "pos": "v.",
    "meaning": "เลือก",
    "reading": "ชู สึ",
    "ipa": "tʃ ˈuː z",
    "level": "A1"
  },
  {
    "id": "a1_140",
    "word": "cinema",
    "pos": "n.",
    "meaning": "โรงหนัง",
    "reading": "ซิ เหนอะ เหมอะ",
    "ipa": "s ˈɪ n ʌ m ʌ",
    "level": "A1"
  },
  {
    "id": "a1_141",
    "word": "city",
    "pos": "n.",
    "meaning": "เมือง",
    "reading": "ซิ ถี่",
    "ipa": "s ˈɪ t iː",
    "level": "A1"
  },
  {
    "id": "a1_142",
    "word": "class",
    "pos": "n.",
    "meaning": "ระดับ",
    "reading": "แคล สึ",
    "ipa": "k l ˈæ s",
    "level": "A1"
  },
  {
    "id": "a1_143",
    "word": "classroom",
    "pos": "n.",
    "meaning": "ห้องเรียน",
    "reading": "แคล้ สึ รู ม",
    "ipa": "k l ˈæ s r ˌuː m",
    "level": "A1"
  },
  {
    "id": "a1_144",
    "word": "clean",
    "pos": "adj. v.",
    "meaning": "ทำความสะอาด",
    "reading": "คลี น",
    "ipa": "k l ˈiː n",
    "level": "A1"
  },
  {
    "id": "a1_145",
    "word": "climb",
    "pos": "v.",
    "meaning": "ปีน",
    "reading": "คลาย ม",
    "ipa": "k l ˈaɪ m",
    "level": "A1"
  },
  {
    "id": "a1_146",
    "word": "clock",
    "pos": "n.",
    "meaning": "นาฬิกา",
    "reading": "คลา ขึ",
    "ipa": "k l ˈɑː k",
    "level": "A1"
  },
  {
    "id": "a1_147",
    "word": "close",
    "pos": "v.",
    "meaning": "ปิด",
    "reading": "โคลว สึ",
    "ipa": "k l ˈəʊ s",
    "level": "A1"
  },
  {
    "id": "a1_148",
    "word": "clothes",
    "pos": "n.",
    "meaning": "เสื้อผ้า",
    "reading": "โคลว ดึ สึ",
    "ipa": "k l ˈəʊ ð z",
    "level": "A1"
  },
  {
    "id": "a1_149",
    "word": "club",
    "pos": "n.",
    "meaning": "สโมสร",
    "reading": "คละ บึ",
    "ipa": "k l ˈʌ b",
    "level": "A1"
  },
  {
    "id": "a1_150",
    "word": "coat",
    "pos": "n.",
    "meaning": "เสื้อโค้ท",
    "reading": "โคว ถึ",
    "ipa": "k ˈəʊ t",
    "level": "A1"
  },
  {
    "id": "a1_151",
    "word": "coffee",
    "pos": "n.",
    "meaning": "กาแฟ",
    "reading": "ค้า ฝี่",
    "ipa": "k ˈɑː f iː",
    "level": "A1"
  },
  {
    "id": "a1_152",
    "word": "cold",
    "pos": "adj. n.",
    "meaning": "เย็น",
    "reading": "โคว ล ดึ",
    "ipa": "k ˈəʊ l d",
    "level": "A1"
  },
  {
    "id": "a1_153",
    "word": "college",
    "pos": "n.",
    "meaning": "วิทยาลัย",
    "reading": "ค้า หลิ่ จึ",
    "ipa": "k ˈɑː l ɪ dʒ",
    "level": "A1"
  },
  {
    "id": "a1_154",
    "word": "colour",
    "pos": "n.",
    "meaning": "สี",
    "reading": "คะ เหล่อ ร",
    "ipa": "k ˈʌ l ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_155",
    "word": "come",
    "pos": "v.",
    "meaning": "มา",
    "reading": "คะ ม",
    "ipa": "k ˈʌ m",
    "level": "A1"
  },
  {
    "id": "a1_156",
    "word": "common",
    "pos": "adj.",
    "meaning": "ทั่วไป",
    "reading": "ค้า เหมอะ น",
    "ipa": "k ˈɑː m ʌ n",
    "level": "A1"
  },
  {
    "id": "a1_157",
    "word": "company",
    "pos": "n.",
    "meaning": "บริษัท",
    "reading": "คะ ม เผอะ นี",
    "ipa": "k ˈʌ m p ʌ n ˌiː",
    "level": "A1"
  },
  {
    "id": "a1_158",
    "word": "compare",
    "pos": "v.",
    "meaning": "เปรียบเทียบ",
    "reading": "เขอะ ม แพ้ ร",
    "ipa": "k ʌ m p ˈe r",
    "level": "A1"
  },
  {
    "id": "a1_159",
    "word": "complete",
    "pos": "adj. v.",
    "meaning": "สมบูรณ์",
    "reading": "เขอะ ม พลี้ ถึ",
    "ipa": "k ʌ m p l ˈiː t",
    "level": "A1"
  },
  {
    "id": "a1_160",
    "word": "computer",
    "pos": "n.",
    "meaning": "คอมพิวเตอร์ เขอะ",
    "reading": "ม ผึ ยู้ เถ่อ ร",
    "ipa": "k ʌ m p j ˈuː t ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_161",
    "word": "concert",
    "pos": "n.",
    "meaning": "คอนเสิร์ต",
    "reading": "ค้า น เส่อ ร ถึ",
    "ipa": "k ˈɑː n s ɜːʴ t",
    "level": "A1"
  },
  {
    "id": "a1_162",
    "word": "conversation",
    "pos": "n.",
    "meaning": "การสนทนา คา",
    "reading": "น เฝ่อ ร เซ้ เฉอะ น",
    "ipa": "k ˌɑː n v ɜːʴ s ˈeɪ ʃ ʌ n",
    "level": "A1"
  },
  {
    "id": "a1_163",
    "word": "cook",
    "pos": "v.",
    "meaning": "ทำอาหาร",
    "reading": "คุ ขึ",
    "ipa": "k ˈʊ k",
    "level": "A1"
  },
  {
    "id": "a1_164",
    "word": "cooking",
    "pos": "n.",
    "meaning": "การทำอาหาร",
    "reading": "คุ ขิ่ ง",
    "ipa": "k ˈʊ k ɪ ŋ",
    "level": "A1"
  },
  {
    "id": "a1_165",
    "word": "cool",
    "pos": "adj.",
    "meaning": "เย็น",
    "reading": "คู ล",
    "ipa": "k ˈuː l",
    "level": "A1"
  },
  {
    "id": "a1_166",
    "word": "correct",
    "pos": "adj. v.",
    "meaning": "ถูกต้อง",
    "reading": "เข่อ ร เร้ะ ขึ ถึ",
    "ipa": "k ɜːʴ ˈe k t",
    "level": "A1"
  },
  {
    "id": "a1_167",
    "word": "cost",
    "pos": "n. v.",
    "meaning": "ค่าใช้จ่าย",
    "reading": "คา สึ ถึ",
    "ipa": "k ˈɑː s t",
    "level": "A1"
  },
  {
    "id": "a1_168",
    "word": "country",
    "pos": "n.",
    "meaning": "ประเทศ",
    "reading": "คะ น ถรี่",
    "ipa": "k ˈʌ n t r iː",
    "level": "A1"
  },
  {
    "id": "a1_169",
    "word": "course",
    "pos": "n.",
    "meaning": "คอร์ส",
    "reading": "คอ ร สึ",
    "ipa": "k ˈɔː r s",
    "level": "A1"
  },
  {
    "id": "a1_170",
    "word": "cousin",
    "pos": "n.",
    "meaning": "ลูกพี่ลูกน้อง",
    "reading": "คะ เสอะ น",
    "ipa": "k ˈʌ z ʌ n",
    "level": "A1"
  },
  {
    "id": "a1_171",
    "word": "cow",
    "pos": "n.",
    "meaning": "วัว",
    "reading": "คาว",
    "ipa": "k ˈaʊ",
    "level": "A1"
  },
  {
    "id": "a1_172",
    "word": "cream",
    "pos": "n.",
    "meaning": "ครีม",
    "reading": "ครี ม",
    "ipa": "k r ˈiː m",
    "level": "A1"
  },
  {
    "id": "a1_173",
    "word": "create",
    "pos": "v.",
    "meaning": "สร้าง",
    "reading": "ขรี่ เอ๊ ถึ",
    "ipa": "k r iː ˈeɪ t",
    "level": "A1"
  },
  {
    "id": "a1_174",
    "word": "culture",
    "pos": "n.",
    "meaning": "วัฒนธรรม",
    "reading": "คะ ล เฉ่อ ร",
    "ipa": "k ˈʌ l tʃ ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_175",
    "word": "cup",
    "pos": "n.",
    "meaning": "ถ้วย",
    "reading": "คะ ผึ",
    "ipa": "k ˈʌ p",
    "level": "A1"
  },
  {
    "id": "a1_176",
    "word": "customer",
    "pos": "n.",
    "meaning": "ลูกค้า คะ",
    "reading": "สึ เถอะ เหม่อ ร",
    "ipa": "k ˈʌ s t ʌ m ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_177",
    "word": "cut",
    "pos": "v.",
    "meaning": "ตัด",
    "reading": "คะ ถึ",
    "ipa": "k ˈʌ t",
    "level": "A1"
  },
  {
    "id": "a1_178",
    "word": "dad",
    "pos": "n.",
    "meaning": "พ่อ",
    "reading": "แด ดึ",
    "ipa": "d ˈæ d",
    "level": "A1"
  },
  {
    "id": "a1_179",
    "word": "dance",
    "pos": "n. v.",
    "meaning": "เต้นรำ",
    "reading": "แด น สึ",
    "ipa": "d ˈæ n s",
    "level": "A1"
  },
  {
    "id": "a1_180",
    "word": "dancer",
    "pos": "n.",
    "meaning": "นักเต้น",
    "reading": "แด๊ น เส่อ ร",
    "ipa": "d ˈæ n s ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_181",
    "word": "dancing",
    "pos": "n.",
    "meaning": "การเต้นรำ",
    "reading": "แด๊ น สิ่ ง",
    "ipa": "d ˈæ n s ɪ ŋ",
    "level": "A1"
  },
  {
    "id": "a1_182",
    "word": "dangerous",
    "pos": "adj.",
    "meaning": "อันตราย เด๊",
    "reading": "น เจ่อ ร เหรอะ สึ",
    "ipa": "d ˈeɪ n dʒ ɜːʴ ʌ s",
    "level": "A1"
  },
  {
    "id": "a1_183",
    "word": "dark",
    "pos": "adj.",
    "meaning": "มืด",
    "reading": "ดาร ขึ",
    "ipa": "d ˈɑː r k",
    "level": "A1"
  },
  {
    "id": "a1_184",
    "word": "date",
    "pos": "n.",
    "meaning": "วันที่",
    "reading": "เด ถึ",
    "ipa": "d ˈeɪ t",
    "level": "A1"
  },
  {
    "id": "a1_185",
    "word": "daughter",
    "pos": "n.",
    "meaning": "ลูกสาว",
    "reading": "ด๊อ เถ่อ ร",
    "ipa": "d ˈɔː t ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_186",
    "word": "day",
    "pos": "n.",
    "meaning": "วัน",
    "reading": "เด",
    "ipa": "d ˈeɪ",
    "level": "A1"
  },
  {
    "id": "a1_187",
    "word": "dear",
    "pos": "adj.",
    "meaning": "ที่รัก",
    "reading": "เดีย ร",
    "ipa": "d ˈɪ r",
    "level": "A1"
  },
  {
    "id": "a1_188",
    "word": "December",
    "pos": "n.",
    "meaning": "ธันวาคม",
    "reading": "ดิ เซ้ะ ม เบ่อ ร",
    "ipa": "d ɪ s ˈe m b ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_189",
    "word": "decide",
    "pos": "v.",
    "meaning": "ตัดสินใจ",
    "reading": "ดิ ซ้าย ดึ",
    "ipa": "d ˌɪ s ˈaɪ d",
    "level": "A1"
  },
  {
    "id": "a1_190",
    "word": "delicious",
    "pos": "adj.",
    "meaning": "อร่อย",
    "reading": "ดิ ลิ เฉอะ สึ",
    "ipa": "d ɪ l ˈɪ ʃ ʌ s",
    "level": "A1"
  },
  {
    "id": "a1_191",
    "word": "describe",
    "pos": "v.",
    "meaning": "อธิบาย",
    "reading": "ดิ สึ คร้าย บึ",
    "ipa": "d ɪ s k r ˈaɪ b",
    "level": "A1"
  },
  {
    "id": "a1_192",
    "word": "description",
    "pos": "n.",
    "meaning": "คำอธิบาย ดิ",
    "reading": "สึ คริ ผึ เฉอะ น",
    "ipa": "d ɪ s k r ˈɪ p ʃ ʌ n",
    "level": "A1"
  },
  {
    "id": "a1_193",
    "word": "design",
    "pos": "n. v.",
    "meaning": "ออกแบบ",
    "reading": "ดิ ซ้าย น",
    "ipa": "d ɪ z ˈaɪ n",
    "level": "A1"
  },
  {
    "id": "a1_194",
    "word": "desk",
    "pos": "n.",
    "meaning": "โต๊ะ",
    "reading": "เดะ สึ ขึ",
    "ipa": "d ˈe s k",
    "level": "A1"
  },
  {
    "id": "a1_195",
    "word": "detail",
    "pos": "n.",
    "meaning": "รายละเอียด",
    "reading": "ดิ เท้ ล",
    "ipa": "d ɪ t ˈeɪ l",
    "level": "A1"
  },
  {
    "id": "a1_196",
    "word": "dialogue",
    "pos": "n.",
    "meaning": "บทสนทนา",
    "reading": "ด๊าย เออะ ลอ กึ",
    "ipa": "d ˈaɪ ʌ l ˌɔː g",
    "level": "A1"
  },
  {
    "id": "a1_197",
    "word": "dictionary",
    "pos": "n.",
    "meaning": "พจนานุกรม",
    "reading": "ดิ้ ขึ เฉอะ แน ร อี่",
    "ipa": "d ˈɪ k ʃ ʌ n ˌe r iː",
    "level": "A1"
  },
  {
    "id": "a1_198",
    "word": "die",
    "pos": "v.",
    "meaning": "ตาย",
    "reading": "ดาย",
    "ipa": "d ˈaɪ",
    "level": "A1"
  },
  {
    "id": "a1_199",
    "word": "diet",
    "pos": "n.",
    "meaning": "อาหาร",
    "reading": "ด๊าย เออะ ถึ",
    "ipa": "d ˈaɪ ʌ t",
    "level": "A1"
  },
  {
    "id": "a1_200",
    "word": "difference",
    "pos": "n.",
    "meaning": "ความแตกต่าง ดิ้",
    "reading": "เฝ่อ ร เหรอะ น สึ",
    "ipa": "d ˈɪ f ɜːʴ ʌ n s",
    "level": "A1"
  },
  {
    "id": "a1_201",
    "word": "different",
    "pos": "adj.",
    "meaning": "แตกต่าง ดิ้",
    "reading": "เฝ่อ ร เหรอะ น ถึ",
    "ipa": "d ˈɪ f ɜːʴ ʌ n t",
    "level": "A1"
  },
  {
    "id": "a1_202",
    "word": "difficult",
    "pos": "adj.",
    "meaning": "ยาก",
    "reading": "ดิ้ เฝอะ เขอะ ล ถึ",
    "ipa": "d ˈɪ f ʌ k ʌ l t",
    "level": "A1"
  },
  {
    "id": "a1_203",
    "word": "dinner",
    "pos": "n.",
    "meaning": "อาหารเย็น",
    "reading": "ดิ้ เหน่อ ร",
    "ipa": "d ˈɪ n ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_204",
    "word": "dirty",
    "pos": "adj.",
    "meaning": "สกปรก",
    "reading": "เด๊อ ร ถี่",
    "ipa": "d ˈɜːʴ t iː",
    "level": "A1"
  },
  {
    "id": "a1_205",
    "word": "discuss",
    "pos": "v.",
    "meaning": "หารือ",
    "reading": "ดิ สึ คะ สึ",
    "ipa": "d ɪ s k ˈʌ s",
    "level": "A1"
  },
  {
    "id": "a1_206",
    "word": "dish",
    "pos": "n.",
    "meaning": "จาน",
    "reading": "ดิ ฉึ",
    "ipa": "d ˈɪ ʃ",
    "level": "A1"
  },
  {
    "id": "a1_207",
    "word": "do",
    "pos": "v. auxiliary v.",
    "meaning": "ทำ",
    "reading": "ดู",
    "ipa": "d ˈuː",
    "level": "A1"
  },
  {
    "id": "a1_208",
    "word": "doctor",
    "pos": "n.",
    "meaning": "หมอ",
    "reading": "ด๊า ขึ เถ่อ ร",
    "ipa": "d ˈɑː k t ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_209",
    "word": "dog",
    "pos": "n.",
    "meaning": "สุนัข",
    "reading": "ดอ กึ",
    "ipa": "d ˈɔː g",
    "level": "A1"
  },
  {
    "id": "a1_210",
    "word": "dollar",
    "pos": "n.",
    "meaning": "ดอลลาร์",
    "reading": "ด๊า เหล่อ ร",
    "ipa": "d ˈɑː l ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_211",
    "word": "door",
    "pos": "n.",
    "meaning": "ประตู",
    "reading": "ดอ ร",
    "ipa": "d ˈɔː r",
    "level": "A1"
  },
  {
    "id": "a1_212",
    "word": "down",
    "pos": "adv. prep.",
    "meaning": "ลง",
    "reading": "ดาว น",
    "ipa": "d ˈaʊ n",
    "level": "A1"
  },
  {
    "id": "a1_213",
    "word": "downstairs",
    "pos": "adv.",
    "meaning": "ชั้นล่าง",
    "reading": "ด๊าว น สึ แท้ ร สึ",
    "ipa": "d ˈaʊ n s t ˈe r z",
    "level": "A1"
  },
  {
    "id": "a1_214",
    "word": "draw",
    "pos": "v.",
    "meaning": "วาด",
    "reading": "ดรอ",
    "ipa": "d r ˈɔː",
    "level": "A1"
  },
  {
    "id": "a1_215",
    "word": "dress",
    "pos": "n. v.",
    "meaning": "ชุด",
    "reading": "เดระ สึ",
    "ipa": "d r ˈe s",
    "level": "A1"
  },
  {
    "id": "a1_216",
    "word": "drink",
    "pos": "n. v.",
    "meaning": "ดื่ม",
    "reading": "ดริ ง ขึ",
    "ipa": "d r ˈɪ ŋ k",
    "level": "A1"
  },
  {
    "id": "a1_217",
    "word": "drive",
    "pos": "v.",
    "meaning": "ขับ",
    "reading": "ดราย ฝึ",
    "ipa": "d r ˈaɪ v",
    "level": "A1"
  },
  {
    "id": "a1_218",
    "word": "driver",
    "pos": "n.",
    "meaning": "คนขับ",
    "reading": "ดร๊าย เฝ่อ ร",
    "ipa": "d r ˈaɪ v ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_219",
    "word": "during",
    "pos": "prep.",
    "meaning": "ในระหว่าง",
    "reading": "ดั๊ว ร อิ่ ง",
    "ipa": "d ˈʊ r ɪ ŋ",
    "level": "A1"
  },
  {
    "id": "a1_220",
    "word": "DVD",
    "pos": "n.",
    "meaning": "ดีวีดี",
    "reading": "ดี ฟี ดี๊",
    "ipa": "d ˌiː v ˌiː d ˈiː",
    "level": "A1"
  },
  {
    "id": "a1_221",
    "word": "each",
    "pos": "det. pron adv",
    "meaning": "แต่ละ",
    "reading": "อี๊ ฉึ",
    "ipa": "ˈiː tʃ",
    "level": "A1"
  },
  {
    "id": "a1_222",
    "word": "ear",
    "pos": "n.",
    "meaning": "หู",
    "reading": "อี๊ ร",
    "ipa": "ˈiː r",
    "level": "A1"
  },
  {
    "id": "a1_223",
    "word": "early",
    "pos": "adj. adv.",
    "meaning": "แต่แรก",
    "reading": "เอ๊อ ร หลี่",
    "ipa": "ˈɜːʴ l iː",
    "level": "A1"
  },
  {
    "id": "a1_224",
    "word": "east",
    "pos": "n. adj. adv.",
    "meaning": "ทิศตะวันออก",
    "reading": "อี๊ สึ ถึ",
    "ipa": "ˈiː s t",
    "level": "A1"
  },
  {
    "id": "a1_225",
    "word": "easy",
    "pos": "adj.",
    "meaning": "ง่าย",
    "reading": "อี๊ สี่",
    "ipa": "ˈiː z iː",
    "level": "A1"
  },
  {
    "id": "a1_226",
    "word": "eat",
    "pos": "v.",
    "meaning": "กิน",
    "reading": "อี๊ ถึ",
    "ipa": "ˈiː t",
    "level": "A1"
  },
  {
    "id": "a1_227",
    "word": "egg",
    "pos": "n.",
    "meaning": "ไข่",
    "reading": "เอ๊ะ กึ",
    "ipa": "ˈe g",
    "level": "A1"
  },
  {
    "id": "a1_228",
    "word": "eight",
    "pos": "number",
    "meaning": "แปด",
    "reading": "เอ๊ ถึ",
    "ipa": "ˈeɪ t",
    "level": "A1"
  },
  {
    "id": "a1_229",
    "word": "eighteen",
    "pos": "number",
    "meaning": "สิบแปด",
    "reading": "เอ่ ที้ น",
    "ipa": "eɪ t ˈiː n",
    "level": "A1"
  },
  {
    "id": "a1_230",
    "word": "eighty",
    "pos": "number",
    "meaning": "แปดสิบ",
    "reading": "เอ๊ ถี่",
    "ipa": "ˈeɪ t iː",
    "level": "A1"
  },
  {
    "id": "a1_231",
    "word": "elephant",
    "pos": "n.",
    "meaning": "ช้าง เอ๊ะ",
    "reading": "เหลอะ เฝอะ น ถึ",
    "ipa": "ˈe l ʌ f ʌ n t",
    "level": "A1"
  },
  {
    "id": "a1_232",
    "word": "eleven",
    "pos": "number",
    "meaning": "สิบเอ็ด",
    "reading": "อิ เล้ะ เฝอะ น",
    "ipa": "ɪ l ˈe v ʌ n",
    "level": "A1"
  },
  {
    "id": "a1_233",
    "word": "else",
    "pos": "adv.",
    "meaning": "อื่น",
    "reading": "เอ๊ะ ล สึ",
    "ipa": "ˈe l s",
    "level": "A1"
  },
  {
    "id": "a1_234",
    "word": "email",
    "pos": "n. v.",
    "meaning": "อีเมล",
    "reading": "อี่ เม้ ล",
    "ipa": "iː m ˈeɪ l",
    "level": "A1"
  },
  {
    "id": "a1_235",
    "word": "end",
    "pos": "n. v.",
    "meaning": "จบ",
    "reading": "เอ๊ะ น ดึ",
    "ipa": "ˈe n d",
    "level": "A1"
  },
  {
    "id": "a1_236",
    "word": "enjoy",
    "pos": "v.",
    "meaning": "สนุก",
    "reading": "เอะ น จ๊อย",
    "ipa": "ˌe n dʒ ˈɔɪ",
    "level": "A1"
  },
  {
    "id": "a1_237",
    "word": "enough",
    "pos": "det. pron. adv.",
    "meaning": "เพียงพอ",
    "reading": "อิ นะ ฝึ",
    "ipa": "ɪ n ˈʌ f",
    "level": "A1"
  },
  {
    "id": "a1_238",
    "word": "euro",
    "pos": "n.",
    "meaning": "ยูโร",
    "reading": "ยู้ โหร่ว",
    "ipa": "j ˈuː r əʊ",
    "level": "A1"
  },
  {
    "id": "a1_239",
    "word": "front",
    "pos": "n. adj.",
    "meaning": "ด้านหน้า",
    "reading": "ฟระ น ถึ",
    "ipa": "f r ˈʌ n t",
    "level": "A1"
  },
  {
    "id": "a1_240",
    "word": "fruit",
    "pos": "n.",
    "meaning": "ผลไม้",
    "reading": "ฟรู ถึ",
    "ipa": "f r ˈuː t",
    "level": "A1"
  },
  {
    "id": "a1_241",
    "word": "full",
    "pos": "adj.",
    "meaning": "เต็ม",
    "reading": "ฟุ ล",
    "ipa": "f ˈʊ l",
    "level": "A1"
  },
  {
    "id": "a1_242",
    "word": "fun",
    "pos": "n.",
    "meaning": "สนุก",
    "reading": "ฟะ น",
    "ipa": "f ˈʌ n",
    "level": "A1"
  },
  {
    "id": "a1_243",
    "word": "funny",
    "pos": "adj.",
    "meaning": "ตลก",
    "reading": "ฟะ หนี่",
    "ipa": "f ˈʌ n iː",
    "level": "A1"
  },
  {
    "id": "a1_244",
    "word": "future",
    "pos": "n.",
    "meaning": "อนาคต",
    "reading": "ฝึ ยู้ เฉ่อ ร",
    "ipa": "f j ˈuː tʃ ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_245",
    "word": "game",
    "pos": "n.",
    "meaning": "เกม",
    "reading": "เก ม",
    "ipa": "g ˈeɪ m",
    "level": "A1"
  },
  {
    "id": "a1_246",
    "word": "garden",
    "pos": "n.",
    "meaning": "สวน",
    "reading": "ก๊าร เดอะ น",
    "ipa": "g ˈɑː r d ʌ n",
    "level": "A1"
  },
  {
    "id": "a1_247",
    "word": "geography",
    "pos": "n.",
    "meaning": "ภูมิศาสตร์",
    "reading": "จี่ อ๊า เกรอะ ฝี่",
    "ipa": "dʒ iː ˈɑː g r ʌ f iː",
    "level": "A1"
  },
  {
    "id": "a1_248",
    "word": "get",
    "pos": "v.",
    "meaning": "รับ",
    "reading": "เกะ ถึ",
    "ipa": "g ˈe t",
    "level": "A1"
  },
  {
    "id": "a1_249",
    "word": "girl",
    "pos": "n.",
    "meaning": "สาว",
    "reading": "เกอ ร ล",
    "ipa": "g ˈɜːʴ l",
    "level": "A1"
  },
  {
    "id": "a1_250",
    "word": "girlfriend",
    "pos": "n.",
    "meaning": "แฟน เก๊อ",
    "reading": "ร ล เฟระ น ดึ",
    "ipa": "g ˈɜːʴ l f r ˌe n d",
    "level": "A1"
  },
  {
    "id": "a1_251",
    "word": "give",
    "pos": "v.",
    "meaning": "ให้",
    "reading": "กิ ฝึ",
    "ipa": "g ˈɪ v",
    "level": "A1"
  },
  {
    "id": "a1_252",
    "word": "glass",
    "pos": "n.",
    "meaning": "กระจก",
    "reading": "แกล สึ",
    "ipa": "g l ˈæ s",
    "level": "A1"
  },
  {
    "id": "a1_253",
    "word": "go",
    "pos": "v.",
    "meaning": "ไป",
    "reading": "โกว",
    "ipa": "g ˈəʊ",
    "level": "A1"
  },
  {
    "id": "a1_254",
    "word": "good",
    "pos": "adj.",
    "meaning": "ดี",
    "reading": "กุ ดึ",
    "ipa": "g ˈʊ d",
    "level": "A1"
  },
  {
    "id": "a1_255",
    "word": "goodbye",
    "pos": "exclam. n.",
    "meaning": "ลาก่อน",
    "reading": "กุ ดึ บ๊าย",
    "ipa": "g ˌʊ d b ˈaɪ",
    "level": "A1"
  },
  {
    "id": "a1_256",
    "word": "grandfather",
    "pos": "n.",
    "meaning": "คุณปู่ แกร๊",
    "reading": "น ดึ ฟา เด่อ ร",
    "ipa": "g r ˈæ n d f ˌɑː ð ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_257",
    "word": "grandmother",
    "pos": "n.",
    "meaning": "ยาย แกร๊",
    "reading": "น ดึ มะ เด่อ ร",
    "ipa": "g r ˈæ n d m ˌʌ ð ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_258",
    "word": "grandparent",
    "pos": "n.",
    "meaning": "ปู่ย่าตายาย แกร๊",
    "reading": "น ดึ แพ ร เออะ น ถึg",
    "ipa": "r ˈæ n d p ˌe r ʌ n t",
    "level": "A1"
  },
  {
    "id": "a1_259",
    "word": "great",
    "pos": "adj.",
    "meaning": "ยอดเยี่ยม",
    "reading": "เกร ถึ",
    "ipa": "g r ˈeɪ t",
    "level": "A1"
  },
  {
    "id": "a1_260",
    "word": "green",
    "pos": "adj. n.",
    "meaning": "สีเขียว",
    "reading": "กรี น",
    "ipa": "g r ˈiː n",
    "level": "A1"
  },
  {
    "id": "a1_261",
    "word": "grey",
    "pos": "adj. n.",
    "meaning": "สีเทา",
    "reading": "เกร",
    "ipa": "g r ˈeɪ",
    "level": "A1"
  },
  {
    "id": "a1_262",
    "word": "group",
    "pos": "n.",
    "meaning": "กลุ่ม",
    "reading": "กรู ผึ",
    "ipa": "g r ˈuː p",
    "level": "A1"
  },
  {
    "id": "a1_263",
    "word": "grow",
    "pos": "v.",
    "meaning": "เติบโต",
    "reading": "โกรว",
    "ipa": "g r ˈəʊ",
    "level": "A1"
  },
  {
    "id": "a1_264",
    "word": "guess",
    "pos": "v. n.",
    "meaning": "เดา",
    "reading": "เกะ สึ",
    "ipa": "g ˈe s",
    "level": "A1"
  },
  {
    "id": "a1_265",
    "word": "guitar",
    "pos": "n.",
    "meaning": "กีตาร์",
    "reading": "กิ ท้าร",
    "ipa": "g ɪ t ˈɑː r",
    "level": "A1"
  },
  {
    "id": "a1_266",
    "word": "gym",
    "pos": "n.",
    "meaning": "โรงยิม",
    "reading": "จิ ม",
    "ipa": "dʒ ˈɪ m",
    "level": "A1"
  },
  {
    "id": "a1_267",
    "word": "hair",
    "pos": "n.",
    "meaning": "ผม",
    "reading": "แฮ ร",
    "ipa": "h ˈe r",
    "level": "A1"
  },
  {
    "id": "a1_268",
    "word": "half",
    "pos": "n. det. pron.",
    "meaning": "ครึ่ง",
    "reading": "แฮ ฝึ",
    "ipa": "h ˈæ f",
    "level": "A1"
  },
  {
    "id": "a1_269",
    "word": "hand",
    "pos": "n.",
    "meaning": "มือ",
    "reading": "แฮ น ดึ",
    "ipa": "h ˈæ n d",
    "level": "A1"
  },
  {
    "id": "a1_270",
    "word": "happen",
    "pos": "v.",
    "meaning": "เกิดขึ้น",
    "reading": "แฮ้ เผอะ น",
    "ipa": "h ˈæ p ʌ n",
    "level": "A1"
  },
  {
    "id": "a1_271",
    "word": "happy",
    "pos": "adj.",
    "meaning": "มีความสุข",
    "reading": "แฮ้ ผี่่",
    "ipa": "h ˈæ p iː",
    "level": "A1"
  },
  {
    "id": "a1_272",
    "word": "hard",
    "pos": "adj. adv.",
    "meaning": "แข็ง",
    "reading": "ฮาร ดึ",
    "ipa": "h ˈɑː r d",
    "level": "A1"
  },
  {
    "id": "a1_273",
    "word": "hat",
    "pos": "n.",
    "meaning": "หมวก",
    "reading": "แฮ ถึ",
    "ipa": "h ˈæ t",
    "level": "A1"
  },
  {
    "id": "a1_274",
    "word": "hate",
    "pos": "v.",
    "meaning": "เกลียด",
    "reading": "เฮ ถึ",
    "ipa": "h ˈeɪ t",
    "level": "A1"
  },
  {
    "id": "a1_275",
    "word": "have",
    "pos": "v.",
    "meaning": "มี",
    "reading": "แฮ ฝึ",
    "ipa": "h ˈæ v",
    "level": "A1"
  },
  {
    "id": "a1_276",
    "word": "he",
    "pos": "pron.",
    "meaning": "เขา",
    "reading": "ฮี",
    "ipa": "h ˈiː",
    "level": "A1"
  },
  {
    "id": "a1_277",
    "word": "head",
    "pos": "n.",
    "meaning": "ศีรษะ",
    "reading": "เฮะ ดึ",
    "ipa": "h ˈe d",
    "level": "A1"
  },
  {
    "id": "a1_278",
    "word": "health",
    "pos": "n.",
    "meaning": "สุขภาพ",
    "reading": "เฮะ ล ตึ",
    "ipa": "h ˈe l θ",
    "level": "A1"
  },
  {
    "id": "a1_279",
    "word": "healthy",
    "pos": "adj.",
    "meaning": "สุขภาพดี",
    "reading": "เฮ้ะ ล ตี่",
    "ipa": "h ˈe l θ iː",
    "level": "A1"
  },
  {
    "id": "a1_280",
    "word": "hear",
    "pos": "v.",
    "meaning": "ได้ยิน",
    "reading": "ฮี ร",
    "ipa": "h ˈiː r",
    "level": "A1"
  },
  {
    "id": "a1_281",
    "word": "hello",
    "pos": "exclam. n.",
    "meaning": "สวัสดี",
    "reading": "เหอะ โล้ว",
    "ipa": "h ʌ l ˈəʊ",
    "level": "A1"
  },
  {
    "id": "a1_282",
    "word": "help",
    "pos": "v. n.",
    "meaning": "ช่วย",
    "reading": "เฮะ ล ผึ",
    "ipa": "h ˈe l p",
    "level": "A1"
  },
  {
    "id": "a1_283",
    "word": "her",
    "pos": "pron. det.",
    "meaning": "ของเธอ",
    "reading": "เฮอ ร",
    "ipa": "h ˈɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_284",
    "word": "here",
    "pos": "adv.",
    "meaning": "ที่นี่",
    "reading": "ฮี ร",
    "ipa": "h ˈiː r",
    "level": "A1"
  },
  {
    "id": "a1_285",
    "word": "hey",
    "pos": "exclam.",
    "meaning": "เฮ้",
    "reading": "เฮ",
    "ipa": "h ˈeɪ",
    "level": "A1"
  },
  {
    "id": "a1_286",
    "word": "hi",
    "pos": "exclam.",
    "meaning": "สวัสดี",
    "reading": "ฮาย",
    "ipa": "h ˈaɪ",
    "level": "A1"
  },
  {
    "id": "a1_287",
    "word": "high",
    "pos": "adj.",
    "meaning": "สูง",
    "reading": "ฮาย",
    "ipa": "h ˈaɪ",
    "level": "A1"
  },
  {
    "id": "a1_288",
    "word": "him",
    "pos": "pron.",
    "meaning": "เขา",
    "reading": "ฮิ ม",
    "ipa": "h ˈɪ m",
    "level": "A1"
  },
  {
    "id": "a1_289",
    "word": "his",
    "pos": "det.",
    "meaning": "ของเขา",
    "reading": "ฮิ สึ",
    "ipa": "h ˈɪ z",
    "level": "A1"
  },
  {
    "id": "a1_290",
    "word": "history",
    "pos": "n.",
    "meaning": "ประวัติศาสตร์",
    "reading": "ฮิ สึ เถ่อ ร หรี่",
    "ipa": "h ˈɪ s t ɜːʴ iː",
    "level": "A1"
  },
  {
    "id": "a1_291",
    "word": "hobby",
    "pos": "n.",
    "meaning": "งานอดิเรก",
    "reading": "ฮ้า บี่",
    "ipa": "h ˈɑː b iː",
    "level": "A1"
  },
  {
    "id": "a1_292",
    "word": "holiday",
    "pos": "n.",
    "meaning": "วันหยุด",
    "reading": "ฮ้า เหลอะ เด",
    "ipa": "h ˈɑː l ʌ d ˌeɪ",
    "level": "A1"
  },
  {
    "id": "a1_293",
    "word": "home",
    "pos": "n. adv.",
    "meaning": "บ้าน",
    "reading": "โฮว ม",
    "ipa": "h ˈəʊ m",
    "level": "A1"
  },
  {
    "id": "a1_294",
    "word": "homework",
    "pos": "n.",
    "meaning": "การบ้าน",
    "reading": "โฮ้ว ม เวอ ร ขึ",
    "ipa": "h ˈəʊ m w ˌɜːʴ k",
    "level": "A1"
  },
  {
    "id": "a1_295",
    "word": "hope",
    "pos": "v.",
    "meaning": "หวัง",
    "reading": "โฮว ผึ",
    "ipa": "h ˈəʊ p",
    "level": "A1"
  },
  {
    "id": "a1_296",
    "word": "horse",
    "pos": "n.",
    "meaning": "ม้า",
    "reading": "ฮอ ร สึ",
    "ipa": "h ˈɔː r s",
    "level": "A1"
  },
  {
    "id": "a1_297",
    "word": "hospital",
    "pos": "n.",
    "meaning": "โรงพยาบาล",
    "reading": "ฮ้า สึ พิ เถอะ ล",
    "ipa": "h ˈɑː s p ˌɪ t ʌ l",
    "level": "A1"
  },
  {
    "id": "a1_298",
    "word": "hot",
    "pos": "adj.",
    "meaning": "ร้อน",
    "reading": "ฮา ถึ",
    "ipa": "h ˈɑː t",
    "level": "A1"
  },
  {
    "id": "a1_299",
    "word": "hotel",
    "pos": "n.",
    "meaning": "โรงแรม",
    "reading": "โห่ว เท้ะ ล",
    "ipa": "h əʊ t ˈe l",
    "level": "A1"
  },
  {
    "id": "a1_300",
    "word": "hour",
    "pos": "n.",
    "meaning": "ชั่วโมง",
    "reading": "อ๊าว เอ่อ ร",
    "ipa": "ˈaʊ ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_301",
    "word": "house",
    "pos": "n.",
    "meaning": "บ้าน",
    "reading": "ฮาว สึ",
    "ipa": "h ˈaʊ s",
    "level": "A1"
  },
  {
    "id": "a1_302",
    "word": "how",
    "pos": "adv.",
    "meaning": "ยังไง",
    "reading": "ฮาว",
    "ipa": "h ˈaʊ",
    "level": "A1"
  },
  {
    "id": "a1_303",
    "word": "however",
    "pos": "adv.",
    "meaning": "อย่างไรก็ตาม",
    "reading": "ฮาว เอ๊ะ เฝ่อ ร",
    "ipa": "h ˌaʊ ˈe v ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_304",
    "word": "hundred",
    "pos": "number",
    "meaning": "ร้อย",
    "reading": "ฮะ น เดรอะ ดึ",
    "ipa": "h ˈʌ n d r ʌ d",
    "level": "A1"
  },
  {
    "id": "a1_305",
    "word": "hungry",
    "pos": "adj.",
    "meaning": "หิว",
    "reading": "ฮะ ง กรี่",
    "ipa": "h ˈʌ ŋ g r iː",
    "level": "A1"
  },
  {
    "id": "a1_306",
    "word": "husband",
    "pos": "n.",
    "meaning": "สามี",
    "reading": "ฮะ สึ เบอะ น ดึ",
    "ipa": "h ˈʌ z b ʌ n d",
    "level": "A1"
  },
  {
    "id": "a1_307",
    "word": "I",
    "pos": "pron.",
    "meaning": "ฉัน",
    "reading": "อ๊าย",
    "ipa": "ˈaɪ",
    "level": "A1"
  },
  {
    "id": "a1_308",
    "word": "ice",
    "pos": "n.",
    "meaning": "น้ำแข็ง",
    "reading": "อ๊าย สึ",
    "ipa": "ˈaɪ s",
    "level": "A1"
  },
  {
    "id": "a1_309",
    "word": "idea",
    "pos": "n.",
    "meaning": "ความคิด",
    "reading": "อ่าย ดี๊ เออะ",
    "ipa": "aɪ d ˈiː ʌ",
    "level": "A1"
  },
  {
    "id": "a1_310",
    "word": "if",
    "pos": "conj.",
    "meaning": "ถ้า",
    "reading": "อิ้ ฝึ",
    "ipa": "ˈɪ f",
    "level": "A1"
  },
  {
    "id": "a1_311",
    "word": "imagine",
    "pos": "v.",
    "meaning": "จินตนาการ",
    "reading": "อิ แม้ เจอะ น",
    "ipa": "ˌɪ m ˈæ dʒ ʌ n",
    "level": "A1"
  },
  {
    "id": "a1_312",
    "word": "important",
    "pos": "adj.",
    "meaning": "สำคัญ อิ",
    "reading": "ม พ้อ ร เถอะ น ถึ",
    "ipa": "ˌɪ m p ˈɔː r t ʌ n t",
    "level": "A1"
  },
  {
    "id": "a1_313",
    "word": "improve",
    "pos": "v.",
    "meaning": "ทำให้ดีขึ้น",
    "reading": "อิ ม พรู้ ฝึ",
    "ipa": "ˌɪ m p r ˈuː v",
    "level": "A1"
  },
  {
    "id": "a1_314",
    "word": "in",
    "pos": "prep. adv.",
    "meaning": "ใน",
    "reading": "อิ น",
    "ipa": "ɪ n",
    "level": "A1"
  },
  {
    "id": "a1_315",
    "word": "include",
    "pos": "v.",
    "meaning": "รวม",
    "reading": "อิ น คลู้ ดึ",
    "ipa": "ˌɪ n k l ˈuː d",
    "level": "A1"
  },
  {
    "id": "a1_316",
    "word": "information",
    "pos": "n.",
    "meaning": "ข้อมูล อิ",
    "reading": "น เฝ่อ ร เม้ เฉอะ น",
    "ipa": "ˌɪ n f ɜːʴ m ˈeɪ ʃ ʌ n",
    "level": "A1"
  },
  {
    "id": "a1_317",
    "word": "interest",
    "pos": "n. v.",
    "meaning": "ความสนใจ",
    "reading": "อิ้ น เถรอะ สึ ถึ",
    "ipa": "ˈɪ n t r ʌ s t",
    "level": "A1"
  },
  {
    "id": "a1_318",
    "word": "interested",
    "pos": "adj.",
    "meaning": "สนใจ อิ้",
    "reading": "น เถรอะ สึ ถิ่ ดึ",
    "ipa": "ˈɪ n t r ʌ s t ɪ d",
    "level": "A1"
  },
  {
    "id": "a1_319",
    "word": "interesting",
    "pos": "adj.",
    "meaning": "น่าสนใจ",
    "reading": "อิ้ น เถรอะ สึ ถิ่ ง",
    "ipa": "ˈɪ n t r ʌ s t ɪ ŋ",
    "level": "A1"
  },
  {
    "id": "a1_320",
    "word": "internet",
    "pos": "n.",
    "meaning": "อินเทอร์เน็ต",
    "reading": "อิ้ น เถ่อ ร เนะ ถึ",
    "ipa": "ˈɪ n t ɜːʴ n ˌe t",
    "level": "A1"
  },
  {
    "id": "a1_321",
    "word": "interview",
    "pos": "n. v.",
    "meaning": "สัมภาษณ์",
    "reading": "อิ้ น เถ่อ ร ฝึ ยู",
    "ipa": "ˈɪ n t ɜːʴ v j ˌuː",
    "level": "A1"
  },
  {
    "id": "a1_322",
    "word": "into",
    "pos": "prep.",
    "meaning": "เข้าไปข้างใน",
    "reading": "อิ้ น ถู่",
    "ipa": "ˈɪ n t uː",
    "level": "A1"
  },
  {
    "id": "a1_323",
    "word": "introduce",
    "pos": "v.",
    "meaning": "แนะนำ",
    "reading": "อิ น เถรอะ ดู๊ สึ",
    "ipa": "ˌɪ n t r ʌ d ˈuː s",
    "level": "A1"
  },
  {
    "id": "a1_324",
    "word": "island",
    "pos": "n.",
    "meaning": "เกาะ",
    "reading": "อ๊าย เหลอะ น ดึ",
    "ipa": "ˈaɪ l ʌ n d",
    "level": "A1"
  },
  {
    "id": "a1_325",
    "word": "it",
    "pos": "pron.",
    "meaning": "มัน",
    "reading": "อิ้ ถึ",
    "ipa": "ˈɪ t",
    "level": "A1"
  },
  {
    "id": "a1_326",
    "word": "its",
    "pos": "det.",
    "meaning": "ของมัน",
    "reading": "อิ้ ถึ สึ",
    "ipa": "ˈɪ t s",
    "level": "A1"
  },
  {
    "id": "a1_327",
    "word": "jacket",
    "pos": "n.",
    "meaning": "เสื้อแจ็กเกต",
    "reading": "แจ๊ เขอะ ถึ",
    "ipa": "dʒ ˈæ k ʌ t",
    "level": "A1"
  },
  {
    "id": "a1_328",
    "word": "January",
    "pos": "n.",
    "meaning": "มกราคม",
    "reading": "แจ๊ น หยู่ แอ ร อี่",
    "ipa": "dʒ ˈæ n j uː ˌe r iː",
    "level": "A1"
  },
  {
    "id": "a1_329",
    "word": "jeans",
    "pos": "n.",
    "meaning": "ยีนส์",
    "reading": "จี น สึ",
    "ipa": "dʒ ˈiː n z",
    "level": "A1"
  },
  {
    "id": "a1_330",
    "word": "job",
    "pos": "n.",
    "meaning": "งาน",
    "reading": "จา บึ",
    "ipa": "dʒ ˈɑː b",
    "level": "A1"
  },
  {
    "id": "a1_331",
    "word": "join",
    "pos": "v.",
    "meaning": "เข้าร่วม",
    "reading": "จอย น",
    "ipa": "dʒ ˈɔɪ n",
    "level": "A1"
  },
  {
    "id": "a1_332",
    "word": "journey",
    "pos": "n.",
    "meaning": "การเดินทาง",
    "reading": "เจ๊อ ร หนี่",
    "ipa": "dʒ ˈɜːʴ n iː",
    "level": "A1"
  },
  {
    "id": "a1_333",
    "word": "juice",
    "pos": "n.",
    "meaning": "น้ำผลไม้",
    "reading": "จู สึ",
    "ipa": "dʒ ˈuː s",
    "level": "A1"
  },
  {
    "id": "a1_334",
    "word": "July",
    "pos": "n.",
    "meaning": "กรกฎาคม",
    "reading": "จู ล้าย",
    "ipa": "dʒ ˌuː l ˈaɪ",
    "level": "A1"
  },
  {
    "id": "a1_335",
    "word": "June",
    "pos": "n.",
    "meaning": "มิถุนายน",
    "reading": "จู น",
    "ipa": "dʒ ˈuː n",
    "level": "A1"
  },
  {
    "id": "a1_336",
    "word": "just",
    "pos": "adv.",
    "meaning": "แค่",
    "reading": "จะ สึ ถึ",
    "ipa": "dʒ ˈʌ s t",
    "level": "A1"
  },
  {
    "id": "a1_337",
    "word": "keep",
    "pos": "v.",
    "meaning": "เก็บ",
    "reading": "คี ผึ",
    "ipa": "k ˈiː p",
    "level": "A1"
  },
  {
    "id": "a1_338",
    "word": "key",
    "pos": "n. adj.",
    "meaning": "สำคัญ",
    "reading": "คี",
    "ipa": "k ˈiː",
    "level": "A1"
  },
  {
    "id": "a1_339",
    "word": "kilometre",
    "pos": "n.",
    "meaning": "กิโลเมตร",
    "reading": "คิ ล้อ มะ เถ่อ ร",
    "ipa": "k ˌɪ l ˈɔː m ˌʌ t ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_340",
    "word": "kind",
    "pos": "(type) n.",
    "meaning": "ใจดี",
    "reading": "คาย น ดึ",
    "ipa": "k ˈaɪ n d",
    "level": "A1"
  },
  {
    "id": "a1_341",
    "word": "kitchen",
    "pos": "n.",
    "meaning": "ครัว",
    "reading": "คิ เฉอะ น",
    "ipa": "k ˈɪ tʃ ʌ n",
    "level": "A1"
  },
  {
    "id": "a1_342",
    "word": "know",
    "pos": "v.",
    "meaning": "ทราบ",
    "reading": "โนว",
    "ipa": "n ˈəʊ",
    "level": "A1"
  },
  {
    "id": "a1_343",
    "word": "land",
    "pos": "n.",
    "meaning": "ที่ดิน",
    "reading": "แล น ดึ",
    "ipa": "l ˈæ n d",
    "level": "A1"
  },
  {
    "id": "a1_344",
    "word": "language",
    "pos": "n.",
    "meaning": "ภาษา",
    "reading": "แล้ ง เกวอะ จึ",
    "ipa": "l ˈæ ŋ g w ʌ dʒ",
    "level": "A1"
  },
  {
    "id": "a1_345",
    "word": "large",
    "pos": "adj.",
    "meaning": "ใหญ่",
    "reading": "ลาร จึ",
    "ipa": "l ˈɑː r dʒ",
    "level": "A1"
  },
  {
    "id": "a1_346",
    "word": "last",
    "pos": "(final) det.",
    "meaning": "ล่าสุด",
    "reading": "แล สึ ถึ",
    "ipa": "l ˈæ s t",
    "level": "A1"
  },
  {
    "id": "a1_347",
    "word": "late",
    "pos": "adj. adv.",
    "meaning": "ช้า",
    "reading": "เล ถึ",
    "ipa": "l ˈeɪ t",
    "level": "A1"
  },
  {
    "id": "a1_348",
    "word": "later",
    "pos": "adv.",
    "meaning": "ภายหลัง",
    "reading": "เล้ เถ่อ ร",
    "ipa": "l ˈeɪ t ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_349",
    "word": "laugh",
    "pos": "v. n.",
    "meaning": "หัวเราะ",
    "reading": "แล ฝึ",
    "ipa": "l ˈæ f",
    "level": "A1"
  },
  {
    "id": "a1_350",
    "word": "learn",
    "pos": "v.",
    "meaning": "เรียนรู้",
    "reading": "เลอ ร น",
    "ipa": "l ˈɜːʴ n",
    "level": "A1"
  },
  {
    "id": "a1_351",
    "word": "leave",
    "pos": "v.",
    "meaning": "ออกจาก",
    "reading": "ลี ฝึ",
    "ipa": "l ˈiː v",
    "level": "A1"
  },
  {
    "id": "a1_352",
    "word": "left",
    "pos": "adj. adv. n.",
    "meaning": "ซ้าย",
    "reading": "เละ ฝึ ถึ",
    "ipa": "l ˈe f t",
    "level": "A1"
  },
  {
    "id": "a1_353",
    "word": "leg",
    "pos": "n.",
    "meaning": "ขา",
    "reading": "เละ กึ",
    "ipa": "l ˈe g",
    "level": "A1"
  },
  {
    "id": "a1_354",
    "word": "lesson",
    "pos": "n.",
    "meaning": "บทเรียน",
    "reading": "เล้ะ เสอะ น",
    "ipa": "l ˈe s ʌ n",
    "level": "A1"
  },
  {
    "id": "a1_355",
    "word": "let",
    "pos": "v.",
    "meaning": "อนุญาต",
    "reading": "เละ ถึ",
    "ipa": "l ˈe t",
    "level": "A1"
  },
  {
    "id": "a1_356",
    "word": "letter",
    "pos": "n.",
    "meaning": "จดหมาย",
    "reading": "เล้ะ เถ่อ ร",
    "ipa": "l ˈe t ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_357",
    "word": "library",
    "pos": "n.",
    "meaning": "ห้องสมุด",
    "reading": "ล้าย แบร่ ร อี",
    "ipa": "l ˈaɪ b r e r ˌiː",
    "level": "A1"
  },
  {
    "id": "a1_358",
    "word": "lie",
    "pos": "v.",
    "meaning": "โกหก",
    "reading": "ลาย",
    "ipa": "l ˈaɪ",
    "level": "A1"
  },
  {
    "id": "a1_359",
    "word": "life",
    "pos": "n.",
    "meaning": "ชีวิต",
    "reading": "ลาย ฝึ",
    "ipa": "l ˈaɪ f",
    "level": "A1"
  },
  {
    "id": "a1_360",
    "word": "light",
    "pos": "n.",
    "meaning": "แสงสว่าง",
    "reading": "ลาย ถึ",
    "ipa": "l ˈaɪ t",
    "level": "A1"
  },
  {
    "id": "a1_361",
    "word": "like",
    "pos": "(similar) prep.",
    "meaning": "ชอบ",
    "reading": "ลาย ขึ",
    "ipa": "l ˈaɪ k",
    "level": "A1"
  },
  {
    "id": "a1_362",
    "word": "line",
    "pos": "n.",
    "meaning": "เส้น",
    "reading": "ลาย น",
    "ipa": "l ˈaɪ n",
    "level": "A1"
  },
  {
    "id": "a1_363",
    "word": "lion",
    "pos": "n.",
    "meaning": "สิงโต",
    "reading": "ล้าย เออะ น",
    "ipa": "l ˈaɪ ʌ n",
    "level": "A1"
  },
  {
    "id": "a1_364",
    "word": "list",
    "pos": "n. v.",
    "meaning": "รายการ",
    "reading": "ลิ สึ ถึ",
    "ipa": "l ˈɪ s t",
    "level": "A1"
  },
  {
    "id": "a1_365",
    "word": "listen",
    "pos": "v.",
    "meaning": "ฟัง",
    "reading": "ลิ เสอะ น",
    "ipa": "l ˈɪ s ʌ n",
    "level": "A1"
  },
  {
    "id": "a1_366",
    "word": "little",
    "pos": "adj. det. pron.",
    "meaning": "เล็กน้อย",
    "reading": "ลิ เถอะ ล",
    "ipa": "l ˈɪ t ʌ l",
    "level": "A1"
  },
  {
    "id": "a1_367",
    "word": "live",
    "pos": "v.",
    "meaning": "สด",
    "reading": "ลาย ฝึ",
    "ipa": "l ˈaɪ v",
    "level": "A1"
  },
  {
    "id": "a1_368",
    "word": "local",
    "pos": "adj.",
    "meaning": "ท้องถิ่น",
    "reading": "โล้ว เขอะ ล",
    "ipa": "l ˈəʊ k ʌ l",
    "level": "A1"
  },
  {
    "id": "a1_369",
    "word": "long",
    "pos": "adj. adv.",
    "meaning": "ยาว",
    "reading": "ลอ ง",
    "ipa": "l ˈɔː ŋ",
    "level": "A1"
  },
  {
    "id": "a1_370",
    "word": "look",
    "pos": "v.",
    "meaning": "ดู",
    "reading": "ลุ ขึ",
    "ipa": "l ˈʊ k",
    "level": "A1"
  },
  {
    "id": "a1_371",
    "word": "lose",
    "pos": "v.",
    "meaning": "สูญเสีย",
    "reading": "ลู สึ",
    "ipa": "l ˈuː z",
    "level": "A1"
  },
  {
    "id": "a1_372",
    "word": "lot",
    "pos": "pron. det. adv.",
    "meaning": "มาก",
    "reading": "ลา ถึ",
    "ipa": "l ˈɑː t",
    "level": "A1"
  },
  {
    "id": "a1_373",
    "word": "love",
    "pos": "n. v.",
    "meaning": "รัก",
    "reading": "ละ ฝึ",
    "ipa": "l ˈʌ v",
    "level": "A1"
  },
  {
    "id": "a1_374",
    "word": "lunch",
    "pos": "n.",
    "meaning": "อาหารกลางวัน",
    "reading": "ละ น ฉึ",
    "ipa": "l ˈʌ n tʃ",
    "level": "A1"
  },
  {
    "id": "a1_375",
    "word": "machine",
    "pos": "n.",
    "meaning": "เครื่องจักร",
    "reading": "เหมอะ ชี้ น",
    "ipa": "m ʌ ʃ ˈiː n",
    "level": "A1"
  },
  {
    "id": "a1_376",
    "word": "magazine",
    "pos": "n.",
    "meaning": "นิตยสาร",
    "reading": "แม้ เกอะ ซี น",
    "ipa": "m ˈæ g ʌ z ˌiː n",
    "level": "A1"
  },
  {
    "id": "a1_377",
    "word": "main",
    "pos": "adj.",
    "meaning": "หลัก",
    "reading": "เม น",
    "ipa": "m ˈeɪ n",
    "level": "A1"
  },
  {
    "id": "a1_378",
    "word": "make",
    "pos": "v.",
    "meaning": "ทำ",
    "reading": "เม ขึ",
    "ipa": "m ˈeɪ k",
    "level": "A1"
  },
  {
    "id": "a1_379",
    "word": "man",
    "pos": "n.",
    "meaning": "ผู้ชาย",
    "reading": "แม น",
    "ipa": "m ˈæ n",
    "level": "A1"
  },
  {
    "id": "a1_380",
    "word": "many",
    "pos": "det. pron.",
    "meaning": "มากมาย",
    "reading": "เม้ะ หนี่",
    "ipa": "m ˈe n iː",
    "level": "A1"
  },
  {
    "id": "a1_381",
    "word": "map",
    "pos": "n.",
    "meaning": "แผนที่",
    "reading": "แม ผึ",
    "ipa": "m ˈæ p",
    "level": "A1"
  },
  {
    "id": "a1_382",
    "word": "March",
    "pos": "n.",
    "meaning": "มีนาคม",
    "reading": "มาร ฉึ",
    "ipa": "m ˈɑː r tʃ",
    "level": "A1"
  },
  {
    "id": "a1_383",
    "word": "market",
    "pos": "n.",
    "meaning": "ตลาด",
    "reading": "ม้าร เขอะ ถึ",
    "ipa": "m ˈɑː r k ʌ t",
    "level": "A1"
  },
  {
    "id": "a1_384",
    "word": "married",
    "pos": "adj.",
    "meaning": "แต่งงานแล้ว",
    "reading": "แม้ ร อี่ ดึ",
    "ipa": "m ˈe r iː d",
    "level": "A1"
  },
  {
    "id": "a1_385",
    "word": "match",
    "pos": "n. v.",
    "meaning": "จับคู่",
    "reading": "แม ฉึ",
    "ipa": "m ˈæ tʃ",
    "level": "A1"
  },
  {
    "id": "a1_386",
    "word": "May",
    "pos": "n.",
    "meaning": "อาจ",
    "reading": "เม",
    "ipa": "m ˈeɪ",
    "level": "A1"
  },
  {
    "id": "a1_387",
    "word": "maybe",
    "pos": "adv.",
    "meaning": "อาจจะ",
    "reading": "เม้ บี่",
    "ipa": "m ˈeɪ b iː",
    "level": "A1"
  },
  {
    "id": "a1_388",
    "word": "me",
    "pos": "pron.",
    "meaning": "ฉัน",
    "reading": "มี",
    "ipa": "m ˈiː",
    "level": "A1"
  },
  {
    "id": "a1_389",
    "word": "meal",
    "pos": "n.",
    "meaning": "มื้อ",
    "reading": "มี ล",
    "ipa": "m ˈiː l",
    "level": "A1"
  },
  {
    "id": "a1_390",
    "word": "mean",
    "pos": "v.",
    "meaning": "หมายถึง",
    "reading": "มี น",
    "ipa": "m ˈiː n",
    "level": "A1"
  },
  {
    "id": "a1_391",
    "word": "meaning",
    "pos": "n.",
    "meaning": "ความหมาย",
    "reading": "มี้ หนิ่ ง",
    "ipa": "m ˈiː n ɪ ŋ",
    "level": "A1"
  },
  {
    "id": "a1_392",
    "word": "meat",
    "pos": "n.",
    "meaning": "เนื้อ",
    "reading": "มี ถึ",
    "ipa": "m ˈiː t",
    "level": "A1"
  },
  {
    "id": "a1_393",
    "word": "meet",
    "pos": "v.",
    "meaning": "พบปะ",
    "reading": "มี ถึ",
    "ipa": "m ˈiː t",
    "level": "A1"
  },
  {
    "id": "a1_394",
    "word": "meeting",
    "pos": "n.",
    "meaning": "การประชุม",
    "reading": "มี้ ถิ่ ง",
    "ipa": "m ˈiː t ɪ ŋ",
    "level": "A1"
  },
  {
    "id": "a1_395",
    "word": "member",
    "pos": "n.",
    "meaning": "สมาชิก",
    "reading": "เม้ะ ม เบ่อ ร",
    "ipa": "m ˈe m b ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_396",
    "word": "menu",
    "pos": "n.",
    "meaning": "เมนู",
    "reading": "เม้ะ น หยู่",
    "ipa": "m ˈe n j uː",
    "level": "A1"
  },
  {
    "id": "a1_397",
    "word": "message",
    "pos": "n.",
    "meaning": "ข้อความ",
    "reading": "เม้ะ เสอะ จึ",
    "ipa": "m ˈe s ʌ dʒ",
    "level": "A1"
  },
  {
    "id": "a1_398",
    "word": "metre",
    "pos": "n.",
    "meaning": "เมตร",
    "reading": "มี้ เถ่อ ร",
    "ipa": "m ˈiː t ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_399",
    "word": "midnight",
    "pos": "n.",
    "meaning": "เที่ยงคืน",
    "reading": "มิ ดึ นาย ถึ",
    "ipa": "m ˈɪ d n ˌaɪ t",
    "level": "A1"
  },
  {
    "id": "a1_400",
    "word": "mile",
    "pos": "n.",
    "meaning": "ไมล์",
    "reading": "มาย ล",
    "ipa": "m ˈaɪ l",
    "level": "A1"
  },
  {
    "id": "a1_401",
    "word": "milk",
    "pos": "n.",
    "meaning": "น้ำนม",
    "reading": "มิ ล ขึ",
    "ipa": "m ˈɪ l k",
    "level": "A1"
  },
  {
    "id": "a1_402",
    "word": "million",
    "pos": "number",
    "meaning": "ล้าน",
    "reading": "มิ ล เหยอะ น",
    "ipa": "m ˈɪ l j ʌ n",
    "level": "A1"
  },
  {
    "id": "a1_403",
    "word": "minute",
    "pos": "n.",
    "meaning": "นาที",
    "reading": "มิ เหนอะ ถึ",
    "ipa": "m ˈɪ n ʌ t",
    "level": "A1"
  },
  {
    "id": "a1_404",
    "word": "miss",
    "pos": "v.",
    "meaning": "นางสาว",
    "reading": "มิ สึ",
    "ipa": "m ˈɪ s",
    "level": "A1"
  },
  {
    "id": "a1_405",
    "word": "mistake",
    "pos": "n.",
    "meaning": "ความผิดพลาด",
    "reading": "หมิ่ สึ เท้ ขึ",
    "ipa": "m ɪ s t ˈeɪ k",
    "level": "A1"
  },
  {
    "id": "a1_406",
    "word": "model",
    "pos": "n.",
    "meaning": "แบบอย่าง",
    "reading": "ม้า เดอะ ล",
    "ipa": "m ˈɑː d ʌ l",
    "level": "A1"
  },
  {
    "id": "a1_407",
    "word": "modern",
    "pos": "adj.",
    "meaning": "ทันสมัย",
    "reading": "ม้า เด่อ ร น",
    "ipa": "m ˈɑː d ɜːʴ n",
    "level": "A1"
  },
  {
    "id": "a1_408",
    "word": "moment",
    "pos": "n.",
    "meaning": "ช่วงเวลา",
    "reading": "โม้ว เหมอะ น ถึ",
    "ipa": "m ˈəʊ m ʌ n t",
    "level": "A1"
  },
  {
    "id": "a1_409",
    "word": "Monday",
    "pos": "n.",
    "meaning": "วันจันทร์",
    "reading": "มะ น ดี่",
    "ipa": "m ˈʌ n d iː",
    "level": "A1"
  },
  {
    "id": "a1_410",
    "word": "money",
    "pos": "n.",
    "meaning": "เงิน",
    "reading": "มะ หนี่",
    "ipa": "m ˈʌ n iː",
    "level": "A1"
  },
  {
    "id": "a1_411",
    "word": "month",
    "pos": "n.",
    "meaning": "เดือน",
    "reading": "มะ น ตึ",
    "ipa": "m ˈʌ n θ",
    "level": "A1"
  },
  {
    "id": "a1_412",
    "word": "more",
    "pos": "det. adv. pron.",
    "meaning": "มากกว่า",
    "reading": "มอ ร",
    "ipa": "m ˈɔː r",
    "level": "A1"
  },
  {
    "id": "a1_413",
    "word": "morning",
    "pos": "n.",
    "meaning": "เช้า",
    "reading": "ม้อ ร หนิ่ ง",
    "ipa": "m ˈɔː r n ɪ ŋ",
    "level": "A1"
  },
  {
    "id": "a1_414",
    "word": "most",
    "pos": "det. adv. pron.",
    "meaning": "ที่สุด",
    "reading": "โมว สึ ถึ",
    "ipa": "m ˈəʊ s t",
    "level": "A1"
  },
  {
    "id": "a1_415",
    "word": "mother",
    "pos": "n.",
    "meaning": "แม่",
    "reading": "มะ เด่อ ร",
    "ipa": "m ˈʌ ð ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_416",
    "word": "mountain",
    "pos": "n.",
    "meaning": "ภูเขา",
    "reading": "ม้าว น เถอะ น",
    "ipa": "m ˈaʊ n t ʌ n",
    "level": "A1"
  },
  {
    "id": "a1_417",
    "word": "mouse",
    "pos": "n.",
    "meaning": "หนู",
    "reading": "มาว สึ",
    "ipa": "m ˈaʊ s",
    "level": "A1"
  },
  {
    "id": "a1_418",
    "word": "mouth",
    "pos": "n.",
    "meaning": "ปาก",
    "reading": "มาว ดึ",
    "ipa": "m ˈaʊ ð",
    "level": "A1"
  },
  {
    "id": "a1_419",
    "word": "move",
    "pos": "v.",
    "meaning": "เคลื่อนไหว",
    "reading": "มู ฝึ",
    "ipa": "m ˈuː v",
    "level": "A1"
  },
  {
    "id": "a1_420",
    "word": "movie",
    "pos": "n.",
    "meaning": "ภาพยนตร์",
    "reading": "มู้ ฝี่",
    "ipa": "m ˈuː v iː",
    "level": "A1"
  },
  {
    "id": "a1_421",
    "word": "much",
    "pos": "det. adv. pron.",
    "meaning": "มาก",
    "reading": "มะ ฉึ",
    "ipa": "m ˈʌ tʃ",
    "level": "A1"
  },
  {
    "id": "a1_422",
    "word": "mum",
    "pos": "n.",
    "meaning": "แม่",
    "reading": "มะ ม",
    "ipa": "m ˈʌ m",
    "level": "A1"
  },
  {
    "id": "a1_423",
    "word": "museum",
    "pos": "n.",
    "meaning": "พิพิธภัณฑ์",
    "reading": "ม หยู่ ซี้ เออะ ม",
    "ipa": "m j uː z ˈiː ʌ m",
    "level": "A1"
  },
  {
    "id": "a1_424",
    "word": "music",
    "pos": "n.",
    "meaning": "ดนตรี",
    "reading": "ม ยู้ สิ่ ขึ",
    "ipa": "m j ˈuː z ɪ k",
    "level": "A1"
  },
  {
    "id": "a1_425",
    "word": "my",
    "pos": "det.",
    "meaning": "ของฉัน",
    "reading": "มาย",
    "ipa": "m ˈaɪ",
    "level": "A1"
  },
  {
    "id": "a1_426",
    "word": "name",
    "pos": "n. v.",
    "meaning": "ชื่อ",
    "reading": "เน ม",
    "ipa": "n ˈeɪ m",
    "level": "A1"
  },
  {
    "id": "a1_427",
    "word": "natural",
    "pos": "adj.",
    "meaning": "เป็นธรรมชาติ แน้",
    "reading": "เฉ่อ ร เหรอะ ล",
    "ipa": "n ˈæ tʃ ɜːʴ ʌ l",
    "level": "A1"
  },
  {
    "id": "a1_428",
    "word": "near",
    "pos": "prep. adj. adv.",
    "meaning": "ใกล้",
    "reading": "เนีย ร",
    "ipa": "n ˈɪ r",
    "level": "A1"
  },
  {
    "id": "a1_429",
    "word": "need",
    "pos": "v.",
    "meaning": "ความต้องการ",
    "reading": "นี ดึ",
    "ipa": "n ˈiː d",
    "level": "A1"
  },
  {
    "id": "a1_430",
    "word": "negative",
    "pos": "adj.",
    "meaning": "เชิงลบ",
    "reading": "เน้ะ เกอะ ถิ่ ฝึ",
    "ipa": "n ˈe g ʌ t ɪ v",
    "level": "A1"
  },
  {
    "id": "a1_431",
    "word": "neighbour",
    "pos": "n.",
    "meaning": "เพื่อนบ้าน",
    "reading": "เน้ เบ่อ ร",
    "ipa": "n ˈeɪ b ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_432",
    "word": "never",
    "pos": "adv.",
    "meaning": "ไม่เคย",
    "reading": "เน้ะ เฝ่อ ร",
    "ipa": "n ˈe v ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_433",
    "word": "new",
    "pos": "adj.",
    "meaning": "ใหม่",
    "reading": "นู",
    "ipa": "n ˈuː",
    "level": "A1"
  },
  {
    "id": "a1_434",
    "word": "news",
    "pos": "n.",
    "meaning": "ข่าว",
    "reading": "นู สึ",
    "ipa": "n ˈuː z",
    "level": "A1"
  },
  {
    "id": "a1_435",
    "word": "newspaper",
    "pos": "n.",
    "meaning": "หนังสือพิมพ์",
    "reading": "นู้ สึ เพ เผ่อ ร",
    "ipa": "n ˈuː z p ˌeɪ p ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_436",
    "word": "next",
    "pos": "adj. adv.",
    "meaning": "ต่อไป",
    "reading": "เนะ ขึ สึ ถึ",
    "ipa": "n ˈe k s t",
    "level": "A1"
  },
  {
    "id": "a1_437",
    "word": "nice",
    "pos": "adj.",
    "meaning": "ดี",
    "reading": "นาย สึ",
    "ipa": "n ˈaɪ s",
    "level": "A1"
  },
  {
    "id": "a1_438",
    "word": "night",
    "pos": "n.",
    "meaning": "กลางคืน",
    "reading": "นาย ถึ",
    "ipa": "n ˈaɪ t",
    "level": "A1"
  },
  {
    "id": "a1_439",
    "word": "nine",
    "pos": "number",
    "meaning": "เก้า",
    "reading": "นาย น",
    "ipa": "n ˈaɪ n",
    "level": "A1"
  },
  {
    "id": "a1_440",
    "word": "nineteen",
    "pos": "number",
    "meaning": "สิบเก้า",
    "reading": "น้าย น ที้ น",
    "ipa": "n ˈaɪ n t ˈiː n",
    "level": "A1"
  },
  {
    "id": "a1_441",
    "word": "ninety",
    "pos": "number",
    "meaning": "เก้าสิบ",
    "reading": "น้าย น ถี่",
    "ipa": "n ˈaɪ n t iː",
    "level": "A1"
  },
  {
    "id": "a1_442",
    "word": "no",
    "pos": "exclam. det.",
    "meaning": "เลขที่",
    "reading": "โนว",
    "ipa": "n ˈəʊ",
    "level": "A1"
  },
  {
    "id": "a1_443",
    "word": "nobody",
    "pos": "pron.",
    "meaning": "ไม่มีใคร",
    "reading": "โน้ว บา ดี",
    "ipa": "n ˈəʊ b ˌɑː d ˌiː",
    "level": "A1"
  },
  {
    "id": "a1_444",
    "word": "north",
    "pos": "n. adj. adv.",
    "meaning": "ทิศเหนือ",
    "reading": "นอ ร ตึ",
    "ipa": "n ˈɔː r θ",
    "level": "A1"
  },
  {
    "id": "a1_445",
    "word": "nose",
    "pos": "n.",
    "meaning": "จมูก",
    "reading": "โนว สึ",
    "ipa": "n ˈəʊ z",
    "level": "A1"
  },
  {
    "id": "a1_446",
    "word": "not",
    "pos": "adv.",
    "meaning": "ไม่",
    "reading": "นา ถึ",
    "ipa": "n ˈɑː t",
    "level": "A1"
  },
  {
    "id": "a1_447",
    "word": "note",
    "pos": "n.",
    "meaning": "บันทึก",
    "reading": "โนว ถึ",
    "ipa": "n ˈəʊ t",
    "level": "A1"
  },
  {
    "id": "a1_448",
    "word": "nothing",
    "pos": "pron.",
    "meaning": "ไม่มีอะไร",
    "reading": "นะ ติ ง",
    "ipa": "n ˈʌ θ ɪ ŋ",
    "level": "A1"
  },
  {
    "id": "a1_449",
    "word": "November",
    "pos": "n.",
    "meaning": "พฤศจิกายน โหน่ว",
    "reading": "เฟ้ะ ม เบ่อ ร",
    "ipa": "n əʊ v ˈe m b ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_450",
    "word": "now",
    "pos": "adv.",
    "meaning": "ตอนนี้",
    "reading": "นาว",
    "ipa": "n ˈaʊ",
    "level": "A1"
  },
  {
    "id": "a1_451",
    "word": "number",
    "pos": "n.",
    "meaning": "ตัวเลข",
    "reading": "นะ ม เบ่อ ร",
    "ipa": "n ˈʌ m b ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_452",
    "word": "nurse",
    "pos": "n.",
    "meaning": "พยาบาล",
    "reading": "เนอ ร สึ",
    "ipa": "n ˈɜːʴ s",
    "level": "A1"
  },
  {
    "id": "a1_453",
    "word": "object",
    "pos": "n.",
    "meaning": "วัตถุ",
    "reading": "อ๊า บึ เจะ ขึ ถึ",
    "ipa": "ˈɑː b dʒ e k t",
    "level": "A1"
  },
  {
    "id": "a1_454",
    "word": "October",
    "pos": "n.",
    "meaning": "ตุลาคม",
    "reading": "อ่า ขึ โท้ว เบ่อ ร",
    "ipa": "ɑː k t ˈəʊ b ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_455",
    "word": "of",
    "pos": "prep.",
    "meaning": "ของ",
    "reading": "อ๊ะ ฝึ",
    "ipa": "ˈʌ v",
    "level": "A1"
  },
  {
    "id": "a1_456",
    "word": "off",
    "pos": "adv. prep.",
    "meaning": "ปิด",
    "reading": "อ๊อ ฝึ",
    "ipa": "ˈɔː f",
    "level": "A1"
  },
  {
    "id": "a1_457",
    "word": "office",
    "pos": "n.",
    "meaning": "สำนักงาน",
    "reading": "อ๊อ ฝิ่ สึ",
    "ipa": "ˈɔː f ɪ s",
    "level": "A1"
  },
  {
    "id": "a1_458",
    "word": "often",
    "pos": "adv.",
    "meaning": "บ่อยครั้ง",
    "reading": "อ๊อ เฝอะ น",
    "ipa": "ˈɔː f ʌ n",
    "level": "A1"
  },
  {
    "id": "a1_459",
    "word": "oh",
    "pos": "exclam.",
    "meaning": "โอ้",
    "reading": "โอ๊ว",
    "ipa": "ˈəʊ",
    "level": "A1"
  },
  {
    "id": "a1_460",
    "word": "OK",
    "pos": "exclam. adj. adv.",
    "meaning": "ตกลง",
    "reading": "โอ๊ว เค้",
    "ipa": "ˈəʊ k ˈeɪ",
    "level": "A1"
  },
  {
    "id": "a1_461",
    "word": "old",
    "pos": "adj.",
    "meaning": "เก่า",
    "reading": "โอ๊ว ล ดึ",
    "ipa": "ˈəʊ l d",
    "level": "A1"
  },
  {
    "id": "a1_462",
    "word": "on",
    "pos": "prep. adv.",
    "meaning": "บน",
    "reading": "อ๊า น",
    "ipa": "ˈɑː n",
    "level": "A1"
  },
  {
    "id": "a1_463",
    "word": "once",
    "pos": "adv.",
    "meaning": "ครั้งหนึ่ง",
    "reading": "วะ น สึ",
    "ipa": "w ˈʌ n s",
    "level": "A1"
  },
  {
    "id": "a1_464",
    "word": "one",
    "pos": "number pron. det.",
    "meaning": "หนึ่ง",
    "reading": "วะ น",
    "ipa": "w ˈʌ n",
    "level": "A1"
  },
  {
    "id": "a1_465",
    "word": "onion",
    "pos": "n.",
    "meaning": "หัวหอม",
    "reading": "อ๊ะ น เหยอะ น",
    "ipa": "ˈʌ n j ʌ n",
    "level": "A1"
  },
  {
    "id": "a1_466",
    "word": "online",
    "pos": "adj. adv.",
    "meaning": "ออนไลน์",
    "reading": "อ๊อ น ลาย น",
    "ipa": "ˈɔː n l ˌaɪ n",
    "level": "A1"
  },
  {
    "id": "a1_467",
    "word": "only",
    "pos": "adj. adv.",
    "meaning": "เท่านั้น",
    "reading": "โอ๊ว น หลี่",
    "ipa": "ˈəʊ n l iː",
    "level": "A1"
  },
  {
    "id": "a1_468",
    "word": "open",
    "pos": "adj. v.",
    "meaning": "เปิด",
    "reading": "โอ๊ว เผอะ น",
    "ipa": "ˈəʊ p ʌ n",
    "level": "A1"
  },
  {
    "id": "a1_469",
    "word": "opinion",
    "pos": "n.",
    "meaning": "ความคิดเห็น เออะ",
    "reading": "พิ น เหยอะ น",
    "ipa": "ʌ p ˈɪ n j ʌ n",
    "level": "A1"
  },
  {
    "id": "a1_470",
    "word": "opposite",
    "pos": "adj. n. prep. adv.",
    "meaning": "ตรงข้าม",
    "reading": "อ๊า เผอะ เสอะ ถึ",
    "ipa": "ˈɑː p ʌ z ʌ t",
    "level": "A1"
  },
  {
    "id": "a1_471",
    "word": "or",
    "pos": "conj.",
    "meaning": "หรือ",
    "reading": "อ๊อ ร",
    "ipa": "ˈɔː r",
    "level": "A1"
  },
  {
    "id": "a1_472",
    "word": "orange",
    "pos": "n. adj.",
    "meaning": "ส้ม",
    "reading": "อ๊อ เหรอะ น จึ",
    "ipa": "ˈɔː r ʌ n dʒ",
    "level": "A1"
  },
  {
    "id": "a1_473",
    "word": "order",
    "pos": "n. v.",
    "meaning": "คำสั่ง",
    "reading": "อ๊อ ร เด่อ ร",
    "ipa": "ˈɔː r d ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_474",
    "word": "other",
    "pos": "adj. pron.",
    "meaning": "อื่น",
    "reading": "อ๊ะ เด่อ ร",
    "ipa": "ˈʌ ð ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_475",
    "word": "our",
    "pos": "det.",
    "meaning": "ของเรา",
    "reading": "อ๊าว เอ่อ ร",
    "ipa": "ˈaʊ ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_476",
    "word": "out",
    "pos": "adv. prep.",
    "meaning": "ออก",
    "reading": "อ๊าว ถึ",
    "ipa": "ˈaʊ t",
    "level": "A1"
  },
  {
    "id": "a1_477",
    "word": "outside",
    "pos": "adv.",
    "meaning": "ข้างนอก",
    "reading": "อ๊าว ถึ ซ้าย ดึ",
    "ipa": "ˈaʊ t s ˈaɪ d",
    "level": "A1"
  },
  {
    "id": "a1_478",
    "word": "over",
    "pos": "prep. adv.",
    "meaning": "เกิน",
    "reading": "โอ๊ว เฝ่อ ร",
    "ipa": "ˈəʊ v ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_479",
    "word": "own",
    "pos": "adj. pron.",
    "meaning": "เป็นเจ้าของ",
    "reading": "โอ๊ว น",
    "ipa": "ˈəʊ n",
    "level": "A1"
  },
  {
    "id": "a1_480",
    "word": "page",
    "pos": "n.",
    "meaning": "หน้าหนังสือ",
    "reading": "เพ จึ",
    "ipa": "p ˈeɪ dʒ",
    "level": "A1"
  },
  {
    "id": "a1_481",
    "word": "paint",
    "pos": "v. n.",
    "meaning": "สี",
    "reading": "เพ น ถึ",
    "ipa": "p ˈeɪ n t",
    "level": "A1"
  },
  {
    "id": "a1_482",
    "word": "painting",
    "pos": "n.",
    "meaning": "จิตรกรรม",
    "reading": "เพ้ น ถิ่ ง",
    "ipa": "p ˈeɪ n t ɪ ŋ",
    "level": "A1"
  },
  {
    "id": "a1_483",
    "word": "pair",
    "pos": "n.",
    "meaning": "คู่",
    "reading": "แพ ร",
    "ipa": "p ˈe r",
    "level": "A1"
  },
  {
    "id": "a1_484",
    "word": "paper",
    "pos": "n.",
    "meaning": "กระดาษ",
    "reading": "เพ้ เผ่อ ร",
    "ipa": "p ˈeɪ p ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_485",
    "word": "paragraph",
    "pos": "n.",
    "meaning": "ย่อหน้า",
    "reading": "แพ้ เหรอะ แกร ฝึ",
    "ipa": "p ˈæ r ʌ g r ˌæ f",
    "level": "A1"
  },
  {
    "id": "a1_486",
    "word": "parent",
    "pos": "n.",
    "meaning": "พ่อแม่",
    "reading": "แพ้ ร เออะ น ถึ",
    "ipa": "p ˈe r ʌ n t",
    "level": "A1"
  },
  {
    "id": "a1_487",
    "word": "park",
    "pos": "n. v.",
    "meaning": "สวน",
    "reading": "พาร ขึ",
    "ipa": "p ˈɑː r k",
    "level": "A1"
  },
  {
    "id": "a1_488",
    "word": "part",
    "pos": "n.",
    "meaning": "ส่วนหนึ่ง",
    "reading": "พาร ถึ",
    "ipa": "p ˈɑː r t",
    "level": "A1"
  },
  {
    "id": "a1_489",
    "word": "partner",
    "pos": "n.",
    "meaning": "พันธมิตร",
    "reading": "พ้าร ถึ เหน่อ ร",
    "ipa": "p ˈɑː r t n ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_490",
    "word": "party",
    "pos": "n.",
    "meaning": "งานสังสรรค์",
    "reading": "พ้าร ถี่",
    "ipa": "p ˈɑː r t iː",
    "level": "A1"
  },
  {
    "id": "a1_491",
    "word": "passport",
    "pos": "n.",
    "meaning": "หนังสือเดินทาง",
    "reading": "แพ้ สึ พอ ร ถึ",
    "ipa": "p ˈæ s p ˌɔː r t",
    "level": "A1"
  },
  {
    "id": "a1_492",
    "word": "past",
    "pos": "adj. n. prep.",
    "meaning": "อดีต",
    "reading": "แพ สึ ถึ",
    "ipa": "p ˈæ s t",
    "level": "A1"
  },
  {
    "id": "a1_493",
    "word": "pay",
    "pos": "v.",
    "meaning": "จ่าย",
    "reading": "เพ",
    "ipa": "p ˈeɪ",
    "level": "A1"
  },
  {
    "id": "a1_494",
    "word": "pen",
    "pos": "n.",
    "meaning": "ปากกา",
    "reading": "เพะ น",
    "ipa": "p ˈe n",
    "level": "A1"
  },
  {
    "id": "a1_495",
    "word": "pencil",
    "pos": "n.",
    "meaning": "ดินสอ",
    "reading": "เพ้ะ น เสอะ ล",
    "ipa": "p ˈe n s ʌ l",
    "level": "A1"
  },
  {
    "id": "a1_496",
    "word": "people",
    "pos": "n.",
    "meaning": "ประชากร",
    "reading": "พี้ เผอะ ล",
    "ipa": "p ˈiː p ʌ l",
    "level": "A1"
  },
  {
    "id": "a1_497",
    "word": "pepper",
    "pos": "n.",
    "meaning": "พริกไทย",
    "reading": "เพ้ะ เผ่อ ร",
    "ipa": "p ˈe p ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_498",
    "word": "perfect",
    "pos": "adj.",
    "meaning": "สมบูรณ์แบบ",
    "reading": "เพ้อ ร ฟิ ขึ ถึ",
    "ipa": "p ˈɜːʴ f ˌɪ k t",
    "level": "A1"
  },
  {
    "id": "a1_499",
    "word": "period",
    "pos": "n.",
    "meaning": "ระยะเวลา",
    "reading": "เพี้ย ร อี่ เออะ ดึ",
    "ipa": "p ˈɪ r iː ʌ d",
    "level": "A1"
  },
  {
    "id": "a1_500",
    "word": "person",
    "pos": "n.",
    "meaning": "บุคคล",
    "reading": "เพ้อ ร เสอะ น",
    "ipa": "p ˈɜːʴ s ʌ n",
    "level": "A1"
  },
  {
    "id": "a1_501",
    "word": "personal",
    "pos": "adj.",
    "meaning": "ส่วนตัว เพ้อ",
    "reading": "ร สิ่ เหนอะ ล",
    "ipa": "p ˈɜːʴ s ɪ n ʌ l",
    "level": "A1"
  },
  {
    "id": "a1_502",
    "word": "phone",
    "pos": "n. v.",
    "meaning": "โทรศัพท์",
    "reading": "โฟว น",
    "ipa": "f ˈəʊ n",
    "level": "A1"
  },
  {
    "id": "a1_503",
    "word": "photo",
    "pos": "n.",
    "meaning": "รูปถ่าย",
    "reading": "โฟ้ว โทว",
    "ipa": "f ˈəʊ t ˌəʊ",
    "level": "A1"
  },
  {
    "id": "a1_504",
    "word": "photograph",
    "pos": "n.",
    "meaning": "รูปถ่าย",
    "reading": "โฟ้ว เถอะ แกร ฝึ",
    "ipa": "f ˈəʊ t ʌ g r ˌæ f",
    "level": "A1"
  },
  {
    "id": "a1_505",
    "word": "phrase",
    "pos": "n.",
    "meaning": "วลี",
    "reading": "เฟร สึ",
    "ipa": "f r ˈeɪ z",
    "level": "A1"
  },
  {
    "id": "a1_506",
    "word": "piano",
    "pos": "n.",
    "meaning": "เปียโน",
    "reading": "ผี่่ แอ๊ โหน่ว",
    "ipa": "p iː ˈæ n əʊ",
    "level": "A1"
  },
  {
    "id": "a1_507",
    "word": "picture",
    "pos": "n.",
    "meaning": "รูปภาพ",
    "reading": "พิ ขึ เฉ่อ ร",
    "ipa": "p ˈɪ k tʃ ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_508",
    "word": "piece",
    "pos": "n.",
    "meaning": "ชิ้นส่วน",
    "reading": "พี สึ",
    "ipa": "p ˈiː s",
    "level": "A1"
  },
  {
    "id": "a1_509",
    "word": "pig",
    "pos": "n.",
    "meaning": "หมู",
    "reading": "พิ กึ",
    "ipa": "p ˈɪ g",
    "level": "A1"
  },
  {
    "id": "a1_510",
    "word": "pink",
    "pos": "adj. n.",
    "meaning": "สีชมพู",
    "reading": "พิ ง ขึ",
    "ipa": "p ˈɪ ŋ k",
    "level": "A1"
  },
  {
    "id": "a1_511",
    "word": "no",
    "pos": "one pron.",
    "meaning": "เลขที่",
    "reading": "โนว",
    "ipa": "n ˈəʊ",
    "level": "A1"
  },
  {
    "id": "a1_512",
    "word": "nobody",
    "pos": "pron.",
    "meaning": "ไม่มีใคร",
    "reading": "โน้ว บา ดี",
    "ipa": "n ˈəʊ b ˌɑː d ˌiː",
    "level": "A1"
  },
  {
    "id": "a1_513",
    "word": "north",
    "pos": "n. adj. adv.",
    "meaning": "ทิศเหนือ",
    "reading": "นอ ร ตึ",
    "ipa": "n ˈɔː r θ",
    "level": "A1"
  },
  {
    "id": "a1_514",
    "word": "nose",
    "pos": "n.",
    "meaning": "จมูก",
    "reading": "โนว สึ",
    "ipa": "n ˈəʊ z",
    "level": "A1"
  },
  {
    "id": "a1_515",
    "word": "not",
    "pos": "adv.",
    "meaning": "ไม่",
    "reading": "นา ถึ",
    "ipa": "n ˈɑː t",
    "level": "A1"
  },
  {
    "id": "a1_516",
    "word": "note",
    "pos": "n.",
    "meaning": "บันทึก",
    "reading": "โนว ถึ",
    "ipa": "n ˈəʊ t",
    "level": "A1"
  },
  {
    "id": "a1_517",
    "word": "nothing",
    "pos": "pron.",
    "meaning": "ไม่มีอะไร",
    "reading": "นะ ติ ง",
    "ipa": "n ˈʌ θ ɪ ŋ",
    "level": "A1"
  },
  {
    "id": "a1_518",
    "word": "November",
    "pos": "n.",
    "meaning": "พฤศจิกายน โหน่ว",
    "reading": "เฟ้ะ ม เบ่อ ร",
    "ipa": "n əʊ v ˈe m b ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_519",
    "word": "now",
    "pos": "adv.",
    "meaning": "ตอนนี้",
    "reading": "นาว",
    "ipa": "n ˈaʊ",
    "level": "A1"
  },
  {
    "id": "a1_520",
    "word": "number",
    "pos": "n.",
    "meaning": "ตัวเลข",
    "reading": "นะ ม เบ่อ ร",
    "ipa": "n ˈʌ m b ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_521",
    "word": "nurse",
    "pos": "n.",
    "meaning": "พยาบาล",
    "reading": "เนอ ร สึ",
    "ipa": "n ˈɜːʴ s",
    "level": "A1"
  },
  {
    "id": "a1_522",
    "word": "object",
    "pos": "n.",
    "meaning": "วัตถุ",
    "reading": "อ๊า บึ เจะ ขึ ถึ",
    "ipa": "ˈɑː b dʒ e k t",
    "level": "A1"
  },
  {
    "id": "a1_523",
    "word": "o’clock",
    "pos": "adv.",
    "meaning": "โมง",
    "reading": "เออะ เคลอะ ขึ",
    "ipa": "ə ˈk l ɑː k",
    "level": "A1"
  },
  {
    "id": "a1_524",
    "word": "October",
    "pos": "n.",
    "meaning": "ตุลาคม",
    "reading": "อ่า ขึ โท้ว เบ่อ ร",
    "ipa": "ɑː k t ˈəʊ b ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_525",
    "word": "of",
    "pos": "prep.",
    "meaning": "ของ",
    "reading": "อ๊ะ ฝึ",
    "ipa": "ˈʌ v",
    "level": "A1"
  },
  {
    "id": "a1_526",
    "word": "off",
    "pos": "adv. prep.",
    "meaning": "ปิด",
    "reading": "อ๊อ ฝึ",
    "ipa": "ˈɔː f",
    "level": "A1"
  },
  {
    "id": "a1_527",
    "word": "office",
    "pos": "n.",
    "meaning": "สำนักงาน",
    "reading": "อ๊อ ฝิ่ สึ",
    "ipa": "ˈɔː f ɪ s",
    "level": "A1"
  },
  {
    "id": "a1_528",
    "word": "often",
    "pos": "adv.",
    "meaning": "บ่อยครั้ง",
    "reading": "อ๊อ เฝอะ น",
    "ipa": "ˈɔː f ʌ n",
    "level": "A1"
  },
  {
    "id": "a1_529",
    "word": "oh",
    "pos": "exclam.",
    "meaning": "โอ้",
    "reading": "โอ๊ว",
    "ipa": "ˈəʊ",
    "level": "A1"
  },
  {
    "id": "a1_530",
    "word": "OK",
    "pos": "exclam. adj. adv.",
    "meaning": "ตกลง",
    "reading": "โอ๊ว เค้",
    "ipa": "ˈəʊ k ˈeɪ",
    "level": "A1"
  },
  {
    "id": "a1_531",
    "word": "old",
    "pos": "adj.",
    "meaning": "เก่า",
    "reading": "โอ๊ว ล ดึ",
    "ipa": "ˈəʊ l d",
    "level": "A1"
  },
  {
    "id": "a1_532",
    "word": "on",
    "pos": "prep. adv.",
    "meaning": "บน",
    "reading": "อ๊า น",
    "ipa": "ˈɑː n",
    "level": "A1"
  },
  {
    "id": "a1_533",
    "word": "once",
    "pos": "adv.",
    "meaning": "ครั้งหนึ่ง",
    "reading": "วะ น สึ",
    "ipa": "w ˈʌ n s",
    "level": "A1"
  },
  {
    "id": "a1_534",
    "word": "one",
    "pos": "number pron. det.",
    "meaning": "หนึ่ง",
    "reading": "วะ น",
    "ipa": "w ˈʌ n",
    "level": "A1"
  },
  {
    "id": "a1_535",
    "word": "onion",
    "pos": "n.",
    "meaning": "หัวหอม",
    "reading": "อ๊ะ น เหยอะ น",
    "ipa": "ˈʌ n j ʌ n",
    "level": "A1"
  },
  {
    "id": "a1_536",
    "word": "online",
    "pos": "adj. adv.",
    "meaning": "ออนไลน์",
    "reading": "อ๊อ น ลาย น",
    "ipa": "ˈɔː n l ˌaɪ n",
    "level": "A1"
  },
  {
    "id": "a1_537",
    "word": "only",
    "pos": "adj. adv.",
    "meaning": "เท่านั้น",
    "reading": "โอ๊ว น หลี่",
    "ipa": "ˈəʊ n l iː",
    "level": "A1"
  },
  {
    "id": "a1_538",
    "word": "open",
    "pos": "adj. v.",
    "meaning": "เปิด",
    "reading": "โอ๊ว เผอะ น",
    "ipa": "ˈəʊ p ʌ n",
    "level": "A1"
  },
  {
    "id": "a1_539",
    "word": "opinion",
    "pos": "n.",
    "meaning": "ความคิดเห็น เออะ",
    "reading": "พิ น เหยอะ น",
    "ipa": "ʌ p ˈɪ n j ʌ n",
    "level": "A1"
  },
  {
    "id": "a1_540",
    "word": "opposite",
    "pos": "adj. n. prep. adv.",
    "meaning": "ตรงข้าม",
    "reading": "อ๊า เผอะ เสอะ ถึ",
    "ipa": "ˈɑː p ʌ z ʌ t",
    "level": "A1"
  },
  {
    "id": "a1_541",
    "word": "or",
    "pos": "conj.",
    "meaning": "หรือ",
    "reading": "อ๊อ ร",
    "ipa": "ˈɔː r",
    "level": "A1"
  },
  {
    "id": "a1_542",
    "word": "orange",
    "pos": "n. adj.",
    "meaning": "ส้ม",
    "reading": "อ๊อ เหรอะ น จึ",
    "ipa": "ˈɔː r ʌ n dʒ",
    "level": "A1"
  },
  {
    "id": "a1_543",
    "word": "order",
    "pos": "n. v.",
    "meaning": "คำสั่ง",
    "reading": "อ๊อ ร เด่อ ร",
    "ipa": "ˈɔː r d ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_544",
    "word": "other",
    "pos": "adj. pron.",
    "meaning": "อื่น",
    "reading": "อ๊ะ เด่อ ร",
    "ipa": "ˈʌ ð ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_545",
    "word": "our",
    "pos": "det.",
    "meaning": "ของเรา",
    "reading": "อ๊าว เอ่อ ร",
    "ipa": "ˈaʊ ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_546",
    "word": "out",
    "pos": "adv. prep.",
    "meaning": "ออก",
    "reading": "อ๊าว ถึ",
    "ipa": "ˈaʊ t",
    "level": "A1"
  },
  {
    "id": "a1_547",
    "word": "outside",
    "pos": "adv.",
    "meaning": "ข้างนอก",
    "reading": "อ๊าว ถึ ซ้าย ดึ",
    "ipa": "ˈaʊ t s ˈaɪ d",
    "level": "A1"
  },
  {
    "id": "a1_548",
    "word": "over",
    "pos": "prep. adv.",
    "meaning": "เกิน",
    "reading": "โอ๊ว เฝ่อ ร",
    "ipa": "ˈəʊ v ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_549",
    "word": "own",
    "pos": "adj. pron.",
    "meaning": "เป็นเจ้าของ",
    "reading": "โอ๊ว น",
    "ipa": "ˈəʊ n",
    "level": "A1"
  },
  {
    "id": "a1_550",
    "word": "page",
    "pos": "n.",
    "meaning": "หน้าหนังสือ",
    "reading": "เพ จึ",
    "ipa": "p ˈeɪ dʒ",
    "level": "A1"
  },
  {
    "id": "a1_551",
    "word": "paint",
    "pos": "v. n.",
    "meaning": "สี",
    "reading": "เพ น ถึ",
    "ipa": "p ˈeɪ n t",
    "level": "A1"
  },
  {
    "id": "a1_552",
    "word": "painting",
    "pos": "n.",
    "meaning": "จิตรกรรม",
    "reading": "เพ้ น ถิ่ ง",
    "ipa": "p ˈeɪ n t ɪ ŋ",
    "level": "A1"
  },
  {
    "id": "a1_553",
    "word": "pair",
    "pos": "n.",
    "meaning": "คู่",
    "reading": "แพ ร",
    "ipa": "p ˈe r",
    "level": "A1"
  },
  {
    "id": "a1_554",
    "word": "paper",
    "pos": "n.",
    "meaning": "กระดาษ",
    "reading": "เพ้ เผ่อ ร",
    "ipa": "p ˈeɪ p ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_555",
    "word": "paragraph",
    "pos": "n.",
    "meaning": "ย่อหน้า",
    "reading": "แพ้ เหรอะ แกร ฝึ",
    "ipa": "p ˈæ r ʌ g r ˌæ f",
    "level": "A1"
  },
  {
    "id": "a1_556",
    "word": "parent",
    "pos": "n.",
    "meaning": "พ่อแม่",
    "reading": "แพ้ ร เออะ น ถึ",
    "ipa": "p ˈe r ʌ n t",
    "level": "A1"
  },
  {
    "id": "a1_557",
    "word": "park",
    "pos": "n. v.",
    "meaning": "สวน",
    "reading": "พาร ขึ",
    "ipa": "p ˈɑː r k",
    "level": "A1"
  },
  {
    "id": "a1_558",
    "word": "part",
    "pos": "n.",
    "meaning": "ส่วนหนึ่ง",
    "reading": "พาร ถึ",
    "ipa": "p ˈɑː r t",
    "level": "A1"
  },
  {
    "id": "a1_559",
    "word": "partner",
    "pos": "n.",
    "meaning": "พันธมิตร",
    "reading": "พ้าร ถึ เหน่อ ร",
    "ipa": "p ˈɑː r t n ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_560",
    "word": "party",
    "pos": "n.",
    "meaning": "งานสังสรรค์",
    "reading": "พ้าร ถี่",
    "ipa": "p ˈɑː r t iː",
    "level": "A1"
  },
  {
    "id": "a1_561",
    "word": "passport",
    "pos": "n.",
    "meaning": "หนังสือเดินทาง",
    "reading": "แพ้ สึ พอ ร ถึ",
    "ipa": "p ˈæ s p ˌɔː r t",
    "level": "A1"
  },
  {
    "id": "a1_562",
    "word": "past",
    "pos": "adj. n. prep.",
    "meaning": "อดีต",
    "reading": "แพ สึ ถึ",
    "ipa": "p ˈæ s t",
    "level": "A1"
  },
  {
    "id": "a1_563",
    "word": "pay",
    "pos": "v.",
    "meaning": "จ่าย",
    "reading": "เพ",
    "ipa": "p ˈeɪ",
    "level": "A1"
  },
  {
    "id": "a1_564",
    "word": "pen",
    "pos": "n.",
    "meaning": "ปากกา",
    "reading": "เพะ น",
    "ipa": "p ˈe n",
    "level": "A1"
  },
  {
    "id": "a1_565",
    "word": "pencil",
    "pos": "n.",
    "meaning": "ดินสอ",
    "reading": "เพ้ะ น เสอะ ล",
    "ipa": "p ˈe n s ʌ l",
    "level": "A1"
  },
  {
    "id": "a1_566",
    "word": "people",
    "pos": "n.",
    "meaning": "ประชากร",
    "reading": "พี้ เผอะ ล",
    "ipa": "p ˈiː p ʌ l",
    "level": "A1"
  },
  {
    "id": "a1_567",
    "word": "pepper",
    "pos": "n.",
    "meaning": "พริกไทย",
    "reading": "เพ้ะ เผ่อ ร",
    "ipa": "p ˈe p ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_568",
    "word": "perfect",
    "pos": "adj.",
    "meaning": "สมบูรณ์แบบ",
    "reading": "เพ้อ ร ฟิ ขึ ถึ",
    "ipa": "p ˈɜːʴ f ˌɪ k t",
    "level": "A1"
  },
  {
    "id": "a1_569",
    "word": "period",
    "pos": "n.",
    "meaning": "ระยะเวลา",
    "reading": "เพี้ย ร อี่ เออะ ดึ",
    "ipa": "p ˈɪ r iː ʌ d",
    "level": "A1"
  },
  {
    "id": "a1_570",
    "word": "person",
    "pos": "n.",
    "meaning": "บุคคล",
    "reading": "เพ้อ ร เสอะ น",
    "ipa": "p ˈɜːʴ s ʌ n",
    "level": "A1"
  },
  {
    "id": "a1_571",
    "word": "personal",
    "pos": "adj.",
    "meaning": "ส่วนตัว เพ้อ",
    "reading": "ร สิ่ เหนอะ ล",
    "ipa": "p ˈɜːʴ s ɪ n ʌ l",
    "level": "A1"
  },
  {
    "id": "a1_572",
    "word": "phone",
    "pos": "n. v.",
    "meaning": "โทรศัพท์",
    "reading": "โฟว น",
    "ipa": "f ˈəʊ n",
    "level": "A1"
  },
  {
    "id": "a1_573",
    "word": "photo",
    "pos": "n.",
    "meaning": "รูปถ่าย",
    "reading": "โฟ้ว โทว",
    "ipa": "f ˈəʊ t ˌəʊ",
    "level": "A1"
  },
  {
    "id": "a1_574",
    "word": "photograph",
    "pos": "n.",
    "meaning": "รูปถ่าย",
    "reading": "โฟ้ว เถอะ แกร ฝึ",
    "ipa": "f ˈəʊ t ʌ g r ˌæ f",
    "level": "A1"
  },
  {
    "id": "a1_575",
    "word": "phrase",
    "pos": "n.",
    "meaning": "วลี",
    "reading": "เฟร สึ",
    "ipa": "f r ˈeɪ z",
    "level": "A1"
  },
  {
    "id": "a1_576",
    "word": "piano",
    "pos": "n.",
    "meaning": "เปียโน",
    "reading": "ผี่่ แอ๊ โหน่ว",
    "ipa": "p iː ˈæ n əʊ",
    "level": "A1"
  },
  {
    "id": "a1_577",
    "word": "picture",
    "pos": "n.",
    "meaning": "รูปภาพ",
    "reading": "พิ ขึ เฉ่อ ร",
    "ipa": "p ˈɪ k tʃ ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_578",
    "word": "piece",
    "pos": "n.",
    "meaning": "ชิ้นส่วน",
    "reading": "พี สึ",
    "ipa": "p ˈiː s",
    "level": "A1"
  },
  {
    "id": "a1_579",
    "word": "pig",
    "pos": "n.",
    "meaning": "หมู",
    "reading": "พิ กึ",
    "ipa": "p ˈɪ g",
    "level": "A1"
  },
  {
    "id": "a1_580",
    "word": "pink",
    "pos": "adj. n.",
    "meaning": "สีชมพู",
    "reading": "พิ ง ขึ",
    "ipa": "p ˈɪ ŋ k",
    "level": "A1"
  },
  {
    "id": "a1_581",
    "word": "Saturday",
    "pos": "n.",
    "meaning": "วันเสาร์",
    "reading": "แซ้ เถ่อ ร ดี่",
    "ipa": "s ˈæ t ɜːʴ d iː",
    "level": "A1"
  },
  {
    "id": "a1_582",
    "word": "say",
    "pos": "v.",
    "meaning": "พูด",
    "reading": "เซ",
    "ipa": "s ˈeɪ",
    "level": "A1"
  },
  {
    "id": "a1_583",
    "word": "school",
    "pos": "n.",
    "meaning": "โรงเรียน",
    "reading": "สึ คู ล",
    "ipa": "s k ˈuː l",
    "level": "A1"
  },
  {
    "id": "a1_584",
    "word": "science",
    "pos": "n.",
    "meaning": "ศาสตร์",
    "reading": "ซ้าย เออะ น สึ",
    "ipa": "s ˈaɪ ʌ n s",
    "level": "A1"
  },
  {
    "id": "a1_585",
    "word": "scientist",
    "pos": "n.",
    "meaning": "นักวิทยาศาสตร์ ซ้าย",
    "reading": "เออะ น ถิ่ สึ ถึ",
    "ipa": "s ˈaɪ ʌ n t ɪ s t",
    "level": "A1"
  },
  {
    "id": "a1_586",
    "word": "sea",
    "pos": "n.",
    "meaning": "ทะเล",
    "reading": "ซี",
    "ipa": "s ˈiː",
    "level": "A1"
  },
  {
    "id": "a1_587",
    "word": "second",
    "pos": "det.",
    "meaning": "ที่สอง",
    "reading": "เซ้ะ เขอะ น ดึ",
    "ipa": "s ˈe k ʌ n d",
    "level": "A1"
  },
  {
    "id": "a1_588",
    "word": "section",
    "pos": "n.",
    "meaning": "ส่วน",
    "reading": "เซ้ะ ขึ เฉอะ น",
    "ipa": "s ˈe k ʃ ʌ n",
    "level": "A1"
  },
  {
    "id": "a1_589",
    "word": "see",
    "pos": "v.",
    "meaning": "ดู",
    "reading": "ซี",
    "ipa": "s ˈiː",
    "level": "A1"
  },
  {
    "id": "a1_590",
    "word": "sell",
    "pos": "v.",
    "meaning": "ขาย",
    "reading": "เซะ ล",
    "ipa": "s ˈe l",
    "level": "A1"
  },
  {
    "id": "a1_591",
    "word": "send",
    "pos": "v.",
    "meaning": "ส่ง",
    "reading": "เซะ น ดึ",
    "ipa": "s ˈe n d",
    "level": "A1"
  },
  {
    "id": "a1_592",
    "word": "sentence",
    "pos": "n.",
    "meaning": "ประโยค",
    "reading": "เซ้ะ น เถอะ น สึ",
    "ipa": "s ˈe n t ʌ n s",
    "level": "A1"
  },
  {
    "id": "a1_593",
    "word": "September",
    "pos": "n.",
    "meaning": "กันยายน เสะ",
    "reading": "ผึ เท้ะ ม เบ่อ ร",
    "ipa": "s e p t ˈe m b ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_594",
    "word": "seven",
    "pos": "number",
    "meaning": "เจ็ด",
    "reading": "เซ้ะ เฝอะ น",
    "ipa": "s ˈe v ʌ n",
    "level": "A1"
  },
  {
    "id": "a1_595",
    "word": "seventeen",
    "pos": "number",
    "meaning": "สิบเจ็ด",
    "reading": "เซ้ะ เฝอะ น ที้ น",
    "ipa": "s ˈe v ʌ n t ˈiː n",
    "level": "A1"
  },
  {
    "id": "a1_596",
    "word": "seventy",
    "pos": "number",
    "meaning": "เจ็ดสิบ",
    "reading": "เซ้ะ เฝอะ น ถี่",
    "ipa": "s ˈe v ʌ n t iː",
    "level": "A1"
  },
  {
    "id": "a1_597",
    "word": "share",
    "pos": "v.",
    "meaning": "แบ่งปัน",
    "reading": "แช ร",
    "ipa": "ʃ ˈe r",
    "level": "A1"
  },
  {
    "id": "a1_598",
    "word": "she",
    "pos": "pron.",
    "meaning": "เธอ",
    "reading": "ชี",
    "ipa": "ʃ ˈiː",
    "level": "A1"
  },
  {
    "id": "a1_599",
    "word": "sheep",
    "pos": "n.",
    "meaning": "แกะ",
    "reading": "ชี ผึ",
    "ipa": "ʃ ˈiː p",
    "level": "A1"
  },
  {
    "id": "a1_600",
    "word": "shirt",
    "pos": "n.",
    "meaning": "เสื้อ",
    "reading": "เชอ ร ถึ",
    "ipa": "ʃ ˈɜːʴ t",
    "level": "A1"
  },
  {
    "id": "a1_601",
    "word": "shoe",
    "pos": "n.",
    "meaning": "รองเท้า",
    "reading": "ชู",
    "ipa": "ʃ ˈuː",
    "level": "A1"
  },
  {
    "id": "a1_602",
    "word": "shop",
    "pos": "n. v.",
    "meaning": "ร้านค้า",
    "reading": "ชา ผึ",
    "ipa": "ʃ ˈɑː p",
    "level": "A1"
  },
  {
    "id": "a1_603",
    "word": "shopping",
    "pos": "n.",
    "meaning": "ช้อปปิ้ง",
    "reading": "ช้า ผิ่ ง",
    "ipa": "ʃ ˈɑː p ɪ ŋ",
    "level": "A1"
  },
  {
    "id": "a1_604",
    "word": "short",
    "pos": "adj.",
    "meaning": "สั้น",
    "reading": "ชอ ร ถึ",
    "ipa": "ʃ ˈɔː r t",
    "level": "A1"
  },
  {
    "id": "a1_605",
    "word": "show",
    "pos": "v. n.",
    "meaning": "แสดง",
    "reading": "โชว",
    "ipa": "ʃ ˈəʊ",
    "level": "A1"
  },
  {
    "id": "a1_606",
    "word": "shower",
    "pos": "n.",
    "meaning": "อาบน้ำ",
    "reading": "ช้าว เอ่อ ร",
    "ipa": "ʃ ˈaʊ ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_607",
    "word": "sick",
    "pos": "adj.",
    "meaning": "ป่วย",
    "reading": "ซิ ขึ",
    "ipa": "s ˈɪ k",
    "level": "A1"
  },
  {
    "id": "a1_608",
    "word": "similar",
    "pos": "adj.",
    "meaning": "คล้ายกัน",
    "reading": "ซิ เหมอะ เหล่อ ร",
    "ipa": "s ˈɪ m ʌ l ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_609",
    "word": "sing",
    "pos": "v.",
    "meaning": "ร้องเพลง",
    "reading": "ซิ ง",
    "ipa": "s ˈɪ ŋ",
    "level": "A1"
  },
  {
    "id": "a1_610",
    "word": "singer",
    "pos": "n.",
    "meaning": "นักร้อง",
    "reading": "ซิ เหง่อ ร",
    "ipa": "s ˈɪ ŋ ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_611",
    "word": "sister",
    "pos": "n.",
    "meaning": "น้องสาว",
    "reading": "ซิ สึ เถ่อ ร",
    "ipa": "s ˈɪ s t ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_612",
    "word": "sit",
    "pos": "v.",
    "meaning": "นั่ง",
    "reading": "ซิ ถึ",
    "ipa": "s ˈɪ t",
    "level": "A1"
  },
  {
    "id": "a1_613",
    "word": "situation",
    "pos": "n.",
    "meaning": "สถานการณ์",
    "reading": "ซิ ฉู่ เอ๊ เฉอะ น",
    "ipa": "s ˌɪ tʃ uː ˈeɪ ʃ ʌ n",
    "level": "A1"
  },
  {
    "id": "a1_614",
    "word": "six",
    "pos": "number",
    "meaning": "หก",
    "reading": "ซิ ขึ สึ",
    "ipa": "s ˈɪ k s",
    "level": "A1"
  },
  {
    "id": "a1_615",
    "word": "sixteen",
    "pos": "number",
    "meaning": "สิบหก",
    "reading": "สิ่ ขึ สึ ที้ น",
    "ipa": "s ɪ k s t ˈiː n",
    "level": "A1"
  },
  {
    "id": "a1_616",
    "word": "sixty",
    "pos": "number",
    "meaning": "หกสิบ",
    "reading": "ซิ ขึ สึ ถี่",
    "ipa": "s ˈɪ k s t iː",
    "level": "A1"
  },
  {
    "id": "a1_617",
    "word": "skill",
    "pos": "n.",
    "meaning": "ทักษะ",
    "reading": "สึ คิ ล",
    "ipa": "s k ˈɪ l",
    "level": "A1"
  },
  {
    "id": "a1_618",
    "word": "skirt",
    "pos": "n.",
    "meaning": "กระโปรง",
    "reading": "สึ เคอ ร ถึ",
    "ipa": "s k ˈɜːʴ t",
    "level": "A1"
  },
  {
    "id": "a1_619",
    "word": "sleep",
    "pos": "v.",
    "meaning": "นอน",
    "reading": "สึ ลี ผึ",
    "ipa": "s l ˈiː p",
    "level": "A1"
  },
  {
    "id": "a1_620",
    "word": "slow",
    "pos": "adj.",
    "meaning": "ช้า",
    "reading": "สึ โลว",
    "ipa": "s l ˈəʊ",
    "level": "A1"
  },
  {
    "id": "a1_621",
    "word": "small",
    "pos": "adj.",
    "meaning": "เล็ก",
    "reading": "สึ มอ ล",
    "ipa": "s m ˈɔː l",
    "level": "A1"
  },
  {
    "id": "a1_622",
    "word": "snake",
    "pos": "n.",
    "meaning": "งู",
    "reading": "สึ เน ขึ",
    "ipa": "s n ˈeɪ k",
    "level": "A1"
  },
  {
    "id": "a1_623",
    "word": "snow",
    "pos": "n. v.",
    "meaning": "หิมะ",
    "reading": "สึ โนว",
    "ipa": "s n ˈəʊ",
    "level": "A1"
  },
  {
    "id": "a1_624",
    "word": "so",
    "pos": "adv. conj.",
    "meaning": "ดังนั้น",
    "reading": "โซว",
    "ipa": "s ˈəʊ",
    "level": "A1"
  },
  {
    "id": "a1_625",
    "word": "some",
    "pos": "det. pron.",
    "meaning": "บาง",
    "reading": "ซะ ม",
    "ipa": "s ˈʌ m",
    "level": "A1"
  },
  {
    "id": "a1_626",
    "word": "somebody",
    "pos": "pron.",
    "meaning": "ใครบางคน",
    "reading": "ซะ ม บา ดี่",
    "ipa": "s ˈʌ m b ˌɑː d iː",
    "level": "A1"
  },
  {
    "id": "a1_627",
    "word": "someone",
    "pos": "pron.",
    "meaning": "บางคน",
    "reading": "ซะ ม วะ น",
    "ipa": "s ˈʌ m w ˌʌ n",
    "level": "A1"
  },
  {
    "id": "a1_628",
    "word": "something",
    "pos": "pron.",
    "meaning": "บางสิ่งบางอย่าง",
    "reading": "ซะ ม ติ ง",
    "ipa": "s ˈʌ m θ ɪ ŋ",
    "level": "A1"
  },
  {
    "id": "a1_629",
    "word": "sometimes",
    "pos": "adv.",
    "meaning": "บางครั้ง",
    "reading": "เสอะ ม ท้าย ม สึ",
    "ipa": "s ʌ m t ˈaɪ m z",
    "level": "A1"
  },
  {
    "id": "a1_630",
    "word": "son",
    "pos": "n.",
    "meaning": "ลูกชาย",
    "reading": "ซะ น",
    "ipa": "s ˈʌ n",
    "level": "A1"
  },
  {
    "id": "a1_631",
    "word": "song",
    "pos": "n.",
    "meaning": "เพลง",
    "reading": "ซอ ง",
    "ipa": "s ˈɔː ŋ",
    "level": "A1"
  },
  {
    "id": "a1_632",
    "word": "soon",
    "pos": "adv.",
    "meaning": "เร็วๆ นี้",
    "reading": "ซู น",
    "ipa": "s ˈuː n",
    "level": "A1"
  },
  {
    "id": "a1_633",
    "word": "sorry",
    "pos": "adj. exclam.",
    "meaning": "ขอโทษ",
    "reading": "ซ้าร อี่",
    "ipa": "s ˈɑː r iː",
    "level": "A1"
  },
  {
    "id": "a1_634",
    "word": "sound",
    "pos": "n. v.",
    "meaning": "เสียง",
    "reading": "ซาว น ดึ",
    "ipa": "s ˈaʊ n d",
    "level": "A1"
  },
  {
    "id": "a1_635",
    "word": "soup",
    "pos": "n.",
    "meaning": "ซุป",
    "reading": "ซู ผึ",
    "ipa": "s ˈuː p",
    "level": "A1"
  },
  {
    "id": "a1_636",
    "word": "south",
    "pos": "n. adj. adv.",
    "meaning": "ใต้",
    "reading": "ซาว ตึ",
    "ipa": "s ˈaʊ θ",
    "level": "A1"
  },
  {
    "id": "a1_637",
    "word": "space",
    "pos": "n.",
    "meaning": "ช่องว่าง",
    "reading": "สึ เพ สึ",
    "ipa": "s p ˈeɪ s",
    "level": "A1"
  },
  {
    "id": "a1_638",
    "word": "speak",
    "pos": "v.",
    "meaning": "พูด",
    "reading": "สึ พี ขึ",
    "ipa": "s p ˈiː k",
    "level": "A1"
  },
  {
    "id": "a1_639",
    "word": "special",
    "pos": "adj.",
    "meaning": "พิเศษ",
    "reading": "สึ เพ้ะ เฉอะ ล",
    "ipa": "s p ˈe ʃ ʌ l",
    "level": "A1"
  },
  {
    "id": "a1_640",
    "word": "spell",
    "pos": "v.",
    "meaning": "สะกด",
    "reading": "สึ เพะ ล",
    "ipa": "s p ˈe l",
    "level": "A1"
  },
  {
    "id": "a1_641",
    "word": "spelling",
    "pos": "n.",
    "meaning": "การสะกดคำ",
    "reading": "สึ เพ้ะ หลิ่ ง",
    "ipa": "s p ˈe l ɪ ŋ",
    "level": "A1"
  },
  {
    "id": "a1_642",
    "word": "spend",
    "pos": "v.",
    "meaning": "ใช้จ่าย",
    "reading": "สึ เพะ น ดึ",
    "ipa": "s p ˈe n d",
    "level": "A1"
  },
  {
    "id": "a1_643",
    "word": "sport",
    "pos": "n.",
    "meaning": "กีฬา",
    "reading": "สึ พอ ร ถึ",
    "ipa": "s p ˈɔː r t",
    "level": "A1"
  },
  {
    "id": "a1_644",
    "word": "spring",
    "pos": "n.",
    "meaning": "ฤดูใบไม้ผลิ",
    "reading": "สึ พริ ง",
    "ipa": "s p r ˈɪ ŋ",
    "level": "A1"
  },
  {
    "id": "a1_645",
    "word": "stand",
    "pos": "v.",
    "meaning": "ยืน",
    "reading": "สึ แท น ดึ",
    "ipa": "s t ˈæ n d",
    "level": "A1"
  },
  {
    "id": "a1_646",
    "word": "star",
    "pos": "n.",
    "meaning": "ดาว",
    "reading": "สึ ทาร",
    "ipa": "s t ˈɑː r",
    "level": "A1"
  },
  {
    "id": "a1_647",
    "word": "start",
    "pos": "v.",
    "meaning": "เริ่ม",
    "reading": "สึ ทาร ถึ",
    "ipa": "s t ˈɑː r t",
    "level": "A1"
  },
  {
    "id": "a1_648",
    "word": "statement",
    "pos": "n.",
    "meaning": "คำแถลง สึ",
    "reading": "เท้ ถึ เหมอะ น ถึ",
    "ipa": "s t ˈeɪ t m ʌ n t",
    "level": "A1"
  },
  {
    "id": "a1_649",
    "word": "station",
    "pos": "n.",
    "meaning": "สถานี",
    "reading": "สึ เท้ เฉอะ น",
    "ipa": "s t ˈeɪ ʃ ʌ n",
    "level": "A1"
  },
  {
    "id": "a1_650",
    "word": "stay",
    "pos": "v.",
    "meaning": "อยู่",
    "reading": "สึ เท",
    "ipa": "s t ˈeɪ",
    "level": "A1"
  },
  {
    "id": "a1_651",
    "word": "still",
    "pos": "adv.",
    "meaning": "นิ่ง",
    "reading": "สึ ทิ ล",
    "ipa": "s t ˈɪ l",
    "level": "A1"
  },
  {
    "id": "a1_652",
    "word": "stop",
    "pos": "v. n.",
    "meaning": "หยุด",
    "reading": "สึ ทา ผึ",
    "ipa": "s t ˈɑː p",
    "level": "A1"
  },
  {
    "id": "a1_653",
    "word": "story",
    "pos": "n.",
    "meaning": "เรื่องราว",
    "reading": "สึ ท้อ หรี่",
    "ipa": "s t ˈɔː r iː",
    "level": "A1"
  },
  {
    "id": "a1_654",
    "word": "street",
    "pos": "n.",
    "meaning": "ถนน",
    "reading": "สึ ทรี ถึ",
    "ipa": "s t r ˈiː t",
    "level": "A1"
  },
  {
    "id": "a1_655",
    "word": "strong",
    "pos": "adj.",
    "meaning": "แข็งแกร่ง",
    "reading": "สึ ทรอ ง",
    "ipa": "s t r ˈɔː ŋ",
    "level": "A1"
  },
  {
    "id": "a1_656",
    "word": "student",
    "pos": "n.",
    "meaning": "นักเรียน",
    "reading": "สึ ทู้ เดอะ น ถึ",
    "ipa": "s t ˈuː d ʌ n t",
    "level": "A1"
  },
  {
    "id": "a1_657",
    "word": "study",
    "pos": "n. v.",
    "meaning": "ศึกษา",
    "reading": "สึ ทะ ดี่",
    "ipa": "s t ˈʌ d iː",
    "level": "A1"
  },
  {
    "id": "a1_658",
    "word": "style",
    "pos": "n.",
    "meaning": "สไตล์",
    "reading": "สึ ทาย ล",
    "ipa": "s t ˈaɪ l",
    "level": "A1"
  },
  {
    "id": "a1_659",
    "word": "subject",
    "pos": "n.",
    "meaning": "เรื่อง",
    "reading": "ซะ บึ จิ ขึ ถึ",
    "ipa": "s ˈʌ b dʒ ɪ k t",
    "level": "A1"
  },
  {
    "id": "a1_660",
    "word": "success",
    "pos": "n.",
    "meaning": "ความสำเร็จ",
    "reading": "เสอะ ขึ เซ้ะ สึ",
    "ipa": "s ʌ k s ˈe s",
    "level": "A1"
  },
  {
    "id": "a1_661",
    "word": "sugar",
    "pos": "n.",
    "meaning": "น้ำตาล",
    "reading": "ชุ เก่อ ร",
    "ipa": "ʃ ˈʊ g ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_662",
    "word": "summer",
    "pos": "n.",
    "meaning": "ฤดูร้อน",
    "reading": "ซะ เหม่อ ร",
    "ipa": "s ˈʌ m ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_663",
    "word": "sun",
    "pos": "n.",
    "meaning": "ดวงอาทิตย์",
    "reading": "ซะ น",
    "ipa": "s ˈʌ n",
    "level": "A1"
  },
  {
    "id": "a1_664",
    "word": "Sunday",
    "pos": "n.",
    "meaning": "วันอาทิตย์",
    "reading": "ซะ น เด",
    "ipa": "s ˈʌ n d ˌeɪ",
    "level": "A1"
  },
  {
    "id": "a1_665",
    "word": "supermarket",
    "pos": "n.",
    "meaning": "ซูเปอร์มาร์เก็ต",
    "reading": "ซู้ เผ่อ ร มาร ขิ่ ถึ",
    "ipa": "s ˈuː p ɜːʴ m ˌɑː r k ɪ t",
    "level": "A1"
  },
  {
    "id": "a1_666",
    "word": "sure",
    "pos": "adj.",
    "meaning": "แน่นอน",
    "reading": "ชัว ร",
    "ipa": "ʃ ˈʊ r",
    "level": "A1"
  },
  {
    "id": "a1_667",
    "word": "sweater",
    "pos": "n.",
    "meaning": "เสื้อกันหนาว",
    "reading": "สึ เว้ะ เถ่อ ร",
    "ipa": "s w ˈe t ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_668",
    "word": "swim",
    "pos": "v.",
    "meaning": "ว่ายน้ำ",
    "reading": "สึ วิ ม",
    "ipa": "s w ˈɪ m",
    "level": "A1"
  },
  {
    "id": "a1_669",
    "word": "swimming",
    "pos": "n.",
    "meaning": "การว่ายน้ำ",
    "reading": "สึ วิ หมิ่ ง",
    "ipa": "s w ˈɪ m ɪ ŋ",
    "level": "A1"
  },
  {
    "id": "a1_670",
    "word": "table",
    "pos": "n.",
    "meaning": "โต๊ะ",
    "reading": "เท้ เบอะ ล",
    "ipa": "t ˈeɪ b ʌ l",
    "level": "A1"
  },
  {
    "id": "a1_671",
    "word": "take",
    "pos": "v.",
    "meaning": "เอา",
    "reading": "เท ขึ",
    "ipa": "t ˈeɪ k",
    "level": "A1"
  },
  {
    "id": "a1_672",
    "word": "talk",
    "pos": "v.",
    "meaning": "พูดคุย",
    "reading": "ทอ ขึ",
    "ipa": "t ˈɔː k",
    "level": "A1"
  },
  {
    "id": "a1_673",
    "word": "tall",
    "pos": "adj.",
    "meaning": "สูง",
    "reading": "ทอ ล",
    "ipa": "t ˈɔː l",
    "level": "A1"
  },
  {
    "id": "a1_674",
    "word": "taxi",
    "pos": "n.",
    "meaning": "แท็กซี่",
    "reading": "แท้ ขึ สี่",
    "ipa": "t ˈæ k s iː",
    "level": "A1"
  },
  {
    "id": "a1_675",
    "word": "tea",
    "pos": "n.",
    "meaning": "ชา",
    "reading": "ที",
    "ipa": "t ˈiː",
    "level": "A1"
  },
  {
    "id": "a1_676",
    "word": "teach",
    "pos": "v.",
    "meaning": "สอน",
    "reading": "ที ฉึ",
    "ipa": "t ˈiː tʃ",
    "level": "A1"
  },
  {
    "id": "a1_677",
    "word": "teacher",
    "pos": "n.",
    "meaning": "ครู",
    "reading": "ที้ เฉ่อ ร",
    "ipa": "t ˈiː tʃ ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_678",
    "word": "team",
    "pos": "n.",
    "meaning": "ทีม",
    "reading": "ที ม",
    "ipa": "t ˈiː m",
    "level": "A1"
  },
  {
    "id": "a1_679",
    "word": "teenager",
    "pos": "n.",
    "meaning": "วัยรุ่น",
    "reading": "ที้ เน เจ่อ ร",
    "ipa": "t ˈiː n ˌeɪ dʒ ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_680",
    "word": "telephone",
    "pos": "n. v.",
    "meaning": "โทรศัพท์ เท้ะ",
    "reading": "เหลอะ โฟว น",
    "ipa": "t ˈe l ʌ f ˌəʊ n",
    "level": "A1"
  },
  {
    "id": "a1_681",
    "word": "television",
    "pos": "n.",
    "meaning": "โทรทัศน์ เท้ะ",
    "reading": "เหลอะ ฟิ เฉอะ น",
    "ipa": "t ˈe l ʌ v ˌɪ ʒ ʌ n",
    "level": "A1"
  },
  {
    "id": "a1_682",
    "word": "tell",
    "pos": "v.",
    "meaning": "บอก",
    "reading": "เทะ ล",
    "ipa": "t ˈe l",
    "level": "A1"
  },
  {
    "id": "a1_683",
    "word": "ten",
    "pos": "number",
    "meaning": "สิบ",
    "reading": "เทะ น",
    "ipa": "t ˈe n",
    "level": "A1"
  },
  {
    "id": "a1_684",
    "word": "tennis",
    "pos": "n.",
    "meaning": "เทนนิส",
    "reading": "เท้ะ เหนอะ สึ",
    "ipa": "t ˈe n ʌ s",
    "level": "A1"
  },
  {
    "id": "a1_685",
    "word": "terrible",
    "pos": "adj.",
    "meaning": "ย่ำแย่ แท้",
    "reading": "ร เออะ เบอะ ล",
    "ipa": "t ˈe r ʌ b ʌ l",
    "level": "A1"
  },
  {
    "id": "a1_686",
    "word": "test",
    "pos": "n. v.",
    "meaning": "ทดสอบ",
    "reading": "เทะ สึ ถึ",
    "ipa": "t ˈe s t",
    "level": "A1"
  },
  {
    "id": "a1_687",
    "word": "text",
    "pos": "n.",
    "meaning": "ข้อความ",
    "reading": "เทะ ขึ สึ ถึ",
    "ipa": "t ˈe k s t",
    "level": "A1"
  },
  {
    "id": "a1_688",
    "word": "than",
    "pos": "conj.",
    "meaning": "กว่า",
    "reading": "แด น",
    "ipa": "ð ˈæ n",
    "level": "A1"
  },
  {
    "id": "a1_689",
    "word": "thank",
    "pos": "v.",
    "meaning": "ขอบคุณ",
    "reading": "แต ง ขึ",
    "ipa": "θ ˈæ ŋ k",
    "level": "A1"
  },
  {
    "id": "a1_690",
    "word": "thanks",
    "pos": "exclam. n.",
    "meaning": "ขอบคุณ",
    "reading": "แต ง ขึ สึ",
    "ipa": "θ ˈæ ŋ k s",
    "level": "A1"
  },
  {
    "id": "a1_691",
    "word": "that",
    "pos": "det. pron. conj.",
    "meaning": "ที่",
    "reading": "แด ถึ",
    "ipa": "ð ˈæ t",
    "level": "A1"
  },
  {
    "id": "a1_692",
    "word": "the",
    "pos": "definite article",
    "meaning": "ที่",
    "reading": "เดอะ",
    "ipa": "ð ʌ",
    "level": "A1"
  },
  {
    "id": "a1_693",
    "word": "theatre",
    "pos": "n.",
    "meaning": "โรงภาพยนตร์",
    "reading": "ตี๊ เออะ เถ่อ ร",
    "ipa": "θ ˈiː ʌ t ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_694",
    "word": "their",
    "pos": "det.",
    "meaning": "ของพวกเขา",
    "reading": "แด ร",
    "ipa": "ð ˈe r",
    "level": "A1"
  },
  {
    "id": "a1_695",
    "word": "them",
    "pos": "pron.",
    "meaning": "พวกเขา",
    "reading": "เดะ ม",
    "ipa": "ð ˈe m",
    "level": "A1"
  },
  {
    "id": "a1_696",
    "word": "then",
    "pos": "adv.",
    "meaning": "แล้ว",
    "reading": "เดะ น",
    "ipa": "ð ˈe n",
    "level": "A1"
  },
  {
    "id": "a1_697",
    "word": "there",
    "pos": "adv.",
    "meaning": "ที่นั่น",
    "reading": "แด ร",
    "ipa": "ð ˈe r",
    "level": "A1"
  },
  {
    "id": "a1_698",
    "word": "they",
    "pos": "pron.",
    "meaning": "พวกเขา",
    "reading": "เด",
    "ipa": "ð ˈeɪ",
    "level": "A1"
  },
  {
    "id": "a1_699",
    "word": "thing",
    "pos": "n.",
    "meaning": "สิ่ง",
    "reading": "ติ ง",
    "ipa": "θ ˈɪ ŋ",
    "level": "A1"
  },
  {
    "id": "a1_700",
    "word": "think",
    "pos": "v.",
    "meaning": "คิด",
    "reading": "ติ ง ขึ",
    "ipa": "θ ˈɪ ŋ k",
    "level": "A1"
  },
  {
    "id": "a1_701",
    "word": "third",
    "pos": "number",
    "meaning": "ที่สาม",
    "reading": "เตอ ร ดึ",
    "ipa": "θ ˈɜːʴ d",
    "level": "A1"
  },
  {
    "id": "a1_702",
    "word": "thirsty",
    "pos": "adj.",
    "meaning": "กระหายน้ำ",
    "reading": "เต๊อ ร สึ ถี่",
    "ipa": "θ ˈɜːʴ s t iː",
    "level": "A1"
  },
  {
    "id": "a1_703",
    "word": "thirteen",
    "pos": "number",
    "meaning": "สิบสาม",
    "reading": "เต๊อ ร ที้ น",
    "ipa": "θ ˈɜːʴ t ˈiː n",
    "level": "A1"
  },
  {
    "id": "a1_704",
    "word": "thirty",
    "pos": "number",
    "meaning": "สามสิบ",
    "reading": "เต๊อ ร ดี",
    "ipa": "θ ˈɜːʴ d ˌiː",
    "level": "A1"
  },
  {
    "id": "a1_705",
    "word": "this",
    "pos": "det. pron.",
    "meaning": "นี้",
    "reading": "ดิ สึ",
    "ipa": "ð ˈɪ s",
    "level": "A1"
  },
  {
    "id": "a1_706",
    "word": "thousand",
    "pos": "number",
    "meaning": "พัน",
    "reading": "ต๊าว เสอะ น ดึ",
    "ipa": "θ ˈaʊ z ʌ n d",
    "level": "A1"
  },
  {
    "id": "a1_707",
    "word": "three",
    "pos": "number",
    "meaning": "สาม",
    "reading": "ตรี",
    "ipa": "θ r ˈiː",
    "level": "A1"
  },
  {
    "id": "a1_708",
    "word": "through",
    "pos": "prep. adv.",
    "meaning": "ผ่าน",
    "reading": "ตรู",
    "ipa": "θ r ˈuː",
    "level": "A1"
  },
  {
    "id": "a1_709",
    "word": "Thursday",
    "pos": "n.",
    "meaning": "วันพฤหัสบดี",
    "reading": "เต๊อ ร สึ เด",
    "ipa": "θ ˈɜːʴ z d ˌeɪ",
    "level": "A1"
  },
  {
    "id": "a1_710",
    "word": "ticket",
    "pos": "n.",
    "meaning": "ตั๋ว",
    "reading": "ทิ เขอะ ถึ",
    "ipa": "t ˈɪ k ʌ t",
    "level": "A1"
  },
  {
    "id": "a1_711",
    "word": "time",
    "pos": "n.",
    "meaning": "เวลา",
    "reading": "ทาย ม",
    "ipa": "t ˈaɪ m",
    "level": "A1"
  },
  {
    "id": "a1_712",
    "word": "tired",
    "pos": "adj.",
    "meaning": "เหนื่อย",
    "reading": "ท้าย เอ่อ ร ดึ",
    "ipa": "t ˈaɪ ɜːʴ d",
    "level": "A1"
  },
  {
    "id": "a1_713",
    "word": "title",
    "pos": "n.",
    "meaning": "ชื่อ",
    "reading": "ท้าย เถอะ ล",
    "ipa": "t ˈaɪ t ʌ l",
    "level": "A1"
  },
  {
    "id": "a1_714",
    "word": "prep. to",
    "pos": "infinitive marker",
    "meaning": "ถึง",
    "reading": "ทู",
    "ipa": "t ˈuː",
    "level": "A1"
  },
  {
    "id": "a1_715",
    "word": "today",
    "pos": "adv. n.",
    "meaning": "วันนี้",
    "reading": "เถอะ เด๊",
    "ipa": "t ʌ d ˈeɪ",
    "level": "A1"
  },
  {
    "id": "a1_716",
    "word": "together",
    "pos": "adv.",
    "meaning": "ด้วยกัน",
    "reading": "เถอะ เก๊ะ เด่อ ร",
    "ipa": "t ʌ g ˈe ð ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_717",
    "word": "toilet",
    "pos": "n.",
    "meaning": "ห้องน้ำ",
    "reading": "ท้อย เหลอะ ถึ",
    "ipa": "t ˈɔɪ l ʌ t",
    "level": "A1"
  },
  {
    "id": "a1_718",
    "word": "tomato",
    "pos": "n.",
    "meaning": "มะเขือเทศ",
    "reading": "เถอะ เม้ โทว",
    "ipa": "t ʌ m ˈeɪ t ˌəʊ",
    "level": "A1"
  },
  {
    "id": "a1_719",
    "word": "tomorrow",
    "pos": "adv. n.",
    "meaning": "พรุ่งนี้",
    "reading": "เถอะ ม้าร โอว",
    "ipa": "t ʌ m ˈɑː r ˌəʊ",
    "level": "A1"
  },
  {
    "id": "a1_720",
    "word": "tonight",
    "pos": "adv. n.",
    "meaning": "คืนนี้",
    "reading": "เถอะ น้าย ถึ",
    "ipa": "t ʌ n ˈaɪ t",
    "level": "A1"
  },
  {
    "id": "a1_721",
    "word": "too",
    "pos": "adv.",
    "meaning": "ด้วย",
    "reading": "ทู",
    "ipa": "t ˈuː",
    "level": "A1"
  },
  {
    "id": "a1_722",
    "word": "tooth",
    "pos": "n.",
    "meaning": "ฟัน",
    "reading": "ทู ตึ",
    "ipa": "t ˈuː θ",
    "level": "A1"
  },
  {
    "id": "a1_723",
    "word": "topic",
    "pos": "n.",
    "meaning": "หัวข้อ",
    "reading": "ท้า ผิ่ ขึ",
    "ipa": "t ˈɑː p ɪ k",
    "level": "A1"
  },
  {
    "id": "a1_724",
    "word": "tourist",
    "pos": "n.",
    "meaning": "นักท่องเที่ยว",
    "reading": "ทั้ว ร เออะ สึ ถึ",
    "ipa": "t ˈʊ r ʌ s t",
    "level": "A1"
  },
  {
    "id": "a1_725",
    "word": "town",
    "pos": "n.",
    "meaning": "เมือง",
    "reading": "ทาว น",
    "ipa": "t ˈaʊ n",
    "level": "A1"
  },
  {
    "id": "a1_726",
    "word": "traffic",
    "pos": "n.",
    "meaning": "การจราจร",
    "reading": "แทร้ ฝิ่ ขึ",
    "ipa": "t r ˈæ f ɪ k",
    "level": "A1"
  },
  {
    "id": "a1_727",
    "word": "train",
    "pos": "n.",
    "meaning": "รถไฟ",
    "reading": "เทร น",
    "ipa": "t r ˈeɪ n",
    "level": "A1"
  },
  {
    "id": "a1_728",
    "word": "travel",
    "pos": "v. n.",
    "meaning": "การท่องเที่ยว",
    "reading": "แทร้ เฝอะ ล",
    "ipa": "t r ˈæ v ʌ l",
    "level": "A1"
  },
  {
    "id": "a1_729",
    "word": "tree",
    "pos": "n.",
    "meaning": "ต้นไม้",
    "reading": "ทรี",
    "ipa": "t r ˈiː",
    "level": "A1"
  },
  {
    "id": "a1_730",
    "word": "trip",
    "pos": "n.",
    "meaning": "การเดินทาง",
    "reading": "ทริ ผึ",
    "ipa": "t r ˈɪ p",
    "level": "A1"
  },
  {
    "id": "a1_731",
    "word": "trousers",
    "pos": "n.",
    "meaning": "กางเกงขายาว",
    "reading": "ทร้าว เส่อ ร สึ",
    "ipa": "t r ˈaʊ z ɜːʴ z",
    "level": "A1"
  },
  {
    "id": "a1_732",
    "word": "TRUE",
    "pos": "adj.",
    "meaning": "จริง",
    "reading": "ทรู",
    "ipa": "t r ˈuː",
    "level": "A1"
  },
  {
    "id": "a1_733",
    "word": "try",
    "pos": "v.",
    "meaning": "พยายาม",
    "reading": "ทราย",
    "ipa": "t r ˈaɪ",
    "level": "A1"
  },
  {
    "id": "a1_734",
    "word": "T-shirt",
    "pos": "n.",
    "meaning": "เสื้อยืด",
    "reading": "ที้ เซอ ร ถึ",
    "ipa": "t ˈiː s ˌɜːʴ t",
    "level": "A1"
  },
  {
    "id": "a1_735",
    "word": "Tuesday",
    "pos": "n.",
    "meaning": "วันอังคาร",
    "reading": "ทู้ สึ ดี่",
    "ipa": "t ˈuː z d iː",
    "level": "A1"
  },
  {
    "id": "a1_736",
    "word": "turn",
    "pos": "v. n.",
    "meaning": "เปลี่ยน",
    "reading": "เทอ ร น",
    "ipa": "t ˈɜːʴ n",
    "level": "A1"
  },
  {
    "id": "a1_737",
    "word": "TV",
    "pos": "n.",
    "meaning": "โทรทัศน์",
    "reading": "ที้ ฟี้",
    "ipa": "t ˈiː v ˈiː",
    "level": "A1"
  },
  {
    "id": "a1_738",
    "word": "twelve",
    "pos": "number",
    "meaning": "สิบสอง",
    "reading": "เทวะ ล ฝึ",
    "ipa": "t w ˈe l v",
    "level": "A1"
  },
  {
    "id": "a1_739",
    "word": "twenty",
    "pos": "number",
    "meaning": "ยี่สิบ",
    "reading": "เทว้ะ น ถี่",
    "ipa": "t w ˈe n t iː",
    "level": "A1"
  },
  {
    "id": "a1_740",
    "word": "twice",
    "pos": "adv.",
    "meaning": "สองครั้ง",
    "reading": "ทวาย สึ",
    "ipa": "t w ˈaɪ s",
    "level": "A1"
  },
  {
    "id": "a1_741",
    "word": "two",
    "pos": "number",
    "meaning": "สอง",
    "reading": "ทู",
    "ipa": "t ˈuː",
    "level": "A1"
  },
  {
    "id": "a1_742",
    "word": "type",
    "pos": "n.",
    "meaning": "พิมพ์",
    "reading": "ทาย ผึ",
    "ipa": "t ˈaɪ p",
    "level": "A1"
  },
  {
    "id": "a1_743",
    "word": "umbrella",
    "pos": "n.",
    "meaning": "ร่ม เออะ",
    "reading": "ม เบร๊ะ เหลอะ",
    "ipa": "ʌ m b r ˈe l ʌ",
    "level": "A1"
  },
  {
    "id": "a1_744",
    "word": "uncle",
    "pos": "n.",
    "meaning": "ลุง",
    "reading": "อ๊ะ ง เขอะ ล",
    "ipa": "ˈʌ ŋ k ʌ l",
    "level": "A1"
  },
  {
    "id": "a1_745",
    "word": "under",
    "pos": "prep. adv.",
    "meaning": "ภายใต้",
    "reading": "อ๊ะ น เด่อ ร",
    "ipa": "ˈʌ n d ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_746",
    "word": "understand",
    "pos": "v.",
    "meaning": "เข้าใจ อะ",
    "reading": "น เด่อ ร สึ แท้ น ดึ",
    "ipa": "ˌʌ n d ɜːʴ s t ˈæ n d",
    "level": "A1"
  },
  {
    "id": "a1_747",
    "word": "university",
    "pos": "n.",
    "meaning": "มหาวิทยาลัย ยู เหนอะ",
    "reading": "เฟ้อ ร เสอะ ถี่",
    "ipa": "j ˌuː n ʌ v ˈɜːʴ s ʌ t iː",
    "level": "A1"
  },
  {
    "id": "a1_748",
    "word": "until",
    "pos": "conj. prep.",
    "meaning": "จนกระทั่ง",
    "reading": "เออะ น ทิ ล",
    "ipa": "ʌ n t ˈɪ l",
    "level": "A1"
  },
  {
    "id": "a1_749",
    "word": "up",
    "pos": "adv. prep.",
    "meaning": "ขึ้น",
    "reading": "อ๊ะ ผึ",
    "ipa": "ˈʌ p",
    "level": "A1"
  },
  {
    "id": "a1_750",
    "word": "upstairs",
    "pos": "adv.",
    "meaning": "ชั้นบน",
    "reading": "เออะ ผึ สึ แท้ ร สึ",
    "ipa": "ʌ p s t ˈe r z",
    "level": "A1"
  },
  {
    "id": "a1_751",
    "word": "us",
    "pos": "pron.",
    "meaning": "เรา",
    "reading": "อ๊ะ สึ",
    "ipa": "ˈʌ s",
    "level": "A1"
  },
  {
    "id": "a1_752",
    "word": "use",
    "pos": "v.",
    "meaning": "ใช้",
    "reading": "ยู สึ",
    "ipa": "j ˈuː s",
    "level": "A1"
  },
  {
    "id": "a1_753",
    "word": "useful",
    "pos": "adj.",
    "meaning": "มีประโยชน์",
    "reading": "ยู้ สึ เฝอะ ล",
    "ipa": "j ˈuː s f ʌ l",
    "level": "A1"
  },
  {
    "id": "a1_754",
    "word": "usually",
    "pos": "adv.",
    "meaning": "โดยปกติ ยู้",
    "reading": "เฉอะ เหวอะ หลี่",
    "ipa": "j ˈuː ʒ ʌ w ʌ l iː",
    "level": "A1"
  },
  {
    "id": "a1_755",
    "word": "vacation",
    "pos": "n.",
    "meaning": "วันหยุด",
    "reading": "เฝ่ เค้ เฉอะ น",
    "ipa": "v eɪ k ˈeɪ ʃ ʌ n",
    "level": "A1"
  },
  {
    "id": "a1_756",
    "word": "vegetable",
    "pos": "n.",
    "meaning": "ผัก เฟ้ะ",
    "reading": "จึ เถอะ เบอะ ล",
    "ipa": "v ˈe dʒ t ʌ b ʌ l",
    "level": "A1"
  },
  {
    "id": "a1_757",
    "word": "very",
    "pos": "adv.",
    "meaning": "มาก",
    "reading": "แฟ้ ร อี่",
    "ipa": "v ˈe r iː",
    "level": "A1"
  },
  {
    "id": "a1_758",
    "word": "video",
    "pos": "n.",
    "meaning": "วิดีโอ",
    "reading": "ฟิ ดี่ โอ่ว",
    "ipa": "v ˈɪ d iː əʊ",
    "level": "A1"
  },
  {
    "id": "a1_759",
    "word": "village",
    "pos": "n.",
    "meaning": "หมู่บ้าน",
    "reading": "ฟิ เหลอะ จึ",
    "ipa": "v ˈɪ l ʌ dʒ",
    "level": "A1"
  },
  {
    "id": "a1_760",
    "word": "visit",
    "pos": "v. n.",
    "meaning": "เยี่ยม",
    "reading": "ฟิ สิ่ ถึ",
    "ipa": "v ˈɪ z ɪ t",
    "level": "A1"
  },
  {
    "id": "a1_761",
    "word": "visitor",
    "pos": "n.",
    "meaning": "ผู้เยี่ยมชม",
    "reading": "ฟิ สิ่ เถ่อ ร",
    "ipa": "v ˈɪ z ɪ t ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_762",
    "word": "wait",
    "pos": "v.",
    "meaning": "รอ",
    "reading": "เว ถึ",
    "ipa": "w ˈeɪ t",
    "level": "A1"
  },
  {
    "id": "a1_763",
    "word": "waiter",
    "pos": "n.",
    "meaning": "บริกร",
    "reading": "เว้ เถ่อ ร",
    "ipa": "w ˈeɪ t ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_764",
    "word": "wake",
    "pos": "v.",
    "meaning": "ตื่น",
    "reading": "เว ขึ",
    "ipa": "w ˈeɪ k",
    "level": "A1"
  },
  {
    "id": "a1_765",
    "word": "walk",
    "pos": "v. n.",
    "meaning": "เดิน",
    "reading": "วอ ขึ",
    "ipa": "w ˈɔː k",
    "level": "A1"
  },
  {
    "id": "a1_766",
    "word": "wall",
    "pos": "n.",
    "meaning": "กำแพง",
    "reading": "วอ ล",
    "ipa": "w ˈɔː l",
    "level": "A1"
  },
  {
    "id": "a1_767",
    "word": "want",
    "pos": "v.",
    "meaning": "ต้องการ",
    "reading": "วา น ถึ",
    "ipa": "w ˈɑː n t",
    "level": "A1"
  },
  {
    "id": "a1_768",
    "word": "warm",
    "pos": "adj.",
    "meaning": "อบอุ่น",
    "reading": "วอ ร ม",
    "ipa": "w ˈɔː r m",
    "level": "A1"
  },
  {
    "id": "a1_769",
    "word": "wash",
    "pos": "v.",
    "meaning": "ล้าง",
    "reading": "วา ฉึ",
    "ipa": "w ˈɑː ʃ",
    "level": "A1"
  },
  {
    "id": "a1_770",
    "word": "watch",
    "pos": "v. n.",
    "meaning": "ดู",
    "reading": "วา ฉึ",
    "ipa": "w ˈɑː tʃ",
    "level": "A1"
  },
  {
    "id": "a1_771",
    "word": "water",
    "pos": "n.",
    "meaning": "น้ำ",
    "reading": "ว้อ เถ่อ ร",
    "ipa": "w ˈɔː t ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_772",
    "word": "way",
    "pos": "n.",
    "meaning": "ทาง",
    "reading": "เว",
    "ipa": "w ˈeɪ",
    "level": "A1"
  },
  {
    "id": "a1_773",
    "word": "we",
    "pos": "pron.",
    "meaning": "เรา",
    "reading": "วี",
    "ipa": "w ˈiː",
    "level": "A1"
  },
  {
    "id": "a1_774",
    "word": "wear",
    "pos": "v.",
    "meaning": "สวมใส่",
    "reading": "แว ร",
    "ipa": "w ˈe r",
    "level": "A1"
  },
  {
    "id": "a1_775",
    "word": "weather",
    "pos": "n.",
    "meaning": "สภาพอากาศ",
    "reading": "เว้ะ เด่อ ร",
    "ipa": "w ˈe ð ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_776",
    "word": "website",
    "pos": "n.",
    "meaning": "เว็บไซต์",
    "reading": "เว้ะ บึ ซาย ถึ",
    "ipa": "w ˈe b s ˌaɪ t",
    "level": "A1"
  },
  {
    "id": "a1_777",
    "word": "Wednesday",
    "pos": "n.",
    "meaning": "วันพุธ",
    "reading": "เว้ะ น สึ ดี่",
    "ipa": "w ˈe n z d iː",
    "level": "A1"
  },
  {
    "id": "a1_778",
    "word": "week",
    "pos": "n.",
    "meaning": "สัปดาห์",
    "reading": "วี ขึ",
    "ipa": "w ˈiː k",
    "level": "A1"
  },
  {
    "id": "a1_779",
    "word": "weekend",
    "pos": "n.",
    "meaning": "สุดสัปดาห์",
    "reading": "วี้ เคะ น ดึ",
    "ipa": "w ˈiː k ˌe n d",
    "level": "A1"
  },
  {
    "id": "a1_780",
    "word": "welcome",
    "pos": "exclam. v. adj.",
    "meaning": "ยินดีต้อนรับ",
    "reading": "เว้ะ ล เขอะ ม",
    "ipa": "w ˈe l k ʌ m",
    "level": "A1"
  },
  {
    "id": "a1_781",
    "word": "well",
    "pos": "adv. adj. exclam.",
    "meaning": "ดี",
    "reading": "เวะ ล",
    "ipa": "w ˈe l",
    "level": "A1"
  },
  {
    "id": "a1_782",
    "word": "west",
    "pos": "n. adj. adv.",
    "meaning": "ตะวันตก",
    "reading": "เวะ สึ ถึ",
    "ipa": "w ˈe s t",
    "level": "A1"
  },
  {
    "id": "a1_783",
    "word": "what",
    "pos": "pron. det.",
    "meaning": "อะไร",
    "reading": "วะ ถึ",
    "ipa": "w ˈʌ t",
    "level": "A1"
  },
  {
    "id": "a1_784",
    "word": "when",
    "pos": "adv. pron. conj.",
    "meaning": "เมื่อไร",
    "reading": "เวะ น",
    "ipa": "w ˈe n",
    "level": "A1"
  },
  {
    "id": "a1_785",
    "word": "where",
    "pos": "adv. conj.",
    "meaning": "ที่ไหน",
    "reading": "แว ร",
    "ipa": "w ˈe r",
    "level": "A1"
  },
  {
    "id": "a1_786",
    "word": "which",
    "pos": "pron. det.",
    "meaning": "ที่",
    "reading": "วิ ฉึ",
    "ipa": "w ˈɪ tʃ",
    "level": "A1"
  },
  {
    "id": "a1_787",
    "word": "white",
    "pos": "adj. n.",
    "meaning": "สีขาว",
    "reading": "วาย ถึ",
    "ipa": "w ˈaɪ t",
    "level": "A1"
  },
  {
    "id": "a1_788",
    "word": "who",
    "pos": "pron.",
    "meaning": "ใคร",
    "reading": "ฮู",
    "ipa": "h ˈuː",
    "level": "A1"
  },
  {
    "id": "a1_789",
    "word": "why",
    "pos": "adv.",
    "meaning": "ทำไม",
    "reading": "วาย",
    "ipa": "w ˈaɪ",
    "level": "A1"
  },
  {
    "id": "a1_790",
    "word": "wife",
    "pos": "n.",
    "meaning": "ภรรยา",
    "reading": "วาย ฝึ",
    "ipa": "w ˈaɪ f",
    "level": "A1"
  },
  {
    "id": "a1_791",
    "word": "win",
    "pos": "v.",
    "meaning": "ชนะ",
    "reading": "วิ น",
    "ipa": "w ˈɪ n",
    "level": "A1"
  },
  {
    "id": "a1_792",
    "word": "window",
    "pos": "n.",
    "meaning": "หน้าต่าง",
    "reading": "วิ น โด่ว",
    "ipa": "w ˈɪ n d əʊ",
    "level": "A1"
  },
  {
    "id": "a1_793",
    "word": "wine",
    "pos": "n.",
    "meaning": "ไวน์",
    "reading": "วาย น",
    "ipa": "w ˈaɪ n",
    "level": "A1"
  },
  {
    "id": "a1_794",
    "word": "winter",
    "pos": "n.",
    "meaning": "ฤดูหนาว",
    "reading": "วิ น เถ่อ ร",
    "ipa": "w ˈɪ n t ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_795",
    "word": "with",
    "pos": "prep.",
    "meaning": "กับ",
    "reading": "วิ ดึ",
    "ipa": "w ˈɪ ð",
    "level": "A1"
  },
  {
    "id": "a1_796",
    "word": "without",
    "pos": "prep.",
    "meaning": "ปราศจาก",
    "reading": "หวิ่ ต๊าว ถึ",
    "ipa": "w ɪ θ ˈaʊ t",
    "level": "A1"
  },
  {
    "id": "a1_797",
    "word": "woman",
    "pos": "n.",
    "meaning": "ผู้หญิง",
    "reading": "วุ เหมอะ น",
    "ipa": "w ˈʊ m ʌ n",
    "level": "A1"
  },
  {
    "id": "a1_798",
    "word": "wonderful",
    "pos": "adj.",
    "meaning": "มหัศจรรย์ วะ",
    "reading": "น เด่อ ร เฝอะ ล",
    "ipa": "w ˈʌ n d ɜːʴ f ʌ l",
    "level": "A1"
  },
  {
    "id": "a1_799",
    "word": "word",
    "pos": "n.",
    "meaning": "คำ",
    "reading": "เวอ ร ดึ",
    "ipa": "w ˈɜːʴ d",
    "level": "A1"
  },
  {
    "id": "a1_800",
    "word": "work",
    "pos": "v. n.",
    "meaning": "งาน",
    "reading": "เวอ ร ขึ",
    "ipa": "w ˈɜːʴ k",
    "level": "A1"
  },
  {
    "id": "a1_801",
    "word": "worker",
    "pos": "n.",
    "meaning": "คนงาน",
    "reading": "เว้อ ร เข่อ ร",
    "ipa": "w ˈɜːʴ k ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_802",
    "word": "world",
    "pos": "n.",
    "meaning": "โลก",
    "reading": "เวอ ร ล ดึ",
    "ipa": "w ˈɜːʴ l d",
    "level": "A1"
  },
  {
    "id": "a1_803",
    "word": "write",
    "pos": "v.",
    "meaning": "เขียน",
    "reading": "ราย ถึ",
    "ipa": "r ˈaɪ t",
    "level": "A1"
  },
  {
    "id": "a1_804",
    "word": "writer",
    "pos": "n.",
    "meaning": "นักเขียน",
    "reading": "ร้าย เถ่อ ร",
    "ipa": "r ˈaɪ t ɜːʴ",
    "level": "A1"
  },
  {
    "id": "a1_805",
    "word": "writing",
    "pos": "n.",
    "meaning": "การเขียน",
    "reading": "ร้าย ถิ่ ง",
    "ipa": "r ˈaɪ t ɪ ŋ",
    "level": "A1"
  },
  {
    "id": "a1_806",
    "word": "wrong",
    "pos": "adj.",
    "meaning": "ผิด",
    "reading": "รอ ง",
    "ipa": "r ˈɔː ŋ",
    "level": "A1"
  },
  {
    "id": "a1_807",
    "word": "yeah",
    "pos": "exclam.",
    "meaning": "ใช่",
    "reading": "แย",
    "ipa": "j ˈæ",
    "level": "A1"
  },
  {
    "id": "a1_808",
    "word": "year",
    "pos": "n.",
    "meaning": "ปี",
    "reading": "เยีย ร",
    "ipa": "j ˈɪ r",
    "level": "A1"
  },
  {
    "id": "a1_809",
    "word": "yellow",
    "pos": "adj. n.",
    "meaning": "สีเหลือง",
    "reading": "เย้ะ โหล่ว",
    "ipa": "j ˈe l əʊ",
    "level": "A1"
  },
  {
    "id": "a1_810",
    "word": "yes",
    "pos": "exclam.",
    "meaning": "ใช่",
    "reading": "เยะ สึ",
    "ipa": "j ˈe s",
    "level": "A1"
  },
  {
    "id": "a1_811",
    "word": "yesterday",
    "pos": "adv. n.",
    "meaning": "เมื่อวาน",
    "reading": "เย้ะ สึ เถ่อ ร เด",
    "ipa": "j ˈe s t ɜːʴ d ˌeɪ",
    "level": "A1"
  },
  {
    "id": "a1_812",
    "word": "you",
    "pos": "pron.",
    "meaning": "คุณ",
    "reading": "ยู",
    "ipa": "j ˈuː",
    "level": "A1"
  },
  {
    "id": "a1_813",
    "word": "young",
    "pos": "adj.",
    "meaning": "หนุ่มสาว",
    "reading": "ยะ ง",
    "ipa": "j ˈʌ ŋ",
    "level": "A1"
  },
  {
    "id": "a1_814",
    "word": "your",
    "pos": "det.",
    "meaning": "ของคุณ",
    "reading": "ยอ ร",
    "ipa": "j ˈɔː r",
    "level": "A1"
  },
  {
    "id": "a1_815",
    "word": "yourself",
    "pos": "pron.",
    "meaning": "ตัวคุณเอง",
    "reading": "เหย่อ ร เซ้ะ ล ฝึ",
    "ipa": "j ɜːʴ s ˈe l f",
    "level": "A1"
  },
  {
    "id": "a2_816",
    "word": "ability",
    "pos": "n.",
    "meaning": "ความสามารถ",
    "reading": "เออะ บิ้ เหลอะ ที",
    "ipa": "ʌ b ˈɪ l ʌ t ˌiː",
    "level": "A2"
  },
  {
    "id": "a2_817",
    "word": "able",
    "pos": "adj.",
    "meaning": "สามารถ",
    "reading": "เอ๊ เบอะ ล",
    "ipa": "ˈeɪ b ʌ l",
    "level": "A2"
  },
  {
    "id": "a2_818",
    "word": "abroad",
    "pos": "adv.",
    "meaning": "ต่างประเทศ",
    "reading": "เออะ บร๊อ ดึ",
    "ipa": "ʌ b r ˈɔː d",
    "level": "A2"
  },
  {
    "id": "a2_819",
    "word": "accept",
    "pos": "v.",
    "meaning": "ยอมรับ",
    "reading": "แอ่ ขึ เซ้ะ ผึ ถึ",
    "ipa": "æ k s ˈe p t",
    "level": "A2"
  },
  {
    "id": "a2_820",
    "word": "accident",
    "pos": "n.",
    "meaning": "อุบัติเหตุ แอ๊",
    "reading": "ขึ เสอะ เดอะ น ถึ",
    "ipa": "ˈæ k s ʌ d ʌ n t",
    "level": "A2"
  },
  {
    "id": "a2_821",
    "word": "according to",
    "pos": "prep.",
    "meaning": "ตาม",
    "reading": "เออะ โค้ (ร) ดิ ง",
    "ipa": "ʌ k ˈɔː r d ɪ ŋ",
    "level": "A2"
  },
  {
    "id": "a2_822",
    "word": "achieve",
    "pos": "v.",
    "meaning": "บรรลุ",
    "reading": "เออะ ชี้ ฝึ",
    "ipa": "ʌ tʃ ˈiː v",
    "level": "A2"
  },
  {
    "id": "a2_823",
    "word": "act",
    "pos": "v.",
    "meaning": "กระทำ",
    "reading": "แอ ขึ ถึ",
    "ipa": "ˈæ k t",
    "level": "A2"
  },
  {
    "id": "a2_824",
    "word": "active",
    "pos": "adj.",
    "meaning": "คล่องแคล่ว",
    "reading": "แอ๊ ขึ ถิ่ ฝึ",
    "ipa": "ˈæ k t ɪ v",
    "level": "A2"
  },
  {
    "id": "a2_825",
    "word": "actually",
    "pos": "adv.",
    "meaning": "จริงๆแล้ว",
    "reading": "แอ๊ ขึ ชู เออะ หลี่",
    "ipa": "ˈæ k tʃ ˌuː ʌ l iː",
    "level": "A2"
  },
  {
    "id": "a2_826",
    "word": "adult",
    "pos": "adj.",
    "meaning": "ผู้ใหญ่",
    "reading": "เออะ ด๊ะ ล ถึ",
    "ipa": "ʌ d ˈʌ l t",
    "level": "A2"
  },
  {
    "id": "a2_827",
    "word": "advantage",
    "pos": "n.",
    "meaning": "ข้อได้เปรียบ",
    "reading": "แอ่ ดึ แฟ้ น ถิ่ จึ",
    "ipa": "æ d v ˈæ n t ɪ dʒ",
    "level": "A2"
  },
  {
    "id": "a2_828",
    "word": "adventure",
    "pos": "n.",
    "meaning": "การผจญภัย",
    "reading": "แอ่ ดึ เฟ้ะ น เฉ่อ ร",
    "ipa": "æ d v ˈe n tʃ ɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_829",
    "word": "advertise",
    "pos": "v.",
    "meaning": "โฆษณา",
    "reading": "แอ๊ ดึ เฝ่อ ร ทาย สึ",
    "ipa": "ˈæ d v ɜːʴ t ˌaɪ z",
    "level": "A2"
  },
  {
    "id": "a2_830",
    "word": "advertisement",
    "pos": "n.",
    "meaning": "โฆษณา แอ่ ดึ",
    "reading": "เฟ้อ ร เถอะ สึ เหมอะ น ถึ",
    "ipa": "æ d v ˈɜːʴ t ʌ z m ʌ n t",
    "level": "A2"
  },
  {
    "id": "a2_831",
    "word": "advertising",
    "pos": "n.",
    "meaning": "การโฆษณา แอ๊",
    "reading": "ดึ เฝ่อ ร ทาย สิ่ ง",
    "ipa": "ˈæ d v ɜːʴ t ˌaɪ z ɪ ŋ",
    "level": "A2"
  },
  {
    "id": "a2_832",
    "word": "affect",
    "pos": "v.",
    "meaning": "ส่งผลกระทบ",
    "reading": "แอ๊ เฝะ ขึ ถึ",
    "ipa": "ˈæ f e k t",
    "level": "A2"
  },
  {
    "id": "a2_833",
    "word": "after",
    "pos": "conj./adv.",
    "meaning": "หลังจาก",
    "reading": "แอ๊ ฝึ เถ่อ ร",
    "ipa": "ˈæ f t ɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_834",
    "word": "against",
    "pos": "prep.",
    "meaning": "ขัดต่อ",
    "reading": "เออะ เก๊ะ น สึ ถึ",
    "ipa": "ʌ g ˈe n s t",
    "level": "A2"
  },
  {
    "id": "a2_835",
    "word": "ah",
    "pos": "exclam.",
    "meaning": "อา",
    "reading": "อา",
    "ipa": "ˈɑː",
    "level": "A2"
  },
  {
    "id": "a2_836",
    "word": "airline",
    "pos": "n.",
    "meaning": "สายการบิน",
    "reading": "แอ๊ (ร) ลาย น",
    "ipa": "ˈe r l ˌaɪ n",
    "level": "A2"
  },
  {
    "id": "a2_837",
    "word": "alive",
    "pos": "adj.",
    "meaning": "มีชีวิตอยู่",
    "reading": "เออะ ล้าย ฝึ",
    "ipa": "ʌ l ˈaɪ v",
    "level": "A2"
  },
  {
    "id": "a2_838",
    "word": "all",
    "pos": "adv.",
    "meaning": "ทั้งหมด",
    "reading": "ออ ล",
    "ipa": "ˈɔː l",
    "level": "A2"
  },
  {
    "id": "a2_839",
    "word": "all right",
    "pos": "adj./adv./exclam.",
    "meaning": "เอาล่ะ",
    "reading": "ออ ล",
    "ipa": "ˈɔː l",
    "level": "A2"
  },
  {
    "id": "a2_840",
    "word": "allow",
    "pos": "v.",
    "meaning": "อนุญาต",
    "reading": "เออะ ล้าว",
    "ipa": "ʌ l ˈaʊ",
    "level": "A2"
  },
  {
    "id": "a2_841",
    "word": "almost",
    "pos": "adv.",
    "meaning": "เกือบ",
    "reading": "อ๊อ ล โมว สึ ถึ",
    "ipa": "ˈɔː l m ˌəʊ s t",
    "level": "A2"
  },
  {
    "id": "a2_842",
    "word": "alone",
    "pos": "adj./adv.",
    "meaning": "ตามลำพัง",
    "reading": "เออะ โล้ว น",
    "ipa": "ʌ l ˈəʊ n",
    "level": "A2"
  },
  {
    "id": "a2_843",
    "word": "along",
    "pos": "prep./adv.",
    "meaning": "ตาม",
    "reading": "เออะ ล้อ ง",
    "ipa": "ʌ l ˈɔː ŋ",
    "level": "A2"
  },
  {
    "id": "a2_844",
    "word": "already",
    "pos": "adv.",
    "meaning": "เรียบร้อยแล้ว",
    "reading": "อ่อ ล เร้ะ ดี่",
    "ipa": "ɔː l r ˈe d iː",
    "level": "A2"
  },
  {
    "id": "a2_845",
    "word": "alternative",
    "pos": "n.",
    "meaning": "ทางเลือก อ่อ",
    "reading": "ล เท้อ ร เหนอะ ถิ่ ฝึ",
    "ipa": "ɔː l t ˈɜːʴ n ʌ t ɪ v",
    "level": "A2"
  },
  {
    "id": "a2_846",
    "word": "although",
    "pos": "conj.",
    "meaning": "แม้ว่า",
    "reading": "ออ ล โด๊ว",
    "ipa": "ˌɔː l ð ˈəʊ",
    "level": "A2"
  },
  {
    "id": "a2_847",
    "word": "among",
    "pos": "prep.",
    "meaning": "ท่ามกลาง",
    "reading": "เออะ มะ ง",
    "ipa": "ʌ m ˈʌ ŋ",
    "level": "A2"
  },
  {
    "id": "a2_848",
    "word": "amount",
    "pos": "n.",
    "meaning": "จำนวน",
    "reading": "เออะ ม้าว น ถึ",
    "ipa": "ʌ m ˈaʊ n t",
    "level": "A2"
  },
  {
    "id": "a2_849",
    "word": "ancient",
    "pos": "adj.",
    "meaning": "โบราณ",
    "reading": "เอ๊ น เฉอะ น ถึ",
    "ipa": "ˈeɪ n tʃ ʌ n t",
    "level": "A2"
  },
  {
    "id": "a2_850",
    "word": "ankle",
    "pos": "n.",
    "meaning": "ข้อเท้า",
    "reading": "แอ๊ ง เขอะ ล",
    "ipa": "ˈæ ŋ k ʌ l",
    "level": "A2"
  },
  {
    "id": "a2_851",
    "word": "any",
    "pos": "adv.",
    "meaning": "ใดๆ",
    "reading": "เอ๊ะ หนี่",
    "ipa": "ˈe n iː",
    "level": "A2"
  },
  {
    "id": "a2_852",
    "word": "anybody",
    "pos": "pron.",
    "meaning": "ใครก็ได้",
    "reading": "เอ๊ะ หนี่ เบอะ ดี่",
    "ipa": "ˈe n iː b ʌ d iː",
    "level": "A2"
  },
  {
    "id": "a2_853",
    "word": "anymore",
    "pos": "adv./adv.",
    "meaning": "อีกต่อไป",
    "reading": "เอะ หนี่ โม้ (ร)",
    "ipa": "ˌe n iː m ˈɔː r",
    "level": "A2"
  },
  {
    "id": "a2_854",
    "word": "anyway",
    "pos": "adv.",
    "meaning": "ถึงอย่างไร",
    "reading": "เอ๊ะ หนี่ เว",
    "ipa": "ˈe n iː w ˌeɪ",
    "level": "A2"
  },
  {
    "id": "a2_855",
    "word": "anywhere",
    "pos": "adv./pron.",
    "meaning": "ทุกที่",
    "reading": "เอ๊ะ หนี่ แว (ร)",
    "ipa": "ˈe n iː w ˌe r",
    "level": "A2"
  },
  {
    "id": "a2_856",
    "word": "app",
    "pos": "n.",
    "meaning": "แอป",
    "reading": "แอ ผึ",
    "ipa": "ˈæ p",
    "level": "A2"
  },
  {
    "id": "a2_857",
    "word": "appear",
    "pos": "v.",
    "meaning": "ปรากฏ",
    "reading": "เออะ เพี้ย (ร)",
    "ipa": "ʌ p ˈɪ r",
    "level": "A2"
  },
  {
    "id": "a2_858",
    "word": "appearance",
    "pos": "n.",
    "meaning": "รูปร่าง เออะ",
    "reading": "เพี้ย ร เออะ น สึ",
    "ipa": "ʌ p ˈɪ r ʌ n s",
    "level": "A2"
  },
  {
    "id": "a2_859",
    "word": "apply",
    "pos": "v.",
    "meaning": "นำมาใช้",
    "reading": "เออะ พล้าย",
    "ipa": "ʌ p l ˈaɪ",
    "level": "A2"
  },
  {
    "id": "a2_860",
    "word": "architect",
    "pos": "n.",
    "meaning": "สถาปนิก",
    "reading": "อ๊าร เขอะ เทะ ขึ ถึ",
    "ipa": "ˈɑː r k ʌ t ˌe k t",
    "level": "A2"
  },
  {
    "id": "a2_861",
    "word": "architecture",
    "pos": "n.",
    "meaning": "สถาปัตยกรรม อ๊าร",
    "reading": "เขอะ เทะ ขึ เฉ่อ ร",
    "ipa": "ˈɑː r k ʌ t ˌe k tʃ ɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_862",
    "word": "argue",
    "pos": "v.",
    "meaning": "โต้แย้ง",
    "reading": "อ๊า (ร) กึ หยู่",
    "ipa": "ˈɑː r g j uː",
    "level": "A2"
  },
  {
    "id": "a2_863",
    "word": "argument",
    "pos": "n.",
    "meaning": "การโต้แย้ง อ๊า (ร)",
    "reading": "กึ เหยอะ เหมอะ น ถึ",
    "ipa": "ˈɑː r g j ʌ m ʌ n t",
    "level": "A2"
  },
  {
    "id": "a2_864",
    "word": "army",
    "pos": "n.",
    "meaning": "กองทัพบก",
    "reading": "อ๊าร หมี่",
    "ipa": "ˈɑː r m iː",
    "level": "A2"
  },
  {
    "id": "a2_865",
    "word": "arrange",
    "pos": "v.",
    "meaning": "จัด",
    "reading": "เอ่อ ร เร้ น จึ",
    "ipa": "ɜːʴ ˈeɪ n dʒ",
    "level": "A2"
  },
  {
    "id": "a2_866",
    "word": "arrangement",
    "pos": "n.",
    "meaning": "การจัดเตรียม เอ่อ",
    "reading": "ร เร้ น จึ เหมอะ น ถึ",
    "ipa": "ɜːʴ ˈeɪ n dʒ m ʌ n t",
    "level": "A2"
  },
  {
    "id": "a2_867",
    "word": "as",
    "pos": "adv./conj.",
    "meaning": "เช่น",
    "reading": "แอ สึ",
    "ipa": "ˈæ z",
    "level": "A2"
  },
  {
    "id": "a2_868",
    "word": "asleep",
    "pos": "adj.",
    "meaning": "นอนหลับ",
    "reading": "เออะ สึ ลี้ ผึ",
    "ipa": "ʌ s l ˈiː p",
    "level": "A2"
  },
  {
    "id": "a2_869",
    "word": "assistant",
    "pos": "n./adj.",
    "meaning": "ผู้ช่วย",
    "reading": "เออะ ซิ สึ เถอะ น ถึ",
    "ipa": "ʌ s ˈɪ s t ʌ n t",
    "level": "A2"
  },
  {
    "id": "a2_870",
    "word": "athlete",
    "pos": "n.",
    "meaning": "นักกีฬา",
    "reading": "แอ๊ ตลี ถึ",
    "ipa": "ˈæ θ l ˌiː t",
    "level": "A2"
  },
  {
    "id": "a2_871",
    "word": "attack",
    "pos": "n./v.",
    "meaning": "จู่โจม",
    "reading": "เออะ แท้ ขึ",
    "ipa": "ʌ t ˈæ k",
    "level": "A2"
  },
  {
    "id": "a2_872",
    "word": "attend",
    "pos": "v.",
    "meaning": "เข้าร่วม",
    "reading": "เออะ เท้ะ น ดึ",
    "ipa": "ʌ t ˈe n d",
    "level": "A2"
  },
  {
    "id": "a2_873",
    "word": "attention",
    "pos": "n./exclam.",
    "meaning": "ความสนใจ",
    "reading": "เออะ เท้ะ น เฉอะ น",
    "ipa": "ʌ t ˈe n ʃ ʌ n",
    "level": "A2"
  },
  {
    "id": "a2_874",
    "word": "attractive",
    "pos": "adj.",
    "meaning": "มีเสน่ห์",
    "reading": "เออะ แทร้ ขึ ถิ่ ฝึ",
    "ipa": "ʌ t r ˈæ k t ɪ v",
    "level": "A2"
  },
  {
    "id": "a2_875",
    "word": "audience",
    "pos": "n.",
    "meaning": "ผู้ชม",
    "reading": "อ๊า ดี่ เออะ น สึ",
    "ipa": "ˈɑː d iː ʌ n s",
    "level": "A2"
  },
  {
    "id": "a2_876",
    "word": "author",
    "pos": "n.",
    "meaning": "ผู้เขียน",
    "reading": "อ๊อ เต่อ ร",
    "ipa": "ˈɔː θ ɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_877",
    "word": "available",
    "pos": "adj.",
    "meaning": "มีอยู่ เออะ",
    "reading": "เฟ้ เหลอะ เบอะ ล",
    "ipa": "ʌ v ˈeɪ l ʌ b ʌ l",
    "level": "A2"
  },
  {
    "id": "a2_878",
    "word": "average",
    "pos": "adj./n.",
    "meaning": "เฉลี่ย",
    "reading": "แอ๊ เฝ่อ ร หริ่ จึ",
    "ipa": "ˈæ v ɜːʴ ɪ dʒ",
    "level": "A2"
  },
  {
    "id": "a2_879",
    "word": "avoid",
    "pos": "v.",
    "meaning": "หลีกเลี่ยง",
    "reading": "เออะ ฟ้อย ดึ",
    "ipa": "ʌ v ˈɔɪ d",
    "level": "A2"
  },
  {
    "id": "a2_880",
    "word": "award",
    "pos": "n.",
    "meaning": "รางวัล",
    "reading": "เออะ โว้ (ร) ดึ",
    "ipa": "ʌ w ˈɔː r d",
    "level": "A2"
  },
  {
    "id": "a2_881",
    "word": "awful",
    "pos": "adj.",
    "meaning": "แย่มาก",
    "reading": "อ๊า เฝอะ ล",
    "ipa": "ˈɑː f ʌ l",
    "level": "A2"
  },
  {
    "id": "a2_882",
    "word": "back",
    "pos": "adj.",
    "meaning": "กลับ",
    "reading": "แบ ขึ",
    "ipa": "b ˈæ k",
    "level": "A2"
  },
  {
    "id": "a2_883",
    "word": "background",
    "pos": "n.",
    "meaning": "พื้นหลัง",
    "reading": "แบ๊ ขึ กราว น ดึ",
    "ipa": "b ˈæ k g r ˌaʊ n d",
    "level": "A2"
  },
  {
    "id": "a2_884",
    "word": "badly",
    "pos": "adv.",
    "meaning": "ห่วย",
    "reading": "แบ๊ ดลี่",
    "ipa": "b ˈæ d l iː",
    "level": "A2"
  },
  {
    "id": "a2_885",
    "word": "bar",
    "pos": "n.",
    "meaning": "บาร์",
    "reading": "บา (ร)",
    "ipa": "b ˈɑː r",
    "level": "A2"
  },
  {
    "id": "a2_886",
    "word": "baseball",
    "pos": "n.",
    "meaning": "เบสบอล",
    "reading": "เบ๊ สึ บ๊อ ล",
    "ipa": "b ˈeɪ s b ˈɔː l",
    "level": "A2"
  },
  {
    "id": "a2_887",
    "word": "based",
    "pos": "adj.",
    "meaning": "ซึ่งเป็นรากฐาน",
    "reading": "เบ สึ ถึ",
    "ipa": "b ˈeɪ s t",
    "level": "A2"
  },
  {
    "id": "a2_888",
    "word": "basketball",
    "pos": "n.",
    "meaning": "บาสเกตบอล",
    "reading": "แบ๊ สึ เขอะ ถึ บอ ล",
    "ipa": "b ˈæ s k ʌ t b ˌɔː l",
    "level": "A2"
  },
  {
    "id": "a2_889",
    "word": "bean",
    "pos": "n.",
    "meaning": "ถั่ว",
    "reading": "บี น",
    "ipa": "b ˈiː n",
    "level": "A2"
  },
  {
    "id": "a2_890",
    "word": "bear",
    "pos": "n.",
    "meaning": "หมี",
    "reading": "แบ (ร)",
    "ipa": "b ˈe r",
    "level": "A2"
  },
  {
    "id": "a2_891",
    "word": "beat",
    "pos": "v.",
    "meaning": "ตี",
    "reading": "บี ถึ",
    "ipa": "b ˈiː t",
    "level": "A2"
  },
  {
    "id": "a2_892",
    "word": "beef",
    "pos": "n.",
    "meaning": "เนื้อวัว",
    "reading": "บี ฝึ",
    "ipa": "b ˈiː f",
    "level": "A2"
  },
  {
    "id": "a2_893",
    "word": "before",
    "pos": "conj./adv.",
    "meaning": "ก่อน",
    "reading": "บิ โฟ้ (ร)",
    "ipa": "b ɪ f ˈɔː r",
    "level": "A2"
  },
  {
    "id": "a2_894",
    "word": "behave",
    "pos": "v.",
    "meaning": "ประพฤติ",
    "reading": "บิ เฮ้ ฝึ",
    "ipa": "b ɪ h ˈeɪ v",
    "level": "A2"
  },
  {
    "id": "a2_895",
    "word": "behaviour",
    "pos": "n.",
    "meaning": "พฤติกรรม",
    "reading": "บิ เฮ้ ฝึ เหย่อ ร",
    "ipa": "b ɪ h ˈeɪ v j ɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_896",
    "word": "belong",
    "pos": "v.",
    "meaning": "เป็นของ",
    "reading": "บิ ล้อ ง",
    "ipa": "b ɪ l ˈɔː ŋ",
    "level": "A2"
  },
  {
    "id": "a2_897",
    "word": "belt",
    "pos": "n.",
    "meaning": "เข็มขัด",
    "reading": "เบะ ล ถึ",
    "ipa": "b ˈe l t",
    "level": "A2"
  },
  {
    "id": "a2_898",
    "word": "benefit",
    "pos": "n.",
    "meaning": "ผลประโยชน์",
    "reading": "เบ๊ะ เหนอะ ฝิ่ ถึ",
    "ipa": "b ˈe n ʌ f ɪ t",
    "level": "A2"
  },
  {
    "id": "a2_899",
    "word": "best",
    "pos": "adv./n.",
    "meaning": "ดีที่สุด",
    "reading": "เบะ สึ ถึ",
    "ipa": "b ˈe s t",
    "level": "A2"
  },
  {
    "id": "a2_900",
    "word": "better",
    "pos": "adv.",
    "meaning": "ดีกว่า",
    "reading": "เบ๊ะ เถ่อ ร",
    "ipa": "b ˈe t ɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_901",
    "word": "between",
    "pos": "adv.",
    "meaning": "ระหว่าง",
    "reading": "บิ ทวี้ น",
    "ipa": "b ɪ t w ˈiː n",
    "level": "A2"
  },
  {
    "id": "a2_902",
    "word": "billion",
    "pos": "number",
    "meaning": "พันล้าน",
    "reading": "บิ้ ล เหยอะ น",
    "ipa": "b ˈɪ l j ʌ n",
    "level": "A2"
  },
  {
    "id": "a2_903",
    "word": "bin",
    "pos": "n.",
    "meaning": "ถังขยะ",
    "reading": "บิ น",
    "ipa": "b ˈɪ n",
    "level": "A2"
  },
  {
    "id": "a2_904",
    "word": "biology",
    "pos": "n.",
    "meaning": "ชีววิทยา",
    "reading": "บ่าย อ๊า เหลอะ จี่",
    "ipa": "b aɪ ˈɑː l ʌ dʒ iː",
    "level": "A2"
  },
  {
    "id": "a2_905",
    "word": "birth",
    "pos": "n.",
    "meaning": "การเกิด",
    "reading": "เบอ ร ตึ",
    "ipa": "b ˈɜːʴ θ",
    "level": "A2"
  },
  {
    "id": "a2_906",
    "word": "biscuit",
    "pos": "n.",
    "meaning": "บิสกิต",
    "reading": "บิ้ สึ เขอะ ถึ",
    "ipa": "b ˈɪ s k ʌ t",
    "level": "A2"
  },
  {
    "id": "a2_907",
    "word": "bit",
    "pos": "n.",
    "meaning": "นิดหน่อย",
    "reading": "บิ ถึ",
    "ipa": "b ˈɪ t",
    "level": "A2"
  },
  {
    "id": "a2_908",
    "word": "blank",
    "pos": "adj./n.",
    "meaning": "ว่างเปล่า",
    "reading": "แบล ง ขึ",
    "ipa": "b l ˈæ ŋ k",
    "level": "A2"
  },
  {
    "id": "a2_909",
    "word": "blood",
    "pos": "n.",
    "meaning": "เลือด",
    "reading": "บละ ดึ",
    "ipa": "b l ˈʌ d",
    "level": "A2"
  },
  {
    "id": "a2_910",
    "word": "blow",
    "pos": "v.",
    "meaning": "เป่า",
    "reading": "โบลว",
    "ipa": "b l ˈəʊ",
    "level": "A2"
  },
  {
    "id": "a2_911",
    "word": "board",
    "pos": "n.",
    "meaning": "กระดาน",
    "reading": "โบ (ร) ดึ",
    "ipa": "b ˈɔː r d",
    "level": "A2"
  },
  {
    "id": "a2_912",
    "word": "boil",
    "pos": "v.",
    "meaning": "ต้ม",
    "reading": "บอย ล",
    "ipa": "b ˈɔɪ l",
    "level": "A2"
  },
  {
    "id": "a2_913",
    "word": "bone",
    "pos": "n.",
    "meaning": "กระดูก",
    "reading": "โบว น",
    "ipa": "b ˈəʊ n",
    "level": "A2"
  },
  {
    "id": "a2_914",
    "word": "book",
    "pos": "v.",
    "meaning": "หนังสือ",
    "reading": "บุ ขึ",
    "ipa": "b ˈʊ k",
    "level": "A2"
  },
  {
    "id": "a2_915",
    "word": "borrow",
    "pos": "v.",
    "meaning": "ยืม",
    "reading": "บ๊า (ร) โอว",
    "ipa": "b ˈɑː r ˌəʊ",
    "level": "A2"
  },
  {
    "id": "a2_916",
    "word": "boss",
    "pos": "n.",
    "meaning": "เจ้านาย",
    "reading": "บา สึ",
    "ipa": "b ˈɑː s",
    "level": "A2"
  },
  {
    "id": "a2_917",
    "word": "bottom",
    "pos": "n./adj.",
    "meaning": "ด้านล่าง",
    "reading": "บ๊า เถอะ ม",
    "ipa": "b ˈɑː t ʌ m",
    "level": "A2"
  },
  {
    "id": "a2_918",
    "word": "bowl",
    "pos": "n.",
    "meaning": "ชาม",
    "reading": "โบว ล",
    "ipa": "b ˈəʊ l",
    "level": "A2"
  },
  {
    "id": "a2_919",
    "word": "brain",
    "pos": "n.",
    "meaning": "สมอง",
    "reading": "เบร น",
    "ipa": "b r ˈeɪ n",
    "level": "A2"
  },
  {
    "id": "a2_920",
    "word": "bridge",
    "pos": "n.",
    "meaning": "สะพาน",
    "reading": "บริ จึ",
    "ipa": "b r ˈɪ dʒ",
    "level": "A2"
  },
  {
    "id": "a2_921",
    "word": "bright",
    "pos": "adj.",
    "meaning": "สว่าง",
    "reading": "บราย ถึ",
    "ipa": "b r ˈaɪ t",
    "level": "A2"
  },
  {
    "id": "a2_922",
    "word": "brilliant",
    "pos": "adj.",
    "meaning": "ฉลาดหลักแหลม",
    "reading": "บริ้ ล เหยอะ น ถึ",
    "ipa": "b r ˈɪ l j ʌ n t",
    "level": "A2"
  },
  {
    "id": "a2_923",
    "word": "broken",
    "pos": "adj.",
    "meaning": "แตกหัก",
    "reading": "โบร๊ว เขอะ น",
    "ipa": "b r ˈəʊ k ʌ n",
    "level": "A2"
  },
  {
    "id": "a2_924",
    "word": "brush",
    "pos": "v./n.",
    "meaning": "แปรง",
    "reading": "บระ ฉึ",
    "ipa": "b r ˈʌ ʃ",
    "level": "A2"
  },
  {
    "id": "a2_925",
    "word": "burn",
    "pos": "v.",
    "meaning": "เผา",
    "reading": "เบอ ร น",
    "ipa": "b ˈɜːʴ n",
    "level": "A2"
  },
  {
    "id": "a2_926",
    "word": "businessman",
    "pos": "n.",
    "meaning": "นักธุรกิจ",
    "reading": "บิ้ สึ เหนอะ สึ แม น",
    "ipa": "b ˈɪ z n ʌ s m ˌæ n",
    "level": "A2"
  },
  {
    "id": "a2_927",
    "word": "button",
    "pos": "n.",
    "meaning": "ปุ่ม",
    "reading": "บ๊ะ เถอะ น",
    "ipa": "b ˈʌ t ʌ n",
    "level": "A2"
  },
  {
    "id": "a2_928",
    "word": "camp",
    "pos": "n./v.",
    "meaning": "ค่าย",
    "reading": "แค ม ผึ",
    "ipa": "k ˈæ m p",
    "level": "A2"
  },
  {
    "id": "a2_929",
    "word": "camping",
    "pos": "n.",
    "meaning": "ตั้งแคมป์",
    "reading": "แค้ ม ผิ่ ง",
    "ipa": "k ˈæ m p ɪ ŋ",
    "level": "A2"
  },
  {
    "id": "a2_930",
    "word": "can",
    "pos": "n.",
    "meaning": "กระป๋อง",
    "reading": "แค น",
    "ipa": "k æ n",
    "level": "A2"
  },
  {
    "id": "a2_931",
    "word": "care",
    "pos": "n./v.",
    "meaning": "การดูแล",
    "reading": "แค (ร)",
    "ipa": "k ˈe r",
    "level": "A2"
  },
  {
    "id": "a2_932",
    "word": "careful",
    "pos": "adj.",
    "meaning": "ระมัดระวัง",
    "reading": "แค้ (ร) เฝอะ ล",
    "ipa": "k ˈe r f ʌ l",
    "level": "A2"
  },
  {
    "id": "a2_933",
    "word": "carefully",
    "pos": "adv.",
    "meaning": "อย่างระมัดระวัง",
    "reading": "แค้ ร เฝอะ หลี่",
    "ipa": "k ˈe r f ʌ l iː",
    "level": "A2"
  },
  {
    "id": "a2_934",
    "word": "carpet",
    "pos": "n.",
    "meaning": "พรม",
    "reading": "ค้า (ร) เผอะ ถึ",
    "ipa": "k ˈɑː r p ʌ t",
    "level": "A2"
  },
  {
    "id": "a2_935",
    "word": "cartoon",
    "pos": "n.",
    "meaning": "การ์ตูน",
    "reading": "ข่า (ร) ทู้ น",
    "ipa": "k ɑː r t ˈuː n",
    "level": "A2"
  },
  {
    "id": "a2_936",
    "word": "case",
    "pos": "n.",
    "meaning": "กรณี",
    "reading": "เค สึ",
    "ipa": "k ˈeɪ s",
    "level": "A2"
  },
  {
    "id": "a2_937",
    "word": "cash",
    "pos": "n.",
    "meaning": "เงินสด",
    "reading": "แค ฉึ",
    "ipa": "k ˈæ ʃ",
    "level": "A2"
  },
  {
    "id": "a2_938",
    "word": "castle",
    "pos": "n.",
    "meaning": "ปราสาท",
    "reading": "แค้ เสอะ ล",
    "ipa": "k ˈæ s ʌ l",
    "level": "A2"
  },
  {
    "id": "a2_939",
    "word": "catch",
    "pos": "v.",
    "meaning": "จับ",
    "reading": "แค ฉึ",
    "ipa": "k ˈæ tʃ",
    "level": "A2"
  },
  {
    "id": "a2_940",
    "word": "cause",
    "pos": "n./v.",
    "meaning": "สาเหตุ",
    "reading": "คา สึ",
    "ipa": "k ˈɑː z",
    "level": "A2"
  },
  {
    "id": "a2_941",
    "word": "celebrate",
    "pos": "v.",
    "meaning": "ฉลอง",
    "reading": "เซ้ะ เหลอะ เบร ถึ",
    "ipa": "s ˈe l ʌ b r ˌeɪ t",
    "level": "A2"
  },
  {
    "id": "a2_942",
    "word": "celebrity",
    "pos": "n.",
    "meaning": "คนดัง",
    "reading": "เสอะ เล้ะ บริ ถี่",
    "ipa": "s ʌ l ˈe b r ɪ t iː",
    "level": "A2"
  },
  {
    "id": "a2_943",
    "word": "certain",
    "pos": "adj.",
    "meaning": "แน่ใจ",
    "reading": "เซ้อ ร เถอะ น",
    "ipa": "s ˈɜːʴ t ʌ n",
    "level": "A2"
  },
  {
    "id": "a2_944",
    "word": "certainly",
    "pos": "adv.",
    "meaning": "แน่นอน",
    "reading": "เซ้อ ร เถอะ น หลี่",
    "ipa": "s ˈɜːʴ t ʌ n l iː",
    "level": "A2"
  },
  {
    "id": "a2_945",
    "word": "chance",
    "pos": "n.",
    "meaning": "โอกาส",
    "reading": "แช น สึ",
    "ipa": "tʃ ˈæ n s",
    "level": "A2"
  },
  {
    "id": "a2_946",
    "word": "character",
    "pos": "n.",
    "meaning": "อักขระ",
    "reading": "แค้ (ร) อิ ขึ เถ่อ ร",
    "ipa": "k ˈe r ɪ k t ɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_947",
    "word": "charity",
    "pos": "n.",
    "meaning": "การกุศล",
    "reading": "แช้ (ร) อิ ถี่",
    "ipa": "tʃ ˈe r ɪ t iː",
    "level": "A2"
  },
  {
    "id": "a2_948",
    "word": "chat",
    "pos": "v./n.",
    "meaning": "แชท",
    "reading": "แช ถึ",
    "ipa": "tʃ ˈæ t",
    "level": "A2"
  },
  {
    "id": "a2_949",
    "word": "check",
    "pos": "n.",
    "meaning": "ตรวจสอบ",
    "reading": "เชะ ขึ",
    "ipa": "tʃ ˈe k",
    "level": "A2"
  },
  {
    "id": "a2_950",
    "word": "chef",
    "pos": "n.",
    "meaning": "พ่อครัว",
    "reading": "เชะ ฝึ",
    "ipa": "ʃ ˈe f",
    "level": "A2"
  },
  {
    "id": "a2_951",
    "word": "chemistry",
    "pos": "n.",
    "meaning": "เคมี",
    "reading": "เค้ะ เหมอะ สึ ถรี่",
    "ipa": "k ˈe m ʌ s t r iː",
    "level": "A2"
  },
  {
    "id": "a2_952",
    "word": "chip",
    "pos": "n.",
    "meaning": "ชิป",
    "reading": "ชิ ผึ",
    "ipa": "tʃ ˈɪ p",
    "level": "A2"
  },
  {
    "id": "a2_953",
    "word": "choice",
    "pos": "n.",
    "meaning": "ทางเลือก",
    "reading": "ชออย สึ",
    "ipa": "tʃ ˈɔɪ s",
    "level": "A2"
  },
  {
    "id": "a2_954",
    "word": "church",
    "pos": "n.",
    "meaning": "คริสตจักร",
    "reading": "เชอ ร ฉึ",
    "ipa": "tʃ ˈɜːʴ tʃ",
    "level": "A2"
  },
  {
    "id": "a2_955",
    "word": "cigarette",
    "pos": "n.",
    "meaning": "บุหรี่",
    "reading": "ซิ เก่อ ร เร้ะ ถึ",
    "ipa": "s ˌɪ g ɜːʴ ˈe t",
    "level": "A2"
  },
  {
    "id": "a2_956",
    "word": "circle",
    "pos": "n./v.",
    "meaning": "วงกลม",
    "reading": "เซ้อ ร เขอะ ล",
    "ipa": "s ˈɜːʴ k ʌ l",
    "level": "A2"
  },
  {
    "id": "a2_957",
    "word": "classical",
    "pos": "adj.",
    "meaning": "คลาสสิค",
    "reading": "แคล้ สิ่ เขอะ ล",
    "ipa": "k l ˈæ s ɪ k ʌ l",
    "level": "A2"
  },
  {
    "id": "a2_958",
    "word": "clear",
    "pos": "adj.",
    "meaning": "ชัดเจน",
    "reading": "เคลีย (ร)",
    "ipa": "k l ˈɪ r",
    "level": "A2"
  },
  {
    "id": "a2_959",
    "word": "clearly",
    "pos": "adv.",
    "meaning": "ชัดเจน",
    "reading": "เคลี้ย (ร) หลี่",
    "ipa": "k l ˈɪ r l iː",
    "level": "A2"
  },
  {
    "id": "a2_960",
    "word": "clever",
    "pos": "adj.",
    "meaning": "ฉลาด",
    "reading": "เคล้ะ เฝ่อ ร",
    "ipa": "k l ˈe v ɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_961",
    "word": "climate",
    "pos": "n.",
    "meaning": "ภูมิอากาศ",
    "reading": "คล้าย เหมอะ ถึ",
    "ipa": "k l ˈaɪ m ʌ t",
    "level": "A2"
  },
  {
    "id": "a2_962",
    "word": "close",
    "pos": "adj.",
    "meaning": "ใกล้ชิด, สนิทสนม",
    "reading": "โคล สึ",
    "ipa": "k l oʊ s",
    "level": "A2"
  },
  {
    "id": "a2_963",
    "word": "closed",
    "pos": "adj.",
    "meaning": "ปิด",
    "reading": "โคลว สึ ดึ",
    "ipa": "k l ˈəʊ z d",
    "level": "A2"
  },
  {
    "id": "a2_964",
    "word": "clothing",
    "pos": "n.",
    "meaning": "เสื้อผ้า",
    "reading": "โคล้ว ดิ ง",
    "ipa": "k l ˈəʊ ð ɪ ŋ",
    "level": "A2"
  },
  {
    "id": "a2_965",
    "word": "cloud",
    "pos": "n.",
    "meaning": "คลาวด์",
    "reading": "คลาว ดึ",
    "ipa": "k l ˈaʊ d",
    "level": "A2"
  },
  {
    "id": "a2_966",
    "word": "coach",
    "pos": "n.",
    "meaning": "โค้ช",
    "reading": "โคว ฉึ",
    "ipa": "k ˈəʊ tʃ",
    "level": "A2"
  },
  {
    "id": "a2_967",
    "word": "coast",
    "pos": "n.",
    "meaning": "ชายฝั่ง",
    "reading": "โคว สึ ถึ",
    "ipa": "k ˈəʊ s t",
    "level": "A2"
  },
  {
    "id": "a2_968",
    "word": "code",
    "pos": "n.",
    "meaning": "รหัส",
    "reading": "โคว ดึ",
    "ipa": "k ˈəʊ d",
    "level": "A2"
  },
  {
    "id": "a2_969",
    "word": "colleague",
    "pos": "n.",
    "meaning": "เพื่อนร่วมงาน",
    "reading": "ค้า หลี่ กึ",
    "ipa": "k ˈɑː l iː g",
    "level": "A2"
  },
  {
    "id": "a2_970",
    "word": "collect",
    "pos": "v.",
    "meaning": "เก็บรวบรวม",
    "reading": "ค้า เหละ ขึ ถึ",
    "ipa": "k ˈɑː l e k t",
    "level": "A2"
  },
  {
    "id": "a2_971",
    "word": "column",
    "pos": "n.",
    "meaning": "คอลัมน์",
    "reading": "ค้า เหลอะ ม",
    "ipa": "k ˈɑː l ʌ m",
    "level": "A2"
  },
  {
    "id": "a2_972",
    "word": "comedy",
    "pos": "n.",
    "meaning": "ตลก",
    "reading": "ค้า เหมอะ ดี่",
    "ipa": "k ˈɑː m ʌ d iː",
    "level": "A2"
  },
  {
    "id": "a2_973",
    "word": "comfortable",
    "pos": "adj.",
    "meaning": "สะดวกสบาย คะ",
    "reading": "ม เฝ่อ ร เถอะ เบอะ ล",
    "ipa": "k ˈʌ m f ɜːʴ t ʌ b ʌ l",
    "level": "A2"
  },
  {
    "id": "a2_974",
    "word": "comment",
    "pos": "n.",
    "meaning": "ความคิดเห็น",
    "reading": "ค้า เหมะ น ถึ",
    "ipa": "k ˈɑː m e n t",
    "level": "A2"
  },
  {
    "id": "a2_975",
    "word": "communicate",
    "pos": "v.",
    "meaning": "สื่อสาร เขอะ",
    "reading": "ม ยู้ เหนอะ เค ถึ",
    "ipa": "k ʌ m j ˈuː n ʌ k ˌeɪ t",
    "level": "A2"
  },
  {
    "id": "a2_976",
    "word": "community",
    "pos": "n.",
    "meaning": "ชุมชน",
    "reading": "เขอะ ม ยู้ เหนอะ ถี่",
    "ipa": "k ʌ m j ˈuː n ʌ t iː",
    "level": "A2"
  },
  {
    "id": "a2_977",
    "word": "compete",
    "pos": "v.",
    "meaning": "แข่งขัน",
    "reading": "เขอะ ม พี้ ถึ",
    "ipa": "k ʌ m p ˈiː t",
    "level": "A2"
  },
  {
    "id": "a2_978",
    "word": "competition",
    "pos": "n.",
    "meaning": "การแข่งขัน คา",
    "reading": "ม เผอะ ทิ เฉอะ น",
    "ipa": "k ˌɑː m p ʌ t ˈɪ ʃ ʌ n",
    "level": "A2"
  },
  {
    "id": "a2_979",
    "word": "complain",
    "pos": "v.",
    "meaning": "ร้องทุกข์",
    "reading": "เขอะ ม เพล้ น",
    "ipa": "k ʌ m p l ˈeɪ n",
    "level": "A2"
  },
  {
    "id": "a2_980",
    "word": "completely",
    "pos": "adv.",
    "meaning": "อย่างสมบูรณ์",
    "reading": "เขอะ ม พลี้ ถลี่",
    "ipa": "k ʌ m p l ˈiː t l iː",
    "level": "A2"
  },
  {
    "id": "a2_981",
    "word": "condition",
    "pos": "n.",
    "meaning": "เงื่อนไข",
    "reading": "เขอะ น ดิ้ เฉอะ น",
    "ipa": "k ʌ n d ˈɪ ʃ ʌ n",
    "level": "A2"
  },
  {
    "id": "a2_982",
    "word": "conference",
    "pos": "n.",
    "meaning": "การประชุม ค้า",
    "reading": "น เฝ่อ ร เหรอะ น สึ",
    "ipa": "k ˈɑː n f ɜːʴ ʌ n s",
    "level": "A2"
  },
  {
    "id": "a2_983",
    "word": "connect",
    "pos": "v.",
    "meaning": "เชื่อมต่อ",
    "reading": "เขอะ เน้ะ ขึ ถึ",
    "ipa": "k ʌ n ˈe k t",
    "level": "A2"
  },
  {
    "id": "a2_984",
    "word": "connected",
    "pos": "adj.",
    "meaning": "เชื่อมต่อแล้ว",
    "reading": "เขอะ เน้ะ ขึ ถิ่ ดึ",
    "ipa": "k ʌ n ˈe k t ɪ d",
    "level": "A2"
  },
  {
    "id": "a2_985",
    "word": "consider",
    "pos": "v.",
    "meaning": "พิจารณา",
    "reading": "เขอะ น ซิ เด่อ ร",
    "ipa": "k ʌ n s ˈɪ d ɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_986",
    "word": "contain",
    "pos": "v.",
    "meaning": "บรรจุ",
    "reading": "เขอะ น เท้ น",
    "ipa": "k ʌ n t ˈeɪ n",
    "level": "A2"
  },
  {
    "id": "a2_987",
    "word": "context",
    "pos": "n.",
    "meaning": "บริบท",
    "reading": "ค้า น เถะ ขึ สึ ถึ",
    "ipa": "k ˈɑː n t e k s t",
    "level": "A2"
  },
  {
    "id": "a2_988",
    "word": "continent",
    "pos": "n.",
    "meaning": "ทวีป ค้า",
    "reading": "น เถอะ เหนอะ น ถึ",
    "ipa": "k ˈɑː n t ʌ n ʌ n t",
    "level": "A2"
  },
  {
    "id": "a2_989",
    "word": "continue",
    "pos": "v.",
    "meaning": "ดำเนินการต่อ",
    "reading": "เขอะ น ทิ น หยู่",
    "ipa": "k ʌ n t ˈɪ n j uː",
    "level": "A2"
  },
  {
    "id": "a2_990",
    "word": "control",
    "pos": "n./v.",
    "meaning": "ควบคุม",
    "reading": "เขอะ น โทร้ว ล",
    "ipa": "k ʌ n t r ˈəʊ l",
    "level": "A2"
  },
  {
    "id": "a2_991",
    "word": "cook",
    "pos": "n.",
    "meaning": "ทำอาหาร",
    "reading": "คุ ขึ",
    "ipa": "k ˈʊ k",
    "level": "A2"
  },
  {
    "id": "a2_992",
    "word": "cooker",
    "pos": "n.",
    "meaning": "หม้อหุงข้าว",
    "reading": "คุ เข่อ ร",
    "ipa": "k ˈʊ k ɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_993",
    "word": "copy",
    "pos": "n./v.",
    "meaning": "สำเนา",
    "reading": "ค้า ผี่่",
    "ipa": "k ˈɑː p iː",
    "level": "A2"
  },
  {
    "id": "a2_994",
    "word": "corner",
    "pos": "n.",
    "meaning": "มุม",
    "reading": "โค้ (ร) เหน่อ ร",
    "ipa": "k ˈɔː r n ɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_995",
    "word": "correctly",
    "pos": "adv.",
    "meaning": "อย่างถูกต้อง",
    "reading": "เข่อ ร เร้ะ ขึ ถลี่",
    "ipa": "k ɜːʴ ˈe k t l iː",
    "level": "A2"
  },
  {
    "id": "a2_996",
    "word": "count",
    "pos": "v.",
    "meaning": "นับ",
    "reading": "คาว น ถึ",
    "ipa": "k ˈaʊ n t",
    "level": "A2"
  },
  {
    "id": "a2_997",
    "word": "couple",
    "pos": "n.",
    "meaning": "คู่",
    "reading": "คะ เผอะ ล",
    "ipa": "k ˈʌ p ʌ l",
    "level": "A2"
  },
  {
    "id": "a2_998",
    "word": "cover",
    "pos": "v.",
    "meaning": "ปิดบัง",
    "reading": "คะ เฝ่อ ร",
    "ipa": "k ˈʌ v ɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_999",
    "word": "crazy",
    "pos": "adj.",
    "meaning": "คลั่งไคล้",
    "reading": "เคร้ สี่",
    "ipa": "k r ˈeɪ z iː",
    "level": "A2"
  },
  {
    "id": "a2_1000",
    "word": "creative",
    "pos": "adj.",
    "meaning": "ความคิดสร้างสรรค์",
    "reading": "ขรี่ เอ๊ ถิ่ ฝึ",
    "ipa": "k r iː ˈeɪ t ɪ v",
    "level": "A2"
  },
  {
    "id": "a2_1001",
    "word": "credit",
    "pos": "n.",
    "meaning": "เครดิต",
    "reading": "เคร้ะ เดอะ ถึ",
    "ipa": "k r ˈe d ʌ t",
    "level": "A2"
  },
  {
    "id": "a2_1002",
    "word": "crime",
    "pos": "n.",
    "meaning": "อาชญากรรม",
    "reading": "คราย ม",
    "ipa": "k r ˈaɪ m",
    "level": "A2"
  },
  {
    "id": "a2_1003",
    "word": "criminal",
    "pos": "n.",
    "meaning": "อาชญากร",
    "reading": "คริ เหมอะ เหนอะ ล",
    "ipa": "k r ˈɪ m ʌ n ʌ l",
    "level": "A2"
  },
  {
    "id": "a2_1004",
    "word": "cross",
    "pos": "v./n.",
    "meaning": "ข้าม",
    "reading": "ครอ สึ",
    "ipa": "k r ˈɔː s",
    "level": "A2"
  },
  {
    "id": "a2_1005",
    "word": "crowd",
    "pos": "n.",
    "meaning": "ฝูงชน",
    "reading": "คราว ดึ",
    "ipa": "k r ˈaʊ d",
    "level": "A2"
  },
  {
    "id": "a2_1006",
    "word": "crowded",
    "pos": "adj.",
    "meaning": "แออัด",
    "reading": "คร้าว เดอะ ดึ",
    "ipa": "k r ˈaʊ d ʌ d",
    "level": "A2"
  },
  {
    "id": "a2_1007",
    "word": "cry",
    "pos": "v.",
    "meaning": "ร้องไห้",
    "reading": "คราย",
    "ipa": "k r ˈaɪ",
    "level": "A2"
  },
  {
    "id": "a2_1008",
    "word": "cupboard",
    "pos": "n.",
    "meaning": "ตู้",
    "reading": "คะ เบ่อ ร ดึ",
    "ipa": "k ˈʌ b ɜːʴ d",
    "level": "A2"
  },
  {
    "id": "a2_1009",
    "word": "curly",
    "pos": "adj.",
    "meaning": "หยิกงอ",
    "reading": "เค้อ ร หลี่",
    "ipa": "k ˈɜːʴ l iː",
    "level": "A2"
  },
  {
    "id": "a2_1010",
    "word": "cycle",
    "pos": "n./v.",
    "meaning": "วงจร",
    "reading": "ซ้าย เขอะ ล",
    "ipa": "s ˈaɪ k ʌ l",
    "level": "A2"
  },
  {
    "id": "a2_1011",
    "word": "daily",
    "pos": "adj.",
    "meaning": "รายวัน",
    "reading": "เด๊ หลี่",
    "ipa": "d ˈeɪ l iː",
    "level": "A2"
  },
  {
    "id": "a2_1012",
    "word": "danger",
    "pos": "n.",
    "meaning": "อันตราย",
    "reading": "เด๊ น เจ่อ ร",
    "ipa": "d ˈeɪ n dʒ ɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_1013",
    "word": "dark",
    "pos": "n.",
    "meaning": "มืด",
    "reading": "ดา (ร) ขึ",
    "ipa": "d ˈɑː r k",
    "level": "A2"
  },
  {
    "id": "a2_1014",
    "word": "data",
    "pos": "n.",
    "meaning": "ข้อมูล",
    "reading": "เด๊ เถอะ",
    "ipa": "d ˈeɪ t ʌ",
    "level": "A2"
  },
  {
    "id": "a2_1015",
    "word": "dead",
    "pos": "adj.",
    "meaning": "ตาย",
    "reading": "เดะ ดึ",
    "ipa": "d ˈe d",
    "level": "A2"
  },
  {
    "id": "a2_1016",
    "word": "deal",
    "pos": "v.",
    "meaning": "ข้อเสนอ",
    "reading": "ดี ล",
    "ipa": "d ˈiː l",
    "level": "A2"
  },
  {
    "id": "a2_1017",
    "word": "dear",
    "pos": "exclam.",
    "meaning": "ที่รัก",
    "reading": "เดีย (ร)",
    "ipa": "d ˈɪ r",
    "level": "A2"
  },
  {
    "id": "a2_1018",
    "word": "death",
    "pos": "n.",
    "meaning": "ความตาย",
    "reading": "เดะ ตึ",
    "ipa": "d ˈe θ",
    "level": "A2"
  },
  {
    "id": "a2_1019",
    "word": "decision",
    "pos": "n.",
    "meaning": "การตัดสินใจ",
    "reading": "ดิ ซิ เฉอะ น",
    "ipa": "d ɪ s ˈɪ ʒ ʌ n",
    "level": "A2"
  },
  {
    "id": "a2_1020",
    "word": "deep",
    "pos": "adj.",
    "meaning": "ลึก",
    "reading": "ดี ผึ",
    "ipa": "d ˈiː p",
    "level": "A2"
  },
  {
    "id": "a2_1021",
    "word": "definitely",
    "pos": "adv.",
    "meaning": "อย่างแน่นอน เด๊ะ",
    "reading": "เฝอะ เหนอะ ถลี่",
    "ipa": "d ˈe f ʌ n ʌ t l iː",
    "level": "A2"
  },
  {
    "id": "a2_1022",
    "word": "degree",
    "pos": "n.",
    "meaning": "ระดับ",
    "reading": "ดิ กรี๊",
    "ipa": "d ɪ g r ˈiː",
    "level": "A2"
  },
  {
    "id": "a2_1023",
    "word": "dentist",
    "pos": "n.",
    "meaning": "ทันตแพทย์",
    "reading": "เด๊ะ น เถอะ สึ ถึ",
    "ipa": "d ˈe n t ʌ s t",
    "level": "A2"
  },
  {
    "id": "a2_1024",
    "word": "department",
    "pos": "n.",
    "meaning": "แผนก ดิ",
    "reading": "พ้า (ร) ถึ เหมอะ น ถึ",
    "ipa": "d ɪ p ˈɑː r t m ʌ n t",
    "level": "A2"
  },
  {
    "id": "a2_1025",
    "word": "depend",
    "pos": "v.",
    "meaning": "ขึ้นอยู่กับ",
    "reading": "ดิ เพ้ะ น ดึ",
    "ipa": "d ɪ p ˈe n d",
    "level": "A2"
  },
  {
    "id": "a2_1026",
    "word": "desert",
    "pos": "n.",
    "meaning": "ทะเลทราย",
    "reading": "เด๊ะ เส่อ ร ถึ",
    "ipa": "d ˈe z ɜːʴ t",
    "level": "A2"
  },
  {
    "id": "a2_1027",
    "word": "designer",
    "pos": "n.",
    "meaning": "นักออกแบบ",
    "reading": "ดิ ซ้าย เหน่อ ร",
    "ipa": "d ɪ z ˈaɪ n ɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_1028",
    "word": "destroy",
    "pos": "v.",
    "meaning": "ทำลาย",
    "reading": "ดิ สึ ทร้อย",
    "ipa": "d ɪ s t r ˈɔɪ",
    "level": "A2"
  },
  {
    "id": "a2_1029",
    "word": "detective",
    "pos": "n.",
    "meaning": "นักสืบ",
    "reading": "ดิ เท้ะ ขึ ถิ่ ฝึ",
    "ipa": "d ɪ t ˈe k t ɪ v",
    "level": "A2"
  },
  {
    "id": "a2_1030",
    "word": "develop",
    "pos": "v.",
    "meaning": "พัฒนา",
    "reading": "ดิ เฟ้ะ เหลอะ ผึ",
    "ipa": "d ɪ v ˈe l ʌ p",
    "level": "A2"
  },
  {
    "id": "a2_1031",
    "word": "device",
    "pos": "n.",
    "meaning": "อุปกรณ์",
    "reading": "ดิ ฟ้าย สึ",
    "ipa": "d ɪ v ˈaɪ s",
    "level": "A2"
  },
  {
    "id": "a2_1032",
    "word": "diary",
    "pos": "n.",
    "meaning": "ไดอารี่",
    "reading": "ด๊าย เอ่อ ร หรี่",
    "ipa": "d ˈaɪ ɜːʴ iː",
    "level": "A2"
  },
  {
    "id": "a2_1033",
    "word": "differently",
    "pos": "adv.",
    "meaning": "แตกต่างกัน",
    "reading": "ดิ้ เฝรอะ น ถลี่",
    "ipa": "d ˈɪ f r ʌ n t l iː",
    "level": "A2"
  },
  {
    "id": "a2_1034",
    "word": "digital",
    "pos": "adj.",
    "meaning": "ดิจิทัล",
    "reading": "ดิ้ เจอะ เถอะ ล",
    "ipa": "d ˈɪ dʒ ʌ t ʌ l",
    "level": "A2"
  },
  {
    "id": "a2_1035",
    "word": "direct",
    "pos": "adj.",
    "meaning": "โดยตรง",
    "reading": "เด่อ ร เร้ะ ขึ ถึ",
    "ipa": "d ɜːʴ ˈe k t",
    "level": "A2"
  },
  {
    "id": "a2_1036",
    "word": "direction",
    "pos": "n.",
    "meaning": "ทิศทาง",
    "reading": "เด่อ ร เร้ะ ขึ เฉอะ น",
    "ipa": "d ɜːʴ ˈe k ʃ ʌ n",
    "level": "A2"
  },
  {
    "id": "a2_1037",
    "word": "director",
    "pos": "n.",
    "meaning": "ผู้อำนวยการ",
    "reading": "เด่อ ร เร้ะ ขึ เถ่อ ร",
    "ipa": "d ɜːʴ ˈe k t ɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_1038",
    "word": "disagree",
    "pos": "v.",
    "meaning": "ไม่เห็นด้วย",
    "reading": "ดิ เสอะ กรี๊",
    "ipa": "d ɪ s ʌ g r ˈiː",
    "level": "A2"
  },
  {
    "id": "a2_1039",
    "word": "disappear",
    "pos": "v.",
    "meaning": "หายไป",
    "reading": "ดิ เสอะ เพี้ย (ร)",
    "ipa": "d ˌɪ s ʌ p ˈɪ r",
    "level": "A2"
  },
  {
    "id": "a2_1040",
    "word": "disaster",
    "pos": "n.",
    "meaning": "ภัยพิบัติ",
    "reading": "ดิ แซ้ สึ เถ่อ ร",
    "ipa": "d ɪ z ˈæ s t ɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_1041",
    "word": "discover",
    "pos": "v.",
    "meaning": "ค้นพบ",
    "reading": "ดิ สึ คะ เฝ่อ ร",
    "ipa": "d ɪ s k ˈʌ v ɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_1042",
    "word": "discovery",
    "pos": "n.",
    "meaning": "การค้นพบ",
    "reading": "ดิ สึ คะ เฝ่อ ร หรี่",
    "ipa": "d ɪ s k ˈʌ v ɜːʴ iː",
    "level": "A2"
  },
  {
    "id": "a2_1043",
    "word": "discussion",
    "pos": "n.",
    "meaning": "การอภิปราย",
    "reading": "ดิ สึ คะ เฉอะ น",
    "ipa": "d ɪ s k ˈʌ ʃ ʌ n",
    "level": "A2"
  },
  {
    "id": "a2_1044",
    "word": "disease",
    "pos": "n.",
    "meaning": "โรค",
    "reading": "ดิ ซี้ สึ",
    "ipa": "d ɪ z ˈiː z",
    "level": "A2"
  },
  {
    "id": "a2_1045",
    "word": "distance",
    "pos": "n.",
    "meaning": "ระยะทาง",
    "reading": "ดิ้ สึ เถอะ น สึ",
    "ipa": "d ˈɪ s t ʌ n s",
    "level": "A2"
  },
  {
    "id": "a2_1046",
    "word": "divorced",
    "pos": "adj.",
    "meaning": "หย่าร้าง",
    "reading": "ดิ โฟ้ (ร) สึ ถึ",
    "ipa": "d ɪ v ˈɔː r s t",
    "level": "A2"
  },
  {
    "id": "a2_1047",
    "word": "document",
    "pos": "n.",
    "meaning": "เอกสาร ด๊า",
    "reading": "ขึ เหยอะ เหมอะ น ถึ",
    "ipa": "d ˈɑː k j ʌ m ʌ n t",
    "level": "A2"
  },
  {
    "id": "a2_1048",
    "word": "double",
    "pos": "adj./det./pron./v.",
    "meaning": "สองเท่า",
    "reading": "ด๊ะ เบอะ ล",
    "ipa": "d ˈʌ b ʌ l",
    "level": "A2"
  },
  {
    "id": "a2_1049",
    "word": "download",
    "pos": "v./n.",
    "meaning": "ดาวน์โหลด",
    "reading": "ด๊าว น โลว ดึ",
    "ipa": "d ˈaʊ n l ˌəʊ d",
    "level": "A2"
  },
  {
    "id": "a2_1050",
    "word": "downstairs",
    "pos": "adj.",
    "meaning": "ชั้นล่าง",
    "reading": "ด๊าว น สึ แท้ (ร) สึ",
    "ipa": "d ˈaʊ n s t ˈe r z",
    "level": "A2"
  },
  {
    "id": "a2_1051",
    "word": "drama",
    "pos": "n.",
    "meaning": "ละคร",
    "reading": "ดร๊า เหมอะ",
    "ipa": "d r ˈɑː m ʌ",
    "level": "A2"
  },
  {
    "id": "a2_1052",
    "word": "drawing",
    "pos": "n.",
    "meaning": "การวาดภาพ",
    "reading": "ดร๊อ อิ่ ง",
    "ipa": "d r ˈɔː ɪ ŋ",
    "level": "A2"
  },
  {
    "id": "a2_1053",
    "word": "dream",
    "pos": "n./v.",
    "meaning": "ฝัน",
    "reading": "ดรี ม",
    "ipa": "d r ˈiː m",
    "level": "A2"
  },
  {
    "id": "a2_1054",
    "word": "drive",
    "pos": "n.",
    "meaning": "ขับ",
    "reading": "ดราย ฝึ",
    "ipa": "d r ˈaɪ v",
    "level": "A2"
  },
  {
    "id": "a2_1055",
    "word": "driving",
    "pos": "n.",
    "meaning": "ขับรถ",
    "reading": "ดร๊าย ฝิ่ ง",
    "ipa": "d r ˈaɪ v ɪ ŋ",
    "level": "A2"
  },
  {
    "id": "a2_1056",
    "word": "drop",
    "pos": "v.",
    "meaning": "หยด",
    "reading": "ดรา ผึ",
    "ipa": "d r ˈɑː p",
    "level": "A2"
  },
  {
    "id": "a2_1057",
    "word": "drug",
    "pos": "n.",
    "meaning": "ยา",
    "reading": "ดระ กึ",
    "ipa": "d r ˈʌ g",
    "level": "A2"
  },
  {
    "id": "a2_1058",
    "word": "dry",
    "pos": "adj./v.",
    "meaning": "แห้ง",
    "reading": "ดราย",
    "ipa": "d r ˈaɪ",
    "level": "A2"
  },
  {
    "id": "a2_1059",
    "word": "earn",
    "pos": "v.",
    "meaning": "ได้รับ",
    "reading": "เออ ร น",
    "ipa": "ˈɜːʴ n",
    "level": "A2"
  },
  {
    "id": "a2_1060",
    "word": "earth",
    "pos": "n.",
    "meaning": "โลก",
    "reading": "เออ ร ตึ",
    "ipa": "ˈɜːʴ θ",
    "level": "A2"
  },
  {
    "id": "a2_1061",
    "word": "easily",
    "pos": "adv.",
    "meaning": "อย่างง่ายดาย",
    "reading": "อี๊ เสอะ หลี่",
    "ipa": "ˈiː z ʌ l iː",
    "level": "A2"
  },
  {
    "id": "a2_1062",
    "word": "education",
    "pos": "n.",
    "meaning": "การศึกษา เอะ",
    "reading": "เจอะ เค้ เฉอะ น",
    "ipa": "ˌe dʒ ʌ k ˈeɪ ʃ ʌ n",
    "level": "A2"
  },
  {
    "id": "a2_1063",
    "word": "effect",
    "pos": "n.",
    "meaning": "ผล",
    "reading": "อิ เฟ้ะ ขึ ถึ",
    "ipa": "ɪ f ˈe k t",
    "level": "A2"
  },
  {
    "id": "a2_1064",
    "word": "either",
    "pos": "det./pron./adv.",
    "meaning": "ทั้ง",
    "reading": "อี๊ เด่อ ร",
    "ipa": "ˈiː ð ɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_1065",
    "word": "electric",
    "pos": "adj.",
    "meaning": "ไฟฟ้า",
    "reading": "อิ เล้ะ ขึ ถริ่ ขึ",
    "ipa": "ɪ l ˈe k t r ɪ k",
    "level": "A2"
  },
  {
    "id": "a2_1066",
    "word": "electrical",
    "pos": "adj.",
    "meaning": "ไฟฟ้า",
    "reading": "อิ เล้ะ ขึ ถริ่ เขอะ ล",
    "ipa": "ɪ l ˈe k t r ɪ k ʌ l",
    "level": "A2"
  },
  {
    "id": "a2_1067",
    "word": "electricity",
    "pos": "n.",
    "meaning": "ไฟฟ้า",
    "reading": "อิ เละ ขึ ทริ เสอะ ถี่",
    "ipa": "ɪ l ˌe k t r ˈɪ s ʌ t iː",
    "level": "A2"
  },
  {
    "id": "a2_1068",
    "word": "electronic",
    "pos": "adj.",
    "meaning": "อิเล็กทรอนิกส์",
    "reading": "อิ เละ ขึ ทร้า หนิ่ ขึ",
    "ipa": "ˌɪ l ˌe k t r ˈɑː n ɪ k",
    "level": "A2"
  },
  {
    "id": "a2_1069",
    "word": "employ",
    "pos": "v.",
    "meaning": "จ้าง",
    "reading": "เอะ ม พล้อย",
    "ipa": "e m p l ˈɔɪ",
    "level": "A2"
  },
  {
    "id": "a2_1070",
    "word": "employee",
    "pos": "n.",
    "meaning": "พนักงาน",
    "reading": "เอะ ม พล้อย อี่",
    "ipa": "e m p l ˈɔɪ iː",
    "level": "A2"
  },
  {
    "id": "a2_1071",
    "word": "employer",
    "pos": "n.",
    "meaning": "นายจ้าง",
    "reading": "เอะ ม พล้อย เอ่อ ร",
    "ipa": "e m p l ˈɔɪ ɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_1072",
    "word": "empty",
    "pos": "adj.",
    "meaning": "ว่างเปล่า",
    "reading": "เอ๊ะ ม ผึ ถี่",
    "ipa": "ˈe m p t iː",
    "level": "A2"
  },
  {
    "id": "a2_1073",
    "word": "ending",
    "pos": "n.",
    "meaning": "สิ้นสุด",
    "reading": "เอ๊ะ น ดิ ง",
    "ipa": "ˈe n d ɪ ŋ",
    "level": "A2"
  },
  {
    "id": "a2_1074",
    "word": "energy",
    "pos": "n.",
    "meaning": "พลังงาน",
    "reading": "เอ๊ะ เหน่อ ร จี่",
    "ipa": "ˈe n ɜːʴ dʒ iː",
    "level": "A2"
  },
  {
    "id": "a2_1075",
    "word": "engine",
    "pos": "n.",
    "meaning": "เครื่องยนต์",
    "reading": "เอ๊ะ น เจอะ น",
    "ipa": "ˈe n dʒ ʌ n",
    "level": "A2"
  },
  {
    "id": "a2_1076",
    "word": "engineer",
    "pos": "n.",
    "meaning": "วิศวกร",
    "reading": "เอ๊ะ น เจอะ เนี้ย ร",
    "ipa": "ˈe n dʒ ʌ n ˈɪ r",
    "level": "A2"
  },
  {
    "id": "a2_1077",
    "word": "enormous",
    "pos": "adj.",
    "meaning": "มหาศาล",
    "reading": "อิ โน้ (ร) เหมอะ สึ",
    "ipa": "ɪ n ˈɔː r m ʌ s",
    "level": "A2"
  },
  {
    "id": "a2_1078",
    "word": "enter",
    "pos": "v.",
    "meaning": "เข้า",
    "reading": "เอ๊ะ น เถ่อ ร",
    "ipa": "ˈe n t ɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_1079",
    "word": "environment",
    "pos": "n.",
    "meaning": "สิ่งแวดล้อม อิ น ฟ้าย",
    "reading": "เหรอะ น เหมอะ น ถึ",
    "ipa": "ɪ n v ˈaɪ r ʌ n m ʌ n t",
    "level": "A2"
  },
  {
    "id": "a2_1080",
    "word": "equipment",
    "pos": "n.",
    "meaning": "อุปกรณ์",
    "reading": "อิ ควิ ผึ เหมอะ น ถึ",
    "ipa": "ɪ k w ˈɪ p m ʌ n t",
    "level": "A2"
  },
  {
    "id": "a2_1081",
    "word": "error",
    "pos": "n.",
    "meaning": "ข้อผิดพลาด",
    "reading": "แอ๊ (ร) เอ่อ ร",
    "ipa": "ˈe r ɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_1082",
    "word": "especially",
    "pos": "adv.",
    "meaning": "โดยเฉพาะ",
    "reading": "เออะ สึ เพ้ะ ฉลี่",
    "ipa": "ʌ s p ˈe ʃ l iː",
    "level": "A2"
  },
  {
    "id": "a2_1083",
    "word": "essay",
    "pos": "n.",
    "meaning": "เรียงความ",
    "reading": "เอ๊ะ เซ",
    "ipa": "ˈe s ˌeɪ",
    "level": "A2"
  },
  {
    "id": "a2_1084",
    "word": "everyday",
    "pos": "adj.",
    "meaning": "ทุกวัน",
    "reading": "เอ๊ะ ฝึ หรี่ เด๊",
    "ipa": "ˈe v r iː d ˈeɪ",
    "level": "A2"
  },
  {
    "id": "a2_1085",
    "word": "everywhere",
    "pos": "adv.",
    "meaning": "ทุกที่",
    "reading": "เอ๊ะ ฝึ หรี่ แว (ร)",
    "ipa": "ˈe v r iː w ˌe r",
    "level": "A2"
  },
  {
    "id": "a2_1086",
    "word": "evidence",
    "pos": "n.",
    "meaning": "หลักฐาน",
    "reading": "เอ๊ะ เฝอะ เดอะ น สึ",
    "ipa": "ˈe v ʌ d ʌ n s",
    "level": "A2"
  },
  {
    "id": "a2_1087",
    "word": "exact",
    "pos": "adj.",
    "meaning": "ที่แน่นอน",
    "reading": "อิ กึ แซ้ ขึ ถึ",
    "ipa": "ɪ g z ˈæ k t",
    "level": "A2"
  },
  {
    "id": "a2_1088",
    "word": "exactly",
    "pos": "adv.",
    "meaning": "อย่างแน่นอน",
    "reading": "อิ กึ แซ้ ขึ ถลี่",
    "ipa": "ɪ g z ˈæ k t l iː",
    "level": "A2"
  },
  {
    "id": "a2_1089",
    "word": "excellent",
    "pos": "adj.",
    "meaning": "ยอดเยี่ยม เอ๊ะ",
    "reading": "ขึ เสอะ เหลอะ น ถึ",
    "ipa": "ˈe k s ʌ l ʌ n t",
    "level": "A2"
  },
  {
    "id": "a2_1090",
    "word": "except",
    "pos": "prep.",
    "meaning": "ยกเว้น",
    "reading": "อิ ขึ เซ้ะ ผึ ถึ",
    "ipa": "ɪ k s ˈe p t",
    "level": "A2"
  },
  {
    "id": "a2_1091",
    "word": "exist",
    "pos": "v.",
    "meaning": "มีอยู่",
    "reading": "อิ กึ ซิ สึ ถึ",
    "ipa": "ɪ g z ˈɪ s t",
    "level": "A2"
  },
  {
    "id": "a2_1092",
    "word": "expect",
    "pos": "v.",
    "meaning": "คาดหวัง",
    "reading": "อิ ขึ สึ เพ้ะ ขึ ถึ",
    "ipa": "ɪ k s p ˈe k t",
    "level": "A2"
  },
  {
    "id": "a2_1093",
    "word": "experience",
    "pos": "n.",
    "meaning": "ประสบการณ์ อิ ขึ",
    "reading": "สึ เพี้ย (ร) อี่ เออะ น สึ",
    "ipa": "ɪ k s p ˈɪ r iː ʌ n s",
    "level": "A2"
  },
  {
    "id": "a2_1094",
    "word": "experiment",
    "pos": "n.",
    "meaning": "การทดลอง อิ ขึ สึ",
    "reading": "แพ้ ร เออะ เหมอะ น ถึ",
    "ipa": "ɪ k s p ˈe r ʌ m ʌ n t",
    "level": "A2"
  },
  {
    "id": "a2_1095",
    "word": "expert",
    "pos": "n./adj.",
    "meaning": "ผู้เชี่ยวชาญ",
    "reading": "เอ๊ะ ขึ สึ เผ่อ ร ถึ",
    "ipa": "ˈe k s p ɜːʴ t",
    "level": "A2"
  },
  {
    "id": "a2_1096",
    "word": "explanation",
    "pos": "n.",
    "meaning": "คำอธิบาย เอะ",
    "reading": "ขึ สึ เผลอะ เน้ เฉอะ น",
    "ipa": "ˌe k s p l ʌ n ˈeɪ ʃ ʌ n",
    "level": "A2"
  },
  {
    "id": "a2_1097",
    "word": "express",
    "pos": "v.",
    "meaning": "ด่วน",
    "reading": "อิ ขึ สึ เพร้ะ สึ",
    "ipa": "ɪ k s p r ˈe s",
    "level": "A2"
  },
  {
    "id": "a2_1098",
    "word": "expression",
    "pos": "n.",
    "meaning": "การแสดงออก",
    "reading": "อิ ขึ สึ เพร้ะ เฉอะ น",
    "ipa": "ɪ k s p r ˈe ʃ ʌ n",
    "level": "A2"
  },
  {
    "id": "a2_1099",
    "word": "extreme",
    "pos": "adj.",
    "meaning": "สุดขีด",
    "reading": "เอะ ขึ สึ ทรี้ ม",
    "ipa": "e k s t r ˈiː m",
    "level": "A2"
  },
  {
    "id": "a2_1100",
    "word": "extremely",
    "pos": "adv.",
    "meaning": "อย่างที่สุด",
    "reading": "เอะ ขึ สึ ทรี้ ม หลี่",
    "ipa": "e k s t r ˈiː m l iː",
    "level": "A2"
  },
  {
    "id": "a2_1101",
    "word": "factor",
    "pos": "n.",
    "meaning": "ปัจจัย",
    "reading": "แฟ้ ขึ เถ่อ ร",
    "ipa": "f ˈæ k t ɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_1102",
    "word": "factory",
    "pos": "n.",
    "meaning": "โรงงาน",
    "reading": "แฟ้ ขึ เถ่อ ร หรี่",
    "ipa": "f ˈæ k t ɜːʴ iː",
    "level": "A2"
  },
  {
    "id": "a2_1103",
    "word": "fail",
    "pos": "v.",
    "meaning": "ล้มเหลว",
    "reading": "เฟ ล",
    "ipa": "f ˈeɪ l",
    "level": "A2"
  },
  {
    "id": "a2_1104",
    "word": "fair",
    "pos": "adj.",
    "meaning": "ยุติธรรม",
    "reading": "แฟ (ร)",
    "ipa": "f ˈe r",
    "level": "A2"
  },
  {
    "id": "a2_1105",
    "word": "fall",
    "pos": "n.",
    "meaning": "ตก",
    "reading": "ฟอ ล",
    "ipa": "f ˈɔː l",
    "level": "A2"
  },
  {
    "id": "a2_1106",
    "word": "fan",
    "pos": "n.",
    "meaning": "พัดลม",
    "reading": "แฟ น",
    "ipa": "f ˈæ n",
    "level": "A2"
  },
  {
    "id": "a2_1107",
    "word": "farm",
    "pos": "v.",
    "meaning": "ฟาร์ม",
    "reading": "ฟา (ร) ม",
    "ipa": "f ˈɑː r m",
    "level": "A2"
  },
  {
    "id": "a2_1108",
    "word": "farming",
    "pos": "n.",
    "meaning": "เกษตรกรรม",
    "reading": "ฟ้า (ร) หมิ่ ง",
    "ipa": "f ˈɑː r m ɪ ŋ",
    "level": "A2"
  },
  {
    "id": "a2_1109",
    "word": "fashion",
    "pos": "n.",
    "meaning": "แฟชั่น",
    "reading": "แฟ้ เฉอะ น",
    "ipa": "f ˈæ ʃ ʌ n",
    "level": "A2"
  },
  {
    "id": "a2_1110",
    "word": "fat",
    "pos": "n.",
    "meaning": "อ้วน",
    "reading": "แฟ ถึ",
    "ipa": "f ˈæ t",
    "level": "A2"
  },
  {
    "id": "a2_1111",
    "word": "fear",
    "pos": "n.",
    "meaning": "กลัว",
    "reading": "เฟีย (ร)",
    "ipa": "f ˈɪ r",
    "level": "A2"
  },
  {
    "id": "a2_1112",
    "word": "feature",
    "pos": "n.",
    "meaning": "คุณสมบัติ",
    "reading": "ฟี้ เฉ่อ ร",
    "ipa": "f ˈiː tʃ ɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_1113",
    "word": "feed",
    "pos": "v.",
    "meaning": "ให้อาหาร",
    "reading": "ฟี ดึ",
    "ipa": "f ˈiː d",
    "level": "A2"
  },
  {
    "id": "a2_1114",
    "word": "female",
    "pos": "adj./n.",
    "meaning": "หญิง",
    "reading": "ฟี้ เม ล",
    "ipa": "f ˈiː m ˌeɪ l",
    "level": "A2"
  },
  {
    "id": "a2_1115",
    "word": "fiction",
    "pos": "n.",
    "meaning": "นิยาย",
    "reading": "ฟิ ขึ เฉอะ น",
    "ipa": "f ˈɪ k ʃ ʌ n",
    "level": "A2"
  },
  {
    "id": "a2_1116",
    "word": "field",
    "pos": "n.",
    "meaning": "สนาม",
    "reading": "ฟี ล ดึ",
    "ipa": "f ˈiː l d",
    "level": "A2"
  },
  {
    "id": "a2_1117",
    "word": "fight",
    "pos": "v./n.",
    "meaning": "ต่อสู้",
    "reading": "ฟาย ถึ",
    "ipa": "f ˈaɪ t",
    "level": "A2"
  },
  {
    "id": "a2_1118",
    "word": "figure",
    "pos": "n.",
    "meaning": "รูป",
    "reading": "ฟิ กึ เหย่อ ร",
    "ipa": "f ˈɪ g j ɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_1119",
    "word": "film",
    "pos": "v.",
    "meaning": "ฟิล์ม",
    "reading": "ฟิ ล ม",
    "ipa": "f ˈɪ l m",
    "level": "A2"
  },
  {
    "id": "a2_1120",
    "word": "final",
    "pos": "n.",
    "meaning": "สุดท้าย",
    "reading": "ฟ้าย เหนอะ ล",
    "ipa": "f ˈaɪ n ʌ l",
    "level": "A2"
  },
  {
    "id": "a2_1121",
    "word": "finally",
    "pos": "adv.",
    "meaning": "ในที่สุด",
    "reading": "ฟ้าย เหนอะ หลี่",
    "ipa": "f ˈaɪ n ʌ l iː",
    "level": "A2"
  },
  {
    "id": "a2_1122",
    "word": "finger",
    "pos": "n.",
    "meaning": "นิ้ว",
    "reading": "ฟิ ง เก่อ ร",
    "ipa": "f ˈɪ ŋ g ɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_1123",
    "word": "finish",
    "pos": "n.",
    "meaning": "เสร็จ",
    "reading": "ฟิ หนิ่ ฉึ",
    "ipa": "f ˈɪ n ɪ ʃ",
    "level": "A2"
  },
  {
    "id": "a2_1124",
    "word": "first",
    "pos": "n.",
    "meaning": "อันดับแรก",
    "reading": "เฟอ ร สึ ถึ",
    "ipa": "f ˈɜːʴ s t",
    "level": "A2"
  },
  {
    "id": "a2_1125",
    "word": "firstly",
    "pos": "adv.",
    "meaning": "ประการแรก",
    "reading": "เฟ้อ ร สึ ถลี่",
    "ipa": "f ˈɜːʴ s t l iː",
    "level": "A2"
  },
  {
    "id": "a2_1126",
    "word": "fish",
    "pos": "v.",
    "meaning": "ปลา",
    "reading": "ฟิ ฉึ",
    "ipa": "f ˈɪ ʃ",
    "level": "A2"
  },
  {
    "id": "a2_1127",
    "word": "fishing",
    "pos": "n.",
    "meaning": "ตกปลา",
    "reading": "ฟิ ฉิ่ ง",
    "ipa": "f ˈɪ ʃ ɪ ŋ",
    "level": "A2"
  },
  {
    "id": "a2_1128",
    "word": "fit",
    "pos": "v./adj.",
    "meaning": "พอดี",
    "reading": "ฟิ ถึ",
    "ipa": "f ˈɪ t",
    "level": "A2"
  },
  {
    "id": "a2_1129",
    "word": "fix",
    "pos": "v.",
    "meaning": "แก้ไข",
    "reading": "ฟิ ขึ สึ",
    "ipa": "f ˈɪ k s",
    "level": "A2"
  },
  {
    "id": "a2_1130",
    "word": "flat",
    "pos": "adj.",
    "meaning": "แบน",
    "reading": "แฟล ถึ",
    "ipa": "f l ˈæ t",
    "level": "A2"
  },
  {
    "id": "a2_1131",
    "word": "flu",
    "pos": "n.",
    "meaning": "ไข้หวัดใหญ่",
    "reading": "ฟลู",
    "ipa": "f l ˈuː",
    "level": "A2"
  },
  {
    "id": "a2_1132",
    "word": "fly",
    "pos": "n.",
    "meaning": "บิน",
    "reading": "ฟลาย",
    "ipa": "f l ˈaɪ",
    "level": "A2"
  },
  {
    "id": "a2_1133",
    "word": "flying",
    "pos": "n./adj.",
    "meaning": "บิน",
    "reading": "ฟล้าย อิ่ ง",
    "ipa": "f l ˈaɪ ɪ ŋ",
    "level": "A2"
  },
  {
    "id": "a2_1134",
    "word": "focus",
    "pos": "v./n.",
    "meaning": "จุดสนใจ",
    "reading": "โฟ้ว เขอะ สึ",
    "ipa": "f ˈəʊ k ʌ s",
    "level": "A2"
  },
  {
    "id": "a2_1135",
    "word": "following",
    "pos": "adj.",
    "meaning": "กำลังติดตาม",
    "reading": "ฟ้า โหล่ว อิ่ ง",
    "ipa": "f ˈɑː l əʊ ɪ ŋ",
    "level": "A2"
  },
  {
    "id": "a2_1136",
    "word": "foreign",
    "pos": "adj.",
    "meaning": "ต่างชาติ",
    "reading": "ฟ้อ เหรอะ น",
    "ipa": "f ˈɔː r ʌ n",
    "level": "A2"
  },
  {
    "id": "a2_1137",
    "word": "forest",
    "pos": "n.",
    "meaning": "ป่า",
    "reading": "โฟ้ (ร) เออะ สึ ถึ",
    "ipa": "f ˈɔː r ʌ s t",
    "level": "A2"
  },
  {
    "id": "a2_1138",
    "word": "fork",
    "pos": "n.",
    "meaning": "ส้อม",
    "reading": "โฟ (ร) ขึ",
    "ipa": "f ˈɔː r k",
    "level": "A2"
  },
  {
    "id": "a2_1139",
    "word": "formal",
    "pos": "adj.",
    "meaning": "เป็นทางการ",
    "reading": "โฟ้ (ร) เหมอะ ล",
    "ipa": "f ˈɔː r m ʌ l",
    "level": "A2"
  },
  {
    "id": "a2_1140",
    "word": "fortunately",
    "pos": "adv.",
    "meaning": "โชคดี โฟ้",
    "reading": "(ร) เฉอะ เหนอะ ถลี่",
    "ipa": "f ˈɔː r tʃ ʌ n ʌ t l iː",
    "level": "A2"
  },
  {
    "id": "a2_1141",
    "word": "forward",
    "pos": "adv.",
    "meaning": "ซึ่งไปข้างหน้า",
    "reading": "โฟ้ (ร) เหว่อ ร ดึ",
    "ipa": "f ˈɔː r w ɜːʴ d",
    "level": "A2"
  },
  {
    "id": "a2_1142",
    "word": "free",
    "pos": "adv.",
    "meaning": "ฟรี",
    "reading": "ฟรี",
    "ipa": "f r ˈiː",
    "level": "A2"
  },
  {
    "id": "a2_1143",
    "word": "fresh",
    "pos": "adj.",
    "meaning": "สด",
    "reading": "เฟระ ฉึ",
    "ipa": "f r ˈe ʃ",
    "level": "A2"
  },
  {
    "id": "a2_1144",
    "word": "fridge",
    "pos": "n.",
    "meaning": "ตู้เย็น",
    "reading": "ฟริ จึ",
    "ipa": "f r ˈɪ dʒ",
    "level": "A2"
  },
  {
    "id": "a2_1145",
    "word": "frog",
    "pos": "n.",
    "meaning": "กบ",
    "reading": "ฟรา กึ",
    "ipa": "f r ˈɑː g",
    "level": "A2"
  },
  {
    "id": "a2_1146",
    "word": "fun",
    "pos": "adj.",
    "meaning": "สนุก",
    "reading": "ฟะ น",
    "ipa": "f ˈʌ n",
    "level": "A2"
  },
  {
    "id": "a2_1147",
    "word": "furniture",
    "pos": "n.",
    "meaning": "เฟอร์นิเจอร์",
    "reading": "เฟ้อ ร หนิ่ เฉ่อ ร",
    "ipa": "f ˈɜːʴ n ɪ tʃ ɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_1148",
    "word": "further",
    "pos": "adj.",
    "meaning": "ไกลออกไป",
    "reading": "เฟ้อ ร เด่อ ร",
    "ipa": "f ˈɜːʴ ð ɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_1149",
    "word": "future",
    "pos": "adj.",
    "meaning": "อนาคต",
    "reading": "ฝึ ยู้ เฉ่อ ร",
    "ipa": "f j ˈuː tʃ ɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_1150",
    "word": "gallery",
    "pos": "n.",
    "meaning": "แกลเลอรี่",
    "reading": "แก๊ เหล่อ ร หรี่",
    "ipa": "g ˈæ l ɜːʴ iː",
    "level": "A2"
  },
  {
    "id": "a2_1151",
    "word": "gap",
    "pos": "n.",
    "meaning": "ช่องว่าง",
    "reading": "แก ผึ",
    "ipa": "g ˈæ p",
    "level": "A2"
  },
  {
    "id": "a2_1152",
    "word": "gas",
    "pos": "n.",
    "meaning": "แก๊ส",
    "reading": "แก สึ",
    "ipa": "g ˈæ s",
    "level": "A2"
  },
  {
    "id": "a2_1153",
    "word": "gate",
    "pos": "n.",
    "meaning": "ประตู",
    "reading": "เก ถึ",
    "ipa": "g ˈeɪ t",
    "level": "A2"
  },
  {
    "id": "a2_1154",
    "word": "general",
    "pos": "adj.",
    "meaning": "ทั่วไป เจ๊ะ",
    "reading": "เหน่อ ร เหรอะ ล",
    "ipa": "dʒ ˈe n ɜːʴ ʌ l",
    "level": "A2"
  },
  {
    "id": "a2_1155",
    "word": "gift",
    "pos": "n.",
    "meaning": "ของขวัญ",
    "reading": "กิ ฝึ ถึ",
    "ipa": "g ˈɪ f t",
    "level": "A2"
  },
  {
    "id": "a2_1156",
    "word": "goal",
    "pos": "n.",
    "meaning": "เป้าหมาย",
    "reading": "โกว ล",
    "ipa": "g ˈəʊ l",
    "level": "A2"
  },
  {
    "id": "a2_1157",
    "word": "god",
    "pos": "n.",
    "meaning": "พระเจ้า",
    "reading": "ก็อด",
    "ipa": "g ɑː d",
    "level": "A2"
  },
  {
    "id": "a2_1158",
    "word": "gold",
    "pos": "n./adj.",
    "meaning": "ทอง",
    "reading": "โกว ล ดึ",
    "ipa": "g ˈəʊ l d",
    "level": "A2"
  },
  {
    "id": "a2_1159",
    "word": "golf",
    "pos": "n.",
    "meaning": "กอล์ฟ",
    "reading": "กา ล ฝึ",
    "ipa": "g ˈɑː l f",
    "level": "A2"
  },
  {
    "id": "a2_1160",
    "word": "good",
    "pos": "n.",
    "meaning": "ดี",
    "reading": "กุ ดึ",
    "ipa": "g ˈʊ d",
    "level": "A2"
  },
  {
    "id": "a2_1161",
    "word": "government",
    "pos": "n.",
    "meaning": "รัฐบาล ก๊ะ",
    "reading": "เฝ่อ ร เหมอะ น ถึ",
    "ipa": "g ˈʌ v ɜːʴ m ʌ n t",
    "level": "A2"
  },
  {
    "id": "a2_1162",
    "word": "grass",
    "pos": "n.",
    "meaning": "หญ้า",
    "reading": "แกร สึ",
    "ipa": "g r ˈæ s",
    "level": "A2"
  },
  {
    "id": "a2_1163",
    "word": "greet",
    "pos": "v.",
    "meaning": "ทักทาย",
    "reading": "กรี ถึ",
    "ipa": "g r ˈiː t",
    "level": "A2"
  },
  {
    "id": "a2_1164",
    "word": "ground",
    "pos": "n.",
    "meaning": "พื้น",
    "reading": "กราว น ดึ",
    "ipa": "g r ˈaʊ n d",
    "level": "A2"
  },
  {
    "id": "a2_1165",
    "word": "guest",
    "pos": "n.",
    "meaning": "แขก",
    "reading": "เกะ สึ ถึ",
    "ipa": "g ˈe s t",
    "level": "A2"
  },
  {
    "id": "a2_1166",
    "word": "guide",
    "pos": "n./v.",
    "meaning": "แนะนำ",
    "reading": "กาย ดึ",
    "ipa": "g ˈaɪ d",
    "level": "A2"
  },
  {
    "id": "a2_1167",
    "word": "gun",
    "pos": "n.",
    "meaning": "ปืน",
    "reading": "กะ น",
    "ipa": "g ˈʌ n",
    "level": "A2"
  },
  {
    "id": "a2_1168",
    "word": "guy",
    "pos": "n.",
    "meaning": "ผู้ชาย",
    "reading": "กาย",
    "ipa": "g ˈaɪ",
    "level": "A2"
  },
  {
    "id": "a2_1169",
    "word": "habit",
    "pos": "n.",
    "meaning": "นิสัย",
    "reading": "แฮ้ เบอะ ถึ",
    "ipa": "h ˈæ b ʌ t",
    "level": "A2"
  },
  {
    "id": "a2_1170",
    "word": "half",
    "pos": "adv.",
    "meaning": "ครึ่ง",
    "reading": "แฮ ฝึ",
    "ipa": "h ˈæ f",
    "level": "A2"
  },
  {
    "id": "a2_1171",
    "word": "hall",
    "pos": "n.",
    "meaning": "ห้องโถง",
    "reading": "ฮอ ล",
    "ipa": "h ˈɔː l",
    "level": "A2"
  },
  {
    "id": "a2_1172",
    "word": "happily",
    "pos": "adv.",
    "meaning": "อย่างมีความสุข",
    "reading": "แฮ้ เผอะ หลี่",
    "ipa": "h ˈæ p ʌ l iː",
    "level": "A2"
  },
  {
    "id": "a2_1173",
    "word": "have",
    "pos": "auxiliary/v.",
    "meaning": "มี",
    "reading": "แฮ ฝึ",
    "ipa": "h ˈæ v",
    "level": "A2"
  },
  {
    "id": "a2_1174",
    "word": "headache",
    "pos": "n.",
    "meaning": "ปวดศีรษะ",
    "reading": "เฮ้ะ เด ขึ",
    "ipa": "h ˈe d ˌeɪ k",
    "level": "A2"
  },
  {
    "id": "a2_1175",
    "word": "heart",
    "pos": "n.",
    "meaning": "หัวใจ",
    "reading": "ฮา (ร) ถึ",
    "ipa": "h ˈɑː r t",
    "level": "A2"
  },
  {
    "id": "a2_1176",
    "word": "heat",
    "pos": "n./v.",
    "meaning": "ความร้อน",
    "reading": "ฮี ถึ",
    "ipa": "h ˈiː t",
    "level": "A2"
  },
  {
    "id": "a2_1177",
    "word": "heavy",
    "pos": "adj.",
    "meaning": "หนัก",
    "reading": "เฮ้ะ ฝี่",
    "ipa": "h ˈe v iː",
    "level": "A2"
  },
  {
    "id": "a2_1178",
    "word": "height",
    "pos": "n.",
    "meaning": "ความสูง",
    "reading": "ฮาย ถึ",
    "ipa": "h ˈaɪ t",
    "level": "A2"
  },
  {
    "id": "a2_1179",
    "word": "helpful",
    "pos": "adj.",
    "meaning": "มีประโยชน์",
    "reading": "เฮ้ะ ล ผึ เฝอะ ล",
    "ipa": "h ˈe l p f ʌ l",
    "level": "A2"
  },
  {
    "id": "a2_1180",
    "word": "hero",
    "pos": "n.",
    "meaning": "ฮีโร่",
    "reading": "เฮี้ย (ร) โอ่ว",
    "ipa": "h ˈɪ r əʊ",
    "level": "A2"
  },
  {
    "id": "a2_1181",
    "word": "hers",
    "pos": "pron.",
    "meaning": "ของเธอ",
    "reading": "ห สึ",
    "ipa": "h ɜːʴ z",
    "level": "A2"
  },
  {
    "id": "a2_1182",
    "word": "herself",
    "pos": "pron.",
    "meaning": "ตัวเธอเอง",
    "reading": "เห่อ ร เซ้ะ ล ฝึ",
    "ipa": "h ɜːʴ s ˈe l f",
    "level": "A2"
  },
  {
    "id": "a2_1183",
    "word": "hide",
    "pos": "v.",
    "meaning": "ซ่อน",
    "reading": "ฮาย ดึ",
    "ipa": "h ˈaɪ d",
    "level": "A2"
  },
  {
    "id": "a2_1184",
    "word": "high",
    "pos": "adv.",
    "meaning": "สูง",
    "reading": "ฮาย",
    "ipa": "h ˈaɪ",
    "level": "A2"
  },
  {
    "id": "a2_1185",
    "word": "hill",
    "pos": "n.",
    "meaning": "เนินเขา",
    "reading": "ฮิ ล",
    "ipa": "h ˈɪ l",
    "level": "A2"
  },
  {
    "id": "a2_1186",
    "word": "himself",
    "pos": "pron.",
    "meaning": "ตัวเขาเอง",
    "reading": "หิ่ ม เซ้ะ ล ฝึ",
    "ipa": "h ɪ m s ˈe l f",
    "level": "A2"
  },
  {
    "id": "a2_1187",
    "word": "his",
    "pos": "pron.",
    "meaning": "ของเขา",
    "reading": "ฮิ สึ",
    "ipa": "h ˈɪ z",
    "level": "A2"
  },
  {
    "id": "a2_1188",
    "word": "hit",
    "pos": "v./n.",
    "meaning": "ตี",
    "reading": "ฮิ ถึ",
    "ipa": "h ˈɪ t",
    "level": "A2"
  },
  {
    "id": "a2_1189",
    "word": "hockey",
    "pos": "n.",
    "meaning": "ฮอกกี้",
    "reading": "ฮ้า ขี่",
    "ipa": "h ˈɑː k iː",
    "level": "A2"
  },
  {
    "id": "a2_1190",
    "word": "hold",
    "pos": "v.",
    "meaning": "ถือ",
    "reading": "โฮว ล ดึ",
    "ipa": "h ˈəʊ l d",
    "level": "A2"
  },
  {
    "id": "a2_1191",
    "word": "hole",
    "pos": "n.",
    "meaning": "รู",
    "reading": "โฮว ล",
    "ipa": "h ˈəʊ l",
    "level": "A2"
  },
  {
    "id": "a2_1192",
    "word": "home",
    "pos": "adj.",
    "meaning": "บ้าน",
    "reading": "โฮว ม",
    "ipa": "h ˈəʊ m",
    "level": "A2"
  },
  {
    "id": "a2_1193",
    "word": "hope",
    "pos": "n.",
    "meaning": "หวัง",
    "reading": "โฮว ผึ",
    "ipa": "h ˈəʊ p",
    "level": "A2"
  },
  {
    "id": "a2_1194",
    "word": "huge",
    "pos": "adj.",
    "meaning": "ใหญ่",
    "reading": "หึ ยู จึ",
    "ipa": "h j ˈuː dʒ",
    "level": "A2"
  },
  {
    "id": "a2_1195",
    "word": "human",
    "pos": "adj./n.",
    "meaning": "มนุษย์",
    "reading": "หึ ยู้ เหมอะ น",
    "ipa": "h j ˈuː m ʌ n",
    "level": "A2"
  },
  {
    "id": "a2_1196",
    "word": "hurt",
    "pos": "v./adj.",
    "meaning": "เจ็บ",
    "reading": "เฮอ ร ถึ",
    "ipa": "h ˈɜːʴ t",
    "level": "A2"
  },
  {
    "id": "a2_1197",
    "word": "ideal",
    "pos": "adj.",
    "meaning": "ในอุดมคติ",
    "reading": "อ่าย ดี๊ ล",
    "ipa": "aɪ d ˈiː l",
    "level": "A2"
  },
  {
    "id": "a2_1198",
    "word": "identify",
    "pos": "v.",
    "meaning": "แยกแยะ อ่าย",
    "reading": "เด๊ะ น เถอะ ฟาย",
    "ipa": "aɪ d ˈe n t ʌ f ˌaɪ",
    "level": "A2"
  },
  {
    "id": "a2_1199",
    "word": "ill",
    "pos": "adj.",
    "meaning": "ป่วย",
    "reading": "อิ ล",
    "ipa": "ˈɪ l",
    "level": "A2"
  },
  {
    "id": "a2_1200",
    "word": "illness",
    "pos": "n.",
    "meaning": "การเจ็บป่วย",
    "reading": "อิ้ ล เหนอะ สึ",
    "ipa": "ˈɪ l n ʌ s",
    "level": "A2"
  },
  {
    "id": "a2_1201",
    "word": "image",
    "pos": "n.",
    "meaning": "ภาพ",
    "reading": "อิ้ เหมอะ จึ",
    "ipa": "ˈɪ m ʌ dʒ",
    "level": "A2"
  },
  {
    "id": "a2_1202",
    "word": "immediately",
    "pos": "adv.",
    "meaning": "โดยทันที",
    "reading": "อิ มี้ ดี เออะ ถลี่",
    "ipa": "ˌɪ m ˈiː d ˌiː ʌ t l iː",
    "level": "A2"
  },
  {
    "id": "a2_1203",
    "word": "impossible",
    "pos": "adj.",
    "meaning": "เป็นไปไม่ได้ อิ",
    "reading": "ม พ้า เสอะ เบอะ ล",
    "ipa": "ˌɪ m p ˈɑː s ʌ b ʌ l",
    "level": "A2"
  },
  {
    "id": "a2_1204",
    "word": "included",
    "pos": "adj.",
    "meaning": "รวมอยู่ด้วย",
    "reading": "อิ น คลู้ เดอะ ดึ",
    "ipa": "ˌɪ n k l ˈuː d ʌ d",
    "level": "A2"
  },
  {
    "id": "a2_1205",
    "word": "including",
    "pos": "prep.",
    "meaning": "รวมทั้ง",
    "reading": "อิ น คลู้ ดิ ง",
    "ipa": "ˌɪ n k l ˈuː d ɪ ŋ",
    "level": "A2"
  },
  {
    "id": "a2_1206",
    "word": "increase",
    "pos": "v./n.",
    "meaning": "เพิ่มขึ้น",
    "reading": "อิ้ น ครี สึ",
    "ipa": "ˈɪ n k r ˌiː s",
    "level": "A2"
  },
  {
    "id": "a2_1207",
    "word": "incredible",
    "pos": "adj.",
    "meaning": "เหลือเชื่อ อิ",
    "reading": "น เคร้ะ เดอะ เบอะ ล",
    "ipa": "ˌɪ n k r ˈe d ʌ b ʌ l",
    "level": "A2"
  },
  {
    "id": "a2_1208",
    "word": "independent",
    "pos": "adj.",
    "meaning": "เป็นอิสระ อิ",
    "reading": "น ดิ เพ้ะ น เดอะ น ถึ",
    "ipa": "ˌɪ n d ɪ p ˈe n d ʌ n t",
    "level": "A2"
  },
  {
    "id": "a2_1209",
    "word": "individual",
    "pos": "n./adj.",
    "meaning": "รายบุคคล อิ น",
    "reading": "เดอะ ฟิ เจอะ เหวอะ ล",
    "ipa": "ˌɪ n d ʌ v ˈɪ dʒ ʌ w ʌ l",
    "level": "A2"
  },
  {
    "id": "a2_1210",
    "word": "industry",
    "pos": "n.",
    "meaning": "อุตสาหกรรม",
    "reading": "อิ้ น เดอะ สึ ถรี่",
    "ipa": "ˈɪ n d ʌ s t r iː",
    "level": "A2"
  },
  {
    "id": "a2_1211",
    "word": "informal",
    "pos": "adj.",
    "meaning": "ไม่เป็นทางการ อิ",
    "reading": "น โฟ้ (ร) เหมอะ ล",
    "ipa": "ˌɪ n f ˈɔː r m ʌ l",
    "level": "A2"
  },
  {
    "id": "a2_1212",
    "word": "injury",
    "pos": "n.",
    "meaning": "บาดเจ็บ",
    "reading": "อิ้ น เจ่อ ร หรี่",
    "ipa": "ˈɪ n dʒ ɜːʴ iː",
    "level": "A2"
  },
  {
    "id": "a2_1213",
    "word": "insect",
    "pos": "n.",
    "meaning": "แมลง",
    "reading": "อิ้ น เซะ ขึ ถึ",
    "ipa": "ˈɪ n s ˌe k t",
    "level": "A2"
  },
  {
    "id": "a2_1214",
    "word": "inside",
    "pos": "prep./adv./n./adj.",
    "meaning": "ข้างใน",
    "reading": "อิ น ซ้าย ดึ",
    "ipa": "ˌɪ n s ˈaɪ d",
    "level": "A2"
  },
  {
    "id": "a2_1215",
    "word": "instead",
    "pos": "adv.",
    "meaning": "แทน",
    "reading": "อิ น สึ เท้ะ ดึ",
    "ipa": "ˌɪ n s t ˈe d",
    "level": "A2"
  },
  {
    "id": "a2_1216",
    "word": "instruction",
    "pos": "n.",
    "meaning": "คำแนะนำ อิ",
    "reading": "น สึ ทระ ขึ เฉอะ น",
    "ipa": "ˌɪ n s t r ˈʌ k ʃ ʌ n",
    "level": "A2"
  },
  {
    "id": "a2_1217",
    "word": "instructor",
    "pos": "n.",
    "meaning": "ผู้สอน",
    "reading": "อิ น สึ ทระ ขึ เถ่อ ร",
    "ipa": "ˌɪ n s t r ˈʌ k t ɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_1218",
    "word": "instrument",
    "pos": "n.",
    "meaning": "อุปกรณ์ อิ้ น",
    "reading": "สึ เถรอะ เหมอะ น ถึ",
    "ipa": "ˈɪ n s t r ʌ m ʌ n t",
    "level": "A2"
  },
  {
    "id": "a2_1219",
    "word": "intelligent",
    "pos": "adj.",
    "meaning": "ฉลาด อิ น",
    "reading": "เท้ะ เหลอะ เจอะ น ถึ",
    "ipa": "ˌɪ n t ˈe l ʌ dʒ ʌ n t",
    "level": "A2"
  },
  {
    "id": "a2_1220",
    "word": "international",
    "pos": "adj.",
    "meaning": "ระหว่างประเทศ อิ น เถ่อ",
    "reading": "ร แน้ เฉอะ เหนอะ ล",
    "ipa": "ˌɪ n t ɜːʴ n ˈæ ʃ ʌ n ʌ l",
    "level": "A2"
  },
  {
    "id": "a2_1221",
    "word": "introduction",
    "pos": "n.",
    "meaning": "การแนะนำ อิ",
    "reading": "น เถรอะ ด๊ะ ขึ เฉอะ น",
    "ipa": "ˌɪ n t r ʌ d ˈʌ k ʃ ʌ n",
    "level": "A2"
  },
  {
    "id": "a2_1222",
    "word": "invent",
    "pos": "v.",
    "meaning": "ประดิษฐ์",
    "reading": "อิ น เฟ้ะ น ถึ",
    "ipa": "ˌɪ n v ˈe n t",
    "level": "A2"
  },
  {
    "id": "a2_1223",
    "word": "invention",
    "pos": "n.",
    "meaning": "สิ่งประดิษฐ์",
    "reading": "อิ น เฟ้ะ น เฉอะ น",
    "ipa": "ˌɪ n v ˈe n ʃ ʌ n",
    "level": "A2"
  },
  {
    "id": "a2_1224",
    "word": "invitation",
    "pos": "n.",
    "meaning": "การเชิญ",
    "reading": "อิ น ฝิ่ เท้ เฉอะ น",
    "ipa": "ˌɪ n v ɪ t ˈeɪ ʃ ʌ n",
    "level": "A2"
  },
  {
    "id": "a2_1225",
    "word": "invite",
    "pos": "v.",
    "meaning": "เชิญ",
    "reading": "อิ้ น ฝ่าย ถึ",
    "ipa": "ˈɪ n v aɪ t",
    "level": "A2"
  },
  {
    "id": "a2_1226",
    "word": "involve",
    "pos": "v.",
    "meaning": "มีส่วนร่วม",
    "reading": "อิ น ฟ้า ล ฝึ",
    "ipa": "ˌɪ n v ˈɑː l v",
    "level": "A2"
  },
  {
    "id": "a2_1227",
    "word": "item",
    "pos": "n.",
    "meaning": "รายการ",
    "reading": "อ๊าย เถอะ ม",
    "ipa": "ˈaɪ t ʌ m",
    "level": "A2"
  },
  {
    "id": "a2_1228",
    "word": "itself",
    "pos": "pron.",
    "meaning": "ตัวมันเอง",
    "reading": "อิ ถึ เซ้ะ ล ฝึ",
    "ipa": "ˌɪ t s ˈe l f",
    "level": "A2"
  },
  {
    "id": "a2_1229",
    "word": "jam",
    "pos": "n.",
    "meaning": "แยม",
    "reading": "แจ ม",
    "ipa": "dʒ ˈæ m",
    "level": "A2"
  },
  {
    "id": "a2_1230",
    "word": "jazz",
    "pos": "n.",
    "meaning": "แจ๊ส",
    "reading": "แจ สึ",
    "ipa": "dʒ ˈæ z",
    "level": "A2"
  },
  {
    "id": "a2_1231",
    "word": "jewellery",
    "pos": "n.",
    "meaning": "เครื่องเพชรพลอย",
    "reading": "จู๊ เออะ ล หรี่",
    "ipa": "dʒˈuːəlriː",
    "level": "A2"
  },
  {
    "id": "a2_1232",
    "word": "joke",
    "pos": "n./v.",
    "meaning": "เรื่องตลก",
    "reading": "โจว ขึ",
    "ipa": "dʒ ˈəʊ k",
    "level": "A2"
  },
  {
    "id": "a2_1233",
    "word": "journalist",
    "pos": "n.",
    "meaning": "นักข่าว เจ๊อ",
    "reading": "ร เหนอะ เหลอะ สึ ถึ",
    "ipa": "dʒ ˈɜːʴ n ʌ l ʌ s t",
    "level": "A2"
  },
  {
    "id": "a2_1234",
    "word": "jump",
    "pos": "v./n.",
    "meaning": "กระโดด",
    "reading": "จะ ม ผึ",
    "ipa": "dʒ ˈʌ m p",
    "level": "A2"
  },
  {
    "id": "a2_1235",
    "word": "kid",
    "pos": "n.",
    "meaning": "เด็ก",
    "reading": "คิ ดึ",
    "ipa": "k ˈɪ d",
    "level": "A2"
  },
  {
    "id": "a2_1236",
    "word": "kill",
    "pos": "v.",
    "meaning": "ฆ่า",
    "reading": "คิ ล",
    "ipa": "k ˈɪ l",
    "level": "A2"
  },
  {
    "id": "a2_1237",
    "word": "king",
    "pos": "n.",
    "meaning": "กษัตริย์",
    "reading": "คิ ง",
    "ipa": "k ˈɪ ŋ",
    "level": "A2"
  },
  {
    "id": "a2_1238",
    "word": "knee",
    "pos": "n.",
    "meaning": "เข่า",
    "reading": "นี",
    "ipa": "n ˈiː",
    "level": "A2"
  },
  {
    "id": "a2_1239",
    "word": "knife",
    "pos": "n.",
    "meaning": "มีด",
    "reading": "นาย ฝึ",
    "ipa": "n ˈaɪ f",
    "level": "A2"
  },
  {
    "id": "a2_1240",
    "word": "knock",
    "pos": "v.",
    "meaning": "เคาะ",
    "reading": "นา ขึ",
    "ipa": "n ˈɑː k",
    "level": "A2"
  },
  {
    "id": "a2_1241",
    "word": "knowledge",
    "pos": "n.",
    "meaning": "ความรู้",
    "reading": "น้า เหลอะ จึ",
    "ipa": "n ˈɑː l ʌ dʒ",
    "level": "A2"
  },
  {
    "id": "a2_1242",
    "word": "lab",
    "pos": "n.",
    "meaning": "ห้องปฏิบัติการ",
    "reading": "แล บึ",
    "ipa": "l ˈæ b",
    "level": "A2"
  },
  {
    "id": "a2_1243",
    "word": "lady",
    "pos": "n.",
    "meaning": "ผู้หญิง",
    "reading": "เล้ ดี่",
    "ipa": "l ˈeɪ d iː",
    "level": "A2"
  },
  {
    "id": "a2_1244",
    "word": "lake",
    "pos": "n.",
    "meaning": "ทะเลสาบ",
    "reading": "เล ขึ",
    "ipa": "l ˈeɪ k",
    "level": "A2"
  },
  {
    "id": "a2_1245",
    "word": "lamp",
    "pos": "n.",
    "meaning": "โคมไฟ",
    "reading": "แล ม ผึ",
    "ipa": "l ˈæ m p",
    "level": "A2"
  },
  {
    "id": "a2_1246",
    "word": "land",
    "pos": "v.",
    "meaning": "ที่ดิน",
    "reading": "แล น ดึ",
    "ipa": "l ˈæ n d",
    "level": "A2"
  },
  {
    "id": "a2_1247",
    "word": "laptop",
    "pos": "n.",
    "meaning": "แล็ปท็อป",
    "reading": "แล้ ผึ ทา ผึ",
    "ipa": "l ˈæ p t ˌɑː p",
    "level": "A2"
  },
  {
    "id": "a2_1248",
    "word": "last",
    "pos": "adv./n.",
    "meaning": "ล่าสุด",
    "reading": "แล สึ ถึ",
    "ipa": "l ˈæ s t",
    "level": "A2"
  },
  {
    "id": "a2_1249",
    "word": "later",
    "pos": "adj.",
    "meaning": "ภายหลัง",
    "reading": "เล้ เถ่อ ร",
    "ipa": "l ˈeɪ t ɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_1250",
    "word": "laughter",
    "pos": "n.",
    "meaning": "เสียงหัวเราะ",
    "reading": "แล้ ฝึ เถ่อ ร",
    "ipa": "l ˈæ f t ɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_1251",
    "word": "law",
    "pos": "n.",
    "meaning": "กฎ",
    "reading": "ลอ",
    "ipa": "l ˈɔː",
    "level": "A2"
  },
  {
    "id": "a2_1252",
    "word": "lawyer",
    "pos": "n.",
    "meaning": "ทนายความ",
    "reading": "ล้อ เหย่อ ร",
    "ipa": "l ˈɔː j ɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_1253",
    "word": "lazy",
    "pos": "adj.",
    "meaning": "ขี้เกียจ",
    "reading": "เล้ สี่",
    "ipa": "l ˈeɪ z iː",
    "level": "A2"
  },
  {
    "id": "a2_1254",
    "word": "lead",
    "pos": "v.",
    "meaning": "นำ, นำทาง",
    "reading": "ลีด",
    "ipa": "l iː d",
    "level": "A2"
  },
  {
    "id": "a2_1255",
    "word": "leader",
    "pos": "n.",
    "meaning": "ผู้นำ",
    "reading": "ลี้ เด่อ ร",
    "ipa": "l ˈiː d ɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_1256",
    "word": "learning",
    "pos": "n.",
    "meaning": "การเรียนรู้",
    "reading": "เล้อ ร หนิ่ ง",
    "ipa": "l ˈɜːʴ n ɪ ŋ",
    "level": "A2"
  },
  {
    "id": "a2_1257",
    "word": "least",
    "pos": "det./pron./adv.",
    "meaning": "น้อยที่สุด",
    "reading": "ลี สึ ถึ",
    "ipa": "l ˈiː s t",
    "level": "A2"
  },
  {
    "id": "a2_1258",
    "word": "lecture",
    "pos": "n./v.",
    "meaning": "การบรรยาย",
    "reading": "เล้ะ ขึ เฉ่อ ร",
    "ipa": "l ˈe k tʃ ɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_1259",
    "word": "lemon",
    "pos": "n.",
    "meaning": "มะนาว",
    "reading": "เล้ะ เหมอะ น",
    "ipa": "l ˈe m ʌ n",
    "level": "A2"
  },
  {
    "id": "a2_1260",
    "word": "lend",
    "pos": "v.",
    "meaning": "ให้ยืม",
    "reading": "เละ น ดึ",
    "ipa": "l ˈe n d",
    "level": "A2"
  },
  {
    "id": "a2_1261",
    "word": "less",
    "pos": "det./pron./adv.",
    "meaning": "น้อย",
    "reading": "เละ สึ",
    "ipa": "l ˈe s",
    "level": "A2"
  },
  {
    "id": "a2_1262",
    "word": "level",
    "pos": "n.",
    "meaning": "ระดับ",
    "reading": "เล้ะ เฝอะ ล",
    "ipa": "l ˈe v ʌ l",
    "level": "A2"
  },
  {
    "id": "a2_1263",
    "word": "lifestyle",
    "pos": "n.",
    "meaning": "ไลฟ์สไตล์",
    "reading": "ล้าย ฝึ สึ ทาย ล",
    "ipa": "l ˈaɪ f s t ˌaɪ l",
    "level": "A2"
  },
  {
    "id": "a2_1264",
    "word": "lift",
    "pos": "v./n.",
    "meaning": "ยก",
    "reading": "ลิ ฝึ ถึ",
    "ipa": "l ˈɪ f t",
    "level": "A2"
  },
  {
    "id": "a2_1265",
    "word": "light",
    "pos": "adj./v.",
    "meaning": "แสงสว่าง)",
    "reading": "ลาย ถึ",
    "ipa": "l ˈaɪ t",
    "level": "A2"
  },
  {
    "id": "a2_1266",
    "word": "likely",
    "pos": "adj.",
    "meaning": "มีแนวโน้ม",
    "reading": "ล้าย ขลี่",
    "ipa": "l ˈaɪ k l iː",
    "level": "A2"
  },
  {
    "id": "a2_1267",
    "word": "link",
    "pos": "n./v.",
    "meaning": "ลิงค์",
    "reading": "ลิ ง ขึ",
    "ipa": "l ˈɪ ŋ k",
    "level": "A2"
  },
  {
    "id": "a2_1268",
    "word": "listener",
    "pos": "n.",
    "meaning": "ผู้ฟัง",
    "reading": "ลิ เสอะ เหน่อ ร",
    "ipa": "l ˈɪ s ʌ n ɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_1269",
    "word": "little",
    "pos": "adv.",
    "meaning": "เล็กน้อย",
    "reading": "ลิ เถอะ ล",
    "ipa": "l ˈɪ t ʌ l",
    "level": "A2"
  },
  {
    "id": "a2_1270",
    "word": "lock",
    "pos": "v./n.",
    "meaning": "ล็อค",
    "reading": "ลา ขึ",
    "ipa": "l ˈɑː k",
    "level": "A2"
  },
  {
    "id": "a2_1271",
    "word": "look",
    "pos": "n.",
    "meaning": "ดู",
    "reading": "ลุ ขึ",
    "ipa": "l ˈʊ k",
    "level": "A2"
  },
  {
    "id": "a2_1272",
    "word": "lorry",
    "pos": "n.",
    "meaning": "รถบรรทุก",
    "reading": "โล้ (ร) อี่",
    "ipa": "l ˈɔː r iː",
    "level": "A2"
  },
  {
    "id": "a2_1273",
    "word": "lost",
    "pos": "adj.",
    "meaning": "สูญหาย",
    "reading": "ลอ สึ ถึ",
    "ipa": "l ˈɔː s t",
    "level": "A2"
  },
  {
    "id": "a2_1274",
    "word": "loud",
    "pos": "adj./adv.",
    "meaning": "ดัง",
    "reading": "ลาว ดึ",
    "ipa": "l ˈaʊ d",
    "level": "A2"
  },
  {
    "id": "a2_1275",
    "word": "loudly",
    "pos": "adv.",
    "meaning": "เสียงดัง",
    "reading": "ล้าว ดลี่",
    "ipa": "l ˈaʊ d l iː",
    "level": "A2"
  },
  {
    "id": "a2_1276",
    "word": "lovely",
    "pos": "adj.",
    "meaning": "น่ารัก",
    "reading": "ละ ฝึ หลี่",
    "ipa": "l ˈʌ v l iː",
    "level": "A2"
  },
  {
    "id": "a2_1277",
    "word": "low",
    "pos": "adj./adv.",
    "meaning": "ต่ำ",
    "reading": "โลว",
    "ipa": "l ˈəʊ",
    "level": "A2"
  },
  {
    "id": "a2_1278",
    "word": "luck",
    "pos": "n.",
    "meaning": "โชค",
    "reading": "ละ ขึ",
    "ipa": "l ˈʌ k",
    "level": "A2"
  },
  {
    "id": "a2_1279",
    "word": "lucky",
    "pos": "adj.",
    "meaning": "โชคดี",
    "reading": "ละ ขี่",
    "ipa": "l ˈʌ k iː",
    "level": "A2"
  },
  {
    "id": "a2_1280",
    "word": "mail",
    "pos": "n./v.",
    "meaning": "จดหมาย",
    "reading": "เม ล",
    "ipa": "m ˈeɪ l",
    "level": "A2"
  },
  {
    "id": "a2_1281",
    "word": "major",
    "pos": "adj.",
    "meaning": "วิชาเอก",
    "reading": "เม้ เจ่อ ร",
    "ipa": "m ˈeɪ dʒ ɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_1282",
    "word": "male",
    "pos": "adj./n.",
    "meaning": "ชาย",
    "reading": "เม ล",
    "ipa": "m ˈeɪ l",
    "level": "A2"
  },
  {
    "id": "a2_1283",
    "word": "manage",
    "pos": "v.",
    "meaning": "จัดการ",
    "reading": "แม้ เหนอะ จึ",
    "ipa": "m ˈæ n ʌ dʒ",
    "level": "A2"
  },
  {
    "id": "a2_1284",
    "word": "manager",
    "pos": "n.",
    "meaning": "ผู้จัดการ",
    "reading": "แม้ เหนอะ เจ่อ ร",
    "ipa": "m ˈæ n ʌ dʒ ɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_1285",
    "word": "manner",
    "pos": "n.",
    "meaning": "มารยาท",
    "reading": "แม้ เหน่อ ร",
    "ipa": "m ˈæ n ɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_1286",
    "word": "mark",
    "pos": "v./n.",
    "meaning": "เครื่องหมาย",
    "reading": "มา (ร) ขึ",
    "ipa": "m ˈɑː r k",
    "level": "A2"
  },
  {
    "id": "a2_1287",
    "word": "marry",
    "pos": "v.",
    "meaning": "แต่งงาน",
    "reading": "แม้ (ร) อี่",
    "ipa": "m ˈe r iː",
    "level": "A2"
  },
  {
    "id": "a2_1288",
    "word": "material",
    "pos": "n.",
    "meaning": "วัสดุ เหมอะ",
    "reading": "เที้ย (ร) อี่ เออะ ล",
    "ipa": "m ʌ t ˈɪ r iː ʌ l",
    "level": "A2"
  },
  {
    "id": "a2_1289",
    "word": "mathematics",
    "pos": "n.",
    "meaning": "คณิตศาสตร์",
    "reading": "แม เตอะ แม้ ถิ่ ขึ สึ",
    "ipa": "m ˌæ θ ʌ m ˈæ t ɪ k s",
    "level": "A2"
  },
  {
    "id": "a2_1290",
    "word": "maths",
    "pos": "n.",
    "meaning": "คณิตศาสตร์",
    "reading": "แม ตึ สึ",
    "ipa": "mˈæθs",
    "level": "A2"
  },
  {
    "id": "a2_1291",
    "word": "matter",
    "pos": "n./v.",
    "meaning": "วัตถุ",
    "reading": "แม้ เถ่อ ร",
    "ipa": "m ˈæ t ɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_1292",
    "word": "media",
    "pos": "n.",
    "meaning": "สื่อ",
    "reading": "มี้ ดี่ เออะ",
    "ipa": "m ˈiː d iː ʌ",
    "level": "A2"
  },
  {
    "id": "a2_1293",
    "word": "medical",
    "pos": "adj.",
    "meaning": "ทางการแพทย์",
    "reading": "เม้ะ เดอะ เขอะ ล",
    "ipa": "m ˈe d ʌ k ʌ l",
    "level": "A2"
  },
  {
    "id": "a2_1294",
    "word": "medicine",
    "pos": "n.",
    "meaning": "ยา",
    "reading": "เม้ะ เดอะ เสอะ น",
    "ipa": "m ˈe d ʌ s ʌ n",
    "level": "A2"
  },
  {
    "id": "a2_1295",
    "word": "memory",
    "pos": "n.",
    "meaning": "หน่วยความจำ",
    "reading": "เม้ะ เหม่อ ร หรี่",
    "ipa": "m ˈe m ɜːʴ iː",
    "level": "A2"
  },
  {
    "id": "a2_1296",
    "word": "mention",
    "pos": "v.",
    "meaning": "กล่าวถึง",
    "reading": "เม้ะ น เฉอะ น",
    "ipa": "m ˈe n ʃ ʌ n",
    "level": "A2"
  },
  {
    "id": "a2_1297",
    "word": "metal",
    "pos": "n.",
    "meaning": "โลหะ",
    "reading": "เม้ะ เถอะ ล",
    "ipa": "m ˈe t ʌ l",
    "level": "A2"
  },
  {
    "id": "a2_1298",
    "word": "method",
    "pos": "n.",
    "meaning": "วิธี",
    "reading": "เม้ะ เตอะ ดึ",
    "ipa": "m ˈe θ ʌ d",
    "level": "A2"
  },
  {
    "id": "a2_1299",
    "word": "middle",
    "pos": "n./adj.",
    "meaning": "กลาง",
    "reading": "มิ เดอะ ล",
    "ipa": "m ˈɪ d ʌ l",
    "level": "A2"
  },
  {
    "id": "a2_1300",
    "word": "might",
    "pos": "modal v.",
    "meaning": "อาจ",
    "reading": "มาย ถึ",
    "ipa": "m ˈaɪ t",
    "level": "A2"
  },
  {
    "id": "a2_1301",
    "word": "mind",
    "pos": "n./v.",
    "meaning": "จิตใจ",
    "reading": "มาย น ดึ",
    "ipa": "m ˈaɪ n d",
    "level": "A2"
  },
  {
    "id": "a2_1302",
    "word": "mine",
    "pos": "pron.",
    "meaning": "ของฉัน",
    "reading": "มาย น",
    "ipa": "m ˈaɪ n",
    "level": "A2"
  },
  {
    "id": "a2_1303",
    "word": "mirror",
    "pos": "n.",
    "meaning": "กระจกเงา",
    "reading": "เมี้ย (ร) เอ่อ ร",
    "ipa": "m ˈɪ r ɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_1304",
    "word": "missing",
    "pos": "adj.",
    "meaning": "หายไป",
    "reading": "มิ สิ่ ง",
    "ipa": "m ˈɪ s ɪ ŋ",
    "level": "A2"
  },
  {
    "id": "a2_1305",
    "word": "mobile",
    "pos": "adj./n.",
    "meaning": "มือถือ",
    "reading": "โม้ว เบอะ ล",
    "ipa": "m ˈəʊ b ʌ l",
    "level": "A2"
  },
  {
    "id": "a2_1306",
    "word": "monkey",
    "pos": "n.",
    "meaning": "ลิง",
    "reading": "มะ ง ขี่",
    "ipa": "m ˈʌ ŋ k iː",
    "level": "A2"
  },
  {
    "id": "a2_1307",
    "word": "moon",
    "pos": "n.",
    "meaning": "ดวงจันทร์",
    "reading": "มู น",
    "ipa": "m ˈuː n",
    "level": "A2"
  },
  {
    "id": "a2_1308",
    "word": "mostly",
    "pos": "adv.",
    "meaning": "ส่วนใหญ่",
    "reading": "โม้ว สึ ถลี่",
    "ipa": "m ˈəʊ s t l iː",
    "level": "A2"
  },
  {
    "id": "a2_1309",
    "word": "motorcycle",
    "pos": "n.",
    "meaning": "รถจักรยานยนต์ โม้ว",
    "reading": "เถ่อ ร ซาย เขอะ ล",
    "ipa": "m ˈəʊ t ɜːʴ s ˌaɪ k ʌ l",
    "level": "A2"
  },
  {
    "id": "a2_1310",
    "word": "movement",
    "pos": "n.",
    "meaning": "ความเคลื่อนไหว",
    "reading": "มู้ ฝึ เหมอะ น ถึ",
    "ipa": "m ˈuː v m ʌ n t",
    "level": "A2"
  },
  {
    "id": "a2_1311",
    "word": "musical",
    "pos": "adj.",
    "meaning": "ดนตรี",
    "reading": "ม ยู้ สิ่ เขอะ ล",
    "ipa": "m j ˈuː z ɪ k ʌ l",
    "level": "A2"
  },
  {
    "id": "a2_1312",
    "word": "musician",
    "pos": "n.",
    "meaning": "นักดนตรี",
    "reading": "ม หยู่ ซิ เฉอะ น",
    "ipa": "m j uː z ˈɪ ʃ ʌ n",
    "level": "A2"
  },
  {
    "id": "a2_1313",
    "word": "myself",
    "pos": "pron.",
    "meaning": "ตัวฉันเอง",
    "reading": "มาย เซ้ะ ล ฝึ",
    "ipa": "m ˌaɪ s ˈe l f",
    "level": "A2"
  },
  {
    "id": "a2_1314",
    "word": "narrow",
    "pos": "adj.",
    "meaning": "แคบ",
    "reading": "แน้ (ร) โอ่ว",
    "ipa": "n ˈe r əʊ",
    "level": "A2"
  },
  {
    "id": "a2_1315",
    "word": "national",
    "pos": "adj.",
    "meaning": "ระดับชาติ",
    "reading": "แน้ เฉอะ เหนอะ ล",
    "ipa": "n ˈæ ʃ ʌ n ʌ l",
    "level": "A2"
  },
  {
    "id": "a2_1316",
    "word": "nature",
    "pos": "n.",
    "meaning": "ธรรมชาติ",
    "reading": "เน้ เฉ่อ ร",
    "ipa": "n ˈeɪ tʃ ɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_1317",
    "word": "nearly",
    "pos": "adv.",
    "meaning": "เกือบ",
    "reading": "เนี้ย (ร) หลี่",
    "ipa": "n ˈɪ r l iː",
    "level": "A2"
  },
  {
    "id": "a2_1318",
    "word": "necessary",
    "pos": "adj.",
    "meaning": "จำเป็น",
    "reading": "เน้ะ เสอะ แซ (ร) อี่",
    "ipa": "n ˈe s ʌ s ˌe r iː",
    "level": "A2"
  },
  {
    "id": "a2_1319",
    "word": "neck",
    "pos": "n.",
    "meaning": "คอ",
    "reading": "เนะ ขึ",
    "ipa": "n ˈe k",
    "level": "A2"
  },
  {
    "id": "a2_1320",
    "word": "need",
    "pos": "n.",
    "meaning": "ความต้องการ",
    "reading": "นี ดึ",
    "ipa": "n ˈiː d",
    "level": "A2"
  },
  {
    "id": "a2_1321",
    "word": "neither",
    "pos": "det./pron.",
    "meaning": "ไม่ใช่ทั้งสองอย่าง",
    "reading": "นี้ เด่อ ร",
    "ipa": "n ˈiː ð ɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_1322",
    "word": "nervous",
    "pos": "adj.",
    "meaning": "ประหม่า",
    "reading": "เน้อ ร เฝอะ สึ",
    "ipa": "n ˈɜːʴ v ʌ s",
    "level": "A2"
  },
  {
    "id": "a2_1323",
    "word": "network",
    "pos": "n.",
    "meaning": "เครือข่าย",
    "reading": "เน้ะ เทวอ ร ขึ",
    "ipa": "n ˈe t w ˌɜːʴ k",
    "level": "A2"
  },
  {
    "id": "a2_1324",
    "word": "noise",
    "pos": "n.",
    "meaning": "เสียงรบกวน",
    "reading": "นออย สึ",
    "ipa": "n ˈɔɪ z",
    "level": "A2"
  },
  {
    "id": "a2_1325",
    "word": "noisy",
    "pos": "adj.",
    "meaning": "เสียงดัง",
    "reading": "น้อย สี่",
    "ipa": "n ˈɔɪ z iː",
    "level": "A2"
  },
  {
    "id": "a2_1326",
    "word": "none",
    "pos": "pron.",
    "meaning": "ไม่มี",
    "reading": "นะ น",
    "ipa": "n ˈʌ n",
    "level": "A2"
  },
  {
    "id": "a2_1327",
    "word": "normal",
    "pos": "adj.",
    "meaning": "ปกติ",
    "reading": "โน้ (ร) เหมอะ ล",
    "ipa": "n ˈɔː r m ʌ l",
    "level": "A2"
  },
  {
    "id": "a2_1328",
    "word": "normally",
    "pos": "adv.",
    "meaning": "โดยทั่วไป",
    "reading": "โน้ (ร) เหมอะ หลี่",
    "ipa": "n ˈɔː r m ʌ l iː",
    "level": "A2"
  },
  {
    "id": "a2_1329",
    "word": "notice",
    "pos": "v./n.",
    "meaning": "สังเกต",
    "reading": "โน้ว เถอะ สึ",
    "ipa": "n ˈəʊ t ʌ s",
    "level": "A2"
  },
  {
    "id": "a2_1330",
    "word": "novel",
    "pos": "n.",
    "meaning": "นิยาย",
    "reading": "น้า เฝอะ ล",
    "ipa": "n ˈɑː v ʌ l",
    "level": "A2"
  },
  {
    "id": "a2_1331",
    "word": "nowhere",
    "pos": "adv.",
    "meaning": "ไม่มีที่ไหนเลย",
    "reading": "โน้ว แว (ร)",
    "ipa": "n ˈəʊ w ˌe r",
    "level": "A2"
  },
  {
    "id": "a2_1332",
    "word": "number",
    "pos": "v.",
    "meaning": "ตัวเลข",
    "reading": "นะ ม เบ่อ ร",
    "ipa": "n ˈʌ m b ɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_1333",
    "word": "nut",
    "pos": "n.",
    "meaning": "ถั่ว",
    "reading": "นะ ถึ",
    "ipa": "n ˈʌ t",
    "level": "A2"
  },
  {
    "id": "a2_1334",
    "word": "ocean",
    "pos": "n.",
    "meaning": "มหาสมุทร",
    "reading": "โอ๊ว เฉอะ น",
    "ipa": "ˈəʊ ʃ ʌ n",
    "level": "A2"
  },
  {
    "id": "a2_1335",
    "word": "offer",
    "pos": "v./n.",
    "meaning": "เสนอ",
    "reading": "อ๊อ เฝ่อ ร",
    "ipa": "ˈɔː f ɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_1336",
    "word": "officer",
    "pos": "n.",
    "meaning": "เจ้าหน้าที่",
    "reading": "อ๊อ เฝอะ เส่อ ร",
    "ipa": "ˈɔː f ʌ s ɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_1337",
    "word": "oil",
    "pos": "n.",
    "meaning": "น้ำมัน",
    "reading": "ออย ล",
    "ipa": "ˈɔɪ l",
    "level": "A2"
  },
  {
    "id": "a2_1338",
    "word": "onto",
    "pos": "prep.",
    "meaning": "ไปยัง",
    "reading": "อ๊า น ถู่",
    "ipa": "ˈɑː n t uː",
    "level": "A2"
  },
  {
    "id": "a2_1339",
    "word": "opportunity",
    "pos": "n.",
    "meaning": "โอกาส อา",
    "reading": "เผ่อ ร ทู้ เหนอะ ถี่",
    "ipa": "ˌɑː p ɜːʴ t ˈuː n ʌ t iː",
    "level": "A2"
  },
  {
    "id": "a2_1340",
    "word": "option",
    "pos": "n.",
    "meaning": "ตัวเลือก",
    "reading": "อ๊า ผึ เฉอะ น",
    "ipa": "ˈɑː p ʃ ʌ n",
    "level": "A2"
  },
  {
    "id": "a2_1341",
    "word": "ordinary",
    "pos": "adj.",
    "meaning": "สามัญ โอ๊",
    "reading": "(ร) เดอะ แน (ร) อี่",
    "ipa": "ˈɔː r d ʌ n ˌe r iː",
    "level": "A2"
  },
  {
    "id": "a2_1342",
    "word": "organization",
    "pos": "n.",
    "meaning": "องค์กร ออ ร",
    "reading": "เกอะ เหนอะ เซ้ เฉอะ น",
    "ipa": "ˌɔː r g ʌ n ʌ z ˈeɪ ʃ ʌ n",
    "level": "A2"
  },
  {
    "id": "a2_1343",
    "word": "organize",
    "pos": "v.",
    "meaning": "จัดระเบียบ",
    "reading": "โอ๊ (ร) เกอะ นาย สึ",
    "ipa": "ˈɔː r g ʌ n ˌaɪ z",
    "level": "A2"
  },
  {
    "id": "a2_1344",
    "word": "original",
    "pos": "adj.",
    "meaning": "ต้นฉบับ เอ่อ",
    "reading": "ร ริ เจอะ เหนอะ ล",
    "ipa": "ɜːʴ ˈɪ dʒ ʌ n ʌ l",
    "level": "A2"
  },
  {
    "id": "a2_1345",
    "word": "ourselves",
    "pos": "pron.",
    "meaning": "ตัวเราเอง อ่าว",
    "reading": "เอ่อ ร เซ้ะ ล ฝึ สึ",
    "ipa": "aʊ ɜːʴ s ˈe l v z",
    "level": "A2"
  },
  {
    "id": "a2_1346",
    "word": "outside",
    "pos": "prep./n./adj.",
    "meaning": "ข้างนอก",
    "reading": "อ๊าว ถึ ซ้าย ดึ",
    "ipa": "ˈaʊ t s ˈaɪ d",
    "level": "A2"
  },
  {
    "id": "a2_1347",
    "word": "oven",
    "pos": "n.",
    "meaning": "เตาอบ",
    "reading": "อ๊ะ เฝอะ น",
    "ipa": "ˈʌ v ʌ n",
    "level": "A2"
  },
  {
    "id": "a2_1348",
    "word": "own",
    "pos": "v.",
    "meaning": "เป็นเจ้าของ",
    "reading": "โอ๊ว น",
    "ipa": "ˈəʊ n",
    "level": "A2"
  },
  {
    "id": "a2_1349",
    "word": "owner",
    "pos": "n.",
    "meaning": "เจ้าของ",
    "reading": "โอ๊ว เหน่อ ร",
    "ipa": "ˈəʊ n ɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_1350",
    "word": "pack",
    "pos": "v.",
    "meaning": "หีบห่อ",
    "reading": "แพ ขึ",
    "ipa": "p ˈæ k",
    "level": "A2"
  },
  {
    "id": "a2_1351",
    "word": "pain",
    "pos": "n.",
    "meaning": "ความเจ็บปวด",
    "reading": "เพ น",
    "ipa": "p ˈeɪ n",
    "level": "A2"
  },
  {
    "id": "a2_1352",
    "word": "painter",
    "pos": "n.",
    "meaning": "จิตรกร",
    "reading": "เพ้ น เถ่อ ร",
    "ipa": "p ˈeɪ n t ɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_1353",
    "word": "palace",
    "pos": "n.",
    "meaning": "พระราชวัง",
    "reading": "แพ้ เหลอะ สึ",
    "ipa": "p ˈæ l ʌ s",
    "level": "A2"
  },
  {
    "id": "a2_1354",
    "word": "pants",
    "pos": "n.",
    "meaning": "กางเกง",
    "reading": "แพ น ถึ สึ",
    "ipa": "p ˈæ n t s",
    "level": "A2"
  },
  {
    "id": "a2_1355",
    "word": "parking",
    "pos": "n.",
    "meaning": "ที่จอดรถ",
    "reading": "พ้าร ขิ่ ง",
    "ipa": "p ˈɑː r k ɪ ŋ",
    "level": "A2"
  },
  {
    "id": "a2_1356",
    "word": "particular",
    "pos": "adj.",
    "meaning": "โดยเฉพาะ เผ่อ",
    "reading": "ร ทิ ขึ เหยอะ เหล่อ ร",
    "ipa": "p ɜːʴ t ˈɪ k j ʌ l ɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_1357",
    "word": "pass",
    "pos": "v.",
    "meaning": "ผ่าน",
    "reading": "แพ สึ",
    "ipa": "p ˈæ s",
    "level": "A2"
  },
  {
    "id": "a2_1358",
    "word": "passenger",
    "pos": "n.",
    "meaning": "ผู้โดยสาร",
    "reading": "แพ้ เสอะ น เจ่อ ร",
    "ipa": "p ˈæ s ʌ n dʒ ɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_1359",
    "word": "past",
    "pos": "adv.",
    "meaning": "อดีต",
    "reading": "แพ สึ ถึ",
    "ipa": "p ˈæ s t",
    "level": "A2"
  },
  {
    "id": "a2_1360",
    "word": "patient",
    "pos": "n.",
    "meaning": "อดทน",
    "reading": "เพ้ เฉอะ น ถึ",
    "ipa": "p ˈeɪ ʃ ʌ n t",
    "level": "A2"
  },
  {
    "id": "a2_1361",
    "word": "pattern",
    "pos": "n.",
    "meaning": "ลวดลาย",
    "reading": "แพ้ เถ่อ ร น",
    "ipa": "p ˈæ t ɜːʴ n",
    "level": "A2"
  },
  {
    "id": "a2_1362",
    "word": "pay",
    "pos": "n.",
    "meaning": "จ่าย",
    "reading": "เพ",
    "ipa": "p ˈeɪ",
    "level": "A2"
  },
  {
    "id": "a2_1363",
    "word": "peace",
    "pos": "n.",
    "meaning": "ความสงบ",
    "reading": "พี สึ",
    "ipa": "p ˈiː s",
    "level": "A2"
  },
  {
    "id": "a2_1364",
    "word": "penny",
    "pos": "n.",
    "meaning": "เงิน",
    "reading": "เพ้ะ หนี่",
    "ipa": "p ˈe n iː",
    "level": "A2"
  },
  {
    "id": "a2_1365",
    "word": "per",
    "pos": "prep.",
    "meaning": "ต่อ",
    "reading": "เพอ ร",
    "ipa": "p ˈɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_1366",
    "word": "percent",
    "pos": "adj./adv.",
    "meaning": "เปอร์เซ็นต์",
    "reading": "เผ่อ ร เซ้ะ น ถึ",
    "ipa": "p ɜːʴ s ˈe n t",
    "level": "A2"
  },
  {
    "id": "a2_1367",
    "word": "perform",
    "pos": "v.",
    "meaning": "ดำเนินการ",
    "reading": "เผ่อ ร โฟ้ (ร) ม",
    "ipa": "p ɜːʴ f ˈɔː r m",
    "level": "A2"
  },
  {
    "id": "a2_1368",
    "word": "perhaps",
    "pos": "adv.",
    "meaning": "บางที",
    "reading": "เผ่อ ร แฮ้ ผึ สึ",
    "ipa": "p ɜːʴ h ˈæ p s",
    "level": "A2"
  },
  {
    "id": "a2_1369",
    "word": "permission",
    "pos": "n.",
    "meaning": "การอนุญาต",
    "reading": "เผ่อ ร มิ เฉอะ น",
    "ipa": "p ɜːʴ m ˈɪ ʃ ʌ n",
    "level": "A2"
  },
  {
    "id": "a2_1370",
    "word": "personality",
    "pos": "n.",
    "meaning": "บุคลิกภาพ เพอ",
    "reading": "ร เสอะ แน้ หลิ่ ถี่",
    "ipa": "p ˌɜːʴ s ʌ n ˈæ l ɪ t iː",
    "level": "A2"
  },
  {
    "id": "a2_1371",
    "word": "pet",
    "pos": "n.",
    "meaning": "สัตว์เลี้ยง",
    "reading": "เพะ ถึ",
    "ipa": "p ˈe t",
    "level": "A2"
  },
  {
    "id": "a2_1372",
    "word": "petrol",
    "pos": "n.",
    "meaning": "น้ำมันเบนซิน",
    "reading": "เพ้ะ โถร่ว ล",
    "ipa": "p ˈe t r əʊ l",
    "level": "A2"
  },
  {
    "id": "a2_1373",
    "word": "photograph",
    "pos": "v.",
    "meaning": "รูปถ่าย",
    "reading": "โฟ้ว เถอะ แกร ฝึ",
    "ipa": "f ˈəʊ t ʌ g r ˌæ f",
    "level": "A2"
  },
  {
    "id": "a2_1374",
    "word": "physical",
    "pos": "adj.",
    "meaning": "ทางกายภาพ",
    "reading": "ฟิ สิ่ เขอะ ล",
    "ipa": "f ˈɪ z ɪ k ʌ l",
    "level": "A2"
  },
  {
    "id": "a2_1375",
    "word": "physics",
    "pos": "n.",
    "meaning": "ฟิสิกส์",
    "reading": "ฟิ สิ่ ขึ สึ",
    "ipa": "f ˈɪ z ɪ k s",
    "level": "A2"
  },
  {
    "id": "a2_1376",
    "word": "pick",
    "pos": "v.",
    "meaning": "เลือก",
    "reading": "พิ ขึ",
    "ipa": "p ˈɪ k",
    "level": "A2"
  },
  {
    "id": "a2_1377",
    "word": "pilot",
    "pos": "n.",
    "meaning": "นักบิน",
    "reading": "พ้าย เหลอะ ถึ",
    "ipa": "p ˈaɪ l ʌ t",
    "level": "A2"
  },
  {
    "id": "a2_1378",
    "word": "planet",
    "pos": "n.",
    "meaning": "ดาวเคราะห์",
    "reading": "แพล้ เหนอะ ถึ",
    "ipa": "p l ˈæ n ʌ t",
    "level": "A2"
  },
  {
    "id": "a2_1379",
    "word": "plant",
    "pos": "v.",
    "meaning": "ปลูก",
    "reading": "แพล น ถึ",
    "ipa": "p l ˈæ n t",
    "level": "A2"
  },
  {
    "id": "a2_1380",
    "word": "plastic",
    "pos": "n./adj.",
    "meaning": "พลาสติก",
    "reading": "แพล้ สึ ถิ่ ขึ",
    "ipa": "p l ˈæ s t ɪ k",
    "level": "A2"
  },
  {
    "id": "a2_1381",
    "word": "plate",
    "pos": "n.",
    "meaning": "จาน",
    "reading": "เพล ถึ",
    "ipa": "p l ˈeɪ t",
    "level": "A2"
  },
  {
    "id": "a2_1382",
    "word": "platform",
    "pos": "n.",
    "meaning": "แพลตฟอร์ม",
    "reading": "แพล้ ถึ โฟ (ร) ม",
    "ipa": "p l ˈæ t f ˌɔː r m",
    "level": "A2"
  },
  {
    "id": "a2_1383",
    "word": "please",
    "pos": "v.",
    "meaning": "โปรด",
    "reading": "พลี สึ",
    "ipa": "p l ˈiː z",
    "level": "A2"
  },
  {
    "id": "a2_1384",
    "word": "pleased",
    "pos": "adj.",
    "meaning": "พึงพอใจ",
    "reading": "พลี สึ ดึ",
    "ipa": "p l ˈiː z d",
    "level": "A2"
  },
  {
    "id": "a2_1385",
    "word": "pocket",
    "pos": "n.",
    "meaning": "กระเป๋า",
    "reading": "พ้า เขอะ ถึ",
    "ipa": "p ˈɑː k ʌ t",
    "level": "A2"
  },
  {
    "id": "a2_1386",
    "word": "polite",
    "pos": "adj.",
    "meaning": "สุภาพ",
    "reading": "เผอะ ล้าย ถึ",
    "ipa": "p ʌ l ˈaɪ t",
    "level": "A2"
  },
  {
    "id": "a2_1387",
    "word": "pollution",
    "pos": "n.",
    "meaning": "มลพิษ",
    "reading": "เผอะ ลู้ เฉอะ น",
    "ipa": "p ʌ l ˈuː ʃ ʌ n",
    "level": "A2"
  },
  {
    "id": "a2_1388",
    "word": "pop",
    "pos": "n./adj.",
    "meaning": "โผล่",
    "reading": "พา ผึ",
    "ipa": "p ˈɑː p",
    "level": "A2"
  },
  {
    "id": "a2_1389",
    "word": "population",
    "pos": "n.",
    "meaning": "ประชากร พา",
    "reading": "ผึ เหยอะ เล้ เฉอะ น",
    "ipa": "p ˌɑː p j ʌ l ˈeɪ ʃ ʌ n",
    "level": "A2"
  },
  {
    "id": "a2_1390",
    "word": "position",
    "pos": "n.",
    "meaning": "ตำแหน่ง",
    "reading": "เผอะ ซิ เฉอะ น",
    "ipa": "p ʌ z ˈɪ ʃ ʌ n",
    "level": "A2"
  },
  {
    "id": "a2_1391",
    "word": "possession",
    "pos": "n.",
    "meaning": "การครอบครอง",
    "reading": "เผอะ เซ้ะ เฉอะ น",
    "ipa": "p ʌ z ˈe ʃ ʌ n",
    "level": "A2"
  },
  {
    "id": "a2_1392",
    "word": "possibility",
    "pos": "n.",
    "meaning": "ความเป็นไปได้ พา",
    "reading": "เสอะ บิ้ เหลอะ ที",
    "ipa": "p ˌɑː s ʌ b ˈɪ l ʌ t ˌiː",
    "level": "A2"
  },
  {
    "id": "a2_1393",
    "word": "poster",
    "pos": "n.",
    "meaning": "โปสเตอร์",
    "reading": "โพ้ว สึ เถ่อ ร",
    "ipa": "p ˈəʊ s t ɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_1394",
    "word": "power",
    "pos": "n.",
    "meaning": "พลัง",
    "reading": "พ้าว เอ่อ ร",
    "ipa": "p ˈaʊ ɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_1395",
    "word": "predict",
    "pos": "v.",
    "meaning": "ทำนาย",
    "reading": "ผริ่ ดิ้ ขึ ถึ",
    "ipa": "p r ɪ d ˈɪ k t",
    "level": "A2"
  },
  {
    "id": "a2_1396",
    "word": "present",
    "pos": "v.",
    "meaning": "ปัจจุบัน",
    "reading": "เพร้ะ เสอะ น ถึ",
    "ipa": "p r ˈe z ʌ n t",
    "level": "A2"
  },
  {
    "id": "a2_1397",
    "word": "president",
    "pos": "n.",
    "meaning": "ประธาน",
    "reading": "เพร้ะ เสอะ เดะ น ถึ",
    "ipa": "p r ˈe z ʌ d ˌe n t",
    "level": "A2"
  },
  {
    "id": "a2_1398",
    "word": "prevent",
    "pos": "v.",
    "meaning": "ป้องกัน",
    "reading": "ผริ่ เฟ้ะ น ถึ",
    "ipa": "p r ɪ v ˈe n t",
    "level": "A2"
  },
  {
    "id": "a2_1399",
    "word": "print",
    "pos": "v.",
    "meaning": "พิมพ์",
    "reading": "พริ น ถึ",
    "ipa": "p r ˈɪ n t",
    "level": "A2"
  },
  {
    "id": "a2_1400",
    "word": "printer",
    "pos": "n.",
    "meaning": "เครื่องพิมพ์",
    "reading": "พริ น เถ่อ ร",
    "ipa": "p r ˈɪ n t ɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_1401",
    "word": "prison",
    "pos": "n.",
    "meaning": "คุก",
    "reading": "พริ เสอะ น",
    "ipa": "p r ˈɪ z ʌ n",
    "level": "A2"
  },
  {
    "id": "a2_1402",
    "word": "prize",
    "pos": "n.",
    "meaning": "รางวัล",
    "reading": "พราย สึ",
    "ipa": "p r ˈaɪ z",
    "level": "A2"
  },
  {
    "id": "a2_1403",
    "word": "process",
    "pos": "n.",
    "meaning": "กระบวนการ",
    "reading": "พร้า เซะ สึ",
    "ipa": "p r ˈɑː s ˌe s",
    "level": "A2"
  },
  {
    "id": "a2_1404",
    "word": "produce",
    "pos": "v.",
    "meaning": "ผลิต",
    "reading": "โพร้ว ดู่ สึ",
    "ipa": "p r ˈəʊ d uː s",
    "level": "A2"
  },
  {
    "id": "a2_1405",
    "word": "professional",
    "pos": "adj.",
    "meaning": "มืออาชีพ เผรอะ",
    "reading": "เฟ้ะ เฉอะ เหนอะ ล",
    "ipa": "p r ʌ f ˈe ʃ ʌ n ʌ l",
    "level": "A2"
  },
  {
    "id": "a2_1406",
    "word": "professor",
    "pos": "n.",
    "meaning": "ศาสตราจารย์",
    "reading": "เผรอะ เฟ้ะ เส่อ ร",
    "ipa": "p r ʌ f ˈe s ɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_1407",
    "word": "profile",
    "pos": "n.",
    "meaning": "ประวัติโดยย่อ",
    "reading": "โพร้ว ฟาย ล",
    "ipa": "p r ˈəʊ f ˌaɪ l",
    "level": "A2"
  },
  {
    "id": "a2_1408",
    "word": "program",
    "pos": "n.",
    "meaning": "โปรแกรม",
    "reading": "โพร้ว แกร ม",
    "ipa": "p r ˈəʊ g r ˌæ m",
    "level": "A2"
  },
  {
    "id": "a2_1409",
    "word": "progress",
    "pos": "n.",
    "meaning": "ความคืบหน้า",
    "reading": "พร้า เกระ สึ",
    "ipa": "p r ˈɑː g r ˌe s",
    "level": "A2"
  },
  {
    "id": "a2_1410",
    "word": "promise",
    "pos": "v./n.",
    "meaning": "สัญญา",
    "reading": "พร้า เหมอะ สึ",
    "ipa": "p r ˈɑː m ʌ s",
    "level": "A2"
  },
  {
    "id": "a2_1411",
    "word": "pronounce",
    "pos": "v.",
    "meaning": "ออกเสียง",
    "reading": "เผรอะ น้าว น สึ",
    "ipa": "p r ʌ n ˈaʊ n s",
    "level": "A2"
  },
  {
    "id": "a2_1412",
    "word": "protect",
    "pos": "v.",
    "meaning": "ปกป้อง",
    "reading": "เผรอะ เท้ะ ขึ ถึ",
    "ipa": "p r ʌ t ˈe k t",
    "level": "A2"
  },
  {
    "id": "a2_1413",
    "word": "provide",
    "pos": "v.",
    "meaning": "จัดเตรียม",
    "reading": "เผรอะ ฟ้าย ดึ",
    "ipa": "p r ʌ v ˈaɪ d",
    "level": "A2"
  },
  {
    "id": "a2_1414",
    "word": "pub",
    "pos": "n.",
    "meaning": "ผับ",
    "reading": "พะ บึ",
    "ipa": "p ˈʌ b",
    "level": "A2"
  },
  {
    "id": "a2_1415",
    "word": "public",
    "pos": "adj./n.",
    "meaning": "สาธารณะ",
    "reading": "พะ บลิ ขึ",
    "ipa": "p ˈʌ b l ɪ k",
    "level": "A2"
  },
  {
    "id": "a2_1416",
    "word": "publish",
    "pos": "v.",
    "meaning": "เผยแพร่",
    "reading": "พะ บลิ ฉึ",
    "ipa": "p ˈʌ b l ɪ ʃ",
    "level": "A2"
  },
  {
    "id": "a2_1417",
    "word": "pull",
    "pos": "v.",
    "meaning": "ดึง",
    "reading": "พุ ล",
    "ipa": "p ˈʊ l",
    "level": "A2"
  },
  {
    "id": "a2_1418",
    "word": "purpose",
    "pos": "n.",
    "meaning": "วัตถุประสงค์",
    "reading": "เพ้อ ร เผอะ สึ",
    "ipa": "p ˈɜːʴ p ʌ s",
    "level": "A2"
  },
  {
    "id": "a2_1419",
    "word": "push",
    "pos": "v.",
    "meaning": "ดัน",
    "reading": "พุ ฉึ",
    "ipa": "p ˈʊ ʃ",
    "level": "A2"
  },
  {
    "id": "a2_1420",
    "word": "quality",
    "pos": "n.",
    "meaning": "คุณภาพ",
    "reading": "คว้า เหลอะ ถี่",
    "ipa": "k w ˈɑː l ʌ t iː",
    "level": "A2"
  },
  {
    "id": "a2_1421",
    "word": "quantity",
    "pos": "n.",
    "meaning": "ปริมาณ",
    "reading": "คว้า น เถอะ ถี่",
    "ipa": "k w ˈɑː n t ʌ t iː",
    "level": "A2"
  },
  {
    "id": "a2_1422",
    "word": "queen",
    "pos": "n.",
    "meaning": "ราชินี",
    "reading": "ควี น",
    "ipa": "k w ˈiː n",
    "level": "A2"
  },
  {
    "id": "a2_1423",
    "word": "question",
    "pos": "v.",
    "meaning": "คำถาม",
    "reading": "เคว้ะ สึ เฉอะ น",
    "ipa": "k w ˈe s tʃ ʌ n",
    "level": "A2"
  },
  {
    "id": "a2_1424",
    "word": "quietly",
    "pos": "adv.",
    "meaning": "อย่างเงียบ ๆ",
    "reading": "คว้าย เออะ ถลี่",
    "ipa": "k w ˈaɪ ʌ t l iː",
    "level": "A2"
  },
  {
    "id": "a2_1425",
    "word": "race",
    "pos": "n./v.",
    "meaning": "แข่ง",
    "reading": "เร สึ",
    "ipa": "r ˈeɪ s",
    "level": "A2"
  },
  {
    "id": "a2_1426",
    "word": "railway",
    "pos": "n.",
    "meaning": "ทางรถไฟ",
    "reading": "เร้ ล เว",
    "ipa": "r ˈeɪ l w ˌeɪ",
    "level": "A2"
  },
  {
    "id": "a2_1427",
    "word": "raise",
    "pos": "v.",
    "meaning": "ยก",
    "reading": "เร สึ",
    "ipa": "r ˈeɪ z",
    "level": "A2"
  },
  {
    "id": "a2_1428",
    "word": "rate",
    "pos": "n.",
    "meaning": "ประเมิน",
    "reading": "เร ถึ",
    "ipa": "r ˈeɪ t",
    "level": "A2"
  },
  {
    "id": "a2_1429",
    "word": "rather",
    "pos": "adv.",
    "meaning": "ค่อนข้าง",
    "reading": "แร้ เด่อ ร",
    "ipa": "r ˈæ ð ɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_1430",
    "word": "reach",
    "pos": "v.",
    "meaning": "เข้าถึง",
    "reading": "รี ฉึ",
    "ipa": "r ˈiː tʃ",
    "level": "A2"
  },
  {
    "id": "a2_1431",
    "word": "react",
    "pos": "v.",
    "meaning": "ตอบสนอง",
    "reading": "หรี่ แอ๊ ขึ ถึ",
    "ipa": "r iː ˈæ k t",
    "level": "A2"
  },
  {
    "id": "a2_1432",
    "word": "realize",
    "pos": "v.",
    "meaning": "ตระหนัก",
    "reading": "รี้ เออะ ลาย สึ",
    "ipa": "r ˈiː ʌ l ˌaɪ z",
    "level": "A2"
  },
  {
    "id": "a2_1433",
    "word": "receive",
    "pos": "v.",
    "meaning": "รับ",
    "reading": "เหรอะ ซี้ ฝึ",
    "ipa": "r ʌ s ˈiː v",
    "level": "A2"
  },
  {
    "id": "a2_1434",
    "word": "recent",
    "pos": "adj.",
    "meaning": "ล่าสุด",
    "reading": "รี้ เสอะ น ถึ",
    "ipa": "r ˈiː s ʌ n t",
    "level": "A2"
  },
  {
    "id": "a2_1435",
    "word": "recently",
    "pos": "adv.",
    "meaning": "ล่าสุด",
    "reading": "รี้ เสอะ น ถลี่",
    "ipa": "r ˈiː s ʌ n t l iː",
    "level": "A2"
  },
  {
    "id": "a2_1436",
    "word": "reception",
    "pos": "n.",
    "meaning": "แผนกต้อนรับ",
    "reading": "หริ่ เซ้ะ ผึ เฉอะ น",
    "ipa": "r ɪ s ˈe p ʃ ʌ n",
    "level": "A2"
  },
  {
    "id": "a2_1437",
    "word": "recipe",
    "pos": "n.",
    "meaning": "สูตรอาหาร",
    "reading": "เร้ะ เสอะ ผี่่",
    "ipa": "r ˈe s ʌ p iː",
    "level": "A2"
  },
  {
    "id": "a2_1438",
    "word": "recognize",
    "pos": "v.",
    "meaning": "จำได้",
    "reading": "เร้ะ เขอะ กึ นาย สึ",
    "ipa": "r ˈe k ʌ g n ˌaɪ z",
    "level": "A2"
  },
  {
    "id": "a2_1439",
    "word": "recommend",
    "pos": "v.",
    "meaning": "แนะนำ",
    "reading": "เระ เขอะ เม้ะ น ดึ",
    "ipa": "r ˌe k ʌ m ˈe n d",
    "level": "A2"
  },
  {
    "id": "a2_1440",
    "word": "record",
    "pos": "n./v.",
    "meaning": "บันทึก",
    "reading": "เร้ะ เข่อ ร ดึ",
    "ipa": "r ˈe k ɜːʴ d",
    "level": "A2"
  },
  {
    "id": "a2_1441",
    "word": "recording",
    "pos": "n.",
    "meaning": "การบันทึก",
    "reading": "เหรอะ ค้อ ร ดิ ง",
    "ipa": "r ʌ k ˈɔː r d ɪ ŋ",
    "level": "A2"
  },
  {
    "id": "a2_1442",
    "word": "recycle",
    "pos": "v.",
    "meaning": "รีไซเคิล",
    "reading": "หรี่ ซ้าย เขอะ ล",
    "ipa": "r iː s ˈaɪ k ʌ l",
    "level": "A2"
  },
  {
    "id": "a2_1443",
    "word": "reduce",
    "pos": "v.",
    "meaning": "ลด",
    "reading": "เหรอะ ดู๊ สึ",
    "ipa": "r ʌ d ˈuː s",
    "level": "A2"
  },
  {
    "id": "a2_1444",
    "word": "refer",
    "pos": "v.",
    "meaning": "อ้างอิง",
    "reading": "เหรอะ เฟ้อ ร",
    "ipa": "r ʌ f ˈɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_1445",
    "word": "refuse",
    "pos": "v.",
    "meaning": "ปฏิเสธ",
    "reading": "หริ่ ฟิวย สึ",
    "ipa": "r ɪ ˈf j uː z",
    "level": "A2"
  },
  {
    "id": "a2_1446",
    "word": "region",
    "pos": "n.",
    "meaning": "ภูมิภาค",
    "reading": "รี้ เจอะ น",
    "ipa": "r ˈiː dʒ ʌ n",
    "level": "A2"
  },
  {
    "id": "a2_1447",
    "word": "regular",
    "pos": "adj.",
    "meaning": "ปกติ เร้ะ",
    "reading": "กึ เหยอะ เหล่อ ร",
    "ipa": "r ˈe g j ʌ l ɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_1448",
    "word": "relationship",
    "pos": "n.",
    "meaning": "ความสัมพันธ์",
    "reading": "หรี่ เล้ เฉอะ น ชิ ผึ",
    "ipa": "r iː l ˈeɪ ʃ ʌ n ʃ ˌɪ p",
    "level": "A2"
  },
  {
    "id": "a2_1449",
    "word": "remove",
    "pos": "v.",
    "meaning": "ลบ",
    "reading": "หรี่ มู้ ฝึ",
    "ipa": "r iː m ˈuː v",
    "level": "A2"
  },
  {
    "id": "a2_1450",
    "word": "repair",
    "pos": "v.",
    "meaning": "ซ่อมแซม",
    "reading": "หริ่ แพ้ (ร)",
    "ipa": "r ɪ p ˈe r",
    "level": "A2"
  },
  {
    "id": "a2_1451",
    "word": "replace",
    "pos": "v.",
    "meaning": "แทนที่",
    "reading": "รี เพล้ สึ",
    "ipa": "r ˌiː p l ˈeɪ s",
    "level": "A2"
  },
  {
    "id": "a2_1452",
    "word": "reply",
    "pos": "v./n.",
    "meaning": "ตอบ",
    "reading": "หริ่ พล้าย",
    "ipa": "r ɪ p l ˈaɪ",
    "level": "A2"
  },
  {
    "id": "a2_1453",
    "word": "report",
    "pos": "v.",
    "meaning": "รายงาน",
    "reading": "หรี่ โพ้ (ร) ถึ",
    "ipa": "r iː p ˈɔː r t",
    "level": "A2"
  },
  {
    "id": "a2_1454",
    "word": "reporter",
    "pos": "n.",
    "meaning": "ผู้สื่อข่าว",
    "reading": "หริ่ โพ้ (ร) เถ่อ ร",
    "ipa": "r ɪ p ˈɔː r t ɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_1455",
    "word": "request",
    "pos": "n.",
    "meaning": "ขอ",
    "reading": "หริ่ เคว้ะ สึ ถึ",
    "ipa": "r ɪ k w ˈe s t",
    "level": "A2"
  },
  {
    "id": "a2_1456",
    "word": "research",
    "pos": "n./v.",
    "meaning": "วิจัย",
    "reading": "หรี่ เซ้อ ร ฉึ",
    "ipa": "r iː s ˈɜːʴ tʃ",
    "level": "A2"
  },
  {
    "id": "a2_1457",
    "word": "researcher",
    "pos": "n.",
    "meaning": "นักวิจัย",
    "reading": "รี้ เส่อ ร เฉ่อ ร",
    "ipa": "r ˈiː s ɜːʴ tʃ ɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_1458",
    "word": "respond",
    "pos": "v.",
    "meaning": "ตอบกลับ",
    "reading": "หริ่ สึ พ้า น ดึ",
    "ipa": "r ɪ s p ˈɑː n d",
    "level": "A2"
  },
  {
    "id": "a2_1459",
    "word": "response",
    "pos": "n.",
    "meaning": "การตอบสนอง",
    "reading": "หริ่ สึ พ้า น สึ",
    "ipa": "r ɪ s p ˈɑː n s",
    "level": "A2"
  },
  {
    "id": "a2_1460",
    "word": "rest",
    "pos": "(sleep/relax)/n./v.",
    "meaning": "พักผ่อน",
    "reading": "เระ สึ ถึ",
    "ipa": "r ˈe s t",
    "level": "A2"
  },
  {
    "id": "a2_1461",
    "word": "review",
    "pos": "n./v.",
    "meaning": "ทบทวน",
    "reading": "รี ฝึ ยู้",
    "ipa": "r ˌiː v j ˈuː",
    "level": "A2"
  },
  {
    "id": "a2_1462",
    "word": "ride",
    "pos": "n.",
    "meaning": "ขี่",
    "reading": "ราย ดึ",
    "ipa": "r ˈaɪ d",
    "level": "A2"
  },
  {
    "id": "a2_1463",
    "word": "ring",
    "pos": "n.",
    "meaning": "แหวน",
    "reading": "ริง",
    "ipa": "r ɪ ŋ",
    "level": "A2"
  },
  {
    "id": "a2_1464",
    "word": "ring",
    "pos": "v.",
    "meaning": "สั่นกระดิ่ง, โทร",
    "reading": "ริง",
    "ipa": "r ɪ ŋ",
    "level": "A2"
  },
  {
    "id": "a2_1465",
    "word": "rise",
    "pos": "v.",
    "meaning": "ลุกขึ้น",
    "reading": "ราย สึ",
    "ipa": "r ˈaɪ z",
    "level": "A2"
  },
  {
    "id": "a2_1466",
    "word": "rock",
    "pos": "n./n.",
    "meaning": "หิน",
    "reading": "รา ขึ",
    "ipa": "r ˈɑː k",
    "level": "A2"
  },
  {
    "id": "a2_1467",
    "word": "role",
    "pos": "n.",
    "meaning": "บทบาท",
    "reading": "โรว ล",
    "ipa": "r ˈəʊ l",
    "level": "A2"
  },
  {
    "id": "a2_1468",
    "word": "roof",
    "pos": "n.",
    "meaning": "หลังคา",
    "reading": "รู ฝึ",
    "ipa": "r ˈuː f",
    "level": "A2"
  },
  {
    "id": "a2_1469",
    "word": "round",
    "pos": "adj./adv./prep.",
    "meaning": "กลม",
    "reading": "ราว น ดึ",
    "ipa": "r ˈaʊ n d",
    "level": "A2"
  },
  {
    "id": "a2_1470",
    "word": "route",
    "pos": "n.",
    "meaning": "เส้นทาง",
    "reading": "ราว ถึ",
    "ipa": "r ˈaʊ t",
    "level": "A2"
  },
  {
    "id": "a2_1471",
    "word": "rubbish",
    "pos": "n.",
    "meaning": "ขยะ",
    "reading": "ระ บิ ฉึ",
    "ipa": "r ˈʌ b ɪ ʃ",
    "level": "A2"
  },
  {
    "id": "a2_1472",
    "word": "rude",
    "pos": "adj.",
    "meaning": "หยาบคาย",
    "reading": "รู ดึ",
    "ipa": "r ˈuː d",
    "level": "A2"
  },
  {
    "id": "a2_1473",
    "word": "run",
    "pos": "n.",
    "meaning": "วิ่ง",
    "reading": "ระ น",
    "ipa": "r ˈʌ n",
    "level": "A2"
  },
  {
    "id": "a2_1474",
    "word": "runner",
    "pos": "n.",
    "meaning": "นักวิ่ง",
    "reading": "ระ เหน่อ ร",
    "ipa": "r ˈʌ n ɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_1475",
    "word": "running",
    "pos": "n.",
    "meaning": "วิ่ง",
    "reading": "ระ หนิ่ ง",
    "ipa": "r ˈʌ n ɪ ŋ",
    "level": "A2"
  },
  {
    "id": "a2_1476",
    "word": "sadly",
    "pos": "adv.",
    "meaning": "เศร้า",
    "reading": "แซ้ ดลี่",
    "ipa": "s ˈæ d l iː",
    "level": "A2"
  },
  {
    "id": "a2_1477",
    "word": "safe",
    "pos": "adj.",
    "meaning": "ปลอดภัย",
    "reading": "เซ ฝึ",
    "ipa": "s ˈeɪ f",
    "level": "A2"
  },
  {
    "id": "a2_1478",
    "word": "sail",
    "pos": "v.",
    "meaning": "แล่นเรือ",
    "reading": "เซ ล",
    "ipa": "s ˈeɪ l",
    "level": "A2"
  },
  {
    "id": "a2_1479",
    "word": "sailing",
    "pos": "n.",
    "meaning": "การแล่นเรือใบ",
    "reading": "เซ้ หลิ่ ง",
    "ipa": "s ˈeɪ l ɪ ŋ",
    "level": "A2"
  },
  {
    "id": "a2_1480",
    "word": "salary",
    "pos": "n.",
    "meaning": "เงินเดือน",
    "reading": "แซ้ เหล่อ ร หรี่",
    "ipa": "s ˈæ l ɜːʴ iː",
    "level": "A2"
  },
  {
    "id": "a2_1481",
    "word": "sale",
    "pos": "n.",
    "meaning": "ขาย",
    "reading": "เซ ล",
    "ipa": "s ˈeɪ l",
    "level": "A2"
  },
  {
    "id": "a2_1482",
    "word": "sauce",
    "pos": "n.",
    "meaning": "ซอส",
    "reading": "ซอ สึ",
    "ipa": "s ˈɔː s",
    "level": "A2"
  },
  {
    "id": "a2_1483",
    "word": "save",
    "pos": "v.",
    "meaning": "บันทึก",
    "reading": "เซ ฝึ",
    "ipa": "s ˈeɪ v",
    "level": "A2"
  },
  {
    "id": "a2_1484",
    "word": "scared",
    "pos": "adj.",
    "meaning": "กลัว",
    "reading": "สึ แค (ร) ดึ",
    "ipa": "s k ˈe r d",
    "level": "A2"
  },
  {
    "id": "a2_1485",
    "word": "scary",
    "pos": "adj.",
    "meaning": "น่ากลัว",
    "reading": "สึ แค้ (ร) อี่",
    "ipa": "s k ˈe r iː",
    "level": "A2"
  },
  {
    "id": "a2_1486",
    "word": "scene",
    "pos": "n.",
    "meaning": "ฉาก",
    "reading": "ซี น",
    "ipa": "s ˈiː n",
    "level": "A2"
  },
  {
    "id": "a2_1487",
    "word": "schedule",
    "pos": "n.",
    "meaning": "กำหนดการ",
    "reading": "สึ เค้ะ จุ ล",
    "ipa": "s k ˈe dʒ ʊ l",
    "level": "A2"
  },
  {
    "id": "a2_1488",
    "word": "score",
    "pos": "v./n.",
    "meaning": "คะแนน",
    "reading": "สึ โค (ร)",
    "ipa": "s k ˈɔː r",
    "level": "A2"
  },
  {
    "id": "a2_1489",
    "word": "screen",
    "pos": "n.",
    "meaning": "หน้าจอ",
    "reading": "สึ ครี น",
    "ipa": "s k r ˈiː n",
    "level": "A2"
  },
  {
    "id": "a2_1490",
    "word": "search",
    "pos": "n./v.",
    "meaning": "ค้นหา",
    "reading": "เซอ ร ฉึ",
    "ipa": "s ˈɜːʴ tʃ",
    "level": "A2"
  },
  {
    "id": "a2_1491",
    "word": "season",
    "pos": "n.",
    "meaning": "ฤดูกาล",
    "reading": "ซี้ เสอะ น",
    "ipa": "s ˈiː z ʌ n",
    "level": "A2"
  },
  {
    "id": "a2_1492",
    "word": "seat",
    "pos": "n.",
    "meaning": "ที่นั่ง",
    "reading": "ซี ถึ",
    "ipa": "s ˈiː t",
    "level": "A2"
  },
  {
    "id": "a2_1493",
    "word": "second",
    "pos": "adv.",
    "meaning": "ที่สอง",
    "reading": "เซ้ะ เขอะ น ดึ",
    "ipa": "s ˈe k ʌ n d",
    "level": "A2"
  },
  {
    "id": "a2_1494",
    "word": "secondly",
    "pos": "adv.",
    "meaning": "ประการที่สอง",
    "reading": "เซ้ะ เขอะ น ดลี่",
    "ipa": "s ˈe k ʌ n d l iː",
    "level": "A2"
  },
  {
    "id": "a2_1495",
    "word": "secret",
    "pos": "adj./n.",
    "meaning": "ความลับ",
    "reading": "ซี้ เขรอะ ถึ",
    "ipa": "s ˈiː k r ʌ t",
    "level": "A2"
  },
  {
    "id": "a2_1496",
    "word": "secretary",
    "pos": "n.",
    "meaning": "เลขานุการ",
    "reading": "เซ้ะ เขรอะ แท ร อี่",
    "ipa": "s ˈe k r ʌ t ˌe r iː",
    "level": "A2"
  },
  {
    "id": "a2_1497",
    "word": "seem",
    "pos": "v.",
    "meaning": "ดูเหมือน",
    "reading": "ซี ม",
    "ipa": "s ˈiː m",
    "level": "A2"
  },
  {
    "id": "a2_1498",
    "word": "sense",
    "pos": "n.",
    "meaning": "ความรู้สึก",
    "reading": "เซะ น สึ",
    "ipa": "s ˈe n s",
    "level": "A2"
  },
  {
    "id": "a2_1499",
    "word": "separate",
    "pos": "adj.",
    "meaning": "แยก",
    "reading": "เซ้ะ เผ่อ ร หริ่ ถึ",
    "ipa": "s ˈe p ɜːʴ ɪ t",
    "level": "A2"
  },
  {
    "id": "a2_1500",
    "word": "series",
    "pos": "n.",
    "meaning": "ชุด",
    "reading": "เซี้ย (ร) อี่ สึ",
    "ipa": "s ˈɪ r iː z",
    "level": "A2"
  },
  {
    "id": "a2_1501",
    "word": "serious",
    "pos": "adj.",
    "meaning": "จริงจัง",
    "reading": "เซี้ย (ร) อี่ เออะ สึ",
    "ipa": "s ˈɪ r iː ʌ s",
    "level": "A2"
  },
  {
    "id": "a2_1502",
    "word": "serve",
    "pos": "v.",
    "meaning": "ให้บริการ",
    "reading": "เซอ ร ฝึ",
    "ipa": "s ˈɜːʴ v",
    "level": "A2"
  },
  {
    "id": "a2_1503",
    "word": "service",
    "pos": "n.",
    "meaning": "บริการ",
    "reading": "เซ้อ ร เฝอะ สึ",
    "ipa": "s ˈɜːʴ v ʌ s",
    "level": "A2"
  },
  {
    "id": "a2_1504",
    "word": "several",
    "pos": "det./pron.",
    "meaning": "หลาย",
    "reading": "เซ้ะ ฝึ เหรอะ ล",
    "ipa": "s ˈe v r ʌ l",
    "level": "A2"
  },
  {
    "id": "a2_1505",
    "word": "shake",
    "pos": "v.",
    "meaning": "เขย่า",
    "reading": "เช ขึ",
    "ipa": "ʃ ˈeɪ k",
    "level": "A2"
  },
  {
    "id": "a2_1506",
    "word": "shape",
    "pos": "n.",
    "meaning": "รูปร่าง",
    "reading": "เช ผึ",
    "ipa": "ʃ ˈeɪ p",
    "level": "A2"
  },
  {
    "id": "a2_1507",
    "word": "sheet",
    "pos": "n.",
    "meaning": "แผ่น",
    "reading": "ชี ถึ",
    "ipa": "ʃ ˈiː t",
    "level": "A2"
  },
  {
    "id": "a2_1508",
    "word": "ship",
    "pos": "n.",
    "meaning": "เรือ",
    "reading": "ชิ ผึ",
    "ipa": "ʃ ˈɪ p",
    "level": "A2"
  },
  {
    "id": "a2_1509",
    "word": "shoulder",
    "pos": "n.",
    "meaning": "ไหล่",
    "reading": "โช้ว ล เด่อ ร",
    "ipa": "ʃ ˈəʊ l d ɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_1510",
    "word": "shout",
    "pos": "v./n.",
    "meaning": "ตะโกน",
    "reading": "ชาว ถึ",
    "ipa": "ʃ ˈaʊ t",
    "level": "A2"
  },
  {
    "id": "a2_1511",
    "word": "shut",
    "pos": "v./adj.",
    "meaning": "ปิด",
    "reading": "ชะ ถึ",
    "ipa": "ʃ ˈʌ t",
    "level": "A2"
  },
  {
    "id": "a2_1512",
    "word": "side",
    "pos": "n.",
    "meaning": "ด้านข้าง",
    "reading": "ซาย ดึ",
    "ipa": "s ˈaɪ d",
    "level": "A2"
  },
  {
    "id": "a2_1513",
    "word": "sign",
    "pos": "n./v.",
    "meaning": "เข้าสู่ระบบ",
    "reading": "ซาย น",
    "ipa": "s ˈaɪ n",
    "level": "A2"
  },
  {
    "id": "a2_1514",
    "word": "silver",
    "pos": "n./adj.",
    "meaning": "เงิน",
    "reading": "ซิ ล เฝ่อ ร",
    "ipa": "s ˈɪ l v ɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_1515",
    "word": "simple",
    "pos": "adj.",
    "meaning": "เรียบง่าย",
    "reading": "ซิ ม เผอะ ล",
    "ipa": "s ˈɪ m p ʌ l",
    "level": "A2"
  },
  {
    "id": "a2_1516",
    "word": "since",
    "pos": "prep./conj.",
    "meaning": "เนื่องจาก",
    "reading": "ซิ น สึ",
    "ipa": "s ˈɪ n s",
    "level": "A2"
  },
  {
    "id": "a2_1517",
    "word": "singing",
    "pos": "n.",
    "meaning": "ร้องเพลง",
    "reading": "ซิ หงิ่ ง",
    "ipa": "s ˈɪ ŋ ɪ ŋ",
    "level": "A2"
  },
  {
    "id": "a2_1518",
    "word": "single",
    "pos": "adj./n.",
    "meaning": "เดี่ยว",
    "reading": "ซิ ง เกอะ ล",
    "ipa": "s ˈɪ ŋ g ʌ l",
    "level": "A2"
  },
  {
    "id": "a2_1519",
    "word": "sir",
    "pos": "n.",
    "meaning": "ท่าน",
    "reading": "เซอ ร",
    "ipa": "s ˈɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_1520",
    "word": "site",
    "pos": "n.",
    "meaning": "เว็บไซต์",
    "reading": "ซาย ถึ",
    "ipa": "s ˈaɪ t",
    "level": "A2"
  },
  {
    "id": "a2_1521",
    "word": "size",
    "pos": "n.",
    "meaning": "ขนาด",
    "reading": "ซาย สึ",
    "ipa": "s ˈaɪ z",
    "level": "A2"
  },
  {
    "id": "a2_1522",
    "word": "ski",
    "pos": "v./adj./n.",
    "meaning": "สกี",
    "reading": "สึ คี",
    "ipa": "s k ˈiː",
    "level": "A2"
  },
  {
    "id": "a2_1523",
    "word": "skiing",
    "pos": "n.",
    "meaning": "เล่นสกี",
    "reading": "สึ คี้ อิ่ ง",
    "ipa": "s k ˈiː ɪ ŋ",
    "level": "A2"
  },
  {
    "id": "a2_1524",
    "word": "skin",
    "pos": "n.",
    "meaning": "ผิว",
    "reading": "สึ คิ น",
    "ipa": "s k ˈɪ n",
    "level": "A2"
  },
  {
    "id": "a2_1525",
    "word": "sky",
    "pos": "n.",
    "meaning": "ท้องฟ้า",
    "reading": "สึ คาย",
    "ipa": "s k ˈaɪ",
    "level": "A2"
  },
  {
    "id": "a2_1526",
    "word": "sleep",
    "pos": "n.",
    "meaning": "นอน",
    "reading": "สึ ลี ผึ",
    "ipa": "s l ˈiː p",
    "level": "A2"
  },
  {
    "id": "a2_1527",
    "word": "slowly",
    "pos": "adv.",
    "meaning": "ช้า",
    "reading": "สึ โล้ว หลี่",
    "ipa": "s l ˈəʊ l iː",
    "level": "A2"
  },
  {
    "id": "a2_1528",
    "word": "smartphone",
    "pos": "n.",
    "meaning": "สมาร์ทโฟน",
    "reading": "สึ ม้า (ร) ถึ โฟว น",
    "ipa": "s m ˈɑː r t f ˌəʊ n",
    "level": "A2"
  },
  {
    "id": "a2_1529",
    "word": "smell",
    "pos": "v./n.",
    "meaning": "กลิ่น",
    "reading": "สึ เมะ ล",
    "ipa": "s m ˈe l",
    "level": "A2"
  },
  {
    "id": "a2_1530",
    "word": "smile",
    "pos": "v./n.",
    "meaning": "รอยยิ้ม",
    "reading": "สึ มาย ล",
    "ipa": "s m ˈaɪ l",
    "level": "A2"
  },
  {
    "id": "a2_1531",
    "word": "smoke",
    "pos": "n./v.",
    "meaning": "ควัน",
    "reading": "สึ โมว ขึ",
    "ipa": "s m ˈəʊ k",
    "level": "A2"
  },
  {
    "id": "a2_1532",
    "word": "smoking",
    "pos": "n.",
    "meaning": "สูบบุหรี่",
    "reading": "สึ โม้ว ขิ่ ง",
    "ipa": "s m ˈəʊ k ɪ ŋ",
    "level": "A2"
  },
  {
    "id": "a2_1533",
    "word": "soap",
    "pos": "n.",
    "meaning": "สบู่",
    "reading": "โซว ผึ",
    "ipa": "s ˈəʊ p",
    "level": "A2"
  },
  {
    "id": "a2_1534",
    "word": "soccer",
    "pos": "n.",
    "meaning": "ฟุตบอล",
    "reading": "ซ้า เข่อ ร",
    "ipa": "s ˈɑː k ɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_1535",
    "word": "social",
    "pos": "adj.",
    "meaning": "ทางสังคม",
    "reading": "โซ้ว เฉอะ ล",
    "ipa": "s ˈəʊ ʃ ʌ l",
    "level": "A2"
  },
  {
    "id": "a2_1536",
    "word": "society",
    "pos": "n.",
    "meaning": "สังคม",
    "reading": "เสอะ ซ้าย เออะ ถี่",
    "ipa": "s ʌ s ˈaɪ ʌ t iː",
    "level": "A2"
  },
  {
    "id": "a2_1537",
    "word": "sock",
    "pos": "n.",
    "meaning": "ถุงเท้า",
    "reading": "ซา ขึ",
    "ipa": "s ˈɑː k",
    "level": "A2"
  },
  {
    "id": "a2_1538",
    "word": "soft",
    "pos": "adj.",
    "meaning": "อ่อนนุ่ม",
    "reading": "ซา ฝึ ถึ",
    "ipa": "s ˈɑː f t",
    "level": "A2"
  },
  {
    "id": "a2_1539",
    "word": "soldier",
    "pos": "n.",
    "meaning": "ทหาร",
    "reading": "โซ้ว ล เจ่อ ร",
    "ipa": "s ˈəʊ l dʒ ɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_1540",
    "word": "solution",
    "pos": "n.",
    "meaning": "สารละลาย",
    "reading": "เสอะ ลู้ เฉอะ น",
    "ipa": "s ʌ l ˈuː ʃ ʌ n",
    "level": "A2"
  },
  {
    "id": "a2_1541",
    "word": "solve",
    "pos": "v.",
    "meaning": "แก้ปัญหา",
    "reading": "ซา ล ฝึ",
    "ipa": "s ˈɑː l v",
    "level": "A2"
  },
  {
    "id": "a2_1542",
    "word": "somewhere",
    "pos": "adv.",
    "meaning": "ที่ไหนสักแห่ง",
    "reading": "ซะ ม แว (ร)",
    "ipa": "s ˈʌ m w ˌe r",
    "level": "A2"
  },
  {
    "id": "a2_1543",
    "word": "somewhere",
    "pos": "pron.",
    "meaning": "ที่ไหนสักแห่ง (สรรพนาม)",
    "reading": "ซะ ม แว (ร)",
    "ipa": "s ˈʌ m w ˌe r",
    "level": "A2"
  },
  {
    "id": "a2_1544",
    "word": "sort",
    "pos": "n.",
    "meaning": "เรียงลำดับ",
    "reading": "โซ (ร) ถึ",
    "ipa": "s ˈɔː r t",
    "level": "A2"
  },
  {
    "id": "a2_1545",
    "word": "source",
    "pos": "n.",
    "meaning": "แหล่งที่มา",
    "reading": "โซ (ร) สึ",
    "ipa": "s ˈɔː r s",
    "level": "A2"
  },
  {
    "id": "a2_1546",
    "word": "speaker",
    "pos": "n",
    "meaning": "ผู้พูด",
    "reading": "สึ พี้ เข่อ ร",
    "ipa": "s p ˈiː k ɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_1547",
    "word": "specific",
    "pos": "adj.",
    "meaning": "เฉพาะเจาะจง",
    "reading": "สึ เผอะ ซิ ฝิ่ ขึ",
    "ipa": "s p ʌ s ˈɪ f ɪ k",
    "level": "A2"
  },
  {
    "id": "a2_1548",
    "word": "speech",
    "pos": "n.",
    "meaning": "คำพูด",
    "reading": "สึ พี ฉึ",
    "ipa": "s p ˈiː tʃ",
    "level": "A2"
  },
  {
    "id": "a2_1549",
    "word": "speed",
    "pos": "n.",
    "meaning": "ความเร็ว",
    "reading": "สึ พี ดึ",
    "ipa": "s p ˈiː d",
    "level": "A2"
  },
  {
    "id": "a2_1550",
    "word": "spider",
    "pos": "n.",
    "meaning": "แมงมุม",
    "reading": "สึ พ้าย เด่อ ร",
    "ipa": "s p ˈaɪ d ɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_1551",
    "word": "spoon",
    "pos": "n.",
    "meaning": "ช้อน",
    "reading": "สึ พู น",
    "ipa": "s p ˈuː n",
    "level": "A2"
  },
  {
    "id": "a2_1552",
    "word": "square",
    "pos": "adj./n.",
    "meaning": "สี่เหลี่ยม",
    "reading": "สึ แคว (ร)",
    "ipa": "s k w ˈe r",
    "level": "A2"
  },
  {
    "id": "a2_1553",
    "word": "stage",
    "pos": "n.",
    "meaning": "เวที",
    "reading": "สึ เท จึ",
    "ipa": "s t ˈeɪ dʒ",
    "level": "A2"
  },
  {
    "id": "a2_1554",
    "word": "stair",
    "pos": "n.",
    "meaning": "บันได",
    "reading": "สึ แท (ร)",
    "ipa": "s t ˈe r",
    "level": "A2"
  },
  {
    "id": "a2_1555",
    "word": "stamp",
    "pos": "n.",
    "meaning": "ประทับ",
    "reading": "สึ แท ม ผึ",
    "ipa": "s t ˈæ m p",
    "level": "A2"
  },
  {
    "id": "a2_1556",
    "word": "star",
    "pos": "v.",
    "meaning": "ดาว",
    "reading": "สึ ทา (ร)",
    "ipa": "s t ˈɑː r",
    "level": "A2"
  },
  {
    "id": "a2_1557",
    "word": "start",
    "pos": "n.",
    "meaning": "เริ่ม",
    "reading": "สึ ทา (ร) ถึ",
    "ipa": "s t ˈɑː r t",
    "level": "A2"
  },
  {
    "id": "a2_1558",
    "word": "state",
    "pos": "n.",
    "meaning": "สถานะ",
    "reading": "สึ เท ถึ",
    "ipa": "s t ˈeɪ t",
    "level": "A2"
  },
  {
    "id": "a2_1559",
    "word": "stay",
    "pos": "n.",
    "meaning": "อยู่",
    "reading": "สึ เท",
    "ipa": "s t ˈeɪ",
    "level": "A2"
  },
  {
    "id": "a2_1560",
    "word": "steal",
    "pos": "v.",
    "meaning": "ขโมย",
    "reading": "สึ ที ล",
    "ipa": "s t ˈiː l",
    "level": "A2"
  },
  {
    "id": "a2_1561",
    "word": "step",
    "pos": "n.",
    "meaning": "ขั้นตอน",
    "reading": "สึ เทะ ผึ",
    "ipa": "s t ˈe p",
    "level": "A2"
  },
  {
    "id": "a2_1562",
    "word": "stomach",
    "pos": "n.",
    "meaning": "ท้อง",
    "reading": "สึ ทะ เหมอะ ขึ",
    "ipa": "s t ˈʌ m ʌ k",
    "level": "A2"
  },
  {
    "id": "a2_1563",
    "word": "stone",
    "pos": "n.",
    "meaning": "หิน",
    "reading": "สึ โทว น",
    "ipa": "s t ˈəʊ n",
    "level": "A2"
  },
  {
    "id": "a2_1564",
    "word": "store",
    "pos": "n.",
    "meaning": "เก็บ",
    "reading": "สึ โท (ร)",
    "ipa": "s t ˈɔː r",
    "level": "A2"
  },
  {
    "id": "a2_1565",
    "word": "storm",
    "pos": "n.",
    "meaning": "พายุ",
    "reading": "สึ โท (ร) ม",
    "ipa": "s t ˈɔː r m",
    "level": "A2"
  },
  {
    "id": "a2_1566",
    "word": "straight",
    "pos": "adv./adj.",
    "meaning": "ตรง",
    "reading": "สึ เทร ถึ",
    "ipa": "s t r ˈeɪ t",
    "level": "A2"
  },
  {
    "id": "a2_1567",
    "word": "strange",
    "pos": "adj.",
    "meaning": "แปลก",
    "reading": "สึ เทร น จึ",
    "ipa": "s t r ˈeɪ n dʒ",
    "level": "A2"
  },
  {
    "id": "a2_1568",
    "word": "strategy",
    "pos": "n.",
    "meaning": "กลยุทธ์",
    "reading": "สึ แทร้ เถอะ จี่",
    "ipa": "s t r ˈæ t ʌ dʒ iː",
    "level": "A2"
  },
  {
    "id": "a2_1569",
    "word": "stress",
    "pos": "n./v.",
    "meaning": "ความเครียด",
    "reading": "สึ เทระ สึ",
    "ipa": "s t r ˈe s",
    "level": "A2"
  },
  {
    "id": "a2_1570",
    "word": "structure",
    "pos": "n.",
    "meaning": "โครงสร้าง",
    "reading": "สึ ทระ ขึ เฉ่อ ร",
    "ipa": "s t r ˈʌ k tʃ ɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_1571",
    "word": "stupid",
    "pos": "adj.",
    "meaning": "โง่",
    "reading": "สึ ทู้ เผอะ ดึ",
    "ipa": "s t ˈuː p ʌ d",
    "level": "A2"
  },
  {
    "id": "a2_1572",
    "word": "succeed",
    "pos": "v.",
    "meaning": "ประสบความสำเร็จ",
    "reading": "เสอะ ขึ ซี้ ดึ",
    "ipa": "s ʌ k s ˈiː d",
    "level": "A2"
  },
  {
    "id": "a2_1573",
    "word": "successful",
    "pos": "adj.",
    "meaning": "ประสบความสำเร็จ เสอะ",
    "reading": "ขึ เซ้ะ สึ เฝอะ ล",
    "ipa": "s ʌ k s ˈe s f ʌ l",
    "level": "A2"
  },
  {
    "id": "a2_1574",
    "word": "such",
    "pos": "det./pron",
    "meaning": "เช่น",
    "reading": "ซะ ฉึ",
    "ipa": "s ˈʌ tʃ",
    "level": "A2"
  },
  {
    "id": "a2_1575",
    "word": "suddenly",
    "pos": "adv.",
    "meaning": "กะทันหัน",
    "reading": "ซะ เดอะ น หลี่",
    "ipa": "s ˈʌ d ʌ n l iː",
    "level": "A2"
  },
  {
    "id": "a2_1576",
    "word": "suggest",
    "pos": "v.",
    "meaning": "แนะนำ",
    "reading": "เสอะ เจ๊ะ สึ ถึ",
    "ipa": "s ʌ dʒ ˈe s t",
    "level": "A2"
  },
  {
    "id": "a2_1577",
    "word": "suggestion",
    "pos": "n.",
    "meaning": "คำแนะนำ",
    "reading": "เสอะ เจ๊ะ สึ เฉอะ น",
    "ipa": "s ʌ dʒ ˈe s tʃ ʌ n",
    "level": "A2"
  },
  {
    "id": "a2_1578",
    "word": "suit",
    "pos": "n.",
    "meaning": "สูท",
    "reading": "ซู ถึ",
    "ipa": "s ˈuː t",
    "level": "A2"
  },
  {
    "id": "a2_1579",
    "word": "support",
    "pos": "v./n.",
    "meaning": "สนับสนุน",
    "reading": "เสอะ โพ้ (ร) ถึ",
    "ipa": "s ʌ p ˈɔː r t",
    "level": "A2"
  },
  {
    "id": "a2_1580",
    "word": "suppose",
    "pos": "v.",
    "meaning": "สมมติ",
    "reading": "เสอะ โพ้ว สึ",
    "ipa": "s ʌ p ˈəʊ z",
    "level": "A2"
  },
  {
    "id": "a2_1581",
    "word": "sure",
    "pos": "adv.",
    "meaning": "แน่นอน",
    "reading": "ชัว (ร)",
    "ipa": "ʃ ˈʊ r",
    "level": "A2"
  },
  {
    "id": "a2_1582",
    "word": "surprise",
    "pos": "n./v.",
    "meaning": "เซอร์ไพรส์",
    "reading": "เส่อ ร พร้าย สึ",
    "ipa": "s ɜːʴ p r ˈaɪ z",
    "level": "A2"
  },
  {
    "id": "a2_1583",
    "word": "surprised",
    "pos": "adj.",
    "meaning": "น่าประหลาดใจ",
    "reading": "เส่อ ร พร้าย สึ ดึ",
    "ipa": "s ɜːʴ p r ˈaɪ z d",
    "level": "A2"
  },
  {
    "id": "a2_1584",
    "word": "surprising",
    "pos": "adj.",
    "meaning": "น่าแปลกใจ",
    "reading": "เส่อ ร พร้าย สิ่ ง",
    "ipa": "s ɜːʴ p r ˈaɪ z ɪ ŋ",
    "level": "A2"
  },
  {
    "id": "a2_1585",
    "word": "survey",
    "pos": "n.",
    "meaning": "สำรวจ",
    "reading": "เซ้อ ร เฟ",
    "ipa": "s ˈɜːʴ v ˌeɪ",
    "level": "A2"
  },
  {
    "id": "a2_1586",
    "word": "sweet",
    "pos": "adj./n.",
    "meaning": "หวาน",
    "reading": "สึ วี ถึ",
    "ipa": "s w ˈiː t",
    "level": "A2"
  },
  {
    "id": "a2_1587",
    "word": "symbol",
    "pos": "n.",
    "meaning": "เครื่องหมาย",
    "reading": "ซิ ม เบอะ ล",
    "ipa": "s ˈɪ m b ʌ l",
    "level": "A2"
  },
  {
    "id": "a2_1588",
    "word": "system",
    "pos": "n.",
    "meaning": "ระบบ",
    "reading": "ซิ สึ เถอะ ม",
    "ipa": "s ˈɪ s t ʌ m",
    "level": "A2"
  },
  {
    "id": "a2_1589",
    "word": "tablet",
    "pos": "n.",
    "meaning": "ยาเม็ด",
    "reading": "แท้ เบลอะ ถึ",
    "ipa": "t ˈæ b l ʌ t",
    "level": "A2"
  },
  {
    "id": "a2_1590",
    "word": "talk",
    "pos": "n.",
    "meaning": "พูดคุย",
    "reading": "ทอ ขึ",
    "ipa": "t ˈɔː k",
    "level": "A2"
  },
  {
    "id": "a2_1591",
    "word": "target",
    "pos": "n.",
    "meaning": "เป้า",
    "reading": "ท้าร เกอะ ถึ",
    "ipa": "t ˈɑː r g ʌ t",
    "level": "A2"
  },
  {
    "id": "a2_1592",
    "word": "task",
    "pos": "n.",
    "meaning": "งาน",
    "reading": "แท สึ ขึ",
    "ipa": "t ˈæ s k",
    "level": "A2"
  },
  {
    "id": "a2_1593",
    "word": "taste",
    "pos": "n./v.",
    "meaning": "รสชาติ",
    "reading": "เท สึ ถึ",
    "ipa": "t ˈeɪ s t",
    "level": "A2"
  },
  {
    "id": "a2_1594",
    "word": "teaching",
    "pos": "n.",
    "meaning": "การสอน",
    "reading": "ที้ ฉิ่ ง",
    "ipa": "t ˈiː tʃ ɪ ŋ",
    "level": "A2"
  },
  {
    "id": "a2_1595",
    "word": "technology",
    "pos": "n.",
    "meaning": "เทคโนโลยี",
    "reading": "เถะ ขึ น้า เหลอะ จี่",
    "ipa": "t e k n ˈɑː l ʌ dʒ iː",
    "level": "A2"
  },
  {
    "id": "a2_1596",
    "word": "teenage",
    "pos": "adj.",
    "meaning": "วัยรุ่น",
    "reading": "ที้ เน จึ",
    "ipa": "t ˈiː n ˌeɪ dʒ",
    "level": "A2"
  },
  {
    "id": "a2_1597",
    "word": "temperature",
    "pos": "n.",
    "meaning": "อุณหภูมิ",
    "reading": "เท้ะ ม เผรอะ เฉ่อ ร",
    "ipa": "t ˈe m p r ʌ tʃ ɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_1598",
    "word": "term",
    "pos": "n.",
    "meaning": "ภาคเรียน",
    "reading": "เทอ ร ม",
    "ipa": "t ˈɜːʴ m",
    "level": "A2"
  },
  {
    "id": "a2_1599",
    "word": "text",
    "pos": "v.",
    "meaning": "ข้อความ",
    "reading": "เทะ ขึ สึ ถึ",
    "ipa": "t ˈe k s t",
    "level": "A2"
  },
  {
    "id": "a2_1600",
    "word": "themselves",
    "pos": "pron.",
    "meaning": "ตัวพวกเขาเอง",
    "reading": "เดะ ม เซ้ะ ล ฝึ สึ",
    "ipa": "ð e m s ˈe l v z",
    "level": "A2"
  },
  {
    "id": "a2_1601",
    "word": "thick",
    "pos": "adj.",
    "meaning": "หนา",
    "reading": "ติ ขึ",
    "ipa": "θ ˈɪ k",
    "level": "A2"
  },
  {
    "id": "a2_1602",
    "word": "thief",
    "pos": "n.",
    "meaning": "ขโมย",
    "reading": "ตี ฝึ",
    "ipa": "θ ˈiː f",
    "level": "A2"
  },
  {
    "id": "a2_1603",
    "word": "thin",
    "pos": "adj.",
    "meaning": "บาง",
    "reading": "ติ น",
    "ipa": "θ ˈɪ n",
    "level": "A2"
  },
  {
    "id": "a2_1604",
    "word": "thinking",
    "pos": "n.",
    "meaning": "กำลังคิด",
    "reading": "ติ้ ง ขิ่ ง",
    "ipa": "θ ˈɪ ŋ k ɪ ŋ",
    "level": "A2"
  },
  {
    "id": "a2_1605",
    "word": "third",
    "pos": "n.",
    "meaning": "ที่สาม",
    "reading": "เตอ ร ดึ",
    "ipa": "θ ˈɜːʴ d",
    "level": "A2"
  },
  {
    "id": "a2_1606",
    "word": "thought",
    "pos": "n.",
    "meaning": "คิด",
    "reading": "ตอ ถึ",
    "ipa": "θ ˈɔː t",
    "level": "A2"
  },
  {
    "id": "a2_1607",
    "word": "throw",
    "pos": "v.",
    "meaning": "โยน",
    "reading": "โตรว",
    "ipa": "θ r ˈəʊ",
    "level": "A2"
  },
  {
    "id": "a2_1608",
    "word": "tidy",
    "pos": "adj./v.",
    "meaning": "เรียบร้อย",
    "reading": "ท้าย ดี่",
    "ipa": "t ˈaɪ d iː",
    "level": "A2"
  },
  {
    "id": "a2_1609",
    "word": "tie",
    "pos": "v./n.",
    "meaning": "ผูก",
    "reading": "ทาย",
    "ipa": "t ˈaɪ",
    "level": "A2"
  },
  {
    "id": "a2_1610",
    "word": "tip",
    "pos": "n.",
    "meaning": "เคล็ดลับ",
    "reading": "ทิ ผึ",
    "ipa": "t ˈɪ p",
    "level": "A2"
  },
  {
    "id": "a2_1611",
    "word": "tool",
    "pos": "n.",
    "meaning": "เครื่องมือ",
    "reading": "ทู ล",
    "ipa": "t ˈuː l",
    "level": "A2"
  },
  {
    "id": "a2_1612",
    "word": "top",
    "pos": "n./adj.",
    "meaning": "สูงสุด",
    "reading": "ทา ผึ",
    "ipa": "t ˈɑː p",
    "level": "A2"
  },
  {
    "id": "a2_1613",
    "word": "touch",
    "pos": "v.",
    "meaning": "สัมผัส",
    "reading": "ทะ ฉึ",
    "ipa": "t ˈʌ tʃ",
    "level": "A2"
  },
  {
    "id": "a2_1614",
    "word": "tour",
    "pos": "n.",
    "meaning": "การท่องเที่ยว",
    "reading": "ทัว (ร)",
    "ipa": "t ˈʊ r",
    "level": "A2"
  },
  {
    "id": "a2_1615",
    "word": "tourism",
    "pos": "n.",
    "meaning": "การท่องเที่ยว",
    "reading": "ทั้ว (ร) อิ เสอะ ม",
    "ipa": "t ˈʊ r ˌɪ z ʌ m",
    "level": "A2"
  },
  {
    "id": "a2_1616",
    "word": "towards",
    "pos": "prep.",
    "meaning": "ต่อ",
    "reading": "เถอะ โว้ (ร) ดึ สึ",
    "ipa": "t ʌ w ˈɔː r d z",
    "level": "A2"
  },
  {
    "id": "a2_1617",
    "word": "towel",
    "pos": "n.",
    "meaning": "ผ้าขนหนู",
    "reading": "ท้าว เออะ ล",
    "ipa": "t ˈaʊ ʌ l",
    "level": "A2"
  },
  {
    "id": "a2_1618",
    "word": "tower",
    "pos": "n.",
    "meaning": "หอคอย",
    "reading": "ท้าว เอ่อ ร",
    "ipa": "t ˈaʊ ɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_1619",
    "word": "toy",
    "pos": "n./adj.",
    "meaning": "ของเล่น",
    "reading": "ทออย",
    "ipa": "t ˈɔɪ",
    "level": "A2"
  },
  {
    "id": "a2_1620",
    "word": "track",
    "pos": "n.",
    "meaning": "ติดตาม",
    "reading": "แทร ขึ",
    "ipa": "t r ˈæ k",
    "level": "A2"
  },
  {
    "id": "a2_1621",
    "word": "tradition",
    "pos": "n.",
    "meaning": "ธรรมเนียม",
    "reading": "เถรอะ ดิ้ เฉอะ น",
    "ipa": "t r ʌ d ˈɪ ʃ ʌ n",
    "level": "A2"
  },
  {
    "id": "a2_1622",
    "word": "traditional",
    "pos": "adj.",
    "meaning": "แบบดั้งเดิม เถรอะ",
    "reading": "ดิ้ เฉอะ เหนอะ ล",
    "ipa": "t r ʌ d ˈɪ ʃ ʌ n ʌ l",
    "level": "A2"
  },
  {
    "id": "a2_1623",
    "word": "train",
    "pos": "v.",
    "meaning": "รถไฟ",
    "reading": "เทร น",
    "ipa": "t r ˈeɪ n",
    "level": "A2"
  },
  {
    "id": "a2_1624",
    "word": "trainer",
    "pos": "n.",
    "meaning": "ผู้ฝึกสอน",
    "reading": "เทร้ เหน่อ ร",
    "ipa": "t r ˈeɪ n ɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_1625",
    "word": "training",
    "pos": "n.",
    "meaning": "การฝึกอบรม",
    "reading": "เทร้ หนิ่ ง",
    "ipa": "t r ˈeɪ n ɪ ŋ",
    "level": "A2"
  },
  {
    "id": "a2_1626",
    "word": "transport",
    "pos": "n.",
    "meaning": "ขนส่ง",
    "reading": "แทร้ น สึ โผ่ (ร) ถึ",
    "ipa": "t r ˈæ n s p ɔː r t",
    "level": "A2"
  },
  {
    "id": "a2_1627",
    "word": "traveller",
    "pos": "n.",
    "meaning": "นักเดินทาง",
    "reading": "แทร้ เฝอะ เหล่อ ร",
    "ipa": "t r ˈæ v ʌ l ɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_1628",
    "word": "trouble",
    "pos": "n.",
    "meaning": "ปัญหา",
    "reading": "ทระ เบอะ ล",
    "ipa": "t r ˈʌ b ʌ l",
    "level": "A2"
  },
  {
    "id": "a2_1629",
    "word": "truck",
    "pos": "n.",
    "meaning": "รถบรรทุก",
    "reading": "ทระ ขึ",
    "ipa": "t r ˈʌ k",
    "level": "A2"
  },
  {
    "id": "a2_1630",
    "word": "twin",
    "pos": "n./adj.",
    "meaning": "แฝด",
    "reading": "ทวิ น",
    "ipa": "t w ˈɪ n",
    "level": "A2"
  },
  {
    "id": "a2_1631",
    "word": "typical",
    "pos": "adj.",
    "meaning": "ทั่วไป",
    "reading": "ทิ เผอะ เขอะ ล",
    "ipa": "t ˈɪ p ʌ k ʌ l",
    "level": "A2"
  },
  {
    "id": "a2_1632",
    "word": "underground",
    "pos": "adj./adv.",
    "meaning": "ใต้ดิน อ๊ะ",
    "reading": "น เด่อ ร กราว น ดึ",
    "ipa": "ˈʌ n d ɜːʴ g r ˌaʊ n d",
    "level": "A2"
  },
  {
    "id": "a2_1633",
    "word": "understanding",
    "pos": "n.",
    "meaning": "ความเข้าใจ อะ",
    "reading": "น เด่อ ร สึ แท้ น ดิ ง",
    "ipa": "ˌʌ n d ɜːʴ s t ˈæ n d ɪ ŋ",
    "level": "A2"
  },
  {
    "id": "a2_1634",
    "word": "unfortunately",
    "pos": "adv.",
    "meaning": "น่าเสียดาย เออะ น",
    "reading": "โฟ้ (ร) เฉอะ เหนอะ ถลี่",
    "ipa": "ʌ n f ˈɔː r tʃ ʌ n ʌ t l iː",
    "level": "A2"
  },
  {
    "id": "a2_1635",
    "word": "unhappy",
    "pos": "adj.",
    "meaning": "ไม่มีความสุข",
    "reading": "เออะ น แฮ้ ผี่่",
    "ipa": "ʌ n h ˈæ p iː",
    "level": "A2"
  },
  {
    "id": "a2_1636",
    "word": "uniform",
    "pos": "n.",
    "meaning": "เครื่องแบบ",
    "reading": "ยู้ เหนอะ โฟ (ร) ม",
    "ipa": "j ˈuː n ʌ f ˌɔː r m",
    "level": "A2"
  },
  {
    "id": "a2_1637",
    "word": "unit",
    "pos": "n.",
    "meaning": "หน่วย",
    "reading": "ยู้ เหนอะ ถึ",
    "ipa": "j ˈuː n ʌ t",
    "level": "A2"
  },
  {
    "id": "a2_1638",
    "word": "united",
    "pos": "adj.",
    "meaning": "สห",
    "reading": "หยู่ น้าย ถิ่ ดึ",
    "ipa": "j uː n ˈaɪ t ɪ d",
    "level": "A2"
  },
  {
    "id": "a2_1639",
    "word": "unusual",
    "pos": "adj.",
    "meaning": "ผิดปกติ",
    "reading": "เออะ น ยู้ ชู เออะ ล",
    "ipa": "ʌ n j ˈuː ʒ ˌuː ʌ l",
    "level": "A2"
  },
  {
    "id": "a2_1640",
    "word": "upstairs",
    "pos": "adj.",
    "meaning": "ชั้นบน",
    "reading": "เออะ ผึ สึ แท้ (ร) สึ",
    "ipa": "ʌ p s t ˈe r z",
    "level": "A2"
  },
  {
    "id": "a2_1641",
    "word": "use",
    "pos": "n.",
    "meaning": "ใช้",
    "reading": "ยู สึ",
    "ipa": "j ˈuː s",
    "level": "A2"
  },
  {
    "id": "a2_1642",
    "word": "use to",
    "pos": "v.",
    "meaning": "ใช้สำหรับ",
    "reading": "ยู สึ",
    "ipa": "j ˈuː s",
    "level": "A2"
  },
  {
    "id": "a2_1643",
    "word": "user",
    "pos": "n.",
    "meaning": "ผู้ใช้",
    "reading": "ยู้ เส่อ ร",
    "ipa": "j ˈuː z ɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_1644",
    "word": "usual",
    "pos": "adj.",
    "meaning": "ตามปกติ",
    "reading": "ยู้ เฉอะ เหวอะ ล",
    "ipa": "j ˈuː ʒ ʌ w ʌ l",
    "level": "A2"
  },
  {
    "id": "a2_1645",
    "word": "valley",
    "pos": "n.",
    "meaning": "หุบเขา",
    "reading": "แฟ้ หลี่",
    "ipa": "v ˈæ l iː",
    "level": "A2"
  },
  {
    "id": "a2_1646",
    "word": "van",
    "pos": "n.",
    "meaning": "รถตู้",
    "reading": "แฟ น",
    "ipa": "v ˈæ n",
    "level": "A2"
  },
  {
    "id": "a2_1647",
    "word": "variety",
    "pos": "n.",
    "meaning": "ความหลากหลาย",
    "reading": "เฝ่อ ร ร้าย เออะ ถี่",
    "ipa": "v ɜːʴ ˈaɪ ʌ t iː",
    "level": "A2"
  },
  {
    "id": "a2_1648",
    "word": "vehicle",
    "pos": "n.",
    "meaning": "ยานพาหนะ",
    "reading": "ฟี้ หิ่ เขอะ ล",
    "ipa": "v ˈiː h ɪ k ʌ l",
    "level": "A2"
  },
  {
    "id": "a2_1649",
    "word": "view",
    "pos": "n.",
    "meaning": "ดู",
    "reading": "ฝึ ยู",
    "ipa": "v j ˈuː",
    "level": "A2"
  },
  {
    "id": "a2_1650",
    "word": "virus",
    "pos": "n.",
    "meaning": "ไวรัส",
    "reading": "ฟ้าย เหรอะ สึ",
    "ipa": "v ˈaɪ r ʌ s",
    "level": "A2"
  },
  {
    "id": "a2_1651",
    "word": "voice",
    "pos": "n.",
    "meaning": "เสียง",
    "reading": "ฟออย สึ",
    "ipa": "v ˈɔɪ s",
    "level": "A2"
  },
  {
    "id": "a2_1652",
    "word": "wait",
    "pos": "n.",
    "meaning": "รอ",
    "reading": "เว ถึ",
    "ipa": "w ˈeɪ t",
    "level": "A2"
  },
  {
    "id": "a2_1653",
    "word": "war",
    "pos": "n.",
    "meaning": "สงคราม",
    "reading": "โว (ร)",
    "ipa": "w ˈɔː r",
    "level": "A2"
  },
  {
    "id": "a2_1654",
    "word": "wash",
    "pos": "n.",
    "meaning": "ล้าง",
    "reading": "วา ฉึ",
    "ipa": "w ˈɑː ʃ",
    "level": "A2"
  },
  {
    "id": "a2_1655",
    "word": "washing",
    "pos": "n.",
    "meaning": "ซักผ้า",
    "reading": "ว้า ฉิ่ ง",
    "ipa": "w ˈɑː ʃ ɪ ŋ",
    "level": "A2"
  },
  {
    "id": "a2_1656",
    "word": "wave",
    "pos": "n.",
    "meaning": "คลื่น",
    "reading": "เว ฝึ",
    "ipa": "w ˈeɪ v",
    "level": "A2"
  },
  {
    "id": "a2_1657",
    "word": "weak",
    "pos": "adj.",
    "meaning": "อ่อนแอ",
    "reading": "วี ขึ",
    "ipa": "w ˈiː k",
    "level": "A2"
  },
  {
    "id": "a2_1658",
    "word": "web",
    "pos": "n.",
    "meaning": "เว็บ",
    "reading": "เวะ บึ",
    "ipa": "w ˈe b",
    "level": "A2"
  },
  {
    "id": "a2_1659",
    "word": "wedding",
    "pos": "n.",
    "meaning": "งานแต่งงาน",
    "reading": "เว้ะ ดิ ง",
    "ipa": "w ˈe d ɪ ŋ",
    "level": "A2"
  },
  {
    "id": "a2_1660",
    "word": "weight",
    "pos": "n.",
    "meaning": "น้ำหนัก",
    "reading": "เว ถึ",
    "ipa": "w ˈeɪ t",
    "level": "A2"
  },
  {
    "id": "a2_1661",
    "word": "welcome",
    "pos": "n.",
    "meaning": "ยินดีต้อนรับ",
    "reading": "เว้ะ ล เขอะ ม",
    "ipa": "w ˈe l k ʌ m",
    "level": "A2"
  },
  {
    "id": "a2_1662",
    "word": "wet",
    "pos": "adj.",
    "meaning": "เปียก",
    "reading": "เวะ ถึ",
    "ipa": "w ˈe t",
    "level": "A2"
  },
  {
    "id": "a2_1663",
    "word": "wheel",
    "pos": "n.",
    "meaning": "ล้อ",
    "reading": "วี ล",
    "ipa": "w ˈiː l",
    "level": "A2"
  },
  {
    "id": "a2_1664",
    "word": "while",
    "pos": "conj.",
    "meaning": "ในขณะที่",
    "reading": "วาย ล",
    "ipa": "w ˈaɪ l",
    "level": "A2"
  },
  {
    "id": "a2_1665",
    "word": "whole",
    "pos": "adj.",
    "meaning": "ทั้งหมด",
    "reading": "โฮว ล",
    "ipa": "h ˈəʊ l",
    "level": "A2"
  },
  {
    "id": "a2_1666",
    "word": "whose",
    "pos": "det./pron.",
    "meaning": "ของใคร",
    "reading": "ฮู สึ",
    "ipa": "h ˈuː z",
    "level": "A2"
  },
  {
    "id": "a2_1667",
    "word": "wide",
    "pos": "adj.",
    "meaning": "กว้าง",
    "reading": "วาย ดึ",
    "ipa": "w ˈaɪ d",
    "level": "A2"
  },
  {
    "id": "a2_1668",
    "word": "wild",
    "pos": "adj.",
    "meaning": "ป่า",
    "reading": "วาย ล ดึ",
    "ipa": "w ˈaɪ l d",
    "level": "A2"
  },
  {
    "id": "a2_1669",
    "word": "wind",
    "pos": "n.",
    "meaning": "ลม",
    "reading": "วิน ดึ",
    "ipa": "w ɪ n d",
    "level": "A2"
  },
  {
    "id": "a2_1670",
    "word": "winner",
    "pos": "n.",
    "meaning": "ผู้ชนะ",
    "reading": "วิ เหน่อ ร",
    "ipa": "w ˈɪ n ɜːʴ",
    "level": "A2"
  },
  {
    "id": "a2_1671",
    "word": "wish",
    "pos": "v./n.",
    "meaning": "ปรารถนา",
    "reading": "วิ ฉึ",
    "ipa": "w ˈɪ ʃ",
    "level": "A2"
  },
  {
    "id": "a2_1672",
    "word": "wood",
    "pos": "n.",
    "meaning": "ไม้",
    "reading": "วุ ดึ",
    "ipa": "w ˈʊ d",
    "level": "A2"
  },
  {
    "id": "a2_1673",
    "word": "wooden",
    "pos": "adj.",
    "meaning": "ทำด้วยไม้",
    "reading": "วุ เดอะ น",
    "ipa": "w ˈʊ d ʌ n",
    "level": "A2"
  },
  {
    "id": "a2_1674",
    "word": "working",
    "pos": "adj.",
    "meaning": "การทำงาน",
    "reading": "เว้อ ร ขิ่ ง",
    "ipa": "w ˈɜːʴ k ɪ ŋ",
    "level": "A2"
  },
  {
    "id": "a2_1675",
    "word": "worried",
    "pos": "adj.",
    "meaning": "กังวล",
    "reading": "เว้อ ร หรี่ ดึ",
    "ipa": "w ˈɜːʴ iː d",
    "level": "A2"
  },
  {
    "id": "a2_1676",
    "word": "worry",
    "pos": "v.",
    "meaning": "กังวล",
    "reading": "เว้อ ร หรี่",
    "ipa": "w ˈɜːʴ iː",
    "level": "A2"
  },
  {
    "id": "a2_1677",
    "word": "worse",
    "pos": "adj.",
    "meaning": "แย่ลง",
    "reading": "เวอ ร สึ",
    "ipa": "w ˈɜːʴ s",
    "level": "A2"
  },
  {
    "id": "a2_1678",
    "word": "worst",
    "pos": "adj.",
    "meaning": "แย่ที่สุด",
    "reading": "เวอ ร สึ ถึ",
    "ipa": "w ˈɜːʴ s t",
    "level": "A2"
  },
  {
    "id": "a2_1679",
    "word": "wow",
    "pos": "exclam.",
    "meaning": "ว้าว",
    "reading": "วาว",
    "ipa": "w ˈaʊ",
    "level": "A2"
  },
  {
    "id": "a2_1680",
    "word": "yet",
    "pos": "adv.",
    "meaning": "ยัง",
    "reading": "เยะ ถึ",
    "ipa": "j ˈe t",
    "level": "A2"
  },
  {
    "id": "a2_1681",
    "word": "yours",
    "pos": "pron.",
    "meaning": "ของคุณ",
    "reading": "ยัว (ร) สึ",
    "ipa": "j ˈʊ r z",
    "level": "A2"
  },
  {
    "id": "a2_1682",
    "word": "zero",
    "pos": "number",
    "meaning": "ศูนย์",
    "reading": "เซี้ย (ร) โอ่ว",
    "ipa": "z ˈɪ r əʊ",
    "level": "A2"
  },
  {
    "id": "b1_1683",
    "word": "absolutely",
    "pos": "adv.",
    "meaning": "อย่างแน่นอน",
    "reading": "บึ เสอะ ลู้ ถลี่ แอ",
    "ipa": "ˌæ b s ʌ l ˈuː t l iː",
    "level": "B1"
  },
  {
    "id": "b1_1684",
    "word": "academic",
    "pos": "adj.",
    "meaning": "เชิงวิชาการ",
    "reading": "เด๊ะ หมิ่ ขึ แอ เขอะ",
    "ipa": "ˌæ k ʌ d ˈe m ɪ k",
    "level": "B1"
  },
  {
    "id": "b1_1685",
    "word": "access",
    "pos": "n., v.",
    "meaning": "เข้าถึง",
    "reading": "แอ๊ ขึ เซะ สึ",
    "ipa": "ˈæ k s ˌe s",
    "level": "B1"
  },
  {
    "id": "b1_1686",
    "word": "accommodation",
    "pos": "n.",
    "meaning": "เออะ ที่พัก",
    "reading": "เด๊ เฉอะ น คา เหมอะ",
    "ipa": "ʌ k ˌɑː m ʌ d ˈeɪ ʃ ʌ n",
    "level": "B1"
  },
  {
    "id": "b1_1687",
    "word": "account",
    "pos": "n.",
    "meaning": "บัญชี",
    "reading": "ค้าว น ถึ เออะ",
    "ipa": "ʌ k ˈaʊ n t",
    "level": "B1"
  },
  {
    "id": "b1_1688",
    "word": "achievement",
    "pos": "n.",
    "meaning": "ความสำเร็จ",
    "reading": "ชี้ ฝึ เหมอะ น ถึ เออะ",
    "ipa": "ʌ tʃ ˈiː v m ʌ n t",
    "level": "B1"
  },
  {
    "id": "b1_1689",
    "word": "act",
    "pos": "n.",
    "meaning": "กระทำ",
    "reading": "ขึ ถึ แอ",
    "ipa": "ˈæ k t",
    "level": "B1"
  },
  {
    "id": "b1_1690",
    "word": "ad",
    "pos": "n.",
    "meaning": "โฆษณา",
    "reading": "ดึ แอ",
    "ipa": "ˈæ d",
    "level": "B1"
  },
  {
    "id": "b1_1691",
    "word": "addition",
    "pos": "n.",
    "meaning": "ส่วนที่เพิ่มเข้าไป",
    "reading": "ดิ้ เฉอะ น เออะ",
    "ipa": "ʌ d ˈɪ ʃ ʌ n",
    "level": "B1"
  },
  {
    "id": "b1_1692",
    "word": "admire",
    "pos": "v.",
    "meaning": "ชื่นชม",
    "reading": "แอ่ ดึ ม้าย ร",
    "ipa": "æ d m ˈaɪ r",
    "level": "B1"
  },
  {
    "id": "b1_1693",
    "word": "admit",
    "pos": "v.",
    "meaning": "ยอมรับ",
    "reading": "ดึ มิ ถึ เออะ",
    "ipa": "ʌ d m ˈɪ t",
    "level": "B1"
  },
  {
    "id": "b1_1694",
    "word": "advanced",
    "pos": "adj.",
    "meaning": "ขั้นสูง",
    "reading": "ดึ แฟ้ น สึ ถึ เออะ",
    "ipa": "ʌ d v ˈæ n s t",
    "level": "B1"
  },
  {
    "id": "b1_1695",
    "word": "advise",
    "pos": "v.",
    "meaning": "ให้คำแนะนำ",
    "reading": "แอ่ ดึ ฟ้าย สึ",
    "ipa": "æ d v ˈaɪ z",
    "level": "B1"
  },
  {
    "id": "b1_1696",
    "word": "afford",
    "pos": "v.",
    "meaning": "จ่ายได้",
    "reading": "โฟ้ (ร) ดึ เออะ",
    "ipa": "ʌ f ˈɔː r d",
    "level": "B1"
  },
  {
    "id": "b1_1697",
    "word": "age",
    "pos": "v.",
    "meaning": "อายุ",
    "reading": "จึ เอ",
    "ipa": "ˈeɪ dʒ",
    "level": "B1"
  },
  {
    "id": "b1_1698",
    "word": "aged",
    "pos": "adj.",
    "meaning": "อายุ",
    "reading": "จึ ดึ เอ",
    "ipa": "ˈeɪ dʒ d",
    "level": "B1"
  },
  {
    "id": "b1_1699",
    "word": "agent",
    "pos": "n.",
    "meaning": "ตัวแทน",
    "reading": "เอ๊ เจอะ น ถึ",
    "ipa": "ˈeɪ dʒ ʌ n t",
    "level": "B1"
  },
  {
    "id": "b1_1700",
    "word": "agreement",
    "pos": "n.",
    "meaning": "ข้อตกลง",
    "reading": "กรี๊ เหมอะ น ถึ เออะ",
    "ipa": "ʌ g r ˈiː m ʌ n t",
    "level": "B1"
  },
  {
    "id": "b1_1701",
    "word": "ahead",
    "pos": "adv.",
    "meaning": "ข้างหน้า",
    "reading": "เฮ้ะ ดึ เออะ",
    "ipa": "ʌ h ˈe d",
    "level": "B1"
  },
  {
    "id": "b1_1702",
    "word": "aim",
    "pos": "v., n.",
    "meaning": "จุดมุ่งหมาย",
    "reading": "เอ ม",
    "ipa": "ˈeɪ m",
    "level": "B1"
  },
  {
    "id": "b1_1703",
    "word": "alarm",
    "pos": "n.",
    "meaning": "เตือน",
    "reading": "ล้า (ร) ม เออะ",
    "ipa": "ʌ l ˈɑː r m",
    "level": "B1"
  },
  {
    "id": "b1_1704",
    "word": "album",
    "pos": "n.",
    "meaning": "อัลบั้ม",
    "reading": "แอ๊ ล เบอะ ม",
    "ipa": "ˈæ l b ʌ m",
    "level": "B1"
  },
  {
    "id": "b1_1705",
    "word": "alcohol",
    "pos": "n.",
    "meaning": "แอลกอฮอล์",
    "reading": "แอ๊ ล เขอะ ฮา ล",
    "ipa": "ˈæ l k ʌ h ˌɑː l",
    "level": "B1"
  },
  {
    "id": "b1_1706",
    "word": "alcoholic",
    "pos": "adj.",
    "meaning": "ติดแอลกอฮอล์",
    "reading": "ฮ้า หลิ่ ขึ แอ ล เขอะ",
    "ipa": "ˌæ l k ʌ h ˈɑː l ɪ k",
    "level": "B1"
  },
  {
    "id": "b1_1707",
    "word": "alternative",
    "pos": "adj.",
    "meaning": "ทางเลือก",
    "reading": "อ่อ ล เท้อ ร เหนอะ ถิ่ ฝึ",
    "ipa": "ɔː l t ˈɜːʴ n ʌ t ɪ v",
    "level": "B1"
  },
  {
    "id": "b1_1708",
    "word": "amazed",
    "pos": "adj.",
    "meaning": "ประหลาดใจ",
    "reading": "เม้ สึ ดึ เออะ",
    "ipa": "ʌ m ˈeɪ z d",
    "level": "B1"
  },
  {
    "id": "b1_1709",
    "word": "ambition",
    "pos": "n.",
    "meaning": "ความทะเยอทะยาน",
    "reading": "แอ่ ม บิ้ เฉอะ น",
    "ipa": "æ m b ˈɪ ʃ ʌ n",
    "level": "B1"
  },
  {
    "id": "b1_1710",
    "word": "ambitious",
    "pos": "adj.",
    "meaning": "ทะเยอทะยาน",
    "reading": "แอ่ ม บิ้ เฉอะ สึ",
    "ipa": "æ m b ˈɪ ʃ ʌ s",
    "level": "B1"
  },
  {
    "id": "b1_1711",
    "word": "analyse",
    "pos": "v.",
    "meaning": "วิเคราะห์",
    "reading": "แอ๊ เหนอะ หล่าย สึ",
    "ipa": "ˈænəlaɪz",
    "level": "B1"
  },
  {
    "id": "b1_1712",
    "word": "analysis",
    "pos": "n.",
    "meaning": "การวิเคราะห์",
    "reading": "แน้ เหลอะ เสอะ สึ เออะ",
    "ipa": "ʌ n ˈæ l ʌ s ʌ s",
    "level": "B1"
  },
  {
    "id": "b1_1713",
    "word": "announce",
    "pos": "v.",
    "meaning": "ประกาศ",
    "reading": "น้าว น สึ เออะ",
    "ipa": "ʌ n ˈaʊ n s",
    "level": "B1"
  },
  {
    "id": "b1_1714",
    "word": "announcement",
    "pos": "n.",
    "meaning": "ประกาศ",
    "reading": "น้าว น สึ เหมอะ น ถึ เออะ",
    "ipa": "ʌ n ˈaʊ n s m ʌ n t",
    "level": "B1"
  },
  {
    "id": "b1_1715",
    "word": "annoy",
    "pos": "v.",
    "meaning": "รบกวน",
    "reading": "น้อย เออะ",
    "ipa": "ʌ n ˈɔɪ",
    "level": "B1"
  },
  {
    "id": "b1_1716",
    "word": "annoyed",
    "pos": "adj.",
    "meaning": "รำคาญ",
    "reading": "น้อย ดึ เออะ",
    "ipa": "ʌ n ˈɔɪ d",
    "level": "B1"
  },
  {
    "id": "b1_1717",
    "word": "annoying",
    "pos": "adj.",
    "meaning": "น่ารำคาญ",
    "reading": "น้อย อิ่ ง เออะ",
    "ipa": "ʌ n ˈɔɪ ɪ ŋ",
    "level": "B1"
  },
  {
    "id": "b1_1718",
    "word": "apart",
    "pos": "adv.",
    "meaning": "ห่างกัน",
    "reading": "พ้า (ร) ถึ เออะ",
    "ipa": "ʌ p ˈɑː r t",
    "level": "B1"
  },
  {
    "id": "b1_1719",
    "word": "apologize",
    "pos": "v.",
    "meaning": "ขอโทษ",
    "reading": "พ้า เหลอะ จาย สึ เออะ",
    "ipa": "ʌ p ˈɑː l ʌ dʒ ˌaɪ z",
    "level": "B1"
  },
  {
    "id": "b1_1720",
    "word": "application",
    "pos": "n.",
    "meaning": "แอปพลิเคชัน",
    "reading": "เค้ เฉอะ น แอ เผลอะ",
    "ipa": "ˌæ p l ʌ k ˈeɪ ʃ ʌ n",
    "level": "B1"
  },
  {
    "id": "b1_1721",
    "word": "appointment",
    "pos": "n.",
    "meaning": "เออะ การนัดหมาย",
    "reading": "พ้อย น ถึ เหมอะ น ถึ",
    "ipa": "ʌ p ˈɔɪ n t m ʌ n t",
    "level": "B1"
  },
  {
    "id": "b1_1722",
    "word": "appreciate",
    "pos": "v.",
    "meaning": "ชื่นชม",
    "reading": "พรี้ ฉี่ เอ ถึ เออะ",
    "ipa": "ʌ p r ˈiː ʃ iː ˌeɪ t",
    "level": "B1"
  },
  {
    "id": "b1_1723",
    "word": "approximately",
    "pos": "adv.",
    "meaning": "เออะ ประมาณ",
    "reading": "พร้า ขึ เสอะ เหมอะ ถลี่",
    "ipa": "ʌ p r ˈɑː k s ʌ m ʌ t l iː",
    "level": "B1"
  },
  {
    "id": "b1_1724",
    "word": "arrest",
    "pos": "v., n.",
    "meaning": "จับกุม",
    "reading": "เอ่อ ร เร้ะ สึ ถึ",
    "ipa": "ɜːʴ ˈe s t",
    "level": "B1"
  },
  {
    "id": "b1_1725",
    "word": "arrival",
    "pos": "n.",
    "meaning": "การมาถึง",
    "reading": "เอ่อ ร ร้าย เฝอะ ล",
    "ipa": "ɜːʴ ˈaɪ v ʌ l",
    "level": "B1"
  },
  {
    "id": "b1_1726",
    "word": "assignment",
    "pos": "n.",
    "meaning": "งานที่มอบหมาย",
    "reading": "ซ้าย น เหมอะ น ถึ เออะ",
    "ipa": "ʌ s ˈaɪ n m ʌ n t",
    "level": "B1"
  },
  {
    "id": "b1_1727",
    "word": "assist",
    "pos": "v.",
    "meaning": "ช่วยเหลือ",
    "reading": "ซิ สึ ถึ เออะ",
    "ipa": "ʌ s ˈɪ s t",
    "level": "B1"
  },
  {
    "id": "b1_1728",
    "word": "atmosphere",
    "pos": "n.",
    "meaning": "บรรยากาศ",
    "reading": "แอ๊ ถึ เหมอะ สึ เฟีย (ร)",
    "ipa": "ˈæ t m ʌ s f ˌɪ r",
    "level": "B1"
  },
  {
    "id": "b1_1729",
    "word": "attach",
    "pos": "v.",
    "meaning": "แนบ",
    "reading": "แท้ ฉึ เออะ",
    "ipa": "ʌ t ˈæ tʃ",
    "level": "B1"
  },
  {
    "id": "b1_1730",
    "word": "attitude",
    "pos": "n.",
    "meaning": "ทัศนคติ",
    "reading": "แอ๊ เถอะ ทู ดึ",
    "ipa": "ˈæ t ʌ t ˌuː d",
    "level": "B1"
  },
  {
    "id": "b1_1731",
    "word": "attract",
    "pos": "v.",
    "meaning": "ดึงดูด",
    "reading": "แทร้ ขึ ถึ เออะ",
    "ipa": "ʌ t r ˈæ k t",
    "level": "B1"
  },
  {
    "id": "b1_1732",
    "word": "attraction",
    "pos": "n.",
    "meaning": "สถานที่ท่องเที่ยว",
    "reading": "เออะ แทร้ ขึ เฉอะ น",
    "ipa": "ʌ t r ˈæ k ʃ ʌ n",
    "level": "B1"
  },
  {
    "id": "b1_1733",
    "word": "authority",
    "pos": "n.",
    "meaning": "อำนาจ",
    "reading": "โต๊ (ร) เออะ ถี่ เออะ",
    "ipa": "ʌ θ ˈɔː r ʌ t iː",
    "level": "B1"
  },
  {
    "id": "b1_1734",
    "word": "average",
    "pos": "v.",
    "meaning": "เฉลี่ย",
    "reading": "แอ๊ เฝ่อ ร หริ่ จึ",
    "ipa": "ˈæ v ɜːʴ ɪ dʒ",
    "level": "B1"
  },
  {
    "id": "b1_1735",
    "word": "award",
    "pos": "v.",
    "meaning": "รางวัล",
    "reading": "โว้ (ร) ดึ เออะ",
    "ipa": "ʌ w ˈɔː r d",
    "level": "B1"
  },
  {
    "id": "b1_1736",
    "word": "aware",
    "pos": "adj.",
    "meaning": "รับรู้",
    "reading": "แว้ (ร) เออะ",
    "ipa": "ʌ w ˈe r",
    "level": "B1"
  },
  {
    "id": "b1_1737",
    "word": "backwards",
    "pos": "adv.",
    "meaning": "ถอยหลัง",
    "reading": "แบ๊ เขว่อ ร ดึ สึ",
    "ipa": "b ˈæ k w ɜːʴ d z",
    "level": "B1"
  },
  {
    "id": "b1_1738",
    "word": "bake",
    "pos": "v.",
    "meaning": "อบ",
    "reading": "ขึ เบ",
    "ipa": "b ˈeɪ k",
    "level": "B1"
  },
  {
    "id": "b1_1739",
    "word": "balance",
    "pos": "n., v.",
    "meaning": "สมดุล",
    "reading": "แบ๊ เหลอะ น สึ",
    "ipa": "b ˈæ l ʌ n s",
    "level": "B1"
  },
  {
    "id": "b1_1740",
    "word": "ban",
    "pos": "v., n.",
    "meaning": "ห้าม",
    "reading": "แบ น",
    "ipa": "b ˈæ n",
    "level": "B1"
  },
  {
    "id": "b1_1741",
    "word": "bank",
    "pos": "n.",
    "meaning": "ธนาคาร",
    "reading": "ขึ แบ ง",
    "ipa": "b ˈæ ŋ k",
    "level": "B1"
  },
  {
    "id": "b1_1742",
    "word": "base",
    "pos": "n., v.",
    "meaning": "ฐาน",
    "reading": "สึ เบ",
    "ipa": "b ˈeɪ s",
    "level": "B1"
  },
  {
    "id": "b1_1743",
    "word": "basic",
    "pos": "adj.",
    "meaning": "ขั้นพื้นฐาน",
    "reading": "เบ๊ สิ่ ขึ",
    "ipa": "b ˈeɪ s ɪ k",
    "level": "B1"
  },
  {
    "id": "b1_1744",
    "word": "basis",
    "pos": "n.",
    "meaning": "พื้นฐาน",
    "reading": "เบ๊ เสอะ สึ",
    "ipa": "b ˈeɪ s ʌ s",
    "level": "B1"
  },
  {
    "id": "b1_1745",
    "word": "battery",
    "pos": "n.",
    "meaning": "แบตเตอรี่",
    "reading": "แบ๊ เถ่อ ร หรี่",
    "ipa": "b ˈæ t ɜːʴ iː",
    "level": "B1"
  },
  {
    "id": "b1_1746",
    "word": "battle",
    "pos": "n.",
    "meaning": "การต่อสู้",
    "reading": "แบ๊ เถอะ ล",
    "ipa": "b ˈæ t ʌ l",
    "level": "B1"
  },
  {
    "id": "b1_1747",
    "word": "beauty",
    "pos": "n.",
    "meaning": "ความงาม",
    "reading": "บึ ยู้ ถี่",
    "ipa": "b j ˈuː t iː",
    "level": "B1"
  },
  {
    "id": "b1_1748",
    "word": "bee",
    "pos": "n.",
    "meaning": "ผึ้ง",
    "reading": "บี",
    "ipa": "b ˈiː",
    "level": "B1"
  },
  {
    "id": "b1_1749",
    "word": "belief",
    "pos": "n.",
    "meaning": "ความเชื่อ",
    "reading": "บิ ลี้ ฝึ",
    "ipa": "b ɪ l ˈiː f",
    "level": "B1"
  },
  {
    "id": "b1_1750",
    "word": "bell",
    "pos": "n.",
    "meaning": "กระดิ่ง",
    "reading": "เบะ ล",
    "ipa": "b ˈe l",
    "level": "B1"
  },
  {
    "id": "b1_1751",
    "word": "bend",
    "pos": "v., n.",
    "meaning": "โค้งงอ",
    "reading": "ดึ เบะ น",
    "ipa": "b ˈe n d",
    "level": "B1"
  },
  {
    "id": "b1_1752",
    "word": "benefit",
    "pos": "v.",
    "meaning": "ผลประโยชน์",
    "reading": "เบ๊ะ เหนอะ ฝิ่ ถึ",
    "ipa": "b ˈe n ʌ f ɪ t",
    "level": "B1"
  },
  {
    "id": "b1_1753",
    "word": "better",
    "pos": "n.",
    "meaning": "ดีกว่า",
    "reading": "เบ๊ะ เถ่อ ร",
    "ipa": "b ˈe t ɜːʴ",
    "level": "B1"
  },
  {
    "id": "b1_1754",
    "word": "bite",
    "pos": "v., n.",
    "meaning": "กัด",
    "reading": "ถึ บาย",
    "ipa": "b ˈaɪ t",
    "level": "B1"
  },
  {
    "id": "b1_1755",
    "word": "block",
    "pos": "n., v.",
    "meaning": "ปิดกั้น",
    "reading": "ขึ บลา",
    "ipa": "b l ˈɑː k",
    "level": "B1"
  },
  {
    "id": "b1_1756",
    "word": "board",
    "pos": "v.",
    "meaning": "กระดาน",
    "reading": "ดึ โบ (ร)",
    "ipa": "b ˈɔː r d",
    "level": "B1"
  },
  {
    "id": "b1_1757",
    "word": "bomb",
    "pos": "n., v.",
    "meaning": "ระเบิด",
    "reading": "บา ม",
    "ipa": "b ˈɑː m",
    "level": "B1"
  },
  {
    "id": "b1_1758",
    "word": "border",
    "pos": "n.",
    "meaning": "ชายแดน",
    "reading": "โบ๊ (ร) เด่อ ร",
    "ipa": "b ˈɔː r d ɜːʴ",
    "level": "B1"
  },
  {
    "id": "b1_1759",
    "word": "bother",
    "pos": "v.",
    "meaning": "รบกวน",
    "reading": "บ๊า เด่อ ร",
    "ipa": "b ˈɑː ð ɜːʴ",
    "level": "B1"
  },
  {
    "id": "b1_1760",
    "word": "branch",
    "pos": "n.",
    "meaning": "สาขา",
    "reading": "ฉึ แบร น",
    "ipa": "b r ˈæ n tʃ",
    "level": "B1"
  },
  {
    "id": "b1_1761",
    "word": "brand",
    "pos": "n., v.",
    "meaning": "ยี่ห้อ",
    "reading": "ดึ แบร น",
    "ipa": "b r ˈæ n d",
    "level": "B1"
  },
  {
    "id": "b1_1762",
    "word": "brave",
    "pos": "adj.",
    "meaning": "กล้าหาญ",
    "reading": "ฝึ เบร",
    "ipa": "b r ˈeɪ v",
    "level": "B1"
  },
  {
    "id": "b1_1763",
    "word": "breath",
    "pos": "n.",
    "meaning": "ลมหายใจ",
    "reading": "ตึ เบระ",
    "ipa": "b r ˈe θ",
    "level": "B1"
  },
  {
    "id": "b1_1764",
    "word": "breathe",
    "pos": "v.",
    "meaning": "หายใจ",
    "reading": "บรี ดึ",
    "ipa": "b r ˈiː ð",
    "level": "B1"
  },
  {
    "id": "b1_1765",
    "word": "breathing",
    "pos": "n.",
    "meaning": "การหายใจ",
    "reading": "บรี๊ ดิ ง",
    "ipa": "b r ˈiː ð ɪ ŋ",
    "level": "B1"
  },
  {
    "id": "b1_1766",
    "word": "bride",
    "pos": "n.",
    "meaning": "เจ้าสาว",
    "reading": "ดึ บราย",
    "ipa": "b r ˈaɪ d",
    "level": "B1"
  },
  {
    "id": "b1_1767",
    "word": "bubble",
    "pos": "n.",
    "meaning": "ฟอง",
    "reading": "บ๊ะ เบอะ ล",
    "ipa": "b ˈʌ b ʌ l",
    "level": "B1"
  },
  {
    "id": "b1_1768",
    "word": "bury",
    "pos": "v.",
    "meaning": "ฝังศพ",
    "reading": "แบ๊ (ร) อี่",
    "ipa": "b ˈe r iː",
    "level": "B1"
  },
  {
    "id": "b1_1769",
    "word": "by",
    "pos": "adv.",
    "meaning": "โดย",
    "reading": "บาย",
    "ipa": "b ˈaɪ",
    "level": "B1"
  },
  {
    "id": "b1_1770",
    "word": "calm",
    "pos": "adj., v., n.",
    "meaning": "เงียบสงบ",
    "reading": "คา ม",
    "ipa": "k ˈɑː m",
    "level": "B1"
  },
  {
    "id": "b1_1771",
    "word": "campaign",
    "pos": "n., v.",
    "meaning": "แคมเปญ",
    "reading": "แข่ ม เพ้ น",
    "ipa": "k æ m p ˈeɪ n",
    "level": "B1"
  },
  {
    "id": "b1_1772",
    "word": "campus",
    "pos": "n.",
    "meaning": "วิทยาเขต",
    "reading": "แค้ ม เผอะ สึ",
    "ipa": "k ˈæ m p ʌ s",
    "level": "B1"
  },
  {
    "id": "b1_1773",
    "word": "candidate",
    "pos": "n.",
    "meaning": "ผู้สมัคร",
    "reading": "แค้ น เดอะ เด่ ถึ",
    "ipa": "k ˈæ n d ʌ d eɪ t",
    "level": "B1"
  },
  {
    "id": "b1_1774",
    "word": "cap",
    "pos": "n.",
    "meaning": "หมวก",
    "reading": "ผึ แค",
    "ipa": "k ˈæ p",
    "level": "B1"
  },
  {
    "id": "b1_1775",
    "word": "captain",
    "pos": "n.",
    "meaning": "กัปตัน",
    "reading": "แค้ ผึ เถอะ น",
    "ipa": "k ˈæ p t ʌ n",
    "level": "B1"
  },
  {
    "id": "b1_1776",
    "word": "careless",
    "pos": "adj.",
    "meaning": "สะเพร่า",
    "reading": "แค้ (ร) เหลอะ สึ",
    "ipa": "k ˈe r l ʌ s",
    "level": "B1"
  },
  {
    "id": "b1_1777",
    "word": "category",
    "pos": "n.",
    "meaning": "หมวดหมู่",
    "reading": "แค้ เถอะ กอ หรี่",
    "ipa": "k ˈæ t ʌ g ˌɔː r iː",
    "level": "B1"
  },
  {
    "id": "b1_1778",
    "word": "ceiling",
    "pos": "n.",
    "meaning": "เพดาน",
    "reading": "ซี้ หลิ่ ง",
    "ipa": "s ˈiː l ɪ ŋ",
    "level": "B1"
  },
  {
    "id": "b1_1779",
    "word": "celebration",
    "pos": "n.",
    "meaning": "การเฉลิมฉลอง",
    "reading": "เบร๊ เฉอะ น เซะ เหลอะ",
    "ipa": "s ˌe l ʌ b r ˈeɪ ʃ ʌ n",
    "level": "B1"
  },
  {
    "id": "b1_1780",
    "word": "central",
    "pos": "adj.",
    "meaning": "ศูนย์กลาง",
    "reading": "เซ้ะ น เถรอะ ล",
    "ipa": "s ˈe n t r ʌ l",
    "level": "B1"
  },
  {
    "id": "b1_1781",
    "word": "centre",
    "pos": "v.",
    "meaning": "ศูนย์",
    "reading": "เซ้ะ น เถ่อ ร",
    "ipa": "s ˈe n t ɜːʴ",
    "level": "B1"
  },
  {
    "id": "b1_1782",
    "word": "ceremony",
    "pos": "n.",
    "meaning": "พิธี",
    "reading": "แซ้ (ร) เออะ โมว หนี่",
    "ipa": "s ˈe r ʌ m ˌəʊ n iː",
    "level": "B1"
  },
  {
    "id": "b1_1783",
    "word": "chain",
    "pos": "n.",
    "meaning": "โซ่",
    "reading": "เช น",
    "ipa": "tʃ ˈeɪ n",
    "level": "B1"
  },
  {
    "id": "b1_1784",
    "word": "challenge",
    "pos": "n.",
    "meaning": "ท้าทาย",
    "reading": "แช้ เหลอะ น จึ",
    "ipa": "tʃ ˈæ l ʌ n dʒ",
    "level": "B1"
  },
  {
    "id": "b1_1785",
    "word": "champion",
    "pos": "n.",
    "meaning": "แชมป์",
    "reading": "แช้ ม ผี่่ เออะ น",
    "ipa": "tʃ ˈæ m p iː ʌ n",
    "level": "B1"
  },
  {
    "id": "b1_1786",
    "word": "channel",
    "pos": "n.",
    "meaning": "ช่อง",
    "reading": "แช้ เหนอะ ล",
    "ipa": "tʃ ˈæ n ʌ l",
    "level": "B1"
  },
  {
    "id": "b1_1787",
    "word": "chapter",
    "pos": "n.",
    "meaning": "บท",
    "reading": "แช้ ผึ เถ่อ ร",
    "ipa": "tʃ ˈæ p t ɜːʴ",
    "level": "B1"
  },
  {
    "id": "b1_1788",
    "word": "charge",
    "pos": "n., v.",
    "meaning": "ค่าใช้จ่าย",
    "reading": "จึ ชา (ร)",
    "ipa": "tʃ ˈɑː r dʒ",
    "level": "B1"
  },
  {
    "id": "b1_1789",
    "word": "cheap",
    "pos": "adv.",
    "meaning": "ราคาถูก",
    "reading": "ชี ผึ",
    "ipa": "tʃ ˈiː p",
    "level": "B1"
  },
  {
    "id": "b1_1790",
    "word": "cheat",
    "pos": "v., n.",
    "meaning": "โกง",
    "reading": "ชี ถึ",
    "ipa": "tʃ ˈiː t",
    "level": "B1"
  },
  {
    "id": "b1_1791",
    "word": "cheerful",
    "pos": "adj.",
    "meaning": "ร่าเริง",
    "reading": "เชี้ย (ร) เฝอะ ล",
    "ipa": "tʃ ˈɪ r f ʌ l",
    "level": "B1"
  },
  {
    "id": "b1_1792",
    "word": "chemical",
    "pos": "adj., n.",
    "meaning": "เคมี",
    "reading": "เค้ะ เหมอะ เขอะ ล",
    "ipa": "k ˈe m ʌ k ʌ l",
    "level": "B1"
  },
  {
    "id": "b1_1793",
    "word": "chest",
    "pos": "n.",
    "meaning": "หน้าอก",
    "reading": "สึ ถึ เชะ",
    "ipa": "tʃ ˈe s t",
    "level": "B1"
  },
  {
    "id": "b1_1794",
    "word": "childhood",
    "pos": "n.",
    "meaning": "วัยเด็ก",
    "reading": "ช้าย ล ดึ ฮุ ดึ",
    "ipa": "tʃ ˈaɪ l d h ˌʊ d",
    "level": "B1"
  },
  {
    "id": "b1_1795",
    "word": "claim",
    "pos": "v., n.",
    "meaning": "เรียกร้อง",
    "reading": "เคล ม",
    "ipa": "k l ˈeɪ m",
    "level": "B1"
  },
  {
    "id": "b1_1796",
    "word": "clause",
    "pos": "n.",
    "meaning": "ข้อ",
    "reading": "สึ คลอ",
    "ipa": "k l ˈɔː z",
    "level": "B1"
  },
  {
    "id": "b1_1797",
    "word": "clear",
    "pos": "v.",
    "meaning": "ชัดเจน",
    "reading": "เคลีย (ร)",
    "ipa": "k l ˈɪ r",
    "level": "B1"
  },
  {
    "id": "b1_1798",
    "word": "click",
    "pos": "v., n.",
    "meaning": "คลิก",
    "reading": "คลิ ขึ",
    "ipa": "k l ˈɪ k",
    "level": "B1"
  },
  {
    "id": "b1_1799",
    "word": "client",
    "pos": "n.",
    "meaning": "ลูกค้า",
    "reading": "คล้าย เออะ น ถึ",
    "ipa": "k l ˈaɪ ʌ n t",
    "level": "B1"
  },
  {
    "id": "b1_1800",
    "word": "climb",
    "pos": "n.",
    "meaning": "ปีน",
    "reading": "คลาย ม",
    "ipa": "k l ˈaɪ m",
    "level": "B1"
  },
  {
    "id": "b1_1801",
    "word": "close",
    "pos": "adv.",
    "meaning": "ใกล้ เกือบ",
    "reading": "สึ โคลว",
    "ipa": "k l ˈəʊ s",
    "level": "B1"
  },
  {
    "id": "b1_1802",
    "word": "cloth",
    "pos": "n.",
    "meaning": "ผ้า",
    "reading": "ตึ คลอ",
    "ipa": "k l ˈɔː θ",
    "level": "B1"
  },
  {
    "id": "b1_1803",
    "word": "clue",
    "pos": "n.",
    "meaning": "เบาะแส",
    "reading": "คลู",
    "ipa": "k l ˈuː",
    "level": "B1"
  },
  {
    "id": "b1_1804",
    "word": "coach",
    "pos": "v.",
    "meaning": "โค้ช",
    "reading": "ฉึ โคว",
    "ipa": "k ˈəʊ tʃ",
    "level": "B1"
  },
  {
    "id": "b1_1805",
    "word": "coal",
    "pos": "n.",
    "meaning": "ถ่านหิน",
    "reading": "โคว ล",
    "ipa": "k ˈəʊ l",
    "level": "B1"
  },
  {
    "id": "b1_1806",
    "word": "coin",
    "pos": "n.",
    "meaning": "เหรียญ",
    "reading": "คออย น",
    "ipa": "k ˈɔɪ n",
    "level": "B1"
  },
  {
    "id": "b1_1807",
    "word": "collection",
    "pos": "n.",
    "meaning": "ของสะสม",
    "reading": "เล้ะ ขึ เฉอะ น เขอะ",
    "ipa": "k ʌ l ˈe k ʃ ʌ n",
    "level": "B1"
  },
  {
    "id": "b1_1808",
    "word": "coloured",
    "pos": "adj.",
    "meaning": "มีสี",
    "reading": "เหล่อ ร ดึ คะ",
    "ipa": "k ˈʌ l ɜːʴ d",
    "level": "B1"
  },
  {
    "id": "b1_1809",
    "word": "combine",
    "pos": "v.",
    "meaning": "รวมกัน",
    "reading": "ค้า ม บ่าย น",
    "ipa": "k ˈɑː m b aɪ n",
    "level": "B1"
  },
  {
    "id": "b1_1810",
    "word": "comment",
    "pos": "v.",
    "meaning": "ความคิดเห็น",
    "reading": "ค้า เหมะ น ถึ",
    "ipa": "k ˈɑː m e n t",
    "level": "B1"
  },
  {
    "id": "b1_1811",
    "word": "commercial",
    "pos": "adj., n.",
    "meaning": "ทางการค้า",
    "reading": "เม้อ ร เฉอะ ล เขอะ",
    "ipa": "k ʌ m ˈɜːʴ ʃ ʌ l",
    "level": "B1"
  },
  {
    "id": "b1_1812",
    "word": "commit",
    "pos": "v.",
    "meaning": "ให้สัญญา",
    "reading": "มิ ถึ เขอะ",
    "ipa": "k ʌ m ˈɪ t",
    "level": "B1"
  },
  {
    "id": "b1_1813",
    "word": "communication",
    "pos": "n.",
    "meaning": "เขอะ การสื่อสาร",
    "reading": "ยู เหนอะ เค้ เฉอะ น ม",
    "ipa": "k ʌ m j ˌuː n ʌ k ˈeɪ ʃ ʌ n",
    "level": "B1"
  },
  {
    "id": "b1_1814",
    "word": "comparison",
    "pos": "n.",
    "meaning": "เขอะ การเปรียบเทียบ",
    "reading": "แพ้ (ร) เออะ เสอะ น ม",
    "ipa": "k ʌ m p ˈe r ʌ s ʌ n",
    "level": "B1"
  },
  {
    "id": "b1_1815",
    "word": "competitor",
    "pos": "n.",
    "meaning": "คู่แข่ง",
    "reading": "เพ้ะ เถอะ เถ่อ ร เขอะ ม",
    "ipa": "k ʌ m p ˈe t ʌ t ɜːʴ",
    "level": "B1"
  },
  {
    "id": "b1_1816",
    "word": "competitive",
    "pos": "adj.",
    "meaning": "การแข่งขัน",
    "reading": "เพ้ะ เถอะ ถิ่ ฝึ เขอะ ม",
    "ipa": "k ʌ m p ˈe t ʌ t ɪ v",
    "level": "B1"
  },
  {
    "id": "b1_1817",
    "word": "complaint",
    "pos": "n.",
    "meaning": "ร้องเรียน",
    "reading": "เพล้ น ถึ เขอะ ม",
    "ipa": "k ʌ m p l ˈeɪ n t",
    "level": "B1"
  },
  {
    "id": "b1_1818",
    "word": "complex",
    "pos": "adj.",
    "meaning": "ซับซ้อน",
    "reading": "ค้า ม เผละ ขึ สึ",
    "ipa": "k ˈɑː m p l e k s",
    "level": "B1"
  },
  {
    "id": "b1_1819",
    "word": "concentrate",
    "pos": "v.",
    "meaning": "สมาธิ",
    "reading": "ค้า น เสอะ น เทร ถึ",
    "ipa": "k ˈɑː n s ʌ n t r ˌeɪ t",
    "level": "B1"
  },
  {
    "id": "b1_1820",
    "word": "conclude",
    "pos": "v.",
    "meaning": "สรุป",
    "reading": "คลู้ ดึ เขอะ น",
    "ipa": "k ʌ n k l ˈuː d",
    "level": "B1"
  },
  {
    "id": "b1_1821",
    "word": "conclusion",
    "pos": "n.",
    "meaning": "บทสรุป",
    "reading": "คลู้ เฉอะ น เขอะ น",
    "ipa": "k ʌ n k l ˈuː ʒ ʌ n",
    "level": "B1"
  },
  {
    "id": "b1_1822",
    "word": "confident",
    "pos": "adj.",
    "meaning": "มั่นใจ",
    "reading": "ค้า น เฝอะ เดอะ น ถึ",
    "ipa": "k ˈɑː n f ʌ d ʌ n t",
    "level": "B1"
  },
  {
    "id": "b1_1823",
    "word": "confirm",
    "pos": "v.",
    "meaning": "ยืนยัน",
    "reading": "เฟ้อ ร ม เขอะ น",
    "ipa": "k ʌ n f ˈɜːʴ m",
    "level": "B1"
  },
  {
    "id": "b1_1824",
    "word": "confuse",
    "pos": "v.",
    "meaning": "สับสน",
    "reading": "ฝึ ยู้ สึ เขอะ น",
    "ipa": "k ʌ n f j ˈuː z",
    "level": "B1"
  },
  {
    "id": "b1_1825",
    "word": "confused",
    "pos": "adj.",
    "meaning": "สับสน",
    "reading": "ฝึ ยู้ สึ ดึ เขอะ น",
    "ipa": "k ʌ n f j ˈuː z d",
    "level": "B1"
  },
  {
    "id": "b1_1826",
    "word": "connection",
    "pos": "n.",
    "meaning": "การเชื่อมต่อ",
    "reading": "เน้ะ ขึ เฉอะ น เขอะ",
    "ipa": "k ʌ n ˈe k ʃ ʌ n",
    "level": "B1"
  },
  {
    "id": "b1_1827",
    "word": "consequence",
    "pos": "n.",
    "meaning": "ผลที่ตามมา",
    "reading": "ค้า น เสอะ เขวอะ น สึ",
    "ipa": "k ˈɑː n s ʌ k w ʌ n s",
    "level": "B1"
  },
  {
    "id": "b1_1828",
    "word": "consist",
    "pos": "v.",
    "meaning": "ประกอบด้วย",
    "reading": "ซิ สึ ถึ เขอะ น",
    "ipa": "k ʌ n s ˈɪ s t",
    "level": "B1"
  },
  {
    "id": "b1_1829",
    "word": "consume",
    "pos": "v.",
    "meaning": "บริโภค",
    "reading": "ซู้ ม เขอะ น",
    "ipa": "k ʌ n s ˈuː m",
    "level": "B1"
  },
  {
    "id": "b1_1830",
    "word": "consumer",
    "pos": "n.",
    "meaning": "ผู้บริโภค",
    "reading": "เขอะ น ซู้ เหม่อ ร",
    "ipa": "k ʌ n s ˈuː m ɜːʴ",
    "level": "B1"
  },
  {
    "id": "b1_1831",
    "word": "contact",
    "pos": "n., v.",
    "meaning": "ติดต่อ",
    "reading": "ค้า น แท ขึ ถึ",
    "ipa": "k ˈɑː n t ˌæ k t",
    "level": "B1"
  },
  {
    "id": "b1_1832",
    "word": "container",
    "pos": "n.",
    "meaning": "คอนเทนเนอร์",
    "reading": "เท้ เหน่อ ร เขอะ น",
    "ipa": "k ʌ n t ˈeɪ n ɜːʴ",
    "level": "B1"
  },
  {
    "id": "b1_1833",
    "word": "content",
    "pos": "n.",
    "meaning": "เนื้อหา",
    "reading": "ค้า น เถะ น ถึ",
    "ipa": "k ˈɑː n t e n t",
    "level": "B1"
  },
  {
    "id": "b1_1834",
    "word": "continuous",
    "pos": "adj.",
    "meaning": "อย่างต่อเนื่อง",
    "reading": "ทิ น หยู่ เออะ สึ เขอะ น",
    "ipa": "k ʌ n t ˈɪ n j uː ʌ s",
    "level": "B1"
  },
  {
    "id": "b1_1835",
    "word": "contrast",
    "pos": "n., v.",
    "meaning": "ตัดกัน",
    "reading": "ค้า น แถร่ สึ ถึ",
    "ipa": "k ˈɑː n t r æ s t",
    "level": "B1"
  },
  {
    "id": "b1_1836",
    "word": "convenient",
    "pos": "adj.",
    "meaning": "สะดวก",
    "reading": "ฟี้ น เหยอะ น ถึ เขอะ น",
    "ipa": "k ʌ n v ˈiː n j ʌ n t",
    "level": "B1"
  },
  {
    "id": "b1_1837",
    "word": "convince",
    "pos": "v.",
    "meaning": "โน้มน้าวใจ",
    "reading": "ฟิ น สึ เขอะ น",
    "ipa": "k ʌ n v ˈɪ n s",
    "level": "B1"
  },
  {
    "id": "b1_1838",
    "word": "cool",
    "pos": "v.",
    "meaning": "เย็น",
    "reading": "คู ล",
    "ipa": "k ˈuː l",
    "level": "B1"
  },
  {
    "id": "b1_1839",
    "word": "costume",
    "pos": "n.",
    "meaning": "ชุดแต่งกาย",
    "reading": "ข่า สึ ทู้ ม",
    "ipa": "k ɑː s t ˈuː m",
    "level": "B1"
  },
  {
    "id": "b1_1840",
    "word": "cottage",
    "pos": "n.",
    "meaning": "กระท่อม",
    "reading": "ค้า เถอะ จึ",
    "ipa": "k ˈɑː t ʌ dʒ",
    "level": "B1"
  },
  {
    "id": "b1_1841",
    "word": "cotton",
    "pos": "n.",
    "meaning": "ฝ้าย",
    "reading": "ค้า เถอะ น",
    "ipa": "k ˈɑː t ʌ n",
    "level": "B1"
  },
  {
    "id": "b1_1842",
    "word": "count",
    "pos": "n.",
    "meaning": "นับ",
    "reading": "ถึ คาว น",
    "ipa": "k ˈaʊ n t",
    "level": "B1"
  },
  {
    "id": "b1_1843",
    "word": "countryside",
    "pos": "n.",
    "meaning": "ชนบท",
    "reading": "ถรี่ ซาย ดึ คะ น",
    "ipa": "k ˈʌ n t r iː s ˌaɪ d",
    "level": "B1"
  },
  {
    "id": "b1_1844",
    "word": "court",
    "pos": "n.",
    "meaning": "ศาล",
    "reading": "ถึ คอ ร",
    "ipa": "k ˈɔː r t",
    "level": "B1"
  },
  {
    "id": "b1_1845",
    "word": "cover",
    "pos": "n.",
    "meaning": "ปิดบัง",
    "reading": "เฝ่อ ร คะ",
    "ipa": "k ˈʌ v ɜːʴ",
    "level": "B1"
  },
  {
    "id": "b1_1846",
    "word": "covered",
    "pos": "adj.",
    "meaning": "ครอบคลุม",
    "reading": "เฝ่อ ร ดึ คะ",
    "ipa": "k ˈʌ v ɜːʴ d",
    "level": "B1"
  },
  {
    "id": "b1_1847",
    "word": "cream",
    "pos": "adj.",
    "meaning": "ครีม",
    "reading": "ครี ม",
    "ipa": "k r ˈiː m",
    "level": "B1"
  },
  {
    "id": "b1_1848",
    "word": "criminal",
    "pos": "adj.",
    "meaning": "อาชญากร",
    "reading": "คริ เหมอะ เหนอะ ล",
    "ipa": "k r ˈɪ m ʌ n ʌ l",
    "level": "B1"
  },
  {
    "id": "b1_1849",
    "word": "cruel",
    "pos": "adj.",
    "meaning": "โหดร้าย",
    "reading": "ครู้ เออะ ล",
    "ipa": "k r ˈuː ʌ l",
    "level": "B1"
  },
  {
    "id": "b1_1850",
    "word": "cultural",
    "pos": "adj.",
    "meaning": "ทางวัฒนธรรม",
    "reading": "เฉ่อ ร เหรอะ ล คะ ล",
    "ipa": "k ˈʌ l tʃ ɜːʴ ʌ l",
    "level": "B1"
  },
  {
    "id": "b1_1851",
    "word": "currency",
    "pos": "n.",
    "meaning": "สกุลเงิน",
    "reading": "เค้อ ร เหรอะ น สี่",
    "ipa": "k ˈɜːʴ ʌ n s iː",
    "level": "B1"
  },
  {
    "id": "b1_1852",
    "word": "current",
    "pos": "adj.",
    "meaning": "ปัจจุบัน",
    "reading": "เค้อ ร เหรอะ น ถึ",
    "ipa": "k ˈɜːʴ ʌ n t",
    "level": "B1"
  },
  {
    "id": "b1_1853",
    "word": "currently",
    "pos": "adv.",
    "meaning": "ตอนนี้",
    "reading": "เค้อ ร เหรอะ น ถลี่",
    "ipa": "k ˈɜːʴ ʌ n t l iː",
    "level": "B1"
  },
  {
    "id": "b1_1854",
    "word": "curtain",
    "pos": "n.",
    "meaning": "ม่าน",
    "reading": "เค้อ ร เถอะ น",
    "ipa": "k ˈɜːʴ t ʌ n",
    "level": "B1"
  },
  {
    "id": "b1_1855",
    "word": "custom",
    "pos": "n.",
    "meaning": "กำหนดเอง",
    "reading": "สึ เถอะ ม คะ",
    "ipa": "k ˈʌ s t ʌ m",
    "level": "B1"
  },
  {
    "id": "b1_1856",
    "word": "cut",
    "pos": "n.",
    "meaning": "ตัด",
    "reading": "ถึ คะ",
    "ipa": "k ˈʌ t",
    "level": "B1"
  },
  {
    "id": "b1_1857",
    "word": "daily",
    "pos": "adv.",
    "meaning": "รายวัน",
    "reading": "เด๊ หลี่",
    "ipa": "d ˈeɪ l iː",
    "level": "B1"
  },
  {
    "id": "b1_1858",
    "word": "damage",
    "pos": "n., v.",
    "meaning": "ความเสียหาย",
    "reading": "แด๊ เหมอะ จึ",
    "ipa": "d ˈæ m ʌ dʒ",
    "level": "B1"
  },
  {
    "id": "b1_1859",
    "word": "deal",
    "pos": "n.",
    "meaning": "ข้อเสนอ",
    "reading": "ดี ล",
    "ipa": "d ˈiː l",
    "level": "B1"
  },
  {
    "id": "b1_1860",
    "word": "decade",
    "pos": "n.",
    "meaning": "ทศวรรษ",
    "reading": "เค้ ดึ เดะ",
    "ipa": "d e k ˈeɪ d",
    "level": "B1"
  },
  {
    "id": "b1_1861",
    "word": "decorate",
    "pos": "v.",
    "meaning": "ตกแต่ง",
    "reading": "เด๊ะ เข่อ ร เร ถึ",
    "ipa": "d ˈe k ɜːʴ ˌeɪ t",
    "level": "B1"
  },
  {
    "id": "b1_1862",
    "word": "deep",
    "pos": "adv.",
    "meaning": "ลึก",
    "reading": "ดี ผึ",
    "ipa": "d ˈiː p",
    "level": "B1"
  },
  {
    "id": "b1_1863",
    "word": "define",
    "pos": "v.",
    "meaning": "กำหนด",
    "reading": "ดิ ฟ้าย น",
    "ipa": "d ɪ f ˈaɪ n",
    "level": "B1"
  },
  {
    "id": "b1_1864",
    "word": "definite",
    "pos": "adj.",
    "meaning": "แน่นอน",
    "reading": "เด๊ะ เฝอะ เหนอะ ถึ",
    "ipa": "d ˈe f ʌ n ʌ t",
    "level": "B1"
  },
  {
    "id": "b1_1865",
    "word": "definition",
    "pos": "n.",
    "meaning": "คำนิยาม",
    "reading": "นิ เฉอะ น เดะ เฝอะ",
    "ipa": "d ˌe f ʌ n ˈɪ ʃ ʌ n",
    "level": "B1"
  },
  {
    "id": "b1_1866",
    "word": "deliver",
    "pos": "v.",
    "meaning": "ส่งมอบ",
    "reading": "ดิ ลิ เฝ่อ ร",
    "ipa": "d ɪ l ˈɪ v ɜːʴ",
    "level": "B1"
  },
  {
    "id": "b1_1867",
    "word": "departure",
    "pos": "n.",
    "meaning": "การออกเดินทาง",
    "reading": "ดิ พ้า (ร) เฉ่อ ร",
    "ipa": "d ɪ p ˈɑː r tʃ ɜːʴ",
    "level": "B1"
  },
  {
    "id": "b1_1868",
    "word": "despite",
    "pos": "prep.",
    "meaning": "ถึงอย่างไรก็ตาม",
    "reading": "ดิ สึ พ้าย ถึ",
    "ipa": "d ɪ s p ˈaɪ t",
    "level": "B1"
  },
  {
    "id": "b1_1869",
    "word": "destination",
    "pos": "n.",
    "meaning": "ปลายทาง",
    "reading": "สึ เถอะ เน้ เฉอะ น เดะ",
    "ipa": "d ˌe s t ʌ n ˈeɪ ʃ ʌ n",
    "level": "B1"
  },
  {
    "id": "b1_1870",
    "word": "determine",
    "pos": "v.",
    "meaning": "กำหนด",
    "reading": "เท้อ ร เหมอะ น เดอะ",
    "ipa": "d ʌ t ˈɜːʴ m ʌ n",
    "level": "B1"
  },
  {
    "id": "b1_1871",
    "word": "determined",
    "pos": "adj.",
    "meaning": "มุ่งมั่น",
    "reading": "ดิ เท้อ ร เหมอะ น ดึ",
    "ipa": "d ɪ t ˈɜːʴ m ʌ n d",
    "level": "B1"
  },
  {
    "id": "b1_1872",
    "word": "development",
    "pos": "n.",
    "meaning": "ดิ การพัฒนา",
    "reading": "เฟ้ะ เหลอะ ผึ เหมอะ น ถึ",
    "ipa": "d ɪ v ˈe l ʌ p m ʌ n t",
    "level": "B1"
  },
  {
    "id": "b1_1873",
    "word": "diagram",
    "pos": "n.",
    "meaning": "แผนภาพ",
    "reading": "ด๊าย เออะ แกร ม",
    "ipa": "d ˈaɪ ʌ g r ˌæ m",
    "level": "B1"
  },
  {
    "id": "b1_1874",
    "word": "diamond",
    "pos": "n.",
    "meaning": "เพชร",
    "reading": "ด๊าย เหมอะ น ดึ",
    "ipa": "d ˈaɪ m ʌ n d",
    "level": "B1"
  },
  {
    "id": "b1_1875",
    "word": "difficulty",
    "pos": "n.",
    "meaning": "ความยากลำบาก",
    "reading": "ดิ้ เฝอะ เขอะ ล ถี่",
    "ipa": "d ˈɪ f ʌ k ʌ l t iː",
    "level": "B1"
  },
  {
    "id": "b1_1876",
    "word": "direct",
    "pos": "v., adv.",
    "meaning": "โดยตรง",
    "reading": "เด่อ ร เร้ะ ขึ ถึ",
    "ipa": "d ɜːʴ ˈe k t",
    "level": "B1"
  },
  {
    "id": "b1_1877",
    "word": "directly",
    "pos": "adv.",
    "meaning": "โดยตรง",
    "reading": "เด่อ ร เร้ะ ขึ ถลี่",
    "ipa": "d ɜːʴ ˈe k t l iː",
    "level": "B1"
  },
  {
    "id": "b1_1878",
    "word": "dirt",
    "pos": "n.",
    "meaning": "สิ่งสกปรก",
    "reading": "ถึ เดอ ร",
    "ipa": "d ˈɜːʴ t",
    "level": "B1"
  },
  {
    "id": "b1_1879",
    "word": "disadvantage",
    "pos": "n.",
    "meaning": "ข้อเสียเปรียบ",
    "reading": "ดิ เสอะ ดึ แฟ้ น ถิ่ จึ",
    "ipa": "d ˌɪ s ʌ d v ˈæ n t ɪ dʒ",
    "level": "B1"
  },
  {
    "id": "b1_1880",
    "word": "disappointed",
    "pos": "adj.",
    "meaning": "ที่ผิดหวัง",
    "reading": "ดิ เสอะ พ้อย น ถิ่ ดึ",
    "ipa": "d ˌɪ s ʌ p ˈɔɪ n t ɪ d",
    "level": "B1"
  },
  {
    "id": "b1_1881",
    "word": "disappointing",
    "pos": "adj.",
    "meaning": "น่าผิดหวัง",
    "reading": "ดิ เสอะ พ้อย น ถิ่ ง",
    "ipa": "d ˌɪ s ʌ p ˈɔɪ n t ɪ ŋ",
    "level": "B1"
  },
  {
    "id": "b1_1882",
    "word": "discount",
    "pos": "n.",
    "meaning": "การลดราคา",
    "reading": "ดิ้ สึ ข่าว น ถึ",
    "ipa": "d ˈɪ s k aʊ n t",
    "level": "B1"
  },
  {
    "id": "b1_1883",
    "word": "dislike",
    "pos": "v., n.",
    "meaning": "ไม่ชอบ",
    "reading": "ดิ สึ ล้าย ขึ",
    "ipa": "d ɪ s l ˈaɪ k",
    "level": "B1"
  },
  {
    "id": "b1_1884",
    "word": "divide",
    "pos": "v.",
    "meaning": "แบ่ง",
    "reading": "ดิ ฟ้าย ดึ",
    "ipa": "d ɪ v ˈaɪ d",
    "level": "B1"
  },
  {
    "id": "b1_1885",
    "word": "documentary",
    "pos": "n.",
    "meaning": "ดา สารคดี",
    "reading": "ขึ เหยอะ เม้ะ น เถ่อ ร หรี่",
    "ipa": "d ˌɑː k j ʌ m ˈe n t ɜːʴ iː",
    "level": "B1"
  },
  {
    "id": "b1_1886",
    "word": "donate",
    "pos": "v.",
    "meaning": "บริจาค",
    "reading": "โด๊ว เน ถึ",
    "ipa": "d ˈəʊ n ˌeɪ t",
    "level": "B1"
  },
  {
    "id": "b1_1887",
    "word": "double",
    "pos": "adv.",
    "meaning": "สองเท่า",
    "reading": "ด๊ะ เบอะ ล",
    "ipa": "d ˈʌ b ʌ l",
    "level": "B1"
  },
  {
    "id": "b1_1888",
    "word": "doubt",
    "pos": "n., v.",
    "meaning": "สงสัย",
    "reading": "ถึ ดาว",
    "ipa": "d ˈaʊ t",
    "level": "B1"
  },
  {
    "id": "b1_1889",
    "word": "dressed",
    "pos": "adj.",
    "meaning": "แต่งตัว",
    "reading": "สึ ถึ เดระ",
    "ipa": "d r ˈe s t",
    "level": "B1"
  },
  {
    "id": "b1_1890",
    "word": "drop",
    "pos": "n.",
    "meaning": "หยด",
    "reading": "ผึ ดรา",
    "ipa": "d r ˈɑː p",
    "level": "B1"
  },
  {
    "id": "b1_1891",
    "word": "drum",
    "pos": "n.",
    "meaning": "กลอง",
    "reading": "ดระ ม",
    "ipa": "d r ˈʌ m",
    "level": "B1"
  },
  {
    "id": "b1_1892",
    "word": "drunk",
    "pos": "adj.",
    "meaning": "เมา",
    "reading": "ขึ ดระ ง",
    "ipa": "d r ˈʌ ŋ k",
    "level": "B1"
  },
  {
    "id": "b1_1893",
    "word": "due",
    "pos": "adj.",
    "meaning": "เนื่องจาก",
    "reading": "ดู",
    "ipa": "d ˈuː",
    "level": "B1"
  },
  {
    "id": "b1_1894",
    "word": "dust",
    "pos": "n.",
    "meaning": "ฝุ่น",
    "reading": "สึ ถึ ดะ",
    "ipa": "d ˈʌ s t",
    "level": "B1"
  },
  {
    "id": "b1_1895",
    "word": "duty",
    "pos": "n.",
    "meaning": "หน้าที่",
    "reading": "ดู๊ ถี่",
    "ipa": "d ˈuː t iː",
    "level": "B1"
  },
  {
    "id": "b1_1896",
    "word": "earthquake",
    "pos": "n.",
    "meaning": "แผ่นดินไหว",
    "reading": "เอ๊อ ร ตึ เคว ขึ",
    "ipa": "ˈɜːʴ θ k w ˌeɪ k",
    "level": "B1"
  },
  {
    "id": "b1_1897",
    "word": "eastern",
    "pos": "adj.",
    "meaning": "ตะวันออก",
    "reading": "อี๊ สึ เถ่อ ร น",
    "ipa": "ˈiː s t ɜːʴ n",
    "level": "B1"
  },
  {
    "id": "b1_1898",
    "word": "economic",
    "pos": "adj.",
    "meaning": "ทางเศรษฐกิจ",
    "reading": "น้า หมิ่ ขึ เอะ เขอะ",
    "ipa": "ˌe k ʌ n ˈɑː m ɪ k",
    "level": "B1"
  },
  {
    "id": "b1_1899",
    "word": "economy",
    "pos": "n.",
    "meaning": "เศรษฐกิจ",
    "reading": "อิ ค้า เหนอะ หมี่",
    "ipa": "ɪ k ˈɑː n ʌ m iː",
    "level": "B1"
  },
  {
    "id": "b1_1900",
    "word": "edge",
    "pos": "n.",
    "meaning": "ขอบ",
    "reading": "จึ เอะ",
    "ipa": "ˈe dʒ",
    "level": "B1"
  },
  {
    "id": "b1_1901",
    "word": "editor",
    "pos": "n.",
    "meaning": "บรรณาธิการ",
    "reading": "เอ๊ะ เดอะ เถ่อ ร",
    "ipa": "ˈe d ʌ t ɜːʴ",
    "level": "B1"
  },
  {
    "id": "b1_1902",
    "word": "educate",
    "pos": "v.",
    "meaning": "ให้ความรู้",
    "reading": "เอ๊ะ เจอะ เค ถึ",
    "ipa": "ˈe dʒ ʌ k ˌeɪ t",
    "level": "B1"
  },
  {
    "id": "b1_1903",
    "word": "educated",
    "pos": "adj.",
    "meaning": "มีการศึกษา",
    "reading": "เอ๊ะ เจอะ เค ถิ่ ดึ",
    "ipa": "ˈe dʒ ʌ k ˌeɪ t ɪ d",
    "level": "B1"
  },
  {
    "id": "b1_1904",
    "word": "educational",
    "pos": "adj.",
    "meaning": "เอะ เกี่ยวกับการศึกษา",
    "reading": "เค้ เฉอะ เหนอะ ล เจอะ",
    "ipa": "ˌe dʒ ʌ k ˈeɪ ʃ ʌ n ʌ l",
    "level": "B1"
  },
  {
    "id": "b1_1905",
    "word": "effective",
    "pos": "adj.",
    "meaning": "มีประสิทธิภาพ",
    "reading": "อิ เฟ้ะ ขึ ถิ่ ฝึ",
    "ipa": "ɪ f ˈe k t ɪ v",
    "level": "B1"
  },
  {
    "id": "b1_1906",
    "word": "effectively",
    "pos": "adv.",
    "meaning": "อย่างมีประสิทธิภาพ",
    "reading": "อิ เฟ้ะ ขึ ถิ่ ฝึ หลี่",
    "ipa": "ɪ f ˈe k t ɪ v l iː",
    "level": "B1"
  },
  {
    "id": "b1_1907",
    "word": "effort",
    "pos": "n.",
    "meaning": "ความพยายาม",
    "reading": "เอ๊ะ เฝ่อ ร ถึ",
    "ipa": "ˈe f ɜːʴ t",
    "level": "B1"
  },
  {
    "id": "b1_1908",
    "word": "election",
    "pos": "n.",
    "meaning": "การเลือกตั้ง",
    "reading": "อิ เล้ะ ขึ เฉอะ น",
    "ipa": "ɪ l ˈe k ʃ ʌ n",
    "level": "B1"
  },
  {
    "id": "b1_1909",
    "word": "element",
    "pos": "n.",
    "meaning": "องค์ประกอบ",
    "reading": "เอ๊ะ เหลอะ เหมอะ น ถึ",
    "ipa": "ˈe l ʌ m ʌ n t",
    "level": "B1"
  },
  {
    "id": "b1_1910",
    "word": "embarrassed",
    "pos": "adj.",
    "meaning": "เขินอาย",
    "reading": "อิ ม แบ๊ (ร) เออะ สึ ถึ",
    "ipa": "ɪ m b ˈe r ʌ s t",
    "level": "B1"
  },
  {
    "id": "b1_1911",
    "word": "embarrassing",
    "pos": "adj.",
    "meaning": "น่าอาย",
    "reading": "อิ ม แบ๊ (ร) เออะ สิ่ ง",
    "ipa": "ɪ m b ˈe r ʌ s ɪ ŋ",
    "level": "B1"
  },
  {
    "id": "b1_1912",
    "word": "emergency",
    "pos": "n.",
    "meaning": "ภาวะฉุกเฉิน",
    "reading": "อิ เม้อ ร เจอะ น สี่",
    "ipa": "ɪ m ˈɜːʴ dʒ ʌ n s iː",
    "level": "B1"
  },
  {
    "id": "b1_1913",
    "word": "emotion",
    "pos": "n.",
    "meaning": "อารมณ์",
    "reading": "อิ โม้ว เฉอะ น",
    "ipa": "ɪ m ˈəʊ ʃ ʌ n",
    "level": "B1"
  },
  {
    "id": "b1_1914",
    "word": "employment",
    "pos": "n.",
    "meaning": "การจ้างงาน",
    "reading": "พล้อย เหมอะ น ถึ เอะ ม",
    "ipa": "e m p l ˈɔɪ m ʌ n t",
    "level": "B1"
  },
  {
    "id": "b1_1915",
    "word": "empty",
    "pos": "v.",
    "meaning": "ว่างเปล่า",
    "reading": "เอ๊ะ ม ผึ ถี่",
    "ipa": "ˈe m p t iː",
    "level": "B1"
  },
  {
    "id": "b1_1916",
    "word": "encourage",
    "pos": "v.",
    "meaning": "ให้กำลังใจ",
    "reading": "เค้อ ร หริ่ จึ เอะ น",
    "ipa": "e n k ˈɜːʴ ɪ dʒ",
    "level": "B1"
  },
  {
    "id": "b1_1917",
    "word": "enemy",
    "pos": "n.",
    "meaning": "ศัตรู",
    "reading": "เอ๊ะ เหนอะ หมี่",
    "ipa": "ˈe n ʌ m iː",
    "level": "B1"
  },
  {
    "id": "b1_1918",
    "word": "engaged",
    "pos": "adj.",
    "meaning": "มีส่วนร่วม",
    "reading": "เก๊ จึ ดึ เอะ น",
    "ipa": "e n g ˈeɪ dʒ d",
    "level": "B1"
  },
  {
    "id": "b1_1919",
    "word": "engineering",
    "pos": "n.",
    "meaning": "วิศวกรรม",
    "reading": "เอ๊ะ น เจอะ เนี้ย (ร) อิ่ ง",
    "ipa": "ˈe n dʒ ʌ n ˈɪ r ɪ ŋ",
    "level": "B1"
  },
  {
    "id": "b1_1920",
    "word": "entertain",
    "pos": "v.",
    "meaning": "ความบันเทิง",
    "reading": "เถ่อ ร เท้ น เอะ น",
    "ipa": "ˌe n t ɜːʴ t ˈeɪ n",
    "level": "B1"
  },
  {
    "id": "b1_1921",
    "word": "entertainment",
    "pos": "n.",
    "meaning": "เอะ ความบันเทิง",
    "reading": "เถ่อ ร เท้ น เหมอะ น ถึ น",
    "ipa": "ˌe n t ɜːʴ t ˈeɪ n m ʌ n t",
    "level": "B1"
  },
  {
    "id": "b1_1922",
    "word": "entrance",
    "pos": "n.",
    "meaning": "ทางเข้า",
    "reading": "เอ๊ะ น เถรอะ น สึ",
    "ipa": "ˈe n t r ʌ n s",
    "level": "B1"
  },
  {
    "id": "b1_1923",
    "word": "entry",
    "pos": "n.",
    "meaning": "รายการ",
    "reading": "เอ๊ะ น ถรี่",
    "ipa": "ˈe n t r iː",
    "level": "B1"
  },
  {
    "id": "b1_1924",
    "word": "environmental",
    "pos": "adj.",
    "meaning": "อิ น ด้านสิ่งแวดล้อม",
    "reading": "ฟาย เหรอะ น เม้ะ น เถอะ ล",
    "ipa": "ɪ n v ˌaɪ r ʌ n m ˈe n t ʌ l",
    "level": "B1"
  },
  {
    "id": "b1_1925",
    "word": "episode",
    "pos": "n.",
    "meaning": "ตอน",
    "reading": "เอ๊ะ เผอะ โซว ดึ",
    "ipa": "ˈe p ʌ s ˌəʊ d",
    "level": "B1"
  },
  {
    "id": "b1_1926",
    "word": "equal",
    "pos": "adj., v.",
    "meaning": "เท่ากัน",
    "reading": "อี๊ เขวอะ ล",
    "ipa": "ˈiː k w ʌ l",
    "level": "B1"
  },
  {
    "id": "b1_1927",
    "word": "equally",
    "pos": "adv.",
    "meaning": "เท่าๆ กัน",
    "reading": "อี๊ เขวอะ หลี่",
    "ipa": "ˈiː k w ʌ l iː",
    "level": "B1"
  },
  {
    "id": "b1_1928",
    "word": "escape",
    "pos": "v., n.",
    "meaning": "หนี",
    "reading": "อิ สึ เค้ ผึ",
    "ipa": "ɪ s k ˈeɪ p",
    "level": "B1"
  },
  {
    "id": "b1_1929",
    "word": "essential",
    "pos": "adj.",
    "meaning": "จำเป็น",
    "reading": "เซ้ะ น เฉอะ ล เอะ",
    "ipa": "e s ˈe n ʃ ʌ l",
    "level": "B1"
  },
  {
    "id": "b1_1930",
    "word": "eventually",
    "pos": "adv.",
    "meaning": "ในท้ายที่สุด",
    "reading": "อิ เฟ้ะ น เฉอะ เหวอะ หลี่",
    "ipa": "ɪ v ˈe n tʃ ʌ w ʌ l iː",
    "level": "B1"
  },
  {
    "id": "b1_1931",
    "word": "examine",
    "pos": "v.",
    "meaning": "พิจารณา",
    "reading": "อิ กึ แซ้ หมิ่ น",
    "ipa": "ɪ g z ˈæ m ɪ n",
    "level": "B1"
  },
  {
    "id": "b1_1932",
    "word": "except",
    "pos": "conj.",
    "meaning": "ยกเว้น",
    "reading": "อิ ขึ เซ้ะ ผึ ถึ",
    "ipa": "ɪ k s ˈe p t",
    "level": "B1"
  },
  {
    "id": "b1_1933",
    "word": "exchange",
    "pos": "n., v.",
    "meaning": "แลกเปลี่ยน",
    "reading": "อิ ขึ สึ เช้ น จึ",
    "ipa": "ɪ k s tʃ ˈeɪ n dʒ",
    "level": "B1"
  },
  {
    "id": "b1_1934",
    "word": "excitement",
    "pos": "n.",
    "meaning": "ความตื่นเต้น",
    "reading": "อิ ขึ ซ้าย ถึ เหมอะ น ถึ",
    "ipa": "ɪ k s ˈaɪ t m ʌ n t",
    "level": "B1"
  },
  {
    "id": "b1_1935",
    "word": "exhibition",
    "pos": "n.",
    "meaning": "นิทรรศการ",
    "reading": "ขึ เสอะ บิ้ เฉอะ น เอะ",
    "ipa": "ˌe k s ʌ b ˈɪ ʃ ʌ n",
    "level": "B1"
  },
  {
    "id": "b1_1936",
    "word": "expand",
    "pos": "v.",
    "meaning": "ขยาย",
    "reading": "อิ ขึ สึ แพ้ น ดึ",
    "ipa": "ɪ k s p ˈæ n d",
    "level": "B1"
  },
  {
    "id": "b1_1937",
    "word": "expected",
    "pos": "adj.",
    "meaning": "ที่คาดหวัง",
    "reading": "อิ ขึ สึ เพ้ะ ขึ เถอะ ดึ",
    "ipa": "ɪ k s p ˈe k t ʌ d",
    "level": "B1"
  },
  {
    "id": "b1_1938",
    "word": "expedition",
    "pos": "n.",
    "meaning": "การเดินทาง",
    "reading": "ขึ สึ เผอะ ดิ้ เฉอะ น เอะ",
    "ipa": "ˌe k s p ʌ d ˈɪ ʃ ʌ n",
    "level": "B1"
  },
  {
    "id": "b1_1939",
    "word": "experience",
    "pos": "v.",
    "meaning": "อิ ประสบการณ์",
    "reading": "ขึ สึ เพี้ย (ร) อี่ เออะ น สึ",
    "ipa": "ɪ k s p ˈɪ r iː ʌ n s",
    "level": "B1"
  },
  {
    "id": "b1_1940",
    "word": "experienced",
    "pos": "adj.",
    "meaning": "อิ มีประสบการณ์",
    "reading": "ขึ สึ เพี้ย ร อี่ เออะ น สึ ถึ",
    "ipa": "ɪ k s p ˈɪ r iː ʌ n s t",
    "level": "B1"
  },
  {
    "id": "b1_1941",
    "word": "experiment",
    "pos": "v.",
    "meaning": "อิ การทดลอง",
    "reading": "ขึ สึ แพ้ ร เออะ เหมอะ น ถึ",
    "ipa": "ɪ k s p ˈe r ʌ m ʌ n t",
    "level": "B1"
  },
  {
    "id": "b1_1942",
    "word": "explode",
    "pos": "v.",
    "meaning": "ระเบิด",
    "reading": "อิ ขึ สึ โพล้ว ดึ",
    "ipa": "ɪ k s p l ˈəʊ d",
    "level": "B1"
  },
  {
    "id": "b1_1943",
    "word": "explore",
    "pos": "v.",
    "meaning": "สำรวจ",
    "reading": "อิ ขึ สึ พล้อ ร",
    "ipa": "ɪ k s p l ˈɔː r",
    "level": "B1"
  },
  {
    "id": "b1_1944",
    "word": "explosion",
    "pos": "n.",
    "meaning": "การระเบิด",
    "reading": "อิ ขึ สึ โพล้ว เฉอะ น",
    "ipa": "ɪ k s p l ˈəʊ ʒ ʌ n",
    "level": "B1"
  },
  {
    "id": "b1_1945",
    "word": "export",
    "pos": "n., v.",
    "meaning": "ส่งออก",
    "reading": "เอ๊ะ ขึ สึ โผ่ (ร) ถึ",
    "ipa": "ˈe k s p ɔː r t",
    "level": "B1"
  },
  {
    "id": "b1_1946",
    "word": "extra",
    "pos": "n., adv.",
    "meaning": "พิเศษ",
    "reading": "เอ๊ะ ขึ สึ เถรอะ",
    "ipa": "ˈe k s t r ʌ",
    "level": "B1"
  },
  {
    "id": "b1_1947",
    "word": "face",
    "pos": "v.",
    "meaning": "ใบหน้า",
    "reading": "สึ เฟ",
    "ipa": "f ˈeɪ s",
    "level": "B1"
  },
  {
    "id": "b1_1948",
    "word": "fairly",
    "pos": "adv.",
    "meaning": "เป็นธรรม",
    "reading": "แฟ้ ร หลี่",
    "ipa": "f ˈe r l iː",
    "level": "B1"
  },
  {
    "id": "b1_1949",
    "word": "familiar",
    "pos": "adj.",
    "meaning": "คุ้นเคย",
    "reading": "มิ ล เหย่อ ร เฝอะ",
    "ipa": "f ʌ m ˈɪ l j ɜːʴ",
    "level": "B1"
  },
  {
    "id": "b1_1950",
    "word": "fancy",
    "pos": "v., adj.",
    "meaning": "ไม่ธรรมดา",
    "reading": "แฟ้ น สี่",
    "ipa": "f ˈæ n s iː",
    "level": "B1"
  },
  {
    "id": "b1_1951",
    "word": "far",
    "pos": "adj.",
    "meaning": "ไกล",
    "reading": "ฟา (ร)",
    "ipa": "f ˈɑː r",
    "level": "B1"
  },
  {
    "id": "b1_1952",
    "word": "fascinating",
    "pos": "adj.",
    "meaning": "น่าหลงใหล",
    "reading": "แฟ้ เสอะ เน ถิ่ ง",
    "ipa": "f ˈæ s ʌ n ˌeɪ t ɪ ŋ",
    "level": "B1"
  },
  {
    "id": "b1_1953",
    "word": "fashionable",
    "pos": "adj.",
    "meaning": "ทันสมัย",
    "reading": "แฟ้ เฉอะ เหนอะ เบอะ ล",
    "ipa": "f ˈæ ʃ ʌ n ʌ b ʌ l",
    "level": "B1"
  },
  {
    "id": "b1_1954",
    "word": "fasten",
    "pos": "v.",
    "meaning": "ยึด",
    "reading": "แฟ้ เสอะ น",
    "ipa": "f ˈæ s ʌ n",
    "level": "B1"
  },
  {
    "id": "b1_1955",
    "word": "favour",
    "pos": "n.",
    "meaning": "โปรดปราน",
    "reading": "เฟ้ เฝ่อ ร",
    "ipa": "f ˈeɪ v ɜːʴ",
    "level": "B1"
  },
  {
    "id": "b1_1956",
    "word": "fear",
    "pos": "v.",
    "meaning": "กลัว",
    "reading": "เฟีย (ร)",
    "ipa": "f ˈɪ r",
    "level": "B1"
  },
  {
    "id": "b1_1957",
    "word": "feature",
    "pos": "v.",
    "meaning": "คุณสมบัติ",
    "reading": "ฟี้ เฉ่อ ร",
    "ipa": "f ˈiː tʃ ɜːʴ",
    "level": "B1"
  },
  {
    "id": "b1_1958",
    "word": "fence",
    "pos": "n.",
    "meaning": "รั้ว",
    "reading": "สึ เฟะ น",
    "ipa": "f ˈe n s",
    "level": "B1"
  },
  {
    "id": "b1_1959",
    "word": "fighting",
    "pos": "n.",
    "meaning": "การต่อสู้",
    "reading": "ฟ้าย ถิ่ ง",
    "ipa": "f ˈaɪ t ɪ ŋ",
    "level": "B1"
  },
  {
    "id": "b1_1960",
    "word": "file",
    "pos": "n.",
    "meaning": "ไฟล์",
    "reading": "ฟาย ล",
    "ipa": "f ˈaɪ l",
    "level": "B1"
  },
  {
    "id": "b1_1961",
    "word": "financial",
    "pos": "adj.",
    "meaning": "การเงิน",
    "reading": "แน้ น เฉอะ ล เฝอะ",
    "ipa": "f ʌ n ˈæ n ʃ ʌ l",
    "level": "B1"
  },
  {
    "id": "b1_1962",
    "word": "fire",
    "pos": "v.",
    "meaning": "ไฟ",
    "reading": "ฟ้าย เอ่อ ร",
    "ipa": "f ˈaɪ ɜːʴ",
    "level": "B1"
  },
  {
    "id": "b1_1963",
    "word": "fitness",
    "pos": "n.",
    "meaning": "ฟิตเนส",
    "reading": "ฟิ ถึ เหนอะ สึ",
    "ipa": "f ˈɪ t n ʌ s",
    "level": "B1"
  },
  {
    "id": "b1_1964",
    "word": "fixed",
    "pos": "adj.",
    "meaning": "ที่ตายตัว",
    "reading": "ฟิ ขึ สึ ถึ",
    "ipa": "f ˈɪ k s t",
    "level": "B1"
  },
  {
    "id": "b1_1965",
    "word": "flag",
    "pos": "n.",
    "meaning": "ธง",
    "reading": "กึ แฟล",
    "ipa": "f l ˈæ g",
    "level": "B1"
  },
  {
    "id": "b1_1966",
    "word": "flood",
    "pos": "n., v.",
    "meaning": "น้ำท่วม",
    "reading": "ดึ ฟละ",
    "ipa": "f l ˈʌ d",
    "level": "B1"
  },
  {
    "id": "b1_1967",
    "word": "flour",
    "pos": "n.",
    "meaning": "แป้ง",
    "reading": "ฟล้าว เอ่อ ร",
    "ipa": "f l ˈaʊ ɜːʴ",
    "level": "B1"
  },
  {
    "id": "b1_1968",
    "word": "flow",
    "pos": "v., n.",
    "meaning": "ไหล",
    "reading": "โฟลว",
    "ipa": "f l ˈəʊ",
    "level": "B1"
  },
  {
    "id": "b1_1969",
    "word": "fold",
    "pos": "v.",
    "meaning": "พับ",
    "reading": "ดึ โฟว ล",
    "ipa": "f ˈəʊ l d",
    "level": "B1"
  },
  {
    "id": "b1_1970",
    "word": "folk",
    "pos": "n., adj.",
    "meaning": "พื้นบ้าน",
    "reading": "ขึ โฟว",
    "ipa": "f ˈəʊ k",
    "level": "B1"
  },
  {
    "id": "b1_1971",
    "word": "following",
    "pos": "n.",
    "meaning": "กำลังติดตาม",
    "reading": "ฟ้า โหล่ว อิ่ ง",
    "ipa": "f ˈɑː l əʊ ɪ ŋ",
    "level": "B1"
  },
  {
    "id": "b1_1972",
    "word": "force",
    "pos": "n., v.",
    "meaning": "บังคับ",
    "reading": "สึ โฟ (ร)",
    "ipa": "f ˈɔː r s",
    "level": "B1"
  },
  {
    "id": "b1_1973",
    "word": "forever",
    "pos": "adv.",
    "meaning": "ตลอดไป",
    "reading": "เฝ่อ ร เร้ะ เฝ่อ ร",
    "ipa": "f ɜːʴ ˈe v ɜːʴ",
    "level": "B1"
  },
  {
    "id": "b1_1974",
    "word": "frame",
    "pos": "n., v.",
    "meaning": "กรอบ",
    "reading": "เฟร ม",
    "ipa": "f r ˈeɪ m",
    "level": "B1"
  },
  {
    "id": "b1_1975",
    "word": "freeze",
    "pos": "v.",
    "meaning": "แช่แข็ง",
    "reading": "ฟรี สึ",
    "ipa": "f r ˈiː z",
    "level": "B1"
  },
  {
    "id": "b1_1976",
    "word": "frequently",
    "pos": "adv.",
    "meaning": "บ่อย",
    "reading": "ฟรี้ เขวอะ น ถลี่",
    "ipa": "f r ˈiː k w ʌ n t l iː",
    "level": "B1"
  },
  {
    "id": "b1_1977",
    "word": "friendship",
    "pos": "n.",
    "meaning": "มิตรภาพ",
    "reading": "เฟร้ะ น ดึ ฉิ่ ผึ",
    "ipa": "f r ˈe n d ʃ ɪ p",
    "level": "B1"
  },
  {
    "id": "b1_1978",
    "word": "frighten",
    "pos": "v.",
    "meaning": "ขู่",
    "reading": "ฟร้าย เถอะ น",
    "ipa": "f r ˈaɪ t ʌ n",
    "level": "B1"
  },
  {
    "id": "b1_1979",
    "word": "frightened",
    "pos": "adj.",
    "meaning": "ตระหนก",
    "reading": "ฟร้าย เถอะ น ดึ",
    "ipa": "f r ˈaɪ t ʌ n d",
    "level": "B1"
  },
  {
    "id": "b1_1980",
    "word": "frightening",
    "pos": "adj.",
    "meaning": "น่ากลัว",
    "reading": "ฟร้าย เถอะ หนิ่ ง",
    "ipa": "f r ˈaɪ t ʌ n ɪ ŋ",
    "level": "B1"
  },
  {
    "id": "b1_1981",
    "word": "frozen",
    "pos": "adj.",
    "meaning": "แช่แข็ง",
    "reading": "โฟร้ว เสอะ น",
    "ipa": "f r ˈəʊ z ʌ n",
    "level": "B1"
  },
  {
    "id": "b1_1982",
    "word": "fry",
    "pos": "v.",
    "meaning": "ทอด",
    "reading": "ฟราย",
    "ipa": "f r ˈaɪ",
    "level": "B1"
  },
  {
    "id": "b1_1983",
    "word": "fuel",
    "pos": "n.",
    "meaning": "เชื้อเพลิง",
    "reading": "ฝึ ยู้ เออะ ล",
    "ipa": "f j ˈuː ʌ l",
    "level": "B1"
  },
  {
    "id": "b1_1984",
    "word": "function",
    "pos": "n.",
    "meaning": "การทำงาน",
    "reading": "ขึ เฉอะ น ฟะ ง",
    "ipa": "f ˈʌ ŋ k ʃ ʌ n",
    "level": "B1"
  },
  {
    "id": "b1_1985",
    "word": "fur",
    "pos": "n.",
    "meaning": "ขน",
    "reading": "เฟอ ร",
    "ipa": "f ˈɜːʴ",
    "level": "B1"
  },
  {
    "id": "b1_1986",
    "word": "further",
    "pos": "adv.",
    "meaning": "ไกลออกไป",
    "reading": "เฟ้อ ร เด่อ ร",
    "ipa": "f ˈɜːʴ ð ɜːʴ",
    "level": "B1"
  },
  {
    "id": "b1_1987",
    "word": "garage",
    "pos": "n.",
    "meaning": "โรงรถ",
    "reading": "เก่อ ร ร้า ฉึ",
    "ipa": "g ɜːʴ ˈɑː ʒ",
    "level": "B1"
  },
  {
    "id": "b1_1988",
    "word": "gather",
    "pos": "v.",
    "meaning": "รวมตัว",
    "reading": "แก๊ เด่อ ร",
    "ipa": "g ˈæ ð ɜːʴ",
    "level": "B1"
  },
  {
    "id": "b1_1989",
    "word": "generally",
    "pos": "adv.",
    "meaning": "โดยทั่วไป",
    "reading": "เจ๊ะ เหน่อ ร เหรอะ หลี่",
    "ipa": "dʒ ˈe n ɜːʴ ʌ l iː",
    "level": "B1"
  },
  {
    "id": "b1_1990",
    "word": "generation",
    "pos": "n.",
    "meaning": "รุ่น",
    "reading": "เหน่อ ร เร้ เฉอะ น เจะ",
    "ipa": "dʒ ˌe n ɜːʴ ˈeɪ ʃ ʌ n",
    "level": "B1"
  },
  {
    "id": "b1_1991",
    "word": "generous",
    "pos": "adj.",
    "meaning": "ใจกว้าง",
    "reading": "เจ๊ะ เหน่อ ร เหรอะ สึ",
    "ipa": "dʒ ˈe n ɜːʴ ʌ s",
    "level": "B1"
  },
  {
    "id": "b1_1992",
    "word": "gentle",
    "pos": "adj.",
    "meaning": "อ่อนโยน",
    "reading": "เจ๊ะ น เถอะ ล",
    "ipa": "dʒ ˈe n t ʌ l",
    "level": "B1"
  },
  {
    "id": "b1_1993",
    "word": "gentleman",
    "pos": "n.",
    "meaning": "สุภาพบุรุษ",
    "reading": "เจ๊ะ น เถอะ ล เหมอะ น",
    "ipa": "dʒ ˈe n t ʌ l m ʌ n",
    "level": "B1"
  },
  {
    "id": "b1_1994",
    "word": "ghost",
    "pos": "n.",
    "meaning": "ผี",
    "reading": "สึ ถึ โกว",
    "ipa": "g ˈəʊ s t",
    "level": "B1"
  },
  {
    "id": "b1_1995",
    "word": "giant",
    "pos": "adj., n.",
    "meaning": "ยักษ์",
    "reading": "จ๊าย เออะ น ถึ",
    "ipa": "dʒ ˈaɪ ʌ n t",
    "level": "B1"
  },
  {
    "id": "b1_1996",
    "word": "glad",
    "pos": "adj.",
    "meaning": "ยินดี",
    "reading": "ดึ แกล",
    "ipa": "g l ˈæ d",
    "level": "B1"
  },
  {
    "id": "b1_1997",
    "word": "global",
    "pos": "adj.",
    "meaning": "ทั่วโลก",
    "reading": "โกล๊ว เบอะ ล",
    "ipa": "g l ˈəʊ b ʌ l",
    "level": "B1"
  },
  {
    "id": "b1_1998",
    "word": "glove",
    "pos": "n.",
    "meaning": "ถุงมือ",
    "reading": "ฝึ กละ",
    "ipa": "g l ˈʌ v",
    "level": "B1"
  },
  {
    "id": "b1_1999",
    "word": "go",
    "pos": "n.",
    "meaning": "ไป",
    "reading": "โกว",
    "ipa": "g ˈəʊ",
    "level": "B1"
  },
  {
    "id": "b1_2000",
    "word": "goods",
    "pos": "n.",
    "meaning": "สินค้า",
    "reading": "กุ ดึ สึ",
    "ipa": "g ˈʊ d z",
    "level": "B1"
  },
  {
    "id": "b1_2001",
    "word": "grade",
    "pos": "n.",
    "meaning": "ระดับ",
    "reading": "ดึ เกร",
    "ipa": "g r ˈeɪ d",
    "level": "B1"
  },
  {
    "id": "b1_2002",
    "word": "graduate",
    "pos": "n., v.",
    "meaning": "เรียนจบ",
    "reading": "แกร๊ เจอะ เหวอะ ถึ",
    "ipa": "g r ˈæ dʒ ʌ w ʌ t",
    "level": "B1"
  },
  {
    "id": "b1_2003",
    "word": "grain",
    "pos": "n.",
    "meaning": "เมล็ดพืช",
    "reading": "เกร น",
    "ipa": "g r ˈeɪ n",
    "level": "B1"
  },
  {
    "id": "b1_2004",
    "word": "grateful",
    "pos": "adj.",
    "meaning": "ปลื้มปีติ",
    "reading": "เกร๊ ถึ เฝอะ ล",
    "ipa": "g r ˈeɪ t f ʌ l",
    "level": "B1"
  },
  {
    "id": "b1_2005",
    "word": "growth",
    "pos": "n.",
    "meaning": "การเจริญเติบโต",
    "reading": "ตึ โกรว",
    "ipa": "g r ˈəʊ θ",
    "level": "B1"
  },
  {
    "id": "b1_2006",
    "word": "guard",
    "pos": "n., v.",
    "meaning": "อารักขา",
    "reading": "ดึ กา (ร)",
    "ipa": "g ˈɑː r d",
    "level": "B1"
  },
  {
    "id": "b1_2007",
    "word": "guilty",
    "pos": "adj.",
    "meaning": "รู้สึกผิด",
    "reading": "กิ้ ล ถี่",
    "ipa": "g ˈɪ l t iː",
    "level": "B1"
  },
  {
    "id": "b1_2008",
    "word": "hand",
    "pos": "v.",
    "meaning": "มือ",
    "reading": "ดึ แฮ น",
    "ipa": "h ˈæ n d",
    "level": "B1"
  },
  {
    "id": "b1_2009",
    "word": "hang",
    "pos": "v.",
    "meaning": "แขวน",
    "reading": "แฮ ง",
    "ipa": "h ˈæ ŋ",
    "level": "B1"
  },
  {
    "id": "b1_2010",
    "word": "happiness",
    "pos": "n.",
    "meaning": "ความสุข",
    "reading": "แฮ้ ผี่่ เหนอะ สึ",
    "ipa": "h ˈæ p iː n ʌ s",
    "level": "B1"
  },
  {
    "id": "b1_2011",
    "word": "hardly",
    "pos": "adv.",
    "meaning": "แทบจะไม่",
    "reading": "ฮ้า (ร) ดลี่",
    "ipa": "h ˈɑː r d l iː",
    "level": "B1"
  },
  {
    "id": "b1_2012",
    "word": "hate",
    "pos": "n.",
    "meaning": "เกลียด",
    "reading": "ถึ เฮ",
    "ipa": "h ˈeɪ t",
    "level": "B1"
  },
  {
    "id": "b1_2013",
    "word": "head",
    "pos": "v.",
    "meaning": "ศีรษะ",
    "reading": "ดึ เฮะ",
    "ipa": "h ˈe d",
    "level": "B1"
  },
  {
    "id": "b1_2014",
    "word": "headline",
    "pos": "n.",
    "meaning": "พาดหัว",
    "reading": "เฮ้ะ ดลาย น",
    "ipa": "h ˈe d l ˌaɪ n",
    "level": "B1"
  },
  {
    "id": "b1_2015",
    "word": "heating",
    "pos": "n.",
    "meaning": "เครื่องทำความร้อน",
    "reading": "ฮี้ ถิ่ ง",
    "ipa": "h ˈiː t ɪ ŋ",
    "level": "B1"
  },
  {
    "id": "b1_2016",
    "word": "heavily",
    "pos": "adv.",
    "meaning": "หนักมาก",
    "reading": "เฮ้ะ เฝอะ หลี่",
    "ipa": "h ˈe v ʌ l iː",
    "level": "B1"
  },
  {
    "id": "b1_2017",
    "word": "helicopter",
    "pos": "n.",
    "meaning": "เฮลิคอปเตอร์",
    "reading": "เฮ้ะ หลิ่ คา ผึ เถ่อ ร",
    "ipa": "h ˈe l ɪ k ˌɑː p t ɜːʴ",
    "level": "B1"
  },
  {
    "id": "b1_2018",
    "word": "highlight",
    "pos": "v., n.",
    "meaning": "ไฮไลท์",
    "reading": "ฮ้าย ลาย ถึ",
    "ipa": "h ˈaɪ l ˌaɪ t",
    "level": "B1"
  },
  {
    "id": "b1_2019",
    "word": "highly",
    "pos": "adv.",
    "meaning": "สูง",
    "reading": "ฮ้าย หลี่",
    "ipa": "h ˈaɪ l iː",
    "level": "B1"
  },
  {
    "id": "b1_2020",
    "word": "hire",
    "pos": "v.",
    "meaning": "จ้าง",
    "reading": "ฮ้าย เอ่อ ร",
    "ipa": "h ˈaɪ ɜːʴ",
    "level": "B1"
  },
  {
    "id": "b1_2021",
    "word": "historic",
    "pos": "adj.",
    "meaning": "ประวัติศาสตร์",
    "reading": "หิ่ สึ โท้ (ร) อิ ขึ",
    "ipa": "h ɪ s t ˈɔː r ɪ k",
    "level": "B1"
  },
  {
    "id": "b1_2022",
    "word": "historical",
    "pos": "adj.",
    "meaning": "ประวัติศาสตร์",
    "reading": "หิ่ สึ โท้ (ร) อิ เขอะ ล",
    "ipa": "h ɪ s t ˈɔː r ɪ k ʌ l",
    "level": "B1"
  },
  {
    "id": "b1_2023",
    "word": "honest",
    "pos": "adj.",
    "meaning": "ซื่อสัตย์",
    "reading": "อ๊า เหนอะ สึ ถึ",
    "ipa": "ˈɑː n ʌ s t",
    "level": "B1"
  },
  {
    "id": "b1_2024",
    "word": "horrible",
    "pos": "adj.",
    "meaning": "น่ากลัว",
    "reading": "โฮ้ (ร) เออะ เบอะ ล",
    "ipa": "h ˈɔː r ʌ b ʌ l",
    "level": "B1"
  },
  {
    "id": "b1_2025",
    "word": "horror",
    "pos": "n.",
    "meaning": "สยองขวัญ",
    "reading": "ฮ้อ เหร่อ ร",
    "ipa": "h ˈɔː r ɜːʴ",
    "level": "B1"
  },
  {
    "id": "b1_2026",
    "word": "host",
    "pos": "n.",
    "meaning": "เจ้าภาพ",
    "reading": "โฮว สึ ถึ",
    "ipa": "h ˈəʊ s t",
    "level": "B1"
  },
  {
    "id": "b1_2027",
    "word": "hunt",
    "pos": "v.",
    "meaning": "ล่า",
    "reading": "ถึ ฮะ น",
    "ipa": "h ˈʌ n t",
    "level": "B1"
  },
  {
    "id": "b1_2028",
    "word": "hurricane",
    "pos": "n.",
    "meaning": "พายุเฮอริเคน",
    "reading": "เฮ้อ ร เหรอะ เค น",
    "ipa": "h ˈɜːʴ ʌ k ˌeɪ n",
    "level": "B1"
  },
  {
    "id": "b1_2029",
    "word": "hurry",
    "pos": "n., v.",
    "meaning": "รีบ",
    "reading": "เฮ้อ ร หรี่",
    "ipa": "h ˈɜːʴ iː",
    "level": "B1"
  },
  {
    "id": "b1_2030",
    "word": "identity",
    "pos": "n.",
    "meaning": "ตัวตน",
    "reading": "อ่าย เด๊ะ น ถิ่ ที",
    "ipa": "aɪ d ˈe n t ɪ t ˌiː",
    "level": "B1"
  },
  {
    "id": "b1_2031",
    "word": "ignore",
    "pos": "v.",
    "meaning": "ไม่สนใจ",
    "reading": "อิ กึ โน้ (ร)",
    "ipa": "ˌɪ g n ˈɔː r",
    "level": "B1"
  },
  {
    "id": "b1_2032",
    "word": "illegal",
    "pos": "adj.",
    "meaning": "ผิดกฎหมาย",
    "reading": "อิ ลี้ เกอะ ล",
    "ipa": "ˌɪ l ˈiː g ʌ l",
    "level": "B1"
  },
  {
    "id": "b1_2033",
    "word": "imaginary",
    "pos": "adj.",
    "meaning": "จินตภาพ",
    "reading": "อิ แม้ เจอะ แน (ร) อี่",
    "ipa": "ˌɪ m ˈæ dʒ ʌ n ˌe r iː",
    "level": "B1"
  },
  {
    "id": "b1_2034",
    "word": "immediate",
    "pos": "adj.",
    "meaning": "ทันที",
    "reading": "อิ มี้ ดี เออะ ถึ",
    "ipa": "ˌɪ m ˈiː d ˌiː ʌ t",
    "level": "B1"
  },
  {
    "id": "b1_2035",
    "word": "immigrant",
    "pos": "n.",
    "meaning": "ผู้อพยพ",
    "reading": "อิ้ เหมอะ เกรอะ น ถึ",
    "ipa": "ˈɪ m ʌ g r ʌ n t",
    "level": "B1"
  },
  {
    "id": "b1_2036",
    "word": "impact",
    "pos": "n., v.",
    "meaning": "ผลกระทบ",
    "reading": "อิ้ ม แผ่ ขึ ถึ",
    "ipa": "ˈɪ m p æ k t",
    "level": "B1"
  },
  {
    "id": "b1_2037",
    "word": "import",
    "pos": "n., v.",
    "meaning": "นำเข้า",
    "reading": "อิ้ ม โพ (ร) ถึ",
    "ipa": "ˈɪ m p ˌɔː r t",
    "level": "B1"
  },
  {
    "id": "b1_2038",
    "word": "importance",
    "pos": "n.",
    "meaning": "ความสำคัญ",
    "reading": "อิ ม โพ้ (ร) เถอะ น สึ",
    "ipa": "ˌɪ m p ˈɔː r t ʌ n s",
    "level": "B1"
  },
  {
    "id": "b1_2039",
    "word": "impression",
    "pos": "n.",
    "meaning": "ความประทับใจ",
    "reading": "อิ ม เพร้ะ เฉอะ น",
    "ipa": "ˌɪ m p r ˈe ʃ ʌ n",
    "level": "B1"
  },
  {
    "id": "b1_2040",
    "word": "impressive",
    "pos": "adj.",
    "meaning": "ประทับใจ",
    "reading": "อิ ม เพร้ะ สิ่ ฝึ",
    "ipa": "ˌɪ m p r ˈe s ɪ v",
    "level": "B1"
  },
  {
    "id": "b1_2041",
    "word": "improvement",
    "pos": "n.",
    "meaning": "การปรับปรุง",
    "reading": "อิ ม พรู้ ฝึ เหมอะ น ถึ",
    "ipa": "ˌɪ m p r ˈuː v m ʌ n t",
    "level": "B1"
  },
  {
    "id": "b1_2042",
    "word": "incredibly",
    "pos": "adv.",
    "meaning": "เหลือเชื่อ",
    "reading": "อิ น เคร้ะ เดอะ บลี่",
    "ipa": "ˌɪ n k r ˈe d ʌ b l iː",
    "level": "B1"
  },
  {
    "id": "b1_2043",
    "word": "indeed",
    "pos": "adv.",
    "meaning": "อย่างแท้จริง",
    "reading": "อิ น ดี๊ ดึ",
    "ipa": "ˌɪ n d ˈiː d",
    "level": "B1"
  },
  {
    "id": "b1_2044",
    "word": "indicate",
    "pos": "v.",
    "meaning": "ระบุ",
    "reading": "อิ้ น เดอะ เค ถึ",
    "ipa": "ˈɪ n d ʌ k ˌeɪ t",
    "level": "B1"
  },
  {
    "id": "b1_2045",
    "word": "indirect",
    "pos": "adj.",
    "meaning": "ทางอ้อม",
    "reading": "อิ น เด่อ ร เร้ะ ขึ ถึ",
    "ipa": "ˌɪ n d ɜːʴ ˈe k t",
    "level": "B1"
  },
  {
    "id": "b1_2046",
    "word": "indoor",
    "pos": "adj.",
    "meaning": "ในร่ม",
    "reading": "อิ้ น โด (ร)",
    "ipa": "ˈɪ n d ˌɔː r",
    "level": "B1"
  },
  {
    "id": "b1_2047",
    "word": "indoors",
    "pos": "adv.",
    "meaning": "ในอาคาร",
    "reading": "อิ้ น ดอ ร สึ",
    "ipa": "ˈɪ n d ˌɔː r z",
    "level": "B1"
  },
  {
    "id": "b1_2048",
    "word": "influence",
    "pos": "n., v.",
    "meaning": "อิทธิพล",
    "reading": "อิ้ น ฝลู่ เออะ น สึ",
    "ipa": "ˈɪ n f l uː ʌ n s",
    "level": "B1"
  },
  {
    "id": "b1_2049",
    "word": "ingredient",
    "pos": "n.",
    "meaning": "วัตถุดิบ",
    "reading": "อิ น กรี๊ ดี่ เออะ น ถึ",
    "ipa": "ˌɪ n g r ˈiː d iː ʌ n t",
    "level": "B1"
  },
  {
    "id": "b1_2050",
    "word": "injure",
    "pos": "v.",
    "meaning": "ได้รับบาดเจ็บ",
    "reading": "อิ้ น เจ่อ ร",
    "ipa": "ˈɪ n dʒ ɜːʴ",
    "level": "B1"
  },
  {
    "id": "b1_2051",
    "word": "injured",
    "pos": "adj.",
    "meaning": "ได้รับบาดเจ็บ",
    "reading": "อิ้ น เจ่อ ร ดึ",
    "ipa": "ˈɪ n dʒ ɜːʴ d",
    "level": "B1"
  },
  {
    "id": "b1_2052",
    "word": "innocent",
    "pos": "adj.",
    "meaning": "ผู้บริสุทธิ์",
    "reading": "อิ้ เหนอะ เสอะ น ถึ",
    "ipa": "ˈɪ n ʌ s ʌ n t",
    "level": "B1"
  },
  {
    "id": "b1_2053",
    "word": "intelligence",
    "pos": "n.",
    "meaning": "ปัญญา",
    "reading": "อิ น เท้ะ เหลอะ เจอะ น สึ",
    "ipa": "ˌɪ n t ˈe l ʌ dʒ ʌ n s",
    "level": "B1"
  },
  {
    "id": "b1_2054",
    "word": "intend",
    "pos": "v.",
    "meaning": "ตั้งใจ",
    "reading": "อิ น เท้ะ น ดึ",
    "ipa": "ˌɪ n t ˈe n d",
    "level": "B1"
  },
  {
    "id": "b1_2055",
    "word": "intention",
    "pos": "n.",
    "meaning": "เจตนา",
    "reading": "อิ น เท้ะ น เฉอะ น",
    "ipa": "ˌɪ n t ˈe n tʃ ʌ n",
    "level": "B1"
  },
  {
    "id": "b1_2056",
    "word": "invest",
    "pos": "v.",
    "meaning": "ลงทุน",
    "reading": "อิ น เฟ้ะ สึ ถึ",
    "ipa": "ˌɪ n v ˈe s t",
    "level": "B1"
  },
  {
    "id": "b1_2057",
    "word": "investigate",
    "pos": "v.",
    "meaning": "สอบสวน",
    "reading": "อิ น เฟ้ะ สึ เถอะ เก ถึ",
    "ipa": "ˌɪ n v ˈe s t ʌ g ˌeɪ t",
    "level": "B1"
  },
  {
    "id": "b1_2058",
    "word": "involved",
    "pos": "adj.",
    "meaning": "ที่เกี่ยวข้อง",
    "reading": "อิ น ฟ้า ล ฝึ ดึ",
    "ipa": "ˌɪ n v ˈɑː l v d",
    "level": "B1"
  },
  {
    "id": "b1_2059",
    "word": "iron",
    "pos": "n., v.",
    "meaning": "เหล็ก",
    "reading": "อ๊าย เอ่อ ร น",
    "ipa": "ˈaɪ ɜːʴ n",
    "level": "B1"
  },
  {
    "id": "b1_2060",
    "word": "issue",
    "pos": "n.",
    "meaning": "ปัญหา",
    "reading": "อิ้ ฉู่",
    "ipa": "ˈɪ ʃ uː",
    "level": "B1"
  },
  {
    "id": "b1_2061",
    "word": "IT",
    "pos": "n.",
    "meaning": "มัน",
    "reading": "อิ ถึ",
    "ipa": "ˈɪ t",
    "level": "B1"
  },
  {
    "id": "b1_2062",
    "word": "journal",
    "pos": "n.",
    "meaning": "วารสาร",
    "reading": "เจ๊อ ร เหนอะ ล",
    "ipa": "dʒ ˈɜːʴ n ʌ l",
    "level": "B1"
  },
  {
    "id": "b1_2063",
    "word": "judge",
    "pos": "n., v.",
    "meaning": "ผู้พิพากษา",
    "reading": "จึ จะ",
    "ipa": "dʒ ˈʌ dʒ",
    "level": "B1"
  },
  {
    "id": "b1_2064",
    "word": "keen",
    "pos": "adj.",
    "meaning": "กระตือรือร้น",
    "reading": "คี น",
    "ipa": "k ˈiː n",
    "level": "B1"
  },
  {
    "id": "b1_2065",
    "word": "key",
    "pos": "v.",
    "meaning": "สำคัญ",
    "reading": "คี",
    "ipa": "k ˈiː",
    "level": "B1"
  },
  {
    "id": "b1_2066",
    "word": "keyboard",
    "pos": "n.",
    "meaning": "แป้นพิมพ์",
    "reading": "คี้ โบ (ร) ดึ",
    "ipa": "k ˈiː b ˌɔː r d",
    "level": "B1"
  },
  {
    "id": "b1_2067",
    "word": "kick",
    "pos": "v., n.",
    "meaning": "เตะ",
    "reading": "คิ ขึ",
    "ipa": "k ˈɪ k",
    "level": "B1"
  },
  {
    "id": "b1_2068",
    "word": "killing",
    "pos": "n.",
    "meaning": "ฆ่า",
    "reading": "คิ หลิ่ ง",
    "ipa": "k ˈɪ l ɪ ŋ",
    "level": "B1"
  },
  {
    "id": "b1_2069",
    "word": "kind",
    "pos": "adj.",
    "meaning": "ใจดี",
    "reading": "ดึ คาย น",
    "ipa": "k ˈaɪ n d",
    "level": "B1"
  },
  {
    "id": "b1_2070",
    "word": "kiss",
    "pos": "v., n.",
    "meaning": "จูบ",
    "reading": "คิ สึ",
    "ipa": "k ˈɪ s",
    "level": "B1"
  },
  {
    "id": "b1_2071",
    "word": "knock",
    "pos": "n.",
    "meaning": "เคาะ",
    "reading": "ขึ นา",
    "ipa": "n ˈɑː k",
    "level": "B1"
  },
  {
    "id": "b1_2072",
    "word": "label",
    "pos": "n., v.",
    "meaning": "ฉลาก",
    "reading": "เล้ เบอะ ล",
    "ipa": "l ˈeɪ b ʌ l",
    "level": "B1"
  },
  {
    "id": "b1_2073",
    "word": "laboratory",
    "pos": "n.",
    "meaning": "ห้องปฏิบัติการ",
    "reading": "แล้ เบรอะ โท (ร) อี่",
    "ipa": "l ˈæ b r ʌ t ˌɔː r iː",
    "level": "B1"
  },
  {
    "id": "b1_2074",
    "word": "lack",
    "pos": "n., v.",
    "meaning": "ขาด",
    "reading": "ขึ แล",
    "ipa": "l ˈæ k",
    "level": "B1"
  },
  {
    "id": "b1_2075",
    "word": "latest",
    "pos": "adj.",
    "meaning": "ล่าสุด",
    "reading": "เล้ เถอะ สึ ถึ",
    "ipa": "l ˈeɪ t ʌ s t",
    "level": "B1"
  },
  {
    "id": "b1_2076",
    "word": "lay",
    "pos": "v.",
    "meaning": "วาง",
    "reading": "เล",
    "ipa": "l ˈeɪ",
    "level": "B1"
  },
  {
    "id": "b1_2077",
    "word": "layer",
    "pos": "n.",
    "meaning": "ชั้น",
    "reading": "เล้ เอ่อ ร",
    "ipa": "l ˈeɪ ɜːʴ",
    "level": "B1"
  },
  {
    "id": "b1_2078",
    "word": "lead",
    "pos": "n.",
    "meaning": "ตะกั่ว",
    "reading": "ดึ เละ",
    "ipa": "l ˈe d",
    "level": "B1"
  },
  {
    "id": "b1_2079",
    "word": "leading",
    "pos": "adj.",
    "meaning": "ชั้นนำ",
    "reading": "ลี้ ดิ ง",
    "ipa": "l ˈiː d ɪ ŋ",
    "level": "B1"
  },
  {
    "id": "b1_2080",
    "word": "leaf",
    "pos": "n.",
    "meaning": "ใบไม้",
    "reading": "ลี ฝึ",
    "ipa": "l ˈiː f",
    "level": "B1"
  },
  {
    "id": "b1_2081",
    "word": "leather",
    "pos": "n.",
    "meaning": "หนัง",
    "reading": "เล้ะ เด่อ ร",
    "ipa": "l ˈe ð ɜːʴ",
    "level": "B1"
  },
  {
    "id": "b1_2082",
    "word": "legal",
    "pos": "adj.",
    "meaning": "ถูกกฎหมาย",
    "reading": "ลี้ เกอะ ล",
    "ipa": "l ˈiː g ʌ l",
    "level": "B1"
  },
  {
    "id": "b1_2083",
    "word": "leisure",
    "pos": "n.",
    "meaning": "เวลาว่าง",
    "reading": "เล้ะ เฉ่อ ร",
    "ipa": "l ˈe ʒ ɜːʴ",
    "level": "B1"
  },
  {
    "id": "b1_2084",
    "word": "length",
    "pos": "n.",
    "meaning": "ความยาว",
    "reading": "ขึ ตึ เละ ง",
    "ipa": "l ˈe ŋ k θ",
    "level": "B1"
  },
  {
    "id": "b1_2085",
    "word": "level",
    "pos": "adj.",
    "meaning": "ระดับ",
    "reading": "เล้ะ เฝอะ ล",
    "ipa": "l ˈe v ʌ l",
    "level": "B1"
  },
  {
    "id": "b1_2086",
    "word": "lie",
    "pos": "v., n.",
    "meaning": "โกหก",
    "reading": "ลาย",
    "ipa": "l ˈaɪ",
    "level": "B1"
  },
  {
    "id": "b1_2087",
    "word": "like",
    "pos": "n.",
    "meaning": "ชอบ",
    "reading": "ขึ ลาย",
    "ipa": "l ˈaɪ k",
    "level": "B1"
  },
  {
    "id": "b1_2088",
    "word": "limit",
    "pos": "n., v.",
    "meaning": "ขีด จำกัด",
    "reading": "ลิ เหมอะ ถึ",
    "ipa": "l ˈɪ m ʌ t",
    "level": "B1"
  },
  {
    "id": "b1_2089",
    "word": "lip",
    "pos": "n.",
    "meaning": "ริมฝีปาก",
    "reading": "ลิ ผึ",
    "ipa": "l ˈɪ p",
    "level": "B1"
  },
  {
    "id": "b1_2090",
    "word": "liquid",
    "pos": "n., adj.",
    "meaning": "ของเหลว",
    "reading": "ลิ เขวอะ ดึ",
    "ipa": "l ˈɪ k w ʌ d",
    "level": "B1"
  },
  {
    "id": "b1_2091",
    "word": "literature",
    "pos": "n.",
    "meaning": "วรรณกรรม",
    "reading": "ลิ เถ่อ ร เหรอะ เฉ่อ ร",
    "ipa": "l ˈɪ t ɜːʴ ʌ tʃ ɜːʴ",
    "level": "B1"
  },
  {
    "id": "b1_2092",
    "word": "live",
    "pos": "adj., adv.",
    "meaning": "มีชีวิต สด",
    "reading": "ฝึ ลาย",
    "ipa": "l ˈaɪ v",
    "level": "B1"
  },
  {
    "id": "b1_2093",
    "word": "living",
    "pos": "adj., n.",
    "meaning": "การดำรงชีวิต",
    "reading": "ลิ ฝิ่ ง",
    "ipa": "l ˈɪ v ɪ ŋ",
    "level": "B1"
  },
  {
    "id": "b1_2094",
    "word": "local",
    "pos": "n.",
    "meaning": "ท้องถิ่น",
    "reading": "โล้ว เขอะ ล",
    "ipa": "l ˈəʊ k ʌ l",
    "level": "B1"
  },
  {
    "id": "b1_2095",
    "word": "locate",
    "pos": "v.",
    "meaning": "ค้นหา",
    "reading": "โล้ว เค ถึ",
    "ipa": "l ˈəʊ k ˌeɪ t",
    "level": "B1"
  },
  {
    "id": "b1_2096",
    "word": "located",
    "pos": "adj.",
    "meaning": "ตั้งอยู่",
    "reading": "โล้ว เค เถอะ ดึ",
    "ipa": "l ˈəʊ k ˌeɪ t ʌ d",
    "level": "B1"
  },
  {
    "id": "b1_2097",
    "word": "location",
    "pos": "n.",
    "meaning": "ที่ตั้ง",
    "reading": "โหล่ว เค้ เฉอะ น",
    "ipa": "l əʊ k ˈeɪ ʃ ʌ n",
    "level": "B1"
  },
  {
    "id": "b1_2098",
    "word": "lonely",
    "pos": "adj.",
    "meaning": "เหงา",
    "reading": "โล้ว น หลี่",
    "ipa": "l ˈəʊ n l iː",
    "level": "B1"
  },
  {
    "id": "b1_2099",
    "word": "loss",
    "pos": "n.",
    "meaning": "การสูญเสีย",
    "reading": "สึ ลอ",
    "ipa": "l ˈɔː s",
    "level": "B1"
  },
  {
    "id": "b1_2100",
    "word": "luxury",
    "pos": "n.",
    "meaning": "หรูหรา",
    "reading": "กึ เฉ่อ ร หรี่ ละ",
    "ipa": "l ˈʌ g ʒ ɜːʴ iː",
    "level": "B1"
  },
  {
    "id": "b1_2101",
    "word": "mad",
    "pos": "adj.",
    "meaning": "โกรธ",
    "reading": "ดึ แม",
    "ipa": "m ˈæ d",
    "level": "B1"
  },
  {
    "id": "b1_2102",
    "word": "magic",
    "pos": "n., adj.",
    "meaning": "มายากล",
    "reading": "แม้ จิ ขึ",
    "ipa": "m ˈæ dʒ ɪ k",
    "level": "B1"
  },
  {
    "id": "b1_2103",
    "word": "mainly",
    "pos": "adv.",
    "meaning": "ส่วนใหญ่",
    "reading": "เม้ น หลี่",
    "ipa": "m ˈeɪ n l iː",
    "level": "B1"
  },
  {
    "id": "b1_2104",
    "word": "mall",
    "pos": "n.",
    "meaning": "ห้างสรรพสินค้า",
    "reading": "มอ ล",
    "ipa": "m ˈɔː l",
    "level": "B1"
  },
  {
    "id": "b1_2105",
    "word": "management",
    "pos": "n.",
    "meaning": "การจัดการ",
    "reading": "แม้ เหนอะ จึ เหมอะ น ถึ",
    "ipa": "m ˈæ n ʌ dʒ m ʌ n t",
    "level": "B1"
  },
  {
    "id": "b1_2106",
    "word": "market",
    "pos": "v.",
    "meaning": "ตลาด",
    "reading": "ม้า (ร) เขอะ ถึ",
    "ipa": "m ˈɑː r k ʌ t",
    "level": "B1"
  },
  {
    "id": "b1_2107",
    "word": "marketing",
    "pos": "n.",
    "meaning": "การตลาด",
    "reading": "ม้า (ร) เขอะ ถิ่ ง",
    "ipa": "m ˈɑː r k ʌ t ɪ ŋ",
    "level": "B1"
  },
  {
    "id": "b1_2108",
    "word": "marriage",
    "pos": "n.",
    "meaning": "การแต่งงาน",
    "reading": "แม้ (ร) อิ จึ",
    "ipa": "m ˈe r ɪ dʒ",
    "level": "B1"
  },
  {
    "id": "b1_2109",
    "word": "meanwhile",
    "pos": "adv.",
    "meaning": "ในขณะเดียวกัน",
    "reading": "มี้ น วาย ล",
    "ipa": "m ˈiː n w ˌaɪ l",
    "level": "B1"
  },
  {
    "id": "b1_2110",
    "word": "measure",
    "pos": "v., n.",
    "meaning": "วัด",
    "reading": "เม้ะ เฉ่อ ร",
    "ipa": "m ˈe ʒ ɜːʴ",
    "level": "B1"
  },
  {
    "id": "b1_2111",
    "word": "medium",
    "pos": "adj.",
    "meaning": "ปานกลาง",
    "reading": "มี้ ดี่ เออะ ม",
    "ipa": "m ˈiː d iː ʌ m",
    "level": "B1"
  },
  {
    "id": "b1_2112",
    "word": "mental",
    "pos": "adj.",
    "meaning": "จิต",
    "reading": "เม้ะ น เถอะ ล",
    "ipa": "m ˈe n t ʌ l",
    "level": "B1"
  },
  {
    "id": "b1_2113",
    "word": "mention",
    "pos": "n.",
    "meaning": "กล่าวถึง",
    "reading": "เม้ะ น เฉอะ น",
    "ipa": "m ˈe n ʃ ʌ n",
    "level": "B1"
  },
  {
    "id": "b1_2114",
    "word": "mess",
    "pos": "n.",
    "meaning": "ความยุ่งเหยิง",
    "reading": "สึ เมะ",
    "ipa": "m ˈe s",
    "level": "B1"
  },
  {
    "id": "b1_2115",
    "word": "mild",
    "pos": "adj.",
    "meaning": "อ่อน",
    "reading": "ดึ มาย ล",
    "ipa": "m ˈaɪ l d",
    "level": "B1"
  },
  {
    "id": "b1_2116",
    "word": "mine",
    "pos": "n.",
    "meaning": "เหมือง",
    "reading": "มาย น",
    "ipa": "m ˈaɪ n",
    "level": "B1"
  },
  {
    "id": "b1_2117",
    "word": "mix",
    "pos": "v., n.",
    "meaning": "ผสม",
    "reading": "มิ ขึ สึ",
    "ipa": "m ˈɪ k s",
    "level": "B1"
  },
  {
    "id": "b1_2118",
    "word": "mixture",
    "pos": "n.",
    "meaning": "ส่วนผสม",
    "reading": "มิ ขึ สึ เฉ่อ ร",
    "ipa": "m ˈɪ k s tʃ ɜːʴ",
    "level": "B1"
  },
  {
    "id": "b1_2119",
    "word": "mood",
    "pos": "n.",
    "meaning": "อารมณ์",
    "reading": "มู ดึ",
    "ipa": "m ˈuː d",
    "level": "B1"
  },
  {
    "id": "b1_2120",
    "word": "move",
    "pos": "n.",
    "meaning": "เคลื่อนไหว",
    "reading": "มู ฝึ",
    "ipa": "m ˈuː v",
    "level": "B1"
  },
  {
    "id": "b1_2121",
    "word": "mud",
    "pos": "n.",
    "meaning": "โคลน",
    "reading": "ดึ มะ",
    "ipa": "m ˈʌ d",
    "level": "B1"
  },
  {
    "id": "b1_2122",
    "word": "murder",
    "pos": "n., v.",
    "meaning": "ฆาตกรรม",
    "reading": "เม้อ ร เด่อ ร",
    "ipa": "m ˈɜːʴ d ɜːʴ",
    "level": "B1"
  },
  {
    "id": "b1_2123",
    "word": "muscle",
    "pos": "n.",
    "meaning": "กล้ามเนื้อ",
    "reading": "มะ เสอะ ล",
    "ipa": "m ˈʌ s ʌ l",
    "level": "B1"
  },
  {
    "id": "b1_2124",
    "word": "musical",
    "pos": "n.",
    "meaning": "ดนตรี",
    "reading": "ม ยู้ สิ่ เขอะ ล",
    "ipa": "m j ˈuː z ɪ k ʌ l",
    "level": "B1"
  },
  {
    "id": "b1_2125",
    "word": "mystery",
    "pos": "n.",
    "meaning": "ความลึกลับ",
    "reading": "มิ สึ เถ่อ ร หรี่",
    "ipa": "m ˈɪ s t ɜːʴ iː",
    "level": "B1"
  },
  {
    "id": "b1_2126",
    "word": "nail",
    "pos": "n.",
    "meaning": "เล็บ",
    "reading": "เน ล",
    "ipa": "n ˈeɪ l",
    "level": "B1"
  },
  {
    "id": "b1_2127",
    "word": "narrative",
    "pos": "n., adj.",
    "meaning": "เรื่องเล่า",
    "reading": "แน้ เหรอะ ถิ่ ฝึ",
    "ipa": "n ˈæ r ʌ t ɪ v",
    "level": "B1"
  },
  {
    "id": "b1_2128",
    "word": "nation",
    "pos": "n.",
    "meaning": "ชาติ",
    "reading": "เน้ เฉอะ น",
    "ipa": "n ˈeɪ ʃ ʌ n",
    "level": "B1"
  },
  {
    "id": "b1_2129",
    "word": "native",
    "pos": "adj., n.",
    "meaning": "พื้นเมือง",
    "reading": "เน้ ถิ่ ฝึ",
    "ipa": "n ˈeɪ t ɪ v",
    "level": "B1"
  },
  {
    "id": "b1_2130",
    "word": "naturally",
    "pos": "adv.",
    "meaning": "ตามธรรมชาติ",
    "reading": "แน้ เฉ่อ ร เหรอะ หลี่",
    "ipa": "n ˈæ tʃ ɜːʴ ʌ l iː",
    "level": "B1"
  },
  {
    "id": "b1_2131",
    "word": "necessarily",
    "pos": "adv.",
    "meaning": "อย่างจำเป็น",
    "reading": "แซ้ (ร) เออะ หลี่ เนะ เสอะ",
    "ipa": "n ˌe s ʌ s ˈe r ʌ l iː",
    "level": "B1"
  },
  {
    "id": "b1_2132",
    "word": "need",
    "pos": "modal v.",
    "meaning": "ความต้องการ",
    "reading": "นี ดึ",
    "ipa": "n ˈiː d",
    "level": "B1"
  },
  {
    "id": "b1_2133",
    "word": "needle",
    "pos": "n.",
    "meaning": "เข็ม",
    "reading": "นี้ เดอะ ล",
    "ipa": "n ˈiː d ʌ l",
    "level": "B1"
  },
  {
    "id": "b1_2134",
    "word": "neighbourhood",
    "pos": "n.",
    "meaning": "ละแวกบ้าน",
    "reading": "เน้ เบ่อ ร ฮุ ดึ",
    "ipa": "n ˈeɪ b ɜːʴ h ˌʊ d",
    "level": "B1"
  },
  {
    "id": "b1_2135",
    "word": "neither",
    "pos": "adv.",
    "meaning": "ไม่ใช่ทั้งสองอย่าง",
    "reading": "นี้ เด่อ ร",
    "ipa": "n ˈiː ð ɜːʴ",
    "level": "B1"
  },
  {
    "id": "b1_2136",
    "word": "net",
    "pos": "n.",
    "meaning": "สุทธิ",
    "reading": "ถึ เนะ",
    "ipa": "n ˈe t",
    "level": "B1"
  },
  {
    "id": "b1_2137",
    "word": "next",
    "pos": "n.",
    "meaning": "ต่อไป",
    "reading": "ขึ สึ ถึ เนะ",
    "ipa": "n ˈe k s t",
    "level": "B1"
  },
  {
    "id": "b1_2138",
    "word": "nor",
    "pos": "conj./adv.",
    "meaning": "ก็ไม่เช่นกัน",
    "reading": "โน (ร)",
    "ipa": "n ˈɔː r",
    "level": "B1"
  },
  {
    "id": "b1_2139",
    "word": "normal",
    "pos": "n.",
    "meaning": "ปกติ",
    "reading": "โน้ (ร) เหมอะ ล",
    "ipa": "n ˈɔː r m ʌ l",
    "level": "B1"
  },
  {
    "id": "b1_2140",
    "word": "northern",
    "pos": "adj.",
    "meaning": "ภาคเหนือ",
    "reading": "โน้ (ร) เด่อ ร น",
    "ipa": "n ˈɔː r ð ɜːʴ n",
    "level": "B1"
  },
  {
    "id": "b1_2141",
    "word": "note",
    "pos": "v.",
    "meaning": "บันทึก",
    "reading": "ถึ โนว",
    "ipa": "n ˈəʊ t",
    "level": "B1"
  },
  {
    "id": "b1_2142",
    "word": "now",
    "pos": "conj.",
    "meaning": "ตอนนี้",
    "reading": "นาว",
    "ipa": "n ˈaʊ",
    "level": "B1"
  },
  {
    "id": "b1_2143",
    "word": "nuclear",
    "pos": "adj.",
    "meaning": "นิวเคลียร์",
    "reading": "นู้ ขลี่ เอ่อ ร",
    "ipa": "n ˈuː k l iː ɜːʴ",
    "level": "B1"
  },
  {
    "id": "b1_2144",
    "word": "obvious",
    "pos": "adj.",
    "meaning": "ชัดเจน",
    "reading": "อ๊า บึ ฝี่ เออะ สึ",
    "ipa": "ˈɑː b v iː ʌ s",
    "level": "B1"
  },
  {
    "id": "b1_2145",
    "word": "obviously",
    "pos": "adv.",
    "meaning": "อย่างชัดเจน",
    "reading": "อ๊า บึ ฝี่ เออะ สึ หลี่",
    "ipa": "ˈɑː b v iː ʌ s l iː",
    "level": "B1"
  },
  {
    "id": "b1_2146",
    "word": "occasion",
    "pos": "n.",
    "meaning": "โอกาส",
    "reading": "เค้ เฉอะ น เออะ",
    "ipa": "ʌ k ˈeɪ ʒ ʌ n",
    "level": "B1"
  },
  {
    "id": "b1_2147",
    "word": "occur",
    "pos": "v.",
    "meaning": "เกิดขึ้น",
    "reading": "เค้อ ร เออะ",
    "ipa": "ʌ k ˈɜːʴ",
    "level": "B1"
  },
  {
    "id": "b1_2148",
    "word": "odd",
    "pos": "adj.",
    "meaning": "แปลก",
    "reading": "ดึ อา",
    "ipa": "ˈɑː d",
    "level": "B1"
  },
  {
    "id": "b1_2149",
    "word": "official",
    "pos": "adj.",
    "meaning": "เป็นทางการ",
    "reading": "ฟิ เฉอะ ล เออะ",
    "ipa": "ʌ f ˈɪ ʃ ʌ l",
    "level": "B1"
  },
  {
    "id": "b1_2150",
    "word": "old-fashioned",
    "pos": "adj.",
    "meaning": "หัวโบราณ",
    "reading": "ดึ แฟ้ เฉอะ น ดึ โอว ล",
    "ipa": "ˌəʊ l d f ˈæ ʃ ʌ n d",
    "level": "B1"
  },
  {
    "id": "b1_2151",
    "word": "once",
    "pos": "conj.",
    "meaning": "ครั้งหนึ่ง",
    "reading": "สึ วะ น",
    "ipa": "w ˈʌ n s",
    "level": "B1"
  },
  {
    "id": "b1_2152",
    "word": "operation",
    "pos": "n.",
    "meaning": "การดำเนินการ",
    "reading": "เผ่อ ร เร้ เฉอะ น อา",
    "ipa": "ˌɑː p ɜːʴ ˈeɪ ʃ ʌ n",
    "level": "B1"
  },
  {
    "id": "b1_2153",
    "word": "organized",
    "pos": "adj.",
    "meaning": "เป็นระเบียบ",
    "reading": "โอ๊ (ร) เกอะ นาย สึ ดึ",
    "ipa": "ˈɔː r g ʌ n ˌaɪ z d",
    "level": "B1"
  },
  {
    "id": "b1_2154",
    "word": "organizer",
    "pos": "n.",
    "meaning": "ออแกไนเซอร์",
    "reading": "โอ๊ (ร) เกอะ นาย เส่อ ร",
    "ipa": "ˈɔː r g ʌ n ˌaɪ z ɜːʴ",
    "level": "B1"
  },
  {
    "id": "b1_2155",
    "word": "original",
    "pos": "n.",
    "meaning": "ต้นฉบับ",
    "reading": "เอ่อ ร ริ เจอะ เหนอะ ล",
    "ipa": "ɜːʴ ˈɪ dʒ ʌ n ʌ l",
    "level": "B1"
  },
  {
    "id": "b1_2156",
    "word": "originally",
    "pos": "adv.",
    "meaning": "เดิมที",
    "reading": "เอ่อ ร ริ เจอะ เหนอะ หลี่",
    "ipa": "ɜːʴ ˈɪ dʒ ʌ n ʌ l iː",
    "level": "B1"
  },
  {
    "id": "b1_2157",
    "word": "ought",
    "pos": "modal v.",
    "meaning": "ควร",
    "reading": "ถึ ออ",
    "ipa": "ˈɔː t",
    "level": "B1"
  },
  {
    "id": "b1_2158",
    "word": "ours",
    "pos": "pron.",
    "meaning": "ของเราเอง",
    "reading": "อ๊าว เอ่อ ร สึ",
    "ipa": "ˈaʊ ɜːʴ z",
    "level": "B1"
  },
  {
    "id": "b1_2159",
    "word": "outdoor",
    "pos": "adj.",
    "meaning": "กลางแจ้ง",
    "reading": "อ๊าว ถึ โด (ร)",
    "ipa": "ˈaʊ t d ˌɔː r",
    "level": "B1"
  },
  {
    "id": "b1_2160",
    "word": "outdoors",
    "pos": "adv.",
    "meaning": "กลางแจ้ง",
    "reading": "อ๊าว ถึ ด๊อ ร สึ",
    "ipa": "ˈaʊ t d ˈɔː r z",
    "level": "B1"
  },
  {
    "id": "b1_2161",
    "word": "pack",
    "pos": "n.",
    "meaning": "หีบห่อ",
    "reading": "ขึ แพ",
    "ipa": "p ˈæ k",
    "level": "B1"
  },
  {
    "id": "b1_2162",
    "word": "package",
    "pos": "n.",
    "meaning": "บรรจุุภัณฑ์",
    "reading": "แพ้ เขอะ จึ",
    "ipa": "p ˈæ k ʌ dʒ",
    "level": "B1"
  },
  {
    "id": "b1_2163",
    "word": "painful",
    "pos": "adj.",
    "meaning": "เจ็บปวด",
    "reading": "เพ้ น เฝอะ ล",
    "ipa": "p ˈeɪ n f ʌ l",
    "level": "B1"
  },
  {
    "id": "b1_2164",
    "word": "pale",
    "pos": "adj.",
    "meaning": "ซีด",
    "reading": "เพ ล",
    "ipa": "p ˈeɪ l",
    "level": "B1"
  },
  {
    "id": "b1_2165",
    "word": "pan",
    "pos": "n.",
    "meaning": "กระทะ",
    "reading": "แพ น",
    "ipa": "p ˈæ n",
    "level": "B1"
  },
  {
    "id": "b1_2166",
    "word": "participate",
    "pos": "v.",
    "meaning": "เข้าร่วม",
    "reading": "ผ่า (ร) ทิ เสอะ เพ ถึ",
    "ipa": "p ɑː r t ˈɪ s ʌ p ˌeɪ t",
    "level": "B1"
  },
  {
    "id": "b1_2167",
    "word": "particularly",
    "pos": "adv.",
    "meaning": "พาร โดยเฉพาะ",
    "reading": "ทิ ขึ เหยอะ เหล่อ ร หลี่",
    "ipa": "p ˌɑː r t ˈɪ k j ʌ l ɜːʴ l iː",
    "level": "B1"
  },
  {
    "id": "b1_2168",
    "word": "pass",
    "pos": "n.",
    "meaning": "ผ่าน",
    "reading": "สึ แพ",
    "ipa": "p ˈæ s",
    "level": "B1"
  },
  {
    "id": "b1_2169",
    "word": "passion",
    "pos": "n.",
    "meaning": "ความหลงใหล",
    "reading": "แพ้ เฉอะ น",
    "ipa": "p ˈæ ʃ ʌ n",
    "level": "B1"
  },
  {
    "id": "b1_2170",
    "word": "path",
    "pos": "n.",
    "meaning": "เส้นทาง",
    "reading": "ตึ แพ",
    "ipa": "p ˈæ θ",
    "level": "B1"
  },
  {
    "id": "b1_2171",
    "word": "payment",
    "pos": "n.",
    "meaning": "การชำระเงิน",
    "reading": "เพ้ เหมอะ น ถึ",
    "ipa": "p ˈeɪ m ʌ n t",
    "level": "B1"
  },
  {
    "id": "b1_2172",
    "word": "peaceful",
    "pos": "adj.",
    "meaning": "สงบ",
    "reading": "พี้ สึ เฝอะ ล",
    "ipa": "p ˈiː s f ʌ l",
    "level": "B1"
  },
  {
    "id": "b1_2173",
    "word": "percentage",
    "pos": "n.",
    "meaning": "เปอร์เซ็นต์",
    "reading": "เผ่อ ร เซ้ะ น เถอะ จึ",
    "ipa": "p ɜːʴ s ˈe n t ʌ dʒ",
    "level": "B1"
  },
  {
    "id": "b1_2174",
    "word": "perfectly",
    "pos": "adv.",
    "meaning": "อย่างสมบูรณ์แบบ",
    "reading": "เพ้อ ร เฝอะ ขึ ถลี่",
    "ipa": "p ˈɜːʴ f ʌ k t l iː",
    "level": "B1"
  },
  {
    "id": "b1_2175",
    "word": "performance",
    "pos": "n.",
    "meaning": "ผลงาน",
    "reading": "เผ่อ ร โฟ้ (ร) เหมอะ น สึ",
    "ipa": "p ɜːʴ f ˈɔː r m ʌ n s",
    "level": "B1"
  },
  {
    "id": "b1_2176",
    "word": "personally",
    "pos": "adv.",
    "meaning": "ส่วนตัว",
    "reading": "เพ้อ ร เสอะ เหนอะ หลี่",
    "ipa": "p ˈɜːʴ s ʌ n ʌ l iː",
    "level": "B1"
  },
  {
    "id": "b1_2177",
    "word": "persuade",
    "pos": "v.",
    "meaning": "โน้มน้าว",
    "reading": "เผ่อ ร สึ เว้ ดึ",
    "ipa": "p ɜːʴ s w ˈeɪ d",
    "level": "B1"
  },
  {
    "id": "b1_2178",
    "word": "photographer",
    "pos": "n.",
    "meaning": "ช่างภาพ",
    "reading": "ท้า เกรอะ เฝ่อ ร เฝอะ",
    "ipa": "f ʌ t ˈɑː g r ʌ f ɜːʴ",
    "level": "B1"
  },
  {
    "id": "b1_2179",
    "word": "photography",
    "pos": "n.",
    "meaning": "การถ่ายภาพ",
    "reading": "ท้า เกรอะ ฝี่ เฝอะ",
    "ipa": "f ʌ t ˈɑː g r ʌ f iː",
    "level": "B1"
  },
  {
    "id": "b1_2180",
    "word": "pin",
    "pos": "n., v.",
    "meaning": "เข็มหมุด",
    "reading": "พิ น",
    "ipa": "p ˈɪ n",
    "level": "B1"
  },
  {
    "id": "b1_2181",
    "word": "pipe",
    "pos": "n.",
    "meaning": "ท่อ",
    "reading": "ผึ พาย",
    "ipa": "p ˈaɪ p",
    "level": "B1"
  },
  {
    "id": "b1_2182",
    "word": "place",
    "pos": "v.",
    "meaning": "สถานที่",
    "reading": "สึ เพล",
    "ipa": "p l ˈeɪ s",
    "level": "B1"
  },
  {
    "id": "b1_2183",
    "word": "planning",
    "pos": "n.",
    "meaning": "การวางแผน",
    "reading": "แพล้ หนิ่ ง",
    "ipa": "p l ˈæ n ɪ ŋ",
    "level": "B1"
  },
  {
    "id": "b1_2184",
    "word": "pleasant",
    "pos": "adj.",
    "meaning": "เพลิดเพลิน",
    "reading": "เพล้ะ เสอะ น ถึ",
    "ipa": "p l ˈe z ʌ n t",
    "level": "B1"
  },
  {
    "id": "b1_2185",
    "word": "pleasure",
    "pos": "n.",
    "meaning": "ความพึงพอใจ",
    "reading": "เพล้ะ เฉ่อ ร",
    "ipa": "p l ˈe ʒ ɜːʴ",
    "level": "B1"
  },
  {
    "id": "b1_2186",
    "word": "plenty",
    "pos": "pron.",
    "meaning": "มากมาย",
    "reading": "เพล้ะ น ถี่",
    "ipa": "p l ˈe n t iː",
    "level": "B1"
  },
  {
    "id": "b1_2187",
    "word": "plot",
    "pos": "n.",
    "meaning": "พล็อต",
    "reading": "ถึ พลา",
    "ipa": "p l ˈɑː t",
    "level": "B1"
  },
  {
    "id": "b1_2188",
    "word": "plus",
    "pos": "prep.",
    "meaning": "เพิ่ม บวก,",
    "reading": "สึ พละ",
    "ipa": "p l ˈʌ s",
    "level": "B1"
  },
  {
    "id": "b1_2189",
    "word": "poem",
    "pos": "n.",
    "meaning": "บทกวี",
    "reading": "โพ้ว เออะ ม",
    "ipa": "p ˈəʊ ʌ m",
    "level": "B1"
  },
  {
    "id": "b1_2190",
    "word": "poet",
    "pos": "n.",
    "meaning": "กวี",
    "reading": "โพ้ว เออะ ถึ",
    "ipa": "p ˈəʊ ʌ t",
    "level": "B1"
  },
  {
    "id": "b1_2191",
    "word": "poetry",
    "pos": "n.",
    "meaning": "บทกวี",
    "reading": "โพ้ว เออะ ถรี่",
    "ipa": "p ˈəʊ ʌ t r iː",
    "level": "B1"
  },
  {
    "id": "b1_2192",
    "word": "point",
    "pos": "v.",
    "meaning": "จุด",
    "reading": "ถึ พออย น",
    "ipa": "p ˈɔɪ n t",
    "level": "B1"
  },
  {
    "id": "b1_2193",
    "word": "poison",
    "pos": "n., v.",
    "meaning": "พิษ",
    "reading": "พ้อย เสอะ น",
    "ipa": "p ˈɔɪ z ʌ n",
    "level": "B1"
  },
  {
    "id": "b1_2194",
    "word": "poisonous",
    "pos": "adj.",
    "meaning": "เป็นพิษ",
    "reading": "พ้อย เสอะ เหนอะ สึ",
    "ipa": "p ˈɔɪ z ʌ n ʌ s",
    "level": "B1"
  },
  {
    "id": "b1_2195",
    "word": "policy",
    "pos": "n.",
    "meaning": "นโยบาย",
    "reading": "พ้า เหลอะ สี่",
    "ipa": "p ˈɑː l ʌ s iː",
    "level": "B1"
  },
  {
    "id": "b1_2196",
    "word": "political",
    "pos": "adj.",
    "meaning": "ทางการเมือง",
    "reading": "ลิ เถอะ เขอะ ล เผอะ",
    "ipa": "p ʌ l ˈɪ t ʌ k ʌ l",
    "level": "B1"
  },
  {
    "id": "b1_2197",
    "word": "politician",
    "pos": "n.",
    "meaning": "นักการเมือง",
    "reading": "ทิ เฉอะ น พา เหลอะ",
    "ipa": "p ˌɑː l ʌ t ˈɪ ʃ ʌ n",
    "level": "B1"
  },
  {
    "id": "b1_2198",
    "word": "politics",
    "pos": "n.",
    "meaning": "การเมือง",
    "reading": "พ้า เหลอะ ทิ ขึ สึ",
    "ipa": "p ˈɑː l ʌ t ˌɪ k s",
    "level": "B1"
  },
  {
    "id": "b1_2199",
    "word": "port",
    "pos": "n.",
    "meaning": "ท่าเรือ",
    "reading": "ถึ โพ (ร)",
    "ipa": "p ˈɔː r t",
    "level": "B1"
  },
  {
    "id": "b1_2200",
    "word": "portrait",
    "pos": "n.",
    "meaning": "ภาพเหมือน",
    "reading": "โพ้ (ร) เถรอะ ถึ",
    "ipa": "p ˈɔː r t r ʌ t",
    "level": "B1"
  },
  {
    "id": "b1_2201",
    "word": "possibly",
    "pos": "adv.",
    "meaning": "อาจจะ",
    "reading": "พ้า เสอะ บลี่",
    "ipa": "p ˈɑː s ʌ b l iː",
    "level": "B1"
  },
  {
    "id": "b1_2202",
    "word": "pot",
    "pos": "n.",
    "meaning": "หม้อ",
    "reading": "ถึ พา",
    "ipa": "p ˈɑː t",
    "level": "B1"
  },
  {
    "id": "b1_2203",
    "word": "pour",
    "pos": "v.",
    "meaning": "เท",
    "reading": "โพ (ร)",
    "ipa": "p ˈɔː r",
    "level": "B1"
  },
  {
    "id": "b1_2204",
    "word": "poverty",
    "pos": "n.",
    "meaning": "ความยากจน",
    "reading": "พ้า เฝ่อ ร ถี่",
    "ipa": "p ˈɑː v ɜːʴ t iː",
    "level": "B1"
  },
  {
    "id": "b1_2205",
    "word": "powder",
    "pos": "n.",
    "meaning": "ผง",
    "reading": "พ้าว เด่อ ร",
    "ipa": "p ˈaʊ d ɜːʴ",
    "level": "B1"
  },
  {
    "id": "b1_2206",
    "word": "powerful",
    "pos": "adj.",
    "meaning": "ทรงพลัง",
    "reading": "พ้าว เอ่อ ร เฝอะ ล",
    "ipa": "p ˈaʊ ɜːʴ f ʌ l",
    "level": "B1"
  },
  {
    "id": "b1_2207",
    "word": "practical",
    "pos": "adj.",
    "meaning": "ใช้ได้จริง",
    "reading": "แพร้ ขึ เถอะ เขอะ ล",
    "ipa": "p r ˈæ k t ʌ k ʌ l",
    "level": "B1"
  },
  {
    "id": "b1_2208",
    "word": "pray",
    "pos": "v.",
    "meaning": "อธิษฐาน",
    "reading": "เพร",
    "ipa": "p r ˈeɪ",
    "level": "B1"
  },
  {
    "id": "b1_2209",
    "word": "prayer",
    "pos": "n.",
    "meaning": "คำอธิษฐาน",
    "reading": "แพร (ร)",
    "ipa": "p r ˈe r",
    "level": "B1"
  },
  {
    "id": "b1_2210",
    "word": "prediction",
    "pos": "n.",
    "meaning": "การทำนาย",
    "reading": "ผรี่ ดิ้ ขึ เฉอะ น",
    "ipa": "p r iː d ˈɪ k ʃ ʌ n",
    "level": "B1"
  },
  {
    "id": "b1_2211",
    "word": "prepared",
    "pos": "adj.",
    "meaning": "เตรียมไว้",
    "reading": "ผรี่ แพ้ (ร) ดึ",
    "ipa": "p r iː p ˈe r d",
    "level": "B1"
  },
  {
    "id": "b1_2212",
    "word": "presentation",
    "pos": "n.",
    "meaning": "การนำเสนอ",
    "reading": "เท้ เฉอะ น เพระ เสอะ น",
    "ipa": "p r ˌe z ʌ n t ˈeɪ ʃ ʌ n",
    "level": "B1"
  },
  {
    "id": "b1_2213",
    "word": "press",
    "pos": "n., v.",
    "meaning": "กด",
    "reading": "สึ เพระ",
    "ipa": "p r ˈe s",
    "level": "B1"
  },
  {
    "id": "b1_2214",
    "word": "pressure",
    "pos": "n.",
    "meaning": "ความดัน",
    "reading": "เพร้ะ เฉ่อ ร",
    "ipa": "p r ˈe ʃ ɜːʴ",
    "level": "B1"
  },
  {
    "id": "b1_2215",
    "word": "pretend",
    "pos": "v.",
    "meaning": "แกล้งทำ",
    "reading": "ผรี่ เท้ะ น ดึ",
    "ipa": "p r iː t ˈe n d",
    "level": "B1"
  },
  {
    "id": "b1_2216",
    "word": "previous",
    "pos": "adj.",
    "meaning": "ก่อนหน้า",
    "reading": "พรี้ ฝี่ เออะ สึ",
    "ipa": "p r ˈiː v iː ʌ s",
    "level": "B1"
  },
  {
    "id": "b1_2217",
    "word": "previously",
    "pos": "adv.",
    "meaning": "ก่อนหน้านี้",
    "reading": "พรี้ ฝี่ เออะ สึ หลี่",
    "ipa": "p r ˈiː v iː ʌ s l iː",
    "level": "B1"
  },
  {
    "id": "b1_2218",
    "word": "priest",
    "pos": "n.",
    "meaning": "นักบวช",
    "reading": "พรี สึ ถึ",
    "ipa": "p r ˈiː s t",
    "level": "B1"
  },
  {
    "id": "b1_2219",
    "word": "primary",
    "pos": "adj.",
    "meaning": "หลัก",
    "reading": "พร้าย แม (ร) อี่",
    "ipa": "p r ˈaɪ m ˌe r iː",
    "level": "B1"
  },
  {
    "id": "b1_2220",
    "word": "prince",
    "pos": "n.",
    "meaning": "เจ้าชาย",
    "reading": "พริ น สึ",
    "ipa": "p r ˈɪ n s",
    "level": "B1"
  },
  {
    "id": "b1_2221",
    "word": "princess",
    "pos": "n.",
    "meaning": "เจ้าหญิง",
    "reading": "พริ น เสะ สึ",
    "ipa": "p r ˈɪ n s e s",
    "level": "B1"
  },
  {
    "id": "b1_2222",
    "word": "printing",
    "pos": "n.",
    "meaning": "การพิมพ์",
    "reading": "พริ น ถิ่ ง",
    "ipa": "p r ˈɪ n t ɪ ŋ",
    "level": "B1"
  },
  {
    "id": "b1_2223",
    "word": "prisoner",
    "pos": "n.",
    "meaning": "นักโทษ",
    "reading": "พริ เสอะ เหน่อ ร",
    "ipa": "p r ˈɪ z ʌ n ɜːʴ",
    "level": "B1"
  },
  {
    "id": "b1_2224",
    "word": "private",
    "pos": "adj.",
    "meaning": "ส่วนตัว",
    "reading": "พร้าย เฝอะ ถึ",
    "ipa": "p r ˈaɪ v ʌ t",
    "level": "B1"
  },
  {
    "id": "b1_2225",
    "word": "producer",
    "pos": "n.",
    "meaning": "ผู้ผลิต",
    "reading": "ดู๊ เส่อ ร เผรอะ",
    "ipa": "p r ʌ d ˈuː s ɜːʴ",
    "level": "B1"
  },
  {
    "id": "b1_2226",
    "word": "production",
    "pos": "n.",
    "meaning": "การผลิต",
    "reading": "ด๊ะ ขึ เฉอะ น เผรอะ",
    "ipa": "p r ʌ d ˈʌ k ʃ ʌ n",
    "level": "B1"
  },
  {
    "id": "b1_2227",
    "word": "profession",
    "pos": "n.",
    "meaning": "วิชาชีพ",
    "reading": "เฟ้ะ เฉอะ น เผรอะ",
    "ipa": "p r ʌ f ˈe ʃ ʌ n",
    "level": "B1"
  },
  {
    "id": "b1_2228",
    "word": "profit",
    "pos": "n.",
    "meaning": "กำไร",
    "reading": "พร้า เฝอะ ถึ",
    "ipa": "p r ˈɑː f ʌ t",
    "level": "B1"
  },
  {
    "id": "b1_2229",
    "word": "program",
    "pos": "v.",
    "meaning": "โปรแกรม",
    "reading": "โพร้ว แกร ม",
    "ipa": "p r ˈəʊ g r ˌæ m",
    "level": "B1"
  },
  {
    "id": "b1_2230",
    "word": "promote",
    "pos": "v.",
    "meaning": "ส่งเสริม",
    "reading": "โม้ว ถึ เผรอะ",
    "ipa": "p r ʌ m ˈəʊ t",
    "level": "B1"
  },
  {
    "id": "b1_2231",
    "word": "proper",
    "pos": "adj.",
    "meaning": "เหมาะสม",
    "reading": "พร้า เผ่อ ร",
    "ipa": "p r ˈɑː p ɜːʴ",
    "level": "B1"
  },
  {
    "id": "b1_2232",
    "word": "properly",
    "pos": "adv.",
    "meaning": "อย่างถูกต้อง",
    "reading": "พร้า เผ่อ ร หลี่",
    "ipa": "p r ˈɑː p ɜːʴ l iː",
    "level": "B1"
  },
  {
    "id": "b1_2233",
    "word": "property",
    "pos": "n.",
    "meaning": "คุณสมบัติ",
    "reading": "พร้า เผ่อ ร ถี่",
    "ipa": "p r ˈɑː p ɜːʴ t iː",
    "level": "B1"
  },
  {
    "id": "b1_2234",
    "word": "protest",
    "pos": "n., v.",
    "meaning": "ประท้วง",
    "reading": "โพร้ว เทะ สึ ถึ",
    "ipa": "p r ˈəʊ t ˌe s t",
    "level": "B1"
  },
  {
    "id": "b1_2235",
    "word": "proud",
    "pos": "adj.",
    "meaning": "ภูมิใจ",
    "reading": "ดึ พราว",
    "ipa": "p r ˈaʊ d",
    "level": "B1"
  },
  {
    "id": "b1_2236",
    "word": "prove",
    "pos": "v.",
    "meaning": "พิสูจน์",
    "reading": "พรู ฝึ",
    "ipa": "p r ˈuː v",
    "level": "B1"
  },
  {
    "id": "b1_2237",
    "word": "pull",
    "pos": "n.",
    "meaning": "ดึง",
    "reading": "พุ ล",
    "ipa": "p ˈʊ l",
    "level": "B1"
  },
  {
    "id": "b1_2238",
    "word": "punish",
    "pos": "v.",
    "meaning": "ลงโทษ",
    "reading": "หนิ่ ฉึ พะ",
    "ipa": "p ˈʌ n ɪ ʃ",
    "level": "B1"
  },
  {
    "id": "b1_2239",
    "word": "punishment",
    "pos": "n.",
    "meaning": "การลงโทษ",
    "reading": "หนิ่ ฉึ เหมอะ น ถึ พะ",
    "ipa": "p ˈʌ n ɪ ʃ m ʌ n t",
    "level": "B1"
  },
  {
    "id": "b1_2240",
    "word": "push",
    "pos": "n.",
    "meaning": "ดัน",
    "reading": "พุ ฉึ",
    "ipa": "p ˈʊ ʃ",
    "level": "B1"
  },
  {
    "id": "b1_2241",
    "word": "qualification",
    "pos": "n.",
    "meaning": "ควา คุณสมบัติ",
    "reading": "เค้ เฉอะ น เหลอะ เฝอะ",
    "ipa": "k w ˌɑː l ʌ f ʌ k ˈeɪ ʃ ʌ n",
    "level": "B1"
  },
  {
    "id": "b1_2242",
    "word": "qualified",
    "pos": "adj.",
    "meaning": "มีคุณสมบัติ",
    "reading": "คว้า เหลอะ ฟาย ดึ",
    "ipa": "k w ˈɑː l ʌ f ˌaɪ d",
    "level": "B1"
  },
  {
    "id": "b1_2243",
    "word": "qualify",
    "pos": "v.",
    "meaning": "มีคุณสมบัติ",
    "reading": "คว้า เหลอะ ฟาย",
    "ipa": "k w ˈɑː l ʌ f ˌaɪ",
    "level": "B1"
  },
  {
    "id": "b1_2244",
    "word": "queue",
    "pos": "n., v.",
    "meaning": "คิว",
    "reading": "ขึ ยู",
    "ipa": "k j ˈuː",
    "level": "B1"
  },
  {
    "id": "b1_2245",
    "word": "quit",
    "pos": "v.",
    "meaning": "ล้มเลิก",
    "reading": "ควิ ถึ",
    "ipa": "k w ˈɪ t",
    "level": "B1"
  },
  {
    "id": "b1_2246",
    "word": "quotation",
    "pos": "n.",
    "meaning": "คำอ้างอิง",
    "reading": "โขว่ว เท้ เฉอะ น",
    "ipa": "k w əʊ t ˈeɪ ʃ ʌ n",
    "level": "B1"
  },
  {
    "id": "b1_2247",
    "word": "quote",
    "pos": "v., n.",
    "meaning": "อ้าง",
    "reading": "ถึ โควว",
    "ipa": "k w ˈəʊ t",
    "level": "B1"
  },
  {
    "id": "b1_2248",
    "word": "race",
    "pos": "n.",
    "meaning": "แข่ง",
    "reading": "สึ เร",
    "ipa": "r ˈeɪ s",
    "level": "B1"
  },
  {
    "id": "b1_2249",
    "word": "racing",
    "pos": "n.",
    "meaning": "การแข่งรถ",
    "reading": "เร้ สิ่ ง",
    "ipa": "r ˈeɪ s ɪ ŋ",
    "level": "B1"
  },
  {
    "id": "b1_2250",
    "word": "range",
    "pos": "n.",
    "meaning": "พิสัย",
    "reading": "จึ เร น",
    "ipa": "r ˈeɪ n dʒ",
    "level": "B1"
  },
  {
    "id": "b1_2251",
    "word": "rare",
    "pos": "adj.",
    "meaning": "หายาก",
    "reading": "แร (ร)",
    "ipa": "r ˈe r",
    "level": "B1"
  },
  {
    "id": "b1_2252",
    "word": "rarely",
    "pos": "adv.",
    "meaning": "นานๆ ครั้ง",
    "reading": "แร้ (ร) หลี่",
    "ipa": "r ˈe r l iː",
    "level": "B1"
  },
  {
    "id": "b1_2253",
    "word": "reaction",
    "pos": "n.",
    "meaning": "ปฏิกิริยา",
    "reading": "หรี่ แอ๊ ขึ เฉอะ น",
    "ipa": "r iː ˈæ k ʃ ʌ n",
    "level": "B1"
  },
  {
    "id": "b1_2254",
    "word": "reality",
    "pos": "n.",
    "meaning": "ความเป็นจริง",
    "reading": "รี แอ๊ เหลอะ ที",
    "ipa": "r ˌiː ˈæ l ʌ t ˌiː",
    "level": "B1"
  },
  {
    "id": "b1_2255",
    "word": "receipt",
    "pos": "n.",
    "meaning": "ใบเสร็จ",
    "reading": "หริ่ ซี้ ถึ",
    "ipa": "r ɪ s ˈiː t",
    "level": "B1"
  },
  {
    "id": "b1_2256",
    "word": "recommendation",
    "pos": "n.",
    "meaning": "เระ คำแนะนำ",
    "reading": "เด๊ เฉอะ น เขอะ เหมอะ น",
    "ipa": "r ˌe k ʌ m ʌ n d ˈeɪ ʃ ʌ n",
    "level": "B1"
  },
  {
    "id": "b1_2257",
    "word": "reference",
    "pos": "n.",
    "meaning": "อ้างอิง",
    "reading": "เร้ะ เฝ่อ ร เหรอะ น สึ",
    "ipa": "r ˈe f ɜːʴ ʌ n s",
    "level": "B1"
  },
  {
    "id": "b1_2258",
    "word": "reflect",
    "pos": "v.",
    "meaning": "สะท้อน",
    "reading": "หริ่ เฟล้ะ ขึ ถึ",
    "ipa": "r ɪ f l ˈe k t",
    "level": "B1"
  },
  {
    "id": "b1_2259",
    "word": "regularly",
    "pos": "adv.",
    "meaning": "เป็นประจำ",
    "reading": "เร้ะ กึ เหยอะ เหล่อ ร หลี่",
    "ipa": "r ˈe g j ʌ l ɜːʴ l iː",
    "level": "B1"
  },
  {
    "id": "b1_2260",
    "word": "reject",
    "pos": "v.",
    "meaning": "ปฏิเสธ",
    "reading": "รี้ เจะ ขึ ถึ",
    "ipa": "r ˈiː dʒ e k t",
    "level": "B1"
  },
  {
    "id": "b1_2261",
    "word": "relate",
    "pos": "v.",
    "meaning": "เกี่ยวข้อง",
    "reading": "หริ่ เล้ ถึ",
    "ipa": "r ɪ l ˈeɪ t",
    "level": "B1"
  },
  {
    "id": "b1_2262",
    "word": "related",
    "pos": "adj.",
    "meaning": "ที่เกี่ยวข้อง",
    "reading": "หริ่ เล้ ถิ่ ดึ",
    "ipa": "r ɪ l ˈeɪ t ɪ d",
    "level": "B1"
  },
  {
    "id": "b1_2263",
    "word": "relation",
    "pos": "n.",
    "meaning": "ความสัมพันธ์",
    "reading": "หรี่ เล้ เฉอะ น",
    "ipa": "r iː l ˈeɪ ʃ ʌ n",
    "level": "B1"
  },
  {
    "id": "b1_2264",
    "word": "relative",
    "pos": "adj., n.",
    "meaning": "ญาติ",
    "reading": "เร้ะ เหลอะ ถิ่ ฝึ",
    "ipa": "r ˈe l ʌ t ɪ v",
    "level": "B1"
  },
  {
    "id": "b1_2265",
    "word": "relaxed",
    "pos": "adj.",
    "meaning": "ผ่อนคลาย",
    "reading": "หริ่ แล้ ขึ สึ ถึ",
    "ipa": "r ɪ l ˈæ k s t",
    "level": "B1"
  },
  {
    "id": "b1_2266",
    "word": "relaxing",
    "pos": "adj.",
    "meaning": "ผ่อนคลาย",
    "reading": "หริ่ แล้ ขึ สิ่ ง",
    "ipa": "r ɪ l ˈæ k s ɪ ŋ",
    "level": "B1"
  },
  {
    "id": "b1_2267",
    "word": "release",
    "pos": "v., n.",
    "meaning": "ปล่อย",
    "reading": "หรี่ ลี้ สึ",
    "ipa": "r iː l ˈiː s",
    "level": "B1"
  },
  {
    "id": "b1_2268",
    "word": "reliable",
    "pos": "adj.",
    "meaning": "เชื่อถือได้",
    "reading": "หริ่ ล้าย เออะ เบอะ ล",
    "ipa": "r ɪ l ˈaɪ ʌ b ʌ l",
    "level": "B1"
  },
  {
    "id": "b1_2269",
    "word": "religion",
    "pos": "n.",
    "meaning": "ศาสนา",
    "reading": "หริ่ ลิ เจอะ น",
    "ipa": "r ɪ l ˈɪ dʒ ʌ n",
    "level": "B1"
  },
  {
    "id": "b1_2270",
    "word": "religious",
    "pos": "adj.",
    "meaning": "เคร่งศาสนา",
    "reading": "หริ่ ลิ เจอะ สึ",
    "ipa": "r ɪ l ˈɪ dʒ ʌ s",
    "level": "B1"
  },
  {
    "id": "b1_2271",
    "word": "remain",
    "pos": "v.",
    "meaning": "ยังคง",
    "reading": "หริ่ เม้ น",
    "ipa": "r ɪ m ˈeɪ n",
    "level": "B1"
  },
  {
    "id": "b1_2272",
    "word": "remind",
    "pos": "v.",
    "meaning": "เตือน",
    "reading": "หรี่ ม้าย น ดึ",
    "ipa": "r iː m ˈaɪ n d",
    "level": "B1"
  },
  {
    "id": "b1_2273",
    "word": "remote",
    "pos": "adj.",
    "meaning": "ระยะไกล",
    "reading": "หริ่ โม้ว ถึ",
    "ipa": "r ɪ m ˈəʊ t",
    "level": "B1"
  },
  {
    "id": "b1_2274",
    "word": "rent",
    "pos": "n., v.",
    "meaning": "เช่า",
    "reading": "ถึ เระ น",
    "ipa": "r ˈe n t",
    "level": "B1"
  },
  {
    "id": "b1_2275",
    "word": "repair",
    "pos": "n.",
    "meaning": "ซ่อมแซม",
    "reading": "หริ่ แพ้ (ร)",
    "ipa": "r ɪ p ˈe r",
    "level": "B1"
  },
  {
    "id": "b1_2276",
    "word": "repeat",
    "pos": "n.",
    "meaning": "ทำซ้ำ",
    "reading": "หริ่ พี้ ถึ",
    "ipa": "r ɪ p ˈiː t",
    "level": "B1"
  },
  {
    "id": "b1_2277",
    "word": "repeated",
    "pos": "adj.",
    "meaning": "ซ้ำแล้วซ้ำเล่า",
    "reading": "หริ่ พี้ ถิ่ ดึ",
    "ipa": "r ɪ p ˈiː t ɪ d",
    "level": "B1"
  },
  {
    "id": "b1_2278",
    "word": "represent",
    "pos": "v.",
    "meaning": "แทน",
    "reading": "ผริ่ เซ้ะ น ถึ เระ",
    "ipa": "r ˌe p r ɪ z ˈe n t",
    "level": "B1"
  },
  {
    "id": "b1_2279",
    "word": "request",
    "pos": "v.",
    "meaning": "ขอ",
    "reading": "หริ่ เคว้ะ สึ ถึ",
    "ipa": "r ɪ k w ˈe s t",
    "level": "B1"
  },
  {
    "id": "b1_2280",
    "word": "require",
    "pos": "v.",
    "meaning": "จำเป็นต้อง",
    "reading": "รี คว้าย เอ่อ ร",
    "ipa": "r ˌiː k w ˈaɪ ɜːʴ",
    "level": "B1"
  },
  {
    "id": "b1_2281",
    "word": "reservation",
    "pos": "n.",
    "meaning": "การจอง",
    "reading": "เส่อ ร เฟ้ เฉอะ น เระ",
    "ipa": "r ˌe z ɜːʴ v ˈeɪ ʃ ʌ n",
    "level": "B1"
  },
  {
    "id": "b1_2282",
    "word": "resource",
    "pos": "n.",
    "meaning": "ทรัพยากร",
    "reading": "รี้ โส่ (ร) สึ",
    "ipa": "r ˈiː s ɔː r s",
    "level": "B1"
  },
  {
    "id": "b1_2283",
    "word": "respect",
    "pos": "n., v.",
    "meaning": "เคารพ",
    "reading": "หริ่ สึ เพ้ะ ขึ ถึ",
    "ipa": "r ɪ s p ˈe k t",
    "level": "B1"
  },
  {
    "id": "b1_2284",
    "word": "responsibility",
    "pos": "n.",
    "meaning": "หรี่ ความรับผิดชอบ",
    "reading": "สึ พา น เสอะ บิ้ เหลอะ ถี่",
    "ipa": "r iː s p ˌɑː n s ʌ b ˈɪ l ʌ t iː",
    "level": "B1"
  },
  {
    "id": "b1_2285",
    "word": "responsible",
    "pos": "adj.",
    "meaning": "รับผิดชอบ",
    "reading": "หรี่ สึ พ้า น เสอะ เบอะ ล",
    "ipa": "r iː s p ˈɑː n s ʌ b ʌ l",
    "level": "B1"
  },
  {
    "id": "b1_2286",
    "word": "result",
    "pos": "v.",
    "meaning": "ผลลัพธ์",
    "reading": "หริ่ ซะ ล ถึ",
    "ipa": "r ɪ z ˈʌ l t",
    "level": "B1"
  },
  {
    "id": "b1_2287",
    "word": "retire",
    "pos": "v.",
    "meaning": "เกษียณอายุ",
    "reading": "หริ่ ท้าย ร",
    "ipa": "r ɪ t ˈaɪ r",
    "level": "B1"
  },
  {
    "id": "b1_2288",
    "word": "retired",
    "pos": "adj.",
    "meaning": "เกษียณแล้ว",
    "reading": "หริ่ ท้าย ร ดึ",
    "ipa": "r ɪ t ˈaɪ r d",
    "level": "B1"
  },
  {
    "id": "b1_2289",
    "word": "revise",
    "pos": "v.",
    "meaning": "ปรับปรุงใหม่",
    "reading": "หริ่ ฟ้าย สึ",
    "ipa": "r ɪ v ˈaɪ z",
    "level": "B1"
  },
  {
    "id": "b1_2290",
    "word": "ring",
    "pos": "n.",
    "meaning": "แหวน",
    "reading": "ริ ง",
    "ipa": "r ˈɪ ŋ",
    "level": "B1"
  },
  {
    "id": "b1_2291",
    "word": "rise",
    "pos": "n.",
    "meaning": "ลุกขึ้น",
    "reading": "สึ ราย",
    "ipa": "r ˈaɪ z",
    "level": "B1"
  },
  {
    "id": "b1_2292",
    "word": "risk",
    "pos": "n., v.",
    "meaning": "เสี่ยง",
    "reading": "ริ สึ ขึ",
    "ipa": "r ˈɪ s k",
    "level": "B1"
  },
  {
    "id": "b1_2293",
    "word": "robot",
    "pos": "n.",
    "meaning": "หุ่นยนต์",
    "reading": "โร้ว บา ถึ",
    "ipa": "r ˈəʊ b ˌɑː t",
    "level": "B1"
  },
  {
    "id": "b1_2294",
    "word": "roll",
    "pos": "v., n.",
    "meaning": "ม้วน",
    "reading": "โรว ล",
    "ipa": "r ˈəʊ l",
    "level": "B1"
  },
  {
    "id": "b1_2295",
    "word": "romantic",
    "pos": "adj.",
    "meaning": "โรแมนติก",
    "reading": "โหร่ว แม้ น ถิ่ ขึ",
    "ipa": "r əʊ m ˈæ n t ɪ k",
    "level": "B1"
  },
  {
    "id": "b1_2296",
    "word": "rope",
    "pos": "n.",
    "meaning": "เชือก",
    "reading": "ผึ โรว",
    "ipa": "r ˈəʊ p",
    "level": "B1"
  },
  {
    "id": "b1_2297",
    "word": "rough",
    "pos": "adj.",
    "meaning": "ขรุขระ",
    "reading": "ฝึ ระ",
    "ipa": "r ˈʌ f",
    "level": "B1"
  },
  {
    "id": "b1_2298",
    "word": "row",
    "pos": "n.",
    "meaning": "แถว",
    "reading": "โรว",
    "ipa": "r ˈəʊ",
    "level": "B1"
  },
  {
    "id": "b1_2299",
    "word": "royal",
    "pos": "adj.",
    "meaning": "พระราช",
    "reading": "ร้อย เออะ ล",
    "ipa": "r ˈɔɪ ʌ l",
    "level": "B1"
  },
  {
    "id": "b1_2300",
    "word": "rugby",
    "pos": "n.",
    "meaning": "รักบี้",
    "reading": "กึ บี่ ระ",
    "ipa": "r ˈʌ g b iː",
    "level": "B1"
  },
  {
    "id": "b1_2301",
    "word": "rule",
    "pos": "v.",
    "meaning": "กฎ",
    "reading": "รู ล",
    "ipa": "r ˈuː l",
    "level": "B1"
  },
  {
    "id": "b1_2302",
    "word": "safety",
    "pos": "n.",
    "meaning": "ความปลอดภัย",
    "reading": "เซ้ ฝึ ถี่",
    "ipa": "s ˈeɪ f t iː",
    "level": "B1"
  },
  {
    "id": "b1_2303",
    "word": "sail",
    "pos": "n.",
    "meaning": "แล่นเรือ",
    "reading": "เซ ล",
    "ipa": "s ˈeɪ l",
    "level": "B1"
  },
  {
    "id": "b1_2304",
    "word": "sailor",
    "pos": "n.",
    "meaning": "กะลาสีเรือ",
    "reading": "เซ้ เหล่อ ร",
    "ipa": "s ˈeɪ l ɜːʴ",
    "level": "B1"
  },
  {
    "id": "b1_2305",
    "word": "sample",
    "pos": "n.",
    "meaning": "ตัวอย่าง",
    "reading": "แซ้ ม เผอะ ล",
    "ipa": "s ˈæ m p ʌ l",
    "level": "B1"
  },
  {
    "id": "b1_2306",
    "word": "sand",
    "pos": "n.",
    "meaning": "ทราย",
    "reading": "ดึ แซ น",
    "ipa": "s ˈæ n d",
    "level": "B1"
  },
  {
    "id": "b1_2307",
    "word": "scan",
    "pos": "v.",
    "meaning": "สแกน",
    "reading": "สึ แค น",
    "ipa": "s k ˈæ n",
    "level": "B1"
  },
  {
    "id": "b1_2308",
    "word": "scientific",
    "pos": "adj.",
    "meaning": "ทางวิทยาศาสตร์",
    "reading": "ทิ ฝิ่ ขึ ซาย เออะ น",
    "ipa": "s ˌaɪ ʌ n t ˈɪ f ɪ k",
    "level": "B1"
  },
  {
    "id": "b1_2309",
    "word": "script",
    "pos": "n.",
    "meaning": "สคริปต์",
    "reading": "สึ คริ ผึ ถึ",
    "ipa": "s k r ˈɪ p t",
    "level": "B1"
  },
  {
    "id": "b1_2310",
    "word": "sculpture",
    "pos": "n.",
    "meaning": "ประติมากรรม",
    "reading": "สึ คะ ล ผึ เฉ่อ ร",
    "ipa": "s k ˈʌ l p tʃ ɜːʴ",
    "level": "B1"
  },
  {
    "id": "b1_2311",
    "word": "secondary",
    "pos": "adj.",
    "meaning": "รอง",
    "reading": "เซ้ะ เขอะ น แด (ร) อี่",
    "ipa": "s ˈe k ʌ n d ˌe r iː",
    "level": "B1"
  },
  {
    "id": "b1_2312",
    "word": "security",
    "pos": "n.",
    "meaning": "ความปลอดภัย",
    "reading": "สิ่ ขึ ยั้ว ร เออะ ถี่",
    "ipa": "s ɪ k j ˈʊ r ʌ t iː",
    "level": "B1"
  },
  {
    "id": "b1_2313",
    "word": "seed",
    "pos": "n.",
    "meaning": "เมล็ดพันธุ์",
    "reading": "ซี ดึ",
    "ipa": "s ˈiː d",
    "level": "B1"
  },
  {
    "id": "b1_2314",
    "word": "sensible",
    "pos": "adj.",
    "meaning": "สมเหตุสมผล",
    "reading": "เซ้ะ น เสอะ เบอะ ล",
    "ipa": "s ˈe n s ʌ b ʌ l",
    "level": "B1"
  },
  {
    "id": "b1_2315",
    "word": "separate",
    "pos": "v.",
    "meaning": "แยก",
    "reading": "เซ้ะ เผ่อ ร หริ่ ถึ",
    "ipa": "s ˈe p ɜːʴ ɪ t",
    "level": "B1"
  },
  {
    "id": "b1_2316",
    "word": "seriously",
    "pos": "adv.",
    "meaning": "อย่างจริงจัง",
    "reading": "เซี้ย (ร) อี่ เออะ สึ หลี่",
    "ipa": "s ˈɪ r iː ʌ s l iː",
    "level": "B1"
  },
  {
    "id": "b1_2317",
    "word": "servant",
    "pos": "n.",
    "meaning": "คนรับใช้",
    "reading": "เซ้อ ร เฝอะ น ถึ",
    "ipa": "s ˈɜːʴ v ʌ n t",
    "level": "B1"
  },
  {
    "id": "b1_2318",
    "word": "set",
    "pos": "v.",
    "meaning": "ชุด",
    "reading": "ถึ เซะ",
    "ipa": "s ˈe t",
    "level": "B1"
  },
  {
    "id": "b1_2319",
    "word": "setting",
    "pos": "n.",
    "meaning": "การตั้งค่า",
    "reading": "เซ้ะ ถิ่ ง",
    "ipa": "s ˈe t ɪ ŋ",
    "level": "B1"
  },
  {
    "id": "b1_2320",
    "word": "sex",
    "pos": "n.",
    "meaning": "เพศ",
    "reading": "เซะ ขึ สึ",
    "ipa": "s ˈe k s",
    "level": "B1"
  },
  {
    "id": "b1_2321",
    "word": "sexual",
    "pos": "adj.",
    "meaning": "ทางเพศ",
    "reading": "เซ้ะ ขึ ฉู่ เออะ ล",
    "ipa": "s ˈe k ʃ uː ʌ l",
    "level": "B1"
  },
  {
    "id": "b1_2322",
    "word": "shake",
    "pos": "n.",
    "meaning": "เขย่า",
    "reading": "ขึ เช",
    "ipa": "ʃ ˈeɪ k",
    "level": "B1"
  },
  {
    "id": "b1_2323",
    "word": "share",
    "pos": "n.",
    "meaning": "แบ่งปัน",
    "reading": "แช (ร)",
    "ipa": "ʃ ˈe r",
    "level": "B1"
  },
  {
    "id": "b1_2324",
    "word": "sharp",
    "pos": "adj.",
    "meaning": "คม",
    "reading": "ผึ ชา (ร)",
    "ipa": "ʃ ˈɑː r p",
    "level": "B1"
  },
  {
    "id": "b1_2325",
    "word": "shelf",
    "pos": "n.",
    "meaning": "ชั้นวาง",
    "reading": "ฝึ เชะ ล",
    "ipa": "ʃ ˈe l f",
    "level": "B1"
  },
  {
    "id": "b1_2326",
    "word": "shell",
    "pos": "n.",
    "meaning": "เปลือก",
    "reading": "เชะ ล",
    "ipa": "ʃ ˈe l",
    "level": "B1"
  },
  {
    "id": "b1_2327",
    "word": "shift",
    "pos": "n.",
    "meaning": "กะ",
    "reading": "ชิ ฝึ ถึ",
    "ipa": "ʃ ˈɪ f t",
    "level": "B1"
  },
  {
    "id": "b1_2328",
    "word": "shine",
    "pos": "v.",
    "meaning": "ส่องแสง",
    "reading": "ชาย น",
    "ipa": "ʃ ˈaɪ n",
    "level": "B1"
  },
  {
    "id": "b1_2329",
    "word": "shiny",
    "pos": "adj.",
    "meaning": "มันเงา",
    "reading": "ช้าย หนี่",
    "ipa": "ʃ ˈaɪ n iː",
    "level": "B1"
  },
  {
    "id": "b1_2330",
    "word": "shoot",
    "pos": "v.",
    "meaning": "ยิง",
    "reading": "ชู ถึ",
    "ipa": "ʃ ˈuː t",
    "level": "B1"
  },
  {
    "id": "b1_2331",
    "word": "shy",
    "pos": "adj.",
    "meaning": "อาย",
    "reading": "ชาย",
    "ipa": "ʃ ˈaɪ",
    "level": "B1"
  },
  {
    "id": "b1_2332",
    "word": "sight",
    "pos": "n.",
    "meaning": "ภาพ",
    "reading": "ถึ ซาย",
    "ipa": "s ˈaɪ t",
    "level": "B1"
  },
  {
    "id": "b1_2333",
    "word": "signal",
    "pos": "n., v.",
    "meaning": "สัญญาณ",
    "reading": "ซิ กึ เหนอะ ล",
    "ipa": "s ˈɪ g n ʌ l",
    "level": "B1"
  },
  {
    "id": "b1_2334",
    "word": "silent",
    "pos": "adj.",
    "meaning": "เงียบ",
    "reading": "ซ้าย เหลอะ น ถึ",
    "ipa": "s ˈaɪ l ʌ n t",
    "level": "B1"
  },
  {
    "id": "b1_2335",
    "word": "silly",
    "pos": "adj.",
    "meaning": "โง่",
    "reading": "ซิ หลี่",
    "ipa": "s ˈɪ l iː",
    "level": "B1"
  },
  {
    "id": "b1_2336",
    "word": "similarity",
    "pos": "n.",
    "meaning": "ความคล้ายคลึงกัน",
    "reading": "ซิ เหมอะ แล้ (ร) เออะ ถี่",
    "ipa": "s ˌɪ m ʌ l ˈe r ʌ t iː",
    "level": "B1"
  },
  {
    "id": "b1_2337",
    "word": "similarly",
    "pos": "adv.",
    "meaning": "ในทำนองเดียวกัน",
    "reading": "ซิ เหมอะ เหล่อ ร หลี่",
    "ipa": "s ˈɪ m ʌ l ɜːʴ l iː",
    "level": "B1"
  },
  {
    "id": "b1_2338",
    "word": "simply",
    "pos": "adv.",
    "meaning": "อย่างง่าย",
    "reading": "ซิ ม ผลี่",
    "ipa": "s ˈɪ m p l iː",
    "level": "B1"
  },
  {
    "id": "b1_2339",
    "word": "since",
    "pos": "adv.",
    "meaning": "เนื่องจาก",
    "reading": "ซิ น สึ",
    "ipa": "s ˈɪ n s",
    "level": "B1"
  },
  {
    "id": "b1_2340",
    "word": "sink",
    "pos": "v.",
    "meaning": "จม",
    "reading": "ซิ ง ขึ",
    "ipa": "s ˈɪ ŋ k",
    "level": "B1"
  },
  {
    "id": "b1_2341",
    "word": "slice",
    "pos": "n., v.",
    "meaning": "ชิ้น",
    "reading": "สึ ลาย สึ",
    "ipa": "s l ˈaɪ s",
    "level": "B1"
  },
  {
    "id": "b1_2342",
    "word": "slightly",
    "pos": "adv.",
    "meaning": "เล็กน้อย",
    "reading": "สึ ล้าย ถลี่",
    "ipa": "s l ˈaɪ t l iː",
    "level": "B1"
  },
  {
    "id": "b1_2343",
    "word": "slow",
    "pos": "v.",
    "meaning": "ช้า",
    "reading": "สึ โลว",
    "ipa": "s l ˈəʊ",
    "level": "B1"
  },
  {
    "id": "b1_2344",
    "word": "smart",
    "pos": "adj.",
    "meaning": "ปราดเปรื่อง",
    "reading": "สึ มา (ร) ถึ",
    "ipa": "s m ˈɑː r t",
    "level": "B1"
  },
  {
    "id": "b1_2345",
    "word": "smooth",
    "pos": "adj.",
    "meaning": "เรียบ",
    "reading": "สึ มู ดึ",
    "ipa": "s m ˈuː ð",
    "level": "B1"
  },
  {
    "id": "b1_2346",
    "word": "software",
    "pos": "n.",
    "meaning": "ซอฟต์แวร์",
    "reading": "ซ้อ ฝึ แทว (ร)",
    "ipa": "s ˈɔː f t w ˌe r",
    "level": "B1"
  },
  {
    "id": "b1_2347",
    "word": "soil",
    "pos": "n.",
    "meaning": "ดิน",
    "reading": "ซออย ล",
    "ipa": "s ˈɔɪ l",
    "level": "B1"
  },
  {
    "id": "b1_2348",
    "word": "solid",
    "pos": "adj., n.",
    "meaning": "แข็ง",
    "reading": "ซ้า เหลอะ ดึ",
    "ipa": "s ˈɑː l ʌ d",
    "level": "B1"
  },
  {
    "id": "b1_2349",
    "word": "sort",
    "pos": "v.",
    "meaning": "เรียงลำดับ",
    "reading": "ถึ โซ (ร)",
    "ipa": "s ˈɔː r t",
    "level": "B1"
  },
  {
    "id": "b1_2350",
    "word": "southern",
    "pos": "adj.",
    "meaning": "ภาคใต้",
    "reading": "เด่อ ร น ซะ",
    "ipa": "s ˈʌ ð ɜːʴ n",
    "level": "B1"
  },
  {
    "id": "b1_2351",
    "word": "specifically",
    "pos": "adv.",
    "meaning": "โดยเฉพาะ",
    "reading": "สึ เผอะ ซิ ฝิ่ ขลี่",
    "ipa": "s p ʌ s ˈɪ f ɪ k l iː",
    "level": "B1"
  },
  {
    "id": "b1_2352",
    "word": "spending",
    "pos": "n.",
    "meaning": "การใช้จ่าย",
    "reading": "สึ เพ้ะ น ดิ ง",
    "ipa": "s p ˈe n d ɪ ŋ",
    "level": "B1"
  },
  {
    "id": "b1_2353",
    "word": "spicy",
    "pos": "adj.",
    "meaning": "เผ็ด",
    "reading": "สึ พ้าย สี่",
    "ipa": "s p ˈaɪ s iː",
    "level": "B1"
  },
  {
    "id": "b1_2354",
    "word": "spirit",
    "pos": "n.",
    "meaning": "วิญญาณ",
    "reading": "สึ เพี้ย (ร) เออะ ถึ",
    "ipa": "s p ˈɪ r ʌ t",
    "level": "B1"
  },
  {
    "id": "b1_2355",
    "word": "spoken",
    "pos": "adj.",
    "meaning": "พูดแล้ว",
    "reading": "สึ โพ้ว เขอะ น",
    "ipa": "s p ˈəʊ k ʌ n",
    "level": "B1"
  },
  {
    "id": "b1_2356",
    "word": "spot",
    "pos": "n.",
    "meaning": "จุด",
    "reading": "สึ พา ถึ",
    "ipa": "s p ˈɑː t",
    "level": "B1"
  },
  {
    "id": "b1_2357",
    "word": "spread",
    "pos": "v.",
    "meaning": "การแพร่กระจาย",
    "reading": "สึ เพระ ดึ",
    "ipa": "s p r ˈe d",
    "level": "B1"
  },
  {
    "id": "b1_2358",
    "word": "spring",
    "pos": "v.",
    "meaning": "ฤดูใบไม้ผลิ",
    "reading": "สึ พริ ง",
    "ipa": "s p r ˈɪ ŋ",
    "level": "B1"
  },
  {
    "id": "b1_2359",
    "word": "stadium",
    "pos": "n.",
    "meaning": "สนามกีฬา",
    "reading": "สึ เท้ ดี่ เออะ ม",
    "ipa": "s t ˈeɪ d iː ʌ m",
    "level": "B1"
  },
  {
    "id": "b1_2360",
    "word": "staff",
    "pos": "n.",
    "meaning": "พนักงาน",
    "reading": "สึ แท ฝึ",
    "ipa": "s t ˈæ f",
    "level": "B1"
  },
  {
    "id": "b1_2361",
    "word": "standard",
    "pos": "n., adj.",
    "meaning": "มาตรฐาน",
    "reading": "สึ แท้ น เด่อ ร ดึ",
    "ipa": "s t ˈæ n d ɜːʴ d",
    "level": "B1"
  },
  {
    "id": "b1_2362",
    "word": "state",
    "pos": "adj., v.",
    "meaning": "สถานะ",
    "reading": "สึ เท ถึ",
    "ipa": "s t ˈeɪ t",
    "level": "B1"
  },
  {
    "id": "b1_2363",
    "word": "statistic",
    "pos": "n.",
    "meaning": "สถิติ",
    "reading": "สึ เถอะ ทิ สึ ถิ่ ขึ",
    "ipa": "s t ʌ t ˈɪ s t ɪ k",
    "level": "B1"
  },
  {
    "id": "b1_2364",
    "word": "statue",
    "pos": "n.",
    "meaning": "รูปปั้น",
    "reading": "สึ แท้ ชู",
    "ipa": "s t ˈæ tʃ ˌuː",
    "level": "B1"
  },
  {
    "id": "b1_2365",
    "word": "stick",
    "pos": "v. n.",
    "meaning": "ติด",
    "reading": "สึ ทิ ขึ",
    "ipa": "s t ˈɪ k",
    "level": "B1"
  },
  {
    "id": "b1_2366",
    "word": "still",
    "pos": "adj.",
    "meaning": "นิ่ง",
    "reading": "สึ ทิ ล",
    "ipa": "s t ˈɪ l",
    "level": "B1"
  },
  {
    "id": "b1_2367",
    "word": "store",
    "pos": "v.",
    "meaning": "เก็บ",
    "reading": "สึ โท (ร)",
    "ipa": "s t ˈɔː r",
    "level": "B1"
  },
  {
    "id": "b1_2368",
    "word": "stranger",
    "pos": "n.",
    "meaning": "คนแปลกหน้า",
    "reading": "สึ เทร้ น เจ่อ ร",
    "ipa": "s t r ˈeɪ n dʒ ɜːʴ",
    "level": "B1"
  },
  {
    "id": "b1_2369",
    "word": "strength",
    "pos": "n.",
    "meaning": "ความแข็งแกร่ง",
    "reading": "สึ เทระ ง ขึ ตึ",
    "ipa": "s t r ˈe ŋ k θ",
    "level": "B1"
  },
  {
    "id": "b1_2370",
    "word": "string",
    "pos": "n.",
    "meaning": "เชือก",
    "reading": "สึ ทริ ง",
    "ipa": "s t r ˈɪ ŋ",
    "level": "B1"
  },
  {
    "id": "b1_2371",
    "word": "strongly",
    "pos": "adv.",
    "meaning": "อย่างยิ่ง",
    "reading": "สึ ทร้อ ง หลี่",
    "ipa": "s t r ˈɔː ŋ l iː",
    "level": "B1"
  },
  {
    "id": "b1_2372",
    "word": "studio",
    "pos": "n.",
    "meaning": "สตูดิโอ",
    "reading": "สึ ทู้ ดี่ โอว",
    "ipa": "s t ˈuː d iː ˌəʊ",
    "level": "B1"
  },
  {
    "id": "b1_2373",
    "word": "stuff",
    "pos": "n.",
    "meaning": "สิ่งของ",
    "reading": "สึ ทะ ฝึ",
    "ipa": "s t ˈʌ f",
    "level": "B1"
  },
  {
    "id": "b1_2374",
    "word": "substance",
    "pos": "n.",
    "meaning": "สาร",
    "reading": "บึ สึ เถอะ น สึ ซะ",
    "ipa": "s ˈʌ b s t ʌ n s",
    "level": "B1"
  },
  {
    "id": "b1_2375",
    "word": "successfully",
    "pos": "adv.",
    "meaning": "ประสบความสำเร็จ",
    "reading": "ขึ เซ้ะ สึ เฝอะ หลี่ เสอะ",
    "ipa": "s ʌ k s ˈe s f ʌ l iː",
    "level": "B1"
  },
  {
    "id": "b1_2376",
    "word": "sudden",
    "pos": "adj.",
    "meaning": "กะทันหัน",
    "reading": "ซะ เดอะ น",
    "ipa": "s ˈʌ d ʌ n",
    "level": "B1"
  },
  {
    "id": "b1_2377",
    "word": "suffer",
    "pos": "v.",
    "meaning": "ทุกข์ทรมาน",
    "reading": "เฝ่อ ร ซะ",
    "ipa": "s ˈʌ f ɜːʴ",
    "level": "B1"
  },
  {
    "id": "b1_2378",
    "word": "suit",
    "pos": "v.",
    "meaning": "สูท",
    "reading": "ซู ถึ",
    "ipa": "s ˈuː t",
    "level": "B1"
  },
  {
    "id": "b1_2379",
    "word": "suitable",
    "pos": "adj.",
    "meaning": "เหมาะสม",
    "reading": "ซู้ เถอะ เบอะ ล",
    "ipa": "s ˈuː t ʌ b ʌ l",
    "level": "B1"
  },
  {
    "id": "b1_2380",
    "word": "summarize",
    "pos": "v.",
    "meaning": "สรุป",
    "reading": "เหม่อ ร ราย สึ ซะ",
    "ipa": "s ˈʌ m ɜːʴ ˌaɪ z",
    "level": "B1"
  },
  {
    "id": "b1_2381",
    "word": "summary",
    "pos": "n",
    "meaning": "สรุป",
    "reading": "เหม่อ ร หรี่ ซะ",
    "ipa": "s ˈʌ m ɜːʴ iː",
    "level": "B1"
  },
  {
    "id": "b1_2382",
    "word": "supply",
    "pos": "n., v.",
    "meaning": "จัดหา",
    "reading": "พล้าย เสอะ",
    "ipa": "s ʌ p l ˈaɪ",
    "level": "B1"
  },
  {
    "id": "b1_2383",
    "word": "supporter",
    "pos": "n.",
    "meaning": "ผู้สนับสนุน",
    "reading": "โพ้ (ร) เถ่อ ร เสอะ",
    "ipa": "s ʌ p ˈɔː r t ɜːʴ",
    "level": "B1"
  },
  {
    "id": "b1_2384",
    "word": "surely",
    "pos": "adv.",
    "meaning": "แน่นอน",
    "reading": "ชั้ว ร หลี่",
    "ipa": "ʃ ˈʊ r l iː",
    "level": "B1"
  },
  {
    "id": "b1_2385",
    "word": "surface",
    "pos": "n.",
    "meaning": "พื้นผิว",
    "reading": "เซ้อ ร เฝอะ สึ",
    "ipa": "s ˈɜːʴ f ʌ s",
    "level": "B1"
  },
  {
    "id": "b1_2386",
    "word": "survive",
    "pos": "v.",
    "meaning": "รอดชีวิต",
    "reading": "เส่อ ร ฟ้าย ฝึ",
    "ipa": "s ɜːʴ v ˈaɪ v",
    "level": "B1"
  },
  {
    "id": "b1_2387",
    "word": "swim",
    "pos": "n.",
    "meaning": "ว่ายน้ำ",
    "reading": "สึ วิ ม",
    "ipa": "s w ˈɪ m",
    "level": "B1"
  },
  {
    "id": "b1_2388",
    "word": "switch",
    "pos": "v.",
    "meaning": "สวิตช์",
    "reading": "สึ วิ ฉึ",
    "ipa": "s w ˈɪ tʃ",
    "level": "B1"
  },
  {
    "id": "b1_2389",
    "word": "symptom",
    "pos": "n.",
    "meaning": "อาการ",
    "reading": "ซิ ม ผึ เถอะ ม",
    "ipa": "s ˈɪ m p t ʌ m",
    "level": "B1"
  },
  {
    "id": "b1_2390",
    "word": "tail",
    "pos": "n.",
    "meaning": "หาง",
    "reading": "เท ล",
    "ipa": "t ˈeɪ l",
    "level": "B1"
  },
  {
    "id": "b1_2391",
    "word": "talent",
    "pos": "n.",
    "meaning": "ความสามารถพิเศษ",
    "reading": "แท้ เหลอะ น ถึ",
    "ipa": "t ˈæ l ʌ n t",
    "level": "B1"
  },
  {
    "id": "b1_2392",
    "word": "talented",
    "pos": "adj.",
    "meaning": "มีความสามารถ",
    "reading": "แท้ เหลอะ น ถิ่ ดึ",
    "ipa": "t ˈæ l ʌ n t ɪ d",
    "level": "B1"
  },
  {
    "id": "b1_2393",
    "word": "tape",
    "pos": "n.",
    "meaning": "เทป",
    "reading": "ผึ เท",
    "ipa": "t ˈeɪ p",
    "level": "B1"
  },
  {
    "id": "b1_2394",
    "word": "tax",
    "pos": "n., v.",
    "meaning": "ภาษี",
    "reading": "ขึ สึ แท",
    "ipa": "t ˈæ k s",
    "level": "B1"
  },
  {
    "id": "b1_2395",
    "word": "technical",
    "pos": "adj.",
    "meaning": "เทคนิค",
    "reading": "เท้ะ ขึ หนิ่ เขอะ ล",
    "ipa": "t ˈe k n ɪ k ʌ l",
    "level": "B1"
  },
  {
    "id": "b1_2396",
    "word": "technique",
    "pos": "n.",
    "meaning": "เทคนิค",
    "reading": "ขึ นี้ ขึ เถะ",
    "ipa": "t e k n ˈiː k",
    "level": "B1"
  },
  {
    "id": "b1_2397",
    "word": "tend",
    "pos": "v.",
    "meaning": "มีแนวโน้ม",
    "reading": "ดึ เทะ น",
    "ipa": "t ˈe n d",
    "level": "B1"
  },
  {
    "id": "b1_2398",
    "word": "tent",
    "pos": "n.",
    "meaning": "เต็นท์",
    "reading": "ถึ เทะ น",
    "ipa": "t ˈe n t",
    "level": "B1"
  },
  {
    "id": "b1_2399",
    "word": "that",
    "pos": "adv.",
    "meaning": "ที่",
    "reading": "ถึ แด",
    "ipa": "ð ˈæ t",
    "level": "B1"
  },
  {
    "id": "b1_2400",
    "word": "theirs",
    "pos": "pron.",
    "meaning": "พวกเขา",
    "reading": "สึ แด (ร)",
    "ipa": "ð ˈe r z",
    "level": "B1"
  },
  {
    "id": "b1_2401",
    "word": "theme",
    "pos": "n.",
    "meaning": "ธีม",
    "reading": "ตี ม",
    "ipa": "θ ˈiː m",
    "level": "B1"
  },
  {
    "id": "b1_2402",
    "word": "theory",
    "pos": "n.",
    "meaning": "ทฤษฎี",
    "reading": "เตี๊ย (ร) อี่",
    "ipa": "θ ˈɪ r iː",
    "level": "B1"
  },
  {
    "id": "b1_2403",
    "word": "therefore",
    "pos": "adv.",
    "meaning": "ดังนั้น",
    "reading": "แด๊ (ร) โฟ (ร)",
    "ipa": "ð ˈe r f ˌɔː r",
    "level": "B1"
  },
  {
    "id": "b1_2404",
    "word": "this",
    "pos": "adv.",
    "meaning": "นี้",
    "reading": "ดิ สึ",
    "ipa": "ð ˈɪ s",
    "level": "B1"
  },
  {
    "id": "b1_2405",
    "word": "though",
    "pos": "conj., adv.",
    "meaning": "แม้ว่า",
    "reading": "โดว",
    "ipa": "ð ˈəʊ",
    "level": "B1"
  },
  {
    "id": "b1_2406",
    "word": "throat",
    "pos": "n.",
    "meaning": "คอ",
    "reading": "ถึ โตรว",
    "ipa": "θ r ˈəʊ t",
    "level": "B1"
  },
  {
    "id": "b1_2407",
    "word": "throughout",
    "pos": "prep./adv.",
    "meaning": "ตลอดทั้ง",
    "reading": "ตรู่ อ๊าว ถึ",
    "ipa": "θ r uː ˈaʊ t",
    "level": "B1"
  },
  {
    "id": "b1_2408",
    "word": "tight",
    "pos": "adj.",
    "meaning": "แน่น",
    "reading": "ถึ ทาย",
    "ipa": "t ˈaɪ t",
    "level": "B1"
  },
  {
    "id": "b1_2409",
    "word": "till",
    "pos": "conj./prep.",
    "meaning": "จนถึง",
    "reading": "ทิ ล",
    "ipa": "t ˈɪ l",
    "level": "B1"
  },
  {
    "id": "b1_2410",
    "word": "tin",
    "pos": "n.",
    "meaning": "ดีบุก",
    "reading": "ทิ น",
    "ipa": "t ˈɪ n",
    "level": "B1"
  },
  {
    "id": "b1_2411",
    "word": "tiny",
    "pos": "adj.",
    "meaning": "ขนาดเล็ก",
    "reading": "ท้าย หนี่",
    "ipa": "t ˈaɪ n iː",
    "level": "B1"
  },
  {
    "id": "b1_2412",
    "word": "tip",
    "pos": "v.",
    "meaning": "เคล็ดลับ",
    "reading": "ทิ ผึ",
    "ipa": "t ˈɪ p",
    "level": "B1"
  },
  {
    "id": "b1_2413",
    "word": "toe",
    "pos": "n.",
    "meaning": "นิ้วเท้า",
    "reading": "โทว",
    "ipa": "t ˈəʊ",
    "level": "B1"
  },
  {
    "id": "b1_2414",
    "word": "tongue",
    "pos": "n.",
    "meaning": "ลิ้น",
    "reading": "ทะ ง",
    "ipa": "t ˈʌ ŋ",
    "level": "B1"
  },
  {
    "id": "b1_2415",
    "word": "total",
    "pos": "adj., n.",
    "meaning": "ทั้งหมด",
    "reading": "โท้ว เถอะ ล",
    "ipa": "t ˈəʊ t ʌ l",
    "level": "B1"
  },
  {
    "id": "b1_2416",
    "word": "totally",
    "pos": "adv.",
    "meaning": "โดยสิ้นเชิง",
    "reading": "โท้ว เถอะ หลี่",
    "ipa": "t ˈəʊ t ʌ l iː",
    "level": "B1"
  },
  {
    "id": "b1_2417",
    "word": "touch",
    "pos": "n.",
    "meaning": "สัมผัส",
    "reading": "ฉึ ทะ",
    "ipa": "t ˈʌ tʃ",
    "level": "B1"
  },
  {
    "id": "b1_2418",
    "word": "tour",
    "pos": "v.",
    "meaning": "การท่องเที่ยว",
    "reading": "ทัว (ร)",
    "ipa": "t ˈʊ r",
    "level": "B1"
  },
  {
    "id": "b1_2419",
    "word": "trade",
    "pos": "n., v.",
    "meaning": "ซื้อขาย",
    "reading": "ดึ เทร",
    "ipa": "t r ˈeɪ d",
    "level": "B1"
  },
  {
    "id": "b1_2420",
    "word": "translate",
    "pos": "v.",
    "meaning": "แปลภาษา",
    "reading": "แถร่ น สึ เล้ ถึ",
    "ipa": "t r æ n z l ˈeɪ t",
    "level": "B1"
  },
  {
    "id": "b1_2421",
    "word": "translation",
    "pos": "n.",
    "meaning": "การแปล",
    "reading": "แถร่ น สึ เล้ เฉอะ น",
    "ipa": "t r æ n z l ˈeɪ ʃ ʌ n",
    "level": "B1"
  },
  {
    "id": "b1_2422",
    "word": "transport",
    "pos": "v.",
    "meaning": "ขนส่ง",
    "reading": "แทร้ น สึ โผ่ (ร) ถึ",
    "ipa": "t r ˈæ n s p ɔː r t",
    "level": "B1"
  },
  {
    "id": "b1_2423",
    "word": "treat",
    "pos": "v.",
    "meaning": "รักษา",
    "reading": "ทรี ถึ",
    "ipa": "t r ˈiː t",
    "level": "B1"
  },
  {
    "id": "b1_2424",
    "word": "treatment",
    "pos": "n.",
    "meaning": "การรักษา",
    "reading": "ทรี้ ถึ เหมอะ น ถึ",
    "ipa": "t r ˈiː t m ʌ n t",
    "level": "B1"
  },
  {
    "id": "b1_2425",
    "word": "trend",
    "pos": "n.",
    "meaning": "แนวโน้ม",
    "reading": "ดึ เทระ น",
    "ipa": "t r ˈe n d",
    "level": "B1"
  },
  {
    "id": "b1_2426",
    "word": "trick",
    "pos": "n., v.",
    "meaning": "เล่ห์เหลี่ยม",
    "reading": "ทริ ขึ",
    "ipa": "t r ˈɪ k",
    "level": "B1"
  },
  {
    "id": "b1_2427",
    "word": "truth",
    "pos": "n.",
    "meaning": "ความจริง",
    "reading": "ทรู ตึ",
    "ipa": "t r ˈuː θ",
    "level": "B1"
  },
  {
    "id": "b1_2428",
    "word": "tube",
    "pos": "n.",
    "meaning": "หลอด",
    "reading": "ทู บึ",
    "ipa": "t ˈuː b",
    "level": "B1"
  },
  {
    "id": "b1_2429",
    "word": "type",
    "pos": "v.",
    "meaning": "พิมพ์",
    "reading": "ผึ ทาย",
    "ipa": "t ˈaɪ p",
    "level": "B1"
  },
  {
    "id": "b1_2430",
    "word": "typically",
    "pos": "adv.",
    "meaning": "โดยทั่วไป",
    "reading": "ทิ ผิ่ ขลี่",
    "ipa": "t ˈɪ p ɪ k l iː",
    "level": "B1"
  },
  {
    "id": "b1_2431",
    "word": "tyre",
    "pos": "n.",
    "meaning": "ยาง",
    "reading": "ทาย ร",
    "ipa": "t ˈaɪ r",
    "level": "B1"
  },
  {
    "id": "b1_2432",
    "word": "ugly",
    "pos": "adj.",
    "meaning": "น่าเกลียด",
    "reading": "อ๊ะ กลี่",
    "ipa": "ˈʌ g l iː",
    "level": "B1"
  },
  {
    "id": "b1_2433",
    "word": "unable",
    "pos": "adj.",
    "meaning": "ไม่สามารถ",
    "reading": "เน้ เบอะ ล เออะ",
    "ipa": "ʌ n ˈeɪ b ʌ l",
    "level": "B1"
  },
  {
    "id": "b1_2434",
    "word": "uncomfortable",
    "pos": "adj.",
    "meaning": "เออะ อึดอัด",
    "reading": "เฝ่อ ร เถอะ เบอะ ล น คะ ม",
    "ipa": "ʌ n k ˈʌ m f ɜːʴ t ʌ b ʌ l",
    "level": "B1"
  },
  {
    "id": "b1_2435",
    "word": "underwear",
    "pos": "n.",
    "meaning": "ชุดชั้นใน",
    "reading": "อ๊ะ น เด่อ ร แว (ร)",
    "ipa": "ˈʌ n d ɜːʴ w ˌe r",
    "level": "B1"
  },
  {
    "id": "b1_2436",
    "word": "unemployed",
    "pos": "adj.",
    "meaning": "ว่างงาน",
    "reading": "พล้อย ดึ อะ เหนะ ม",
    "ipa": "ˌʌ n e m p l ˈɔɪ d",
    "level": "B1"
  },
  {
    "id": "b1_2437",
    "word": "unemployment",
    "pos": "n.",
    "meaning": "อะ การว่างงาน",
    "reading": "หนิ่ ม พล้อย เหมอะ น ถึ",
    "ipa": "ˌʌ n ɪ m p l ˈɔɪ m ʌ n t",
    "level": "B1"
  },
  {
    "id": "b1_2438",
    "word": "unfair",
    "pos": "adj.",
    "meaning": "ไม่ยุติธรรม",
    "reading": "แฟ้ (ร) เออะ น",
    "ipa": "ʌ n f ˈe r",
    "level": "B1"
  },
  {
    "id": "b1_2439",
    "word": "union",
    "pos": "n.",
    "meaning": "สหภาพแรงงาน",
    "reading": "ยู้ น เหยอะ น",
    "ipa": "j ˈuː n j ʌ n",
    "level": "B1"
  },
  {
    "id": "b1_2440",
    "word": "unless",
    "pos": "conj.",
    "meaning": "เว้นเสียแต่ว่า",
    "reading": "เล้ะ สึ เออะ น",
    "ipa": "ʌ n l ˈe s",
    "level": "B1"
  },
  {
    "id": "b1_2441",
    "word": "unlike",
    "pos": "prep.",
    "meaning": "ไม่เหมือน",
    "reading": "ล้าย ขึ เออะ น",
    "ipa": "ʌ n l ˈaɪ k",
    "level": "B1"
  },
  {
    "id": "b1_2442",
    "word": "unlikely",
    "pos": "adj.",
    "meaning": "ไม่น่าเป็นไปได้",
    "reading": "ล้าย ขลี่ เออะ น",
    "ipa": "ʌ n l ˈaɪ k l iː",
    "level": "B1"
  },
  {
    "id": "b1_2443",
    "word": "unnecessary",
    "pos": "adj.",
    "meaning": "เออะ ไม่จำเป็น",
    "reading": "เน้ะ เสอะ แซ (ร) อี่ น",
    "ipa": "ʌ n n ˈe s ʌ s ˌe r iː",
    "level": "B1"
  },
  {
    "id": "b1_2444",
    "word": "unpleasant",
    "pos": "adj.",
    "meaning": "ไม่น่าพึงพอใจ",
    "reading": "เพล้ะ เสอะ น ถึ เออะ น",
    "ipa": "ʌ n p l ˈe z ʌ n t",
    "level": "B1"
  },
  {
    "id": "b1_2445",
    "word": "update",
    "pos": "v., n.",
    "meaning": "อัปเดต",
    "reading": "ผึ เด๊ ถึ เออะ",
    "ipa": "ʌ p d ˈeɪ t",
    "level": "B1"
  },
  {
    "id": "b1_2446",
    "word": "upon",
    "pos": "prep.",
    "meaning": "เมื่อ",
    "reading": "พ้า น เออะ",
    "ipa": "ʌ p ˈɑː n",
    "level": "B1"
  },
  {
    "id": "b1_2447",
    "word": "upset",
    "pos": "adj., v.",
    "meaning": "อารมณ์เสีย",
    "reading": "อ๊ะ ผึ เซะ ถึ",
    "ipa": "ˈʌ p s ˌe t",
    "level": "B1"
  },
  {
    "id": "b1_2448",
    "word": "used",
    "pos": "adj.",
    "meaning": "ที่ถูกใช้แล้ว",
    "reading": "ยู สึ ดึ",
    "ipa": "j ˈuː z d",
    "level": "B1"
  },
  {
    "id": "b1_2449",
    "word": "used",
    "pos": "adj.",
    "meaning": "เคยชิน",
    "reading": "ยู สึ ดึ",
    "ipa": "j ˈuː z d",
    "level": "B1"
  },
  {
    "id": "b1_2450",
    "word": "valuable",
    "pos": "adj.",
    "meaning": "มีค่า",
    "reading": "แฟ้ ล เหยอะ เบอะ ล",
    "ipa": "v ˈæ l j ʌ b ʌ l",
    "level": "B1"
  },
  {
    "id": "b1_2451",
    "word": "value",
    "pos": "n.",
    "meaning": "ค่า",
    "reading": "แฟ้ ล หยู่",
    "ipa": "v ˈæ l j uː",
    "level": "B1"
  },
  {
    "id": "b1_2452",
    "word": "various",
    "pos": "adj.",
    "meaning": "หลากหลาย",
    "reading": "แฟ้ (ร) อี่ เออะ สึ",
    "ipa": "v ˈe r iː ʌ s",
    "level": "B1"
  },
  {
    "id": "b1_2453",
    "word": "version",
    "pos": "n.",
    "meaning": "รุ่น",
    "reading": "เฟ้อ ร เฉอะ น",
    "ipa": "v ˈɜːʴ ʒ ʌ n",
    "level": "B1"
  },
  {
    "id": "b1_2454",
    "word": "victim",
    "pos": "n.",
    "meaning": "เหยื่อ",
    "reading": "ฟิ ขึ เถอะ ม",
    "ipa": "v ˈɪ k t ʌ m",
    "level": "B1"
  },
  {
    "id": "b1_2455",
    "word": "view",
    "pos": "v.",
    "meaning": "ดู",
    "reading": "ฝึ ยู",
    "ipa": "v j ˈuː",
    "level": "B1"
  },
  {
    "id": "b1_2456",
    "word": "viewer",
    "pos": "n.",
    "meaning": "ผู้ดู",
    "reading": "ฝึ ยู้ เอ่อ ร",
    "ipa": "v j ˈuː ɜːʴ",
    "level": "B1"
  },
  {
    "id": "b1_2457",
    "word": "violent",
    "pos": "adj.",
    "meaning": "รุนแรง",
    "reading": "ฟ้าย เออะ เหลอะ น ถึ",
    "ipa": "v ˈaɪ ʌ l ʌ n t",
    "level": "B1"
  },
  {
    "id": "b1_2458",
    "word": "volunteer",
    "pos": "n., v.",
    "meaning": "อาสาสมัคร",
    "reading": "เที้ย (ร) ฟา เหลอะ น",
    "ipa": "v ˌɑː l ʌ n t ˈɪ r",
    "level": "B1"
  },
  {
    "id": "b1_2459",
    "word": "vote",
    "pos": "n., v.",
    "meaning": "โหวต",
    "reading": "ถึ โฟว",
    "ipa": "v ˈəʊ t",
    "level": "B1"
  },
  {
    "id": "b1_2460",
    "word": "warm",
    "pos": "v.",
    "meaning": "อบอุ่น",
    "reading": "โว (ร) ม",
    "ipa": "w ˈɔː r m",
    "level": "B1"
  },
  {
    "id": "b1_2461",
    "word": "warn",
    "pos": "v.",
    "meaning": "เตือน",
    "reading": "โว (ร) น",
    "ipa": "w ˈɔː r n",
    "level": "B1"
  },
  {
    "id": "b1_2462",
    "word": "warning",
    "pos": "n.",
    "meaning": "คำเตือน",
    "reading": "โว้ (ร) หนิ่ ง",
    "ipa": "w ˈɔː r n ɪ ŋ",
    "level": "B1"
  },
  {
    "id": "b1_2463",
    "word": "waste",
    "pos": "n., v., adj.",
    "meaning": "ของเสีย",
    "reading": "สึ ถึ เว",
    "ipa": "w ˈeɪ s t",
    "level": "B1"
  },
  {
    "id": "b1_2464",
    "word": "water",
    "pos": "v.",
    "meaning": "น้ำ",
    "reading": "ว้อ เถ่อ ร",
    "ipa": "w ˈɔː t ɜːʴ",
    "level": "B1"
  },
  {
    "id": "b1_2465",
    "word": "wave",
    "pos": "v.",
    "meaning": "คลื่น",
    "reading": "ฝึ เว",
    "ipa": "w ˈeɪ v",
    "level": "B1"
  },
  {
    "id": "b1_2466",
    "word": "weapon",
    "pos": "n.",
    "meaning": "อาวุธ",
    "reading": "เว้ะ เผอะ น",
    "ipa": "w ˈe p ʌ n",
    "level": "B1"
  },
  {
    "id": "b1_2467",
    "word": "weigh",
    "pos": "v.",
    "meaning": "ชั่งน้ำหนัก",
    "reading": "เว",
    "ipa": "w ˈeɪ",
    "level": "B1"
  },
  {
    "id": "b1_2468",
    "word": "western",
    "pos": "adj.",
    "meaning": "ทางทิศตะวันตก",
    "reading": "เว้ะ สึ เถ่อ ร น",
    "ipa": "w ˈe s t ɜːʴ n",
    "level": "B1"
  },
  {
    "id": "b1_2469",
    "word": "whatever",
    "pos": "det./pron.",
    "meaning": "อะไรก็ตาม",
    "reading": "เท้ะ เฝ่อ ร วะ",
    "ipa": "w ˌʌ t ˈe v ɜːʴ",
    "level": "B1"
  },
  {
    "id": "b1_2470",
    "word": "whenever",
    "pos": "conj.",
    "meaning": "เมื่อใดก็ตามที่",
    "reading": "เน้ะ เฝ่อ ร เหวะ",
    "ipa": "w e n ˈe v ɜːʴ",
    "level": "B1"
  },
  {
    "id": "b1_2471",
    "word": "whether",
    "pos": "conj.",
    "meaning": "ไม่ว่า",
    "reading": "เว้ะ เด่อ ร",
    "ipa": "w ˈe ð ɜːʴ",
    "level": "B1"
  },
  {
    "id": "b1_2472",
    "word": "while",
    "pos": "n.",
    "meaning": "ในขณะที่",
    "reading": "วาย ล",
    "ipa": "w ˈaɪ l",
    "level": "B1"
  },
  {
    "id": "b1_2473",
    "word": "whole",
    "pos": "n.",
    "meaning": "ทั้งหมด",
    "reading": "โฮว ล",
    "ipa": "h ˈəʊ l",
    "level": "B1"
  },
  {
    "id": "b1_2474",
    "word": "will",
    "pos": "n.",
    "meaning": "จะ",
    "reading": "วิ ล",
    "ipa": "w ˈɪ l",
    "level": "B1"
  },
  {
    "id": "b1_2475",
    "word": "win",
    "pos": "n.",
    "meaning": "ชนะ",
    "reading": "วิ น",
    "ipa": "w ˈɪ n",
    "level": "B1"
  },
  {
    "id": "b1_2476",
    "word": "wing",
    "pos": "n.",
    "meaning": "ปีก",
    "reading": "วิ ง",
    "ipa": "w ˈɪ ŋ",
    "level": "B1"
  },
  {
    "id": "b1_2477",
    "word": "within",
    "pos": "prep.",
    "meaning": "ภายใน",
    "reading": "หวิ่ ดิ้ น",
    "ipa": "w ɪ ð ˈɪ n",
    "level": "B1"
  },
  {
    "id": "b1_2478",
    "word": "wonder",
    "pos": "v., n.",
    "meaning": "สิ่งมหัศจรรย์",
    "reading": "เด่อ ร วะ น",
    "ipa": "w ˈʌ n d ɜːʴ",
    "level": "B1"
  },
  {
    "id": "b1_2479",
    "word": "wool",
    "pos": "n.",
    "meaning": "ขนสัตว์",
    "reading": "วุ ล",
    "ipa": "w ˈʊ l",
    "level": "B1"
  },
  {
    "id": "b1_2480",
    "word": "worldwide",
    "pos": "adj., adv.",
    "meaning": "ทั่วโลก",
    "reading": "เว้อ ร ล ดว๊าย ดึ",
    "ipa": "w ˈɜːʴ l d w ˈaɪ d",
    "level": "B1"
  },
  {
    "id": "b1_2481",
    "word": "worry",
    "pos": "n.",
    "meaning": "กังวล",
    "reading": "เว้อ ร หรี่",
    "ipa": "w ˈɜːʴ iː",
    "level": "B1"
  },
  {
    "id": "b1_2482",
    "word": "worse",
    "pos": "adv.",
    "meaning": "แย่ลง",
    "reading": "สึ เวอ ร",
    "ipa": "w ˈɜːʴ s",
    "level": "B1"
  },
  {
    "id": "b1_2483",
    "word": "worst",
    "pos": "adv.",
    "meaning": "แย่ที่สุด",
    "reading": "สึ ถึ เวอ ร",
    "ipa": "w ˈɜːʴ s t",
    "level": "B1"
  },
  {
    "id": "b1_2484",
    "word": "worth",
    "pos": "adj.",
    "meaning": "คุณค่า",
    "reading": "ตึ เวอ ร",
    "ipa": "w ˈɜːʴ θ",
    "level": "B1"
  },
  {
    "id": "b1_2485",
    "word": "written",
    "pos": "adj.",
    "meaning": "เขียนไว้",
    "reading": "ริ เถอะ น",
    "ipa": "r ˈɪ t ʌ n",
    "level": "B1"
  },
  {
    "id": "b1_2486",
    "word": "wrong",
    "pos": "adv.",
    "meaning": "ผิด",
    "reading": "รอ ง",
    "ipa": "r ˈɔː ŋ",
    "level": "B1"
  },
  {
    "id": "b1_2487",
    "word": "yard",
    "pos": "n.",
    "meaning": "ลาน",
    "reading": "ดึ ยา (ร)",
    "ipa": "j ˈɑː r d",
    "level": "B1"
  },
  {
    "id": "b1_2488",
    "word": "young",
    "pos": "n.",
    "meaning": "หนุ่มสาว",
    "reading": "ยะ ง",
    "ipa": "j ˈʌ ŋ",
    "level": "B1"
  },
  {
    "id": "b1_2489",
    "word": "youth",
    "pos": "n.",
    "meaning": "ความเยาว์",
    "reading": "ยู ตึ",
    "ipa": "j ˈuː θ",
    "level": "B1"
  },
  {
    "id": "b2_2490",
    "word": "abandon",
    "pos": "v.",
    "meaning": "ละทิ้ง",
    "reading": "เออะ แบ๊ น เดอะ น",
    "ipa": "ʌ b ˈæ n d ʌ n",
    "level": "B2"
  },
  {
    "id": "b2_2491",
    "word": "absolute",
    "pos": "adj.",
    "meaning": "แน่นอน",
    "reading": "แอ๊ บึ เสอะ ลู ถึ",
    "ipa": "ˈæ b s ʌ l ˌuː t",
    "level": "B2"
  },
  {
    "id": "b2_2492",
    "word": "academic",
    "pos": "n.",
    "meaning": "เชิงวิชาการ",
    "reading": "แอ เขอะ เด๊ะ หมิ่ ขึ",
    "ipa": "ˌæ k ʌ d ˈe m ɪ k",
    "level": "B2"
  },
  {
    "id": "b2_2493",
    "word": "acceptable",
    "pos": "adj.",
    "meaning": "ยอมรับได้",
    "reading": "แอ่ ขึ เซ้ะ ผึ เถอะ เบอะ ล",
    "ipa": "æ k s ˈe p t ʌ b ʌ l",
    "level": "B2"
  },
  {
    "id": "b2_2494",
    "word": "accompany",
    "pos": "v.",
    "meaning": "มาพร้อมกับ",
    "reading": "เออะ คะ ม เผอะ หนี่",
    "ipa": "ʌ k ˈʌ m p ʌ n iː",
    "level": "B2"
  },
  {
    "id": "b2_2495",
    "word": "account",
    "pos": "v.",
    "meaning": "บัญชี",
    "reading": "เออะ ค้าว น ถึ",
    "ipa": "ʌ k ˈaʊ n t",
    "level": "B2"
  },
  {
    "id": "b2_2496",
    "word": "accurate",
    "pos": "adj.",
    "meaning": "แม่นยํา",
    "reading": "แอ๊ ขึ เหย่อ ร เหรอะ ถึ",
    "ipa": "ˈæ k j ɜːʴ ʌ t",
    "level": "B2"
  },
  {
    "id": "b2_2497",
    "word": "accuse",
    "pos": "v.",
    "meaning": "กล่าวโทษ",
    "reading": "เออะ ขึ ยู้ สึ",
    "ipa": "ʌ k j ˈuː z",
    "level": "B2"
  },
  {
    "id": "b2_2498",
    "word": "acknowledge",
    "pos": "v.",
    "meaning": "รับทราบ",
    "reading": "แอ่ ขึ น้า หลิ่ จึ",
    "ipa": "æ k n ˈɑː l ɪ dʒ",
    "level": "B2"
  },
  {
    "id": "b2_2499",
    "word": "acquire",
    "pos": "v.",
    "meaning": "ได้รับ",
    "reading": "เออะ คว้าย เอ่อ ร",
    "ipa": "ʌ k w ˈaɪ ɜːʴ",
    "level": "B2"
  },
  {
    "id": "b2_2500",
    "word": "actual",
    "pos": "adj.",
    "meaning": "แท้จริง",
    "reading": "แอ๊ ขึ เฉอะ เหวอะ ล",
    "ipa": "ˈæ k tʃ ʌ w ʌ l",
    "level": "B2"
  },
  {
    "id": "b2_2501",
    "word": "adapt",
    "pos": "v.",
    "meaning": "ปรับ",
    "reading": "เออะ แด๊ ผึ ถึ",
    "ipa": "ʌ d ˈæ p t",
    "level": "B2"
  },
  {
    "id": "b2_2502",
    "word": "additional",
    "pos": "adj.",
    "meaning": "เพิ่มเติม",
    "reading": "เออะ ดิ้ เฉอะ เหนอะ ล",
    "ipa": "ʌ d ˈɪ ʃ ʌ n ʌ l",
    "level": "B2"
  },
  {
    "id": "b2_2503",
    "word": "address",
    "pos": "v.",
    "meaning": "ที่อยู่",
    "reading": "แอ๊ เดระ สึ",
    "ipa": "ˈæ d r ˌe s",
    "level": "B2"
  },
  {
    "id": "b2_2504",
    "word": "administration",
    "pos": "n.",
    "meaning": "การบริหาร",
    "reading": "แอ่ ดึ มิ หนิ่ สึ เทร้ เฉอะ น",
    "ipa": "æ d m ˌɪ n ɪ s t r ˈeɪ ʃ ʌ n",
    "level": "B2"
  },
  {
    "id": "b2_2505",
    "word": "adopt",
    "pos": "v.",
    "meaning": "รับเลี้ยง",
    "reading": "เออะ ด๊า ผึ ถึ",
    "ipa": "ʌ d ˈɑː p t",
    "level": "B2"
  },
  {
    "id": "b2_2506",
    "word": "advance",
    "pos": "n., v., adj.",
    "meaning": "ก้าวหน้า",
    "reading": "เออะ ดึ แฟ็ น สึ",
    "ipa": "ʌ d v ˈæ n s",
    "level": "B2"
  },
  {
    "id": "b2_2507",
    "word": "affair",
    "pos": "n.",
    "meaning": "ธุระ",
    "reading": "เออะ แฟ็ (ร)",
    "ipa": "ʌ f ˈe r",
    "level": "B2"
  },
  {
    "id": "b2_2508",
    "word": "afterwards",
    "pos": "adv.",
    "meaning": "หลังจากนั้น",
    "reading": "แอ๊ ฝี เถ่อ ร เหว่อ ร ดึ สึ",
    "ipa": "ˈæ f t ɜːʴ w ɜːʴ d z",
    "level": "B2"
  },
  {
    "id": "b2_2509",
    "word": "agency",
    "pos": "n.",
    "meaning": "เอเจนซี่",
    "reading": "เอ๊ เจอะ น สี่",
    "ipa": "ˈeɪ dʒ ʌ n s iː",
    "level": "B2"
  },
  {
    "id": "b2_2510",
    "word": "agenda",
    "pos": "n.",
    "meaning": "กําหนดการ",
    "reading": "เออะ เจ๊ะ น เดอะ",
    "ipa": "ʌ dʒ ˈe n d ʌ",
    "level": "B2"
  },
  {
    "id": "b2_2511",
    "word": "aggressive",
    "pos": "adj.",
    "meaning": "ก้าวร้าว",
    "reading": "เออะ เกร๊ะ สิ่ ฝี",
    "ipa": "ʌ g r ˈe s ɪ v",
    "level": "B2"
  },
  {
    "id": "b2_2512",
    "word": "aid",
    "pos": "n., v.",
    "meaning": "ความช่วยเหลือ",
    "reading": "เอ ดึ",
    "ipa": "ˈeɪ d",
    "level": "B2"
  },
  {
    "id": "b2_2513",
    "word": "aircraft",
    "pos": "n.",
    "meaning": "อากาศยาน",
    "reading": "แอ๊ (ร) แคร ฝี ถึ",
    "ipa": "ˈe r k r ˌæ f t",
    "level": "B2"
  },
  {
    "id": "b2_2514",
    "word": "alarm",
    "pos": "v.",
    "meaning": "เตือน",
    "reading": "เออะ ล้า (ร) ม",
    "ipa": "ʌ l ˈɑː r m",
    "level": "B2"
  },
  {
    "id": "b2_2515",
    "word": "alter",
    "pos": "v.",
    "meaning": "เปลี่ยนแปลง",
    "reading": "อ๊อ ล เถ่อ ร",
    "ipa": "ˈɔː l t ɜːʴ",
    "level": "B2"
  },
  {
    "id": "b2_2516",
    "word": "amount",
    "pos": "v.",
    "meaning": "จํานวน",
    "reading": "เออะ ม้าว น ถึ",
    "ipa": "ʌ m ˈaʊ n t",
    "level": "B2"
  },
  {
    "id": "b2_2517",
    "word": "anger",
    "pos": "n.",
    "meaning": "ความโกรธ",
    "reading": "แอ๊ ง เก่อ ร",
    "ipa": "ˈæ ŋ g ɜːʴ",
    "level": "B2"
  },
  {
    "id": "b2_2518",
    "word": "angle",
    "pos": "n.",
    "meaning": "มุม",
    "reading": "แอ๊ ง เกอะ ล",
    "ipa": "ˈæ ŋ g ʌ l",
    "level": "B2"
  },
  {
    "id": "b2_2519",
    "word": "anniversary",
    "pos": "n.",
    "meaning": "วันครบรอบปี",
    "reading": "แอ เหนอะ เฟ็อ ร เส่อ ร หรี่",
    "ipa": "ˌæ n ʌ v ˈɜːʴ s ɜːʴ iː",
    "level": "B2"
  },
  {
    "id": "b2_2520",
    "word": "annual",
    "pos": "adj.",
    "meaning": "ประจําปี",
    "reading": "แอ๊ น หยู่ เออะ ล",
    "ipa": "ˈæ n j uː ʌ l",
    "level": "B2"
  },
  {
    "id": "b2_2521",
    "word": "anxious",
    "pos": "adj.",
    "meaning": "กังวล",
    "reading": "แอ๊ ง ขึ เฉอะ สึ",
    "ipa": "ˈæ ŋ k ʃ ʌ s",
    "level": "B2"
  },
  {
    "id": "b2_2522",
    "word": "apparent",
    "pos": "adj.",
    "meaning": "ชัดเจน",
    "reading": "เออะ แพ้ (ร) เออะ น ถึ",
    "ipa": "ʌ p ˈe r ʌ n t",
    "level": "B2"
  },
  {
    "id": "b2_2523",
    "word": "apparently",
    "pos": "adv.",
    "meaning": "เห็นได้ชัดว่า",
    "reading": "เออะ แพ้ (ร) เออะ น ถลี่",
    "ipa": "ʌ p ˈe r ʌ n t l iː",
    "level": "B2"
  },
  {
    "id": "b2_2524",
    "word": "appeal",
    "pos": "n., v.",
    "meaning": "อุทธรณ์",
    "reading": "เออะ พี้ ล",
    "ipa": "ʌ p ˈiː l",
    "level": "B2"
  },
  {
    "id": "b2_2525",
    "word": "approach",
    "pos": "n., v.",
    "meaning": "เข้าใกล้",
    "reading": "เออะ โพร้ว ฉึ",
    "ipa": "ʌ p r ˈəʊ tʃ",
    "level": "B2"
  },
  {
    "id": "b2_2526",
    "word": "appropriate",
    "pos": "adj.",
    "meaning": "เหมาะสม",
    "reading": "เออะ โพร้ว ผรี่ เออะ ถึ",
    "ipa": "ʌ p r ˈəʊ p r iː ʌ t",
    "level": "B2"
  },
  {
    "id": "b2_2527",
    "word": "approval",
    "pos": "n.",
    "meaning": "การอนุมัติ",
    "reading": "เออะ พรู้ เฝอะ ล",
    "ipa": "ʌ p r ˈuː v ʌ l",
    "level": "B2"
  },
  {
    "id": "b2_2528",
    "word": "approve",
    "pos": "v.",
    "meaning": "อนุมัติ",
    "reading": "เออะ พรู้ ฝี",
    "ipa": "ʌ p r ˈuː v",
    "level": "B2"
  },
  {
    "id": "b2_2529",
    "word": "arise",
    "pos": "v.",
    "meaning": "เกิดขึ้น",
    "reading": "เอ่อ ร ร้าย สึ",
    "ipa": "ɜːʴ ˈaɪ z",
    "level": "B2"
  },
  {
    "id": "b2_2530",
    "word": "armed",
    "pos": "adj.",
    "meaning": "ติดอาวุธ",
    "reading": "อา (ร) ม ดึ",
    "ipa": "ˈɑː r m d",
    "level": "B2"
  },
  {
    "id": "b2_2531",
    "word": "arms",
    "pos": "n.",
    "meaning": "แขน",
    "reading": "อา (ร) ม สึ",
    "ipa": "ˈɑː r m z",
    "level": "B2"
  },
  {
    "id": "b2_2532",
    "word": "artificial",
    "pos": "adj.",
    "meaning": "เทียม",
    "reading": "อา (ร) เถอะ ฟั เฉอะ ล",
    "ipa": "ˌɑː r t ʌ f ˈɪ ʃ ʌ l",
    "level": "B2"
  },
  {
    "id": "b2_2533",
    "word": "artistic",
    "pos": "adj.",
    "meaning": "ศิลปะ",
    "reading": "อ่า (ร) ทิ สึ ถิ่ ขึ",
    "ipa": "ɑː r t ˈɪ s t ɪ k",
    "level": "B2"
  },
  {
    "id": "b2_2534",
    "word": "ashamed",
    "pos": "adj.",
    "meaning": "ละอาย",
    "reading": "เออะ เช้ ม ดึ",
    "ipa": "ʌ ʃ ˈeɪ m d",
    "level": "B2"
  },
  {
    "id": "b2_2535",
    "word": "aspect",
    "pos": "n.",
    "meaning": "ด้าน",
    "reading": "แอ๊ สึ เพะ ขึ ถึ",
    "ipa": "ˈæ s p ˌe k t",
    "level": "B2"
  },
  {
    "id": "b2_2536",
    "word": "assess",
    "pos": "v.",
    "meaning": "ประเมิน",
    "reading": "เออะ เซ้ะ สึ",
    "ipa": "ʌ s ˈe s",
    "level": "B2"
  },
  {
    "id": "b2_2537",
    "word": "assessment",
    "pos": "n.",
    "meaning": "การประเมิน",
    "reading": "เออะ เซ้ะ สึ เหมอะ น ถึ",
    "ipa": "ʌ s ˈe s m ʌ n t",
    "level": "B2"
  },
  {
    "id": "b2_2538",
    "word": "associate",
    "pos": "v.",
    "meaning": "เชื่อมโยง",
    "reading": "เออะ โซ้ว สี่ เออะ ถึ",
    "ipa": "ʌ s ˈəʊ s iː ʌ t",
    "level": "B2"
  },
  {
    "id": "b2_2539",
    "word": "associated",
    "pos": "adj.",
    "meaning": "ที่เกี่ยวข้อง",
    "reading": "เออะ โซ้ว สี่ เอ ถิ่ ดึ",
    "ipa": "ʌ s ˈəʊ s iː ˌeɪ t ɪ d",
    "level": "B2"
  },
  {
    "id": "b2_2540",
    "word": "association",
    "pos": "n.",
    "meaning": "สมาคม",
    "reading": "เออะ โซว สี่ เอ๊ เฉอะ น",
    "ipa": "ʌ s ˌəʊ s iː ˈeɪ ʃ ʌ n",
    "level": "B2"
  },
  {
    "id": "b2_2541",
    "word": "assume",
    "pos": "v.",
    "meaning": "สมมติ",
    "reading": "เออะ ซู้ ม",
    "ipa": "ʌ s ˈuː m",
    "level": "B2"
  },
  {
    "id": "b2_2542",
    "word": "attempt",
    "pos": "n., v.",
    "meaning": "พยายาม",
    "reading": "เออะ เท้ะ ม ผึ ถึ",
    "ipa": "ʌ t ˈe m p t",
    "level": "B2"
  },
  {
    "id": "b2_2543",
    "word": "back",
    "pos": "v.",
    "meaning": "กลับ",
    "reading": "แบ ขึ",
    "ipa": "b ˈæ k",
    "level": "B2"
  },
  {
    "id": "b2_2544",
    "word": "bacteria",
    "pos": "n.",
    "meaning": "แบคทีเรีย",
    "reading": "แบ่ ขึ เที้ย (ร) อี่ เออะ",
    "ipa": "b æ k t ˈɪ r iː ʌ",
    "level": "B2"
  },
  {
    "id": "b2_2545",
    "word": "bar",
    "pos": "v.",
    "meaning": "บาร์",
    "reading": "บา (ร)",
    "ipa": "b ˈɑː r",
    "level": "B2"
  },
  {
    "id": "b2_2546",
    "word": "barrier",
    "pos": "n.",
    "meaning": "สิ่งกีดขวาง",
    "reading": "แบ๊ หรี่ เอ่อ ร",
    "ipa": "b ˈæ r iː ɜːʴ",
    "level": "B2"
  },
  {
    "id": "b2_2547",
    "word": "basically",
    "pos": "adv.",
    "meaning": "โดยพื้นฐานแล้ว",
    "reading": "เบ๊ สิ่ ขลี่",
    "ipa": "b ˈeɪ s ɪ k l iː",
    "level": "B2"
  },
  {
    "id": "b2_2548",
    "word": "battle",
    "pos": "v.",
    "meaning": "การต่อสู้",
    "reading": "แบ๊ เถอะ ล",
    "ipa": "b ˈæ t ʌ l",
    "level": "B2"
  },
  {
    "id": "b2_2549",
    "word": "bear",
    "pos": "(deal with) v.",
    "meaning": "หมี",
    "reading": "แบ (ร)",
    "ipa": "b ˈe r",
    "level": "B2"
  },
  {
    "id": "b2_2550",
    "word": "beat",
    "pos": "n.",
    "meaning": "ตี",
    "reading": "บี ถึ",
    "ipa": "b ˈiː t",
    "level": "B2"
  },
  {
    "id": "b2_2551",
    "word": "beg",
    "pos": "v.",
    "meaning": "ขอ",
    "reading": "เบะ กึ",
    "ipa": "b ˈe g",
    "level": "B2"
  },
  {
    "id": "b2_2552",
    "word": "being",
    "pos": "n.",
    "meaning": "สิ่งมีชีวิต",
    "reading": "บี๊ อิ่ ง",
    "ipa": "b ˈiː ɪ ŋ",
    "level": "B2"
  },
  {
    "id": "b2_2553",
    "word": "bent",
    "pos": "adj.",
    "meaning": "งอ",
    "reading": "เบะ น ถึ",
    "ipa": "b ˈe n t",
    "level": "B2"
  },
  {
    "id": "b2_2554",
    "word": "bet",
    "pos": "v., n.",
    "meaning": "เดิมพัน",
    "reading": "เบะ ถึ",
    "ipa": "b ˈe t",
    "level": "B2"
  },
  {
    "id": "b2_2555",
    "word": "beyond",
    "pos": "prep., adv.",
    "meaning": "เกิน",
    "reading": "บิ อ๊า น ดึ",
    "ipa": "b ɪ ˈɑː n d",
    "level": "B2"
  },
  {
    "id": "b2_2556",
    "word": "bill",
    "pos": "v.",
    "meaning": "ใบแจ้งหนี้",
    "reading": "บิ ล",
    "ipa": "b ˈɪ l",
    "level": "B2"
  },
  {
    "id": "b2_2557",
    "word": "bitter",
    "pos": "adj.",
    "meaning": "ขม",
    "reading": "บิ้ เถ่อ ร",
    "ipa": "b ˈɪ t ɜːʴ",
    "level": "B2"
  },
  {
    "id": "b2_2558",
    "word": "blame",
    "pos": "v., n.",
    "meaning": "ตําหนิ",
    "reading": "เบล ม",
    "ipa": "b l ˈeɪ m",
    "level": "B2"
  },
  {
    "id": "b2_2559",
    "word": "blind",
    "pos": "adj.",
    "meaning": "ตาบอด",
    "reading": "บลาย น ดึ",
    "ipa": "b l ˈaɪ n d",
    "level": "B2"
  },
  {
    "id": "b2_2560",
    "word": "bond",
    "pos": "n.",
    "meaning": "พันธบัตร",
    "reading": "บา น ดึ",
    "ipa": "b ˈɑː n d",
    "level": "B2"
  },
  {
    "id": "b2_2561",
    "word": "border",
    "pos": "v.",
    "meaning": "ชายแดน",
    "reading": "โบ๊ (ร) เด่อ ร",
    "ipa": "b ˈɔː r d ɜːʴ",
    "level": "B2"
  },
  {
    "id": "b2_2562",
    "word": "breast",
    "pos": "n.",
    "meaning": "หน้าอก",
    "reading": "เบระ สึ ถึ",
    "ipa": "b r ˈe s t",
    "level": "B2"
  },
  {
    "id": "b2_2563",
    "word": "brief",
    "pos": "adj.",
    "meaning": "รวบรัด",
    "reading": "บรี ฝี",
    "ipa": "b r ˈiː f",
    "level": "B2"
  },
  {
    "id": "b2_2564",
    "word": "broad",
    "pos": "adj.",
    "meaning": "กว้างๆ",
    "reading": "บรอ ดึ",
    "ipa": "b r ˈɔː d",
    "level": "B2"
  },
  {
    "id": "b2_2565",
    "word": "broadcast",
    "pos": "v., n.",
    "meaning": "ออกอากาศ",
    "reading": "บร๊อ ดึ แค สึ ถึ",
    "ipa": "b r ˈɔː d k ˌæ s t",
    "level": "B2"
  },
  {
    "id": "b2_2566",
    "word": "budget",
    "pos": "n.",
    "meaning": "งบประมาณ",
    "reading": "บ๊ะ จิ ถึ",
    "ipa": "b ˈʌ dʒ ɪ t",
    "level": "B2"
  },
  {
    "id": "b2_2567",
    "word": "bullet",
    "pos": "n.",
    "meaning": "กระสุน",
    "reading": "บุ๊ เหลอะ ถึ",
    "ipa": "b ˈʊ l ʌ t",
    "level": "B2"
  },
  {
    "id": "b2_2568",
    "word": "bunch",
    "pos": "n.",
    "meaning": "กลุ่ม",
    "reading": "บะ น ฉึ",
    "ipa": "b ˈʌ n tʃ",
    "level": "B2"
  },
  {
    "id": "b2_2569",
    "word": "burn",
    "pos": "n.",
    "meaning": "เผา",
    "reading": "เบอ ร น",
    "ipa": "b ˈɜːʴ n",
    "level": "B2"
  },
  {
    "id": "b2_2570",
    "word": "bush",
    "pos": "n.",
    "meaning": "พุ่มไม้",
    "reading": "บุ ฉึ",
    "ipa": "b ˈʊ ʃ",
    "level": "B2"
  },
  {
    "id": "b2_2571",
    "word": "but",
    "pos": "prep.",
    "meaning": "แต่",
    "reading": "บะ ถึ",
    "ipa": "b ˈʌ t",
    "level": "B2"
  },
  {
    "id": "b2_2572",
    "word": "cable",
    "pos": "n.",
    "meaning": "สายเคเบิล",
    "reading": "เค้ เบอะ ล",
    "ipa": "k ˈeɪ b ʌ l",
    "level": "B2"
  },
  {
    "id": "b2_2573",
    "word": "calculate",
    "pos": "v.",
    "meaning": "คํานวณ",
    "reading": "แค้ ล ขึ เหยอะ เล ถึ",
    "ipa": "k ˈæ l k j ʌ l ˌeɪ t",
    "level": "B2"
  },
  {
    "id": "b2_2574",
    "word": "cancel",
    "pos": "v.",
    "meaning": "ยกเลิก",
    "reading": "แค้ น เสอะ ล",
    "ipa": "k ˈæ n s ʌ l",
    "level": "B2"
  },
  {
    "id": "b2_2575",
    "word": "cancer",
    "pos": "n.",
    "meaning": "มะเร็ง",
    "reading": "แค้ น เส่อ ร",
    "ipa": "k ˈæ n s ɜːʴ",
    "level": "B2"
  },
  {
    "id": "b2_2576",
    "word": "capable",
    "pos": "adj.",
    "meaning": "มีความสามารถ",
    "reading": "เค้ เผอะ เบอะ ล",
    "ipa": "k ˈeɪ p ʌ b ʌ l",
    "level": "B2"
  },
  {
    "id": "b2_2577",
    "word": "capacity",
    "pos": "n.",
    "meaning": "ความจุ",
    "reading": "เขอะ แพ้ เสอะ ถี่",
    "ipa": "k ʌ p ˈæ s ʌ t iː",
    "level": "B2"
  },
  {
    "id": "b2_2578",
    "word": "capture",
    "pos": "v., n.",
    "meaning": "การจับกุม",
    "reading": "แค้ ผึ เฉ่อ ร",
    "ipa": "k ˈæ p tʃ ɜːʴ",
    "level": "B2"
  },
  {
    "id": "b2_2579",
    "word": "cast",
    "pos": "n., v.",
    "meaning": "หล่อ",
    "reading": "แค สึ ถึ",
    "ipa": "k ˈæ s t",
    "level": "B2"
  },
  {
    "id": "b2_2580",
    "word": "catch",
    "pos": "n.",
    "meaning": "จับ",
    "reading": "แค ฉึ",
    "ipa": "k ˈæ tʃ",
    "level": "B2"
  },
  {
    "id": "b2_2581",
    "word": "cell",
    "pos": "n.",
    "meaning": "เซลล์",
    "reading": "เซะ ล",
    "ipa": "s ˈe l",
    "level": "B2"
  },
  {
    "id": "b2_2582",
    "word": "chain",
    "pos": "v.",
    "meaning": "โซ่",
    "reading": "เช น",
    "ipa": "tʃ ˈeɪ n",
    "level": "B2"
  },
  {
    "id": "b2_2583",
    "word": "chair",
    "pos": "v.",
    "meaning": "เก้าอี้",
    "reading": "แช (ร)",
    "ipa": "tʃ ˈe r",
    "level": "B2"
  },
  {
    "id": "b2_2584",
    "word": "chairman",
    "pos": "n.",
    "meaning": "ประธาน",
    "reading": "แช้ (ร) เหมอะ น",
    "ipa": "tʃ ˈe r m ʌ n",
    "level": "B2"
  },
  {
    "id": "b2_2585",
    "word": "challenge",
    "pos": "v.",
    "meaning": "ท้าทาย",
    "reading": "แช้ เหลอะ น จึ",
    "ipa": "tʃ ˈæ l ʌ n dʒ",
    "level": "B2"
  },
  {
    "id": "b2_2586",
    "word": "characteristic",
    "pos": "n., adj.",
    "meaning": "ลักษณะเฉพาะ",
    "reading": "แค (ร) เออะ ขึ เถ่อ ร ริ สึ ถิ่ ขึ",
    "ipa": "k ˌe r ʌ k t ɜːʴ ˈɪ s t ɪ k",
    "level": "B2"
  },
  {
    "id": "b2_2587",
    "word": "chart",
    "pos": "v.",
    "meaning": "แผนภูมิ",
    "reading": "ชา (ร) ถึ",
    "ipa": "tʃ ˈɑː r t",
    "level": "B2"
  },
  {
    "id": "b2_2588",
    "word": "chief",
    "pos": "adj., n.",
    "meaning": "หัวหน้า",
    "reading": "ชี ฝี",
    "ipa": "tʃ ˈiː f",
    "level": "B2"
  },
  {
    "id": "b2_2589",
    "word": "circumstance",
    "pos": "n.",
    "meaning": "สถานการณ์",
    "reading": "เซ้อ ร เขอะ ม สึ แท น สึ",
    "ipa": "s ˈɜːʴ k ʌ m s t ˌæ n s",
    "level": "B2"
  },
  {
    "id": "b2_2590",
    "word": "cite",
    "pos": "v.",
    "meaning": "อ้างอิง",
    "reading": "ซาย ถึ",
    "ipa": "s ˈaɪ t",
    "level": "B2"
  },
  {
    "id": "b2_2591",
    "word": "citizen",
    "pos": "n.",
    "meaning": "พลเมือง",
    "reading": "ซิ เถอะ เสอะ น",
    "ipa": "s ˈɪ t ʌ z ʌ n",
    "level": "B2"
  },
  {
    "id": "b2_2592",
    "word": "civil",
    "pos": "adj.",
    "meaning": "พลเรือน",
    "reading": "ซิ เฝอะ ล",
    "ipa": "s ˈɪ v ʌ l",
    "level": "B2"
  },
  {
    "id": "b2_2593",
    "word": "classic",
    "pos": "adj., n.",
    "meaning": "คลาสสิค",
    "reading": "แคล้ สิ่ ขึ",
    "ipa": "k l ˈæ s ɪ k",
    "level": "B2"
  },
  {
    "id": "b2_2594",
    "word": "closely",
    "pos": "adv.",
    "meaning": "อย่างใกล้ชิด",
    "reading": "โคล้ว สึ หลี่",
    "ipa": "k l ˈəʊ s l iː",
    "level": "B2"
  },
  {
    "id": "b2_2595",
    "word": "collapse",
    "pos": "v., n.",
    "meaning": "ทรุด",
    "reading": "เขอะ แล้ ผึ สึ",
    "ipa": "k ʌ l ˈæ p s",
    "level": "B2"
  },
  {
    "id": "b2_2596",
    "word": "combination",
    "pos": "n.",
    "meaning": "การผสมผสาน",
    "reading": "คา ม เบอะ เน้ เฉอะ น",
    "ipa": "k ˌɑː m b ʌ n ˈeɪ ʃ ʌ n",
    "level": "B2"
  },
  {
    "id": "b2_2597",
    "word": "comfort",
    "pos": "n., v.",
    "meaning": "ปลอบโยน",
    "reading": "คะ ม เฝือ ร ถึ",
    "ipa": "k ˈʌ m f ɜːʴ t",
    "level": "B2"
  },
  {
    "id": "b2_2598",
    "word": "command",
    "pos": "n., v.",
    "meaning": "สั่งการ",
    "reading": "เขอะ แม้ น ดึ",
    "ipa": "k ʌ m ˈæ n d",
    "level": "B2"
  },
  {
    "id": "b2_2599",
    "word": "commission",
    "pos": "n., v.",
    "meaning": "คณะกรรมการ",
    "reading": "เขอะ มิ เฉอะ น",
    "ipa": "k ʌ m ˈɪ ʃ ʌ n",
    "level": "B2"
  },
  {
    "id": "b2_2600",
    "word": "commitment",
    "pos": "n.",
    "meaning": "ความมุ่งมั่น",
    "reading": "เขอะ มิ ถึ เหมอะ น ถึ",
    "ipa": "k ʌ m ˈɪ t m ʌ n t",
    "level": "B2"
  },
  {
    "id": "b2_2601",
    "word": "committee",
    "pos": "n.",
    "meaning": "คณะกรรมการ",
    "reading": "เขอะ มิ ถี่",
    "ipa": "k ʌ m ˈɪ t iː",
    "level": "B2"
  },
  {
    "id": "b2_2602",
    "word": "commonly",
    "pos": "adv.",
    "meaning": "อย่างธรรมดา",
    "reading": "ค้า เหมอะ น หลี่",
    "ipa": "k ˈɑː m ʌ n l iː",
    "level": "B2"
  },
  {
    "id": "b2_2603",
    "word": "complex",
    "pos": "n.",
    "meaning": "ซับซ้อน",
    "reading": "ค้า ม เผละ ขึ สึ",
    "ipa": "k ˈɑː m p l e k s",
    "level": "B2"
  },
  {
    "id": "b2_2604",
    "word": "complicated",
    "pos": "adj.",
    "meaning": "ที่ซับซ้อน",
    "reading": "ค้า ม เผลอะ เค เถอะ ดึ",
    "ipa": "k ˈɑː m p l ʌ k ˌeɪ t ʌ d",
    "level": "B2"
  },
  {
    "id": "b2_2605",
    "word": "component",
    "pos": "n.",
    "meaning": "ส่วนประกอบ",
    "reading": "เขอะ ม โพ้ว เหนอะ น ถึ",
    "ipa": "k ʌ m p ˈəʊ n ʌ n t",
    "level": "B2"
  },
  {
    "id": "b2_2606",
    "word": "concentration",
    "pos": "n.",
    "meaning": "ความเข้มข้น",
    "reading": "คา น เสอะ น เทร้ เฉอะ น",
    "ipa": "k ˌɑː n s ʌ n t r ˈeɪ ʃ ʌ n",
    "level": "B2"
  },
  {
    "id": "b2_2607",
    "word": "concept",
    "pos": "n.",
    "meaning": "แนวคิด",
    "reading": "ค้า น เสะ ผึ ถึ",
    "ipa": "k ˈɑː n s e p t",
    "level": "B2"
  },
  {
    "id": "b2_2608",
    "word": "concern",
    "pos": "n., v.",
    "meaning": "กังวล",
    "reading": "เขอะ น เซ้อ ร น",
    "ipa": "k ʌ n s ˈɜːʴ n",
    "level": "B2"
  },
  {
    "id": "b2_2609",
    "word": "concerned",
    "pos": "adj.",
    "meaning": "น่ากังวล",
    "reading": "เขอะ น เซ้อ ร น ดึ",
    "ipa": "k ʌ n s ˈɜːʴ n d",
    "level": "B2"
  },
  {
    "id": "b2_2610",
    "word": "conduct",
    "pos": "v., n.",
    "meaning": "จัดการ",
    "reading": "ค้า น เดอะ ขึ ถึ",
    "ipa": "k ˈɑː n d ʌ k t",
    "level": "B2"
  },
  {
    "id": "b2_2611",
    "word": "confidence",
    "pos": "n.",
    "meaning": "ความมั่นใจ",
    "reading": "ค้า น เฝอะ เดอะ น สึ",
    "ipa": "k ˈɑː n f ʌ d ʌ n s",
    "level": "B2"
  },
  {
    "id": "b2_2612",
    "word": "conflict",
    "pos": "n., v.",
    "meaning": "ขัดแย้ง",
    "reading": "ค้า น ฝลิ่ ขึ ถึ",
    "ipa": "k ˈɑː n f l ɪ k t",
    "level": "B2"
  },
  {
    "id": "b2_2613",
    "word": "confusing",
    "pos": "adj.",
    "meaning": "สับสน",
    "reading": "เขอะ น ฝี ยู้ สิ่ ง",
    "ipa": "k ʌ n f j ˈuː z ɪ ŋ",
    "level": "B2"
  },
  {
    "id": "b2_2614",
    "word": "conscious",
    "pos": "adj.",
    "meaning": "มีสติ",
    "reading": "ค้า น เฉอะ สึ",
    "ipa": "k ˈɑː n ʃ ʌ s",
    "level": "B2"
  },
  {
    "id": "b2_2615",
    "word": "conservative",
    "pos": "adj., n.",
    "meaning": "ซึ่งอนุรักษ์นิยม",
    "reading": "เขอะ น เซ้อ ร เฝอะ ถิ่ ฝี",
    "ipa": "k ʌ n s ˈɜːʴ v ʌ t ɪ v",
    "level": "B2"
  },
  {
    "id": "b2_2616",
    "word": "consideration",
    "pos": "n.",
    "meaning": "การพิจารณา",
    "reading": "เขอะ น ซิ เด่อ ร เร้ เฉอะ น",
    "ipa": "k ʌ n s ˌɪ d ɜːʴ ˈeɪ ʃ ʌ n",
    "level": "B2"
  },
  {
    "id": "b2_2617",
    "word": "consistent",
    "pos": "adj.",
    "meaning": "สมํ่าเสมอ",
    "reading": "เขอะ น ซิ สึ เถอะ น ถึ",
    "ipa": "k ʌ n s ˈɪ s t ʌ n t",
    "level": "B2"
  },
  {
    "id": "b2_2618",
    "word": "constant",
    "pos": "adj.",
    "meaning": "คงที่",
    "reading": "ค้า น สึ เถอะ น ถึ",
    "ipa": "k ˈɑː n s t ʌ n t",
    "level": "B2"
  },
  {
    "id": "b2_2619",
    "word": "constantly",
    "pos": "adv.",
    "meaning": "อย่างสมํ่าเสมอ",
    "reading": "ค้า น สึ เถอะ น ถลี่",
    "ipa": "k ˈɑː n s t ʌ n t l iː",
    "level": "B2"
  },
  {
    "id": "b2_2620",
    "word": "construct",
    "pos": "v.",
    "meaning": "สร้าง",
    "reading": "ค้า น สึ เถรอะ ขึ ถึ",
    "ipa": "k ˈɑː n s t r ʌ k t",
    "level": "B2"
  },
  {
    "id": "b2_2621",
    "word": "construction",
    "pos": "n.",
    "meaning": "การก่อสร้าง",
    "reading": "เขอะ น สึ ทระ ขึ เฉอะ น",
    "ipa": "k ʌ n s t r ˈʌ k ʃ ʌ n",
    "level": "B2"
  },
  {
    "id": "b2_2622",
    "word": "contemporary",
    "pos": "adj.",
    "meaning": "ร่วมสมัย",
    "reading": "เขอะ น เท้ะ ม เผ่อ ร แร (ร) อี่",
    "ipa": "k ʌ n t ˈe m p ɜːʴ ˌe r iː",
    "level": "B2"
  },
  {
    "id": "b2_2623",
    "word": "contest",
    "pos": "n., v.",
    "meaning": "การประกวด",
    "reading": "ค้า น เถะ สึ ถึ",
    "ipa": "k ˈɑː n t e s t",
    "level": "B2"
  },
  {
    "id": "b2_2624",
    "word": "contract",
    "pos": "n., v.",
    "meaning": "สัญญา",
    "reading": "ค้า น แทร ขึ ถึ",
    "ipa": "k ˈɑː n t r ˌæ k t",
    "level": "B2"
  },
  {
    "id": "b2_2625",
    "word": "contribute",
    "pos": "v.",
    "meaning": "มีส่วนช่วย",
    "reading": "เขอะ น ทริ บึ หยู่ ถึ",
    "ipa": "k ʌ n t r ˈɪ b j uː t",
    "level": "B2"
  },
  {
    "id": "b2_2626",
    "word": "contribution",
    "pos": "n.",
    "meaning": "ผลงาน",
    "reading": "คา น เถรอะ บึ ยู้ เฉอะ น",
    "ipa": "k ˌɑː n t r ʌ b j ˈuː ʃ ʌ n",
    "level": "B2"
  },
  {
    "id": "b2_2627",
    "word": "convert",
    "pos": "v.",
    "meaning": "แปลง",
    "reading": "ค้า น เฝือ ร ถึ",
    "ipa": "k ˈɑː n v ɜːʴ t",
    "level": "B2"
  },
  {
    "id": "b2_2628",
    "word": "convinced",
    "pos": "adj.",
    "meaning": "มั่นใจ",
    "reading": "เขอะ น ฟั น สึ ถึ",
    "ipa": "k ʌ n v ˈɪ n s t",
    "level": "B2"
  },
  {
    "id": "b2_2629",
    "word": "core",
    "pos": "n., adj.",
    "meaning": "แกนกลาง",
    "reading": "โค (ร)",
    "ipa": "k ˈɔː r",
    "level": "B2"
  },
  {
    "id": "b2_2630",
    "word": "corporate",
    "pos": "adj.",
    "meaning": "ขององค์กร",
    "reading": "โค้ (ร) เผ่อ ร เหรอะ ถึ",
    "ipa": "k ˈɔː r p ɜːʴ ʌ t",
    "level": "B2"
  },
  {
    "id": "b2_2631",
    "word": "council",
    "pos": "n.",
    "meaning": "สภา",
    "reading": "ค้าว น เสอะ ล",
    "ipa": "k ˈaʊ n s ʌ l",
    "level": "B2"
  },
  {
    "id": "b2_2632",
    "word": "county",
    "pos": "n.",
    "meaning": "เขต",
    "reading": "ค้าว น ถี่",
    "ipa": "k ˈaʊ n t iː",
    "level": "B2"
  },
  {
    "id": "b2_2633",
    "word": "courage",
    "pos": "n.",
    "meaning": "ความกล้าหาญ",
    "reading": "เค้อ ร เหรอะ จึ",
    "ipa": "k ˈɜːʴ ʌ dʒ",
    "level": "B2"
  },
  {
    "id": "b2_2634",
    "word": "crash",
    "pos": "n., v.",
    "meaning": "ชน",
    "reading": "แคร ฉึ",
    "ipa": "k r ˈæ ʃ",
    "level": "B2"
  },
  {
    "id": "b2_2635",
    "word": "creation",
    "pos": "n.",
    "meaning": "การสร้าง",
    "reading": "ขรี่ เอ๊ เฉอะ น",
    "ipa": "k r iː ˈeɪ ʃ ʌ n",
    "level": "B2"
  },
  {
    "id": "b2_2636",
    "word": "creature",
    "pos": "n.",
    "meaning": "สิ่งมีชีวิต",
    "reading": "ครี้ เฉ่อ ร",
    "ipa": "k r ˈiː tʃ ɜːʴ",
    "level": "B2"
  },
  {
    "id": "b2_2637",
    "word": "credit",
    "pos": "v.",
    "meaning": "เครดิต",
    "reading": "เคร้ะ เดอะ ถึ",
    "ipa": "k r ˈe d ʌ t",
    "level": "B2"
  },
  {
    "id": "b2_2638",
    "word": "crew",
    "pos": "n.",
    "meaning": "ลูกทีม",
    "reading": "ครู",
    "ipa": "k r ˈuː",
    "level": "B2"
  },
  {
    "id": "b2_2639",
    "word": "crisis",
    "pos": "n.",
    "meaning": "วิกฤติ",
    "reading": "คร้าย เสอะ สึ",
    "ipa": "k r ˈaɪ s ʌ s",
    "level": "B2"
  },
  {
    "id": "b2_2640",
    "word": "criterion",
    "pos": "n.",
    "meaning": "เกณฑ์",
    "reading": "ขร่าย เที้ย (ร) อี่ เออะ น",
    "ipa": "k r aɪ t ˈɪ r iː ʌ n",
    "level": "B2"
  },
  {
    "id": "b2_2641",
    "word": "critic",
    "pos": "n.",
    "meaning": "นักวิจารณ์",
    "reading": "คริ ถิ่ ขึ",
    "ipa": "k r ˈɪ t ɪ k",
    "level": "B2"
  },
  {
    "id": "b2_2642",
    "word": "critical",
    "pos": "adj.",
    "meaning": "วิกฤต",
    "reading": "คริ ถิ่ เขอะ ล",
    "ipa": "k r ˈɪ t ɪ k ʌ l",
    "level": "B2"
  },
  {
    "id": "b2_2643",
    "word": "criticism",
    "pos": "n.",
    "meaning": "การวิพากษ์วิจารณ์",
    "reading": "คริ ถิ่ ซิ เสอะ ม",
    "ipa": "k r ˈɪ t ɪ s ˌɪ z ʌ m",
    "level": "B2"
  },
  {
    "id": "b2_2644",
    "word": "criticize",
    "pos": "v.",
    "meaning": "วิจารณ์",
    "reading": "คริ ถิ่ ซาย สึ",
    "ipa": "k r ˈɪ t ɪ s ˌaɪ z",
    "level": "B2"
  },
  {
    "id": "b2_2645",
    "word": "crop",
    "pos": "n.",
    "meaning": "ครอบตัด",
    "reading": "ครา ผึ",
    "ipa": "k r ˈɑː p",
    "level": "B2"
  },
  {
    "id": "b2_2646",
    "word": "crucial",
    "pos": "adj.",
    "meaning": "สําคัญ",
    "reading": "ครู้ เฉอะ ล",
    "ipa": "k r ˈuː ʃ ʌ l",
    "level": "B2"
  },
  {
    "id": "b2_2647",
    "word": "cry",
    "pos": "n.",
    "meaning": "ร้องไห้",
    "reading": "คราย",
    "ipa": "k r ˈaɪ",
    "level": "B2"
  },
  {
    "id": "b2_2648",
    "word": "cure",
    "pos": "v., n.",
    "meaning": "รักษา",
    "reading": "ขึ ยัว (ร)",
    "ipa": "k j ˈʊ r",
    "level": "B2"
  },
  {
    "id": "b2_2649",
    "word": "current",
    "pos": "n.",
    "meaning": "ปัจจุบัน",
    "reading": "เค้อ ร เหรอะ น ถึ",
    "ipa": "k ˈɜːʴ ʌ n t",
    "level": "B2"
  },
  {
    "id": "b2_2650",
    "word": "curve",
    "pos": "n., v.",
    "meaning": "เส้นโค้ง",
    "reading": "เคอ ร ฝี",
    "ipa": "k ˈɜːʴ v",
    "level": "B2"
  },
  {
    "id": "b2_2651",
    "word": "curved",
    "pos": "adj.",
    "meaning": "โค้ง",
    "reading": "เคอ ร ฝี ดึ",
    "ipa": "k ˈɜːʴ v d",
    "level": "B2"
  },
  {
    "id": "b2_2652",
    "word": "date",
    "pos": "v.",
    "meaning": "วันที่",
    "reading": "เด ถึ",
    "ipa": "d ˈeɪ t",
    "level": "B2"
  },
  {
    "id": "b2_2653",
    "word": "debate",
    "pos": "n., v.",
    "meaning": "อภิปราย",
    "reading": "เดอะ เบ๊ ถึ",
    "ipa": "d ʌ b ˈeɪ t",
    "level": "B2"
  },
  {
    "id": "b2_2654",
    "word": "debt",
    "pos": "n.",
    "meaning": "หนี้",
    "reading": "เดะ ถึ",
    "ipa": "d ˈe t",
    "level": "B2"
  },
  {
    "id": "b2_2655",
    "word": "decent",
    "pos": "adj.",
    "meaning": "เหมาะสม",
    "reading": "ดี๊ เสอะ น ถึ",
    "ipa": "d ˈiː s ʌ n t",
    "level": "B2"
  },
  {
    "id": "b2_2656",
    "word": "declare",
    "pos": "v.",
    "meaning": "ประกาศ",
    "reading": "ดิ แคล้ (ร)",
    "ipa": "d ɪ k l ˈe r",
    "level": "B2"
  },
  {
    "id": "b2_2657",
    "word": "decline",
    "pos": "v., n.",
    "meaning": "ปฏิเสธ",
    "reading": "ดิ คล้าย น",
    "ipa": "d ɪ k l ˈaɪ n",
    "level": "B2"
  },
  {
    "id": "b2_2658",
    "word": "decoration",
    "pos": "n.",
    "meaning": "การตกแต่ง",
    "reading": "เดะ เข่อ ร เร้ เฉอะ น",
    "ipa": "d ˌe k ɜːʴ ˈeɪ ʃ ʌ n",
    "level": "B2"
  },
  {
    "id": "b2_2659",
    "word": "decrease",
    "pos": "v., n.",
    "meaning": "ลด",
    "reading": "ดี๊ ครี สึ",
    "ipa": "d ˈiː k r ˌiː s",
    "level": "B2"
  },
  {
    "id": "b2_2660",
    "word": "deeply",
    "pos": "adv.",
    "meaning": "อย่างลึกซึ้ง",
    "reading": "ดี๊ ผลี่",
    "ipa": "d ˈiː p l iː",
    "level": "B2"
  },
  {
    "id": "b2_2661",
    "word": "defeat",
    "pos": "v., n.",
    "meaning": "ความพ่ายแพ้",
    "reading": "ดิ ฟี้ ถึ",
    "ipa": "d ɪ f ˈiː t",
    "level": "B2"
  },
  {
    "id": "b2_2662",
    "word": "defence",
    "pos": "n.",
    "meaning": "ป็องกัน",
    "reading": "ดิ เฟ็ะ น สึ",
    "ipa": "d ɪ f ˈe n s",
    "level": "B2"
  },
  {
    "id": "b2_2663",
    "word": "defend",
    "pos": "v.",
    "meaning": "ปกป็อง",
    "reading": "ดิ เฟ็ะ น ดึ",
    "ipa": "d ɪ f ˈe n d",
    "level": "B2"
  },
  {
    "id": "b2_2664",
    "word": "delay",
    "pos": "v., n.",
    "meaning": "ล่าช้า",
    "reading": "ดิ เล้",
    "ipa": "d ɪ l ˈeɪ",
    "level": "B2"
  },
  {
    "id": "b2_2665",
    "word": "deliberate",
    "pos": "adj.",
    "meaning": "โดยเจตนา",
    "reading": "ดิ ลิ เบ่อ ร เหรอะ ถึ",
    "ipa": "d ɪ l ˈɪ b ɜːʴ ʌ t",
    "level": "B2"
  },
  {
    "id": "b2_2666",
    "word": "deliberately",
    "pos": "adv.",
    "meaning": "จงใจ",
    "reading": "ดิ ลิ เบ่อ ร เหรอะ ถลี่",
    "ipa": "d ɪ l ˈɪ b ɜːʴ ʌ t l iː",
    "level": "B2"
  },
  {
    "id": "b2_2667",
    "word": "delight",
    "pos": "v., n.",
    "meaning": "ความสุข",
    "reading": "ดิ ล้าย ถึ",
    "ipa": "d ɪ l ˈaɪ t",
    "level": "B2"
  },
  {
    "id": "b2_2668",
    "word": "delighted",
    "pos": "adj.",
    "meaning": "ดีใจ",
    "reading": "ดิ ล้าย เถอะ ดึ",
    "ipa": "d ɪ l ˈaɪ t ʌ d",
    "level": "B2"
  },
  {
    "id": "b2_2669",
    "word": "delivery",
    "pos": "n.",
    "meaning": "จัดส่ง",
    "reading": "ดิ ลิ เฝือ ร หรี่",
    "ipa": "d ɪ l ˈɪ v ɜːʴ iː",
    "level": "B2"
  },
  {
    "id": "b2_2670",
    "word": "demand",
    "pos": "n., v.",
    "meaning": "ความต้องการ",
    "reading": "ดิ แม้ น ดึ",
    "ipa": "d ɪ m ˈæ n d",
    "level": "B2"
  },
  {
    "id": "b2_2671",
    "word": "demonstrate",
    "pos": "v.",
    "meaning": "สาธิต",
    "reading": "เด๊ะ เหมอะ น สึ เทร ถึ",
    "ipa": "d ˈe m ʌ n s t r ˌeɪ t",
    "level": "B2"
  },
  {
    "id": "b2_2672",
    "word": "deny",
    "pos": "v.",
    "meaning": "ปฏิเสธ",
    "reading": "ดิ น้าย",
    "ipa": "d ɪ n ˈaɪ",
    "level": "B2"
  },
  {
    "id": "b2_2673",
    "word": "depressed",
    "pos": "adj.",
    "meaning": "หดหู่",
    "reading": "ดิ เพร้ะ สึ ถึ",
    "ipa": "d ɪ p r ˈe s t",
    "level": "B2"
  },
  {
    "id": "b2_2674",
    "word": "depressing",
    "pos": "adj.",
    "meaning": "ตกตํ่า",
    "reading": "ดิ เพร้ะ สิ่ ง",
    "ipa": "d ɪ p r ˈe s ɪ ŋ",
    "level": "B2"
  },
  {
    "id": "b2_2675",
    "word": "depth",
    "pos": "n.",
    "meaning": "ความลึก",
    "reading": "เดะ ผึ ตึ",
    "ipa": "d ˈe p θ",
    "level": "B2"
  },
  {
    "id": "b2_2676",
    "word": "desert",
    "pos": "v.",
    "meaning": "ทะเลทราย",
    "reading": "เด๊ะ เส่อ ร ถึ",
    "ipa": "d ˈe z ɜːʴ t",
    "level": "B2"
  },
  {
    "id": "b2_2677",
    "word": "deserve",
    "pos": "v.",
    "meaning": "สมควรได้รับ",
    "reading": "ดิ เซ้อ ร ฝี",
    "ipa": "d ɪ z ˈɜːʴ v",
    "level": "B2"
  },
  {
    "id": "b2_2678",
    "word": "desire",
    "pos": "n., v.",
    "meaning": "ความต้องการ",
    "reading": "ดิ ซ้าย เอ่อ ร",
    "ipa": "d ɪ z ˈaɪ ɜːʴ",
    "level": "B2"
  },
  {
    "id": "b2_2679",
    "word": "desperate",
    "pos": "adj.",
    "meaning": "หมดหวัง",
    "reading": "เด๊ะ สึ ผริ่ ถึ",
    "ipa": "d ˈe s p r ɪ t",
    "level": "B2"
  },
  {
    "id": "b2_2680",
    "word": "detail",
    "pos": "v.",
    "meaning": "รายละเอียด",
    "reading": "ดิ เท้ ล",
    "ipa": "d ɪ t ˈeɪ l",
    "level": "B2"
  },
  {
    "id": "b2_2681",
    "word": "detailed",
    "pos": "adj.",
    "meaning": "รายละเอียด",
    "reading": "ดิ เท้ ล ดึ",
    "ipa": "d ɪ t ˈeɪ l d",
    "level": "B2"
  },
  {
    "id": "b2_2682",
    "word": "detect",
    "pos": "v.",
    "meaning": "ตรวจจับ",
    "reading": "ดิ เท้ะ ขึ ถึ",
    "ipa": "d ɪ t ˈe k t",
    "level": "B2"
  },
  {
    "id": "b2_2683",
    "word": "dig",
    "pos": "v.",
    "meaning": "ขุด",
    "reading": "ดิ กึ",
    "ipa": "d ˈɪ g",
    "level": "B2"
  },
  {
    "id": "b2_2684",
    "word": "disc",
    "pos": "n.",
    "meaning": "แผ่นดิสก์",
    "reading": "ดิ สึ ขึ",
    "ipa": "d ˈɪ s k",
    "level": "B2"
  },
  {
    "id": "b2_2685",
    "word": "discipline",
    "pos": "n.",
    "meaning": "การลงโทษ",
    "reading": "ดิ้ เสอะ เผลอะ น",
    "ipa": "d ˈɪ s ʌ p l ʌ n",
    "level": "B2"
  },
  {
    "id": "b2_2686",
    "word": "discount",
    "pos": "v.",
    "meaning": "การลดราคา",
    "reading": "ดิ้ สึ ข่าว น ถึ",
    "ipa": "d ˈɪ s k aʊ n t",
    "level": "B2"
  },
  {
    "id": "b2_2687",
    "word": "dishonest",
    "pos": "adj.",
    "meaning": "ไม่ซื่อสัตย์",
    "reading": "ดิ ซ้า เหนอะ สึ ถึ",
    "ipa": "d ɪ s ˈɑː n ʌ s t",
    "level": "B2"
  },
  {
    "id": "b2_2688",
    "word": "dismiss",
    "pos": "v.",
    "meaning": "อนุญาตให้ออกไป",
    "reading": "ดิ สึ มิ สึ",
    "ipa": "d ɪ s m ˈɪ s",
    "level": "B2"
  },
  {
    "id": "b2_2689",
    "word": "display",
    "pos": "v., n.",
    "meaning": "แสดง",
    "reading": "ดิ สึ เพล้",
    "ipa": "d ɪ s p l ˈeɪ",
    "level": "B2"
  },
  {
    "id": "b2_2690",
    "word": "distribute",
    "pos": "v.",
    "meaning": "แจกจ่าย",
    "reading": "ดิ สึ ทริ บึ หยู่ ถึ",
    "ipa": "d ɪ s t r ˈɪ b j uː t",
    "level": "B2"
  },
  {
    "id": "b2_2691",
    "word": "distribution",
    "pos": "n.",
    "meaning": "การกระจาย",
    "reading": "ดิ สึ เถรอะ บึ ยู้ เฉอะ น",
    "ipa": "d ˌɪ s t r ʌ b j ˈuː ʃ ʌ n",
    "level": "B2"
  },
  {
    "id": "b2_2692",
    "word": "district",
    "pos": "n.",
    "meaning": "เขต",
    "reading": "ดิ้ สึ ถริ่ ขึ ถึ",
    "ipa": "d ˈɪ s t r ɪ k t",
    "level": "B2"
  },
  {
    "id": "b2_2693",
    "word": "divide",
    "pos": "n.",
    "meaning": "แบ่ง",
    "reading": "ดิ ฟ็าย ดึ",
    "ipa": "d ɪ v ˈaɪ d",
    "level": "B2"
  },
  {
    "id": "b2_2694",
    "word": "division",
    "pos": "n.",
    "meaning": "แผนก",
    "reading": "ดิ ฟั เฉอะ น",
    "ipa": "d ɪ v ˈɪ ʒ ʌ n",
    "level": "B2"
  },
  {
    "id": "b2_2695",
    "word": "document",
    "pos": "v.",
    "meaning": "เอกสาร",
    "reading": "ด๊า ขึ เหยอะ เหมอะ น ถึ",
    "ipa": "d ˈɑː k j ʌ m ʌ n t",
    "level": "B2"
  },
  {
    "id": "b2_2696",
    "word": "domestic",
    "pos": "adj.",
    "meaning": "ภายในประเทศ",
    "reading": "เดอะ เม้ะ สึ ถิ่ ขึ",
    "ipa": "d ʌ m ˈe s t ɪ k",
    "level": "B2"
  },
  {
    "id": "b2_2697",
    "word": "dominate",
    "pos": "v.",
    "meaning": "ครอง",
    "reading": "ด๊า เหมอะ เน ถึ",
    "ipa": "d ˈɑː m ʌ n ˌeɪ t",
    "level": "B2"
  },
  {
    "id": "b2_2698",
    "word": "downwards",
    "pos": "adv.",
    "meaning": "ลง",
    "reading": "ด๊าว น เหว่อ ร ดึ สึ",
    "ipa": "d ˈaʊ n w ɜːʴ d z",
    "level": "B2"
  },
  {
    "id": "b2_2699",
    "word": "dozen",
    "pos": "n.,",
    "meaning": "โหล",
    "reading": "ด๊ะ เสอะ น",
    "ipa": "d ˈʌ z ʌ n",
    "level": "B2"
  },
  {
    "id": "b2_2700",
    "word": "draft",
    "pos": "n., v.",
    "meaning": "ร่าง",
    "reading": "แดร ฝี ถึ",
    "ipa": "d r ˈæ f t",
    "level": "B2"
  },
  {
    "id": "b2_2701",
    "word": "drag",
    "pos": "v.",
    "meaning": "ลาก",
    "reading": "แดร กึ",
    "ipa": "d r ˈæ g",
    "level": "B2"
  },
  {
    "id": "b2_2702",
    "word": "dramatic",
    "pos": "adj.",
    "meaning": "น่าทึ่ง",
    "reading": "เดรอะ แม้ ถิ่ ขึ",
    "ipa": "d r ʌ m ˈæ t ɪ k",
    "level": "B2"
  },
  {
    "id": "b2_2703",
    "word": "edit",
    "pos": "v.",
    "meaning": "แก้ไข",
    "reading": "เอ๊ะ เดอะ ถึ",
    "ipa": "ˈe d ʌ t",
    "level": "B2"
  },
  {
    "id": "b2_2704",
    "word": "edition",
    "pos": "n.",
    "meaning": "ฉบับ",
    "reading": "เออะ ดิ้ เฉอะ น",
    "ipa": "ʌ d ˈɪ ʃ ʌ n",
    "level": "B2"
  },
  {
    "id": "b2_2705",
    "word": "efficient",
    "pos": "adj.",
    "meaning": "มีประสิทธิภาพ",
    "reading": "อิ ฟั เฉอะ น ถึ",
    "ipa": "ɪ f ˈɪ ʃ ʌ n t",
    "level": "B2"
  },
  {
    "id": "b2_2706",
    "word": "elderly",
    "pos": "adj.",
    "meaning": "ผู้สูงอายุ",
    "reading": "เอ๊ะ ล เด่อ ร หลี่",
    "ipa": "ˈe l d ɜːʴ l iː",
    "level": "B2"
  },
  {
    "id": "b2_2707",
    "word": "elect",
    "pos": "v.",
    "meaning": "เลือก",
    "reading": "อิ เล้ะ ขึ ถึ",
    "ipa": "ɪ l ˈe k t",
    "level": "B2"
  },
  {
    "id": "b2_2708",
    "word": "elsewhere",
    "pos": "adv.",
    "meaning": "ที่อื่น",
    "reading": "เอ๊ะ ล สึ แว (ร)",
    "ipa": "ˈe l s w ˌe r",
    "level": "B2"
  },
  {
    "id": "b2_2709",
    "word": "emerge",
    "pos": "v.",
    "meaning": "โผล่ออกมา",
    "reading": "อิ เม้อ ร จึ",
    "ipa": "ɪ m ˈɜːʴ dʒ",
    "level": "B2"
  },
  {
    "id": "b2_2710",
    "word": "emotional",
    "pos": "adj.",
    "meaning": "ทางอารมณ์",
    "reading": "อิ โม้ว เฉอะ เหนอะ ล",
    "ipa": "ɪ m ˈəʊ ʃ ʌ n ʌ l",
    "level": "B2"
  },
  {
    "id": "b2_2711",
    "word": "emphasis",
    "pos": "n.",
    "meaning": "เน้น",
    "reading": "เอ๊ะ ม เฝอะ เสอะ สึ",
    "ipa": "ˈe m f ʌ s ʌ s",
    "level": "B2"
  },
  {
    "id": "b2_2712",
    "word": "emphasize",
    "pos": "v.",
    "meaning": "เน้นยํ้า",
    "reading": "เอ๊ะ ม เฝอะ ซาย สึ",
    "ipa": "ˈe m f ʌ s ˌaɪ z",
    "level": "B2"
  },
  {
    "id": "b2_2713",
    "word": "enable",
    "pos": "v.",
    "meaning": "เปัดใช้งาน",
    "reading": "เอะ เน้ เบอะ ล",
    "ipa": "e n ˈeɪ b ʌ l",
    "level": "B2"
  },
  {
    "id": "b2_2714",
    "word": "encounter",
    "pos": "v., n.",
    "meaning": "เผชิญ",
    "reading": "อิ น ค้าว น เถ่อ ร",
    "ipa": "ɪ n k ˈaʊ n t ɜːʴ",
    "level": "B2"
  },
  {
    "id": "b2_2715",
    "word": "engage",
    "pos": "v.",
    "meaning": "หมั้น",
    "reading": "เอะ น เก๊ จึ",
    "ipa": "e n g ˈeɪ dʒ",
    "level": "B2"
  },
  {
    "id": "b2_2716",
    "word": "enhance",
    "pos": "v.",
    "meaning": "ยกระดับ",
    "reading": "เอะ น แฮ้ น สึ",
    "ipa": "e n h ˈæ n s",
    "level": "B2"
  },
  {
    "id": "b2_2717",
    "word": "enquiry",
    "pos": "n.",
    "meaning": "สอบถามรายละเอียดเพิ่มเติม",
    "reading": "อิ น คว้าย รี",
    "ipa": "ɪ n k w ˈaɪ r ˌiː",
    "level": "B2"
  },
  {
    "id": "b2_2718",
    "word": "ensure",
    "pos": "v.",
    "meaning": "ทําให้มั่นใจ",
    "reading": "เอะ น ชั้ว (ร)",
    "ipa": "e n ʃ ˈʊ r",
    "level": "B2"
  },
  {
    "id": "b2_2719",
    "word": "enthusiasm",
    "pos": "n.",
    "meaning": "ความกระตือรือร้น",
    "reading": "อิ น ตู๊ สี่ แอ เสอะ ม",
    "ipa": "ɪ n θ ˈuː z iː ˌæ z ʌ m",
    "level": "B2"
  },
  {
    "id": "b2_2720",
    "word": "enthusiastic",
    "pos": "adj.",
    "meaning": "กระตือรือร้น",
    "reading": "อิ น ตู สี่ แอ๊ สึ ถิ่ ขึ",
    "ipa": "ɪ n θ ˌuː z iː ˈæ s t ɪ k",
    "level": "B2"
  },
  {
    "id": "b2_2721",
    "word": "entire",
    "pos": "adj.",
    "meaning": "ทั้งหมด",
    "reading": "อิ น ท้าย เอ่อ ร",
    "ipa": "ɪ n t ˈaɪ ɜːʴ",
    "level": "B2"
  },
  {
    "id": "b2_2722",
    "word": "entirely",
    "pos": "adv.",
    "meaning": "โดยสิ้นเชิง",
    "reading": "อิ น ท้าย เอ่อ ร หลี่",
    "ipa": "ɪ n t ˈaɪ ɜːʴ l iː",
    "level": "B2"
  },
  {
    "id": "b2_2723",
    "word": "equal",
    "pos": "n.",
    "meaning": "เท่ากัน",
    "reading": "อี๊ เขวอะ ล",
    "ipa": "ˈiː k w ʌ l",
    "level": "B2"
  },
  {
    "id": "b2_2724",
    "word": "establish",
    "pos": "v.",
    "meaning": "สร้าง",
    "reading": "อิ สึ แท้ บลิ ฉึ",
    "ipa": "ɪ s t ˈæ b l ɪ ʃ",
    "level": "B2"
  },
  {
    "id": "b2_2725",
    "word": "estate",
    "pos": "n.",
    "meaning": "อสังหาริมทรัพย์",
    "reading": "อิ สึ เท้ ถึ",
    "ipa": "ɪ s t ˈeɪ t",
    "level": "B2"
  },
  {
    "id": "b2_2726",
    "word": "estimate",
    "pos": "v., n.",
    "meaning": "ประมาณการ",
    "reading": "เอ๊ะ สึ เถอะ เหมอะ ถึ",
    "ipa": "ˈe s t ʌ m ʌ t",
    "level": "B2"
  },
  {
    "id": "b2_2727",
    "word": "ethical",
    "pos": "adj.",
    "meaning": "มีจริยธรรม",
    "reading": "เอ๊ะ ติ เขอะ ล",
    "ipa": "ˈe θ ɪ k ʌ l",
    "level": "B2"
  },
  {
    "id": "b2_2728",
    "word": "evaluate",
    "pos": "v.",
    "meaning": "ประเมิน",
    "reading": "อิ แฟ็ ล หยู่ เอ ถึ",
    "ipa": "ɪ v ˈæ l j uː ˌeɪ t",
    "level": "B2"
  },
  {
    "id": "b2_2729",
    "word": "even",
    "pos": "adj.",
    "meaning": "สมํ่าเสมอ",
    "reading": "อี๊ ฝั่ น",
    "ipa": "ˈiː v ɪ n",
    "level": "B2"
  },
  {
    "id": "b2_2730",
    "word": "evil",
    "pos": "adj., n.",
    "meaning": "ความชั่วร้าย",
    "reading": "อี๊ เฝอะ ล",
    "ipa": "ˈiː v ʌ l",
    "level": "B2"
  },
  {
    "id": "b2_2731",
    "word": "examination",
    "pos": "n.",
    "meaning": "การตรวจสอบ",
    "reading": "อิ กึ แซ เหมอะ เน้ เฉอะ น",
    "ipa": "ɪ g z ˌæ m ʌ n ˈeɪ ʃ ʌ n",
    "level": "B2"
  },
  {
    "id": "b2_2732",
    "word": "excuse",
    "pos": "n., v.",
    "meaning": "ขอโทษ",
    "reading": "อิ ขึ สึ ขึ ยู้ สึ",
    "ipa": "ɪ k s k j ˈuː s",
    "level": "B2"
  },
  {
    "id": "b2_2733",
    "word": "executive",
    "pos": "n., adj.",
    "meaning": "ผู้บริหาร",
    "reading": "อิ กึ เซ้ะ ขึ เหยอะ ถิ่ ฝี",
    "ipa": "ɪ g z ˈe k j ʌ t ɪ v",
    "level": "B2"
  },
  {
    "id": "b2_2734",
    "word": "existence",
    "pos": "n.",
    "meaning": "การดํารงอยู่",
    "reading": "เอะ กึ ซิ สึ เถอะ น สึ",
    "ipa": "e g z ˈɪ s t ʌ n s",
    "level": "B2"
  },
  {
    "id": "b2_2735",
    "word": "expectation",
    "pos": "n.",
    "meaning": "ความคาดหวัง",
    "reading": "เอะ ขึ สึ เผะ ขึ เท้ เฉอะ น",
    "ipa": "ˌe k s p e k t ˈeɪ ʃ ʌ n",
    "level": "B2"
  },
  {
    "id": "b2_2736",
    "word": "expense",
    "pos": "n.",
    "meaning": "ค่าใช้จ่าย",
    "reading": "อิ ขึ สึ เพ้ะ น สึ",
    "ipa": "ɪ k s p ˈe n s",
    "level": "B2"
  },
  {
    "id": "b2_2737",
    "word": "exploration",
    "pos": "n.",
    "meaning": "การสํารวจ",
    "reading": "เอะ ขึ สึ เผล่อ ร เร้ เฉอะ น",
    "ipa": "ˌe k s p l ɜːʴ ˈeɪ ʃ ʌ n",
    "level": "B2"
  },
  {
    "id": "b2_2738",
    "word": "expose",
    "pos": "v.",
    "meaning": "เปัดเผย",
    "reading": "อิ ขึ สึ โพ้ว สึ",
    "ipa": "ɪ k s p ˈəʊ z",
    "level": "B2"
  },
  {
    "id": "b2_2739",
    "word": "extend",
    "pos": "v.",
    "meaning": "ขยาย",
    "reading": "อิ ขึ สึ เท้ะ น ดึ",
    "ipa": "ɪ k s t ˈe n d",
    "level": "B2"
  },
  {
    "id": "b2_2740",
    "word": "extent",
    "pos": "n.",
    "meaning": "ขอบเขต",
    "reading": "อิ ขึ สึ เท้ะ น ถึ",
    "ipa": "ɪ k s t ˈe n t",
    "level": "B2"
  },
  {
    "id": "b2_2741",
    "word": "external",
    "pos": "adj.",
    "meaning": "ภายนอก",
    "reading": "อิ ขึ สึ เท้อ ร เหนอะ ล",
    "ipa": "ɪ k s t ˈɜːʴ n ʌ l",
    "level": "B2"
  },
  {
    "id": "b2_2742",
    "word": "extraordinary",
    "pos": "adj.",
    "meaning": "พิเศษ เอะ",
    "reading": "ขึ สึ เถรอะ โอ๊ (ร) เดอะ แน (ร) อี่",
    "ipa": "ˌe k s t r ʌ ˈɔː r d ʌ n ˌe r iː",
    "level": "B2"
  },
  {
    "id": "b2_2743",
    "word": "extreme",
    "pos": "n.",
    "meaning": "สุดขีด",
    "reading": "เอะ ขึ สึ ทรี้ ม",
    "ipa": "e k s t r ˈiː m",
    "level": "B2"
  },
  {
    "id": "b2_2744",
    "word": "facility",
    "pos": "n.",
    "meaning": "สิ่งอํานวยความสะดวก",
    "reading": "เฝอะ ซิ หลิ่ ถี่",
    "ipa": "f ʌ s ˈɪ l ɪ t iː",
    "level": "B2"
  },
  {
    "id": "b2_2745",
    "word": "failure",
    "pos": "n.",
    "meaning": "ความล้มเหลว",
    "reading": "เฟ็ ล เหย่อ ร",
    "ipa": "f ˈeɪ l j ɜːʴ",
    "level": "B2"
  },
  {
    "id": "b2_2746",
    "word": "faith",
    "pos": "n.",
    "meaning": "ศรัทธา",
    "reading": "เฟ ตึ",
    "ipa": "f ˈeɪ θ",
    "level": "B2"
  },
  {
    "id": "b2_2747",
    "word": "fault",
    "pos": "n.",
    "meaning": "ความผิดพลาด",
    "reading": "ฟอ ล ถึ",
    "ipa": "f ˈɔː l t",
    "level": "B2"
  },
  {
    "id": "b2_2748",
    "word": "favour",
    "pos": "v.",
    "meaning": "โปรดปราน",
    "reading": "เฟ็ เฝือ ร",
    "ipa": "f ˈeɪ v ɜːʴ",
    "level": "B2"
  },
  {
    "id": "b2_2749",
    "word": "feather",
    "pos": "n.",
    "meaning": "ขนนก",
    "reading": "เฟ็ะ เด่อ ร",
    "ipa": "f ˈe ð ɜːʴ",
    "level": "B2"
  },
  {
    "id": "b2_2750",
    "word": "fee",
    "pos": "n.",
    "meaning": "ค่าธรรมเนียม",
    "reading": "ฟี",
    "ipa": "f ˈiː",
    "level": "B2"
  },
  {
    "id": "b2_2751",
    "word": "feed",
    "pos": "n.",
    "meaning": "ให้อาหาร",
    "reading": "ฟี ดึ",
    "ipa": "f ˈiː d",
    "level": "B2"
  },
  {
    "id": "b2_2752",
    "word": "feedback",
    "pos": "n.",
    "meaning": "ข้อเสนอแนะ",
    "reading": "ฟี้ ดึ แบ ขึ",
    "ipa": "f ˈiː d b ˌæ k",
    "level": "B2"
  },
  {
    "id": "b2_2753",
    "word": "feel",
    "pos": "n.",
    "meaning": "รู้สึก",
    "reading": "ฟี ล",
    "ipa": "f ˈiː l",
    "level": "B2"
  },
  {
    "id": "b2_2754",
    "word": "fellow",
    "pos": "adj.",
    "meaning": "เพื่อน",
    "reading": "เฟ็ะ โหล่ว",
    "ipa": "f ˈe l əʊ",
    "level": "B2"
  },
  {
    "id": "b2_2755",
    "word": "figure",
    "pos": "v.",
    "meaning": "รูป",
    "reading": "ฟั กึ เหย่อ ร",
    "ipa": "f ˈɪ g j ɜːʴ",
    "level": "B2"
  },
  {
    "id": "b2_2756",
    "word": "file",
    "pos": "v.",
    "meaning": "ไฟล์",
    "reading": "ฟาย ล",
    "ipa": "f ˈaɪ l",
    "level": "B2"
  },
  {
    "id": "b2_2757",
    "word": "finance",
    "pos": "n., v.",
    "meaning": "การเงิน",
    "reading": "เฝอะ แน้ น สึ",
    "ipa": "f ʌ n ˈæ n s",
    "level": "B2"
  },
  {
    "id": "b2_2758",
    "word": "finding",
    "pos": "n.",
    "meaning": "การค้นหา",
    "reading": "ฟ็าย น ดิ ง",
    "ipa": "f ˈaɪ n d ɪ ŋ",
    "level": "B2"
  },
  {
    "id": "b2_2759",
    "word": "firm",
    "pos": "n.",
    "meaning": "บริษัท",
    "reading": "เฟอ ร ม",
    "ipa": "f ˈɜːʴ m",
    "level": "B2"
  },
  {
    "id": "b2_2760",
    "word": "fix",
    "pos": "n.",
    "meaning": "แก้ไข",
    "reading": "ฟั ขึ สึ",
    "ipa": "f ˈɪ k s",
    "level": "B2"
  },
  {
    "id": "b2_2761",
    "word": "flame",
    "pos": "n.",
    "meaning": "เปลวไฟ",
    "reading": "เฟล ม",
    "ipa": "f l ˈeɪ m",
    "level": "B2"
  },
  {
    "id": "b2_2762",
    "word": "flash",
    "pos": "n., v.",
    "meaning": "แฟลช",
    "reading": "แฟล ฉึ",
    "ipa": "f l ˈæ ʃ",
    "level": "B2"
  },
  {
    "id": "b2_2763",
    "word": "flexible",
    "pos": "adj.",
    "meaning": "ยืดหยุ่นได้",
    "reading": "เฟล้ะ ขึ เสอะ เบอะ ล",
    "ipa": "f l ˈe k s ʌ b ʌ l",
    "level": "B2"
  },
  {
    "id": "b2_2764",
    "word": "float",
    "pos": "v.",
    "meaning": "ลอย",
    "reading": "โฟลว ถึ",
    "ipa": "f l ˈəʊ t",
    "level": "B2"
  },
  {
    "id": "b2_2765",
    "word": "fold",
    "pos": "n.",
    "meaning": "พับ",
    "reading": "โฟว ล ดึ",
    "ipa": "f ˈəʊ l d",
    "level": "B2"
  },
  {
    "id": "b2_2766",
    "word": "folding",
    "pos": "adj.",
    "meaning": "พับ",
    "reading": "โฟ็ว ล ดิ ง",
    "ipa": "f ˈəʊ l d ɪ ŋ",
    "level": "B2"
  },
  {
    "id": "b2_2767",
    "word": "following",
    "pos": "prep.",
    "meaning": "กําลังติดตาม",
    "reading": "ฟ็า โหล่ว อิ่ ง",
    "ipa": "f ˈɑː l əʊ ɪ ŋ",
    "level": "B2"
  },
  {
    "id": "b2_2768",
    "word": "forgive",
    "pos": "v.",
    "meaning": "ให้อภัย",
    "reading": "เฝือ ร กิ้ ฝี",
    "ipa": "f ɜːʴ g ˈɪ v",
    "level": "B2"
  },
  {
    "id": "b2_2769",
    "word": "former",
    "pos": "adj.",
    "meaning": "อดีต",
    "reading": "โฟ็ (ร) เหม่อ ร",
    "ipa": "f ˈɔː r m ɜːʴ",
    "level": "B2"
  },
  {
    "id": "b2_2770",
    "word": "fortune",
    "pos": "n.",
    "meaning": "โชค",
    "reading": "โฟ็ (ร) เฉอะ น",
    "ipa": "f ˈɔː r tʃ ʌ n",
    "level": "B2"
  },
  {
    "id": "b2_2771",
    "word": "forward",
    "pos": "adj.",
    "meaning": "ซึ่งไปข้างหน้า",
    "reading": "โฟ็ (ร) เหว่อ ร ดึ",
    "ipa": "f ˈɔː r w ɜːʴ d",
    "level": "B2"
  },
  {
    "id": "b2_2772",
    "word": "found",
    "pos": "v.",
    "meaning": "พบ",
    "reading": "ฟาว น ดึ",
    "ipa": "f ˈaʊ n d",
    "level": "B2"
  },
  {
    "id": "b2_2773",
    "word": "free",
    "pos": "v.",
    "meaning": "ฟรี",
    "reading": "ฟรี",
    "ipa": "f r ˈiː",
    "level": "B2"
  },
  {
    "id": "b2_2774",
    "word": "freedom",
    "pos": "n.",
    "meaning": "เสรีภาพ",
    "reading": "ฟรี้ เดอะ ม",
    "ipa": "f r ˈiː d ʌ m",
    "level": "B2"
  },
  {
    "id": "b2_2775",
    "word": "frequency",
    "pos": "n.",
    "meaning": "ความถี่",
    "reading": "ฟรี้ เขวอะ น สี่",
    "ipa": "f r ˈiː k w ʌ n s iː",
    "level": "B2"
  },
  {
    "id": "b2_2776",
    "word": "fuel",
    "pos": "v.",
    "meaning": "เชื้อเพลิง",
    "reading": "ฝี ยู้ เออะ ล",
    "ipa": "f j ˈuː ʌ l",
    "level": "B2"
  },
  {
    "id": "b2_2777",
    "word": "fully",
    "pos": "adv.",
    "meaning": "อย่างเต็มที่",
    "reading": "ฟุ หลี่",
    "ipa": "f ˈʊ l iː",
    "level": "B2"
  },
  {
    "id": "b2_2778",
    "word": "function",
    "pos": "v.",
    "meaning": "การทํางาน",
    "reading": "ฟะ ง ขึ เฉอะ น",
    "ipa": "f ˈʌ ŋ k ʃ ʌ n",
    "level": "B2"
  },
  {
    "id": "b2_2779",
    "word": "fund",
    "pos": "n., v.",
    "meaning": "กองทุน",
    "reading": "ฟะ น ดึ",
    "ipa": "f ˈʌ n d",
    "level": "B2"
  },
  {
    "id": "b2_2780",
    "word": "fundamental",
    "pos": "adj.",
    "meaning": "พื้นฐาน",
    "reading": "ฟะ น เดอะ เม้ะ น เถอะ ล",
    "ipa": "f ˌʌ n d ʌ m ˈe n t ʌ l",
    "level": "B2"
  },
  {
    "id": "b2_2781",
    "word": "funding",
    "pos": "n.",
    "meaning": "เงินทุน",
    "reading": "ฟะ น ดิ ง",
    "ipa": "f ˈʌ n d ɪ ŋ",
    "level": "B2"
  },
  {
    "id": "b2_2782",
    "word": "furthermore",
    "pos": "adv.",
    "meaning": "นอกจากนี้",
    "reading": "เฟ็อ ร เด่อ ร โม (ร)",
    "ipa": "f ˈɜːʴ ð ɜːʴ m ˌɔː r",
    "level": "B2"
  },
  {
    "id": "b2_2783",
    "word": "gain",
    "pos": "v., n.",
    "meaning": "ได้รับ",
    "reading": "เก น",
    "ipa": "g ˈeɪ n",
    "level": "B2"
  },
  {
    "id": "b2_2784",
    "word": "gang",
    "pos": "n.",
    "meaning": "แก๊ง",
    "reading": "แก ง",
    "ipa": "g ˈæ ŋ",
    "level": "B2"
  },
  {
    "id": "b2_2785",
    "word": "generate",
    "pos": "v.",
    "meaning": "สร้าง",
    "reading": "เจ๊ะ เหน่อ ร เร ถึ",
    "ipa": "dʒ ˈe n ɜːʴ ˌeɪ t",
    "level": "B2"
  },
  {
    "id": "b2_2786",
    "word": "genre",
    "pos": "n.",
    "meaning": "ประเภท",
    "reading": "ช้า น เหรอะ",
    "ipa": "ʒ ˈɑː n r ʌ",
    "level": "B2"
  },
  {
    "id": "b2_2787",
    "word": "govern",
    "pos": "v.",
    "meaning": "ปกครอง",
    "reading": "ก๊ะ เฝือ ร น",
    "ipa": "g ˈʌ v ɜːʴ n",
    "level": "B2"
  },
  {
    "id": "b2_2788",
    "word": "grab",
    "pos": "v.",
    "meaning": "คว้า",
    "reading": "แกร บึ",
    "ipa": "g r ˈæ b",
    "level": "B2"
  },
  {
    "id": "b2_2789",
    "word": "grade",
    "pos": "v.",
    "meaning": "ระดับ",
    "reading": "เกร ดึ",
    "ipa": "g r ˈeɪ d",
    "level": "B2"
  },
  {
    "id": "b2_2790",
    "word": "gradually",
    "pos": "adv.",
    "meaning": "ค่อยๆ",
    "reading": "แกร๊ จู่ เออะ หลี่",
    "ipa": "g r ˈæ dʒ uː ʌ l iː",
    "level": "B2"
  },
  {
    "id": "b2_2791",
    "word": "grand",
    "pos": "adj.",
    "meaning": "ยิ่งใหญ่",
    "reading": "แกร น ดึ",
    "ipa": "g r ˈæ n d",
    "level": "B2"
  },
  {
    "id": "b2_2792",
    "word": "grant",
    "pos": "v., n.",
    "meaning": "ยินยอม",
    "reading": "แกร น ถึ",
    "ipa": "g r ˈæ n t",
    "level": "B2"
  },
  {
    "id": "b2_2793",
    "word": "guarantee",
    "pos": "v., n.",
    "meaning": "รับประกัน",
    "reading": "แก ร เออะ น ที้",
    "ipa": "g ˌe r ʌ n t ˈiː",
    "level": "B2"
  },
  {
    "id": "b2_2794",
    "word": "handle",
    "pos": "v., n.",
    "meaning": "รับมือ",
    "reading": "แฮ้ น เดอะ ล",
    "ipa": "h ˈæ n d ʌ l",
    "level": "B2"
  },
  {
    "id": "b2_2795",
    "word": "harm",
    "pos": "n., v.",
    "meaning": "อันตราย",
    "reading": "ฮา (ร) ม",
    "ipa": "h ˈɑː r m",
    "level": "B2"
  },
  {
    "id": "b2_2796",
    "word": "harmful",
    "pos": "adj.",
    "meaning": "เป็นอันตราย",
    "reading": "ฮ้า (ร) ม เฝอะ ล",
    "ipa": "h ˈɑː r m f ʌ l",
    "level": "B2"
  },
  {
    "id": "b2_2797",
    "word": "hearing",
    "pos": "n.",
    "meaning": "การได้ยิน",
    "reading": "ฮี้ หริ่ ง",
    "ipa": "h ˈiː r ɪ ŋ",
    "level": "B2"
  },
  {
    "id": "b2_2798",
    "word": "heaven",
    "pos": "n.",
    "meaning": "สวรรค์",
    "reading": "เฮ้ะ เฝอะ น",
    "ipa": "h ˈe v ʌ n",
    "level": "B2"
  },
  {
    "id": "b2_2799",
    "word": "heel",
    "pos": "n.",
    "meaning": "ส้น",
    "reading": "ฮี ล",
    "ipa": "h ˈiː l",
    "level": "B2"
  },
  {
    "id": "b2_2800",
    "word": "hell",
    "pos": "n.",
    "meaning": "นรก",
    "reading": "เฮะ ล",
    "ipa": "h ˈe l",
    "level": "B2"
  },
  {
    "id": "b2_2801",
    "word": "hesitate",
    "pos": "v.",
    "meaning": "ลังเล",
    "reading": "เฮ้ะ เสอะ เท ถึ",
    "ipa": "h ˈe z ʌ t ˌeɪ t",
    "level": "B2"
  },
  {
    "id": "b2_2802",
    "word": "high",
    "pos": "n.",
    "meaning": "สูง",
    "reading": "ฮาย",
    "ipa": "h ˈaɪ",
    "level": "B2"
  },
  {
    "id": "b2_2803",
    "word": "hire",
    "pos": "n.",
    "meaning": "จ้าง",
    "reading": "ฮ้าย เอ่อ ร",
    "ipa": "h ˈaɪ ɜːʴ",
    "level": "B2"
  },
  {
    "id": "b2_2804",
    "word": "hold",
    "pos": "n.",
    "meaning": "ถือ",
    "reading": "โฮว ล ดึ",
    "ipa": "h ˈəʊ l d",
    "level": "B2"
  },
  {
    "id": "b2_2805",
    "word": "hollow",
    "pos": "adj.",
    "meaning": "กลวง",
    "reading": "ฮ้า โหล่ว",
    "ipa": "h ˈɑː l əʊ",
    "level": "B2"
  },
  {
    "id": "b2_2806",
    "word": "holy",
    "pos": "adj.",
    "meaning": "ศักดิ์สิทธิ์",
    "reading": "โฮ้ว หลี่",
    "ipa": "h ˈəʊ l iː",
    "level": "B2"
  },
  {
    "id": "b2_2807",
    "word": "honour",
    "pos": "n., v.",
    "meaning": "ให้เกียรติ",
    "reading": "อ๊า เหน่อ ร",
    "ipa": "ˈɑː n ɜːʴ",
    "level": "B2"
  },
  {
    "id": "b2_2808",
    "word": "host",
    "pos": "v.",
    "meaning": "เจ้าภาพ",
    "reading": "โฮว สึ ถึ",
    "ipa": "h ˈəʊ s t",
    "level": "B2"
  },
  {
    "id": "b2_2809",
    "word": "house",
    "pos": "v.",
    "meaning": "บ้าน",
    "reading": "ฮาว สึ",
    "ipa": "h ˈaʊ s",
    "level": "B2"
  },
  {
    "id": "b2_2810",
    "word": "household",
    "pos": "n.",
    "meaning": "ครัวเรือน",
    "reading": "ฮ้าว สึ โฮว ล ดึ",
    "ipa": "h ˈaʊ s h ˌəʊ l d",
    "level": "B2"
  },
  {
    "id": "b2_2811",
    "word": "housing",
    "pos": "n.",
    "meaning": "ที่อยู่อาศัย",
    "reading": "ฮ้าว สิ่ ง",
    "ipa": "h ˈaʊ z ɪ ŋ",
    "level": "B2"
  },
  {
    "id": "b2_2812",
    "word": "humorous",
    "pos": "adj.",
    "meaning": "มีอารมณ์ขัน",
    "reading": "หึ ยู้ เหม่อ ร เหรอะ สึ",
    "ipa": "h j ˈuː m ɜːʴ ʌ s",
    "level": "B2"
  },
  {
    "id": "b2_2813",
    "word": "humour",
    "pos": "n.",
    "meaning": "อารมณ์ขัน",
    "reading": "หึ ยู้ เหม่อ ร",
    "ipa": "h j ˈuː m ɜːʴ",
    "level": "B2"
  },
  {
    "id": "b2_2814",
    "word": "hunt",
    "pos": "n.",
    "meaning": "ล่า",
    "reading": "ฮะ น ถึ",
    "ipa": "h ˈʌ n t",
    "level": "B2"
  },
  {
    "id": "b2_2815",
    "word": "hunting",
    "pos": "n.",
    "meaning": "การล่าสัตว์",
    "reading": "ฮะ น ถิ่ ง",
    "ipa": "h ˈʌ n t ɪ ŋ",
    "level": "B2"
  },
  {
    "id": "b2_2816",
    "word": "hurt",
    "pos": "n.",
    "meaning": "เจ็บ",
    "reading": "เฮอ ร ถึ",
    "ipa": "h ˈɜːʴ t",
    "level": "B2"
  },
  {
    "id": "b2_2817",
    "word": "ideal",
    "pos": "n.",
    "meaning": "ในอุดมคติ",
    "reading": "อ่าย ดี๊ ล",
    "ipa": "aɪ d ˈiː l",
    "level": "B2"
  },
  {
    "id": "b2_2818",
    "word": "illustrate",
    "pos": "v.",
    "meaning": "แสดงให้เห็น",
    "reading": "อิ้ เหลอะ สึ เทร ถึ",
    "ipa": "ˈɪ l ʌ s t r ˌeɪ t",
    "level": "B2"
  },
  {
    "id": "b2_2819",
    "word": "illustration",
    "pos": "n.",
    "meaning": "ภาพประกอบ",
    "reading": "อิ เหลอะ สึ เทร้ เฉอะ น",
    "ipa": "ˌɪ l ʌ s t r ˈeɪ ʃ ʌ n",
    "level": "B2"
  },
  {
    "id": "b2_2820",
    "word": "imagination",
    "pos": "n.",
    "meaning": "จินตนาการ",
    "reading": "อิ แม เจอะ เน้ เฉอะ น",
    "ipa": "ˌɪ m ˌæ dʒ ʌ n ˈeɪ ʃ ʌ n",
    "level": "B2"
  },
  {
    "id": "b2_2821",
    "word": "impatient",
    "pos": "adj.",
    "meaning": "ใจร้อน",
    "reading": "อิ ม เพ้ เฉอะ น ถึ",
    "ipa": "ˌɪ m p ˈeɪ ʃ ʌ n t",
    "level": "B2"
  },
  {
    "id": "b2_2822",
    "word": "imply",
    "pos": "v.",
    "meaning": "บอกเป็นนัย",
    "reading": "อิ ม พล้าย",
    "ipa": "ˌɪ m p l ˈaɪ",
    "level": "B2"
  },
  {
    "id": "b2_2823",
    "word": "impose",
    "pos": "v.",
    "meaning": "กําหนด",
    "reading": "อิ ม โพ้ว สึ",
    "ipa": "ˌɪ m p ˈəʊ z",
    "level": "B2"
  },
  {
    "id": "b2_2824",
    "word": "impress",
    "pos": "v.",
    "meaning": "ประทับใจ",
    "reading": "อิ้ ม เผระ สึ",
    "ipa": "ˈɪ m p r e s",
    "level": "B2"
  },
  {
    "id": "b2_2825",
    "word": "impressed",
    "pos": "adj.",
    "meaning": "ประทับใจ",
    "reading": "อิ ม เพร้ะ สึ ถึ",
    "ipa": "ˌɪ m p r ˈe s t",
    "level": "B2"
  },
  {
    "id": "b2_2826",
    "word": "inch",
    "pos": "n.",
    "meaning": "นิ้ว",
    "reading": "อิ น ฉึ",
    "ipa": "ˈɪ n tʃ",
    "level": "B2"
  },
  {
    "id": "b2_2827",
    "word": "incident",
    "pos": "n.",
    "meaning": "เหตุการณ์",
    "reading": "อิ้ น เสอะ เดอะ น ถึ",
    "ipa": "ˈɪ n s ʌ d ʌ n t",
    "level": "B2"
  },
  {
    "id": "b2_2828",
    "word": "income",
    "pos": "n.",
    "meaning": "รายได้",
    "reading": "อิ้ น คะ ม",
    "ipa": "ˈɪ n k ˌʌ m",
    "level": "B2"
  },
  {
    "id": "b2_2829",
    "word": "increasingly",
    "pos": "adv.",
    "meaning": "มากขึ้นเรื่อยๆ",
    "reading": "อิ น ครี้ สิ่ ง หลี่",
    "ipa": "ɪ n k r ˈiː s ɪ ŋ l iː",
    "level": "B2"
  },
  {
    "id": "b2_2830",
    "word": "industrial",
    "pos": "adj.",
    "meaning": "ทางอุตสาหกรรม",
    "reading": "อิ น ด๊ะ สึ ถรี่ เออะ ล",
    "ipa": "ˌɪ n d ˈʌ s t r iː ʌ l",
    "level": "B2"
  },
  {
    "id": "b2_2831",
    "word": "infection",
    "pos": "n.",
    "meaning": "การติดเชื้อ",
    "reading": "อิ น เฟ็ะ ขึ เฉอะ น",
    "ipa": "ˌɪ n f ˈe k ʃ ʌ n",
    "level": "B2"
  },
  {
    "id": "b2_2832",
    "word": "inform",
    "pos": "v.",
    "meaning": "แจ้ง",
    "reading": "อิ น โฟ็ (ร) ม",
    "ipa": "ˌɪ n f ˈɔː r m",
    "level": "B2"
  },
  {
    "id": "b2_2833",
    "word": "initial",
    "pos": "adj.",
    "meaning": "อักษรย่อ",
    "reading": "อิ นิ เฉอะ ล",
    "ipa": "ˌɪ n ˈɪ ʃ ʌ l",
    "level": "B2"
  },
  {
    "id": "b2_2834",
    "word": "initially",
    "pos": "adv.",
    "meaning": "เริ่มแรก",
    "reading": "อิ นิ เฉอะ หลี่",
    "ipa": "ˌɪ n ˈɪ ʃ ʌ l iː",
    "level": "B2"
  },
  {
    "id": "b2_2835",
    "word": "initiative",
    "pos": "n.",
    "meaning": "ความคิดริเริ่ม",
    "reading": "อิ นิ เฉอะ ถิ่ ฝี",
    "ipa": "ˌɪ n ˈɪ ʃ ʌ t ɪ v",
    "level": "B2"
  },
  {
    "id": "b2_2836",
    "word": "inner",
    "pos": "adj.",
    "meaning": "ภายใน",
    "reading": "อิ้ เหน่อ ร",
    "ipa": "ˈɪ n ɜːʴ",
    "level": "B2"
  },
  {
    "id": "b2_2837",
    "word": "insight",
    "pos": "n.",
    "meaning": "ข้อมูลเชิงลึก",
    "reading": "อิ้ น ซาย ถึ",
    "ipa": "ˈɪ n s ˌaɪ t",
    "level": "B2"
  },
  {
    "id": "b2_2838",
    "word": "insist",
    "pos": "v.",
    "meaning": "ยืนกราน",
    "reading": "อิ น ซิ สึ ถึ",
    "ipa": "ˌɪ n s ˈɪ s t",
    "level": "B2"
  },
  {
    "id": "b2_2839",
    "word": "inspire",
    "pos": "v.",
    "meaning": "สร้างแรงบันดาลใจ",
    "reading": "อิ น สึ พ้าย ร",
    "ipa": "ˌɪ n s p ˈaɪ r",
    "level": "B2"
  },
  {
    "id": "b2_2840",
    "word": "install",
    "pos": "v.",
    "meaning": "ติดตั้ง",
    "reading": "อิ น สึ ท้อ ล",
    "ipa": "ˌɪ n s t ˈɔː l",
    "level": "B2"
  },
  {
    "id": "b2_2841",
    "word": "instance",
    "pos": "n.",
    "meaning": "ตัวอย่าง",
    "reading": "อิ้ น สึ เถอะ น สึ",
    "ipa": "ˈɪ n s t ʌ n s",
    "level": "B2"
  },
  {
    "id": "b2_2842",
    "word": "institute",
    "pos": "n.",
    "meaning": "สถาบัน",
    "reading": "อิ้ น สึ เถอะ ทู ถึ",
    "ipa": "ˈɪ n s t ʌ t ˌuː t",
    "level": "B2"
  },
  {
    "id": "b2_2843",
    "word": "institution",
    "pos": "n.",
    "meaning": "สถาบัน",
    "reading": "อิ น สึ ถิ่ ทู้ เฉอะ น",
    "ipa": "ˌɪ n s t ɪ t ˈuː ʃ ʌ n",
    "level": "B2"
  },
  {
    "id": "b2_2844",
    "word": "insurance",
    "pos": "n.",
    "meaning": "ประกันภัย",
    "reading": "อิ น ชั้ว (ร) เออะ น สึ",
    "ipa": "ˌɪ n ʃ ˈʊ r ʌ n s",
    "level": "B2"
  },
  {
    "id": "b2_2845",
    "word": "intended",
    "pos": "adj.",
    "meaning": "ตั้งใจ",
    "reading": "อิ น เท้ะ น ดิ ดึ",
    "ipa": "ˌɪ n t ˈe n d ɪ d",
    "level": "B2"
  },
  {
    "id": "b2_2846",
    "word": "intense",
    "pos": "adj.",
    "meaning": "เข้มข้น",
    "reading": "อิ น เท้ะ น สึ",
    "ipa": "ˌɪ n t ˈe n s",
    "level": "B2"
  },
  {
    "id": "b2_2847",
    "word": "internal",
    "pos": "adj.",
    "meaning": "ภายใน",
    "reading": "อิ น เท้อ ร เหนอะ ล",
    "ipa": "ˌɪ n t ˈɜːʴ n ʌ l",
    "level": "B2"
  },
  {
    "id": "b2_2848",
    "word": "interpret",
    "pos": "v.",
    "meaning": "ตีความ",
    "reading": "อิ น เท้อ ร เผรอะ ถึ",
    "ipa": "ˌɪ n t ˈɜːʴ p r ʌ t",
    "level": "B2"
  },
  {
    "id": "b2_2849",
    "word": "interrupt",
    "pos": "v.",
    "meaning": "ขัดจังหวะ",
    "reading": "อิ น เถ่อ ร ระ ผึ ถึ",
    "ipa": "ˌɪ n t ɜːʴ ˈʌ p t",
    "level": "B2"
  },
  {
    "id": "b2_2850",
    "word": "investigation",
    "pos": "n.",
    "meaning": "การสืบสวน",
    "reading": "อิ น เฟะ สึ เถอะ เก๊ เฉอะ น",
    "ipa": "ˌɪ n v ˌe s t ʌ g ˈeɪ ʃ ʌ n",
    "level": "B2"
  },
  {
    "id": "b2_2851",
    "word": "investment",
    "pos": "n.",
    "meaning": "การลงทุน",
    "reading": "อิ น เฟ็ะ สึ ถึ เหมอะ น ถึ",
    "ipa": "ˌɪ n v ˈe s t m ʌ n t",
    "level": "B2"
  },
  {
    "id": "b2_2852",
    "word": "issue",
    "pos": "v.",
    "meaning": "ปัญหา",
    "reading": "อิ้ ฉู่",
    "ipa": "ˈɪ ʃ uː",
    "level": "B2"
  },
  {
    "id": "b2_2853",
    "word": "joy",
    "pos": "n.",
    "meaning": "ความสุข",
    "reading": "จอย",
    "ipa": "dʒ ˈɔɪ",
    "level": "B2"
  },
  {
    "id": "b2_2854",
    "word": "judgement",
    "pos": "n.",
    "meaning": "การตัดสิน",
    "reading": "จ๊ะ จึ เหมอะ น ถึ",
    "ipa": "dʒ ˈʌ dʒ m ʌ n t",
    "level": "B2"
  },
  {
    "id": "b2_2855",
    "word": "junior",
    "pos": "adj.",
    "meaning": "จูเนียร์",
    "reading": "จู๊ น เหย่อ ร",
    "ipa": "dʒ ˈuː n j ɜːʴ",
    "level": "B2"
  },
  {
    "id": "b2_2856",
    "word": "justice",
    "pos": "n.",
    "meaning": "ความยุติธรรม",
    "reading": "จ๊ะ สึ เถอะ สึ",
    "ipa": "dʒ ˈʌ s t ʌ s",
    "level": "B2"
  },
  {
    "id": "b2_2857",
    "word": "justify",
    "pos": "v.",
    "meaning": "ปรับให้เหมาะสม",
    "reading": "จ๊ะ สึ เถอะ ฟาย",
    "ipa": "dʒ ˈʌ s t ʌ f ˌaɪ",
    "level": "B2"
  },
  {
    "id": "b2_2858",
    "word": "labour",
    "pos": "n.",
    "meaning": "แรงงาน",
    "reading": "เล้ เบ่อ ร",
    "ipa": "l ˈeɪ b ɜːʴ",
    "level": "B2"
  },
  {
    "id": "b2_2859",
    "word": "landscape",
    "pos": "n.",
    "meaning": "ภูมิประเทศ",
    "reading": "แล้ น ดึ สึ เค ผึ",
    "ipa": "l ˈæ n d s k ˌeɪ p",
    "level": "B2"
  },
  {
    "id": "b2_2860",
    "word": "largely",
    "pos": "adv.",
    "meaning": "ส่วนใหญ่",
    "reading": "ล้า (ร) จลี่",
    "ipa": "l ˈɑː r dʒ l iː",
    "level": "B2"
  },
  {
    "id": "b2_2861",
    "word": "latest",
    "pos": "n.",
    "meaning": "ล่าสุด",
    "reading": "เล้ เถอะ สึ ถึ",
    "ipa": "l ˈeɪ t ʌ s t",
    "level": "B2"
  },
  {
    "id": "b2_2862",
    "word": "launch",
    "pos": "v., n.",
    "meaning": "ปล่อย",
    "reading": "ลอ น ฉึ",
    "ipa": "l ˈɔː n tʃ",
    "level": "B2"
  },
  {
    "id": "b2_2863",
    "word": "leadership",
    "pos": "n.",
    "meaning": "ความเป็นผู้นํา",
    "reading": "ลี้ เด่อ ร ชิ ผึ",
    "ipa": "l ˈiː d ɜːʴ ʃ ˌɪ p",
    "level": "B2"
  },
  {
    "id": "b2_2864",
    "word": "league",
    "pos": "n.",
    "meaning": "ลีก",
    "reading": "ลี กึ",
    "ipa": "l ˈiː g",
    "level": "B2"
  },
  {
    "id": "b2_2865",
    "word": "lean",
    "pos": "v.",
    "meaning": "เอียง",
    "reading": "ลี น",
    "ipa": "l ˈiː n",
    "level": "B2"
  },
  {
    "id": "b2_2866",
    "word": "leave",
    "pos": "n.",
    "meaning": "ออกจาก",
    "reading": "ลี ฝี",
    "ipa": "l ˈiː v",
    "level": "B2"
  },
  {
    "id": "b2_2867",
    "word": "level",
    "pos": "v.",
    "meaning": "ระดับ",
    "reading": "เล้ะ เฝอะ ล",
    "ipa": "l ˈe v ʌ l",
    "level": "B2"
  },
  {
    "id": "b2_2868",
    "word": "licence",
    "pos": "n.",
    "meaning": "ใบอนุญาต",
    "reading": "ล้าย เสอะ น สึ",
    "ipa": "l ˈaɪ s ʌ n s",
    "level": "B2"
  },
  {
    "id": "b2_2869",
    "word": "limited",
    "pos": "adj.",
    "meaning": "ถูก จํากัด",
    "reading": "ลิ เหมอะ เถอะ ดึ",
    "ipa": "l ˈɪ m ʌ t ʌ d",
    "level": "B2"
  },
  {
    "id": "b2_2870",
    "word": "line",
    "pos": "v.",
    "meaning": "เส้น",
    "reading": "ลาย น",
    "ipa": "l ˈaɪ n",
    "level": "B2"
  },
  {
    "id": "b2_2871",
    "word": "lively",
    "pos": "adj.",
    "meaning": "มีชีวิตชีวา",
    "reading": "ล้าย ฝี หลี่",
    "ipa": "l ˈaɪ v l iː",
    "level": "B2"
  },
  {
    "id": "b2_2872",
    "word": "load",
    "pos": "n., v.",
    "meaning": "โหลด",
    "reading": "โลว ดึ",
    "ipa": "l ˈəʊ d",
    "level": "B2"
  },
  {
    "id": "b2_2873",
    "word": "loan",
    "pos": "n.",
    "meaning": "เงินกู้",
    "reading": "โลว น",
    "ipa": "l ˈəʊ n",
    "level": "B2"
  },
  {
    "id": "b2_2874",
    "word": "logical",
    "pos": "adj.",
    "meaning": "ตรรกะ",
    "reading": "ล้า จิ เขอะ ล",
    "ipa": "l ˈɑː dʒ ɪ k ʌ l",
    "level": "B2"
  },
  {
    "id": "b2_2875",
    "word": "long-term",
    "pos": "adj., adv.",
    "meaning": "ระยะยาว",
    "reading": "ล้อ ง เท้อ ร ม",
    "ipa": "l ˈɔː ŋ t ˈɜːʴ m",
    "level": "B2"
  },
  {
    "id": "b2_2876",
    "word": "loose",
    "pos": "adj.",
    "meaning": "หลวม",
    "reading": "ลู สึ",
    "ipa": "l ˈuː s",
    "level": "B2"
  },
  {
    "id": "b2_2877",
    "word": "lord",
    "pos": "n.",
    "meaning": "ท่านลอร์ด",
    "reading": "โล (ร) ดึ",
    "ipa": "l ˈɔː r d",
    "level": "B2"
  },
  {
    "id": "b2_2878",
    "word": "low",
    "pos": "n.",
    "meaning": "ตํ่า",
    "reading": "โลว",
    "ipa": "l ˈəʊ",
    "level": "B2"
  },
  {
    "id": "b2_2879",
    "word": "lower",
    "pos": "v.",
    "meaning": "ตํ่ากว่า",
    "reading": "โล้ว เอ่อ ร",
    "ipa": "l ˈəʊ ɜːʴ",
    "level": "B2"
  },
  {
    "id": "b2_2880",
    "word": "lung",
    "pos": "n.",
    "meaning": "ปอด",
    "reading": "ละ ง",
    "ipa": "l ˈʌ ŋ",
    "level": "B2"
  },
  {
    "id": "b2_2881",
    "word": "maintain",
    "pos": "v.",
    "meaning": "บํารุงรักษา",
    "reading": "เหม่ น เท้ น",
    "ipa": "m eɪ n t ˈeɪ n",
    "level": "B2"
  },
  {
    "id": "b2_2882",
    "word": "majority",
    "pos": "n.",
    "meaning": "ส่วนใหญ่",
    "reading": "เหมอะ โจ๊ (ร) เออะ ถี่",
    "ipa": "m ʌ dʒ ˈɔː r ʌ t iː",
    "level": "B2"
  },
  {
    "id": "b2_2883",
    "word": "make",
    "pos": "n.",
    "meaning": "ทํา",
    "reading": "เม ขึ",
    "ipa": "m ˈeɪ k",
    "level": "B2"
  },
  {
    "id": "b2_2884",
    "word": "map",
    "pos": "v.",
    "meaning": "แผนที่",
    "reading": "แม ผึ",
    "ipa": "m ˈæ p",
    "level": "B2"
  },
  {
    "id": "b2_2885",
    "word": "mass",
    "pos": "n., adj.",
    "meaning": "มวล",
    "reading": "แม สึ",
    "ipa": "m ˈæ s",
    "level": "B2"
  },
  {
    "id": "b2_2886",
    "word": "massive",
    "pos": "adj.",
    "meaning": "มโหฬาร",
    "reading": "แม้ สิ่ ฝี",
    "ipa": "m ˈæ s ɪ v",
    "level": "B2"
  },
  {
    "id": "b2_2887",
    "word": "master",
    "pos": "n., v.",
    "meaning": "ผู้เชี่ยวชาญ",
    "reading": "แม้ สึ เถ่อ ร",
    "ipa": "m ˈæ s t ɜːʴ",
    "level": "B2"
  },
  {
    "id": "b2_2888",
    "word": "matching",
    "pos": "adj.",
    "meaning": "การจับคู่",
    "reading": "แม้ ฉิ่ ง",
    "ipa": "m ˈæ tʃ ɪ ŋ",
    "level": "B2"
  },
  {
    "id": "b2_2889",
    "word": "material",
    "pos": "adj.",
    "meaning": "วัสดุ",
    "reading": "เหมอะ เที้ย (ร) อี่ เออะ ล",
    "ipa": "m ʌ t ˈɪ r iː ʌ l",
    "level": "B2"
  },
  {
    "id": "b2_2890",
    "word": "maximum",
    "pos": "adj., n.",
    "meaning": "ขีดสุด",
    "reading": "แม้ ขึ เสอะ เหมอะ ม",
    "ipa": "m ˈæ k s ʌ m ʌ m",
    "level": "B2"
  },
  {
    "id": "b2_2891",
    "word": "means",
    "pos": "n.",
    "meaning": "วิธี",
    "reading": "มี น สึ",
    "ipa": "m ˈiː n z",
    "level": "B2"
  },
  {
    "id": "b2_2892",
    "word": "measurement",
    "pos": "n.",
    "meaning": "การวัด",
    "reading": "เม้ะ เฉ่อ ร เหมอะ น ถึ",
    "ipa": "m ˈe ʒ ɜːʴ m ʌ n t",
    "level": "B2"
  },
  {
    "id": "b2_2893",
    "word": "medium",
    "pos": "n.",
    "meaning": "ปานกลาง",
    "reading": "มี้ ดี่ เออะ ม",
    "ipa": "m ˈiː d iː ʌ m",
    "level": "B2"
  },
  {
    "id": "b2_2894",
    "word": "melt",
    "pos": "v.",
    "meaning": "ละลาย",
    "reading": "เมะ ล ถึ",
    "ipa": "m ˈe l t",
    "level": "B2"
  },
  {
    "id": "b2_2895",
    "word": "military",
    "pos": "adj., n.",
    "meaning": "ทหาร",
    "reading": "มิ เหลอะ แท (ร) อี่",
    "ipa": "m ˈɪ l ʌ t ˌe r iː",
    "level": "B2"
  },
  {
    "id": "b2_2896",
    "word": "mineral",
    "pos": "n.",
    "meaning": "แร่",
    "reading": "มิ เหน่อ ร เหรอะ ล",
    "ipa": "m ˈɪ n ɜːʴ ʌ l",
    "level": "B2"
  },
  {
    "id": "b2_2897",
    "word": "minimum",
    "pos": "adj., n.",
    "meaning": "ขั้นตํ่า",
    "reading": "มิ เหนอะ เหมอะ ม",
    "ipa": "m ˈɪ n ʌ m ʌ m",
    "level": "B2"
  },
  {
    "id": "b2_2898",
    "word": "minister",
    "pos": "n.",
    "meaning": "รัฐมนตรี",
    "reading": "มิ เหนอะ สึ เถ่อ ร",
    "ipa": "m ˈɪ n ʌ s t ɜːʴ",
    "level": "B2"
  },
  {
    "id": "b2_2899",
    "word": "minor",
    "pos": "adj.",
    "meaning": "ส่วนน้อย",
    "reading": "ม้าย เหน่อ ร",
    "ipa": "m ˈaɪ n ɜːʴ",
    "level": "B2"
  },
  {
    "id": "b2_2900",
    "word": "minority",
    "pos": "n.",
    "meaning": "ชนกลุ่มน้อย",
    "reading": "หม่าย โน้ (ร) เออะ ถี่",
    "ipa": "m aɪ n ˈɔː r ʌ t iː",
    "level": "B2"
  },
  {
    "id": "b2_2901",
    "word": "mission",
    "pos": "n.",
    "meaning": "ภารกิจ",
    "reading": "มิ เฉอะ น",
    "ipa": "m ˈɪ ʃ ʌ n",
    "level": "B2"
  },
  {
    "id": "b2_2902",
    "word": "mistake",
    "pos": "v.",
    "meaning": "ความผิดพลาด",
    "reading": "หมิ่ สึ เท้ ขึ",
    "ipa": "m ɪ s t ˈeɪ k",
    "level": "B2"
  },
  {
    "id": "b2_2903",
    "word": "mixed",
    "pos": "adj.",
    "meaning": "ผสม",
    "reading": "มิ ขึ สึ ถึ",
    "ipa": "m ˈɪ k s t",
    "level": "B2"
  },
  {
    "id": "b2_2904",
    "word": "model",
    "pos": "v.",
    "meaning": "แบบอย่าง",
    "reading": "ม้า เดอะ ล",
    "ipa": "m ˈɑː d ʌ l",
    "level": "B2"
  },
  {
    "id": "b2_2905",
    "word": "modify",
    "pos": "v.",
    "meaning": "แก้ไข",
    "reading": "ม้า เดอะ ฟาย",
    "ipa": "m ˈɑː d ʌ f ˌaɪ",
    "level": "B2"
  },
  {
    "id": "b2_2906",
    "word": "monitor",
    "pos": "n., v.",
    "meaning": "เฝ็าสังเกต",
    "reading": "ม้า เหนอะ เถ่อ ร",
    "ipa": "m ˈɑː n ʌ t ɜːʴ",
    "level": "B2"
  },
  {
    "id": "b2_2907",
    "word": "moral",
    "pos": "adj., n.",
    "meaning": "ศีลธรรม",
    "reading": "โม้ (ร) เออะ ล",
    "ipa": "m ˈɔː r ʌ l",
    "level": "B2"
  },
  {
    "id": "b2_2908",
    "word": "motor",
    "pos": "n., adj.",
    "meaning": "เครื่องยนต์",
    "reading": "โม้ว เถ่อ ร",
    "ipa": "m ˈəʊ t ɜːʴ",
    "level": "B2"
  },
  {
    "id": "b2_2909",
    "word": "mount",
    "pos": "v.",
    "meaning": "เมานต์",
    "reading": "มาว น ถึ",
    "ipa": "m ˈaʊ n t",
    "level": "B2"
  },
  {
    "id": "b2_2910",
    "word": "multiple",
    "pos": "adj.",
    "meaning": "หลายรายการ",
    "reading": "มะ ล เถอะ เผอะ ล",
    "ipa": "m ˈʌ l t ʌ p ʌ l",
    "level": "B2"
  },
  {
    "id": "b2_2911",
    "word": "multiply",
    "pos": "v.",
    "meaning": "คูณ",
    "reading": "มะ ล เถอะ พลาย",
    "ipa": "m ˈʌ l t ʌ p l ˌaɪ",
    "level": "B2"
  },
  {
    "id": "b2_2912",
    "word": "mysterious",
    "pos": "adj.",
    "meaning": "ลึกลับ",
    "reading": "หมิ่ สึ เที้ย (ร) อี่ เออะ สึ",
    "ipa": "m ɪ s t ˈɪ r iː ʌ s",
    "level": "B2"
  },
  {
    "id": "b2_2913",
    "word": "narrow",
    "pos": "v.",
    "meaning": "แคบ",
    "reading": "แน้ (ร) โอ่ว",
    "ipa": "n ˈe r əʊ",
    "level": "B2"
  },
  {
    "id": "b2_2914",
    "word": "national",
    "pos": "n.",
    "meaning": "ระดับชาติ",
    "reading": "แน้ เฉอะ เหนอะ ล",
    "ipa": "n ˈæ ʃ ʌ n ʌ l",
    "level": "B2"
  },
  {
    "id": "b2_2915",
    "word": "neat",
    "pos": "adj.",
    "meaning": "ประณีต",
    "reading": "นี ถึ",
    "ipa": "n ˈiː t",
    "level": "B2"
  },
  {
    "id": "b2_2916",
    "word": "negative",
    "pos": "n.",
    "meaning": "เชิงลบ",
    "reading": "เน้ะ เกอะ ถิ่ ฝี",
    "ipa": "n ˈe g ʌ t ɪ v",
    "level": "B2"
  },
  {
    "id": "b2_2917",
    "word": "nerve",
    "pos": "n.",
    "meaning": "เส้นประสาท",
    "reading": "เนอ ร ฝี",
    "ipa": "n ˈɜːʴ v",
    "level": "B2"
  },
  {
    "id": "b2_2918",
    "word": "nevertheless",
    "pos": "adv.",
    "meaning": "แต่ถึงอย่างไร",
    "reading": "เนะ เฝือ ร เดอะ เล้ะ สึ",
    "ipa": "n ˌe v ɜːʴ ð ʌ l ˈe s",
    "level": "B2"
  },
  {
    "id": "b2_2919",
    "word": "nightmare",
    "pos": "n.",
    "meaning": "ฝันร้าย",
    "reading": "น้าย ถึ แม (ร)",
    "ipa": "n ˈaɪ t m ˌe r",
    "level": "B2"
  },
  {
    "id": "b2_2920",
    "word": "notion",
    "pos": "n.",
    "meaning": "ความคิด",
    "reading": "โน้ว เฉอะ น",
    "ipa": "n ˈəʊ ʃ ʌ n",
    "level": "B2"
  },
  {
    "id": "b2_2921",
    "word": "numerous",
    "pos": "adj.",
    "meaning": "มากมาย",
    "reading": "นู้ เหม่อ ร เหรอะ สึ",
    "ipa": "n ˈuː m ɜːʴ ʌ s",
    "level": "B2"
  },
  {
    "id": "b2_2922",
    "word": "obey",
    "pos": "v.",
    "meaning": "เชื่อฟัง",
    "reading": "โอ่ว เบ๊",
    "ipa": "əʊ b ˈeɪ",
    "level": "B2"
  },
  {
    "id": "b2_2923",
    "word": "object",
    "pos": "v.",
    "meaning": "วัตถุ",
    "reading": "อ๊า บึ เจะ ขึ ถึ",
    "ipa": "ˈɑː b dʒ e k t",
    "level": "B2"
  },
  {
    "id": "b2_2924",
    "word": "objective",
    "pos": "n., adj.",
    "meaning": "วัตถุประสงค์",
    "reading": "เออะ บึ เจ๊ะ ขึ ถิ่ ฝี",
    "ipa": "ʌ b dʒ ˈe k t ɪ v",
    "level": "B2"
  },
  {
    "id": "b2_2925",
    "word": "obligation",
    "pos": "n.",
    "meaning": "ภาระผูกพัน",
    "reading": "อา เบลอะ เก๊ เฉอะ น",
    "ipa": "ˌɑː b l ʌ g ˈeɪ ʃ ʌ n",
    "level": "B2"
  },
  {
    "id": "b2_2926",
    "word": "observation",
    "pos": "n.",
    "meaning": "การสังเกต",
    "reading": "อา บึ เส่อ ร เฟ็ เฉอะ น",
    "ipa": "ˌɑː b z ɜːʴ v ˈeɪ ʃ ʌ n",
    "level": "B2"
  },
  {
    "id": "b2_2927",
    "word": "observe",
    "pos": "v.",
    "meaning": "สังเกต",
    "reading": "เออะ บึ เซ้อ ร ฝี",
    "ipa": "ʌ b z ˈɜːʴ v",
    "level": "B2"
  },
  {
    "id": "b2_2928",
    "word": "obtain",
    "pos": "v.",
    "meaning": "รับ",
    "reading": "เออะ บึ เท้ น",
    "ipa": "ʌ b t ˈeɪ n",
    "level": "B2"
  },
  {
    "id": "b2_2929",
    "word": "occasionally",
    "pos": "adv.",
    "meaning": "เป็นครั้งคราว",
    "reading": "เออะ เค้ เฉอะ เหนอะ หลี่",
    "ipa": "ʌ k ˈeɪ ʒ ʌ n ʌ l iː",
    "level": "B2"
  },
  {
    "id": "b2_2930",
    "word": "offence",
    "pos": "n.",
    "meaning": "ความผิด",
    "reading": "เออะ เฟ็ะ น สึ",
    "ipa": "əfˈens",
    "level": "B2"
  },
  {
    "id": "b2_2931",
    "word": "offend",
    "pos": "v.",
    "meaning": "รุกราน",
    "reading": "เออะ เฟ็ะ น ดึ",
    "ipa": "ʌ f ˈe n d",
    "level": "B2"
  },
  {
    "id": "b2_2932",
    "word": "offensive",
    "pos": "adj.",
    "meaning": "ก้าวร้าว",
    "reading": "เออะ เฟ็ะ น สิ่ ฝี",
    "ipa": "ʌ f ˈe n s ɪ v",
    "level": "B2"
  },
  {
    "id": "b2_2933",
    "word": "official",
    "pos": "n.",
    "meaning": "เป็นทางการ",
    "reading": "เออะ ฟั เฉอะ ล",
    "ipa": "ʌ f ˈɪ ʃ ʌ l",
    "level": "B2"
  },
  {
    "id": "b2_2934",
    "word": "opening",
    "pos": "n.",
    "meaning": "เปัด",
    "reading": "โอ๊ว เผอะ หนิ่ ง",
    "ipa": "ˈəʊ p ʌ n ɪ ŋ",
    "level": "B2"
  },
  {
    "id": "b2_2935",
    "word": "operate",
    "pos": "v.",
    "meaning": "ดําเนินงาน",
    "reading": "อ๊า เผ่อ ร เร ถึ",
    "ipa": "ˈɑː p ɜːʴ ˌeɪ t",
    "level": "B2"
  },
  {
    "id": "b2_2936",
    "word": "opponent",
    "pos": "n.",
    "meaning": "คู่ต่อสู้",
    "reading": "เออะ โพ้ว เหนอะ น ถึ",
    "ipa": "ʌ p ˈəʊ n ʌ n t",
    "level": "B2"
  },
  {
    "id": "b2_2937",
    "word": "oppose",
    "pos": "v.",
    "meaning": "ต่อต้าน",
    "reading": "เออะ โพ้ว สึ",
    "ipa": "ʌ p ˈəʊ z",
    "level": "B2"
  },
  {
    "id": "b2_2938",
    "word": "opposed",
    "pos": "adj.",
    "meaning": "ต่อต้าน",
    "reading": "เออะ โพ้ว สึ ดึ",
    "ipa": "ʌ p ˈəʊ z d",
    "level": "B2"
  },
  {
    "id": "b2_2939",
    "word": "opposition",
    "pos": "n.",
    "meaning": "ฝืายค้าน",
    "reading": "อา เผอะ ซิ เฉอะ น",
    "ipa": "ˌɑː p ʌ z ˈɪ ʃ ʌ n",
    "level": "B2"
  },
  {
    "id": "b2_2940",
    "word": "organ",
    "pos": "n.",
    "meaning": "อวัยวะ",
    "reading": "โอ๊ (ร) เกอะ น",
    "ipa": "ˈɔː r g ʌ n",
    "level": "B2"
  },
  {
    "id": "b2_2941",
    "word": "origin",
    "pos": "n.",
    "meaning": "ต้นทาง",
    "reading": "โอ๊ (ร) เออะ เจอะ น",
    "ipa": "ˈɔː r ʌ dʒ ʌ n",
    "level": "B2"
  },
  {
    "id": "b2_2942",
    "word": "otherwise",
    "pos": "adv.",
    "meaning": "มิฉะนั้น",
    "reading": "อ๊ะ เด่อ ร วาย สึ",
    "ipa": "ˈʌ ð ɜːʴ w ˌaɪ z",
    "level": "B2"
  },
  {
    "id": "b2_2943",
    "word": "outcome",
    "pos": "n.",
    "meaning": "ผล",
    "reading": "อ๊าว ถึ คะ ม",
    "ipa": "ˈaʊ t k ˌʌ m",
    "level": "B2"
  },
  {
    "id": "b2_2944",
    "word": "outer",
    "pos": "adj.",
    "meaning": "ด้านนอก",
    "reading": "อ๊าว เถ่อ ร",
    "ipa": "ˈaʊ t ɜːʴ",
    "level": "B2"
  },
  {
    "id": "b2_2945",
    "word": "outline",
    "pos": "n., v.",
    "meaning": "โครงร่าง",
    "reading": "อ๊าว ทลาย น",
    "ipa": "ˈaʊ t l ˌaɪ n",
    "level": "B2"
  },
  {
    "id": "b2_2946",
    "word": "overall",
    "pos": "adj., adv.",
    "meaning": "โดยรวม",
    "reading": "โอ๊ว เฝือ ร รอ ล",
    "ipa": "ˈəʊ v ɜːʴ ˌɔː l",
    "level": "B2"
  },
  {
    "id": "b2_2947",
    "word": "owe",
    "pos": "v.",
    "meaning": "เป็นหนี้",
    "reading": "โอว",
    "ipa": "ˈəʊ",
    "level": "B2"
  },
  {
    "id": "b2_2948",
    "word": "pace",
    "pos": "n., v.",
    "meaning": "ก้าว",
    "reading": "เพ สึ",
    "ipa": "p ˈeɪ s",
    "level": "B2"
  },
  {
    "id": "b2_2949",
    "word": "package",
    "pos": "v.",
    "meaning": "บรรจุภัณฑ์",
    "reading": "แพ้ เขอะ จึ",
    "ipa": "p ˈæ k ʌ dʒ",
    "level": "B2"
  },
  {
    "id": "b2_2950",
    "word": "panel",
    "pos": "n.",
    "meaning": "แผงหน้าปัด",
    "reading": "แพ้ เหนอะ ล",
    "ipa": "p ˈæ n ʌ l",
    "level": "B2"
  },
  {
    "id": "b2_2951",
    "word": "parliament",
    "pos": "n.",
    "meaning": "รัฐสภา",
    "reading": "พ้า (ร) เหลอะ เหมอะ น ถึ",
    "ipa": "p ˈɑː r l ʌ m ʌ n t",
    "level": "B2"
  },
  {
    "id": "b2_2952",
    "word": "participant",
    "pos": "n.",
    "meaning": "ผู้เข้าร่วม",
    "reading": "ผ่า (ร) ทิ เสอะ เผอะ น ถึ",
    "ipa": "p ɑː r t ˈɪ s ʌ p ʌ n t",
    "level": "B2"
  },
  {
    "id": "b2_2953",
    "word": "partly",
    "pos": "adv.",
    "meaning": "บางส่วน",
    "reading": "พ้า (ร) ถลี่",
    "ipa": "p ˈɑː r t l iː",
    "level": "B2"
  },
  {
    "id": "b2_2954",
    "word": "passage",
    "pos": "n.",
    "meaning": "ทางเดิน",
    "reading": "แพ้ เสอะ จึ",
    "ipa": "p ˈæ s ʌ dʒ",
    "level": "B2"
  },
  {
    "id": "b2_2955",
    "word": "patient",
    "pos": "adj.",
    "meaning": "อดทน",
    "reading": "เพ้ เฉอะ น ถึ",
    "ipa": "p ˈeɪ ʃ ʌ n t",
    "level": "B2"
  },
  {
    "id": "b2_2956",
    "word": "pension",
    "pos": "n.",
    "meaning": "เงินบํานาญ",
    "reading": "เพ้ะ น เฉอะ น",
    "ipa": "p ˈe n ʃ ʌ n",
    "level": "B2"
  },
  {
    "id": "b2_2957",
    "word": "permanent",
    "pos": "adj.",
    "meaning": "ถาวร",
    "reading": "เพ้อ ร เหมอะ เหนอะ น ถึ",
    "ipa": "p ˈɜːʴ m ʌ n ʌ n t",
    "level": "B2"
  },
  {
    "id": "b2_2958",
    "word": "permit",
    "pos": "v., n.",
    "meaning": "อนุญาต",
    "reading": "เพ้อ ร มิ ถึ",
    "ipa": "p ˈɜːʴ m ˌɪ t",
    "level": "B2"
  },
  {
    "id": "b2_2959",
    "word": "perspective",
    "pos": "n.",
    "meaning": "ทัศนคติ",
    "reading": "เผ่อ ร สึ เพ้ะ ขึ ถิ่ ฝี",
    "ipa": "p ɜːʴ s p ˈe k t ɪ v",
    "level": "B2"
  },
  {
    "id": "b2_2960",
    "word": "phase",
    "pos": "n.",
    "meaning": "เฟส",
    "reading": "เฟ สึ",
    "ipa": "f ˈeɪ z",
    "level": "B2"
  },
  {
    "id": "b2_2961",
    "word": "phenomenon",
    "pos": "n.",
    "meaning": "ปรากฏการณ์",
    "reading": "เฝอะ น้า เหมอะ นา น",
    "ipa": "f ʌ n ˈɑː m ʌ n ˌɑː n",
    "level": "B2"
  },
  {
    "id": "b2_2962",
    "word": "philosophy",
    "pos": "n.",
    "meaning": "ปรัชญา",
    "reading": "เฝอะ ล้า เสอะ ฝี่",
    "ipa": "f ʌ l ˈɑː s ʌ f iː",
    "level": "B2"
  },
  {
    "id": "b2_2963",
    "word": "pick",
    "pos": "n.",
    "meaning": "เลือก",
    "reading": "พิ ขึ",
    "ipa": "p ˈɪ k",
    "level": "B2"
  },
  {
    "id": "b2_2964",
    "word": "picture",
    "pos": "v.",
    "meaning": "รูปภาพ",
    "reading": "พิ ขึ เฉ่อ ร",
    "ipa": "p ˈɪ k tʃ ɜːʴ",
    "level": "B2"
  },
  {
    "id": "b2_2965",
    "word": "pile",
    "pos": "n., v.",
    "meaning": "กอง",
    "reading": "พาย ล",
    "ipa": "p ˈaɪ l",
    "level": "B2"
  },
  {
    "id": "b2_2966",
    "word": "pitch",
    "pos": "n.",
    "meaning": "ขว้าง",
    "reading": "พิ ฉึ",
    "ipa": "p ˈɪ tʃ",
    "level": "B2"
  },
  {
    "id": "b2_2967",
    "word": "plain",
    "pos": "adj.",
    "meaning": "ธรรมดา",
    "reading": "เพล น",
    "ipa": "p l ˈeɪ n",
    "level": "B2"
  },
  {
    "id": "b2_2968",
    "word": "plot",
    "pos": "v.",
    "meaning": "พล็อต",
    "reading": "พลา ถึ",
    "ipa": "p l ˈɑː t",
    "level": "B2"
  },
  {
    "id": "b2_2969",
    "word": "plus",
    "pos": "adj., n., conj.",
    "meaning": "เพิ่ม เครื่องหมายบวก ด้วย",
    "reading": "พละ สึ",
    "ipa": "p l ˈʌ s",
    "level": "B2"
  },
  {
    "id": "b2_2970",
    "word": "pointed",
    "pos": "adj.",
    "meaning": "ชี้",
    "reading": "พ้อย น ถิ่ ดึ",
    "ipa": "p ˈɔɪ n t ɪ d",
    "level": "B2"
  },
  {
    "id": "b2_2971",
    "word": "popularity",
    "pos": "n.",
    "meaning": "ความนิยม",
    "reading": "พา ผึ เหยอะ แล้ (ร) เออะ ถี่",
    "ipa": "p ˌɑː p j ʌ l ˈe r ʌ t iː",
    "level": "B2"
  },
  {
    "id": "b2_2972",
    "word": "pose",
    "pos": "v.",
    "meaning": "ท่าทาง",
    "reading": "โพว สึ",
    "ipa": "p ˈəʊ z",
    "level": "B2"
  },
  {
    "id": "b2_2973",
    "word": "position",
    "pos": "v.",
    "meaning": "ตําแหน่ง",
    "reading": "เผอะ ซิ เฉอะ น",
    "ipa": "p ʌ z ˈɪ ʃ ʌ n",
    "level": "B2"
  },
  {
    "id": "b2_2974",
    "word": "positive",
    "pos": "n.",
    "meaning": "เชิงบวก",
    "reading": "พ้า เสอะ ถิ่ ฝี",
    "ipa": "p ˈɑː z ʌ t ɪ v",
    "level": "B2"
  },
  {
    "id": "b2_2975",
    "word": "possess",
    "pos": "v.",
    "meaning": "มี",
    "reading": "เผอะ เซ้ะ สึ",
    "ipa": "p ʌ z ˈe s",
    "level": "B2"
  },
  {
    "id": "b2_2976",
    "word": "potential",
    "pos": "adj., n.",
    "meaning": "ศักยภาพ",
    "reading": "เผอะ เท้ะ น เฉอะ ล",
    "ipa": "p ʌ t ˈe n ʃ ʌ l",
    "level": "B2"
  },
  {
    "id": "b2_2977",
    "word": "power",
    "pos": "v.",
    "meaning": "พลัง",
    "reading": "พ้าว เอ่อ ร",
    "ipa": "p ˈaʊ ɜːʴ",
    "level": "B2"
  },
  {
    "id": "b2_2978",
    "word": "praise",
    "pos": "n., v.",
    "meaning": "ชื่นชม",
    "reading": "เพร สึ",
    "ipa": "p r ˈeɪ z",
    "level": "B2"
  },
  {
    "id": "b2_2979",
    "word": "pregnant",
    "pos": "adj.",
    "meaning": "ตั้งครรภ์",
    "reading": "เพร้ะ กึ เหนอะ น ถึ",
    "ipa": "p r ˈe g n ʌ n t",
    "level": "B2"
  },
  {
    "id": "b2_2980",
    "word": "preparation",
    "pos": "n.",
    "meaning": "การตระเตรียม",
    "reading": "เพระ เผ่อ ร เร้ เฉอะ น",
    "ipa": "p r ˌe p ɜːʴ ˈeɪ ʃ ʌ n",
    "level": "B2"
  },
  {
    "id": "b2_2981",
    "word": "presence",
    "pos": "n.",
    "meaning": "การมีอยู่",
    "reading": "เพร้ะ เสอะ น สึ",
    "ipa": "p r ˈe z ʌ n s",
    "level": "B2"
  },
  {
    "id": "b2_2982",
    "word": "preserve",
    "pos": "v.",
    "meaning": "อนุรักษ์",
    "reading": "เผรอะ เซ้อ ร ฝี",
    "ipa": "p r ʌ z ˈɜːʴ v",
    "level": "B2"
  },
  {
    "id": "b2_2983",
    "word": "price",
    "pos": "v.",
    "meaning": "ราคา",
    "reading": "พราย สึ",
    "ipa": "p r ˈaɪ s",
    "level": "B2"
  },
  {
    "id": "b2_2984",
    "word": "prime",
    "pos": "adj.",
    "meaning": "สําคัญ",
    "reading": "พราย ม",
    "ipa": "p r ˈaɪ m",
    "level": "B2"
  },
  {
    "id": "b2_2985",
    "word": "principle",
    "pos": "n.",
    "meaning": "หลักการ",
    "reading": "พริ น เสอะ เผอะ ล",
    "ipa": "p r ˈɪ n s ʌ p ʌ l",
    "level": "B2"
  },
  {
    "id": "b2_2986",
    "word": "print",
    "pos": "n.",
    "meaning": "พิมพ์",
    "reading": "พริ น ถึ",
    "ipa": "p r ˈɪ n t",
    "level": "B2"
  },
  {
    "id": "b2_2987",
    "word": "priority",
    "pos": "n.",
    "meaning": "ลําดับความสําคัญ",
    "reading": "ผร่าย โอ๊ (ร) เออะ ถี่",
    "ipa": "p r aɪ ˈɔː r ʌ t iː",
    "level": "B2"
  },
  {
    "id": "b2_2988",
    "word": "privacy",
    "pos": "n.",
    "meaning": "ความเป็นส่วนตัว",
    "reading": "พร้าย เฝอะ สี่",
    "ipa": "p r ˈaɪ v ʌ s iː",
    "level": "B2"
  },
  {
    "id": "b2_2989",
    "word": "procedure",
    "pos": "n.",
    "meaning": "ขั้นตอน",
    "reading": "เผรอะ ซี้ เจ่อ ร",
    "ipa": "p r ʌ s ˈiː dʒ ɜːʴ",
    "level": "B2"
  },
  {
    "id": "b2_2990",
    "word": "process",
    "pos": "v.",
    "meaning": "กระบวนการ",
    "reading": "พร้า เซะ สึ",
    "ipa": "p r ˈɑː s ˌe s",
    "level": "B2"
  },
  {
    "id": "b2_2991",
    "word": "produce",
    "pos": "n.",
    "meaning": "ผลิต",
    "reading": "โพร้ว ดู่ สึ",
    "ipa": "p r ˈəʊ d uː s",
    "level": "B2"
  },
  {
    "id": "b2_2992",
    "word": "professional",
    "pos": "n.",
    "meaning": "มืออาชีพ",
    "reading": "เผรอะ เฟ็ะ เฉอะ เหนอะ ล",
    "ipa": "p r ʌ f ˈe ʃ ʌ n ʌ l",
    "level": "B2"
  },
  {
    "id": "b2_2993",
    "word": "progress",
    "pos": "v.",
    "meaning": "ความคืบหน้า",
    "reading": "พร้า เกระ สึ",
    "ipa": "p r ˈɑː g r ˌe s",
    "level": "B2"
  },
  {
    "id": "b2_2994",
    "word": "project",
    "pos": "v.",
    "meaning": "โครงการ",
    "reading": "พร้า เจะ ขึ ถึ",
    "ipa": "p r ˈɑː dʒ e k t",
    "level": "B2"
  },
  {
    "id": "b2_2995",
    "word": "proof",
    "pos": "n.",
    "meaning": "การพิสูจน์",
    "reading": "พรู ฝี",
    "ipa": "p r ˈuː f",
    "level": "B2"
  },
  {
    "id": "b2_2996",
    "word": "proposal",
    "pos": "n.",
    "meaning": "ข้อเสนอ",
    "reading": "เผรอะ โพ้ว เสอะ ล",
    "ipa": "p r ʌ p ˈəʊ z ʌ l",
    "level": "B2"
  },
  {
    "id": "b2_2997",
    "word": "propose",
    "pos": "v.",
    "meaning": "เสนอ",
    "reading": "เผรอะ โพ้ว สึ",
    "ipa": "p r ʌ p ˈəʊ z",
    "level": "B2"
  },
  {
    "id": "b2_2998",
    "word": "prospect",
    "pos": "n.",
    "meaning": "โอกาส",
    "reading": "พร้า สึ เผะ ขึ ถึ",
    "ipa": "p r ˈɑː s p e k t",
    "level": "B2"
  },
  {
    "id": "b2_2999",
    "word": "protection",
    "pos": "n.",
    "meaning": "การป็องกัน",
    "reading": "เผรอะ เท้ะ ขึ เฉอะ น",
    "ipa": "p r ʌ t ˈe k ʃ ʌ n",
    "level": "B2"
  },
  {
    "id": "b2_3000",
    "word": "psychologist",
    "pos": "n.",
    "meaning": "นักจิตวิทยา",
    "reading": "ส่าย ค้า เหลอะ เจอะ สึ ถึ",
    "ipa": "s aɪ k ˈɑː l ʌ dʒ ʌ s t",
    "level": "B2"
  },
  {
    "id": "b2_3001",
    "word": "psychology",
    "pos": "n.",
    "meaning": "จิตวิทยา",
    "reading": "ส่าย ค้า เหลอะ จี่",
    "ipa": "s aɪ k ˈɑː l ʌ dʒ iː",
    "level": "B2"
  },
  {
    "id": "b2_3002",
    "word": "publication",
    "pos": "n.",
    "meaning": "สิ่งพิมพ์",
    "reading": "พะ บลิ เค้ เฉอะ น",
    "ipa": "p ˌʌ b l ɪ k ˈeɪ ʃ ʌ n",
    "level": "B2"
  },
  {
    "id": "b2_3003",
    "word": "pupil",
    "pos": "n.",
    "meaning": "นักเรียน",
    "reading": "ผึ ยู้ เผอะ ล",
    "ipa": "p j ˈuː p ʌ l",
    "level": "B2"
  },
  {
    "id": "b2_3004",
    "word": "purchase",
    "pos": "n., v.",
    "meaning": "ซื้อ",
    "reading": "เพ้อ ร เฉอะ สึ",
    "ipa": "p ˈɜːʴ tʃ ʌ s",
    "level": "B2"
  },
  {
    "id": "b2_3005",
    "word": "pure",
    "pos": "adj.",
    "meaning": "บริสุทธิ์",
    "reading": "ผึ ยัว (ร)",
    "ipa": "p j ˈʊ r",
    "level": "B2"
  },
  {
    "id": "b2_3006",
    "word": "pursue",
    "pos": "v.",
    "meaning": "ไล่ตาม",
    "reading": "เผ่อ ร ซู้",
    "ipa": "p ɜːʴ s ˈuː",
    "level": "B2"
  },
  {
    "id": "b2_3007",
    "word": "range",
    "pos": "v.",
    "meaning": "พิสัย",
    "reading": "เร น จึ",
    "ipa": "r ˈeɪ n dʒ",
    "level": "B2"
  },
  {
    "id": "b2_3008",
    "word": "rank",
    "pos": "n., v.",
    "meaning": "อันดับ",
    "reading": "แร ง ขึ",
    "ipa": "r ˈæ ŋ k",
    "level": "B2"
  },
  {
    "id": "b2_3009",
    "word": "rapid",
    "pos": "adj.",
    "meaning": "รวดเร็ว",
    "reading": "แร้ เผอะ ดึ",
    "ipa": "r ˈæ p ʌ d",
    "level": "B2"
  },
  {
    "id": "b2_3010",
    "word": "rapidly",
    "pos": "adv.",
    "meaning": "อย่างรวดเร็ว",
    "reading": "แร้ เผอะ ดลี่",
    "ipa": "r ˈæ p ʌ d l iː",
    "level": "B2"
  },
  {
    "id": "b2_3011",
    "word": "rate",
    "pos": "v.",
    "meaning": "ประเมิน",
    "reading": "เร ถึ",
    "ipa": "r ˈeɪ t",
    "level": "B2"
  },
  {
    "id": "b2_3012",
    "word": "raw",
    "pos": "adj.",
    "meaning": "ดิบ",
    "reading": "รา",
    "ipa": "r ˈɑː",
    "level": "B2"
  },
  {
    "id": "b2_3013",
    "word": "reach",
    "pos": "n.",
    "meaning": "เข้าถึง",
    "reading": "รี ฉึ",
    "ipa": "r ˈiː tʃ",
    "level": "B2"
  },
  {
    "id": "b2_3014",
    "word": "realistic",
    "pos": "adj.",
    "meaning": "เหมือนจริง",
    "reading": "รี เออะ ลิ สึ ถิ่ ขึ",
    "ipa": "r ˌiː ʌ l ˈɪ s t ɪ k",
    "level": "B2"
  },
  {
    "id": "b2_3015",
    "word": "reasonable",
    "pos": "adj.",
    "meaning": "มีเหตุผล",
    "reading": "รี้ เสอะ เหนอะ เบอะ ล",
    "ipa": "r ˈiː z ʌ n ʌ b ʌ l",
    "level": "B2"
  },
  {
    "id": "b2_3016",
    "word": "recall",
    "pos": "v.",
    "meaning": "จํา",
    "reading": "รี้ คอ ล",
    "ipa": "r ˈiː k ˌɔː l",
    "level": "B2"
  },
  {
    "id": "b2_3017",
    "word": "recover",
    "pos": "v.",
    "meaning": "ฟื้นตัว",
    "reading": "หริ่ คะ เฝือ ร",
    "ipa": "r ɪ k ˈʌ v ɜːʴ",
    "level": "B2"
  },
  {
    "id": "b2_3018",
    "word": "reduction",
    "pos": "n.",
    "meaning": "การลดน้อยลง",
    "reading": "เหรอะ ด๊ะ ขึ เฉอะ น",
    "ipa": "r ʌ d ˈʌ k ʃ ʌ n",
    "level": "B2"
  },
  {
    "id": "b2_3019",
    "word": "regard",
    "pos": "v., n.",
    "meaning": "คํานึงถึง",
    "reading": "หริ่ ก๊า (ร) ดึ",
    "ipa": "r ɪ g ˈɑː r d",
    "level": "B2"
  },
  {
    "id": "b2_3020",
    "word": "regional",
    "pos": "adj.",
    "meaning": "ในระดับภูมิภาค",
    "reading": "รี้ เจอะ เหนอะ ล",
    "ipa": "r ˈiː dʒ ʌ n ʌ l",
    "level": "B2"
  },
  {
    "id": "b2_3021",
    "word": "register",
    "pos": "v., n.",
    "meaning": "ลงทะเบียน",
    "reading": "เร้ะ จิ สึ เถ่อ ร",
    "ipa": "r ˈe dʒ ɪ s t ɜːʴ",
    "level": "B2"
  },
  {
    "id": "b2_3022",
    "word": "regret",
    "pos": "v., n.",
    "meaning": "เสียใจ",
    "reading": "เหรอะ เกร๊ะ ถึ",
    "ipa": "r ʌ g r ˈe t",
    "level": "B2"
  },
  {
    "id": "b2_3023",
    "word": "regulation",
    "pos": "n.",
    "meaning": "ระเบียบข้อบังคับ",
    "reading": "เระ กึ เหยอะ เล้ เฉอะ น",
    "ipa": "r ˌe g j ʌ l ˈeɪ ʃ ʌ n",
    "level": "B2"
  },
  {
    "id": "b2_3024",
    "word": "relatively",
    "pos": "adv.",
    "meaning": "ค่อนข้าง",
    "reading": "เร้ะ เหลอะ ถิ่ ฝี หลี่",
    "ipa": "r ˈe l ʌ t ɪ v l iː",
    "level": "B2"
  },
  {
    "id": "b2_3025",
    "word": "relevant",
    "pos": "adj.",
    "meaning": "ที่เกี่ยวข้อง",
    "reading": "เร้ะ เหลอะ เฝอะ น ถึ",
    "ipa": "r ˈe l ʌ v ʌ n t",
    "level": "B2"
  },
  {
    "id": "b2_3026",
    "word": "relief",
    "pos": "n.",
    "meaning": "การบรรเทา",
    "reading": "หริ่ ลี้ ฝี",
    "ipa": "r ɪ l ˈiː f",
    "level": "B2"
  },
  {
    "id": "b2_3027",
    "word": "rely",
    "pos": "v.",
    "meaning": "พึ่งพา",
    "reading": "หริ่ ล้าย",
    "ipa": "r ɪ l ˈaɪ",
    "level": "B2"
  },
  {
    "id": "b2_3028",
    "word": "remark",
    "pos": "n., v.",
    "meaning": "ข้อสังเกต",
    "reading": "หริ่ ม้า (ร) ขึ",
    "ipa": "r ɪ m ˈɑː r k",
    "level": "B2"
  },
  {
    "id": "b2_3029",
    "word": "representative",
    "pos": "n., adj.",
    "meaning": "ตัวแทน",
    "reading": "เระ เผรอะ เซ้ะ น เถอะ ถิ่ ฝี",
    "ipa": "r ˌe p r ʌ z ˈe n t ʌ t ɪ v",
    "level": "B2"
  },
  {
    "id": "b2_3030",
    "word": "reputation",
    "pos": "n.",
    "meaning": "ชื่อเสียง",
    "reading": "เระ ผึ เหยอะ เท้ เฉอะ น",
    "ipa": "r ˌe p j ʌ t ˈeɪ ʃ ʌ n",
    "level": "B2"
  },
  {
    "id": "b2_3031",
    "word": "requirement",
    "pos": "n.",
    "meaning": "ความต้องการ",
    "reading": "หริ่ คว้าย ร เหมอะ น ถึ",
    "ipa": "r ɪ k w ˈaɪ r m ʌ n t",
    "level": "B2"
  },
  {
    "id": "b2_3032",
    "word": "rescue",
    "pos": "v., n.",
    "meaning": "กู้ภัย",
    "reading": "เร้ะ สึ ขึ หยู่",
    "ipa": "r ˈe s k j uː",
    "level": "B2"
  },
  {
    "id": "b2_3033",
    "word": "reserve",
    "pos": "n., v.",
    "meaning": "จอง",
    "reading": "หริ่ เซ้อ ร ฝี",
    "ipa": "r ɪ z ˈɜːʴ v",
    "level": "B2"
  },
  {
    "id": "b2_3034",
    "word": "resident",
    "pos": "n., adj.",
    "meaning": "ถิ่นที่อยู่",
    "reading": "เร้ะ สิ่ เดอะ น ถึ",
    "ipa": "r ˈe z ɪ d ʌ n t",
    "level": "B2"
  },
  {
    "id": "b2_3035",
    "word": "resist",
    "pos": "v.",
    "meaning": "ต้านทาน",
    "reading": "หริ่ ซิ สึ ถึ",
    "ipa": "r ɪ z ˈɪ s t",
    "level": "B2"
  },
  {
    "id": "b2_3036",
    "word": "resolve",
    "pos": "v.",
    "meaning": "แก้ไข",
    "reading": "หรี่ ซ้า ล ฝี",
    "ipa": "r iː z ˈɑː l v",
    "level": "B2"
  },
  {
    "id": "b2_3037",
    "word": "resort",
    "pos": "n.",
    "meaning": "รีสอร์ท",
    "reading": "หริ่ โซ้ (ร) ถึ",
    "ipa": "r ɪ z ˈɔː r t",
    "level": "B2"
  },
  {
    "id": "b2_3038",
    "word": "retain",
    "pos": "v.",
    "meaning": "เก็บไว้",
    "reading": "หริ่ เท้ น",
    "ipa": "r ɪ t ˈeɪ n",
    "level": "B2"
  },
  {
    "id": "b2_3039",
    "word": "reveal",
    "pos": "v.",
    "meaning": "เปัดเผย",
    "reading": "หริ่ ฟี้ ล",
    "ipa": "r ɪ v ˈiː l",
    "level": "B2"
  },
  {
    "id": "b2_3040",
    "word": "revolution",
    "pos": "n.",
    "meaning": "การปฎิวัติ",
    "reading": "เระ เฝอะ ลู้ เฉอะ น",
    "ipa": "r ˌe v ʌ l ˈuː ʃ ʌ n",
    "level": "B2"
  },
  {
    "id": "b2_3041",
    "word": "reward",
    "pos": "n., v.",
    "meaning": "รางวัล",
    "reading": "หริ่ โว้ (ร) ดึ",
    "ipa": "r ɪ w ˈɔː r d",
    "level": "B2"
  },
  {
    "id": "b2_3042",
    "word": "rhythm",
    "pos": "n.",
    "meaning": "จังหวะ",
    "reading": "ริ เดอะ ม",
    "ipa": "r ˈɪ ð ʌ m",
    "level": "B2"
  },
  {
    "id": "b2_3043",
    "word": "rid",
    "pos": "v.",
    "meaning": "กําจัด",
    "reading": "ริ ดึ",
    "ipa": "r ˈɪ d",
    "level": "B2"
  },
  {
    "id": "b2_3044",
    "word": "root",
    "pos": "n.",
    "meaning": "ราก",
    "reading": "รู ถึ",
    "ipa": "r ˈuː t",
    "level": "B2"
  },
  {
    "id": "b2_3045",
    "word": "round",
    "pos": "n.",
    "meaning": "กลม",
    "reading": "ราว น ดึ",
    "ipa": "r ˈaʊ n d",
    "level": "B2"
  },
  {
    "id": "b2_3046",
    "word": "routine",
    "pos": "adj.",
    "meaning": "กิจวัตรประจําวัน",
    "reading": "หรู่ ที้ น",
    "ipa": "r uː t ˈiː n",
    "level": "B2"
  },
  {
    "id": "b2_3047",
    "word": "rub",
    "pos": "v.",
    "meaning": "ถู",
    "reading": "ระ บึ",
    "ipa": "r ˈʌ b",
    "level": "B2"
  },
  {
    "id": "b2_3048",
    "word": "rubber",
    "pos": "n., adj.",
    "meaning": "ยาง",
    "reading": "ระ เบ่อ ร",
    "ipa": "r ˈʌ b ɜːʴ",
    "level": "B2"
  },
  {
    "id": "b2_3049",
    "word": "rural",
    "pos": "adj.",
    "meaning": "ชนบท",
    "reading": "รั้ว (ร) เออะ ล",
    "ipa": "r ˈʊ r ʌ l",
    "level": "B2"
  },
  {
    "id": "b2_3050",
    "word": "rush",
    "pos": "v., n.",
    "meaning": "รีบ",
    "reading": "ระ ฉึ",
    "ipa": "r ˈʌ ʃ",
    "level": "B2"
  },
  {
    "id": "b2_3051",
    "word": "sample",
    "pos": "v.",
    "meaning": "ตัวอย่าง",
    "reading": "แซ้ ม เผอะ ล",
    "ipa": "s ˈæ m p ʌ l",
    "level": "B2"
  },
  {
    "id": "b2_3052",
    "word": "satellite",
    "pos": "n.",
    "meaning": "ดาวเทียม",
    "reading": "แซ้ เถอะ ลาย ถึ",
    "ipa": "s ˈæ t ʌ l ˌaɪ t",
    "level": "B2"
  },
  {
    "id": "b2_3053",
    "word": "satisfied",
    "pos": "adj.",
    "meaning": "พอใจ",
    "reading": "แซ้ เถอะ สึ ฟาย ดึ",
    "ipa": "s ˈæ t ʌ s f ˌaɪ d",
    "level": "B2"
  },
  {
    "id": "b2_3054",
    "word": "satisfy",
    "pos": "v.",
    "meaning": "ทําให้พึงพอใจ",
    "reading": "แซ้ เถอะ สึ ฟาย",
    "ipa": "s ˈæ t ʌ s f ˌaɪ",
    "level": "B2"
  },
  {
    "id": "b2_3055",
    "word": "saving",
    "pos": "n.",
    "meaning": "ประหยัด",
    "reading": "เซ้ ฝั่ ง",
    "ipa": "s ˈeɪ v ɪ ŋ",
    "level": "B2"
  },
  {
    "id": "b2_3056",
    "word": "scale",
    "pos": "n.",
    "meaning": "มาตราส่วน",
    "reading": "สึ เค ล",
    "ipa": "s k ˈeɪ l",
    "level": "B2"
  },
  {
    "id": "b2_3057",
    "word": "schedule",
    "pos": "v.",
    "meaning": "กําหนดการ",
    "reading": "สึ เค้ะ จุ ล",
    "ipa": "s k ˈe dʒ ʊ l",
    "level": "B2"
  },
  {
    "id": "b2_3058",
    "word": "scheme",
    "pos": "n.",
    "meaning": "โครงการ",
    "reading": "สึ คี ม",
    "ipa": "s k ˈiː m",
    "level": "B2"
  },
  {
    "id": "b2_3059",
    "word": "scream",
    "pos": "v., n.",
    "meaning": "กรีดร้อง",
    "reading": "สึ ครี ม",
    "ipa": "s k r ˈiː m",
    "level": "B2"
  },
  {
    "id": "b2_3060",
    "word": "screen",
    "pos": "v.",
    "meaning": "หน้าจอ",
    "reading": "สึ ครี น",
    "ipa": "s k r ˈiː n",
    "level": "B2"
  },
  {
    "id": "b2_3061",
    "word": "seat",
    "pos": "v.",
    "meaning": "ที่นั่ง",
    "reading": "ซี ถึ",
    "ipa": "s ˈiː t",
    "level": "B2"
  },
  {
    "id": "b2_3062",
    "word": "sector",
    "pos": "n.",
    "meaning": "ภาค",
    "reading": "เซ้ะ ขึ เถ่อ ร",
    "ipa": "s ˈe k t ɜːʴ",
    "level": "B2"
  },
  {
    "id": "b2_3063",
    "word": "secure",
    "pos": "v., adj.",
    "meaning": "ปลอดภัย",
    "reading": "สิ่ ขึ ยั้ว (ร)",
    "ipa": "s ɪ k j ˈʊ r",
    "level": "B2"
  },
  {
    "id": "b2_3064",
    "word": "seek",
    "pos": "v.",
    "meaning": "แสวงหา",
    "reading": "ซี ขึ",
    "ipa": "s ˈiː k",
    "level": "B2"
  },
  {
    "id": "b2_3065",
    "word": "select",
    "pos": "v.",
    "meaning": "เลือก",
    "reading": "เสอะ เล้ะ ขึ ถึ",
    "ipa": "s ʌ l ˈe k t",
    "level": "B2"
  },
  {
    "id": "b2_3066",
    "word": "selection",
    "pos": "n.",
    "meaning": "การเลือก",
    "reading": "เสอะ เล้ะ ขึ เฉอะ น",
    "ipa": "s ʌ l ˈe k ʃ ʌ n",
    "level": "B2"
  },
  {
    "id": "b2_3067",
    "word": "self",
    "pos": "n.",
    "meaning": "ตัวเอง",
    "reading": "เซะ ล ฝี",
    "ipa": "s ˈe l f",
    "level": "B2"
  },
  {
    "id": "b2_3068",
    "word": "senior",
    "pos": "adj.",
    "meaning": "อาวุโส",
    "reading": "ซี้ น เหย่อ ร",
    "ipa": "s ˈiː n j ɜːʴ",
    "level": "B2"
  },
  {
    "id": "b2_3069",
    "word": "sense",
    "pos": "v.",
    "meaning": "ความรู้สึก",
    "reading": "เซะ น สึ",
    "ipa": "s ˈe n s",
    "level": "B2"
  },
  {
    "id": "b2_3070",
    "word": "sensitive",
    "pos": "adj.",
    "meaning": "อ่อนไหว",
    "reading": "เซ้ะ น เสอะ ถิ่ ฝี",
    "ipa": "s ˈe n s ʌ t ɪ v",
    "level": "B2"
  },
  {
    "id": "b2_3071",
    "word": "sentence",
    "pos": "v.",
    "meaning": "ประโยค",
    "reading": "เซ้ะ น เถอะ น สึ",
    "ipa": "s ˈe n t ʌ n s",
    "level": "B2"
  },
  {
    "id": "b2_3072",
    "word": "sequence",
    "pos": "n.",
    "meaning": "ลําดับ",
    "reading": "ซี้ เขวอะ น สึ",
    "ipa": "s ˈiː k w ʌ n s",
    "level": "B2"
  },
  {
    "id": "b2_3073",
    "word": "session",
    "pos": "n.",
    "meaning": "การประชุม",
    "reading": "เซ้ะ เฉอะ น",
    "ipa": "s ˈe ʃ ʌ n",
    "level": "B2"
  },
  {
    "id": "b2_3074",
    "word": "settle",
    "pos": "v.",
    "meaning": "ชําระ",
    "reading": "เซ้ะ เถอะ ล",
    "ipa": "s ˈe t ʌ l",
    "level": "B2"
  },
  {
    "id": "b2_3075",
    "word": "severe",
    "pos": "adj.",
    "meaning": "รุนแรง",
    "reading": "เสอะ เฟี้ย ร",
    "ipa": "s ʌ v ˈɪ r",
    "level": "B2"
  },
  {
    "id": "b2_3076",
    "word": "shade",
    "pos": "n.",
    "meaning": "ร่มเงา",
    "reading": "เช ดึ",
    "ipa": "ʃ ˈeɪ d",
    "level": "B2"
  },
  {
    "id": "b2_3077",
    "word": "shadow",
    "pos": "n.",
    "meaning": "เงา",
    "reading": "แช้ โดว",
    "ipa": "ʃ ˈæ d ˌəʊ",
    "level": "B2"
  },
  {
    "id": "b2_3078",
    "word": "shallow",
    "pos": "adj.",
    "meaning": "ตื้น",
    "reading": "แช้ โหล่ว",
    "ipa": "ʃ ˈæ l əʊ",
    "level": "B2"
  },
  {
    "id": "b2_3079",
    "word": "shame",
    "pos": "n.",
    "meaning": "ความอัปยศ",
    "reading": "เช ม",
    "ipa": "ʃ ˈeɪ m",
    "level": "B2"
  },
  {
    "id": "b2_3080",
    "word": "shape",
    "pos": "v.",
    "meaning": "รูปร่าง",
    "reading": "เช ผึ",
    "ipa": "ʃ ˈeɪ p",
    "level": "B2"
  },
  {
    "id": "b2_3081",
    "word": "shelter",
    "pos": "n., v.",
    "meaning": "ที่หลบภัย",
    "reading": "เช้ะ ล เถ่อ ร",
    "ipa": "ʃ ˈe l t ɜːʴ",
    "level": "B2"
  },
  {
    "id": "b2_3082",
    "word": "shift",
    "pos": "v.",
    "meaning": "กะ",
    "reading": "ชิ ฝี ถึ",
    "ipa": "ʃ ˈɪ f t",
    "level": "B2"
  },
  {
    "id": "b2_3083",
    "word": "ship",
    "pos": "v.",
    "meaning": "เรือ",
    "reading": "ชิ ผึ",
    "ipa": "ʃ ˈɪ p",
    "level": "B2"
  },
  {
    "id": "b2_3084",
    "word": "shock",
    "pos": "n., v.",
    "meaning": "ช็อก",
    "reading": "ชา ขึ",
    "ipa": "ʃ ˈɑː k",
    "level": "B2"
  },
  {
    "id": "b2_3085",
    "word": "shocked",
    "pos": "adj.",
    "meaning": "ตกใจ",
    "reading": "ชา ขึ ถึ",
    "ipa": "ʃ ˈɑː k t",
    "level": "B2"
  },
  {
    "id": "b2_3086",
    "word": "shooting",
    "pos": "n.",
    "meaning": "การยิง",
    "reading": "ชู้ ถิ่ ง",
    "ipa": "ʃ ˈuː t ɪ ŋ",
    "level": "B2"
  },
  {
    "id": "b2_3087",
    "word": "shot",
    "pos": "n.",
    "meaning": "ยิง",
    "reading": "ชา ถึ",
    "ipa": "ʃ ˈɑː t",
    "level": "B2"
  },
  {
    "id": "b2_3088",
    "word": "significant",
    "pos": "adj.",
    "meaning": "สําคัญ",
    "reading": "เสอะ กึ นิ ฝั่ เขอะ น ถึ",
    "ipa": "s ʌ g n ˈɪ f ɪ k ʌ n t",
    "level": "B2"
  },
  {
    "id": "b2_3089",
    "word": "significantly",
    "pos": "adv.",
    "meaning": "อย่างมีนัยสําคัญ",
    "reading": "สิ่ กึ นิ ฝั่ เขอะ น ถลี่",
    "ipa": "s ɪ g n ˈɪ f ɪ k ʌ n t l iː",
    "level": "B2"
  },
  {
    "id": "b2_3090",
    "word": "silence",
    "pos": "n.",
    "meaning": "ความเงียบ",
    "reading": "ซ้าย เหลอะ น สึ",
    "ipa": "s ˈaɪ l ʌ n s",
    "level": "B2"
  },
  {
    "id": "b2_3091",
    "word": "silk",
    "pos": "n.",
    "meaning": "ผ้าไหม",
    "reading": "ซิ ล ขึ",
    "ipa": "s ˈɪ l k",
    "level": "B2"
  },
  {
    "id": "b2_3092",
    "word": "sincere",
    "pos": "adj.",
    "meaning": "จริงใจ",
    "reading": "สิ่ น เซี้ย (ร)",
    "ipa": "s ɪ n s ˈɪ r",
    "level": "B2"
  },
  {
    "id": "b2_3093",
    "word": "slave",
    "pos": "n.",
    "meaning": "ทาส",
    "reading": "สึ เล ฝี",
    "ipa": "s l ˈeɪ v",
    "level": "B2"
  },
  {
    "id": "b2_3094",
    "word": "slide",
    "pos": "v., n.",
    "meaning": "สไลด์",
    "reading": "สึ ลาย ดึ",
    "ipa": "s l ˈaɪ d",
    "level": "B2"
  },
  {
    "id": "b2_3095",
    "word": "slight",
    "pos": "adj.",
    "meaning": "เล็กน้อย",
    "reading": "สึ ลาย ถึ",
    "ipa": "s l ˈaɪ t",
    "level": "B2"
  },
  {
    "id": "b2_3096",
    "word": "slip",
    "pos": "v.",
    "meaning": "ลื่น",
    "reading": "สึ ลิ ผึ",
    "ipa": "s l ˈɪ p",
    "level": "B2"
  },
  {
    "id": "b2_3097",
    "word": "slope",
    "pos": "n., v.",
    "meaning": "ความลาดชัน",
    "reading": "สึ โลว ผึ",
    "ipa": "s l ˈəʊ p",
    "level": "B2"
  },
  {
    "id": "b2_3098",
    "word": "solar",
    "pos": "adj.",
    "meaning": "แสงอาทิตย์",
    "reading": "โซ้ว เหล่อ ร",
    "ipa": "s ˈəʊ l ɜːʴ",
    "level": "B2"
  },
  {
    "id": "b2_3099",
    "word": "somewhat",
    "pos": "adv.",
    "meaning": "ค่อนข้าง",
    "reading": "ซะ ม วะ ถึ",
    "ipa": "s ˈʌ m w ˈʌ t",
    "level": "B2"
  },
  {
    "id": "b2_3100",
    "word": "soul",
    "pos": "n.",
    "meaning": "วิญญาณ",
    "reading": "โซว ล",
    "ipa": "s ˈəʊ l",
    "level": "B2"
  },
  {
    "id": "b2_3101",
    "word": "specialist",
    "pos": "n., adj.",
    "meaning": "ผู้เชี่ยวชาญ",
    "reading": "สึ เพ้ะ เฉอะ เหลอะ สึ ถึ",
    "ipa": "s p ˈe ʃ ʌ l ʌ s t",
    "level": "B2"
  },
  {
    "id": "b2_3102",
    "word": "species",
    "pos": "n.",
    "meaning": "สายพันธุ์",
    "reading": "สึ พี้ ฉี่ สึ",
    "ipa": "s p ˈiː ʃ iː z",
    "level": "B2"
  },
  {
    "id": "b2_3103",
    "word": "speed",
    "pos": "v.",
    "meaning": "ความเร็ว",
    "reading": "สึ พี ดึ",
    "ipa": "s p ˈiː d",
    "level": "B2"
  },
  {
    "id": "b2_3104",
    "word": "spiritual",
    "pos": "adj.",
    "meaning": "จิตวิญญาณ",
    "reading": "สึ เพี้ย (ร) อิ ชู เออะ ล",
    "ipa": "s p ˈɪ r ɪ tʃ ˌuː ʌ l",
    "level": "B2"
  },
  {
    "id": "b2_3105",
    "word": "split",
    "pos": "v., n.",
    "meaning": "แยก",
    "reading": "สึ พลิ ถึ",
    "ipa": "s p l ˈɪ t",
    "level": "B2"
  },
  {
    "id": "b2_3106",
    "word": "sponsor",
    "pos": "v., n.",
    "meaning": "สปอนเซอร์",
    "reading": "สึ พ้า น เส่อ ร",
    "ipa": "s p ˈɑː n s ɜːʴ",
    "level": "B2"
  },
  {
    "id": "b2_3107",
    "word": "spot",
    "pos": "v.",
    "meaning": "จุด",
    "reading": "สึ พา ถึ",
    "ipa": "s p ˈɑː t",
    "level": "B2"
  },
  {
    "id": "b2_3108",
    "word": "spread",
    "pos": "n.",
    "meaning": "การแพร่กระจาย",
    "reading": "สึ เพระ ดึ",
    "ipa": "s p r ˈe d",
    "level": "B2"
  },
  {
    "id": "b2_3109",
    "word": "stable",
    "pos": "adj.",
    "meaning": "มั่นคง",
    "reading": "สึ เท้ เบอะ ล",
    "ipa": "s t ˈeɪ b ʌ l",
    "level": "B2"
  },
  {
    "id": "b2_3110",
    "word": "stage",
    "pos": "v.",
    "meaning": "เวที",
    "reading": "สึ เท จึ",
    "ipa": "s t ˈeɪ dʒ",
    "level": "B2"
  },
  {
    "id": "b2_3111",
    "word": "stand",
    "pos": "n.",
    "meaning": "ยืน",
    "reading": "สึ แท น ดึ",
    "ipa": "s t ˈæ n d",
    "level": "B2"
  },
  {
    "id": "b2_3112",
    "word": "stare",
    "pos": "v.",
    "meaning": "จ้อง",
    "reading": "สึ แท (ร)",
    "ipa": "s t ˈe r",
    "level": "B2"
  },
  {
    "id": "b2_3113",
    "word": "status",
    "pos": "n.",
    "meaning": "สถานะ",
    "reading": "สึ แท้ เถอะ สึ",
    "ipa": "s t ˈæ t ʌ s",
    "level": "B2"
  },
  {
    "id": "b2_3114",
    "word": "steady",
    "pos": "adj.",
    "meaning": "มั่นคง",
    "reading": "สึ เท้ะ ดี่",
    "ipa": "s t ˈe d iː",
    "level": "B2"
  },
  {
    "id": "b2_3115",
    "word": "steel",
    "pos": "n.",
    "meaning": "เหล็ก",
    "reading": "สึ ที ล",
    "ipa": "s t ˈiː l",
    "level": "B2"
  },
  {
    "id": "b2_3116",
    "word": "steep",
    "pos": "adj.",
    "meaning": "สูงชัน",
    "reading": "สึ ที ผึ",
    "ipa": "s t ˈiː p",
    "level": "B2"
  },
  {
    "id": "b2_3117",
    "word": "step",
    "pos": "v.",
    "meaning": "ขั้นตอน",
    "reading": "สึ เทะ ผึ",
    "ipa": "s t ˈe p",
    "level": "B2"
  },
  {
    "id": "b2_3118",
    "word": "sticky",
    "pos": "adj.",
    "meaning": "เหนียว",
    "reading": "สึ ทิ ขี่",
    "ipa": "s t ˈɪ k iː",
    "level": "B2"
  },
  {
    "id": "b2_3119",
    "word": "stiff",
    "pos": "adj.",
    "meaning": "แข็ง",
    "reading": "สึ ทิ ฝี",
    "ipa": "s t ˈɪ f",
    "level": "B2"
  },
  {
    "id": "b2_3120",
    "word": "stock",
    "pos": "n.",
    "meaning": "คลังสินค้า",
    "reading": "สึ ทา ขึ",
    "ipa": "s t ˈɑː k",
    "level": "B2"
  },
  {
    "id": "b2_3121",
    "word": "stream",
    "pos": "n.",
    "meaning": "ลําธาร",
    "reading": "สึ ทรี ม",
    "ipa": "s t r ˈiː m",
    "level": "B2"
  },
  {
    "id": "b2_3122",
    "word": "stretch",
    "pos": "v., n.",
    "meaning": "ยืด",
    "reading": "สึ เทระ ฉึ",
    "ipa": "s t r ˈe tʃ",
    "level": "B2"
  },
  {
    "id": "b2_3123",
    "word": "strict",
    "pos": "adj.",
    "meaning": "เข้มงวด",
    "reading": "สึ ทริ ขึ ถึ",
    "ipa": "s t r ˈɪ k t",
    "level": "B2"
  },
  {
    "id": "b2_3124",
    "word": "strike",
    "pos": "v., n.",
    "meaning": "โจมตี",
    "reading": "สึ ทราย ขึ",
    "ipa": "s t r ˈaɪ k",
    "level": "B2"
  },
  {
    "id": "b2_3125",
    "word": "structure",
    "pos": "v.",
    "meaning": "โครงสร้าง",
    "reading": "สึ ทระ ขึ เฉ่อ ร",
    "ipa": "s t r ˈʌ k tʃ ɜːʴ",
    "level": "B2"
  },
  {
    "id": "b2_3126",
    "word": "struggle",
    "pos": "v., n.",
    "meaning": "การต่อสู้",
    "reading": "สึ ทระ เกอะ ล",
    "ipa": "s t r ˈʌ g ʌ l",
    "level": "B2"
  },
  {
    "id": "b2_3127",
    "word": "stuff",
    "pos": "v.",
    "meaning": "สิ่งของ",
    "reading": "สึ ทะ ฝี",
    "ipa": "s t ˈʌ f",
    "level": "B2"
  },
  {
    "id": "b2_3128",
    "word": "subject",
    "pos": "adj.",
    "meaning": "เรื่อง",
    "reading": "ซะ บึ จิ ขึ ถึ",
    "ipa": "s ˈʌ b dʒ ɪ k t",
    "level": "B2"
  },
  {
    "id": "b2_3129",
    "word": "submit",
    "pos": "v.",
    "meaning": "ส่ง",
    "reading": "เสอะ บึ มิ ถึ",
    "ipa": "s ʌ b m ˈɪ t",
    "level": "B2"
  },
  {
    "id": "b2_3130",
    "word": "sum",
    "pos": "n., v.",
    "meaning": "ผลรวม",
    "reading": "ซะ ม",
    "ipa": "s ˈʌ m",
    "level": "B2"
  },
  {
    "id": "b2_3131",
    "word": "surgery",
    "pos": "n.",
    "meaning": "การผ่าตัด",
    "reading": "เซ้อ ร เจ่อ ร หรี่",
    "ipa": "s ˈɜːʴ dʒ ɜːʴ iː",
    "level": "B2"
  },
  {
    "id": "b2_3132",
    "word": "surround",
    "pos": "v.",
    "meaning": "ล้อมรอบ",
    "reading": "เส่อ ร ร้าว น ดึ",
    "ipa": "s ɜːʴ ˈaʊ n d",
    "level": "B2"
  },
  {
    "id": "b2_3133",
    "word": "surrounding",
    "pos": "adj.",
    "meaning": "รอบๆ",
    "reading": "เส่อ ร ร้าว น ดิ ง",
    "ipa": "s ɜːʴ ˈaʊ n d ɪ ŋ",
    "level": "B2"
  },
  {
    "id": "b2_3134",
    "word": "survey",
    "pos": "v.",
    "meaning": "สํารวจ",
    "reading": "เซ้อ ร เฟ",
    "ipa": "s ˈɜːʴ v ˌeɪ",
    "level": "B2"
  },
  {
    "id": "b2_3135",
    "word": "suspect",
    "pos": "v., n.",
    "meaning": "สงสัย",
    "reading": "ซะ สึ เพะ ขึ ถึ",
    "ipa": "s ˈʌ s p ˌe k t",
    "level": "B2"
  },
  {
    "id": "b2_3136",
    "word": "swear",
    "pos": "v.",
    "meaning": "สาบาน",
    "reading": "สึ แว (ร)",
    "ipa": "s w ˈe r",
    "level": "B2"
  },
  {
    "id": "b2_3137",
    "word": "sweep",
    "pos": "v.",
    "meaning": "กวาด",
    "reading": "สึ วี ผึ",
    "ipa": "s w ˈiː p",
    "level": "B2"
  },
  {
    "id": "b2_3138",
    "word": "switch",
    "pos": "n.",
    "meaning": "สวิตช์",
    "reading": "สึ วิ ฉึ",
    "ipa": "s w ˈɪ tʃ",
    "level": "B2"
  },
  {
    "id": "b2_3139",
    "word": "sympathy",
    "pos": "n.",
    "meaning": "ความเห็นอกเห็นใจ",
    "reading": "ซิ ม เผอะ ตี่",
    "ipa": "s ˈɪ m p ʌ θ iː",
    "level": "B2"
  },
  {
    "id": "b2_3140",
    "word": "tale",
    "pos": "n.",
    "meaning": "เรื่อง",
    "reading": "เท ล",
    "ipa": "t ˈeɪ l",
    "level": "B2"
  },
  {
    "id": "b2_3141",
    "word": "tank",
    "pos": "n.",
    "meaning": "ถัง",
    "reading": "แท ง ขึ",
    "ipa": "t ˈæ ŋ k",
    "level": "B2"
  },
  {
    "id": "b2_3142",
    "word": "target",
    "pos": "v.",
    "meaning": "เป็า",
    "reading": "ท้าร เกอะ ถึ",
    "ipa": "t ˈɑː r g ʌ t",
    "level": "B2"
  },
  {
    "id": "b2_3143",
    "word": "tear",
    "pos": "v., n.",
    "meaning": "ฉีก การฉีก นํ้าตา",
    "reading": "แท (ร)",
    "ipa": "t ˈe r",
    "level": "B2"
  },
  {
    "id": "b2_3144",
    "word": "temporary",
    "pos": "adj.",
    "meaning": "ชั่วคราว",
    "reading": "เท้ะ ม เผ่อ ร แร (ร) อี่",
    "ipa": "t ˈe m p ɜːʴ ˌe r iː",
    "level": "B2"
  },
  {
    "id": "b2_3145",
    "word": "term",
    "pos": "v.",
    "meaning": "ภาคเรียน",
    "reading": "เทอ ร ม",
    "ipa": "t ˈɜːʴ m",
    "level": "B2"
  },
  {
    "id": "b2_3146",
    "word": "therapy",
    "pos": "n.",
    "meaning": "การบําบัด",
    "reading": "แต๊ (ร) เออะ ผี่",
    "ipa": "θ ˈe r ʌ p iː",
    "level": "B2"
  },
  {
    "id": "b2_3147",
    "word": "threat",
    "pos": "n.",
    "meaning": "ภัยคุกคาม",
    "reading": "เตระ ถึ",
    "ipa": "θ r ˈe t",
    "level": "B2"
  },
  {
    "id": "b2_3148",
    "word": "threaten",
    "pos": "v.",
    "meaning": "ข่มขู่",
    "reading": "เตร๊ะ เถอะ น",
    "ipa": "θ r ˈe t ʌ n",
    "level": "B2"
  },
  {
    "id": "b2_3149",
    "word": "thus",
    "pos": "adv.",
    "meaning": "ดังนั้น",
    "reading": "ดะ สึ",
    "ipa": "ð ˈʌ s",
    "level": "B2"
  },
  {
    "id": "b2_3150",
    "word": "time",
    "pos": "v.",
    "meaning": "เวลา",
    "reading": "ทาย ม",
    "ipa": "t ˈaɪ m",
    "level": "B2"
  },
  {
    "id": "b2_3151",
    "word": "title",
    "pos": "v.",
    "meaning": "ชื่อ",
    "reading": "ท้าย เถอะ ล",
    "ipa": "t ˈaɪ t ʌ l",
    "level": "B2"
  },
  {
    "id": "b2_3152",
    "word": "tone",
    "pos": "n.",
    "meaning": "โทน",
    "reading": "โทว น",
    "ipa": "t ˈəʊ n",
    "level": "B2"
  },
  {
    "id": "b2_3153",
    "word": "tough",
    "pos": "adj.",
    "meaning": "ยาก",
    "reading": "ทะ ฝี",
    "ipa": "t ˈʌ f",
    "level": "B2"
  },
  {
    "id": "b2_3154",
    "word": "track",
    "pos": "v.",
    "meaning": "ติดตาม",
    "reading": "แทร ขึ",
    "ipa": "t r ˈæ k",
    "level": "B2"
  },
  {
    "id": "b2_3155",
    "word": "transfer",
    "pos": "v., n.",
    "meaning": "โอนย้าย",
    "reading": "แทร้ น สึ เฝือ ร",
    "ipa": "t r ˈæ n s f ɜːʴ",
    "level": "B2"
  },
  {
    "id": "b2_3156",
    "word": "transform",
    "pos": "v.",
    "meaning": "แปลง",
    "reading": "แถร่ น สึ โฟ็ (ร) ม",
    "ipa": "t r æ n s f ˈɔː r m",
    "level": "B2"
  },
  {
    "id": "b2_3157",
    "word": "transition",
    "pos": "n.",
    "meaning": "การเปลี่ยนแปลง",
    "reading": "แถร่ น ซิ เฉอะ น",
    "ipa": "t r æ n z ˈɪ ʃ ʌ n",
    "level": "B2"
  },
  {
    "id": "b2_3158",
    "word": "trial",
    "pos": "n.",
    "meaning": "การทดลอง",
    "reading": "ทร้าย เออะ ล",
    "ipa": "t r ˈaɪ ʌ l",
    "level": "B2"
  },
  {
    "id": "b2_3159",
    "word": "trip",
    "pos": "v.",
    "meaning": "การเดินทาง",
    "reading": "ทริ ผึ",
    "ipa": "t r ˈɪ p",
    "level": "B2"
  },
  {
    "id": "b2_3160",
    "word": "tropical",
    "pos": "adj.",
    "meaning": "เขตร้อน",
    "reading": "ทร้า ผิ่ เขอะ ล",
    "ipa": "t r ˈɑː p ɪ k ʌ l",
    "level": "B2"
  },
  {
    "id": "b2_3161",
    "word": "trouble",
    "pos": "v.",
    "meaning": "ปัญหา",
    "reading": "ทระ เบอะ ล",
    "ipa": "t r ˈʌ b ʌ l",
    "level": "B2"
  },
  {
    "id": "b2_3162",
    "word": "truly",
    "pos": "adv.",
    "meaning": "อย่างแท้จริง",
    "reading": "ทรู้ หลี่",
    "ipa": "t r ˈuː l iː",
    "level": "B2"
  },
  {
    "id": "b2_3163",
    "word": "trust",
    "pos": "n., v.",
    "meaning": "เชื่อมั่น",
    "reading": "ทระ สึ ถึ",
    "ipa": "t r ˈʌ s t",
    "level": "B2"
  },
  {
    "id": "b2_3164",
    "word": "try",
    "pos": "n.",
    "meaning": "พยายาม",
    "reading": "ทราย",
    "ipa": "t r ˈaɪ",
    "level": "B2"
  },
  {
    "id": "b2_3165",
    "word": "tune",
    "pos": "n.",
    "meaning": "ปรับแต่ง",
    "reading": "ทู น",
    "ipa": "t ˈuː n",
    "level": "B2"
  },
  {
    "id": "b2_3166",
    "word": "tunnel",
    "pos": "n.",
    "meaning": "อุโมงค์",
    "reading": "ทะ เหนอะ ล",
    "ipa": "t ˈʌ n ʌ l",
    "level": "B2"
  },
  {
    "id": "b2_3167",
    "word": "ultimately",
    "pos": "adv.",
    "meaning": "ในที่สุด",
    "reading": "อ๊ะ ล เถอะ เหมอะ ถลี่",
    "ipa": "ˈʌ l t ʌ m ʌ t l iː",
    "level": "B2"
  },
  {
    "id": "b2_3168",
    "word": "unconscious",
    "pos": "adj.",
    "meaning": "หมดสติ",
    "reading": "อะ น ค้า น เฉอะ สึ",
    "ipa": "ˌʌ n k ˈɑː n ʃ ʌ s",
    "level": "B2"
  },
  {
    "id": "b2_3169",
    "word": "unexpected",
    "pos": "adj.",
    "meaning": "ไม่คาดคิด",
    "reading": "อะ หนิ่ ขึ สึ เพ้ะ ขึ ถิ่ ดึ",
    "ipa": "ˌʌ n ɪ k s p ˈe k t ɪ d",
    "level": "B2"
  },
  {
    "id": "b2_3170",
    "word": "unique",
    "pos": "adj.",
    "meaning": "มีเอกลักษณ์",
    "reading": "หยู่ นี้ ขึ",
    "ipa": "j uː n ˈiː k",
    "level": "B2"
  },
  {
    "id": "b2_3171",
    "word": "universe",
    "pos": "n.",
    "meaning": "จักรวาล",
    "reading": "ยู้ เหนอะ เฟอ ร สึ",
    "ipa": "j ˈuː n ʌ v ˌɜːʴ s",
    "level": "B2"
  },
  {
    "id": "b2_3172",
    "word": "unknown",
    "pos": "adj.",
    "meaning": "ไม่ทราบ",
    "reading": "เออะ น โน้ว น",
    "ipa": "ʌ n n ˈəʊ n",
    "level": "B2"
  },
  {
    "id": "b2_3173",
    "word": "upper",
    "pos": "adj.",
    "meaning": "บน",
    "reading": "อ๊ะ เผ่อ ร",
    "ipa": "ˈʌ p ɜːʴ",
    "level": "B2"
  },
  {
    "id": "b2_3174",
    "word": "upwards",
    "pos": "adv.",
    "meaning": "ขึ้นไป",
    "reading": "อ๊ะ เผว่อ ร ดึ สึ",
    "ipa": "ˈʌ p w ɜːʴ d z",
    "level": "B2"
  },
  {
    "id": "b2_3175",
    "word": "urban",
    "pos": "adj.",
    "meaning": "ในเมือง",
    "reading": "เอ๊อ ร เบอะ น",
    "ipa": "ˈɜːʴ b ʌ n",
    "level": "B2"
  },
  {
    "id": "b2_3176",
    "word": "urge",
    "pos": "v.",
    "meaning": "กระตุ้น",
    "reading": "เออ ร จึ",
    "ipa": "ˈɜːʴ dʒ",
    "level": "B2"
  },
  {
    "id": "b2_3177",
    "word": "value",
    "pos": "v.",
    "meaning": "ค่า",
    "reading": "แฟ็ ล หยู่",
    "ipa": "v ˈæ l j uː",
    "level": "B2"
  },
  {
    "id": "b2_3178",
    "word": "vary",
    "pos": "v.",
    "meaning": "ต่างกันไป",
    "reading": "แฟ็ (ร) อี่",
    "ipa": "v ˈe r iː",
    "level": "B2"
  },
  {
    "id": "b2_3179",
    "word": "vast",
    "pos": "adj.",
    "meaning": "กว้างใหญ่",
    "reading": "แฟ สึ ถึ",
    "ipa": "v ˈæ s t",
    "level": "B2"
  },
  {
    "id": "b2_3180",
    "word": "venue",
    "pos": "n.",
    "meaning": "สถานที่จัดงาน",
    "reading": "เฟ็ะ น หยู่",
    "ipa": "v ˈe n j uː",
    "level": "B2"
  },
  {
    "id": "b2_3181",
    "word": "very",
    "pos": "adj.",
    "meaning": "มาก",
    "reading": "แฟ็ ร อี่",
    "ipa": "v ˈe r iː",
    "level": "B2"
  },
  {
    "id": "b2_3182",
    "word": "via",
    "pos": "prep.",
    "meaning": "ทาง",
    "reading": "ฟ็าย เออะ",
    "ipa": "v ˈaɪ ʌ",
    "level": "B2"
  },
  {
    "id": "b2_3183",
    "word": "victory",
    "pos": "n.",
    "meaning": "ชัยชนะ",
    "reading": "ฟั ขึ เถ่อ ร หรี่",
    "ipa": "v ˈɪ k t ɜːʴ iː",
    "level": "B2"
  },
  {
    "id": "b2_3184",
    "word": "violence",
    "pos": "n.",
    "meaning": "ความรุนแรง",
    "reading": "ฟ็าย เออะ เหลอะ น สึ",
    "ipa": "v ˈaɪ ʌ l ʌ n s",
    "level": "B2"
  },
  {
    "id": "b2_3185",
    "word": "virtual",
    "pos": "adj.",
    "meaning": "เสมือน",
    "reading": "เฟ็อ ร ฉู่ เออะ ล",
    "ipa": "v ˈɜːʴ tʃ uː ʌ l",
    "level": "B2"
  },
  {
    "id": "b2_3186",
    "word": "vision",
    "pos": "n.",
    "meaning": "วิสัยทัศน์",
    "reading": "ฟั เฉอะ น",
    "ipa": "v ˈɪ ʒ ʌ n",
    "level": "B2"
  },
  {
    "id": "b2_3187",
    "word": "visual",
    "pos": "adj.",
    "meaning": "ภาพ",
    "reading": "ฟั เฉอะ เหวอะ ล",
    "ipa": "v ˈɪ ʒ ʌ w ʌ l",
    "level": "B2"
  },
  {
    "id": "b2_3188",
    "word": "vital",
    "pos": "adj.",
    "meaning": "สําคัญยิ่ง",
    "reading": "ฟ็าย เถอะ ล",
    "ipa": "v ˈaɪ t ʌ l",
    "level": "B2"
  },
  {
    "id": "b2_3189",
    "word": "vitamin",
    "pos": "n.",
    "meaning": "วิตามิน",
    "reading": "ฟ็าย เถอะ เหมอะ น",
    "ipa": "v ˈaɪ t ʌ m ʌ n",
    "level": "B2"
  },
  {
    "id": "b2_3190",
    "word": "volume",
    "pos": "n.",
    "meaning": "ปริมาณ",
    "reading": "ฟ็า ล หยู่ ม",
    "ipa": "v ˈɑː l j uː m",
    "level": "B2"
  },
  {
    "id": "b2_3191",
    "word": "wage",
    "pos": "n.",
    "meaning": "ค่าจ้าง",
    "reading": "เว จึ",
    "ipa": "w ˈeɪ dʒ",
    "level": "B2"
  },
  {
    "id": "b2_3192",
    "word": "way",
    "pos": "adv.",
    "meaning": "ทาง",
    "reading": "เว",
    "ipa": "w ˈeɪ",
    "level": "B2"
  },
  {
    "id": "b2_3193",
    "word": "weakness",
    "pos": "n.",
    "meaning": "ความอ่อนแอ",
    "reading": "วี้ ขึ เหนอะ สึ",
    "ipa": "w ˈiː k n ʌ s",
    "level": "B2"
  },
  {
    "id": "b2_3194",
    "word": "wealth",
    "pos": "n.",
    "meaning": "ความมั่งคั่ง",
    "reading": "เวะ ล ตึ",
    "ipa": "w ˈe l θ",
    "level": "B2"
  },
  {
    "id": "b2_3195",
    "word": "wealthy",
    "pos": "adj.",
    "meaning": "รํ่ารวย",
    "reading": "เว้ะ ล ตี่",
    "ipa": "w ˈe l θ iː",
    "level": "B2"
  },
  {
    "id": "b2_3196",
    "word": "whereas",
    "pos": "conj.",
    "meaning": "ในทางตรงกันข้าม",
    "reading": "แหว่ (ร) แอ๊ สึ",
    "ipa": "w e r ˈæ z",
    "level": "B2"
  },
  {
    "id": "b2_3197",
    "word": "wherever",
    "pos": "conj.",
    "meaning": "ที่ไหนก็ได้",
    "reading": "แหว่ (ร) เอ๊ะ เฝือ ร",
    "ipa": "w e r ˈe v ɜːʴ",
    "level": "B2"
  },
  {
    "id": "b2_3198",
    "word": "whisper",
    "pos": "v., n.",
    "meaning": "กระซิบ",
    "reading": "วิ สึ เผ่อ ร",
    "ipa": "w ˈɪ s p ɜːʴ",
    "level": "B2"
  },
  {
    "id": "b2_3199",
    "word": "whom",
    "pos": "pron.",
    "meaning": "ใคร",
    "reading": "ฮู ม",
    "ipa": "h ˈuː m",
    "level": "B2"
  },
  {
    "id": "b2_3200",
    "word": "widely",
    "pos": "adv.",
    "meaning": "อย่างกว้างขวาง",
    "reading": "ว้าย ดลี่",
    "ipa": "w ˈaɪ d l iː",
    "level": "B2"
  },
  {
    "id": "b2_3201",
    "word": "wildlife",
    "pos": "n.",
    "meaning": "สัตว์ปืา",
    "reading": "ว้าย ล ดลาย ฝี",
    "ipa": "w ˈaɪ l d l ˌaɪ f",
    "level": "B2"
  },
  {
    "id": "b2_3202",
    "word": "willing",
    "pos": "adj.",
    "meaning": "เต็มใจ",
    "reading": "วิ หลิ่ ง",
    "ipa": "w ˈɪ l ɪ ŋ",
    "level": "B2"
  },
  {
    "id": "b2_3203",
    "word": "wind",
    "pos": "v.",
    "meaning": "ได้กลิ่น คดเคี้ยว",
    "reading": "วาย น ดึ",
    "ipa": "w ˈaɪ n d",
    "level": "B2"
  },
  {
    "id": "b2_3204",
    "word": "wire",
    "pos": "n.",
    "meaning": "ลวด",
    "reading": "ว้าย เอ่อ ร",
    "ipa": "w ˈaɪ ɜːʴ",
    "level": "B2"
  },
  {
    "id": "b2_3205",
    "word": "wise",
    "pos": "adj.",
    "meaning": "ฉลาด",
    "reading": "วาย สึ",
    "ipa": "w ˈaɪ z",
    "level": "B2"
  },
  {
    "id": "b2_3206",
    "word": "witness",
    "pos": "n., v.",
    "meaning": "พยาน",
    "reading": "วิ ถึ เหนอะ สึ",
    "ipa": "w ˈɪ t n ʌ s",
    "level": "B2"
  },
  {
    "id": "b2_3207",
    "word": "worse",
    "pos": "n.",
    "meaning": "แย่ลง",
    "reading": "เวอ ร สึ",
    "ipa": "w ˈɜːʴ s",
    "level": "B2"
  },
  {
    "id": "b2_3208",
    "word": "worst",
    "pos": "n.",
    "meaning": "แย่ที่สุด",
    "reading": "เวอ ร สึ ถึ",
    "ipa": "w ˈɜːʴ s t",
    "level": "B2"
  },
  {
    "id": "b2_3209",
    "word": "worth",
    "pos": "n.",
    "meaning": "คุณค่า",
    "reading": "เวอ ร ตึ",
    "ipa": "w ˈɜːʴ θ",
    "level": "B2"
  },
  {
    "id": "b2_3210",
    "word": "wound",
    "pos": "n., v.",
    "meaning": "แผล",
    "reading": "วาว น ดึ",
    "ipa": "w ˈaʊ n d",
    "level": "B2"
  },
  {
    "id": "b2_3211",
    "word": "wrap",
    "pos": "v.",
    "meaning": "ห่อ",
    "reading": "แร ผึ",
    "ipa": "r ˈæ p",
    "level": "B2"
  },
  {
    "id": "b2_3212",
    "word": "wrong",
    "pos": "n.",
    "meaning": "ผิด",
    "reading": "รอ ง",
    "ipa": "r ˈɔː ŋ",
    "level": "B2"
  },
  {
    "id": "b2_3213",
    "word": "yet",
    "pos": "conj.",
    "meaning": "ยัง",
    "reading": "เยะ ถึ",
    "ipa": "j ˈe t",
    "level": "B2"
  },
  {
    "id": "b2_3214",
    "word": "zone",
    "pos": "n.",
    "meaning": "โซน",
    "reading": "โซว น",
    "ipa": "z ˈəʊ n",
    "level": "B2"
  },
  {
    "id": "b2_726",
    "word": "absorb",
    "pos": "v.",
    "meaning": "ดูดซึม",
    "reading": "",
    "ipa": "əbˈzɔɹb",
    "level": "B2"
  },
  {
    "id": "b2_727",
    "word": "abstract",
    "pos": "adj.",
    "meaning": "นามธรรม",
    "reading": "",
    "ipa": "ˈæbˌstɹækt",
    "level": "B2"
  },
  {
    "id": "b2_728",
    "word": "accent",
    "pos": "n.",
    "meaning": "สำเนียง",
    "reading": "",
    "ipa": "ˈækˌsɛnt",
    "level": "B2"
  },
  {
    "id": "b2_729",
    "word": "accidentally",
    "pos": "adv.",
    "meaning": "โดยบังเอิญ",
    "reading": "",
    "ipa": "ˌæksəˈdɛnəɫi",
    "level": "B2"
  },
  {
    "id": "b2_730",
    "word": "accommodate",
    "pos": "v.",
    "meaning": "รองรับ",
    "reading": "",
    "ipa": "əˈkɑməˌdeɪt",
    "level": "B2"
  },
  {
    "id": "b2_731",
    "word": "accomplish",
    "pos": "v.",
    "meaning": "บรรลุ",
    "reading": "",
    "ipa": "əˈkɑmpɫɪʃ",
    "level": "B2"
  },
  {
    "id": "b2_732",
    "word": "accountant",
    "pos": "n.",
    "meaning": "นักบัญชี",
    "reading": "",
    "ipa": "əˈkaʊntənt",
    "level": "B2"
  },
  {
    "id": "b2_733",
    "word": "accuracy",
    "pos": "n.",
    "meaning": "ความถูกต้อง",
    "reading": "",
    "ipa": "ˈækjɝəsi",
    "level": "B2"
  },
  {
    "id": "b2_734",
    "word": "accurately",
    "pos": "adv.",
    "meaning": "อย่างแม่นยำ",
    "reading": "",
    "ipa": "ˈækjɝətɫi",
    "level": "B2"
  },
  {
    "id": "c1_1",
    "word": "acid",
    "pos": "adj.",
    "meaning": "กรด",
    "reading": "",
    "ipa": "ˈæsəd",
    "level": "C1"
  },
  {
    "id": "b2_735",
    "word": "activate",
    "pos": "v.",
    "meaning": "กระตุ้น",
    "reading": "",
    "ipa": "ˈæktəˌveɪt",
    "level": "B2"
  },
  {
    "id": "b2_736",
    "word": "addiction",
    "pos": "n.",
    "meaning": "การเสพติด",
    "reading": "",
    "ipa": "əˈdɪkʃən",
    "level": "B2"
  },
  {
    "id": "b2_737",
    "word": "additionally",
    "pos": "adv.",
    "meaning": "นอกจากนี้",
    "reading": "",
    "ipa": "əˈdɪʃəˌnəɫi",
    "level": "B2"
  },
  {
    "id": "b2_738",
    "word": "adequate",
    "pos": "adj.",
    "meaning": "เพียงพอ",
    "reading": "",
    "ipa": "ˈædəˌkweɪt",
    "level": "B2"
  },
  {
    "id": "b2_739",
    "word": "adequately",
    "pos": "adv.",
    "meaning": "อย่างเพียงพอ",
    "reading": "",
    "ipa": "ˈædəkwətɫi",
    "level": "B2"
  },
  {
    "id": "b2_740",
    "word": "adjust",
    "pos": "v.",
    "meaning": "ปรับ",
    "reading": "",
    "ipa": "əˈdʒəst",
    "level": "B2"
  },
  {
    "id": "b2_741",
    "word": "affordable",
    "pos": "adj.",
    "meaning": "ที่สามารถจ่ายได้",
    "reading": "",
    "ipa": "əˈfɔɹdəbəɫ",
    "level": "B2"
  },
  {
    "id": "b2_742",
    "word": "agriculture",
    "pos": "n.",
    "meaning": "เกษตรกรรม",
    "reading": "",
    "ipa": "ˈæɡɹɪˌkəɫtʃɝ",
    "level": "B2"
  },
  {
    "id": "b2_743",
    "word": "AIDS",
    "pos": "n.",
    "meaning": "เอดส์",
    "reading": "",
    "ipa": "ˈeɪdz",
    "level": "B2"
  },
  {
    "id": "c1_2",
    "word": "alien",
    "pos": "adj.",
    "meaning": "มนุษย์ต่างดาว",
    "reading": "",
    "ipa": "ˈeɪɫiən",
    "level": "C1"
  },
  {
    "id": "b2_744",
    "word": "alongside",
    "pos": "prep.",
    "meaning": "ข้าง ๆ",
    "reading": "",
    "ipa": "əˈɫɔŋˈsaɪd",
    "level": "B2"
  },
  {
    "id": "b2_745",
    "word": "altogether",
    "pos": "adv.",
    "meaning": "ทั้งหมด",
    "reading": "",
    "ipa": "ˌɔɫtəˈɡɛðɝ",
    "level": "B2"
  },
  {
    "id": "b2_746",
    "word": "ambulance",
    "pos": "n.",
    "meaning": "รถพยาบาล",
    "reading": "",
    "ipa": "ˈæmbjəɫəns",
    "level": "B2"
  },
  {
    "id": "b2_747",
    "word": "amusing",
    "pos": "adj.",
    "meaning": "น่าขบขัน",
    "reading": "",
    "ipa": "əmˈjuzɪŋ",
    "level": "B2"
  },
  {
    "id": "b2_748",
    "word": "analyst",
    "pos": "n.",
    "meaning": "นักวิเคราะห์",
    "reading": "",
    "ipa": "ˈænəɫɪst",
    "level": "B2"
  },
  {
    "id": "b2_749",
    "word": "ancestor",
    "pos": "n.",
    "meaning": "บรรพบุรุษ",
    "reading": "",
    "ipa": "ˈænˌsɛstɝ",
    "level": "B2"
  },
  {
    "id": "b2_750",
    "word": "animation",
    "pos": "n.",
    "meaning": "แอนิเมชั่น",
    "reading": "",
    "ipa": "ˌænəˈmeɪʃən",
    "level": "B2"
  },
  {
    "id": "b2_751",
    "word": "annually",
    "pos": "adv.",
    "meaning": "ทุกปี",
    "reading": "",
    "ipa": "ˈænjuəɫi",
    "level": "B2"
  },
  {
    "id": "b2_752",
    "word": "anticipate",
    "pos": "v.",
    "meaning": "คาดการณ์",
    "reading": "",
    "ipa": "ænˈtɪsəˌpeɪt",
    "level": "B2"
  },
  {
    "id": "b2_753",
    "word": "anxiety",
    "pos": "n.",
    "meaning": "ความกังวล",
    "reading": "",
    "ipa": "æŋˈzaɪəti",
    "level": "B2"
  },
  {
    "id": "b2_754",
    "word": "apology",
    "pos": "n.",
    "meaning": "คำขอโทษ",
    "reading": "",
    "ipa": "əˈpɑɫəˌdʒi",
    "level": "B2"
  },
  {
    "id": "b2_755",
    "word": "applicant",
    "pos": "n.",
    "meaning": "ผู้สมัคร",
    "reading": "",
    "ipa": "ˈæpɫɪkənt",
    "level": "B2"
  },
  {
    "id": "b2_756",
    "word": "appropriately",
    "pos": "adv.",
    "meaning": "อย่างเหมาะสม",
    "reading": "",
    "ipa": "əˈpɹoʊpɹiɪtɫi",
    "level": "B2"
  },
  {
    "id": "b2_757",
    "word": "arrow",
    "pos": "n.",
    "meaning": "ลูกศร",
    "reading": "",
    "ipa": "ˈæɹoʊ",
    "level": "B2"
  },
  {
    "id": "b2_758",
    "word": "artwork",
    "pos": "n.",
    "meaning": "งานศิลปะ",
    "reading": "",
    "ipa": "ˈɑɹtˌwɝk",
    "level": "B2"
  },
  {
    "id": "b2_759",
    "word": "aside",
    "pos": "adv.",
    "meaning": "นอกเหนือจากนี้",
    "reading": "",
    "ipa": "əˈsaɪd",
    "level": "B2"
  },
  {
    "id": "b2_760",
    "word": "asset",
    "pos": "n.",
    "meaning": "ทรัพย์สิน",
    "reading": "",
    "ipa": "ˈæˌsɛt",
    "level": "B2"
  },
  {
    "id": "b2_761",
    "word": "assign",
    "pos": "v.",
    "meaning": "กำหนด",
    "reading": "",
    "ipa": "əˈsaɪn",
    "level": "B2"
  },
  {
    "id": "b2_762",
    "word": "assistance",
    "pos": "n.",
    "meaning": "ความช่วยเหลือ",
    "reading": "",
    "ipa": "əˈsɪstəns",
    "level": "B2"
  },
  {
    "id": "b2_763",
    "word": "assumption",
    "pos": "n.",
    "meaning": "สมมติฐาน",
    "reading": "",
    "ipa": "əˈsəmpʃən",
    "level": "B2"
  },
  {
    "id": "b2_764",
    "word": "assure",
    "pos": "v.",
    "meaning": "รับรอง",
    "reading": "",
    "ipa": "əˈʃʊɹ",
    "level": "B2"
  },
  {
    "id": "b2_765",
    "word": "astonishing",
    "pos": "adj.",
    "meaning": "น่าทึ่ง",
    "reading": "",
    "ipa": "əˈstɑnɪʃɪŋ",
    "level": "B2"
  },
  {
    "id": "b2_766",
    "word": "attachment",
    "pos": "n.",
    "meaning": "ไฟล์แนบ",
    "reading": "",
    "ipa": "əˈtætʃmənt",
    "level": "B2"
  },
  {
    "id": "b2_767",
    "word": "auction",
    "pos": "n.",
    "meaning": "การประมูล",
    "reading": "",
    "ipa": "ˈɑkʃən",
    "level": "B2"
  },
  {
    "id": "b2_768",
    "word": "audio",
    "pos": "adj.",
    "meaning": "เสียง",
    "reading": "",
    "ipa": "ˈɑdiˌoʊ",
    "level": "B2"
  },
  {
    "id": "b2_769",
    "word": "automatic",
    "pos": "adj.",
    "meaning": "อัตโนมัติ",
    "reading": "",
    "ipa": "ˌɔtəˈmætɪk",
    "level": "B2"
  },
  {
    "id": "b2_770",
    "word": "automatically",
    "pos": "adv.",
    "meaning": "โดยอัตโนมัติ",
    "reading": "",
    "ipa": "ˌɔtəˈmætɪkɫi",
    "level": "B2"
  },
  {
    "id": "b2_771",
    "word": "awareness",
    "pos": "n.",
    "meaning": "การตระหนักรู้",
    "reading": "",
    "ipa": "əˈwɛɹnəs",
    "level": "B2"
  },
  {
    "id": "b2_772",
    "word": "awkward",
    "pos": "adj.",
    "meaning": "น่าอึดอัด",
    "reading": "",
    "ipa": "ˈɑkwɝd",
    "level": "B2"
  },
  {
    "id": "b2_773",
    "word": "badge",
    "pos": "n.",
    "meaning": "ตรา",
    "reading": "",
    "ipa": "ˈbædʒ",
    "level": "B2"
  },
  {
    "id": "b2_774",
    "word": "balanced",
    "pos": "adj.",
    "meaning": "สมดุล",
    "reading": "",
    "ipa": "ˈbæɫənst",
    "level": "B2"
  },
  {
    "id": "b2_775",
    "word": "ballet",
    "pos": "n.",
    "meaning": "บัลเลต์",
    "reading": "",
    "ipa": "bæˈɫeɪ",
    "level": "B2"
  },
  {
    "id": "b2_776",
    "word": "balloon",
    "pos": "n.",
    "meaning": "ลูกโป่ง",
    "reading": "",
    "ipa": "bəˈɫun",
    "level": "B2"
  },
  {
    "id": "b2_777",
    "word": "barely",
    "pos": "adv.",
    "meaning": "แทบจะไม่",
    "reading": "",
    "ipa": "ˈbɛɹɫi",
    "level": "B2"
  },
  {
    "id": "b2_778",
    "word": "bargain",
    "pos": "n.",
    "meaning": "การต่อรอง",
    "reading": "",
    "ipa": "ˈbɑɹɡən",
    "level": "B2"
  },
  {
    "id": "b2_779",
    "word": "basement",
    "pos": "n.",
    "meaning": "ชั้นใต้ดิน",
    "reading": "",
    "ipa": "ˈbeɪsmənt",
    "level": "B2"
  },
  {
    "id": "b2_780",
    "word": "basket",
    "pos": "n.",
    "meaning": "ตะกร้า",
    "reading": "",
    "ipa": "ˈbæskət",
    "level": "B2"
  },
  {
    "id": "c1_3",
    "word": "bat",
    "pos": "v.",
    "meaning": "ค้างคาว",
    "reading": "",
    "ipa": "ˈbæt",
    "level": "C1"
  },
  {
    "id": "b2_781",
    "word": "beneficial",
    "pos": "adj.",
    "meaning": "เป็นประโยชน์",
    "reading": "",
    "ipa": "ˌbɛnəˈfɪʃəɫ",
    "level": "B2"
  },
  {
    "id": "b2_782",
    "word": "beside",
    "pos": "prep.",
    "meaning": "ข้าง",
    "reading": "",
    "ipa": "ˌbiˈsaɪd",
    "level": "B2"
  },
  {
    "id": "b2_783",
    "word": "besides",
    "pos": "prep., adv.",
    "meaning": "นอกจากนี้",
    "reading": "",
    "ipa": "ˌbiˈsaɪdz",
    "level": "B2"
  },
  {
    "id": "b2_784",
    "word": "bias",
    "pos": "n.",
    "meaning": "อคติ",
    "reading": "",
    "ipa": "ˈbaɪəs",
    "level": "B2"
  },
  {
    "id": "b2_785",
    "word": "bid",
    "pos": "n., v.",
    "meaning": "การประมูล",
    "reading": "",
    "ipa": "ˈbɪd",
    "level": "B2"
  },
  {
    "id": "b2_786",
    "word": "biological",
    "pos": "adj.",
    "meaning": "ทางชีวภาพ",
    "reading": "",
    "ipa": "ˌbaɪəˈɫɑdʒɪkəɫ",
    "level": "B2"
  },
  {
    "id": "b2_787",
    "word": "blanket",
    "pos": "n.",
    "meaning": "ผ้าห่ม",
    "reading": "",
    "ipa": "ˈbɫæŋkət",
    "level": "B2"
  },
  {
    "id": "b2_788",
    "word": "blow",
    "pos": "n.",
    "meaning": "พัด",
    "reading": "",
    "ipa": "ˈbɫoʊ",
    "level": "B2"
  },
  {
    "id": "b2_789",
    "word": "bold",
    "pos": "adj.",
    "meaning": "ตัวหนา",
    "reading": "",
    "ipa": "ˈboʊɫd",
    "level": "B2"
  },
  {
    "id": "b2_790",
    "word": "bombing",
    "pos": "n.",
    "meaning": "การทิ้งระเบิด",
    "reading": "",
    "ipa": "ˈbɑmɪŋ",
    "level": "B2"
  },
  {
    "id": "b2_791",
    "word": "booking",
    "pos": "n.",
    "meaning": "การจอง",
    "reading": "",
    "ipa": "ˈbʊkɪŋ",
    "level": "B2"
  },
  {
    "id": "b2_792",
    "word": "boost",
    "pos": "v., n.",
    "meaning": "เพิ่ม เสริม",
    "reading": "",
    "ipa": "ˈbust",
    "level": "B2"
  },
  {
    "id": "b2_793",
    "word": "bound",
    "pos": "adj.",
    "meaning": "ผูกพัน",
    "reading": "",
    "ipa": "ˈbaʊnd",
    "level": "B2"
  },
  {
    "id": "b2_794",
    "word": "brick",
    "pos": "n.",
    "meaning": "อิฐ",
    "reading": "",
    "ipa": "ˈbɹɪk",
    "level": "B2"
  },
  {
    "id": "b2_795",
    "word": "briefly",
    "pos": "adv.",
    "meaning": "โดยย่อ",
    "reading": "",
    "ipa": "ˈbɹifɫi",
    "level": "B2"
  },
  {
    "id": "b2_796",
    "word": "broadcaster",
    "pos": "n.",
    "meaning": "ผู้แพร่ภาพ",
    "reading": "",
    "ipa": "ˈbɹɔdˌkæstɝ",
    "level": "B2"
  },
  {
    "id": "b2_797",
    "word": "broadly",
    "pos": "adv.",
    "meaning": "โดยทั่วไป",
    "reading": "",
    "ipa": "ˈbɹɔdɫi",
    "level": "B2"
  },
  {
    "id": "b2_798",
    "word": "bug",
    "pos": "n.",
    "meaning": "แมลง",
    "reading": "",
    "ipa": "ˈbəɡ",
    "level": "B2"
  },
  {
    "id": "b2_799",
    "word": "cabin",
    "pos": "n.",
    "meaning": "ห้องโดยสาร",
    "reading": "",
    "ipa": "ˈkæbən",
    "level": "B2"
  },
  {
    "id": "b2_800",
    "word": "canal",
    "pos": "n.",
    "meaning": "คลอง",
    "reading": "",
    "ipa": "kəˈnæɫ",
    "level": "B2"
  },
  {
    "id": "b2_801",
    "word": "candle",
    "pos": "n.",
    "meaning": "เทียน",
    "reading": "",
    "ipa": "ˈkændəɫ",
    "level": "B2"
  },
  {
    "id": "b2_802",
    "word": "carbon",
    "pos": "n.",
    "meaning": "คาร์บอน",
    "reading": "",
    "ipa": "ˈkɑɹbən",
    "level": "B2"
  },
  {
    "id": "b2_803",
    "word": "casual",
    "pos": "adj.",
    "meaning": "ไม่เป็นทางการ",
    "reading": "",
    "ipa": "ˈkæʒəwəɫ",
    "level": "B2"
  },
  {
    "id": "b2_804",
    "word": "cave",
    "pos": "n.",
    "meaning": "ถ้ำ",
    "reading": "",
    "ipa": "ˈkeɪv",
    "level": "B2"
  },
  {
    "id": "b2_805",
    "word": "certainty",
    "pos": "n.",
    "meaning": "ความแน่นอน",
    "reading": "",
    "ipa": "ˈsɝtənti",
    "level": "B2"
  },
  {
    "id": "b2_806",
    "word": "certificate",
    "pos": "n.",
    "meaning": "ประกาศนียบัตร",
    "reading": "",
    "ipa": "sɝˈtɪfɪkət",
    "level": "B2"
  },
  {
    "id": "b2_807",
    "word": "challenging",
    "pos": "adj.",
    "meaning": "ที่ท้าทาย",
    "reading": "",
    "ipa": "ˈtʃæɫəndʒɪŋ",
    "level": "B2"
  },
  {
    "id": "b2_808",
    "word": "championship",
    "pos": "n.",
    "meaning": "ผู้ชนะ",
    "reading": "",
    "ipa": "ˈtʃæmpiənˌʃɪp",
    "level": "B2"
  },
  {
    "id": "b2_809",
    "word": "charming",
    "pos": "adj.",
    "meaning": "มีเสน่ห์",
    "reading": "",
    "ipa": "ˈtʃɑɹmɪŋ",
    "level": "B2"
  },
  {
    "id": "b2_810",
    "word": "chase",
    "pos": "v., n.",
    "meaning": "ไล่ล่า",
    "reading": "",
    "ipa": "ˈtʃeɪs",
    "level": "B2"
  },
  {
    "id": "b2_811",
    "word": "cheek",
    "pos": "n.",
    "meaning": "แก้ม",
    "reading": "",
    "ipa": "ˈtʃik",
    "level": "B2"
  },
  {
    "id": "b2_812",
    "word": "cheer",
    "pos": "v., n.",
    "meaning": "เชียร์",
    "reading": "",
    "ipa": "ˈtʃɪɹ",
    "level": "B2"
  },
  {
    "id": "b2_813",
    "word": "choir",
    "pos": "n.",
    "meaning": "คณะนักร้อง",
    "reading": "",
    "ipa": "ˈkwaɪɝ",
    "level": "B2"
  },
  {
    "id": "b2_814",
    "word": "chop",
    "pos": "v.",
    "meaning": "สับ",
    "reading": "",
    "ipa": "ˈtʃɑp",
    "level": "B2"
  },
  {
    "id": "b2_815",
    "word": "circuit",
    "pos": "n.",
    "meaning": "วงจร",
    "reading": "",
    "ipa": "ˈsɝkət",
    "level": "B2"
  },
  {
    "id": "b2_816",
    "word": "civilization",
    "pos": "n.",
    "meaning": "อารยธรรม",
    "reading": "",
    "ipa": "ˌsɪvəɫɪˈzeɪʃən",
    "level": "B2"
  },
  {
    "id": "b2_817",
    "word": "clarify",
    "pos": "v.",
    "meaning": "ชี้แจง",
    "reading": "",
    "ipa": "ˈkɫɛɹəˌfaɪ",
    "level": "B2"
  },
  {
    "id": "b2_818",
    "word": "classify",
    "pos": "v.",
    "meaning": "จัดประเภท",
    "reading": "",
    "ipa": "ˈkɫæsəˌfaɪ",
    "level": "B2"
  },
  {
    "id": "b2_819",
    "word": "clerk",
    "pos": "n.",
    "meaning": "เสมียน",
    "reading": "",
    "ipa": "ˈkɫɝk",
    "level": "B2"
  },
  {
    "id": "b2_820",
    "word": "cliff",
    "pos": "n.",
    "meaning": "หน้าผา",
    "reading": "",
    "ipa": "ˈkɫɪf",
    "level": "B2"
  },
  {
    "id": "b2_821",
    "word": "clinic",
    "pos": "n.",
    "meaning": "คลินิก",
    "reading": "",
    "ipa": "ˈkɫɪnɪk",
    "level": "B2"
  },
  {
    "id": "b2_822",
    "word": "clip",
    "pos": "n.",
    "meaning": "คลิป",
    "reading": "",
    "ipa": "ˈkɫɪp",
    "level": "B2"
  },
  {
    "id": "b2_823",
    "word": "coincidence",
    "pos": "n.",
    "meaning": "ความบังเอิญ",
    "reading": "",
    "ipa": "koʊˈɪnsɪdəns",
    "level": "B2"
  },
  {
    "id": "b2_824",
    "word": "collector",
    "pos": "n.",
    "meaning": "นักสะสม",
    "reading": "",
    "ipa": "kəˈɫɛktɝ",
    "level": "B2"
  },
  {
    "id": "b2_825",
    "word": "colony",
    "pos": "n.",
    "meaning": "อาณานิคม",
    "reading": "",
    "ipa": "ˈkɑɫəni",
    "level": "B2"
  },
  {
    "id": "b2_826",
    "word": "colourful",
    "pos": "adj.",
    "meaning": "มีสีสัน",
    "reading": "",
    "ipa": "ˈkəɫɝfəɫ",
    "level": "B2"
  },
  {
    "id": "b2_827",
    "word": "comic",
    "pos": "adj., n.",
    "meaning": "การ์ตูน",
    "reading": "",
    "ipa": "ˈkɑmɪk",
    "level": "B2"
  },
  {
    "id": "b2_828",
    "word": "commander",
    "pos": "n.",
    "meaning": "ผู้บัญชาการ",
    "reading": "",
    "ipa": "kəˈmændɝ",
    "level": "B2"
  },
  {
    "id": "b2_829",
    "word": "comparative",
    "pos": "adj.",
    "meaning": "เชิงเปรียบเทียบ",
    "reading": "",
    "ipa": "kəmˈpɛɹətɪv",
    "level": "B2"
  },
  {
    "id": "b2_830",
    "word": "completion",
    "pos": "n.",
    "meaning": "ความสมบูรณ์",
    "reading": "",
    "ipa": "kəmˈpɫiʃən",
    "level": "B2"
  },
  {
    "id": "b2_831",
    "word": "compose",
    "pos": "v.",
    "meaning": "แต่ง",
    "reading": "",
    "ipa": "kəmˈpoʊz",
    "level": "B2"
  },
  {
    "id": "b2_832",
    "word": "composer",
    "pos": "n.",
    "meaning": "นักแต่งเพลง",
    "reading": "",
    "ipa": "kəmˈpoʊzɝ",
    "level": "B2"
  },
  {
    "id": "b2_833",
    "word": "compound",
    "pos": "n.",
    "meaning": "สารประกอบ",
    "reading": "",
    "ipa": "ˈkɑmpaʊnd",
    "level": "B2"
  },
  {
    "id": "b2_834",
    "word": "comprehensive",
    "pos": "adj.",
    "meaning": "ครอบคลุม",
    "reading": "",
    "ipa": "ˌkɑmpɹiˈhɛnsɪv",
    "level": "B2"
  },
  {
    "id": "b2_835",
    "word": "comprise",
    "pos": "v.",
    "meaning": "ประกอบด้วย",
    "reading": "",
    "ipa": "kəmˈpɹaɪz",
    "level": "B2"
  },
  {
    "id": "b2_836",
    "word": "compulsory",
    "pos": "adj.",
    "meaning": "บังคับ",
    "reading": "",
    "ipa": "kəmˈpəɫsɝi",
    "level": "B2"
  },
  {
    "id": "b2_837",
    "word": "concrete",
    "pos": "adj., n.",
    "meaning": "คอนกรีต",
    "reading": "",
    "ipa": "ˈkɑnkɹit",
    "level": "B2"
  },
  {
    "id": "b2_838",
    "word": "confess",
    "pos": "v.",
    "meaning": "สารภาพ",
    "reading": "",
    "ipa": "kənˈfɛs",
    "level": "B2"
  },
  {
    "id": "b2_839",
    "word": "confusion",
    "pos": "n.",
    "meaning": "ความสับสน",
    "reading": "",
    "ipa": "kənˈfjuʒən",
    "level": "B2"
  },
  {
    "id": "b2_840",
    "word": "consequently",
    "pos": "adv.",
    "meaning": "ดังนั้น",
    "reading": "",
    "ipa": "ˈkɑnsəˌkwɛntɫi",
    "level": "B2"
  },
  {
    "id": "b2_841",
    "word": "conservation",
    "pos": "n.",
    "meaning": "การอนุรักษ์",
    "reading": "",
    "ipa": "ˌkɑnsɝˈveɪʃən",
    "level": "B2"
  },
  {
    "id": "b2_842",
    "word": "considerable",
    "pos": "adj.",
    "meaning": "มากมาย",
    "reading": "",
    "ipa": "kənˈsɪdɝəbəɫ",
    "level": "B2"
  },
  {
    "id": "b2_843",
    "word": "considerably",
    "pos": "adv.",
    "meaning": "อย่างมาก",
    "reading": "",
    "ipa": "kənˈsɪdɝəbɫi",
    "level": "B2"
  },
  {
    "id": "b2_844",
    "word": "consistently",
    "pos": "adv.",
    "meaning": "อย่างสม่ำเสมอ",
    "reading": "",
    "ipa": "kənˈsɪstəntɫi",
    "level": "B2"
  },
  {
    "id": "b2_845",
    "word": "conspiracy",
    "pos": "n.",
    "meaning": "การสมคบคิด",
    "reading": "",
    "ipa": "kənˈspɪɹəsi",
    "level": "B2"
  },
  {
    "id": "b2_846",
    "word": "consult",
    "pos": "v.",
    "meaning": "ปรึกษา",
    "reading": "",
    "ipa": "kənˈsəɫt",
    "level": "B2"
  },
  {
    "id": "b2_847",
    "word": "consultant",
    "pos": "n.",
    "meaning": "ที่ปรึกษา",
    "reading": "",
    "ipa": "kənˈsəɫtənt",
    "level": "B2"
  },
  {
    "id": "b2_848",
    "word": "consumption",
    "pos": "n.",
    "meaning": "การบริโภค",
    "reading": "",
    "ipa": "kənˈsəmpʃən",
    "level": "B2"
  },
  {
    "id": "b2_849",
    "word": "controversial",
    "pos": "adj.",
    "meaning": "เป็นที่ถกเถียง",
    "reading": "",
    "ipa": "ˌkɑntɹəˈvɝʃəɫ",
    "level": "B2"
  },
  {
    "id": "b2_850",
    "word": "controversy",
    "pos": "n.",
    "meaning": "ความขัดแย้ง",
    "reading": "",
    "ipa": "ˈkɑntɹəˌvɝsi",
    "level": "B2"
  },
  {
    "id": "b2_851",
    "word": "convenience",
    "pos": "n.",
    "meaning": "ความสะดวกสบาย",
    "reading": "",
    "ipa": "kənˈvinjəns",
    "level": "B2"
  },
  {
    "id": "b2_852",
    "word": "convention",
    "pos": "n.",
    "meaning": "การประชุม",
    "reading": "",
    "ipa": "kənˈvɛnʃən",
    "level": "B2"
  },
  {
    "id": "b2_853",
    "word": "conventional",
    "pos": "adj.",
    "meaning": "ธรรมดา",
    "reading": "",
    "ipa": "kənˈvɛnʃənəɫ",
    "level": "B2"
  },
  {
    "id": "b2_854",
    "word": "convey",
    "pos": "v.",
    "meaning": "สื่อสาร",
    "reading": "",
    "ipa": "kənˈveɪ",
    "level": "B2"
  },
  {
    "id": "b2_855",
    "word": "convincing",
    "pos": "adj.",
    "meaning": "น่าเชื่อถือ",
    "reading": "",
    "ipa": "kənˈvɪnsɪŋ",
    "level": "B2"
  },
  {
    "id": "b2_856",
    "word": "cope",
    "pos": "v.",
    "meaning": "รับมือ",
    "reading": "",
    "ipa": "ˈkoʊp",
    "level": "B2"
  },
  {
    "id": "b2_857",
    "word": "corporation",
    "pos": "n.",
    "meaning": "บริษัท",
    "reading": "",
    "ipa": "ˌkɔɹpɝˈeɪʃən",
    "level": "B2"
  },
  {
    "id": "b2_858",
    "word": "corridor",
    "pos": "n.",
    "meaning": "ทางเดิน",
    "reading": "",
    "ipa": "ˈkɔɹədɝ",
    "level": "B2"
  },
  {
    "id": "c1_4",
    "word": "counter",
    "pos": "v.",
    "meaning": "โต้ตอบ",
    "reading": "",
    "ipa": "ˈkaʊntɝ",
    "level": "C1"
  },
  {
    "id": "b2_859",
    "word": "coverage",
    "pos": "n.",
    "meaning": "ความครอบคลุม",
    "reading": "",
    "ipa": "ˈkəvɝədʒ",
    "level": "B2"
  },
  {
    "id": "b2_860",
    "word": "crack",
    "pos": "v., n.",
    "meaning": "รอยแตก",
    "reading": "",
    "ipa": "ˈkɹæk",
    "level": "B2"
  },
  {
    "id": "c1_5",
    "word": "craft",
    "pos": "v.",
    "meaning": "งานฝีมือ",
    "reading": "",
    "ipa": "ˈkɹæft",
    "level": "C1"
  },
  {
    "id": "b2_861",
    "word": "creativity",
    "pos": "n.",
    "meaning": "ความคิดสร้างสรรค์",
    "reading": "",
    "ipa": "ˌkɹieɪˈtɪvəti",
    "level": "B2"
  },
  {
    "id": "b2_862",
    "word": "critically",
    "pos": "adv.",
    "meaning": "อย่างสำคัญ",
    "reading": "",
    "ipa": "ˈkɹɪtɪkəɫi",
    "level": "B2"
  },
  {
    "id": "b2_863",
    "word": "cruise",
    "pos": "n., v.",
    "meaning": "ล่องเรือ",
    "reading": "",
    "ipa": "ˈkɹuz",
    "level": "B2"
  },
  {
    "id": "b2_864",
    "word": "cue",
    "pos": "n.",
    "meaning": "สัญญาณ",
    "reading": "",
    "ipa": "ˈkju",
    "level": "B2"
  },
  {
    "id": "b2_865",
    "word": "curious",
    "pos": "adj.",
    "meaning": "อยากรู้อยากเห็น",
    "reading": "",
    "ipa": "ˈkjʊɹiəs",
    "level": "B2"
  },
  {
    "id": "b2_866",
    "word": "curriculum",
    "pos": "n.",
    "meaning": "หลักสูตร",
    "reading": "",
    "ipa": "kɝˈɪkjəɫəm",
    "level": "B2"
  },
  {
    "id": "b2_867",
    "word": "cute",
    "pos": "adj.",
    "meaning": "น่ารัก",
    "reading": "",
    "ipa": "ˈkjut",
    "level": "B2"
  },
  {
    "id": "b2_868",
    "word": "dairy",
    "pos": "n., adj.",
    "meaning": "ผลิตภัณฑ์นม",
    "reading": "",
    "ipa": "ˈdɛɹi",
    "level": "B2"
  },
  {
    "id": "b2_869",
    "word": "dare",
    "pos": "v.",
    "meaning": "กล้า",
    "reading": "",
    "ipa": "ˈdɛɹ",
    "level": "B2"
  },
  {
    "id": "b2_870",
    "word": "darkness",
    "pos": "n.",
    "meaning": "ความมืด",
    "reading": "",
    "ipa": "ˈdɑɹknəs",
    "level": "B2"
  },
  {
    "id": "b2_871",
    "word": "database",
    "pos": "n.",
    "meaning": "ฐานข้อมูล",
    "reading": "",
    "ipa": "ˈdætəˌbeɪs",
    "level": "B2"
  },
  {
    "id": "b2_872",
    "word": "deadline",
    "pos": "n.",
    "meaning": "กำหนดเวลา",
    "reading": "",
    "ipa": "ˈdɛdˌɫaɪn",
    "level": "B2"
  },
  {
    "id": "b2_873",
    "word": "deadly",
    "pos": "adj.",
    "meaning": "ถึงตาย",
    "reading": "",
    "ipa": "ˈdɛdɫi",
    "level": "B2"
  },
  {
    "id": "b2_874",
    "word": "dealer",
    "pos": "n.",
    "meaning": "ตัวแทนจำหน่าย",
    "reading": "",
    "ipa": "ˈdiɫɝ",
    "level": "B2"
  },
  {
    "id": "b2_875",
    "word": "deck",
    "pos": "n.",
    "meaning": "ดาดฟ้า",
    "reading": "",
    "ipa": "ˈdɛk",
    "level": "B2"
  },
  {
    "id": "b2_876",
    "word": "defender",
    "pos": "n.",
    "meaning": "ผู้ป้องกัน",
    "reading": "",
    "ipa": "dɪˈfɛndɝ",
    "level": "B2"
  },
  {
    "id": "b2_877",
    "word": "delete",
    "pos": "v.",
    "meaning": "ลบ",
    "reading": "",
    "ipa": "dɪˈɫit",
    "level": "B2"
  },
  {
    "id": "b2_878",
    "word": "democracy",
    "pos": "n.",
    "meaning": "ประชาธิปไตย",
    "reading": "",
    "ipa": "dɪˈmɑkɹəsi",
    "level": "B2"
  },
  {
    "id": "b2_879",
    "word": "democratic",
    "pos": "adj.",
    "meaning": "เกี่ยวกับประชาธิปไตย",
    "reading": "",
    "ipa": "ˌdɛməˈkɹætɪk",
    "level": "B2"
  },
  {
    "id": "b2_880",
    "word": "demonstration",
    "pos": "n.",
    "meaning": "การสาธิต",
    "reading": "",
    "ipa": "ˌdɛmənˈstɹeɪʃən",
    "level": "B2"
  },
  {
    "id": "b2_881",
    "word": "depart",
    "pos": "v.",
    "meaning": "ออกเดินทาง",
    "reading": "",
    "ipa": "dɪˈpɑɹt",
    "level": "B2"
  },
  {
    "id": "b2_882",
    "word": "dependent",
    "pos": "adj.",
    "meaning": "พึ่งพา",
    "reading": "",
    "ipa": "dɪˈpɛndənt",
    "level": "B2"
  },
  {
    "id": "c1_6",
    "word": "deposit",
    "pos": "v.",
    "meaning": "ฝากเงิน",
    "reading": "",
    "ipa": "dəˈpɑzɪt",
    "level": "C1"
  },
  {
    "id": "b2_883",
    "word": "depression",
    "pos": "n.",
    "meaning": "ภาวะซึมเศร้า",
    "reading": "",
    "ipa": "dɪˈpɹɛʃən",
    "level": "B2"
  },
  {
    "id": "b2_884",
    "word": "derive",
    "pos": "v.",
    "meaning": "ได้มาจาก",
    "reading": "",
    "ipa": "dɝˈaɪv",
    "level": "B2"
  },
  {
    "id": "b2_885",
    "word": "desperately",
    "pos": "adv.",
    "meaning": "อย่างหมดหวัง",
    "reading": "",
    "ipa": "ˈdɛspɝətɫi",
    "level": "B2"
  },
  {
    "id": "b2_886",
    "word": "destruction",
    "pos": "n.",
    "meaning": "การทำลาย",
    "reading": "",
    "ipa": "dɪˈstɹəkʃən",
    "level": "B2"
  },
  {
    "id": "b2_887",
    "word": "determination",
    "pos": "n.",
    "meaning": "ความมุ่งมั่น",
    "reading": "",
    "ipa": "dɪˌtɝməˈneɪʃən",
    "level": "B2"
  },
  {
    "id": "b2_888",
    "word": "devote",
    "pos": "v.",
    "meaning": "อุทิศ",
    "reading": "",
    "ipa": "dɪˈvoʊt",
    "level": "B2"
  },
  {
    "id": "b2_889",
    "word": "differ",
    "pos": "v.",
    "meaning": "แตกต่าง",
    "reading": "",
    "ipa": "ˈdɪfɝ",
    "level": "B2"
  },
  {
    "id": "b2_890",
    "word": "disability",
    "pos": "n.",
    "meaning": "ความพิการ",
    "reading": "",
    "ipa": "ˌdɪsəˈbɪɫɪti",
    "level": "B2"
  },
  {
    "id": "b2_891",
    "word": "disabled",
    "pos": "adj.",
    "meaning": "พิการ",
    "reading": "",
    "ipa": "dɪˈseɪbəɫd",
    "level": "B2"
  },
  {
    "id": "b2_892",
    "word": "disagreement",
    "pos": "n.",
    "meaning": "ความไม่เห็นด้วย",
    "reading": "",
    "ipa": "dɪsəˈɡɹimənt",
    "level": "B2"
  },
  {
    "id": "b2_893",
    "word": "disappoint",
    "pos": "v.",
    "meaning": "ทำให้ผิดหวัง",
    "reading": "",
    "ipa": "ˌdɪsəˈpɔɪnt",
    "level": "B2"
  },
  {
    "id": "b2_894",
    "word": "disappointment",
    "pos": "n.",
    "meaning": "ความผิดหวัง",
    "reading": "",
    "ipa": "ˌdɪsəˈpɔɪntmənt",
    "level": "B2"
  },
  {
    "id": "b2_895",
    "word": "discourage",
    "pos": "v.",
    "meaning": "ทำให้ท้อแท้",
    "reading": "",
    "ipa": "dɪˈskɝɪdʒ",
    "level": "B2"
  },
  {
    "id": "b2_896",
    "word": "disorder",
    "pos": "n.",
    "meaning": "ความผิดปกติ",
    "reading": "",
    "ipa": "dɪˈsɔɹdɝ",
    "level": "B2"
  },
  {
    "id": "b2_897",
    "word": "distant",
    "pos": "adj.",
    "meaning": "ห่างไกล",
    "reading": "",
    "ipa": "ˈdɪstənt",
    "level": "B2"
  },
  {
    "id": "b2_898",
    "word": "distinct",
    "pos": "adj.",
    "meaning": "เด่นชัด",
    "reading": "",
    "ipa": "dɪˈstɪŋkt",
    "level": "B2"
  },
  {
    "id": "b2_899",
    "word": "distinguish",
    "pos": "v.",
    "meaning": "แยกแยะ",
    "reading": "",
    "ipa": "dɪˈstɪŋɡwɪʃ",
    "level": "B2"
  },
  {
    "id": "b2_900",
    "word": "distract",
    "pos": "v.",
    "meaning": "ทำให้เสียสมาธิ",
    "reading": "",
    "ipa": "dɪˈstɹækt",
    "level": "B2"
  },
  {
    "id": "b2_901",
    "word": "disturb",
    "pos": "v.",
    "meaning": "รบกวน",
    "reading": "",
    "ipa": "dɪˈstɝb",
    "level": "B2"
  },
  {
    "id": "b2_902",
    "word": "dive",
    "pos": "v., n.",
    "meaning": "ดำน้ำ",
    "reading": "",
    "ipa": "ˈdaɪv",
    "level": "B2"
  },
  {
    "id": "b2_903",
    "word": "diverse",
    "pos": "adj.",
    "meaning": "หลากหลาย",
    "reading": "",
    "ipa": "daɪˈvɝs",
    "level": "B2"
  },
  {
    "id": "b2_904",
    "word": "diversity",
    "pos": "n.",
    "meaning": "ความหลากหลาย",
    "reading": "",
    "ipa": "daɪˈvɝsɪti",
    "level": "B2"
  },
  {
    "id": "b2_905",
    "word": "divorce",
    "pos": "n., v.",
    "meaning": "การหย่าร้าง",
    "reading": "",
    "ipa": "dɪˈvɔɹs",
    "level": "B2"
  },
  {
    "id": "b2_906",
    "word": "dominant",
    "pos": "adj.",
    "meaning": "โดดเด่น",
    "reading": "",
    "ipa": "ˈdɑmənənt",
    "level": "B2"
  },
  {
    "id": "b2_907",
    "word": "donation",
    "pos": "n.",
    "meaning": "การบริจาค",
    "reading": "",
    "ipa": "doʊˈneɪʃən",
    "level": "B2"
  },
  {
    "id": "b2_908",
    "word": "dot",
    "pos": "n.",
    "meaning": "จุด",
    "reading": "",
    "ipa": "ˈdɑt",
    "level": "B2"
  },
  {
    "id": "b2_909",
    "word": "downtown",
    "pos": "n., adj., adv.",
    "meaning": "ในตัวเมือง",
    "reading": "",
    "ipa": "ˈdaʊnˈtaʊn",
    "level": "B2"
  },
  {
    "id": "b2_910",
    "word": "dramatically",
    "pos": "adv.",
    "meaning": "อย่างมาก",
    "reading": "",
    "ipa": "dɹəˈmætɪkəɫi",
    "level": "B2"
  },
  {
    "id": "b2_911",
    "word": "drought",
    "pos": "n.",
    "meaning": "ความแห้งแล้ง",
    "reading": "",
    "ipa": "ˈdɹaʊt",
    "level": "B2"
  },
  {
    "id": "b2_912",
    "word": "dull",
    "pos": "adj.",
    "meaning": "น่าเบื่อ",
    "reading": "",
    "ipa": "ˈdəɫ",
    "level": "B2"
  },
  {
    "id": "b2_913",
    "word": "dump",
    "pos": "v.",
    "meaning": "ทิ้ง",
    "reading": "",
    "ipa": "ˈdəmp",
    "level": "B2"
  },
  {
    "id": "b2_914",
    "word": "duration",
    "pos": "n.",
    "meaning": "ระยะเวลา",
    "reading": "",
    "ipa": "ˈdʊˈɹeɪʃən",
    "level": "B2"
  },
  {
    "id": "c1_7",
    "word": "dynamic",
    "pos": "n.",
    "meaning": "พลวัต",
    "reading": "",
    "ipa": "daɪˈnæmɪk",
    "level": "C1"
  },
  {
    "id": "b2_915",
    "word": "economics",
    "pos": "n.",
    "meaning": "เศรษฐศาสตร์",
    "reading": "",
    "ipa": "ˌɛkəˈnɑmɪks",
    "level": "B2"
  },
  {
    "id": "b2_916",
    "word": "economist",
    "pos": "n.",
    "meaning": "นักเศรษฐศาสตร์",
    "reading": "",
    "ipa": "iˈkɑnəmɪst",
    "level": "B2"
  },
  {
    "id": "b2_917",
    "word": "editorial",
    "pos": "adj.",
    "meaning": "บทบรรณาธิการ",
    "reading": "",
    "ipa": "ˌɛdəˈtɔɹiəɫ",
    "level": "B2"
  },
  {
    "id": "b2_918",
    "word": "efficiently",
    "pos": "adv.",
    "meaning": "อย่างมีประสิทธิภาพ",
    "reading": "",
    "ipa": "ɪˈfɪʃəntɫi",
    "level": "B2"
  },
  {
    "id": "b2_919",
    "word": "elbow",
    "pos": "n.",
    "meaning": "ข้อศอก",
    "reading": "",
    "ipa": "ˈɛɫˌboʊ",
    "level": "B2"
  },
  {
    "id": "b2_920",
    "word": "electronics",
    "pos": "n.",
    "meaning": "อุปกรณ์อิเล็กทรอนิกส์",
    "reading": "",
    "ipa": "ˌɪˌɫɛkˈtɹɑnɪks",
    "level": "B2"
  },
  {
    "id": "b2_921",
    "word": "elegant",
    "pos": "adj.",
    "meaning": "สง่างาม",
    "reading": "",
    "ipa": "ˈɛɫəɡənt",
    "level": "B2"
  },
  {
    "id": "b2_922",
    "word": "elementary",
    "pos": "adj.",
    "meaning": "พื้นฐาน",
    "reading": "",
    "ipa": "ˌɛɫəˈmɛntɝɹi",
    "level": "B2"
  },
  {
    "id": "b2_923",
    "word": "eliminate",
    "pos": "v.",
    "meaning": "กำจัด",
    "reading": "",
    "ipa": "ɪˈɫɪməˌneɪt",
    "level": "B2"
  },
  {
    "id": "b2_924",
    "word": "embrace",
    "pos": "v.",
    "meaning": "ยอมรับ",
    "reading": "",
    "ipa": "ɛmˈbɹeɪs",
    "level": "B2"
  },
  {
    "id": "b2_925",
    "word": "emission",
    "pos": "n.",
    "meaning": "การปล่อย",
    "reading": "",
    "ipa": "ɪˈmɪʃən",
    "level": "B2"
  },
  {
    "id": "b2_926",
    "word": "emotionally",
    "pos": "adv.",
    "meaning": "ทางอารมณ์",
    "reading": "",
    "ipa": "ˈiˌmoʊʃnəɫi",
    "level": "B2"
  },
  {
    "id": "b2_927",
    "word": "empire",
    "pos": "n.",
    "meaning": "จักรวรรดิ",
    "reading": "",
    "ipa": "ˈɛmpaɪɝ",
    "level": "B2"
  },
  {
    "id": "b2_928",
    "word": "enjoyable",
    "pos": "adj.",
    "meaning": "น่าสนุก",
    "reading": "",
    "ipa": "ˌɛnˈdʒɔɪəbəɫ",
    "level": "B2"
  },
  {
    "id": "b2_929",
    "word": "entertaining",
    "pos": "adj.",
    "meaning": "ที่บันเทิง",
    "reading": "",
    "ipa": "ˌɛnɝˈteɪnɪŋ",
    "level": "B2"
  },
  {
    "id": "b2_930",
    "word": "entrepreneur",
    "pos": "n.",
    "meaning": "ผู้ประกอบการ",
    "reading": "",
    "ipa": "ˌɑntɹəpɹəˈnɝ",
    "level": "B2"
  },
  {
    "id": "b2_931",
    "word": "envelope",
    "pos": "n.",
    "meaning": "ซองจดหมาย",
    "reading": "",
    "ipa": "ˈɛnvəˌɫoʊp",
    "level": "B2"
  },
  {
    "id": "b2_932",
    "word": "equip",
    "pos": "v.",
    "meaning": "ติดตั้ง",
    "reading": "",
    "ipa": "ɪˈkwɪp",
    "level": "B2"
  },
  {
    "id": "b2_933",
    "word": "equivalent",
    "pos": "n., adj.",
    "meaning": "เทียบเท่า",
    "reading": "",
    "ipa": "ɪˈkwɪvəɫənt",
    "level": "B2"
  },
  {
    "id": "b2_934",
    "word": "era",
    "pos": "n.",
    "meaning": "ยุค",
    "reading": "",
    "ipa": "ˈɛɹə",
    "level": "B2"
  },
  {
    "id": "b2_935",
    "word": "erupt",
    "pos": "v.",
    "meaning": "ปะทุ",
    "reading": "",
    "ipa": "ˈiɹəpt",
    "level": "B2"
  },
  {
    "id": "b2_936",
    "word": "essentially",
    "pos": "adv.",
    "meaning": "โดยพื้นฐาน",
    "reading": "",
    "ipa": "ɛˈsɛnʃəɫi",
    "level": "B2"
  },
  {
    "id": "b2_937",
    "word": "ethic",
    "pos": "n.",
    "meaning": "จริยธรรม",
    "reading": "",
    "ipa": "ˈɛθɪk",
    "level": "B2"
  },
  {
    "id": "b2_938",
    "word": "ethnic",
    "pos": "adj.",
    "meaning": "ชาติพันธุ์",
    "reading": "",
    "ipa": "ˈɛθnɪk",
    "level": "B2"
  },
  {
    "id": "b2_939",
    "word": "evaluation",
    "pos": "n.",
    "meaning": "การประเมิน",
    "reading": "",
    "ipa": "iˌvæɫjuˈeɪʃən",
    "level": "B2"
  },
  {
    "id": "b2_940",
    "word": "evident",
    "pos": "adj.",
    "meaning": "ชัดเจน",
    "reading": "",
    "ipa": "ˈɛvədənt",
    "level": "B2"
  },
  {
    "id": "b2_941",
    "word": "evolution",
    "pos": "n.",
    "meaning": "วิวัฒนาการ",
    "reading": "",
    "ipa": "ˌɛvəˈɫuʃən",
    "level": "B2"
  },
  {
    "id": "b2_942",
    "word": "evolve",
    "pos": "v.",
    "meaning": "พัฒนา",
    "reading": "",
    "ipa": "iˈvɑɫv",
    "level": "B2"
  },
  {
    "id": "b2_943",
    "word": "exceed",
    "pos": "v.",
    "meaning": "เกิน",
    "reading": "",
    "ipa": "ɪkˈsid",
    "level": "B2"
  },
  {
    "id": "b2_944",
    "word": "exception",
    "pos": "n.",
    "meaning": "ข้อยกเว้น",
    "reading": "",
    "ipa": "ɪkˈsɛpʃən",
    "level": "B2"
  },
  {
    "id": "b2_945",
    "word": "excessive",
    "pos": "adj.",
    "meaning": "มากเกินไป",
    "reading": "",
    "ipa": "ɪkˈsɛsɪv",
    "level": "B2"
  },
  {
    "id": "b2_946",
    "word": "exclude",
    "pos": "v.",
    "meaning": "แยกออก",
    "reading": "",
    "ipa": "ɪkˈskɫud",
    "level": "B2"
  },
  {
    "id": "b2_947",
    "word": "exhibit",
    "pos": "v., n.",
    "meaning": "แสดง",
    "reading": "",
    "ipa": "ɪɡˈzɪbɪt",
    "level": "B2"
  },
  {
    "id": "c1_8",
    "word": "exit",
    "pos": "v.",
    "meaning": "ออก",
    "reading": "",
    "ipa": "ˈɛɡzɪt",
    "level": "C1"
  },
  {
    "id": "b2_948",
    "word": "exotic",
    "pos": "adj.",
    "meaning": "แปลกใหม่",
    "reading": "",
    "ipa": "ɪɡˈzɑtɪk",
    "level": "B2"
  },
  {
    "id": "b2_949",
    "word": "expansion",
    "pos": "n.",
    "meaning": "การขยายตัว",
    "reading": "",
    "ipa": "ɪkˈspænʃən",
    "level": "B2"
  },
  {
    "id": "b2_950",
    "word": "expertise",
    "pos": "n.",
    "meaning": "ความเชี่ยวชาญ",
    "reading": "",
    "ipa": "ˌɛkspɝˈtiz",
    "level": "B2"
  },
  {
    "id": "b2_951",
    "word": "exploit",
    "pos": "v.",
    "meaning": "แสวงหาประโยชน์",
    "reading": "",
    "ipa": "ˈɛksˌpɫɔɪt",
    "level": "B2"
  },
  {
    "id": "b2_952",
    "word": "exposure",
    "pos": "n.",
    "meaning": "การเปิดเผย",
    "reading": "",
    "ipa": "ɪkˈspoʊʒɝ",
    "level": "B2"
  },
  {
    "id": "b2_953",
    "word": "extension",
    "pos": "n.",
    "meaning": "การขยาย",
    "reading": "",
    "ipa": "ɪkˈstɛnʃən",
    "level": "B2"
  },
  {
    "id": "b2_954",
    "word": "extensive",
    "pos": "adj.",
    "meaning": "กว้างขวาง",
    "reading": "",
    "ipa": "ɪkˈstɛnsɪv",
    "level": "B2"
  },
  {
    "id": "b2_955",
    "word": "extensively",
    "pos": "adv.",
    "meaning": "อย่างกว้างขวาง",
    "reading": "",
    "ipa": "ɪkˈstɛnsɪvɫi",
    "level": "B2"
  },
  {
    "id": "c1_9",
    "word": "extract",
    "pos": "v.",
    "meaning": "สกัด",
    "reading": "",
    "ipa": "ˈɛkˌstɹækt",
    "level": "C1"
  },
  {
    "id": "b2_956",
    "word": "fabric",
    "pos": "n.",
    "meaning": "ผ้า",
    "reading": "",
    "ipa": "ˈfæbɹɪk",
    "level": "B2"
  },
  {
    "id": "b2_957",
    "word": "fabulous",
    "pos": "adj.",
    "meaning": "ยอดเยี่ยม",
    "reading": "",
    "ipa": "ˈfæbjəɫəs",
    "level": "B2"
  },
  {
    "id": "b2_958",
    "word": "failed",
    "pos": "adj.",
    "meaning": "ล้มเหลว",
    "reading": "",
    "ipa": "ˈfeɪɫd",
    "level": "B2"
  },
  {
    "id": "b2_959",
    "word": "fake",
    "pos": "adj.",
    "meaning": "ปลอม",
    "reading": "",
    "ipa": "ˈfeɪk",
    "level": "B2"
  },
  {
    "id": "b2_960",
    "word": "fame",
    "pos": "n.",
    "meaning": "ชื่อเสียง",
    "reading": "",
    "ipa": "ˈfeɪm",
    "level": "B2"
  },
  {
    "id": "b2_961",
    "word": "fantasy",
    "pos": "n.",
    "meaning": "จินตนาการ",
    "reading": "",
    "ipa": "ˈfænəsi",
    "level": "B2"
  },
  {
    "id": "b2_962",
    "word": "fare",
    "pos": "n.",
    "meaning": "ค่าโดยสาร",
    "reading": "",
    "ipa": "ˈfɛɹ",
    "level": "B2"
  },
  {
    "id": "b2_963",
    "word": "federal",
    "pos": "adj.",
    "meaning": "เกี่ยวกับรัฐบาลกลาง",
    "reading": "",
    "ipa": "ˈfɛdɝəɫ",
    "level": "B2"
  },
  {
    "id": "b2_964",
    "word": "fever",
    "pos": "n.",
    "meaning": "ไข้",
    "reading": "",
    "ipa": "ˈfivɝ",
    "level": "B2"
  },
  {
    "id": "b2_965",
    "word": "firefighter",
    "pos": "n.",
    "meaning": "นักดับเพลิง",
    "reading": "",
    "ipa": "ˈfaɪɹˌfaɪtɝ",
    "level": "B2"
  },
  {
    "id": "b2_966",
    "word": "firework",
    "pos": "n.",
    "meaning": "ดอกไม้ไฟ",
    "reading": "",
    "ipa": "ˈfaɪɹˌwɝk",
    "level": "B2"
  },
  {
    "id": "b2_967",
    "word": "firmly",
    "pos": "adv.",
    "meaning": "อย่างมั่นคง",
    "reading": "",
    "ipa": "ˈfɝmɫi",
    "level": "B2"
  },
  {
    "id": "b2_968",
    "word": "flavour",
    "pos": "n.",
    "meaning": "รสชาติ",
    "reading": "",
    "ipa": "ˈfɫeɪvɝ",
    "level": "B2"
  },
  {
    "id": "b2_969",
    "word": "fond",
    "pos": "adj.",
    "meaning": "ชอบ",
    "reading": "",
    "ipa": "ˈfɑnd",
    "level": "B2"
  },
  {
    "id": "b2_970",
    "word": "fool",
    "pos": "n.",
    "meaning": "คนโง่",
    "reading": "",
    "ipa": "ˈfuɫ",
    "level": "B2"
  },
  {
    "id": "b2_971",
    "word": "forbid",
    "pos": "v.",
    "meaning": "ห้าม",
    "reading": "",
    "ipa": "fɝˈbɪd",
    "level": "B2"
  },
  {
    "id": "b2_972",
    "word": "forecast",
    "pos": "n., v.",
    "meaning": "การพยากรณ์",
    "reading": "",
    "ipa": "ˈfɔɹˌkæst",
    "level": "B2"
  },
  {
    "id": "b2_973",
    "word": "format",
    "pos": "n.",
    "meaning": "รูปแบบ",
    "reading": "",
    "ipa": "ˈfɔɹˌmæt",
    "level": "B2"
  },
  {
    "id": "b2_974",
    "word": "formation",
    "pos": "n.",
    "meaning": "การก่อตัว",
    "reading": "",
    "ipa": "fɔɹˈmeɪʃən",
    "level": "B2"
  },
  {
    "id": "b2_975",
    "word": "formerly",
    "pos": "adv.",
    "meaning": "ก่อนหน้านี้",
    "reading": "",
    "ipa": "ˈfɔɹmɝɫi",
    "level": "B2"
  },
  {
    "id": "b2_976",
    "word": "fortunate",
    "pos": "adj.",
    "meaning": "โชคดี",
    "reading": "",
    "ipa": "ˈfɔɹtʃənət",
    "level": "B2"
  },
  {
    "id": "b2_977",
    "word": "forum",
    "pos": "n.",
    "meaning": "เวที",
    "reading": "",
    "ipa": "ˈfɔɹəm",
    "level": "B2"
  },
  {
    "id": "b2_978",
    "word": "fossil",
    "pos": "n.",
    "meaning": "ฟอสซิล",
    "reading": "",
    "ipa": "ˈfɑsəɫ",
    "level": "B2"
  },
  {
    "id": "b2_979",
    "word": "foundation",
    "pos": "n.",
    "meaning": "มูลนิธิ",
    "reading": "",
    "ipa": "faʊnˈdeɪʃən",
    "level": "B2"
  },
  {
    "id": "b2_980",
    "word": "founder",
    "pos": "n.",
    "meaning": "ผู้ก่อตั้ง",
    "reading": "",
    "ipa": "ˈfaʊndɝ",
    "level": "B2"
  },
  {
    "id": "b2_981",
    "word": "fraction",
    "pos": "n.",
    "meaning": "เศษส่วน",
    "reading": "",
    "ipa": "ˈfɹækʃən",
    "level": "B2"
  },
  {
    "id": "b2_982",
    "word": "fragment",
    "pos": "n.",
    "meaning": "ชิ้นส่วน",
    "reading": "",
    "ipa": "ˈfɹæɡmənt",
    "level": "B2"
  },
  {
    "id": "b2_983",
    "word": "framework",
    "pos": "n.",
    "meaning": "โครงสร้าง",
    "reading": "",
    "ipa": "ˈfɹeɪmˌwɝk",
    "level": "B2"
  },
  {
    "id": "b2_984",
    "word": "fraud",
    "pos": "n.",
    "meaning": "การฉ้อโกง",
    "reading": "",
    "ipa": "ˈfɹɔd",
    "level": "B2"
  },
  {
    "id": "b2_985",
    "word": "freely",
    "pos": "adv.",
    "meaning": "อย่างอิสระ",
    "reading": "",
    "ipa": "ˈfɹiɫi",
    "level": "B2"
  },
  {
    "id": "b2_986",
    "word": "frequent",
    "pos": "adj.",
    "meaning": "บ่อย",
    "reading": "",
    "ipa": "ˈfɹiˌkwɛnt",
    "level": "B2"
  },
  {
    "id": "b2_987",
    "word": "fulfil",
    "pos": "v.",
    "meaning": "ทำให้สำเร็จ",
    "reading": "",
    "ipa": "fʊɫˈfɪɫ",
    "level": "B2"
  },
  {
    "id": "b2_988",
    "word": "full-time",
    "pos": "adj./adv.",
    "meaning": "เต็มเวลา",
    "reading": "",
    "ipa": "ˈfʊɫˌtaɪm",
    "level": "B2"
  },
  {
    "id": "b2_989",
    "word": "fundamentally",
    "pos": "adv.",
    "meaning": "อย่างพื้นฐาน",
    "reading": "",
    "ipa": "ˌfəndəˈmɛnəɫi",
    "level": "B2"
  },
  {
    "id": "b2_990",
    "word": "furious",
    "pos": "adj.",
    "meaning": "โกรธจัด",
    "reading": "",
    "ipa": "ˈfjʊɹiəs",
    "level": "B2"
  },
  {
    "id": "b2_991",
    "word": "gaming",
    "pos": "n.",
    "meaning": "การเล่นเกม",
    "reading": "",
    "ipa": "ˈɡeɪmɪŋ",
    "level": "B2"
  },
  {
    "id": "b2_992",
    "word": "gay",
    "pos": "adj.",
    "meaning": "รักร่วมเพศ",
    "reading": "",
    "ipa": "ˈɡeɪ",
    "level": "B2"
  },
  {
    "id": "b2_993",
    "word": "gender",
    "pos": "n.",
    "meaning": "เพศ",
    "reading": "",
    "ipa": "ˈdʒɛndɝ",
    "level": "B2"
  },
  {
    "id": "b2_994",
    "word": "gene",
    "pos": "n.",
    "meaning": "ยีน",
    "reading": "",
    "ipa": "ˈdʒin",
    "level": "B2"
  },
  {
    "id": "b2_995",
    "word": "genetic",
    "pos": "adj.",
    "meaning": "ทางพันธุกรรม",
    "reading": "",
    "ipa": "dʒəˈnɛtɪk",
    "level": "B2"
  },
  {
    "id": "b2_996",
    "word": "genius",
    "pos": "n.",
    "meaning": "อัจฉริยะ",
    "reading": "",
    "ipa": "ˈdʒinjəs",
    "level": "B2"
  },
  {
    "id": "b2_997",
    "word": "genuine",
    "pos": "adj.",
    "meaning": "แท้จริง",
    "reading": "",
    "ipa": "ˈdʒɛnˈjuˌwaɪn",
    "level": "B2"
  },
  {
    "id": "b2_998",
    "word": "genuinely",
    "pos": "adv.",
    "meaning": "อย่างแท้จริง",
    "reading": "",
    "ipa": "ˈdʒɛnˈjuˌwaɪnɫi",
    "level": "B2"
  },
  {
    "id": "b2_999",
    "word": "gesture",
    "pos": "n.",
    "meaning": "ท่าทาง",
    "reading": "",
    "ipa": "ˈdʒɛstʃɝ",
    "level": "B2"
  },
  {
    "id": "b2_1000",
    "word": "gig",
    "pos": "n.",
    "meaning": "การแสดง",
    "reading": "",
    "ipa": "ˈɡɪɡ",
    "level": "B2"
  },
  {
    "id": "b2_1001",
    "word": "globalization",
    "pos": "n.",
    "meaning": "โลกาภิวัตน์",
    "reading": "",
    "ipa": "ˌɡɫoʊbəɫɪˈzeɪʃən",
    "level": "B2"
  },
  {
    "id": "b2_1002",
    "word": "globe",
    "pos": "n.",
    "meaning": "ลูกโลก",
    "reading": "",
    "ipa": "ˈɡɫoʊb",
    "level": "B2"
  },
  {
    "id": "b2_1003",
    "word": "golden",
    "pos": "adj.",
    "meaning": "ทองคำ",
    "reading": "",
    "ipa": "ˈɡoʊɫdən",
    "level": "B2"
  },
  {
    "id": "b2_1004",
    "word": "goodness",
    "pos": "n.",
    "meaning": "ความดี",
    "reading": "",
    "ipa": "ˈɡʊdnəs",
    "level": "B2"
  },
  {
    "id": "b2_1005",
    "word": "gorgeous",
    "pos": "adj.",
    "meaning": "งดงาม",
    "reading": "",
    "ipa": "ˈɡɔɹdʒəs",
    "level": "B2"
  },
  {
    "id": "b2_1006",
    "word": "governor",
    "pos": "n.",
    "meaning": "ผู้ว่าราชการ",
    "reading": "",
    "ipa": "ˈɡəvɝnɝ",
    "level": "B2"
  },
  {
    "id": "b2_1007",
    "word": "graphic",
    "pos": "adj.",
    "meaning": "กราฟิก",
    "reading": "",
    "ipa": "ˈɡɹæfɪk",
    "level": "B2"
  },
  {
    "id": "b2_1008",
    "word": "graphics",
    "pos": "n.",
    "meaning": "ภาพกราฟิก",
    "reading": "",
    "ipa": "ˈɡɹæfɪks",
    "level": "B2"
  },
  {
    "id": "b2_1009",
    "word": "greatly",
    "pos": "adv.",
    "meaning": "อย่างมาก",
    "reading": "",
    "ipa": "ˈɡɹeɪtɫi",
    "level": "B2"
  },
  {
    "id": "b2_1010",
    "word": "greenhouse",
    "pos": "n.",
    "meaning": "เรือนกระจก",
    "reading": "",
    "ipa": "ˈɡɹinˌhaʊs",
    "level": "B2"
  },
  {
    "id": "b2_1011",
    "word": "grocery",
    "pos": "n.",
    "meaning": "ร้านขายของชำ",
    "reading": "",
    "ipa": "ˈɡɹoʊsɝi",
    "level": "B2"
  },
  {
    "id": "b2_1012",
    "word": "guideline",
    "pos": "n.",
    "meaning": "แนวทาง",
    "reading": "",
    "ipa": "ˈɡaɪdˌɫaɪn",
    "level": "B2"
  },
  {
    "id": "b2_1013",
    "word": "habitat",
    "pos": "n.",
    "meaning": "ที่อยู่อาศัย",
    "reading": "",
    "ipa": "ˈhæbəˌtæt",
    "level": "B2"
  },
  {
    "id": "b2_1014",
    "word": "harbour",
    "pos": "n.",
    "meaning": "ท่าเรือ",
    "reading": "",
    "ipa": "ˈhɑɹbɝ",
    "level": "B2"
  },
  {
    "id": "b2_1015",
    "word": "headquarters",
    "pos": "n.",
    "meaning": "สำนักงานใหญ่",
    "reading": "",
    "ipa": "ˈhɛdˌkɔɹtɝz",
    "level": "B2"
  },
  {
    "id": "b2_1016",
    "word": "heal",
    "pos": "v.",
    "meaning": "รักษา",
    "reading": "",
    "ipa": "ˈhiɫ",
    "level": "B2"
  },
  {
    "id": "b2_1017",
    "word": "healthcare",
    "pos": "n.",
    "meaning": "การดูแลสุขภาพ",
    "reading": "",
    "ipa": "ˈhɛɫθˌkɛɹ",
    "level": "B2"
  },
  {
    "id": "b2_1018",
    "word": "helmet",
    "pos": "n.",
    "meaning": "หมวกกันน็อค",
    "reading": "",
    "ipa": "ˈhɛɫmət",
    "level": "B2"
  },
  {
    "id": "b2_1019",
    "word": "hence",
    "pos": "adv.",
    "meaning": "ดังนั้น",
    "reading": "",
    "ipa": "ˈhɛns",
    "level": "B2"
  },
  {
    "id": "b2_1020",
    "word": "herb",
    "pos": "n.",
    "meaning": "สมุนไพร",
    "reading": "",
    "ipa": "ˈɝb",
    "level": "B2"
  },
  {
    "id": "b2_1021",
    "word": "hidden",
    "pos": "adj.",
    "meaning": "ซ่อนเร้น",
    "reading": "",
    "ipa": "ˈhɪdən",
    "level": "B2"
  },
  {
    "id": "b2_1022",
    "word": "highway",
    "pos": "n.",
    "meaning": "ทางหลวง",
    "reading": "",
    "ipa": "ˈhaɪˌweɪ",
    "level": "B2"
  },
  {
    "id": "b2_1023",
    "word": "hilarious",
    "pos": "adj.",
    "meaning": "ขบขัน",
    "reading": "",
    "ipa": "hɪˈɫɛɹiəs",
    "level": "B2"
  },
  {
    "id": "b2_1024",
    "word": "hip",
    "pos": "n.",
    "meaning": "สะโพก",
    "reading": "",
    "ipa": "ˈhɪp",
    "level": "B2"
  },
  {
    "id": "b2_1025",
    "word": "historian",
    "pos": "n.",
    "meaning": "นักประวัติศาสตร์",
    "reading": "",
    "ipa": "hɪˈstɔɹiən",
    "level": "B2"
  },
  {
    "id": "b2_1026",
    "word": "homeless",
    "pos": "adj.",
    "meaning": "ไร้บ้าน",
    "reading": "",
    "ipa": "ˈhoʊmɫəs",
    "level": "B2"
  },
  {
    "id": "b2_1027",
    "word": "honesty",
    "pos": "n.",
    "meaning": "ความซื่อสัตย์",
    "reading": "",
    "ipa": "ˈɑnəsti",
    "level": "B2"
  },
  {
    "id": "c1_10",
    "word": "hook",
    "pos": "v.",
    "meaning": "ตะขอ",
    "reading": "",
    "ipa": "ˈhʊk",
    "level": "C1"
  },
  {
    "id": "b2_1028",
    "word": "hopefully",
    "pos": "adv.",
    "meaning": "ด้วยความหวัง",
    "reading": "",
    "ipa": "ˈhoʊpfəɫi",
    "level": "B2"
  },
  {
    "id": "b2_1029",
    "word": "hunger",
    "pos": "n.",
    "meaning": "ความหิว",
    "reading": "",
    "ipa": "ˈhəŋɡɝ",
    "level": "B2"
  },
  {
    "id": "b2_1030",
    "word": "hypothesis",
    "pos": "n.",
    "meaning": "สมมติฐาน",
    "reading": "",
    "ipa": "haɪˈpɑθəsəs",
    "level": "B2"
  },
  {
    "id": "b2_1031",
    "word": "icon",
    "pos": "n.",
    "meaning": "ไอคอน",
    "reading": "",
    "ipa": "ˈaɪkɑn",
    "level": "B2"
  },
  {
    "id": "b2_1032",
    "word": "ID",
    "pos": "n.",
    "meaning": "รหัสประจำตัว",
    "reading": "",
    "ipa": "ˈaɪˈdi",
    "level": "B2"
  },
  {
    "id": "b2_1033",
    "word": "identical",
    "pos": "adj.",
    "meaning": "เหมือนกันมากๆ",
    "reading": "",
    "ipa": "aɪˈdɛntɪkəɫ",
    "level": "B2"
  },
  {
    "id": "b2_1034",
    "word": "illusion",
    "pos": "n.",
    "meaning": "ภาพลวงตา",
    "reading": "",
    "ipa": "ˌɪˈɫuʒən",
    "level": "B2"
  },
  {
    "id": "b2_1035",
    "word": "immigration",
    "pos": "n.",
    "meaning": "การย้ายถิ่นฐาน",
    "reading": "",
    "ipa": "ˌɪməˈɡɹeɪʃən",
    "level": "B2"
  },
  {
    "id": "b2_1036",
    "word": "immune",
    "pos": "adj.",
    "meaning": "ภูมิคุ้มกัน",
    "reading": "",
    "ipa": "ˌɪmˈjun",
    "level": "B2"
  },
  {
    "id": "b2_1037",
    "word": "implement",
    "pos": "v.",
    "meaning": "ดำเนินการ",
    "reading": "",
    "ipa": "ˈɪmpɫəmənt",
    "level": "B2"
  },
  {
    "id": "b2_1038",
    "word": "implication",
    "pos": "n.",
    "meaning": "นัย",
    "reading": "",
    "ipa": "ˌɪmpɫəˈkeɪʃən",
    "level": "B2"
  },
  {
    "id": "b2_1039",
    "word": "incentive",
    "pos": "n.",
    "meaning": "แรงจูงใจ",
    "reading": "",
    "ipa": "ˌɪnˈsɛnɪv",
    "level": "B2"
  },
  {
    "id": "b2_1040",
    "word": "incorporate",
    "pos": "v.",
    "meaning": "รวมเข้าด้วยกัน",
    "reading": "",
    "ipa": "ˌɪnˈkɔɹpɝˌeɪt",
    "level": "B2"
  },
  {
    "id": "b2_1041",
    "word": "incorrect",
    "pos": "adj.",
    "meaning": "ผิด",
    "reading": "",
    "ipa": "ˌɪnkɝˈɛkt",
    "level": "B2"
  },
  {
    "id": "b2_1042",
    "word": "independence",
    "pos": "n.",
    "meaning": "อิสรภาพ",
    "reading": "",
    "ipa": "ˌɪndɪˈpɛndəns",
    "level": "B2"
  },
  {
    "id": "b2_1043",
    "word": "index",
    "pos": "n.",
    "meaning": "ดัชนี",
    "reading": "",
    "ipa": "ˈɪndɛks",
    "level": "B2"
  },
  {
    "id": "b2_1044",
    "word": "indication",
    "pos": "n.",
    "meaning": "ข้อบ่งชี้",
    "reading": "",
    "ipa": "ˌɪndəˈkeɪʃən",
    "level": "B2"
  },
  {
    "id": "b2_1045",
    "word": "inevitable",
    "pos": "adj.",
    "meaning": "หลีกเลี่ยงไม่ได้",
    "reading": "",
    "ipa": "ˌɪˈnɛvətəbəɫ",
    "level": "B2"
  },
  {
    "id": "b2_1046",
    "word": "inevitably",
    "pos": "adv.",
    "meaning": "อย่างหลีกเลี่ยงไม่ได้",
    "reading": "",
    "ipa": "ˌɪˈnɛvətəbɫi",
    "level": "B2"
  },
  {
    "id": "b2_1047",
    "word": "infer",
    "pos": "v.",
    "meaning": "สรุป",
    "reading": "",
    "ipa": "ˌɪnˈfɝ",
    "level": "B2"
  },
  {
    "id": "b2_1048",
    "word": "inflation",
    "pos": "n.",
    "meaning": "เงินเฟ้อ",
    "reading": "",
    "ipa": "ˌɪnˈfɫeɪʃən",
    "level": "B2"
  },
  {
    "id": "b2_1049",
    "word": "info",
    "pos": "n.",
    "meaning": "ข้อมูล",
    "reading": "",
    "ipa": "ˈɪnfoʊ",
    "level": "B2"
  },
  {
    "id": "b2_1050",
    "word": "infrastructure",
    "pos": "n.",
    "meaning": "โครงสร้างพื้นฐาน",
    "reading": "",
    "ipa": "ˌɪnfɹəˈstɹəktʃɝ",
    "level": "B2"
  },
  {
    "id": "b2_1051",
    "word": "inhabitant",
    "pos": "n.",
    "meaning": "ผู้อาศัย",
    "reading": "",
    "ipa": "ɪnˈhæbətənt",
    "level": "B2"
  },
  {
    "id": "b2_1052",
    "word": "inherit",
    "pos": "v.",
    "meaning": "รับมรดก",
    "reading": "",
    "ipa": "ˌɪnˈhɛɹət",
    "level": "B2"
  },
  {
    "id": "b2_1053",
    "word": "ink",
    "pos": "n.",
    "meaning": "หมึก",
    "reading": "",
    "ipa": "ˈɪŋk",
    "level": "B2"
  },
  {
    "id": "b2_1054",
    "word": "innovation",
    "pos": "n.",
    "meaning": "นวัตกรรม",
    "reading": "",
    "ipa": "ˌɪnəˈveɪʃən",
    "level": "B2"
  },
  {
    "id": "b2_1055",
    "word": "innovative",
    "pos": "adj.",
    "meaning": "สร้างสรรค์",
    "reading": "",
    "ipa": "ˈɪnəˌveɪtɪv",
    "level": "B2"
  },
  {
    "id": "b2_1056",
    "word": "input",
    "pos": "n.",
    "meaning": "ข้อมูลนำเข้า",
    "reading": "",
    "ipa": "ˈɪnˌpʊt",
    "level": "B2"
  },
  {
    "id": "b2_1057",
    "word": "insert",
    "pos": "v.",
    "meaning": "แทรก",
    "reading": "",
    "ipa": "ˈɪnˌsɝt",
    "level": "B2"
  },
  {
    "id": "b2_1058",
    "word": "inspector",
    "pos": "n.",
    "meaning": "ผู้ตรวจการ",
    "reading": "",
    "ipa": "ˌɪnˈspɛktɝ",
    "level": "B2"
  },
  {
    "id": "b2_1059",
    "word": "installation",
    "pos": "n.",
    "meaning": "การติดตั้ง",
    "reading": "",
    "ipa": "ˌɪnstəˈɫeɪʃən",
    "level": "B2"
  },
  {
    "id": "b2_1060",
    "word": "instant",
    "pos": "adj.",
    "meaning": "ทันที",
    "reading": "",
    "ipa": "ˈɪnstənt",
    "level": "B2"
  },
  {
    "id": "b2_1061",
    "word": "instantly",
    "pos": "adv.",
    "meaning": "ในทันที",
    "reading": "",
    "ipa": "ˈɪnstəntɫi",
    "level": "B2"
  },
  {
    "id": "b2_1062",
    "word": "integrate",
    "pos": "v.",
    "meaning": "บูรณาการ",
    "reading": "",
    "ipa": "ˈɪnəˌɡɹeɪt",
    "level": "B2"
  },
  {
    "id": "c1_11",
    "word": "intellectual",
    "pos": "n.",
    "meaning": "ปัญญาชน",
    "reading": "",
    "ipa": "ˌɪnəˈɫɛktʃuəɫ",
    "level": "C1"
  },
  {
    "id": "b2_1063",
    "word": "interact",
    "pos": "v.",
    "meaning": "โต้ตอบ",
    "reading": "",
    "ipa": "ˌɪnɝˈækt",
    "level": "B2"
  },
  {
    "id": "b2_1064",
    "word": "interaction",
    "pos": "n.",
    "meaning": "การปฏิสัมพันธ์",
    "reading": "",
    "ipa": "ˌɪnɝˈækʃən",
    "level": "B2"
  },
  {
    "id": "b2_1065",
    "word": "interpretation",
    "pos": "n.",
    "meaning": "การแปลความหมาย",
    "reading": "",
    "ipa": "ˌɪnˌtɝpɹɪˈteɪʃən",
    "level": "B2"
  },
  {
    "id": "b2_1066",
    "word": "interval",
    "pos": "n.",
    "meaning": "ช่วงเวลา",
    "reading": "",
    "ipa": "ˈɪntɝvəɫ",
    "level": "B2"
  },
  {
    "id": "b2_1067",
    "word": "invade",
    "pos": "v.",
    "meaning": "บุกรุก",
    "reading": "",
    "ipa": "ˌɪnˈveɪd",
    "level": "B2"
  },
  {
    "id": "b2_1068",
    "word": "invasion",
    "pos": "n.",
    "meaning": "การบุกรุก",
    "reading": "",
    "ipa": "ˌɪnˈveɪʒən",
    "level": "B2"
  },
  {
    "id": "b2_1069",
    "word": "investor",
    "pos": "n.",
    "meaning": "นักลงทุน",
    "reading": "",
    "ipa": "ˌɪnˈvɛstɝ",
    "level": "B2"
  },
  {
    "id": "b2_1070",
    "word": "isolate",
    "pos": "v.",
    "meaning": "แยก",
    "reading": "",
    "ipa": "ˈaɪsəˌɫeɪt",
    "level": "B2"
  },
  {
    "id": "b2_1071",
    "word": "isolated",
    "pos": "adj.",
    "meaning": "โดดเดี่ยว",
    "reading": "",
    "ipa": "ˈaɪsəˌɫeɪtəd",
    "level": "B2"
  },
  {
    "id": "b2_1072",
    "word": "jail",
    "pos": "n., v.",
    "meaning": "คุก",
    "reading": "",
    "ipa": "ˈdʒeɪɫ",
    "level": "B2"
  },
  {
    "id": "b2_1073",
    "word": "jet",
    "pos": "n.",
    "meaning": "เครื่องบินเจ็ต",
    "reading": "",
    "ipa": "ˈdʒɛt",
    "level": "B2"
  },
  {
    "id": "b2_1074",
    "word": "joint",
    "pos": "adj., n.",
    "meaning": "ร่วมกัน",
    "reading": "",
    "ipa": "ˈdʒɔɪnt",
    "level": "B2"
  },
  {
    "id": "b2_1075",
    "word": "journalism",
    "pos": "n.",
    "meaning": "วารสารศาสตร์",
    "reading": "",
    "ipa": "ˈdʒɝnəˌɫɪzəm",
    "level": "B2"
  },
  {
    "id": "b2_1076",
    "word": "jury",
    "pos": "n.",
    "meaning": "คณะลูกขุน",
    "reading": "",
    "ipa": "ˈdʒʊɹi",
    "level": "B2"
  },
  {
    "id": "b2_1077",
    "word": "kit",
    "pos": "n.",
    "meaning": "ชุดอุปกรณ์",
    "reading": "",
    "ipa": "ˈkɪt",
    "level": "B2"
  },
  {
    "id": "b2_1078",
    "word": "ladder",
    "pos": "n.",
    "meaning": "บันได",
    "reading": "",
    "ipa": "ˈɫædɝ",
    "level": "B2"
  },
  {
    "id": "b2_1079",
    "word": "landing",
    "pos": "n.",
    "meaning": "การลงจอด",
    "reading": "",
    "ipa": "ˈɫændɪŋ",
    "level": "B2"
  },
  {
    "id": "b2_1080",
    "word": "lane",
    "pos": "n.",
    "meaning": "เลน",
    "reading": "",
    "ipa": "ˈɫeɪn",
    "level": "B2"
  },
  {
    "id": "b2_1081",
    "word": "lately",
    "pos": "adv.",
    "meaning": "เมื่อเร็ว ๆ นี้",
    "reading": "",
    "ipa": "ˈɫeɪtɫi",
    "level": "B2"
  },
  {
    "id": "b2_1082",
    "word": "leaflet",
    "pos": "n.",
    "meaning": "ใบปลิว",
    "reading": "",
    "ipa": "ˈɫifɫət",
    "level": "B2"
  },
  {
    "id": "b2_1083",
    "word": "legend",
    "pos": "n.",
    "meaning": "ตำนาน",
    "reading": "",
    "ipa": "ˈɫɛdʒənd",
    "level": "B2"
  },
  {
    "id": "b2_1084",
    "word": "lens",
    "pos": "n.",
    "meaning": "เลนส์",
    "reading": "",
    "ipa": "ˈɫɛnz",
    "level": "B2"
  },
  {
    "id": "b2_1085",
    "word": "lifetime",
    "pos": "n.",
    "meaning": "ช่วงชีวิต",
    "reading": "",
    "ipa": "ˈɫaɪfˌtaɪm",
    "level": "B2"
  },
  {
    "id": "b2_1086",
    "word": "lighting",
    "pos": "n.",
    "meaning": "การจัดแสง",
    "reading": "",
    "ipa": "ˈɫaɪtɪŋ",
    "level": "B2"
  },
  {
    "id": "b2_1087",
    "word": "likewise",
    "pos": "adv.",
    "meaning": "เช่นเดียวกัน",
    "reading": "",
    "ipa": "ˈɫaɪˌkwaɪz",
    "level": "B2"
  },
  {
    "id": "b2_1088",
    "word": "limitation",
    "pos": "n.",
    "meaning": "ข้อจำกัด",
    "reading": "",
    "ipa": "ˌɫɪmɪˈteɪʃən",
    "level": "B2"
  },
  {
    "id": "b2_1089",
    "word": "literally",
    "pos": "adv.",
    "meaning": "อย่างแท้จริง",
    "reading": "",
    "ipa": "ˈɫɪtɝəɫi",
    "level": "B2"
  },
  {
    "id": "b2_1090",
    "word": "literary",
    "pos": "adj.",
    "meaning": "เกี่ยวกับวรรณกรรม",
    "reading": "",
    "ipa": "ˈɫɪtɝˌɛɹi",
    "level": "B2"
  },
  {
    "id": "b2_1091",
    "word": "litre",
    "pos": "n.",
    "meaning": "ลิตร",
    "reading": "",
    "ipa": "ˈɫitɝ",
    "level": "B2"
  },
  {
    "id": "b2_1092",
    "word": "litter",
    "pos": "n.",
    "meaning": "ขยะ",
    "reading": "",
    "ipa": "ˈɫɪtɝ",
    "level": "B2"
  },
  {
    "id": "b2_1093",
    "word": "logo",
    "pos": "n.",
    "meaning": "โลโก้",
    "reading": "",
    "ipa": "ˈɫoʊɡoʊ",
    "level": "B2"
  },
  {
    "id": "b2_1094",
    "word": "lottery",
    "pos": "n.",
    "meaning": "ล็อตเตอรี่",
    "reading": "",
    "ipa": "ˈɫɑtɝi",
    "level": "B2"
  },
  {
    "id": "b2_1095",
    "word": "loyal",
    "pos": "adj.",
    "meaning": "ซื่อสัตย์",
    "reading": "",
    "ipa": "ˈɫɔɪəɫ",
    "level": "B2"
  },
  {
    "id": "b2_1096",
    "word": "lyric",
    "pos": "n.",
    "meaning": "เนื้อเพลง",
    "reading": "",
    "ipa": "ˈɫɪɹɪk",
    "level": "B2"
  },
  {
    "id": "b2_1097",
    "word": "magnificent",
    "pos": "adj.",
    "meaning": "งดงาม",
    "reading": "",
    "ipa": "mæɡˈnɪfəsənt",
    "level": "B2"
  },
  {
    "id": "b2_1098",
    "word": "make-up",
    "pos": "n.",
    "meaning": "การแต่งหน้า",
    "reading": "",
    "ipa": "ˈmeɪˌkəp",
    "level": "B2"
  },
  {
    "id": "b2_1099",
    "word": "making",
    "pos": "n.",
    "meaning": "การทำ",
    "reading": "",
    "ipa": "ˈmeɪkɪŋ",
    "level": "B2"
  },
  {
    "id": "b2_1100",
    "word": "manufacture",
    "pos": "v.",
    "meaning": "การผลิต",
    "reading": "",
    "ipa": "ˌmænjəˈfæktʃɝ",
    "level": "B2"
  },
  {
    "id": "b2_1101",
    "word": "manufacturing",
    "pos": "n.",
    "meaning": "การผลิตสินค้า",
    "reading": "",
    "ipa": "ˌmænjəˈfæktʃɝɪŋ",
    "level": "B2"
  },
  {
    "id": "b2_1102",
    "word": "marathon",
    "pos": "n.",
    "meaning": "วิ่งมาราธอน",
    "reading": "",
    "ipa": "ˈmɛɹəˌθɑn",
    "level": "B2"
  },
  {
    "id": "b2_1103",
    "word": "margin",
    "pos": "n.",
    "meaning": "ขอบ",
    "reading": "",
    "ipa": "ˈmɑɹdʒən",
    "level": "B2"
  },
  {
    "id": "b2_1104",
    "word": "marker",
    "pos": "n.",
    "meaning": "เครื่องหมาย",
    "reading": "",
    "ipa": "ˈmɑɹkɝ",
    "level": "B2"
  },
  {
    "id": "b2_1105",
    "word": "martial",
    "pos": "adj.",
    "meaning": "เกี่ยวกับการต่อสู้",
    "reading": "",
    "ipa": "ˈmɑɹʃəɫ",
    "level": "B2"
  },
  {
    "id": "b2_1106",
    "word": "mate",
    "pos": "n., v.",
    "meaning": "เพื่อน",
    "reading": "",
    "ipa": "ˈmeɪt",
    "level": "B2"
  },
  {
    "id": "b2_1107",
    "word": "mayor",
    "pos": "n.",
    "meaning": "นายกเทศมนตรี",
    "reading": "",
    "ipa": "ˈmeɪɝ",
    "level": "B2"
  },
  {
    "id": "b2_1108",
    "word": "mechanic",
    "pos": "n.",
    "meaning": "ช่างเครื่อง",
    "reading": "",
    "ipa": "məˈkænɪk",
    "level": "B2"
  },
  {
    "id": "b2_1109",
    "word": "mechanical",
    "pos": "adj.",
    "meaning": "เชิงกล",
    "reading": "",
    "ipa": "məˈkænɪkəɫ",
    "level": "B2"
  },
  {
    "id": "b2_1110",
    "word": "mechanism",
    "pos": "n.",
    "meaning": "กลไก",
    "reading": "",
    "ipa": "ˈmɛkəˌnɪzəm",
    "level": "B2"
  },
  {
    "id": "b2_1111",
    "word": "medal",
    "pos": "n.",
    "meaning": "เหรียญ",
    "reading": "",
    "ipa": "ˈmɛdəɫ",
    "level": "B2"
  },
  {
    "id": "b2_1112",
    "word": "medication",
    "pos": "n.",
    "meaning": "ยา",
    "reading": "",
    "ipa": "ˌmɛdəˈkeɪʃən",
    "level": "B2"
  },
  {
    "id": "b2_1113",
    "word": "membership",
    "pos": "n.",
    "meaning": "การเป็นสมาชิก",
    "reading": "",
    "ipa": "ˈmɛmbɝˌʃɪp",
    "level": "B2"
  },
  {
    "id": "b2_1114",
    "word": "memorable",
    "pos": "adj.",
    "meaning": "น่าจดจำ",
    "reading": "",
    "ipa": "ˈmɛmɝəbəɫ",
    "level": "B2"
  },
  {
    "id": "b2_1115",
    "word": "metaphor",
    "pos": "n.",
    "meaning": "อุปมา",
    "reading": "",
    "ipa": "ˈmɛtəfɔɹ",
    "level": "B2"
  },
  {
    "id": "b2_1116",
    "word": "miner",
    "pos": "n.",
    "meaning": "คนขุดเหมือง",
    "reading": "",
    "ipa": "ˈmaɪnɝ",
    "level": "B2"
  },
  {
    "id": "b2_1117",
    "word": "miserable",
    "pos": "adj.",
    "meaning": "ทุกข์ทรมาน",
    "reading": "",
    "ipa": "ˈmɪzɝəbəɫ",
    "level": "B2"
  },
  {
    "id": "b2_1118",
    "word": "mode",
    "pos": "n.",
    "meaning": "โหมด",
    "reading": "",
    "ipa": "ˈmoʊd",
    "level": "B2"
  },
  {
    "id": "b2_1119",
    "word": "modest",
    "pos": "adj.",
    "meaning": "ถ่อมตัว",
    "reading": "",
    "ipa": "ˈmɑdəst",
    "level": "B2"
  },
  {
    "id": "b2_1120",
    "word": "monster",
    "pos": "n.",
    "meaning": "สัตว์ประหลาด",
    "reading": "",
    "ipa": "ˈmɑnstɝ",
    "level": "B2"
  },
  {
    "id": "b2_1121",
    "word": "monthly",
    "pos": "adj.",
    "meaning": "รายเดือน",
    "reading": "",
    "ipa": "ˈmənθɫi",
    "level": "B2"
  },
  {
    "id": "b2_1122",
    "word": "monument",
    "pos": "n.",
    "meaning": "อนุสาวรีย์",
    "reading": "",
    "ipa": "ˈmɑnjəmənt",
    "level": "B2"
  },
  {
    "id": "b2_1123",
    "word": "moreover",
    "pos": "adv.",
    "meaning": "นอกจากนี้",
    "reading": "",
    "ipa": "mɔˈɹoʊvɝ",
    "level": "B2"
  },
  {
    "id": "b2_1124",
    "word": "mortgage",
    "pos": "n.",
    "meaning": "จำนอง",
    "reading": "",
    "ipa": "ˈmɔɹɡədʒ",
    "level": "B2"
  },
  {
    "id": "b2_1125",
    "word": "mosque",
    "pos": "n.",
    "meaning": "มัสยิด",
    "reading": "",
    "ipa": "ˈmɑsk",
    "level": "B2"
  },
  {
    "id": "b2_1126",
    "word": "motion",
    "pos": "n.",
    "meaning": "การเคลื่อนไหว",
    "reading": "",
    "ipa": "ˈmoʊʃən",
    "level": "B2"
  },
  {
    "id": "b2_1127",
    "word": "motivate",
    "pos": "v.",
    "meaning": "กระตุ้น",
    "reading": "",
    "ipa": "ˈmoʊtəˌveɪt",
    "level": "B2"
  },
  {
    "id": "b2_1128",
    "word": "motivation",
    "pos": "n.",
    "meaning": "แรงจูงใจ",
    "reading": "",
    "ipa": "ˌmoʊtəˈveɪʃən",
    "level": "B2"
  },
  {
    "id": "b2_1129",
    "word": "moving",
    "pos": "adj.",
    "meaning": "เคลื่อนไหว",
    "reading": "",
    "ipa": "ˈmuvɪŋ",
    "level": "B2"
  },
  {
    "id": "b2_1130",
    "word": "myth",
    "pos": "n.",
    "meaning": "ตำนาน",
    "reading": "",
    "ipa": "ˈmɪθ",
    "level": "B2"
  },
  {
    "id": "b2_1131",
    "word": "naked",
    "pos": "adj.",
    "meaning": "เปลือย",
    "reading": "",
    "ipa": "ˈneɪkəd",
    "level": "B2"
  },
  {
    "id": "b2_1132",
    "word": "nasty",
    "pos": "adj.",
    "meaning": "น่าเกลียด",
    "reading": "",
    "ipa": "ˈnæsti",
    "level": "B2"
  },
  {
    "id": "b2_1133",
    "word": "navigation",
    "pos": "n.",
    "meaning": "การนำทาง",
    "reading": "",
    "ipa": "ˈnævəˈɡeɪʃən",
    "level": "B2"
  },
  {
    "id": "b2_1134",
    "word": "nearby",
    "pos": "adj., adv.",
    "meaning": "ใกล้เคียง",
    "reading": "",
    "ipa": "ˈnɪɹˈbaɪ",
    "level": "B2"
  },
  {
    "id": "b2_1135",
    "word": "necessity",
    "pos": "n.",
    "meaning": "ความจำเป็น",
    "reading": "",
    "ipa": "nəˈsɛsəti",
    "level": "B2"
  },
  {
    "id": "b2_1136",
    "word": "negotiate",
    "pos": "v.",
    "meaning": "เจรจา",
    "reading": "",
    "ipa": "nəˈɡoʊʃiˌeɪt",
    "level": "B2"
  },
  {
    "id": "b2_1137",
    "word": "negotiation",
    "pos": "n.",
    "meaning": "การเจรจา",
    "reading": "",
    "ipa": "nɪˌɡoʊʃiˈeɪʃən",
    "level": "B2"
  },
  {
    "id": "b2_1138",
    "word": "neutral",
    "pos": "adj.",
    "meaning": "เป็นกลาง",
    "reading": "",
    "ipa": "ˈnutɹəɫ",
    "level": "B2"
  },
  {
    "id": "b2_1139",
    "word": "newly",
    "pos": "adv.",
    "meaning": "ใหม่",
    "reading": "",
    "ipa": "ˈnuɫi",
    "level": "B2"
  },
  {
    "id": "b2_1140",
    "word": "norm",
    "pos": "n.",
    "meaning": "บรรทัดฐาน",
    "reading": "",
    "ipa": "ˈnɔɹm",
    "level": "B2"
  },
  {
    "id": "b2_1141",
    "word": "notebook",
    "pos": "n.",
    "meaning": "สมุดโน้ต",
    "reading": "",
    "ipa": "ˈnoʊtˌbʊk",
    "level": "B2"
  },
  {
    "id": "b2_1142",
    "word": "novelist",
    "pos": "n.",
    "meaning": "นักเขียนนวนิยาย",
    "reading": "",
    "ipa": "ˈnɑvəɫəst",
    "level": "B2"
  },
  {
    "id": "b2_1143",
    "word": "nowadays",
    "pos": "adv.",
    "meaning": "ปัจจุบัน",
    "reading": "",
    "ipa": "ˈnaʊəˌdeɪz",
    "level": "B2"
  },
  {
    "id": "b2_1144",
    "word": "nursing",
    "pos": "adj.",
    "meaning": "พยาบาล",
    "reading": "",
    "ipa": "ˈnɝsɪŋ",
    "level": "B2"
  },
  {
    "id": "b2_1145",
    "word": "nutrition",
    "pos": "n.",
    "meaning": "โภชนาการ",
    "reading": "",
    "ipa": "nuˈtɹɪʃən",
    "level": "B2"
  },
  {
    "id": "b2_1146",
    "word": "obesity",
    "pos": "n.",
    "meaning": "โรคอ้วน",
    "reading": "",
    "ipa": "əˈbisəti",
    "level": "B2"
  },
  {
    "id": "b2_1147",
    "word": "observer",
    "pos": "n.",
    "meaning": "ผู้สังเกตการณ์",
    "reading": "",
    "ipa": "əbˈzɝvɝ",
    "level": "B2"
  },
  {
    "id": "b2_1148",
    "word": "obstacle",
    "pos": "n.",
    "meaning": "อุปสรรค",
    "reading": "",
    "ipa": "ˈɑbstəkəɫ",
    "level": "B2"
  },
  {
    "id": "b2_1149",
    "word": "occupation",
    "pos": "n.",
    "meaning": "อาชีพ",
    "reading": "",
    "ipa": "ˌɑkjəˈpeɪʃən",
    "level": "B2"
  },
  {
    "id": "b2_1150",
    "word": "occupy",
    "pos": "v.",
    "meaning": "ยึดครอง",
    "reading": "",
    "ipa": "ˈɑkjəˌpaɪ",
    "level": "B2"
  },
  {
    "id": "b2_1151",
    "word": "offender",
    "pos": "n.",
    "meaning": "ผู้กระทำผิด",
    "reading": "",
    "ipa": "əˈfɛndɝ",
    "level": "B2"
  },
  {
    "id": "b2_1152",
    "word": "ongoing",
    "pos": "adj.",
    "meaning": "ต่อเนื่อง",
    "reading": "",
    "ipa": "ˈɑnˌɡoʊɪŋ",
    "level": "B2"
  },
  {
    "id": "b2_1153",
    "word": "openly",
    "pos": "adv.",
    "meaning": "ที่เปิดเผย",
    "reading": "",
    "ipa": "ˈoʊpənɫi",
    "level": "B2"
  },
  {
    "id": "b2_1154",
    "word": "opera",
    "pos": "n.",
    "meaning": "อุปรากร",
    "reading": "",
    "ipa": "ˈɑpɹə",
    "level": "B2"
  },
  {
    "id": "b2_1155",
    "word": "operator",
    "pos": "n.",
    "meaning": "ผู้ปฏิบัติงาน",
    "reading": "",
    "ipa": "ˈɑpɝˌeɪtɝ",
    "level": "B2"
  },
  {
    "id": "b2_1156",
    "word": "optimistic",
    "pos": "adj.",
    "meaning": "มองโลกในแง่ดี",
    "reading": "",
    "ipa": "ˌɑptəˈmɪstɪk",
    "level": "B2"
  },
  {
    "id": "b2_1157",
    "word": "orchestra",
    "pos": "n.",
    "meaning": "วงดนตรี",
    "reading": "",
    "ipa": "ˈɔɹkəstɹə",
    "level": "B2"
  },
  {
    "id": "b2_1158",
    "word": "organic",
    "pos": "adj.",
    "meaning": "ออร์แกนิก",
    "reading": "",
    "ipa": "ɔɹˈɡænɪk",
    "level": "B2"
  },
  {
    "id": "b2_1159",
    "word": "outfit",
    "pos": "n.",
    "meaning": "ชุดเสื้อผ้า",
    "reading": "",
    "ipa": "ˈaʊtˌfɪt",
    "level": "B2"
  },
  {
    "id": "b2_1160",
    "word": "output",
    "pos": "n.",
    "meaning": "ผลลัพธ์",
    "reading": "",
    "ipa": "ˈaʊtˌpʊt",
    "level": "B2"
  },
  {
    "id": "b2_1161",
    "word": "outstanding",
    "pos": "adj.",
    "meaning": "โดดเด่น",
    "reading": "",
    "ipa": "ˌaʊtˈstændɪŋ",
    "level": "B2"
  },
  {
    "id": "b2_1162",
    "word": "overcome",
    "pos": "v.",
    "meaning": "เอาชนะ",
    "reading": "",
    "ipa": "ˈoʊvɝˌkəm",
    "level": "B2"
  },
  {
    "id": "b2_1163",
    "word": "overnight",
    "pos": "adv.",
    "meaning": "ข้ามคืน",
    "reading": "",
    "ipa": "ˈoʊvɝˈnaɪt",
    "level": "B2"
  },
  {
    "id": "b2_1164",
    "word": "overseas",
    "pos": "adv., adj.",
    "meaning": "ต่างประเทศ",
    "reading": "",
    "ipa": "ˈoʊvɝˈsiz",
    "level": "B2"
  },
  {
    "id": "b2_1165",
    "word": "ownership",
    "pos": "n.",
    "meaning": "การเป็นเจ้าของ",
    "reading": "",
    "ipa": "ˈoʊnɝˌʃɪp",
    "level": "B2"
  },
  {
    "id": "b2_1166",
    "word": "oxygen",
    "pos": "n.",
    "meaning": "ออกซิเจน",
    "reading": "",
    "ipa": "ˈɑksədʒən",
    "level": "B2"
  },
  {
    "id": "b2_1167",
    "word": "packet",
    "pos": "n.",
    "meaning": "ห่อ",
    "reading": "",
    "ipa": "ˈpækət",
    "level": "B2"
  },
  {
    "id": "b2_1168",
    "word": "palm",
    "pos": "n.",
    "meaning": "ฝ่ามือ",
    "reading": "",
    "ipa": "ˈpɑɫm",
    "level": "B2"
  },
  {
    "id": "b2_1169",
    "word": "panic",
    "pos": "n.",
    "meaning": "ตื่นตระหนก",
    "reading": "",
    "ipa": "ˈpænɪk",
    "level": "B2"
  },
  {
    "id": "b2_1170",
    "word": "parade",
    "pos": "n.",
    "meaning": "ขบวนพาเหรด",
    "reading": "",
    "ipa": "pɝˈeɪd",
    "level": "B2"
  },
  {
    "id": "b2_1171",
    "word": "parallel",
    "pos": "adj., n.",
    "meaning": "ขนานกัน",
    "reading": "",
    "ipa": "ˈpɛɹəˌɫɛɫ",
    "level": "B2"
  },
  {
    "id": "b2_1172",
    "word": "participation",
    "pos": "n.",
    "meaning": "การมีส่วนร่วม",
    "reading": "",
    "ipa": "pɑɹˌtɪsəˈpeɪʃən",
    "level": "B2"
  },
  {
    "id": "b2_1173",
    "word": "partnership",
    "pos": "n.",
    "meaning": "การเป็นหุ้นส่วน",
    "reading": "",
    "ipa": "ˈpɑɹtnɝˌʃɪp",
    "level": "B2"
  },
  {
    "id": "b2_1174",
    "word": "part-time",
    "pos": "adj./adv.",
    "meaning": "พาร์ทไทม์",
    "reading": "",
    "ipa": "ˈpɑɹtˈtaɪm",
    "level": "B2"
  },
  {
    "id": "b2_1175",
    "word": "passionate",
    "pos": "adj.",
    "meaning": "หลงใหล",
    "reading": "",
    "ipa": "ˈpæʃənət",
    "level": "B2"
  },
  {
    "id": "b2_1176",
    "word": "password",
    "pos": "n.",
    "meaning": "รหัสผ่าน",
    "reading": "",
    "ipa": "ˈpæsˌwɝd",
    "level": "B2"
  },
  {
    "id": "b2_1177",
    "word": "patience",
    "pos": "n.",
    "meaning": "ความอดทน",
    "reading": "",
    "ipa": "ˈpeɪʃəns",
    "level": "B2"
  },
  {
    "id": "b2_1178",
    "word": "pause",
    "pos": "v., n.",
    "meaning": "หยุดชั่วคราว",
    "reading": "",
    "ipa": "ˈpɔz",
    "level": "B2"
  },
  {
    "id": "b2_1179",
    "word": "peer",
    "pos": "n.",
    "meaning": "เพื่อน",
    "reading": "",
    "ipa": "ˈpɪɹ",
    "level": "B2"
  },
  {
    "id": "b2_1180",
    "word": "penalty",
    "pos": "n.",
    "meaning": "โทษ",
    "reading": "",
    "ipa": "ˈpɛnəɫti",
    "level": "B2"
  },
  {
    "id": "b2_1181",
    "word": "perceive",
    "pos": "v.",
    "meaning": "รับรู้",
    "reading": "",
    "ipa": "pɝˈsiv",
    "level": "B2"
  },
  {
    "id": "b2_1182",
    "word": "perception",
    "pos": "n.",
    "meaning": "การรับรู้",
    "reading": "",
    "ipa": "pɝˈsɛpʃən",
    "level": "B2"
  },
  {
    "id": "b2_1183",
    "word": "permanently",
    "pos": "adv.",
    "meaning": "อย่างถาวร",
    "reading": "",
    "ipa": "ˈpɝmənəntɫi",
    "level": "B2"
  },
  {
    "id": "b2_1184",
    "word": "pill",
    "pos": "n.",
    "meaning": "ยาเม็ด",
    "reading": "",
    "ipa": "ˈpɪɫ",
    "level": "B2"
  },
  {
    "id": "b2_1185",
    "word": "pity",
    "pos": "n.",
    "meaning": "ความสงสาร",
    "reading": "",
    "ipa": "ˈpɪti",
    "level": "B2"
  },
  {
    "id": "b2_1186",
    "word": "placement",
    "pos": "n.",
    "meaning": "การจัดวาง",
    "reading": "",
    "ipa": "ˈpɫeɪsmənt",
    "level": "B2"
  },
  {
    "id": "b2_1187",
    "word": "portion",
    "pos": "n.",
    "meaning": "ส่วน",
    "reading": "",
    "ipa": "ˈpɔɹʃən",
    "level": "B2"
  },
  {
    "id": "b2_1188",
    "word": "potentially",
    "pos": "adv.",
    "meaning": "เป็นไปได้",
    "reading": "",
    "ipa": "pəˈtɛnʃəɫi",
    "level": "B2"
  },
  {
    "id": "b2_1189",
    "word": "precede",
    "pos": "v.",
    "meaning": "นำหน้า",
    "reading": "",
    "ipa": "pɹɪˈsid",
    "level": "B2"
  },
  {
    "id": "b2_1190",
    "word": "precious",
    "pos": "adj.",
    "meaning": "มีค่า",
    "reading": "",
    "ipa": "ˈpɹɛʃəs",
    "level": "B2"
  },
  {
    "id": "b2_1191",
    "word": "precise",
    "pos": "adj.",
    "meaning": "แม่นยำ",
    "reading": "",
    "ipa": "pɹiˈsaɪs",
    "level": "B2"
  },
  {
    "id": "b2_1192",
    "word": "precisely",
    "pos": "adv.",
    "meaning": "อย่างแม่นยำ",
    "reading": "",
    "ipa": "pɹiˈsaɪsɫi",
    "level": "B2"
  },
  {
    "id": "b2_1193",
    "word": "predictable",
    "pos": "adj.",
    "meaning": "คาดการณ์ได้",
    "reading": "",
    "ipa": "pɹiˈdɪktəbəɫ",
    "level": "B2"
  },
  {
    "id": "b2_1194",
    "word": "preference",
    "pos": "n.",
    "meaning": "ความชอบ",
    "reading": "",
    "ipa": "ˈpɹɛfɝəns",
    "level": "B2"
  },
  {
    "id": "b2_1195",
    "word": "pride",
    "pos": "n.",
    "meaning": "ความภูมิใจ",
    "reading": "",
    "ipa": "ˈpɹaɪd",
    "level": "B2"
  },
  {
    "id": "b2_1196",
    "word": "primarily",
    "pos": "adv.",
    "meaning": "เป็นหลัก",
    "reading": "",
    "ipa": "pɹaɪˈmɛɹəɫi",
    "level": "B2"
  },
  {
    "id": "c1_12",
    "word": "principal",
    "pos": "n.",
    "meaning": "ครูใหญ่",
    "reading": "",
    "ipa": "ˈpɹɪnsəpəɫ",
    "level": "C1"
  },
  {
    "id": "b2_1197",
    "word": "prior",
    "pos": "adj.",
    "meaning": "ก่อนหน้านี้",
    "reading": "",
    "ipa": "ˈpɹaɪɝ",
    "level": "B2"
  },
  {
    "id": "b2_1198",
    "word": "probability",
    "pos": "n.",
    "meaning": "ความน่าจะเป็น",
    "reading": "",
    "ipa": "ˌpɹɑbəˈbɪɫəˌti",
    "level": "B2"
  },
  {
    "id": "b2_1199",
    "word": "probable",
    "pos": "adj.",
    "meaning": "ที่เป็นไปได้",
    "reading": "",
    "ipa": "ˈpɹɑbəbəɫ",
    "level": "B2"
  },
  {
    "id": "b2_1200",
    "word": "proceed",
    "pos": "v.",
    "meaning": "ดำเนินการ",
    "reading": "",
    "ipa": "pɝˈsid",
    "level": "B2"
  },
  {
    "id": "b2_1201",
    "word": "programming",
    "pos": "n.",
    "meaning": "การเขียนโปรแกรม",
    "reading": "",
    "ipa": "ˈpɹoʊˌɡɹæmɪŋ",
    "level": "B2"
  },
  {
    "id": "b2_1202",
    "word": "progressive",
    "pos": "adj.",
    "meaning": "ก้าวหน้า",
    "reading": "",
    "ipa": "pɹəˈɡɹɛsɪv",
    "level": "B2"
  },
  {
    "id": "b2_1203",
    "word": "prohibit",
    "pos": "v.",
    "meaning": "ห้าม",
    "reading": "",
    "ipa": "pɹoʊˈhɪbət",
    "level": "B2"
  },
  {
    "id": "b2_1204",
    "word": "promising",
    "pos": "adj.",
    "meaning": "มีแนวโน้ม",
    "reading": "",
    "ipa": "ˈpɹɑməsɪŋ",
    "level": "B2"
  },
  {
    "id": "b2_1205",
    "word": "promotion",
    "pos": "n.",
    "meaning": "การส่งเสริม",
    "reading": "",
    "ipa": "pɝˈmoʊʃən",
    "level": "B2"
  },
  {
    "id": "b2_1206",
    "word": "prompt",
    "pos": "v.",
    "meaning": "เตือนความจำ",
    "reading": "",
    "ipa": "ˈpɹɑmpt",
    "level": "B2"
  },
  {
    "id": "b2_1207",
    "word": "proportion",
    "pos": "n.",
    "meaning": "สัดส่วน",
    "reading": "",
    "ipa": "pɹəˈpɔɹʃən",
    "level": "B2"
  },
  {
    "id": "b2_1208",
    "word": "protein",
    "pos": "n.",
    "meaning": "โปรตีน",
    "reading": "",
    "ipa": "ˈpɹoʊˌtin",
    "level": "B2"
  },
  {
    "id": "b2_1209",
    "word": "protester",
    "pos": "n.",
    "meaning": "ผู้ประท้วง",
    "reading": "",
    "ipa": "ˈpɹoʊˌtɛstɝ",
    "level": "B2"
  },
  {
    "id": "b2_1210",
    "word": "psychological",
    "pos": "adj.",
    "meaning": "ทางจิตวิทยา",
    "reading": "",
    "ipa": "ˌsaɪkəˈɫɑdʒɪkəɫ",
    "level": "B2"
  },
  {
    "id": "b2_1211",
    "word": "publicity",
    "pos": "n.",
    "meaning": "การประชาสัมพันธ์",
    "reading": "",
    "ipa": "pəˈbɫɪsəti",
    "level": "B2"
  },
  {
    "id": "b2_1212",
    "word": "publishing",
    "pos": "n.",
    "meaning": "การพิมพ์",
    "reading": "",
    "ipa": "ˈpəbɫɪʃɪŋ",
    "level": "B2"
  },
  {
    "id": "b2_1213",
    "word": "punk",
    "pos": "n.",
    "meaning": "พังก์",
    "reading": "",
    "ipa": "ˈpəŋk",
    "level": "B2"
  },
  {
    "id": "b2_1214",
    "word": "purely",
    "pos": "adv.",
    "meaning": "ล้วน ๆ",
    "reading": "",
    "ipa": "ˈpjʊɹɫi",
    "level": "B2"
  },
  {
    "id": "b2_1215",
    "word": "pursuit",
    "pos": "n.",
    "meaning": "การไล่ตาม",
    "reading": "",
    "ipa": "pɝˈsut",
    "level": "B2"
  },
  {
    "id": "b2_1216",
    "word": "puzzle",
    "pos": "n.",
    "meaning": "ปริศนา",
    "reading": "",
    "ipa": "ˈpəzəɫ",
    "level": "B2"
  },
  {
    "id": "b2_1217",
    "word": "questionnaire",
    "pos": "n.",
    "meaning": "แบบสอบถาม",
    "reading": "",
    "ipa": "ˌkwɛstʃəˈnɛɹ",
    "level": "B2"
  },
  {
    "id": "b2_1218",
    "word": "racial",
    "pos": "adj.",
    "meaning": "เกี่ยวกับเชื้อชาติ",
    "reading": "",
    "ipa": "ˈɹeɪʃəɫ",
    "level": "B2"
  },
  {
    "id": "b2_1219",
    "word": "racism",
    "pos": "n.",
    "meaning": "การเหยียดเชื้อชาติ",
    "reading": "",
    "ipa": "ˈɹeɪˌsɪzəm",
    "level": "B2"
  },
  {
    "id": "b2_1220",
    "word": "racist",
    "pos": "adj., n.",
    "meaning": "ที่เหยียดเชื้อชาติ",
    "reading": "",
    "ipa": "ˈɹeɪsɪst",
    "level": "B2"
  },
  {
    "id": "b2_1221",
    "word": "radiation",
    "pos": "n.",
    "meaning": "รังสี",
    "reading": "",
    "ipa": "ˌɹeɪdiˈeɪʃən",
    "level": "B2"
  },
  {
    "id": "b2_1222",
    "word": "rail",
    "pos": "n.",
    "meaning": "ทางรถไฟ",
    "reading": "",
    "ipa": "ˈɹeɪɫ",
    "level": "B2"
  },
  {
    "id": "b2_1223",
    "word": "random",
    "pos": "adj.",
    "meaning": "สุ่ม",
    "reading": "",
    "ipa": "ˈɹændəm",
    "level": "B2"
  },
  {
    "id": "b2_1224",
    "word": "rat",
    "pos": "n.",
    "meaning": "หนู",
    "reading": "",
    "ipa": "ˈɹæt",
    "level": "B2"
  },
  {
    "id": "b2_1225",
    "word": "rating",
    "pos": "n.",
    "meaning": "การจัดอันดับ",
    "reading": "",
    "ipa": "ˈɹeɪtɪŋ",
    "level": "B2"
  },
  {
    "id": "b2_1226",
    "word": "reasonably",
    "pos": "adv.",
    "meaning": "สมเหตุสมผล",
    "reading": "",
    "ipa": "ˈɹizənəbɫi",
    "level": "B2"
  },
  {
    "id": "b2_1227",
    "word": "rebuild",
    "pos": "v.",
    "meaning": "สร้างใหม่",
    "reading": "",
    "ipa": "ɹiˈbɪɫd",
    "level": "B2"
  },
  {
    "id": "b2_1228",
    "word": "receiver",
    "pos": "n.",
    "meaning": "ผู้รับ",
    "reading": "",
    "ipa": "ɹəˈsivɝ",
    "level": "B2"
  },
  {
    "id": "b2_1229",
    "word": "recession",
    "pos": "n.",
    "meaning": "ภาวะถดถอย",
    "reading": "",
    "ipa": "ˌɹiˈsɛʃən",
    "level": "B2"
  },
  {
    "id": "b2_1230",
    "word": "reckon",
    "pos": "v.",
    "meaning": "พิจารณาว่า",
    "reading": "",
    "ipa": "ˈɹɛkən",
    "level": "B2"
  },
  {
    "id": "b2_1231",
    "word": "recognition",
    "pos": "n.",
    "meaning": "การยอมรับ",
    "reading": "",
    "ipa": "ˌɹɛkəɡˈnɪʃən",
    "level": "B2"
  },
  {
    "id": "b2_1232",
    "word": "recovery",
    "pos": "n.",
    "meaning": "การฟื้นตัว",
    "reading": "",
    "ipa": "ɹɪˈkəvɝi",
    "level": "B2"
  },
  {
    "id": "b2_1233",
    "word": "recruit",
    "pos": "v., n.",
    "meaning": "รับสมัคร",
    "reading": "",
    "ipa": "ɹəˈkɹut",
    "level": "B2"
  },
  {
    "id": "b2_1234",
    "word": "recruitment",
    "pos": "n.",
    "meaning": "การรับสมัคร",
    "reading": "",
    "ipa": "ɹəˈkɹutmənt",
    "level": "B2"
  },
  {
    "id": "b2_1235",
    "word": "referee",
    "pos": "n.",
    "meaning": "กรรมการ",
    "reading": "",
    "ipa": "ˌɹɛfɝˈi",
    "level": "B2"
  },
  {
    "id": "b2_1236",
    "word": "refugee",
    "pos": "n.",
    "meaning": "ผู้ลี้ภัย",
    "reading": "",
    "ipa": "ˈɹɛfjudʒi",
    "level": "B2"
  },
  {
    "id": "b2_1237",
    "word": "registration",
    "pos": "n.",
    "meaning": "การลงทะเบียน",
    "reading": "",
    "ipa": "ˌɹɛdʒɪˈstɹeɪʃən",
    "level": "B2"
  },
  {
    "id": "b2_1238",
    "word": "regulate",
    "pos": "v.",
    "meaning": "ควบคุม",
    "reading": "",
    "ipa": "ˈɹɛɡjəˌɫeɪt",
    "level": "B2"
  },
  {
    "id": "b2_1239",
    "word": "reinforce",
    "pos": "v.",
    "meaning": "เสริมกำลัง",
    "reading": "",
    "ipa": "ˌɹiɪnˈfɔɹs",
    "level": "B2"
  },
  {
    "id": "b2_1240",
    "word": "relieve",
    "pos": "v.",
    "meaning": "บรรเทา",
    "reading": "",
    "ipa": "ɹiˈɫiv",
    "level": "B2"
  },
  {
    "id": "b2_1241",
    "word": "relieved",
    "pos": "adj.",
    "meaning": "โล่งใจ",
    "reading": "",
    "ipa": "ɹiˈɫivd",
    "level": "B2"
  },
  {
    "id": "b2_1242",
    "word": "remarkable",
    "pos": "adj.",
    "meaning": "โดดเด่น",
    "reading": "",
    "ipa": "ɹiˈmɑɹkəbəɫ",
    "level": "B2"
  },
  {
    "id": "b2_1243",
    "word": "remarkably",
    "pos": "adv.",
    "meaning": "อย่างโดดเด่น",
    "reading": "",
    "ipa": "ɹiˈmɑɹkəbɫi",
    "level": "B2"
  },
  {
    "id": "b2_1244",
    "word": "reporting",
    "pos": "n.",
    "meaning": "การรายงาน",
    "reading": "",
    "ipa": "ɹiˈpɔɹtɪŋ",
    "level": "B2"
  },
  {
    "id": "b2_1245",
    "word": "resign",
    "pos": "v.",
    "meaning": "ลาออก",
    "reading": "",
    "ipa": "ɹiˈsaɪn",
    "level": "B2"
  },
  {
    "id": "b2_1246",
    "word": "resolution",
    "pos": "n.",
    "meaning": "มติ",
    "reading": "",
    "ipa": "ˌɹɛzəˈɫuʃən",
    "level": "B2"
  },
  {
    "id": "b2_1247",
    "word": "restore",
    "pos": "v.",
    "meaning": "ฟื้นฟู",
    "reading": "",
    "ipa": "ɹɪˈstɔɹ",
    "level": "B2"
  },
  {
    "id": "b2_1248",
    "word": "restrict",
    "pos": "v.",
    "meaning": "จำกัด",
    "reading": "",
    "ipa": "ɹiˈstɹɪkt",
    "level": "B2"
  },
  {
    "id": "b2_1249",
    "word": "restriction",
    "pos": "n.",
    "meaning": "ข้อจำกัด",
    "reading": "",
    "ipa": "ɹiˈstɹɪkʃən",
    "level": "B2"
  },
  {
    "id": "b2_1250",
    "word": "retail",
    "pos": "n.",
    "meaning": "การค้าปลีก",
    "reading": "",
    "ipa": "ˈɹiˌteɪɫ",
    "level": "B2"
  },
  {
    "id": "b2_1251",
    "word": "retirement",
    "pos": "n.",
    "meaning": "การเกษียณ",
    "reading": "",
    "ipa": "ɹiˈtaɪɝmənt",
    "level": "B2"
  },
  {
    "id": "b2_1252",
    "word": "revenue",
    "pos": "n.",
    "meaning": "รายได้",
    "reading": "",
    "ipa": "ˈɹɛvəˌnu",
    "level": "B2"
  },
  {
    "id": "b2_1253",
    "word": "revision",
    "pos": "n.",
    "meaning": "การทบทวน",
    "reading": "",
    "ipa": "ɹiˈvɪʒən",
    "level": "B2"
  },
  {
    "id": "b2_1254",
    "word": "ridiculous",
    "pos": "adj.",
    "meaning": "น่าหัวเราะ",
    "reading": "",
    "ipa": "ɹɪˈdɪkjəɫəs",
    "level": "B2"
  },
  {
    "id": "b2_1255",
    "word": "risky",
    "pos": "adj.",
    "meaning": "เสี่ยง",
    "reading": "",
    "ipa": "ˈɹɪski",
    "level": "B2"
  },
  {
    "id": "b2_1256",
    "word": "rival",
    "pos": "n., adj.",
    "meaning": "คู่แข่ง",
    "reading": "",
    "ipa": "ˈɹaɪvəɫ",
    "level": "B2"
  },
  {
    "id": "b2_1257",
    "word": "rob",
    "pos": "v.",
    "meaning": "ปล้น",
    "reading": "",
    "ipa": "ˈɹɑb",
    "level": "B2"
  },
  {
    "id": "b2_1258",
    "word": "robbery",
    "pos": "n.",
    "meaning": "การปล้น",
    "reading": "",
    "ipa": "ˈɹɑbɝi",
    "level": "B2"
  },
  {
    "id": "b2_1259",
    "word": "rocket",
    "pos": "n.",
    "meaning": "จรวด",
    "reading": "",
    "ipa": "ˈɹɑkət",
    "level": "B2"
  },
  {
    "id": "b2_1260",
    "word": "romance",
    "pos": "n.",
    "meaning": "ความรัก",
    "reading": "",
    "ipa": "ˈɹoʊmæns",
    "level": "B2"
  },
  {
    "id": "b2_1261",
    "word": "rose",
    "pos": "n.",
    "meaning": "กุหลาบ",
    "reading": "",
    "ipa": "ˈɹoʊz",
    "level": "B2"
  },
  {
    "id": "b2_1262",
    "word": "roughly",
    "pos": "adv.",
    "meaning": "โดยประมาณ",
    "reading": "",
    "ipa": "ˈɹəfɫi",
    "level": "B2"
  },
  {
    "id": "b2_1263",
    "word": "ruin",
    "pos": "v., n.",
    "meaning": "ทำลาย",
    "reading": "",
    "ipa": "ˈɹuən",
    "level": "B2"
  },
  {
    "id": "b2_1264",
    "word": "satisfaction",
    "pos": "n.",
    "meaning": "ความพึงพอใจ",
    "reading": "",
    "ipa": "ˌsætəsˈfækʃən",
    "level": "B2"
  },
  {
    "id": "b2_1265",
    "word": "scandal",
    "pos": "n.",
    "meaning": "เรื่องอื้อฉาว",
    "reading": "",
    "ipa": "ˈskændəɫ",
    "level": "B2"
  },
  {
    "id": "b2_1266",
    "word": "scare",
    "pos": "v., n.",
    "meaning": "ความกลัว",
    "reading": "",
    "ipa": "ˈskɛɹ",
    "level": "B2"
  },
  {
    "id": "b2_1267",
    "word": "scenario",
    "pos": "n.",
    "meaning": "สถานการณ์",
    "reading": "",
    "ipa": "sɪˈnɛɹioʊ",
    "level": "B2"
  },
  {
    "id": "b2_1268",
    "word": "scholar",
    "pos": "n.",
    "meaning": "นักวิชาการ",
    "reading": "",
    "ipa": "ˈskɑɫɝ",
    "level": "B2"
  },
  {
    "id": "b2_1269",
    "word": "scholarship",
    "pos": "n.",
    "meaning": "ทุนการศึกษา",
    "reading": "",
    "ipa": "ˈskɑɫɝˌʃɪp",
    "level": "B2"
  },
  {
    "id": "b2_1270",
    "word": "scratch",
    "pos": "v., n.",
    "meaning": "รอยขีดข่วน",
    "reading": "",
    "ipa": "ˈskɹætʃ",
    "level": "B2"
  },
  {
    "id": "b2_1271",
    "word": "screening",
    "pos": "n.",
    "meaning": "การคัดกรอง",
    "reading": "",
    "ipa": "ˈskɹinɪŋ",
    "level": "B2"
  },
  {
    "id": "b2_1272",
    "word": "seeker",
    "pos": "n.",
    "meaning": "ผู้ค้นหา",
    "reading": "",
    "ipa": "ˈsikɝ",
    "level": "B2"
  },
  {
    "id": "b2_1273",
    "word": "seminar",
    "pos": "n.",
    "meaning": "สัมมนา",
    "reading": "",
    "ipa": "ˈsɛməˌnɑɹ",
    "level": "B2"
  },
  {
    "id": "b2_1274",
    "word": "settler",
    "pos": "n.",
    "meaning": "ผู้ตั้งถิ่นฐาน",
    "reading": "",
    "ipa": "ˈsɛtəɫɝ",
    "level": "B2"
  },
  {
    "id": "b2_1275",
    "word": "severely",
    "pos": "adv.",
    "meaning": "อย่างรุนแรง",
    "reading": "",
    "ipa": "səˈvɪɹɫi",
    "level": "B2"
  },
  {
    "id": "b2_1276",
    "word": "sexy",
    "pos": "adj.",
    "meaning": "เซ็กซี่",
    "reading": "",
    "ipa": "ˈsɛksi",
    "level": "B2"
  },
  {
    "id": "b2_1277",
    "word": "shaped",
    "pos": "adj.",
    "meaning": "ที่มีรูปร่าง",
    "reading": "",
    "ipa": "ˈʃeɪpt",
    "level": "B2"
  },
  {
    "id": "b2_1278",
    "word": "shocking",
    "pos": "adj.",
    "meaning": "น่าตกใจ",
    "reading": "",
    "ipa": "ˈʃɑkɪŋ",
    "level": "B2"
  },
  {
    "id": "b2_1279",
    "word": "shore",
    "pos": "n.",
    "meaning": "ชายฝั่ง",
    "reading": "",
    "ipa": "ˈʃɔɹ",
    "level": "B2"
  },
  {
    "id": "b2_1280",
    "word": "shortage",
    "pos": "n.",
    "meaning": "การขาดแคลน",
    "reading": "",
    "ipa": "ˈʃɔɹtədʒ",
    "level": "B2"
  },
  {
    "id": "b2_1281",
    "word": "shortly",
    "pos": "adv.",
    "meaning": "ในไม่ช้า",
    "reading": "",
    "ipa": "ˈʃɔɹtɫi",
    "level": "B2"
  },
  {
    "id": "b2_1282",
    "word": "short-term",
    "pos": "adj.",
    "meaning": "ระยะสั้น",
    "reading": "",
    "ipa": "ˌʃɔɹtˈtɝm",
    "level": "B2"
  },
  {
    "id": "b2_1283",
    "word": "sibling",
    "pos": "n.",
    "meaning": "พี่น้อง",
    "reading": "",
    "ipa": "ˈsɪbɫɪŋ",
    "level": "B2"
  },
  {
    "id": "b2_1284",
    "word": "signature",
    "pos": "n.",
    "meaning": "ลายเซ็น",
    "reading": "",
    "ipa": "ˈsɪɡnətʃɝ",
    "level": "B2"
  },
  {
    "id": "b2_1285",
    "word": "significance",
    "pos": "n.",
    "meaning": "ความสำคัญ",
    "reading": "",
    "ipa": "səɡˈnɪfɪkəns",
    "level": "B2"
  },
  {
    "id": "b2_1286",
    "word": "skilled",
    "pos": "adj.",
    "meaning": "มีทักษะ",
    "reading": "",
    "ipa": "ˈskɪɫd",
    "level": "B2"
  },
  {
    "id": "b2_1287",
    "word": "skull",
    "pos": "n.",
    "meaning": "กะโหลก",
    "reading": "",
    "ipa": "ˈskəɫ",
    "level": "B2"
  },
  {
    "id": "b2_1288",
    "word": "slogan",
    "pos": "n.",
    "meaning": "คำขวัญ",
    "reading": "",
    "ipa": "ˈsɫoʊɡən",
    "level": "B2"
  },
  {
    "id": "b2_1289",
    "word": "so-called",
    "pos": "adj.",
    "meaning": "ที่เรียกกันว่า",
    "reading": "",
    "ipa": "ˈsoʊˈkɔɫd",
    "level": "B2"
  },
  {
    "id": "b2_1290",
    "word": "somehow",
    "pos": "adv.",
    "meaning": "อย่างไรก็ตาม",
    "reading": "",
    "ipa": "ˈsəmˌhaʊ",
    "level": "B2"
  },
  {
    "id": "b2_1291",
    "word": "sometime",
    "pos": "adv.",
    "meaning": "บางเวลา",
    "reading": "",
    "ipa": "ˈsəmˌtaɪm",
    "level": "B2"
  },
  {
    "id": "b2_1292",
    "word": "sophisticated",
    "pos": "adj.",
    "meaning": "มีประสบการณ์มาก",
    "reading": "",
    "ipa": "səˈfɪstəˌkeɪtɪd",
    "level": "B2"
  },
  {
    "id": "c1_13",
    "word": "spare",
    "pos": "v.",
    "meaning": "สำรอง",
    "reading": "",
    "ipa": "ˈspɛɹ",
    "level": "C1"
  },
  {
    "id": "b2_1293",
    "word": "specialize",
    "pos": "v.",
    "meaning": "เชี่ยวชาญ",
    "reading": "",
    "ipa": "ˈspɛʃəˌɫaɪz",
    "level": "B2"
  },
  {
    "id": "b2_1294",
    "word": "specify",
    "pos": "v.",
    "meaning": "เฉพาะเจาะจง",
    "reading": "",
    "ipa": "ˈspɛsəˌfaɪ",
    "level": "B2"
  },
  {
    "id": "b2_1295",
    "word": "spectacular",
    "pos": "adj.",
    "meaning": "น่าตื่นเต้น",
    "reading": "",
    "ipa": "spɛkˈtækjəɫɝ",
    "level": "B2"
  },
  {
    "id": "b2_1296",
    "word": "spectator",
    "pos": "n.",
    "meaning": "ผู้ชม",
    "reading": "",
    "ipa": "ˈspɛkteɪtɝ",
    "level": "B2"
  },
  {
    "id": "b2_1297",
    "word": "speculate",
    "pos": "v.",
    "meaning": "คาดเดา",
    "reading": "",
    "ipa": "ˈspɛkjəˌɫeɪt",
    "level": "B2"
  },
  {
    "id": "b2_1298",
    "word": "speculation",
    "pos": "n.",
    "meaning": "การคาดการณ์",
    "reading": "",
    "ipa": "ˌspɛkjəˈɫeɪʃən",
    "level": "B2"
  },
  {
    "id": "b2_1299",
    "word": "spice",
    "pos": "n.",
    "meaning": "เครื่องเทศ",
    "reading": "",
    "ipa": "ˈspaɪs",
    "level": "B2"
  },
  {
    "id": "b2_1300",
    "word": "spill",
    "pos": "v.",
    "meaning": "หก",
    "reading": "",
    "ipa": "ˈspɪɫ",
    "level": "B2"
  },
  {
    "id": "b2_1301",
    "word": "spite",
    "pos": "n.",
    "meaning": "ความมุ่งร้าย",
    "reading": "",
    "ipa": "ˈspaɪt",
    "level": "B2"
  },
  {
    "id": "b2_1302",
    "word": "spoil",
    "pos": "v.",
    "meaning": "ทำให้เสีย",
    "reading": "",
    "ipa": "ˈspɔɪɫ",
    "level": "B2"
  },
  {
    "id": "b2_1303",
    "word": "spokesman",
    "pos": "n.",
    "meaning": "โฆษกชาย",
    "reading": "",
    "ipa": "ˈspoʊksmən",
    "level": "B2"
  },
  {
    "id": "b2_1304",
    "word": "spokesperson",
    "pos": "n.",
    "meaning": "โฆษก",
    "reading": "",
    "ipa": "ˈspoʊkspɝsən",
    "level": "B2"
  },
  {
    "id": "b2_1305",
    "word": "spokeswoman",
    "pos": "n.",
    "meaning": "โฆษกหญิง",
    "reading": "",
    "ipa": "ˈspoʊkˌswʊmən",
    "level": "B2"
  },
  {
    "id": "b2_1306",
    "word": "sponsorship",
    "pos": "n.",
    "meaning": "การสนับสนุน",
    "reading": "",
    "ipa": "ˈspɑnsɝˌʃɪp",
    "level": "B2"
  },
  {
    "id": "b2_1307",
    "word": "sporting",
    "pos": "adj.",
    "meaning": "เกี่ยวกับกีฬา",
    "reading": "",
    "ipa": "ˈspɔɹtɪŋ",
    "level": "B2"
  },
  {
    "id": "b2_1308",
    "word": "stall",
    "pos": "n.",
    "meaning": "คอก",
    "reading": "",
    "ipa": "ˈstɔɫ",
    "level": "B2"
  },
  {
    "id": "b2_1309",
    "word": "stance",
    "pos": "n.",
    "meaning": "ท่าที",
    "reading": "",
    "ipa": "ˈstæns",
    "level": "B2"
  },
  {
    "id": "b2_1310",
    "word": "starve",
    "pos": "v.",
    "meaning": "อดอาหาร",
    "reading": "",
    "ipa": "ˈstɑɹv",
    "level": "B2"
  },
  {
    "id": "b2_1311",
    "word": "steadily",
    "pos": "adv.",
    "meaning": "อย่างมั่นคง",
    "reading": "",
    "ipa": "ˈstɛdəɫi",
    "level": "B2"
  },
  {
    "id": "b2_1312",
    "word": "steam",
    "pos": "n.",
    "meaning": "ไอน้ำ",
    "reading": "",
    "ipa": "ˈstim",
    "level": "B2"
  },
  {
    "id": "b2_1313",
    "word": "stimulate",
    "pos": "v.",
    "meaning": "กระตุ้น",
    "reading": "",
    "ipa": "ˈstɪmjəˌɫeɪt",
    "level": "B2"
  },
  {
    "id": "b2_1314",
    "word": "strengthen",
    "pos": "v.",
    "meaning": "เสริมสร้าง",
    "reading": "",
    "ipa": "ˈstɹɛŋθən",
    "level": "B2"
  },
  {
    "id": "b2_1315",
    "word": "strictly",
    "pos": "adv.",
    "meaning": "อย่างเข้มงวด",
    "reading": "",
    "ipa": "ˈstɹɪktɫi",
    "level": "B2"
  },
  {
    "id": "b2_1316",
    "word": "stroke",
    "pos": "n.",
    "meaning": "สวยงาม",
    "reading": "",
    "ipa": "ˈstɹoʊk",
    "level": "B2"
  },
  {
    "id": "b2_1317",
    "word": "stunning",
    "pos": "adj.",
    "meaning": "ภายหลัง",
    "reading": "",
    "ipa": "ˈstənɪŋ",
    "level": "B2"
  },
  {
    "id": "b2_1318",
    "word": "subsequent",
    "pos": "adj.",
    "meaning": "ต่อมา",
    "reading": "",
    "ipa": "ˈsəbsəkwənt",
    "level": "B2"
  },
  {
    "id": "b2_1319",
    "word": "subsequently",
    "pos": "adv.",
    "meaning": "ตามลำดับ",
    "reading": "",
    "ipa": "ˈsəbsəkwəntɫi",
    "level": "B2"
  },
  {
    "id": "b2_1320",
    "word": "suburb",
    "pos": "n.",
    "meaning": "ชานเมือง",
    "reading": "",
    "ipa": "ˈsəbɝb",
    "level": "B2"
  },
  {
    "id": "b2_1321",
    "word": "suffering",
    "pos": "n.",
    "meaning": "ความทุกข์",
    "reading": "",
    "ipa": "ˈsəfɝɪŋ",
    "level": "B2"
  },
  {
    "id": "b2_1322",
    "word": "sufficient",
    "pos": "adj.",
    "meaning": "เพียงพอ",
    "reading": "",
    "ipa": "səˈfɪʃənt",
    "level": "B2"
  },
  {
    "id": "b2_1323",
    "word": "sufficiently",
    "pos": "adv.",
    "meaning": "อย่างเพียงพอ",
    "reading": "",
    "ipa": "səˈfɪʃəntɫi",
    "level": "B2"
  },
  {
    "id": "b2_1324",
    "word": "super",
    "pos": "adj.",
    "meaning": "ยอดเยี่ยม",
    "reading": "",
    "ipa": "ˈsupɝ",
    "level": "B2"
  },
  {
    "id": "b2_1325",
    "word": "surgeon",
    "pos": "n.",
    "meaning": "ศัลยแพทย์",
    "reading": "",
    "ipa": "ˈsɝdʒən",
    "level": "B2"
  },
  {
    "id": "b2_1326",
    "word": "survival",
    "pos": "n.",
    "meaning": "การอยู่รอด",
    "reading": "",
    "ipa": "sɝˈvaɪvəɫ",
    "level": "B2"
  },
  {
    "id": "b2_1327",
    "word": "survivor",
    "pos": "n.",
    "meaning": "ผู้รอดชีวิต",
    "reading": "",
    "ipa": "sɝˈvaɪvɝ",
    "level": "B2"
  },
  {
    "id": "b2_1328",
    "word": "suspend",
    "pos": "v.",
    "meaning": "ระงับ",
    "reading": "",
    "ipa": "səˈspɛnd",
    "level": "B2"
  },
  {
    "id": "b2_1329",
    "word": "sustainable",
    "pos": "adj.",
    "meaning": "ยั่งยืน",
    "reading": "",
    "ipa": "səˈsteɪnəbəɫ",
    "level": "B2"
  },
  {
    "id": "b2_1330",
    "word": "swallow",
    "pos": "v.",
    "meaning": "กลืน",
    "reading": "",
    "ipa": "ˈswɑɫoʊ",
    "level": "B2"
  },
  {
    "id": "b2_1331",
    "word": "sympathetic",
    "pos": "adj.",
    "meaning": "เห็นอกเห็นใจ",
    "reading": "",
    "ipa": "ˌsɪmpəˈθɛtɪk",
    "level": "B2"
  },
  {
    "id": "c1_14",
    "word": "tackle",
    "pos": "n.",
    "meaning": "อุปกรณ์แก้ปัญหา",
    "reading": "",
    "ipa": "ˈtækəɫ",
    "level": "C1"
  },
  {
    "id": "b2_1332",
    "word": "tag",
    "pos": "n., v.",
    "meaning": "แถบป้าย",
    "reading": "",
    "ipa": "ˈtæɡ",
    "level": "B2"
  },
  {
    "id": "b2_1333",
    "word": "tap",
    "pos": "v., n.",
    "meaning": "แตะ",
    "reading": "",
    "ipa": "ˈtæp",
    "level": "B2"
  },
  {
    "id": "b2_1334",
    "word": "technological",
    "pos": "adj.",
    "meaning": "เกี่ยวกับเทคโนโลยี",
    "reading": "",
    "ipa": "ˌtɛknəˈɫɑdʒɪkəɫ",
    "level": "B2"
  },
  {
    "id": "b2_1335",
    "word": "teens",
    "pos": "n.",
    "meaning": "วัยรุ่น",
    "reading": "",
    "ipa": "ˈtinz",
    "level": "B2"
  },
  {
    "id": "b2_1336",
    "word": "temple",
    "pos": "n.",
    "meaning": "วัด",
    "reading": "",
    "ipa": "ˈtɛmpəɫ",
    "level": "B2"
  },
  {
    "id": "b2_1337",
    "word": "temporarily",
    "pos": "adv.",
    "meaning": "ชั่วคราว",
    "reading": "",
    "ipa": "ˌtɛmpɝˈɛɹəɫi",
    "level": "B2"
  },
  {
    "id": "b2_1338",
    "word": "tendency",
    "pos": "n.",
    "meaning": "แนวโน้ม",
    "reading": "",
    "ipa": "ˈtɛndənsi",
    "level": "B2"
  },
  {
    "id": "b2_1339",
    "word": "tension",
    "pos": "n.",
    "meaning": "ความตึงเครียด",
    "reading": "",
    "ipa": "ˈtɛnʃən",
    "level": "B2"
  },
  {
    "id": "c1_15",
    "word": "terminal",
    "pos": "adj.",
    "meaning": "ปลายทาง",
    "reading": "",
    "ipa": "ˈtɝmənəɫ",
    "level": "C1"
  },
  {
    "id": "b2_1340",
    "word": "terms",
    "pos": "n.",
    "meaning": "เงื่อนไข",
    "reading": "",
    "ipa": "ˈtɝmz",
    "level": "B2"
  },
  {
    "id": "b2_1341",
    "word": "terribly",
    "pos": "adv.",
    "meaning": "อย่างมาก",
    "reading": "",
    "ipa": "ˈtɛɹəbɫi",
    "level": "B2"
  },
  {
    "id": "b2_1342",
    "word": "terrify",
    "pos": "v.",
    "meaning": "ทำให้กลัว",
    "reading": "",
    "ipa": "ˈtɛɹəˌfaɪ",
    "level": "B2"
  },
  {
    "id": "b2_1343",
    "word": "territory",
    "pos": "n.",
    "meaning": "ดินแดน",
    "reading": "",
    "ipa": "ˈtɛɹɪˌtɔɹi",
    "level": "B2"
  },
  {
    "id": "b2_1344",
    "word": "terror",
    "pos": "n.",
    "meaning": "ความหวาดกลัว",
    "reading": "",
    "ipa": "ˈtɛɹɝ",
    "level": "B2"
  },
  {
    "id": "b2_1345",
    "word": "terrorism",
    "pos": "n.",
    "meaning": "การก่อการร้าย",
    "reading": "",
    "ipa": "ˈtɛɹɝˌɪzəm",
    "level": "B2"
  },
  {
    "id": "b2_1346",
    "word": "terrorist",
    "pos": "n.",
    "meaning": "ผู้ก่อการร้าย",
    "reading": "",
    "ipa": "ˈtɛɹɝɪst",
    "level": "B2"
  },
  {
    "id": "b2_1347",
    "word": "testing",
    "pos": "n.",
    "meaning": "การทดสอบ",
    "reading": "",
    "ipa": "ˈtɛstɪŋ",
    "level": "B2"
  },
  {
    "id": "b2_1348",
    "word": "textbook",
    "pos": "n.",
    "meaning": "ตำราเรียน",
    "reading": "",
    "ipa": "ˈtɛkstˌbʊk",
    "level": "B2"
  },
  {
    "id": "b2_1349",
    "word": "theft",
    "pos": "n.",
    "meaning": "การขโมย",
    "reading": "",
    "ipa": "ˈθɛft",
    "level": "B2"
  },
  {
    "id": "b2_1350",
    "word": "therapist",
    "pos": "n.",
    "meaning": "นักบำบัด",
    "reading": "",
    "ipa": "ˈθɛɹəpəst",
    "level": "B2"
  },
  {
    "id": "b2_1351",
    "word": "thesis",
    "pos": "n.",
    "meaning": "วิทยานิพนธ์",
    "reading": "",
    "ipa": "ˈθisəs",
    "level": "B2"
  },
  {
    "id": "b2_1352",
    "word": "thorough",
    "pos": "adj.",
    "meaning": "ละเอียดถี่ถ้วน",
    "reading": "",
    "ipa": "ˈθɝoʊ",
    "level": "B2"
  },
  {
    "id": "b2_1353",
    "word": "thoroughly",
    "pos": "adv.",
    "meaning": "อย่างละเอียด",
    "reading": "",
    "ipa": "ˈθɝoʊɫi",
    "level": "B2"
  },
  {
    "id": "b2_1354",
    "word": "thumb",
    "pos": "n.",
    "meaning": "นิ้วหัวแม่มือ",
    "reading": "",
    "ipa": "ˈθəm",
    "level": "B2"
  },
  {
    "id": "b2_1355",
    "word": "timing",
    "pos": "n.",
    "meaning": "จังหวะเวลา",
    "reading": "",
    "ipa": "ˈtaɪmɪŋ",
    "level": "B2"
  },
  {
    "id": "b2_1356",
    "word": "tissue",
    "pos": "n.",
    "meaning": "เนื้อเยื่อ",
    "reading": "",
    "ipa": "ˈtɪsˌju",
    "level": "B2"
  },
  {
    "id": "b2_1357",
    "word": "ton",
    "pos": "n.",
    "meaning": "ตัน",
    "reading": "",
    "ipa": "ˈtən",
    "level": "B2"
  },
  {
    "id": "b2_1358",
    "word": "tonne",
    "pos": "n.",
    "meaning": "หน่วยชั่งเป็นตัน",
    "reading": "",
    "ipa": "ˈtən",
    "level": "B2"
  },
  {
    "id": "b2_1359",
    "word": "tournament",
    "pos": "n.",
    "meaning": "การแข่งขัน",
    "reading": "",
    "ipa": "ˈtʊɹnəmənt",
    "level": "B2"
  },
  {
    "id": "c1_16",
    "word": "trace",
    "pos": "n.",
    "meaning": "ร่องรอย",
    "reading": "",
    "ipa": "ˈtɹeɪs",
    "level": "C1"
  },
  {
    "id": "b2_1360",
    "word": "trading",
    "pos": "n.",
    "meaning": "การซื้อขาย",
    "reading": "",
    "ipa": "ˈtɹeɪdɪŋ",
    "level": "B2"
  },
  {
    "id": "b2_1361",
    "word": "tragedy",
    "pos": "n.",
    "meaning": "เศร้าสลด",
    "reading": "",
    "ipa": "ˈtɹædʒədi",
    "level": "B2"
  },
  {
    "id": "b2_1362",
    "word": "tragic",
    "pos": "adj.",
    "meaning": "ที่น่าเศร้า",
    "reading": "",
    "ipa": "ˈtɹædʒɪk",
    "level": "B2"
  },
  {
    "id": "b2_1363",
    "word": "trait",
    "pos": "n.",
    "meaning": "ลักษณะ",
    "reading": "",
    "ipa": "ˈtɹeɪt",
    "level": "B2"
  },
  {
    "id": "b2_1364",
    "word": "transmit",
    "pos": "v.",
    "meaning": "ส่งต่อ",
    "reading": "",
    "ipa": "tɹænzˈmɪt",
    "level": "B2"
  },
  {
    "id": "b2_1365",
    "word": "transportation",
    "pos": "n.",
    "meaning": "การขนส่ง",
    "reading": "",
    "ipa": "ˌtɹænspɝˈteɪʃən",
    "level": "B2"
  },
  {
    "id": "b2_1366",
    "word": "trap",
    "pos": "v., n.",
    "meaning": "กับดัก",
    "reading": "",
    "ipa": "ˈtɹæp",
    "level": "B2"
  },
  {
    "id": "b2_1367",
    "word": "treasure",
    "pos": "n.",
    "meaning": "สมบัติ",
    "reading": "",
    "ipa": "ˈtɹɛʒɝ",
    "level": "B2"
  },
  {
    "id": "b2_1368",
    "word": "tribe",
    "pos": "n.",
    "meaning": "เผ่า",
    "reading": "",
    "ipa": "ˈtɹaɪb",
    "level": "B2"
  },
  {
    "id": "c1_17",
    "word": "trigger",
    "pos": "n.",
    "meaning": "ตัวกระตุ้น",
    "reading": "",
    "ipa": "ˈtɹɪɡɝ",
    "level": "C1"
  },
  {
    "id": "b2_1369",
    "word": "trillion",
    "pos": "number",
    "meaning": "ล้านล้าน",
    "reading": "",
    "ipa": "ˈtɹɪɫjən",
    "level": "B2"
  },
  {
    "id": "b2_1370",
    "word": "troop",
    "pos": "n.",
    "meaning": "กองทหาร",
    "reading": "",
    "ipa": "ˈtɹup",
    "level": "B2"
  },
  {
    "id": "b2_1371",
    "word": "tsunami",
    "pos": "n.",
    "meaning": "สึนามิ",
    "reading": "",
    "ipa": "suˈnɑmi",
    "level": "B2"
  },
  {
    "id": "b2_1372",
    "word": "ultimate",
    "pos": "adj.",
    "meaning": "ที่สุด",
    "reading": "",
    "ipa": "ˈəɫtəmət",
    "level": "B2"
  },
  {
    "id": "b2_1373",
    "word": "unacceptable",
    "pos": "adj.",
    "meaning": "ที่ยอมรับไม่ได้",
    "reading": "",
    "ipa": "ˌənækˈsɛptəbəɫ",
    "level": "B2"
  },
  {
    "id": "b2_1374",
    "word": "uncertainty",
    "pos": "n.",
    "meaning": "ความไม่แน่นอน",
    "reading": "",
    "ipa": "ənˈsɝtənti",
    "level": "B2"
  },
  {
    "id": "b2_1375",
    "word": "undergo",
    "pos": "v.",
    "meaning": "ประสบ",
    "reading": "",
    "ipa": "ˌəndɝˈɡoʊ",
    "level": "B2"
  },
  {
    "id": "b2_1376",
    "word": "undertake",
    "pos": "v.",
    "meaning": "ดำเนินการ",
    "reading": "",
    "ipa": "ˈəndɝˌteɪk",
    "level": "B2"
  },
  {
    "id": "b2_1377",
    "word": "unfold",
    "pos": "v.",
    "meaning": "คลี่ออก",
    "reading": "",
    "ipa": "ənˈfoʊɫd",
    "level": "B2"
  },
  {
    "id": "b2_1378",
    "word": "unfortunate",
    "pos": "adj.",
    "meaning": "โชคร้าย",
    "reading": "",
    "ipa": "ənˈfɔɹtʃənət",
    "level": "B2"
  },
  {
    "id": "b2_1379",
    "word": "unite",
    "pos": "v.",
    "meaning": "รวมกัน",
    "reading": "",
    "ipa": "ˈjuˌnaɪt",
    "level": "B2"
  },
  {
    "id": "b2_1380",
    "word": "unity",
    "pos": "n.",
    "meaning": "ความสามัคคี",
    "reading": "",
    "ipa": "ˈjunəti",
    "level": "B2"
  },
  {
    "id": "b2_1381",
    "word": "universal",
    "pos": "adj.",
    "meaning": "สากล",
    "reading": "",
    "ipa": "ˌjunəˈvɝsəɫ",
    "level": "B2"
  },
  {
    "id": "b2_1382",
    "word": "urgent",
    "pos": "adj.",
    "meaning": "เร่งด่วน",
    "reading": "",
    "ipa": "ˈɝdʒənt",
    "level": "B2"
  },
  {
    "id": "b2_1383",
    "word": "usage",
    "pos": "n.",
    "meaning": "การใช้งาน",
    "reading": "",
    "ipa": "ˈjusədʒ",
    "level": "B2"
  },
  {
    "id": "b2_1384",
    "word": "useless",
    "pos": "adj.",
    "meaning": "ไร้ประโยชน์",
    "reading": "",
    "ipa": "ˈjusɫəs",
    "level": "B2"
  },
  {
    "id": "b2_1385",
    "word": "valid",
    "pos": "adj.",
    "meaning": "ถูกต้อง",
    "reading": "",
    "ipa": "ˈvæɫɪd",
    "level": "B2"
  },
  {
    "id": "b2_1386",
    "word": "variation",
    "pos": "n.",
    "meaning": "ความหลากหลาย",
    "reading": "",
    "ipa": "ˌvɛɹiˈeɪʃən",
    "level": "B2"
  },
  {
    "id": "b2_1387",
    "word": "vertical",
    "pos": "adj.",
    "meaning": "แนวตั้ง",
    "reading": "",
    "ipa": "ˈvɝtɪkəɫ",
    "level": "B2"
  },
  {
    "id": "b2_1388",
    "word": "viewpoint",
    "pos": "n.",
    "meaning": "มุมมอง",
    "reading": "",
    "ipa": "ˈvjuˌpɔɪnt",
    "level": "B2"
  },
  {
    "id": "b2_1389",
    "word": "visa",
    "pos": "n.",
    "meaning": "วีซ่า",
    "reading": "",
    "ipa": "ˈvizə",
    "level": "B2"
  },
  {
    "id": "b2_1390",
    "word": "visible",
    "pos": "adj.",
    "meaning": "มองเห็นได้",
    "reading": "",
    "ipa": "ˈvɪzəbəɫ",
    "level": "B2"
  },
  {
    "id": "b2_1391",
    "word": "voluntary",
    "pos": "adj.",
    "meaning": "สมัครใจ",
    "reading": "",
    "ipa": "ˈvɑɫəntɛɹi",
    "level": "B2"
  },
  {
    "id": "b2_1392",
    "word": "voting",
    "pos": "n.",
    "meaning": "การลงคะแนน",
    "reading": "",
    "ipa": "ˈvoʊtɪŋ",
    "level": "B2"
  },
  {
    "id": "b2_1393",
    "word": "wander",
    "pos": "v.",
    "meaning": "เดินเตร่",
    "reading": "",
    "ipa": "ˈwɑndɝ",
    "level": "B2"
  },
  {
    "id": "b2_1394",
    "word": "warming",
    "pos": "n.",
    "meaning": "ภาวะโลกร้อน",
    "reading": "",
    "ipa": "ˈwɔɹmɪŋ",
    "level": "B2"
  },
  {
    "id": "b2_1395",
    "word": "weekly",
    "pos": "adj.",
    "meaning": "รายสัปดาห์",
    "reading": "",
    "ipa": "ˈwikɫi",
    "level": "B2"
  },
  {
    "id": "b2_1396",
    "word": "weird",
    "pos": "adj.",
    "meaning": "แปลก",
    "reading": "",
    "ipa": "ˈwɪɹd",
    "level": "B2"
  },
  {
    "id": "b2_1397",
    "word": "welfare",
    "pos": "n.",
    "meaning": "สวัสดิการ",
    "reading": "",
    "ipa": "ˈwɛɫˌfɛɹ",
    "level": "B2"
  },
  {
    "id": "b2_1398",
    "word": "wheat",
    "pos": "n.",
    "meaning": "ข้าวสาลี",
    "reading": "",
    "ipa": "ˈhwit",
    "level": "B2"
  },
  {
    "id": "b2_1399",
    "word": "whoever",
    "pos": "pron.",
    "meaning": "ใครก็ตาม",
    "reading": "",
    "ipa": "huˈɛvɝ",
    "level": "B2"
  },
  {
    "id": "b2_1400",
    "word": "widespread",
    "pos": "adj.",
    "meaning": "แพร่หลาย",
    "reading": "",
    "ipa": "ˈwaɪdsˈpɹɛd",
    "level": "B2"
  },
  {
    "id": "b2_1401",
    "word": "wisdom",
    "pos": "n.",
    "meaning": "ปัญญา",
    "reading": "",
    "ipa": "ˈwɪzdəm",
    "level": "B2"
  },
  {
    "id": "b2_1402",
    "word": "withdraw",
    "pos": "v.",
    "meaning": "ถอนตัว",
    "reading": "",
    "ipa": "wɪðˈdɹɔ",
    "level": "B2"
  },
  {
    "id": "b2_1403",
    "word": "workforce",
    "pos": "n.",
    "meaning": "แรงงาน",
    "reading": "",
    "ipa": "ˈwɝkˌfɔɹs",
    "level": "B2"
  },
  {
    "id": "b2_1404",
    "word": "workplace",
    "pos": "n.",
    "meaning": "สถานที่ทำงาน",
    "reading": "",
    "ipa": "ˈwɝkˌpɫeɪs",
    "level": "B2"
  },
  {
    "id": "b2_1405",
    "word": "workshop",
    "pos": "n.",
    "meaning": "เวิร์คช็อป",
    "reading": "",
    "ipa": "ˈwɝkˌʃɑp",
    "level": "B2"
  },
  {
    "id": "b2_1406",
    "word": "worm",
    "pos": "n.",
    "meaning": "หนอน",
    "reading": "",
    "ipa": "ˈwɝm",
    "level": "B2"
  },
  {
    "id": "b2_1407",
    "word": "wrist",
    "pos": "n.",
    "meaning": "ข้อมือ",
    "reading": "",
    "ipa": "ˈɹɪst",
    "level": "B2"
  },
  {
    "id": "c1_18",
    "word": "abolish",
    "pos": "v.",
    "meaning": "ยกเลิก",
    "reading": "",
    "ipa": "əˈbɑɫɪʃ",
    "level": "C1"
  },
  {
    "id": "c1_19",
    "word": "abortion",
    "pos": "n.",
    "meaning": "การทำแท้ง",
    "reading": "",
    "ipa": "əˈbɔɹʃən",
    "level": "C1"
  },
  {
    "id": "c1_20",
    "word": "absence",
    "pos": "n.",
    "meaning": "การขาด",
    "reading": "",
    "ipa": "ˈæbsəns",
    "level": "C1"
  },
  {
    "id": "c1_21",
    "word": "absent",
    "pos": "adj.",
    "meaning": "ไม่อยู่",
    "reading": "",
    "ipa": "ˈæbsənt",
    "level": "C1"
  },
  {
    "id": "c1_22",
    "word": "absurd",
    "pos": "adj.",
    "meaning": "ไร้สาระ",
    "reading": "",
    "ipa": "əbˈsɝd",
    "level": "C1"
  },
  {
    "id": "c1_23",
    "word": "abundance",
    "pos": "n.",
    "meaning": "ความอุดมสมบูรณ์",
    "reading": "",
    "ipa": "əˈbəndəns",
    "level": "C1"
  },
  {
    "id": "c1_24",
    "word": "abuse",
    "pos": "n., v.",
    "meaning": "การล่วงละเมิด",
    "reading": "",
    "ipa": "əbˈjus",
    "level": "C1"
  },
  {
    "id": "c1_25",
    "word": "academy",
    "pos": "n.",
    "meaning": "สถาบัน",
    "reading": "",
    "ipa": "əˈkædəmi",
    "level": "C1"
  },
  {
    "id": "c1_26",
    "word": "accelerate",
    "pos": "v.",
    "meaning": "เร่ง",
    "reading": "",
    "ipa": "ækˈsɛɫɝˌeɪt",
    "level": "C1"
  },
  {
    "id": "c1_27",
    "word": "acceptance",
    "pos": "n.",
    "meaning": "การยอมรับ",
    "reading": "",
    "ipa": "ækˈsɛptəns",
    "level": "C1"
  },
  {
    "id": "c1_28",
    "word": "accessible",
    "pos": "adj.",
    "meaning": "เข้าถึงได้",
    "reading": "",
    "ipa": "ækˈsɛsəbəɫ",
    "level": "C1"
  },
  {
    "id": "c1_29",
    "word": "accomplishment",
    "pos": "n.",
    "meaning": "ความสำเร็จ",
    "reading": "",
    "ipa": "əˈkɑmpɫɪʃmənt",
    "level": "C1"
  },
  {
    "id": "c1_30",
    "word": "accordance",
    "pos": "n.",
    "meaning": "ความสอดคล้อง",
    "reading": "",
    "ipa": "əˈkɔɹdəns",
    "level": "C1"
  },
  {
    "id": "c1_31",
    "word": "accordingly",
    "pos": "adv.",
    "meaning": "ดังนั้น/ตามนั้น",
    "reading": "",
    "ipa": "əˈkɔɹdɪŋɫi",
    "level": "C1"
  },
  {
    "id": "c1_32",
    "word": "accountability",
    "pos": "n.",
    "meaning": "ความรับผิดชอบ",
    "reading": "",
    "ipa": "əˈkaʊnəbɪɫɪti",
    "level": "C1"
  },
  {
    "id": "c1_33",
    "word": "accountable",
    "pos": "adj.",
    "meaning": "รับผิดชอบ",
    "reading": "",
    "ipa": "əˈkaʊnəbəɫ",
    "level": "C1"
  },
  {
    "id": "c1_34",
    "word": "accumulate",
    "pos": "v.",
    "meaning": "สะสม",
    "reading": "",
    "ipa": "əkˈjumjəˌɫeɪt",
    "level": "C1"
  },
  {
    "id": "c1_35",
    "word": "accumulation",
    "pos": "n.",
    "meaning": "การสะสม",
    "reading": "",
    "ipa": "əkˌjumjəˈɫeɪʃən",
    "level": "C1"
  },
  {
    "id": "c1_36",
    "word": "accusation",
    "pos": "n.",
    "meaning": "การกล่าวหา",
    "reading": "",
    "ipa": "ˌækjəˈzeɪʃən",
    "level": "C1"
  },
  {
    "id": "c1_37",
    "word": "accused",
    "pos": "n.",
    "meaning": "ผู้ถูกกล่าวหา",
    "reading": "",
    "ipa": "əkˈjuzd",
    "level": "C1"
  },
  {
    "id": "c1_38",
    "word": "acquisition",
    "pos": "n.",
    "meaning": "การได้มา",
    "reading": "",
    "ipa": "ˌækwəˈzɪʃən",
    "level": "C1"
  },
  {
    "id": "c1_39",
    "word": "acre",
    "pos": "n.",
    "meaning": "เอเคอร์",
    "reading": "",
    "ipa": "ˈeɪkɝ",
    "level": "C1"
  },
  {
    "id": "c1_40",
    "word": "activation",
    "pos": "n.",
    "meaning": "การเปิดใช้งาน",
    "reading": "",
    "ipa": "ˌæktəˈveɪʃən",
    "level": "C1"
  },
  {
    "id": "c1_41",
    "word": "activist",
    "pos": "n.",
    "meaning": "นักเคลื่อนไหว",
    "reading": "",
    "ipa": "ˈæktəvəst",
    "level": "C1"
  },
  {
    "id": "c1_42",
    "word": "acute",
    "pos": "adj.",
    "meaning": "รุนแรง",
    "reading": "",
    "ipa": "əkˈjut",
    "level": "C1"
  },
  {
    "id": "c1_43",
    "word": "adaptation",
    "pos": "n.",
    "meaning": "การปรับตัว",
    "reading": "",
    "ipa": "ˌædəpˈteɪʃən",
    "level": "C1"
  },
  {
    "id": "c1_44",
    "word": "adhere",
    "pos": "v.",
    "meaning": "ยึดมั่น",
    "reading": "",
    "ipa": "ədˈhɪɹ",
    "level": "C1"
  },
  {
    "id": "c1_45",
    "word": "adjacent",
    "pos": "adj.",
    "meaning": "ติดกัน",
    "reading": "",
    "ipa": "əˈdʒeɪsənt",
    "level": "C1"
  },
  {
    "id": "c1_46",
    "word": "adjustment",
    "pos": "n.",
    "meaning": "การปรับ",
    "reading": "",
    "ipa": "əˈdʒəstmənt",
    "level": "C1"
  },
  {
    "id": "c1_47",
    "word": "administer",
    "pos": "v.",
    "meaning": "บริหาร",
    "reading": "",
    "ipa": "ədˈmɪnəstɝ",
    "level": "C1"
  },
  {
    "id": "c1_48",
    "word": "administrative",
    "pos": "adj.",
    "meaning": "เกี่ยวกับการบริหาร",
    "reading": "",
    "ipa": "ədˈmɪnəˌstɹeɪtɪv",
    "level": "C1"
  },
  {
    "id": "c1_49",
    "word": "administrator",
    "pos": "n.",
    "meaning": "ผู้บริหาร",
    "reading": "",
    "ipa": "ədˈmɪnəˌstɹeɪtɝ",
    "level": "C1"
  },
  {
    "id": "c1_50",
    "word": "admission",
    "pos": "n.",
    "meaning": "การรับเข้า",
    "reading": "",
    "ipa": "ædˈmɪʃən",
    "level": "C1"
  },
  {
    "id": "c1_51",
    "word": "adolescent",
    "pos": "n.",
    "meaning": "วัยรุ่น",
    "reading": "",
    "ipa": "ˌædəˈɫɛsənt",
    "level": "C1"
  },
  {
    "id": "c1_52",
    "word": "adoption",
    "pos": "n.",
    "meaning": "การรับเลี้ยง",
    "reading": "",
    "ipa": "əˈdɑpʃən",
    "level": "C1"
  },
  {
    "id": "c1_53",
    "word": "adverse",
    "pos": "adj.",
    "meaning": "เป็นผลเสีย",
    "reading": "",
    "ipa": "ˈædˌvɝs",
    "level": "C1"
  },
  {
    "id": "c1_54",
    "word": "advocate",
    "pos": "n., v.",
    "meaning": "ผู้สนับสนุน",
    "reading": "",
    "ipa": "ˈædvəˌkeɪt",
    "level": "C1"
  },
  {
    "id": "c1_55",
    "word": "aesthetic",
    "pos": "adj.",
    "meaning": "เกี่ยวกับความงาม",
    "reading": "",
    "ipa": "ɛsˈθɛtɪk",
    "level": "C1"
  },
  {
    "id": "c1_56",
    "word": "affection",
    "pos": "n.",
    "meaning": "ความรักใคร่",
    "reading": "",
    "ipa": "əˈfɛkʃən",
    "level": "C1"
  },
  {
    "id": "c1_57",
    "word": "aftermath",
    "pos": "n.",
    "meaning": "ผลกระทบ",
    "reading": "",
    "ipa": "ˈæftɝˌmæθ",
    "level": "C1"
  },
  {
    "id": "c1_58",
    "word": "aggression",
    "pos": "n.",
    "meaning": "ความก้าวร้าว",
    "reading": "",
    "ipa": "əˈɡɹɛʃən",
    "level": "C1"
  },
  {
    "id": "c1_59",
    "word": "agricultural",
    "pos": "adj.",
    "meaning": "ทางการเกษตร",
    "reading": "",
    "ipa": "ˌæɡɹəˈkəɫtʃɝəɫ",
    "level": "C1"
  },
  {
    "id": "c1_60",
    "word": "aide",
    "pos": "n.",
    "meaning": "ผู้ช่วย",
    "reading": "",
    "ipa": "ˈeɪd",
    "level": "C1"
  },
  {
    "id": "c1_61",
    "word": "albeit",
    "pos": "conj.",
    "meaning": "แม้ว่า",
    "reading": "",
    "ipa": "ɔɫˈbiɪt",
    "level": "C1"
  },
  {
    "id": "c1_62",
    "word": "alert",
    "pos": "v., n., adj.",
    "meaning": "แจ้งเตือน/ตื่นตัว",
    "reading": "",
    "ipa": "əˈɫɝt",
    "level": "C1"
  },
  {
    "id": "c1_63",
    "word": "align",
    "pos": "v.",
    "meaning": "จัดตำแหน่ง",
    "reading": "",
    "ipa": "əˈɫaɪn",
    "level": "C1"
  },
  {
    "id": "c1_64",
    "word": "alignment",
    "pos": "n.",
    "meaning": "การจัดตำแหน่ง",
    "reading": "",
    "ipa": "əˈɫaɪnmənt",
    "level": "C1"
  },
  {
    "id": "c1_65",
    "word": "alike",
    "pos": "adv., adj.",
    "meaning": "เหมือนกัน",
    "reading": "",
    "ipa": "əˈɫaɪk",
    "level": "C1"
  },
  {
    "id": "c1_66",
    "word": "allegation",
    "pos": "n.",
    "meaning": "ข้อกล่าวหา",
    "reading": "",
    "ipa": "ˌæɫəˈɡeɪʃən",
    "level": "C1"
  },
  {
    "id": "c1_67",
    "word": "allege",
    "pos": "v.",
    "meaning": "กล่าวหา",
    "reading": "",
    "ipa": "əˈɫɛdʒ",
    "level": "C1"
  },
  {
    "id": "c1_68",
    "word": "allegedly",
    "pos": "adv.",
    "meaning": "ตามที่กล่าวหา",
    "reading": "",
    "ipa": "əˈɫɛdʒədɫi",
    "level": "C1"
  },
  {
    "id": "c1_69",
    "word": "alliance",
    "pos": "n.",
    "meaning": "พันธมิตร",
    "reading": "",
    "ipa": "əˈɫaɪəns",
    "level": "C1"
  },
  {
    "id": "c1_70",
    "word": "allocate",
    "pos": "v.",
    "meaning": "จัดสรร",
    "reading": "",
    "ipa": "ˈæɫəˌkeɪt",
    "level": "C1"
  },
  {
    "id": "c1_71",
    "word": "allocation",
    "pos": "n.",
    "meaning": "การจัดสรร",
    "reading": "",
    "ipa": "ˌæɫəˈkeɪʃən",
    "level": "C1"
  },
  {
    "id": "c1_72",
    "word": "allowance",
    "pos": "n.",
    "meaning": "เบี้ยเลี้ยง",
    "reading": "",
    "ipa": "əˈɫaʊəns",
    "level": "C1"
  },
  {
    "id": "c1_73",
    "word": "ally",
    "pos": "n.",
    "meaning": "พันธมิตร",
    "reading": "",
    "ipa": "ˈæɫaɪ",
    "level": "C1"
  },
  {
    "id": "c1_74",
    "word": "aluminium",
    "pos": "n.",
    "meaning": "อะลูมิเนียม",
    "reading": "",
    "ipa": "ˌæɫˈjumɪnəm",
    "level": "C1"
  },
  {
    "id": "c1_75",
    "word": "amateur",
    "pos": "adj., n.",
    "meaning": "สมัครเล่น",
    "reading": "",
    "ipa": "ˈæməˌtɝ",
    "level": "C1"
  },
  {
    "id": "c1_76",
    "word": "ambassador",
    "pos": "n.",
    "meaning": "เอกอัครราชทูต",
    "reading": "",
    "ipa": "æmˈbæsədɝ",
    "level": "C1"
  },
  {
    "id": "c1_77",
    "word": "amend",
    "pos": "v.",
    "meaning": "แก้ไข",
    "reading": "",
    "ipa": "əˈmɛnd",
    "level": "C1"
  },
  {
    "id": "c1_78",
    "word": "amendment",
    "pos": "n.",
    "meaning": "การแก้ไข",
    "reading": "",
    "ipa": "əˈmɛndmənt",
    "level": "C1"
  },
  {
    "id": "c1_79",
    "word": "amid",
    "pos": "prep.",
    "meaning": "ท่ามกลาง",
    "reading": "",
    "ipa": "əˈmɪd",
    "level": "C1"
  },
  {
    "id": "c1_80",
    "word": "analogy",
    "pos": "n.",
    "meaning": "การเปรียบเทียบ",
    "reading": "",
    "ipa": "əˈnæɫədʒi",
    "level": "C1"
  },
  {
    "id": "c1_81",
    "word": "anchor",
    "pos": "n.",
    "meaning": "สมอ",
    "reading": "",
    "ipa": "ˈæŋkɝ",
    "level": "C1"
  },
  {
    "id": "c1_82",
    "word": "angel",
    "pos": "n.",
    "meaning": "นางฟ้า",
    "reading": "",
    "ipa": "ˈeɪndʒəɫ",
    "level": "C1"
  },
  {
    "id": "c1_83",
    "word": "anonymous",
    "pos": "adj.",
    "meaning": "ไม่ระบุชื่อ",
    "reading": "",
    "ipa": "əˈnɑnəməs",
    "level": "C1"
  },
  {
    "id": "c1_84",
    "word": "apparatus",
    "pos": "n.",
    "meaning": "อุปกรณ์",
    "reading": "",
    "ipa": "ˌæpɝˈætəs",
    "level": "C1"
  },
  {
    "id": "c1_85",
    "word": "appealing",
    "pos": "adj.",
    "meaning": "น่าสนใจ",
    "reading": "",
    "ipa": "əˈpiɫɪŋ",
    "level": "C1"
  },
  {
    "id": "c1_86",
    "word": "appetite",
    "pos": "n.",
    "meaning": "ความอยากอาหาร",
    "reading": "",
    "ipa": "ˈæpəˌtaɪt",
    "level": "C1"
  },
  {
    "id": "c1_87",
    "word": "applaud",
    "pos": "v.",
    "meaning": "ปรบมือ",
    "reading": "",
    "ipa": "əˈpɫɔd",
    "level": "C1"
  },
  {
    "id": "c1_88",
    "word": "applicable",
    "pos": "adj.",
    "meaning": "ที่สามารถใช้ได้",
    "reading": "",
    "ipa": "ˈæpɫəkəbəɫ",
    "level": "C1"
  },
  {
    "id": "c1_89",
    "word": "appoint",
    "pos": "v.",
    "meaning": "แต่งตั้ง",
    "reading": "",
    "ipa": "əˈpɔɪnt",
    "level": "C1"
  },
  {
    "id": "c1_90",
    "word": "appreciation",
    "pos": "n.",
    "meaning": "ความชื่นชม",
    "reading": "",
    "ipa": "əˌpɹiʃiˈeɪʃən",
    "level": "C1"
  },
  {
    "id": "c1_91",
    "word": "arbitrary",
    "pos": "adj.",
    "meaning": "โดยพลการ",
    "reading": "",
    "ipa": "ˈɑɹbəˌtɹɛɹi",
    "level": "C1"
  },
  {
    "id": "c1_92",
    "word": "architectural",
    "pos": "adj.",
    "meaning": "ทางสถาปัตยกรรม",
    "reading": "",
    "ipa": "ˌɑɹkəˈtɛktʃɝəɫ",
    "level": "C1"
  },
  {
    "id": "c1_93",
    "word": "archive",
    "pos": "n.",
    "meaning": "คลังข้อมูล",
    "reading": "",
    "ipa": "ˈɑɹˌkaɪv",
    "level": "C1"
  },
  {
    "id": "c1_94",
    "word": "arena",
    "pos": "n.",
    "meaning": "เวที",
    "reading": "",
    "ipa": "ɝˈinə",
    "level": "C1"
  },
  {
    "id": "c1_95",
    "word": "arguably",
    "pos": "adv.",
    "meaning": "อาจกล่าวได้ว่า",
    "reading": "",
    "ipa": "ˈɑɹɡjuəbɫi",
    "level": "C1"
  },
  {
    "id": "c1_96",
    "word": "arm",
    "pos": "v.",
    "meaning": "แขน",
    "reading": "",
    "ipa": "ˈɑɹm",
    "level": "C1"
  },
  {
    "id": "c1_97",
    "word": "array",
    "pos": "n.",
    "meaning": "แถว",
    "reading": "",
    "ipa": "ɝˈeɪ",
    "level": "C1"
  },
  {
    "id": "c1_98",
    "word": "articulate",
    "pos": "v.",
    "meaning": "พูดชัดเจน",
    "reading": "",
    "ipa": "ɑɹˈtɪkjəˌɫeɪt",
    "level": "C1"
  },
  {
    "id": "c1_99",
    "word": "ash",
    "pos": "n.",
    "meaning": "เถ้า",
    "reading": "",
    "ipa": "ˈæʃ",
    "level": "C1"
  },
  {
    "id": "c1_100",
    "word": "aspiration",
    "pos": "n.",
    "meaning": "แรงบันดาลใจ",
    "reading": "",
    "ipa": "ˌæspɝˈeɪʃən",
    "level": "C1"
  },
  {
    "id": "c1_101",
    "word": "aspire",
    "pos": "v.",
    "meaning": "ปรารถนา",
    "reading": "",
    "ipa": "əˈspaɪɹ",
    "level": "C1"
  },
  {
    "id": "c1_102",
    "word": "assassination",
    "pos": "n.",
    "meaning": "การลอบสังหาร",
    "reading": "",
    "ipa": "əˌsæsəˈneɪʃən",
    "level": "C1"
  },
  {
    "id": "c1_103",
    "word": "assault",
    "pos": "n., v.",
    "meaning": "การโจมตี",
    "reading": "",
    "ipa": "əˈsɔɫt",
    "level": "C1"
  },
  {
    "id": "c1_104",
    "word": "assemble",
    "pos": "v.",
    "meaning": "รวบรวม",
    "reading": "",
    "ipa": "əˈsɛmbəɫ",
    "level": "C1"
  },
  {
    "id": "c1_105",
    "word": "assembly",
    "pos": "n.",
    "meaning": "การประชุม",
    "reading": "",
    "ipa": "əˈsɛmbɫi",
    "level": "C1"
  },
  {
    "id": "c1_106",
    "word": "assert",
    "pos": "v.",
    "meaning": "ยืนยัน",
    "reading": "",
    "ipa": "əˈsɝt",
    "level": "C1"
  },
  {
    "id": "c1_107",
    "word": "assertion",
    "pos": "n.",
    "meaning": "การยืนยัน",
    "reading": "",
    "ipa": "əˈsɝʃən",
    "level": "C1"
  },
  {
    "id": "c1_108",
    "word": "assurance",
    "pos": "n.",
    "meaning": "การรับประกัน",
    "reading": "",
    "ipa": "əˈʃʊɹəns",
    "level": "C1"
  },
  {
    "id": "c1_109",
    "word": "asylum",
    "pos": "n.",
    "meaning": "ที่ลี้ภัย",
    "reading": "",
    "ipa": "əˈsaɪɫəm",
    "level": "C1"
  },
  {
    "id": "c1_110",
    "word": "atrocity",
    "pos": "n.",
    "meaning": "ความโหดร้าย",
    "reading": "",
    "ipa": "əˈtɹɑsəti",
    "level": "C1"
  },
  {
    "id": "c1_111",
    "word": "attain",
    "pos": "v.",
    "meaning": "บรรลุ",
    "reading": "",
    "ipa": "əˈteɪn",
    "level": "C1"
  },
  {
    "id": "c1_112",
    "word": "attendance",
    "pos": "n.",
    "meaning": "การเข้าร่วม",
    "reading": "",
    "ipa": "əˈtɛndəns",
    "level": "C1"
  },
  {
    "id": "c1_113",
    "word": "attorney",
    "pos": "n.",
    "meaning": "ทนายความ",
    "reading": "",
    "ipa": "əˈtɝni",
    "level": "C1"
  },
  {
    "id": "c1_114",
    "word": "attribute",
    "pos": "v., n.",
    "meaning": "คุณลักษณะ",
    "reading": "",
    "ipa": "ˈætɹəbˌjut",
    "level": "C1"
  },
  {
    "id": "c1_115",
    "word": "audit",
    "pos": "n.",
    "meaning": "การตรวจสอบ",
    "reading": "",
    "ipa": "ˈɔdɪt",
    "level": "C1"
  },
  {
    "id": "c1_116",
    "word": "authentic",
    "pos": "adj.",
    "meaning": "แท้จริง",
    "reading": "",
    "ipa": "əˈθɛnɪk",
    "level": "C1"
  },
  {
    "id": "c1_117",
    "word": "authorize",
    "pos": "v.",
    "meaning": "อนุมัติ",
    "reading": "",
    "ipa": "ˈɔθɝˌaɪz",
    "level": "C1"
  },
  {
    "id": "c1_118",
    "word": "auto",
    "pos": "n.",
    "meaning": "รถยนต์",
    "reading": "",
    "ipa": "ˈɔtoʊ",
    "level": "C1"
  },
  {
    "id": "c1_119",
    "word": "autonomy",
    "pos": "n.",
    "meaning": "ความเป็นอิสระ",
    "reading": "",
    "ipa": "əˈtɑnəmi",
    "level": "C1"
  },
  {
    "id": "c1_120",
    "word": "availability",
    "pos": "n.",
    "meaning": "ความพร้อมใช้งาน",
    "reading": "",
    "ipa": "əˌveɪɫəˈbɪɫəti",
    "level": "C1"
  },
  {
    "id": "c1_121",
    "word": "await",
    "pos": "v.",
    "meaning": "รอคอย",
    "reading": "",
    "ipa": "əˈweɪt",
    "level": "C1"
  },
  {
    "id": "c1_122",
    "word": "backdrop",
    "pos": "n.",
    "meaning": "ฉากหลัง",
    "reading": "",
    "ipa": "ˈbækˌdɹɑp",
    "level": "C1"
  },
  {
    "id": "c1_123",
    "word": "backing",
    "pos": "n.",
    "meaning": "การสนับสนุน",
    "reading": "",
    "ipa": "ˈbækɪŋ",
    "level": "C1"
  },
  {
    "id": "c1_124",
    "word": "backup",
    "pos": "n.",
    "meaning": "ข้อมูลสำรอง",
    "reading": "",
    "ipa": "ˈbæˌkəp",
    "level": "C1"
  },
  {
    "id": "c1_125",
    "word": "bail",
    "pos": "n.",
    "meaning": "การประกันตัว",
    "reading": "",
    "ipa": "ˈbeɪɫ",
    "level": "C1"
  },
  {
    "id": "c1_126",
    "word": "ballot",
    "pos": "n.",
    "meaning": "บัตรลงคะแนน",
    "reading": "",
    "ipa": "ˈbæɫət",
    "level": "C1"
  },
  {
    "id": "c1_127",
    "word": "banner",
    "pos": "n.",
    "meaning": "แบนเนอร์",
    "reading": "",
    "ipa": "ˈbænɝ",
    "level": "C1"
  },
  {
    "id": "c1_128",
    "word": "bare",
    "pos": "adj.",
    "meaning": "เปลือย",
    "reading": "",
    "ipa": "ˈbɛɹ",
    "level": "C1"
  },
  {
    "id": "c1_129",
    "word": "barrel",
    "pos": "n.",
    "meaning": "ถัง",
    "reading": "",
    "ipa": "ˈbæɹəɫ",
    "level": "C1"
  },
  {
    "id": "c1_130",
    "word": "bass",
    "pos": "n.",
    "meaning": "เสียงต่ำ",
    "reading": "",
    "ipa": "ˈbæs",
    "level": "C1"
  },
  {
    "id": "c1_131",
    "word": "battlefield",
    "pos": "n.",
    "meaning": "สนามรบ",
    "reading": "",
    "ipa": "ˈbætəɫˌfiɫd",
    "level": "C1"
  },
  {
    "id": "c1_132",
    "word": "bay",
    "pos": "n.",
    "meaning": "อ่าว",
    "reading": "",
    "ipa": "ˈbeɪ",
    "level": "C1"
  },
  {
    "id": "c1_133",
    "word": "beam",
    "pos": "n.",
    "meaning": "ลำแสง",
    "reading": "",
    "ipa": "ˈbim",
    "level": "C1"
  },
  {
    "id": "c1_134",
    "word": "beast",
    "pos": "n.",
    "meaning": "สัตว์ร้าย",
    "reading": "",
    "ipa": "ˈbist",
    "level": "C1"
  },
  {
    "id": "c1_135",
    "word": "behalf",
    "pos": "n.",
    "meaning": "ในนามของ",
    "reading": "",
    "ipa": "bɪˈhæf",
    "level": "C1"
  },
  {
    "id": "c1_136",
    "word": "beloved",
    "pos": "adj.",
    "meaning": "ที่รัก",
    "reading": "",
    "ipa": "bɪˈɫəvd",
    "level": "C1"
  },
  {
    "id": "c1_137",
    "word": "bench",
    "pos": "n.",
    "meaning": "ม้านั่ง",
    "reading": "",
    "ipa": "ˈbɛntʃ",
    "level": "C1"
  },
  {
    "id": "c1_138",
    "word": "benchmark",
    "pos": "n.",
    "meaning": "เกณฑ์มาตรฐาน",
    "reading": "",
    "ipa": "ˈbɛntʃˌmɑɹk",
    "level": "C1"
  },
  {
    "id": "c1_139",
    "word": "beneath",
    "pos": "prep.",
    "meaning": "ข้างล่าง",
    "reading": "",
    "ipa": "bɪˈniθ",
    "level": "C1"
  },
  {
    "id": "c1_140",
    "word": "beneficiary",
    "pos": "n.",
    "meaning": "ผู้ได้รับประโยชน์",
    "reading": "",
    "ipa": "ˌbɛnəˈfɪʃiˌɛɹi",
    "level": "C1"
  },
  {
    "id": "c1_141",
    "word": "betray",
    "pos": "v.",
    "meaning": "ทรยศ",
    "reading": "",
    "ipa": "bɪˈtɹeɪ",
    "level": "C1"
  },
  {
    "id": "c1_142",
    "word": "bind",
    "pos": "v.",
    "meaning": "ผูก",
    "reading": "",
    "ipa": "ˈbaɪnd",
    "level": "C1"
  },
  {
    "id": "c1_143",
    "word": "biography",
    "pos": "n.",
    "meaning": "ชีวประวัติ",
    "reading": "",
    "ipa": "baɪˈɑɡɹəfi",
    "level": "C1"
  },
  {
    "id": "c1_144",
    "word": "bishop",
    "pos": "n.",
    "meaning": "บิชอป",
    "reading": "",
    "ipa": "ˈbɪʃəp",
    "level": "C1"
  },
  {
    "id": "c1_145",
    "word": "bizarre",
    "pos": "adj.",
    "meaning": "แปลกประหลาด",
    "reading": "",
    "ipa": "bəˈzɑɹ",
    "level": "C1"
  },
  {
    "id": "c1_146",
    "word": "blade",
    "pos": "n.",
    "meaning": "ใบมีด",
    "reading": "",
    "ipa": "ˈbɫeɪd",
    "level": "C1"
  },
  {
    "id": "c1_147",
    "word": "blast",
    "pos": "n., v.",
    "meaning": "การระเบิด",
    "reading": "",
    "ipa": "ˈbɫæst",
    "level": "C1"
  },
  {
    "id": "c1_148",
    "word": "bleed",
    "pos": "v.",
    "meaning": "เลือดออก",
    "reading": "",
    "ipa": "ˈbɫid",
    "level": "C1"
  },
  {
    "id": "c1_149",
    "word": "blend",
    "pos": "v., n.",
    "meaning": "ผสม",
    "reading": "",
    "ipa": "ˈbɫɛnd",
    "level": "C1"
  },
  {
    "id": "c1_150",
    "word": "bless",
    "pos": "v.",
    "meaning": "อวยพร",
    "reading": "",
    "ipa": "ˈbɫɛs",
    "level": "C1"
  },
  {
    "id": "c1_151",
    "word": "blessing",
    "pos": "n.",
    "meaning": "พร",
    "reading": "",
    "ipa": "ˈbɫɛsɪŋ",
    "level": "C1"
  },
  {
    "id": "c1_152",
    "word": "boast",
    "pos": "v.",
    "meaning": "โอ้อวด",
    "reading": "",
    "ipa": "ˈboʊst",
    "level": "C1"
  },
  {
    "id": "c1_153",
    "word": "bonus",
    "pos": "n.",
    "meaning": "โบนัส",
    "reading": "",
    "ipa": "ˈboʊnəs",
    "level": "C1"
  },
  {
    "id": "c1_154",
    "word": "boom",
    "pos": "n.",
    "meaning": "เสียงดัง ความเจริญ",
    "reading": "",
    "ipa": "ˈbum",
    "level": "C1"
  },
  {
    "id": "c1_155",
    "word": "bounce",
    "pos": "v.",
    "meaning": "เด้ง",
    "reading": "",
    "ipa": "ˈbaʊns",
    "level": "C1"
  },
  {
    "id": "c1_156",
    "word": "boundary",
    "pos": "n.",
    "meaning": "ขอบเขต",
    "reading": "",
    "ipa": "ˈbaʊndɝi",
    "level": "C1"
  },
  {
    "id": "c1_157",
    "word": "bow",
    "pos": "v., n.",
    "meaning": "โค้ง",
    "reading": "",
    "ipa": "ˈbaʊ",
    "level": "C1"
  },
  {
    "id": "c1_158",
    "word": "breach",
    "pos": "n., v.",
    "meaning": "การละเมิด ละเมิด",
    "reading": "",
    "ipa": "ˈbɹitʃ",
    "level": "C1"
  },
  {
    "id": "c1_159",
    "word": "breakdown",
    "pos": "n.",
    "meaning": "การหยุด",
    "reading": "",
    "ipa": "ˈbɹeɪkˌdaʊn",
    "level": "C1"
  },
  {
    "id": "c1_160",
    "word": "breakthrough",
    "pos": "n.",
    "meaning": "การค้นพบยิ่งใหญ่",
    "reading": "",
    "ipa": "ˈbɹeɪkˌθɹu",
    "level": "C1"
  },
  {
    "id": "c1_161",
    "word": "breed",
    "pos": "v., n.",
    "meaning": "สายพันธุ์",
    "reading": "",
    "ipa": "ˈbɹid",
    "level": "C1"
  },
  {
    "id": "c1_162",
    "word": "broadband",
    "pos": "n.",
    "meaning": "อินเทอร์เน็ตเร็วสูง",
    "reading": "",
    "ipa": "ˈbɹɔdˌbænd",
    "level": "C1"
  },
  {
    "id": "c1_163",
    "word": "browser",
    "pos": "n.",
    "meaning": "เบราว์เซอร์",
    "reading": "",
    "ipa": "ˈbɹaʊzɝ",
    "level": "C1"
  },
  {
    "id": "c1_164",
    "word": "brutal",
    "pos": "adj.",
    "meaning": "โหดร้าย",
    "reading": "",
    "ipa": "ˈbɹutəɫ",
    "level": "C1"
  },
  {
    "id": "c1_165",
    "word": "buck",
    "pos": "n.",
    "meaning": "เหรียญ",
    "reading": "",
    "ipa": "ˈbək",
    "level": "C1"
  },
  {
    "id": "c1_166",
    "word": "buddy",
    "pos": "n.",
    "meaning": "เพื่อน",
    "reading": "",
    "ipa": "ˈbədi",
    "level": "C1"
  },
  {
    "id": "c1_167",
    "word": "buffer",
    "pos": "n.",
    "meaning": "กันชน",
    "reading": "",
    "ipa": "ˈbəfɝ",
    "level": "C1"
  },
  {
    "id": "c1_168",
    "word": "bulk",
    "pos": "n.",
    "meaning": "ส่วนใหญ่",
    "reading": "",
    "ipa": "ˈbəɫk",
    "level": "C1"
  },
  {
    "id": "c1_169",
    "word": "burden",
    "pos": "n.",
    "meaning": "ภาระ",
    "reading": "",
    "ipa": "ˈbɝdən",
    "level": "C1"
  },
  {
    "id": "c1_170",
    "word": "bureaucracy",
    "pos": "n.",
    "meaning": "ระบบราชการ",
    "reading": "",
    "ipa": "bjʊˈɹɑkɹəsi",
    "level": "C1"
  },
  {
    "id": "c1_171",
    "word": "burial",
    "pos": "n.",
    "meaning": "การฝังศพ",
    "reading": "",
    "ipa": "ˈbɛɹiəɫ",
    "level": "C1"
  },
  {
    "id": "c1_172",
    "word": "burst",
    "pos": "v.",
    "meaning": "ระเบิด",
    "reading": "",
    "ipa": "ˈbɝst",
    "level": "C1"
  },
  {
    "id": "c1_173",
    "word": "cabinet",
    "pos": "n.",
    "meaning": "ตู้ใส่ของ",
    "reading": "",
    "ipa": "ˈkæbənət",
    "level": "C1"
  },
  {
    "id": "c1_174",
    "word": "calculation",
    "pos": "n.",
    "meaning": "การคำนวณ",
    "reading": "",
    "ipa": "ˌkæɫkjəˈɫeɪʃən",
    "level": "C1"
  },
  {
    "id": "c1_175",
    "word": "canvas",
    "pos": "n.",
    "meaning": "ผ้าใบ",
    "reading": "",
    "ipa": "ˈkænvəs",
    "level": "C1"
  },
  {
    "id": "c1_176",
    "word": "capability",
    "pos": "n.",
    "meaning": "ความสามารถ",
    "reading": "",
    "ipa": "ˌkeɪpəˈbɪɫəti",
    "level": "C1"
  },
  {
    "id": "c1_177",
    "word": "capitalism",
    "pos": "n.",
    "meaning": "ระบบทุนนิยม",
    "reading": "",
    "ipa": "ˈkæpɪtəˌɫɪzəm",
    "level": "C1"
  },
  {
    "id": "c1_178",
    "word": "capitalist",
    "pos": "adj.",
    "meaning": "ทุนนิยม",
    "reading": "",
    "ipa": "ˈkæpətəɫɪst",
    "level": "C1"
  },
  {
    "id": "c1_179",
    "word": "cargo",
    "pos": "n.",
    "meaning": "สินค้า",
    "reading": "",
    "ipa": "ˈkɑɹˌɡoʊ",
    "level": "C1"
  },
  {
    "id": "c1_180",
    "word": "carriage",
    "pos": "n.",
    "meaning": "เกวียน",
    "reading": "",
    "ipa": "ˈkæɹɪdʒ",
    "level": "C1"
  },
  {
    "id": "c1_181",
    "word": "carve",
    "pos": "v.",
    "meaning": "แกะสลัก",
    "reading": "",
    "ipa": "ˈkɑɹv",
    "level": "C1"
  },
  {
    "id": "c1_182",
    "word": "casino",
    "pos": "n.",
    "meaning": "คาสิโน",
    "reading": "",
    "ipa": "kəˈsinoʊ",
    "level": "C1"
  },
  {
    "id": "c1_183",
    "word": "casualty",
    "pos": "n.",
    "meaning": "ผู้บาดเจ็บ",
    "reading": "",
    "ipa": "ˈkæʒəɫti",
    "level": "C1"
  },
  {
    "id": "c1_184",
    "word": "catalogue",
    "pos": "n.",
    "meaning": "แคตตาล็อก",
    "reading": "",
    "ipa": "ˈkætəˌɫɔɡ",
    "level": "C1"
  },
  {
    "id": "c1_185",
    "word": "cater",
    "pos": "v.",
    "meaning": "ให้บริการ",
    "reading": "",
    "ipa": "ˈkeɪtɝ",
    "level": "C1"
  },
  {
    "id": "c1_186",
    "word": "cattle",
    "pos": "n.",
    "meaning": "วัว",
    "reading": "",
    "ipa": "ˈkætəɫ",
    "level": "C1"
  },
  {
    "id": "c1_187",
    "word": "caution",
    "pos": "n.",
    "meaning": "ความระมัดระวัง",
    "reading": "",
    "ipa": "ˈkɑʃən",
    "level": "C1"
  },
  {
    "id": "c1_188",
    "word": "cautious",
    "pos": "adj.",
    "meaning": "ระมัดระวัง",
    "reading": "",
    "ipa": "ˈkɔʃəs",
    "level": "C1"
  },
  {
    "id": "c1_189",
    "word": "cease",
    "pos": "v.",
    "meaning": "หยุด",
    "reading": "",
    "ipa": "ˈsis",
    "level": "C1"
  },
  {
    "id": "c1_190",
    "word": "cemetery",
    "pos": "n.",
    "meaning": "สุสาน",
    "reading": "",
    "ipa": "ˈsɛməˌtɛɹi",
    "level": "C1"
  },
  {
    "id": "c1_191",
    "word": "chamber",
    "pos": "n.",
    "meaning": "ห้อง",
    "reading": "",
    "ipa": "ˈtʃeɪmbɝ",
    "level": "C1"
  },
  {
    "id": "c1_192",
    "word": "chaos",
    "pos": "n.",
    "meaning": "ความโกลาหล",
    "reading": "",
    "ipa": "ˈkeɪɑs",
    "level": "C1"
  },
  {
    "id": "c1_193",
    "word": "characterize",
    "pos": "v.",
    "meaning": "แสดงลักษณะ",
    "reading": "",
    "ipa": "ˈkɛɹəktɝˌaɪz",
    "level": "C1"
  },
  {
    "id": "c1_194",
    "word": "charm",
    "pos": "n.",
    "meaning": "เสน่ห์",
    "reading": "",
    "ipa": "ˈtʃɑɹm",
    "level": "C1"
  },
  {
    "id": "c1_195",
    "word": "charter",
    "pos": "n.",
    "meaning": "กฎบัตร",
    "reading": "",
    "ipa": "ˈtʃɑɹtɝ",
    "level": "C1"
  },
  {
    "id": "c1_196",
    "word": "chronic",
    "pos": "adj.",
    "meaning": "เรื้อรัง",
    "reading": "",
    "ipa": "ˈkɹɑnɪk",
    "level": "C1"
  },
  {
    "id": "c1_197",
    "word": "chunk",
    "pos": "n.",
    "meaning": "ชิ้นใหญ่",
    "reading": "",
    "ipa": "ˈtʃəŋk",
    "level": "C1"
  },
  {
    "id": "c1_198",
    "word": "circulate",
    "pos": "v.",
    "meaning": "หมุนเวียน",
    "reading": "",
    "ipa": "ˈsɝkjəˌɫeɪt",
    "level": "C1"
  },
  {
    "id": "c1_199",
    "word": "circulation",
    "pos": "n.",
    "meaning": "การไหลเวียน",
    "reading": "",
    "ipa": "ˈsɝkjəˌɫeɪʃən",
    "level": "C1"
  },
  {
    "id": "c1_200",
    "word": "citizenship",
    "pos": "n.",
    "meaning": "สัญชาติ",
    "reading": "",
    "ipa": "ˈsɪtɪzənˌʃɪp",
    "level": "C1"
  },
  {
    "id": "c1_201",
    "word": "civic",
    "pos": "adj.",
    "meaning": "พลเมือง",
    "reading": "",
    "ipa": "ˈsɪvɪk",
    "level": "C1"
  },
  {
    "id": "c1_202",
    "word": "civilian",
    "pos": "n., adj.",
    "meaning": "พลเรือน",
    "reading": "",
    "ipa": "səˈvɪɫjən",
    "level": "C1"
  },
  {
    "id": "c1_203",
    "word": "clarity",
    "pos": "n.",
    "meaning": "ความชัดเจน",
    "reading": "",
    "ipa": "ˈkɫɛɹəti",
    "level": "C1"
  },
  {
    "id": "c1_204",
    "word": "clash",
    "pos": "n.",
    "meaning": "การปะทะ",
    "reading": "",
    "ipa": "ˈkɫæʃ",
    "level": "C1"
  },
  {
    "id": "c1_205",
    "word": "classification",
    "pos": "n.",
    "meaning": "การจำแนกประเภท",
    "reading": "",
    "ipa": "ˌkɫæsəfəˈkeɪʃən",
    "level": "C1"
  },
  {
    "id": "c1_206",
    "word": "cling",
    "pos": "v.",
    "meaning": "เกาะติด",
    "reading": "",
    "ipa": "ˈkɫɪŋ",
    "level": "C1"
  },
  {
    "id": "c1_207",
    "word": "clinical",
    "pos": "adj.",
    "meaning": "ทางคลินิก",
    "reading": "",
    "ipa": "ˈkɫɪnəkəɫ",
    "level": "C1"
  },
  {
    "id": "c1_208",
    "word": "closure",
    "pos": "n.",
    "meaning": "การปิด",
    "reading": "",
    "ipa": "ˈkɫoʊʒɝ",
    "level": "C1"
  },
  {
    "id": "c1_209",
    "word": "cluster",
    "pos": "n.",
    "meaning": "กลุ่ม",
    "reading": "",
    "ipa": "ˈkɫəstɝ",
    "level": "C1"
  },
  {
    "id": "c1_210",
    "word": "coalition",
    "pos": "n.",
    "meaning": "พันธมิตร",
    "reading": "",
    "ipa": "ˌkoʊəˈɫɪʃən",
    "level": "C1"
  },
  {
    "id": "c1_211",
    "word": "coastal",
    "pos": "adj.",
    "meaning": "ชายฝั่ง",
    "reading": "",
    "ipa": "ˈkoʊstəɫ",
    "level": "C1"
  },
  {
    "id": "c1_212",
    "word": "cocktail",
    "pos": "n.",
    "meaning": "ค็อกเทล",
    "reading": "",
    "ipa": "ˈkɑkˌteɪɫ",
    "level": "C1"
  },
  {
    "id": "c1_213",
    "word": "cognitive",
    "pos": "adj.",
    "meaning": "การรับรู้",
    "reading": "",
    "ipa": "ˈkɑɡnɪtɪv",
    "level": "C1"
  },
  {
    "id": "c1_214",
    "word": "coincide",
    "pos": "v.",
    "meaning": "ตรงกัน",
    "reading": "",
    "ipa": "ˌkoʊɪnˈsaɪd",
    "level": "C1"
  },
  {
    "id": "c1_215",
    "word": "collaborate",
    "pos": "v.",
    "meaning": "ร่วมมือ",
    "reading": "",
    "ipa": "kəˈɫæbɝˌeɪt",
    "level": "C1"
  },
  {
    "id": "c1_216",
    "word": "collaboration",
    "pos": "n.",
    "meaning": "การร่วมมือ",
    "reading": "",
    "ipa": "kəˌɫæbɝˈeɪʃən",
    "level": "C1"
  },
  {
    "id": "c1_217",
    "word": "collective",
    "pos": "adj.",
    "meaning": "ซึ่งเป็นกลุ่ม",
    "reading": "",
    "ipa": "kəˈɫɛktɪv",
    "level": "C1"
  },
  {
    "id": "c1_218",
    "word": "collision",
    "pos": "n.",
    "meaning": "การชน",
    "reading": "",
    "ipa": "kəˈɫɪʒən",
    "level": "C1"
  },
  {
    "id": "c1_219",
    "word": "colonial",
    "pos": "adj.",
    "meaning": "อาณานิคม",
    "reading": "",
    "ipa": "kəˈɫoʊniəɫ",
    "level": "C1"
  },
  {
    "id": "c1_220",
    "word": "columnist",
    "pos": "n.",
    "meaning": "คอลัมนิสต์",
    "reading": "",
    "ipa": "ˈkɑɫəmnəst",
    "level": "C1"
  },
  {
    "id": "c1_221",
    "word": "combat",
    "pos": "n., v.",
    "meaning": "การต่อสู้",
    "reading": "",
    "ipa": "ˈkɑmbæt",
    "level": "C1"
  },
  {
    "id": "c1_222",
    "word": "commence",
    "pos": "v.",
    "meaning": "รวมกัน",
    "reading": "",
    "ipa": "kəˈmɛns",
    "level": "C1"
  },
  {
    "id": "c1_223",
    "word": "commentary",
    "pos": "n.",
    "meaning": "คำวิจารณ์",
    "reading": "",
    "ipa": "ˈkɑmənˌtɛɹi",
    "level": "C1"
  },
  {
    "id": "c1_224",
    "word": "commentator",
    "pos": "n.",
    "meaning": "ผู้วิจารณ์",
    "reading": "",
    "ipa": "ˈkɑmənˌteɪtɝ",
    "level": "C1"
  },
  {
    "id": "c1_225",
    "word": "commerce",
    "pos": "n.",
    "meaning": "การค้า",
    "reading": "",
    "ipa": "ˈkɑmɝs",
    "level": "C1"
  },
  {
    "id": "c1_226",
    "word": "commissioner",
    "pos": "n.",
    "meaning": "กรรมาธิการ",
    "reading": "",
    "ipa": "kəˈmɪʃənɝ",
    "level": "C1"
  },
  {
    "id": "c1_227",
    "word": "commodity",
    "pos": "n.",
    "meaning": "สินค้า",
    "reading": "",
    "ipa": "kəˈmɑdəti",
    "level": "C1"
  },
  {
    "id": "c1_228",
    "word": "communist",
    "pos": "adj.",
    "meaning": "คอมมิวนิสต์",
    "reading": "",
    "ipa": "ˈkɑmjənəst",
    "level": "C1"
  },
  {
    "id": "c1_229",
    "word": "companion",
    "pos": "n.",
    "meaning": "เพื่อน",
    "reading": "",
    "ipa": "kəmˈpænjən",
    "level": "C1"
  },
  {
    "id": "c1_230",
    "word": "comparable",
    "pos": "adj.",
    "meaning": "ที่เปรียบเทียบได้",
    "reading": "",
    "ipa": "ˈkɑmpɝəbəɫ",
    "level": "C1"
  },
  {
    "id": "c1_231",
    "word": "compassion",
    "pos": "n.",
    "meaning": "ความเห็นอกเห็นใจ",
    "reading": "",
    "ipa": "kəmˈpæʃən",
    "level": "C1"
  },
  {
    "id": "c1_232",
    "word": "compel",
    "pos": "v.",
    "meaning": "บังคับ",
    "reading": "",
    "ipa": "kəmˈpɛɫ",
    "level": "C1"
  },
  {
    "id": "c1_233",
    "word": "compelling",
    "pos": "adj.",
    "meaning": "น่าสนใจ",
    "reading": "",
    "ipa": "kəmˈpɛɫɪŋ",
    "level": "C1"
  },
  {
    "id": "c1_234",
    "word": "compensate",
    "pos": "v.",
    "meaning": "ชดเชย",
    "reading": "",
    "ipa": "ˈkɑmpənˌseɪt",
    "level": "C1"
  },
  {
    "id": "c1_235",
    "word": "compensation",
    "pos": "n.",
    "meaning": "ค่าชดเชย",
    "reading": "",
    "ipa": "ˌkɑmpənˈseɪʃən",
    "level": "C1"
  },
  {
    "id": "c1_236",
    "word": "competence",
    "pos": "n.",
    "meaning": "ความสามารถ",
    "reading": "",
    "ipa": "ˈkɑmpətɪns",
    "level": "C1"
  },
  {
    "id": "c1_237",
    "word": "competent",
    "pos": "adj.",
    "meaning": "ที่มีความสามารถ",
    "reading": "",
    "ipa": "ˈkɑmpətɪnt",
    "level": "C1"
  },
  {
    "id": "c1_238",
    "word": "compile",
    "pos": "v.",
    "meaning": "รวบรวม",
    "reading": "",
    "ipa": "kəmˈpaɪɫ",
    "level": "C1"
  },
  {
    "id": "c1_239",
    "word": "complement",
    "pos": "v.",
    "meaning": "เสริม",
    "reading": "",
    "ipa": "ˈkɑmpɫəmənt",
    "level": "C1"
  },
  {
    "id": "c1_240",
    "word": "complexity",
    "pos": "n.",
    "meaning": "ความซับซ้อน",
    "reading": "",
    "ipa": "kəmˈpɫɛksəti",
    "level": "C1"
  },
  {
    "id": "c1_241",
    "word": "compliance",
    "pos": "n.",
    "meaning": "การปฏิบัติตาม",
    "reading": "",
    "ipa": "kəmˈpɫaɪəns",
    "level": "C1"
  },
  {
    "id": "c1_242",
    "word": "complication",
    "pos": "n.",
    "meaning": "ความซับซ้อน",
    "reading": "",
    "ipa": "ˌkɑmpɫəˈkeɪʃən",
    "level": "C1"
  },
  {
    "id": "c1_243",
    "word": "comply",
    "pos": "v.",
    "meaning": "ปฏิบัติตาม",
    "reading": "",
    "ipa": "kəmˈpɫaɪ",
    "level": "C1"
  },
  {
    "id": "c1_244",
    "word": "composition",
    "pos": "n.",
    "meaning": "องค์ประกอบ",
    "reading": "",
    "ipa": "ˌkɑmpəˈzɪʃən",
    "level": "C1"
  },
  {
    "id": "c1_245",
    "word": "compromise",
    "pos": "n., v.",
    "meaning": "ประนีประนอม",
    "reading": "",
    "ipa": "ˈkɑmpɹəˌmaɪz",
    "level": "C1"
  },
  {
    "id": "c1_246",
    "word": "compute",
    "pos": "v.",
    "meaning": "คำนวณ",
    "reading": "",
    "ipa": "kəmˈpjut",
    "level": "C1"
  },
  {
    "id": "c1_247",
    "word": "conceal",
    "pos": "v.",
    "meaning": "ปิดบัง",
    "reading": "",
    "ipa": "kənˈsiɫ",
    "level": "C1"
  },
  {
    "id": "c1_248",
    "word": "concede",
    "pos": "v.",
    "meaning": "ยอมรับ",
    "reading": "",
    "ipa": "kənˈsid",
    "level": "C1"
  },
  {
    "id": "c1_249",
    "word": "conceive",
    "pos": "v.",
    "meaning": "คิด",
    "reading": "",
    "ipa": "kənˈsiv",
    "level": "C1"
  },
  {
    "id": "c1_250",
    "word": "conception",
    "pos": "n.",
    "meaning": "ความคิด",
    "reading": "",
    "ipa": "kənˈsɛpʃən",
    "level": "C1"
  },
  {
    "id": "c1_251",
    "word": "concession",
    "pos": "n.",
    "meaning": "สัมปทาน",
    "reading": "",
    "ipa": "kənˈsɛʃən",
    "level": "C1"
  },
  {
    "id": "c1_252",
    "word": "condemn",
    "pos": "v.",
    "meaning": "ประณาม",
    "reading": "",
    "ipa": "kənˈdɛm",
    "level": "C1"
  },
  {
    "id": "c1_253",
    "word": "confer",
    "pos": "v.",
    "meaning": "ปรึกษา",
    "reading": "",
    "ipa": "kənˈfɝ",
    "level": "C1"
  },
  {
    "id": "c1_254",
    "word": "confession",
    "pos": "n.",
    "meaning": "คำสารภาพ",
    "reading": "",
    "ipa": "kənˈfɛʃən",
    "level": "C1"
  },
  {
    "id": "c1_255",
    "word": "configuration",
    "pos": "n.",
    "meaning": "การกำหนดค่า",
    "reading": "",
    "ipa": "kənˌfɪɡjɝˈeɪʃən",
    "level": "C1"
  },
  {
    "id": "c1_256",
    "word": "confine",
    "pos": "v.",
    "meaning": "จำกัด",
    "reading": "",
    "ipa": "kənˈfaɪn",
    "level": "C1"
  },
  {
    "id": "c1_257",
    "word": "confirmation",
    "pos": "n.",
    "meaning": "การยืนยัน",
    "reading": "",
    "ipa": "ˌkɑnfɝˈmeɪʃən",
    "level": "C1"
  },
  {
    "id": "c1_258",
    "word": "confront",
    "pos": "v.",
    "meaning": "เผชิญหน้า",
    "reading": "",
    "ipa": "kənˈfɹənt",
    "level": "C1"
  },
  {
    "id": "c1_259",
    "word": "confrontation",
    "pos": "n.",
    "meaning": "การเผชิญหน้า",
    "reading": "",
    "ipa": "ˌkɑnfɹənˈteɪʃən",
    "level": "C1"
  },
  {
    "id": "c1_260",
    "word": "congratulate",
    "pos": "v.",
    "meaning": "แสดงความยินดี",
    "reading": "",
    "ipa": "kənˈɡɹætʃəˌɫeɪt",
    "level": "C1"
  },
  {
    "id": "c1_261",
    "word": "congregation",
    "pos": "n.",
    "meaning": "ที่ประชุม",
    "reading": "",
    "ipa": "ˌkɑŋɡɹəˈɡeɪʃən",
    "level": "C1"
  },
  {
    "id": "c1_262",
    "word": "congressional",
    "pos": "adj.",
    "meaning": "เกี่ยวกับสภา",
    "reading": "",
    "ipa": "kənˈɡɹɛʃənəɫ",
    "level": "C1"
  },
  {
    "id": "c1_263",
    "word": "conquer",
    "pos": "v.",
    "meaning": "พิชิต",
    "reading": "",
    "ipa": "ˈkɑŋkɝ",
    "level": "C1"
  },
  {
    "id": "c1_264",
    "word": "conscience",
    "pos": "n.",
    "meaning": "จิตสำนึก",
    "reading": "",
    "ipa": "ˈkɑnʃəns",
    "level": "C1"
  },
  {
    "id": "c1_265",
    "word": "consciousness",
    "pos": "n.",
    "meaning": "ความตระหนักรู้",
    "reading": "",
    "ipa": "ˈkɑnʃəsnəs",
    "level": "C1"
  },
  {
    "id": "c1_266",
    "word": "consecutive",
    "pos": "adj.",
    "meaning": "ต่อเนื่อง",
    "reading": "",
    "ipa": "kənˈsɛkjətɪv",
    "level": "C1"
  },
  {
    "id": "c1_267",
    "word": "consensus",
    "pos": "n.",
    "meaning": "ความเห็นพ้อง",
    "reading": "",
    "ipa": "kənˈsɛnsəs",
    "level": "C1"
  },
  {
    "id": "c1_268",
    "word": "consent",
    "pos": "n., v.",
    "meaning": "การยินยอม",
    "reading": "",
    "ipa": "kənˈsɛnt",
    "level": "C1"
  },
  {
    "id": "c1_269",
    "word": "conserve",
    "pos": "v.",
    "meaning": "อนุรักษ์",
    "reading": "",
    "ipa": "kənˈsɝv",
    "level": "C1"
  },
  {
    "id": "c1_270",
    "word": "consistency",
    "pos": "n.",
    "meaning": "ความสม่ำเสมอ",
    "reading": "",
    "ipa": "kənˈsɪstənsi",
    "level": "C1"
  },
  {
    "id": "c1_271",
    "word": "consolidate",
    "pos": "v.",
    "meaning": "รวมเป็นหนึ่ง",
    "reading": "",
    "ipa": "kənˈsɑɫɪˌdeɪt",
    "level": "C1"
  },
  {
    "id": "c1_272",
    "word": "constituency",
    "pos": "n.",
    "meaning": "เขตเลือกตั้ง",
    "reading": "",
    "ipa": "kənˈstɪtʃuənsi",
    "level": "C1"
  },
  {
    "id": "c1_273",
    "word": "constitute",
    "pos": "v.",
    "meaning": "ประกอบด้วย",
    "reading": "",
    "ipa": "ˈkɑnstəˌtut",
    "level": "C1"
  },
  {
    "id": "c1_274",
    "word": "constitution",
    "pos": "n.",
    "meaning": "รัฐธรรมนูญ",
    "reading": "",
    "ipa": "ˌkɑnstəˈtuʃən",
    "level": "C1"
  },
  {
    "id": "c1_275",
    "word": "constitutional",
    "pos": "adj.",
    "meaning": "เกี่ยวกับรัฐธรรมนูญ",
    "reading": "",
    "ipa": "ˌkɑnstəˈtuʃənəɫ",
    "level": "C1"
  },
  {
    "id": "c1_276",
    "word": "constraint",
    "pos": "n.",
    "meaning": "ข้อจำกัด",
    "reading": "",
    "ipa": "kənˈstɹeɪnt",
    "level": "C1"
  },
  {
    "id": "c1_277",
    "word": "consultation",
    "pos": "n.",
    "meaning": "การปรึกษา",
    "reading": "",
    "ipa": "ˌkɑnsəɫˈteɪʃən",
    "level": "C1"
  },
  {
    "id": "c1_278",
    "word": "contemplate",
    "pos": "v.",
    "meaning": "พิจารณา",
    "reading": "",
    "ipa": "ˈkɑntəmˌpɫeɪt",
    "level": "C1"
  },
  {
    "id": "c1_279",
    "word": "contempt",
    "pos": "n.",
    "meaning": "การดูหมิ่น",
    "reading": "",
    "ipa": "kənˈtɛmpt",
    "level": "C1"
  },
  {
    "id": "c1_280",
    "word": "contend",
    "pos": "v.",
    "meaning": "โต้แย้ง",
    "reading": "",
    "ipa": "kənˈtɛnd",
    "level": "C1"
  },
  {
    "id": "c1_281",
    "word": "contender",
    "pos": "n.",
    "meaning": "ผู้แข่งขัน",
    "reading": "",
    "ipa": "kənˈtɛndɝ",
    "level": "C1"
  },
  {
    "id": "c1_282",
    "word": "content",
    "pos": "adj.",
    "meaning": "พอใจ",
    "reading": "",
    "ipa": "ˈkɑntɛnt",
    "level": "C1"
  },
  {
    "id": "c1_283",
    "word": "contention",
    "pos": "n.",
    "meaning": "การโต้แย้ง",
    "reading": "",
    "ipa": "kənˈtɛnʃən",
    "level": "C1"
  },
  {
    "id": "c1_284",
    "word": "continually",
    "pos": "adv.",
    "meaning": "อย่างต่อเนื่อง",
    "reading": "",
    "ipa": "kənˈtɪnjuəɫi",
    "level": "C1"
  },
  {
    "id": "c1_285",
    "word": "contractor",
    "pos": "n.",
    "meaning": "ผู้รับเหมา",
    "reading": "",
    "ipa": "ˈkɑnˌtɹæktɝ",
    "level": "C1"
  },
  {
    "id": "c1_286",
    "word": "contradiction",
    "pos": "n.",
    "meaning": "ความขัดแย้ง",
    "reading": "",
    "ipa": "ˌkɑntɹəˈdɪkʃən",
    "level": "C1"
  },
  {
    "id": "c1_287",
    "word": "contrary",
    "pos": "adj., n.",
    "meaning": "ตรงกันข้าม",
    "reading": "",
    "ipa": "ˈkɑntɹɛɹi",
    "level": "C1"
  },
  {
    "id": "c1_288",
    "word": "contributor",
    "pos": "n.",
    "meaning": "ผู้สนับสนุน",
    "reading": "",
    "ipa": "kənˈtɹɪbjətɝ",
    "level": "C1"
  },
  {
    "id": "c1_289",
    "word": "conversion",
    "pos": "n.",
    "meaning": "การเปลี่ยนแปลง",
    "reading": "",
    "ipa": "kənˈvɝʒən",
    "level": "C1"
  },
  {
    "id": "c1_290",
    "word": "convict",
    "pos": "v.",
    "meaning": "นักโทษ",
    "reading": "",
    "ipa": "ˈkɑnvɪkt",
    "level": "C1"
  },
  {
    "id": "c1_291",
    "word": "conviction",
    "pos": "n.",
    "meaning": "การพิสูจน์ว่าผิด",
    "reading": "",
    "ipa": "kənˈvɪkʃən",
    "level": "C1"
  },
  {
    "id": "c1_292",
    "word": "cooperate",
    "pos": "v.",
    "meaning": "ร่วมมือ",
    "reading": "",
    "ipa": "ˈkwɑpɝˌeɪt",
    "level": "C1"
  },
  {
    "id": "c1_293",
    "word": "cooperative",
    "pos": "adj.",
    "meaning": "ความร่วมมือ",
    "reading": "",
    "ipa": "koʊˈɑpɝˌeɪtɪv",
    "level": "C1"
  },
  {
    "id": "c1_294",
    "word": "coordinate",
    "pos": "v.",
    "meaning": "ประสานงาน",
    "reading": "",
    "ipa": "koʊˈɔɹdəˌneɪt",
    "level": "C1"
  },
  {
    "id": "c1_295",
    "word": "coordination",
    "pos": "n.",
    "meaning": "การประสานงาน",
    "reading": "",
    "ipa": "koʊˌɔɹdəˈneɪʃən",
    "level": "C1"
  },
  {
    "id": "c1_296",
    "word": "coordinator",
    "pos": "n.",
    "meaning": "ผู้ประสานงาน",
    "reading": "",
    "ipa": "koʊˈɔɹdəˌneɪtɝ",
    "level": "C1"
  },
  {
    "id": "c1_297",
    "word": "cop",
    "pos": "n.",
    "meaning": "ตำรวจ",
    "reading": "",
    "ipa": "ˈkɑp",
    "level": "C1"
  },
  {
    "id": "c1_298",
    "word": "copper",
    "pos": "n.",
    "meaning": "ทองแดง",
    "reading": "",
    "ipa": "ˈkɑpɝ",
    "level": "C1"
  },
  {
    "id": "c1_299",
    "word": "copyright",
    "pos": "n.",
    "meaning": "ลิขสิทธิ์",
    "reading": "",
    "ipa": "ˈkɑpiˌɹaɪt",
    "level": "C1"
  },
  {
    "id": "c1_300",
    "word": "correction",
    "pos": "n.",
    "meaning": "การแก้ไข",
    "reading": "",
    "ipa": "kɝˈɛkʃən",
    "level": "C1"
  },
  {
    "id": "c1_301",
    "word": "correlate",
    "pos": "v.",
    "meaning": "มีความสัมพันธ์",
    "reading": "",
    "ipa": "ˈkɔɹəˌɫeɪt",
    "level": "C1"
  },
  {
    "id": "c1_302",
    "word": "correlation",
    "pos": "n.",
    "meaning": "ความสัมพันธ์",
    "reading": "",
    "ipa": "ˌkɔɹəˈɫeɪʃən",
    "level": "C1"
  },
  {
    "id": "c1_303",
    "word": "correspond",
    "pos": "v.",
    "meaning": "สอดคล้อง",
    "reading": "",
    "ipa": "ˌkɔɹəˈspɑnd",
    "level": "C1"
  },
  {
    "id": "c1_304",
    "word": "correspondence",
    "pos": "n.",
    "meaning": "การติดต่อ",
    "reading": "",
    "ipa": "ˌkɔɹəˈspɑndəns",
    "level": "C1"
  },
  {
    "id": "c1_305",
    "word": "correspondent",
    "pos": "n.",
    "meaning": "นักข่าว",
    "reading": "",
    "ipa": "ˌkɔɹəˈspɑndənt",
    "level": "C1"
  },
  {
    "id": "c1_306",
    "word": "corresponding",
    "pos": "adj.",
    "meaning": "ที่สอดคล้อง",
    "reading": "",
    "ipa": "ˌkɔɹəˈspɑndɪŋ",
    "level": "C1"
  },
  {
    "id": "c1_307",
    "word": "corrupt",
    "pos": "adj.",
    "meaning": "ที่ทุจริต",
    "reading": "",
    "ipa": "kɝˈəpt",
    "level": "C1"
  },
  {
    "id": "c1_308",
    "word": "corruption",
    "pos": "n.",
    "meaning": "การทุจริต",
    "reading": "",
    "ipa": "kɝˈəpʃən",
    "level": "C1"
  },
  {
    "id": "c1_309",
    "word": "costly",
    "pos": "adj.",
    "meaning": "ราคาแพง",
    "reading": "",
    "ipa": "ˈkɑstɫi",
    "level": "C1"
  },
  {
    "id": "c1_310",
    "word": "councillor",
    "pos": "n.",
    "meaning": "สมาชิกสภา",
    "reading": "",
    "ipa": "ˈkaʊnsəɫɝ",
    "level": "C1"
  },
  {
    "id": "c1_311",
    "word": "counselling",
    "pos": "n.",
    "meaning": "การให้คำปรึกษา",
    "reading": "",
    "ipa": "ˈkaʊnsəɫɪŋ",
    "level": "C1"
  },
  {
    "id": "c1_312",
    "word": "counsellor",
    "pos": "n.",
    "meaning": "ที่ปรึกษา",
    "reading": "",
    "ipa": "ˈkaʊnsəɫɝ",
    "level": "C1"
  },
  {
    "id": "c1_313",
    "word": "counterpart",
    "pos": "n.",
    "meaning": "ชุดสำเนา สิ่งที่คู่กัน",
    "reading": "",
    "ipa": "ˈkaʊntɝˌpɑɹt",
    "level": "C1"
  },
  {
    "id": "c1_314",
    "word": "countless",
    "pos": "adj.",
    "meaning": "นับไม่ถ้วน",
    "reading": "",
    "ipa": "ˈkaʊntɫəs",
    "level": "C1"
  },
  {
    "id": "c1_315",
    "word": "coup",
    "pos": "n.",
    "meaning": "รัฐประหาร",
    "reading": "",
    "ipa": "ˈku",
    "level": "C1"
  },
  {
    "id": "c1_316",
    "word": "courtesy",
    "pos": "n.",
    "meaning": "ความสุภาพ",
    "reading": "",
    "ipa": "ˈkɝtəsi",
    "level": "C1"
  },
  {
    "id": "c1_317",
    "word": "crawl",
    "pos": "v.",
    "meaning": "คลาน",
    "reading": "",
    "ipa": "ˈkɹɔɫ",
    "level": "C1"
  },
  {
    "id": "c1_318",
    "word": "creator",
    "pos": "n.",
    "meaning": "ผู้สร้าง",
    "reading": "",
    "ipa": "kɹiˈeɪtɝ",
    "level": "C1"
  },
  {
    "id": "c1_319",
    "word": "credibility",
    "pos": "n.",
    "meaning": "ความน่าเชื่อถือ",
    "reading": "",
    "ipa": "ˌkɹɛdəˈbɪɫɪti",
    "level": "C1"
  },
  {
    "id": "c1_320",
    "word": "credible",
    "pos": "adj.",
    "meaning": "น่าเชื่อถือ",
    "reading": "",
    "ipa": "ˈkɹɛdəbəɫ",
    "level": "C1"
  },
  {
    "id": "c1_321",
    "word": "creep",
    "pos": "v.",
    "meaning": "คลาน",
    "reading": "",
    "ipa": "ˈkɹip",
    "level": "C1"
  },
  {
    "id": "c1_322",
    "word": "critique",
    "pos": "n.",
    "meaning": "บทวิจารณ์",
    "reading": "",
    "ipa": "kɹəˈtik",
    "level": "C1"
  },
  {
    "id": "c1_323",
    "word": "crown",
    "pos": "n.",
    "meaning": "มงกุฎ",
    "reading": "",
    "ipa": "ˈkɹaʊn",
    "level": "C1"
  },
  {
    "id": "c1_324",
    "word": "crude",
    "pos": "adj.",
    "meaning": "หยาบ",
    "reading": "",
    "ipa": "ˈkɹud",
    "level": "C1"
  },
  {
    "id": "c1_325",
    "word": "crush",
    "pos": "v.",
    "meaning": "บดขยี้",
    "reading": "",
    "ipa": "ˈkɹəʃ",
    "level": "C1"
  },
  {
    "id": "c1_326",
    "word": "crystal",
    "pos": "n.",
    "meaning": "ผลึก",
    "reading": "",
    "ipa": "ˈkɹɪstəɫ",
    "level": "C1"
  },
  {
    "id": "c1_327",
    "word": "cult",
    "pos": "n., adj.",
    "meaning": "ลัทธิ",
    "reading": "",
    "ipa": "ˈkəɫt",
    "level": "C1"
  },
  {
    "id": "c1_328",
    "word": "cultivate",
    "pos": "v.",
    "meaning": "เพาะปลูก",
    "reading": "",
    "ipa": "ˈkəɫtəˌveɪt",
    "level": "C1"
  },
  {
    "id": "c1_329",
    "word": "curiosity",
    "pos": "n.",
    "meaning": "ความอยากรู้",
    "reading": "",
    "ipa": "ˌkjʊɹiˈɑsəti",
    "level": "C1"
  },
  {
    "id": "c1_330",
    "word": "custody",
    "pos": "n.",
    "meaning": "การดูแล",
    "reading": "",
    "ipa": "ˈkəstədi",
    "level": "C1"
  },
  {
    "id": "c1_331",
    "word": "cutting",
    "pos": "n.",
    "meaning": "การตัด",
    "reading": "",
    "ipa": "ˈkətɪŋ",
    "level": "C1"
  },
  {
    "id": "c1_332",
    "word": "cynical",
    "pos": "adj.",
    "meaning": "เย้ยหยัน",
    "reading": "",
    "ipa": "ˈsɪnɪkəɫ",
    "level": "C1"
  },
  {
    "id": "c1_333",
    "word": "dam",
    "pos": "n.",
    "meaning": "เขื่อน",
    "reading": "",
    "ipa": "ˈdæm",
    "level": "C1"
  },
  {
    "id": "c1_334",
    "word": "damaging",
    "pos": "adj.",
    "meaning": "ที่ก่อให้เกิดความเสียหาย",
    "reading": "",
    "ipa": "ˈdæmɪdʒɪŋ",
    "level": "C1"
  },
  {
    "id": "c1_335",
    "word": "dawn",
    "pos": "n.",
    "meaning": "รุ่งอรุณ",
    "reading": "",
    "ipa": "ˈdɔn",
    "level": "C1"
  },
  {
    "id": "c1_336",
    "word": "debris",
    "pos": "n.",
    "meaning": "เศษซาก",
    "reading": "",
    "ipa": "dəˈbɹi",
    "level": "C1"
  },
  {
    "id": "c1_337",
    "word": "debut",
    "pos": "n.",
    "meaning": "การเปิดตัว",
    "reading": "",
    "ipa": "ˈdeɪbju",
    "level": "C1"
  },
  {
    "id": "c1_338",
    "word": "decision-making",
    "pos": "n.",
    "meaning": "การตัดสินใจ",
    "reading": "",
    "ipa": "dɪˈsɪʒənˌmeɪkɪŋ",
    "level": "C1"
  },
  {
    "id": "c1_339",
    "word": "decisive",
    "pos": "adj.",
    "meaning": "เด็ดขาด",
    "reading": "",
    "ipa": "dɪˈsaɪsɪv",
    "level": "C1"
  },
  {
    "id": "c1_340",
    "word": "declaration",
    "pos": "n.",
    "meaning": "การประกาศ",
    "reading": "",
    "ipa": "ˌdɛkɫɝˈeɪʃən",
    "level": "C1"
  },
  {
    "id": "c1_341",
    "word": "dedicated",
    "pos": "adj.",
    "meaning": "ทุ่มเท",
    "reading": "",
    "ipa": "ˈdɛdəkeɪtəd",
    "level": "C1"
  },
  {
    "id": "c1_342",
    "word": "dedication",
    "pos": "n.",
    "meaning": "ความทุ่มเท",
    "reading": "",
    "ipa": "ˌdɛdəˈkeɪʃən",
    "level": "C1"
  },
  {
    "id": "c1_343",
    "word": "deed",
    "pos": "n.",
    "meaning": "การกระทำ",
    "reading": "",
    "ipa": "ˈdid",
    "level": "C1"
  },
  {
    "id": "c1_344",
    "word": "deem",
    "pos": "v.",
    "meaning": "เห็นว่า",
    "reading": "",
    "ipa": "ˈdim",
    "level": "C1"
  },
  {
    "id": "c1_345",
    "word": "default",
    "pos": "n.",
    "meaning": "ค่าเริ่มต้น",
    "reading": "",
    "ipa": "dɪˈfɔɫt",
    "level": "C1"
  },
  {
    "id": "c1_346",
    "word": "defect",
    "pos": "n.",
    "meaning": "ข้อบกพร่อง",
    "reading": "",
    "ipa": "ˈdifɛkt",
    "level": "C1"
  },
  {
    "id": "c1_347",
    "word": "defensive",
    "pos": "adj.",
    "meaning": "ซึ่งป้องกันไว้ได้",
    "reading": "",
    "ipa": "dɪˈfɛnsɪv",
    "level": "C1"
  },
  {
    "id": "c1_348",
    "word": "deficiency",
    "pos": "n.",
    "meaning": "การขาดแคลน",
    "reading": "",
    "ipa": "dɪˈfɪʃənsi",
    "level": "C1"
  },
  {
    "id": "c1_349",
    "word": "deficit",
    "pos": "n.",
    "meaning": "การขาดดุล",
    "reading": "",
    "ipa": "ˈdɛfəsət",
    "level": "C1"
  },
  {
    "id": "c1_350",
    "word": "defy",
    "pos": "v.",
    "meaning": "ท้าทาย",
    "reading": "",
    "ipa": "dɪˈfaɪ",
    "level": "C1"
  },
  {
    "id": "c1_351",
    "word": "delegate",
    "pos": "n.",
    "meaning": "ตัวแทน",
    "reading": "",
    "ipa": "ˈdɛɫəˌɡeɪt",
    "level": "C1"
  },
  {
    "id": "c1_352",
    "word": "delegation",
    "pos": "n.",
    "meaning": "คณะผู้แทน",
    "reading": "",
    "ipa": "ˌdɛɫəˈɡeɪʃən",
    "level": "C1"
  },
  {
    "id": "c1_353",
    "word": "delicate",
    "pos": "adj.",
    "meaning": "ละเอียดอ่อน",
    "reading": "",
    "ipa": "ˈdɛɫəkət",
    "level": "C1"
  },
  {
    "id": "c1_354",
    "word": "demon",
    "pos": "n.",
    "meaning": "ปีศาจ",
    "reading": "",
    "ipa": "ˈdimən",
    "level": "C1"
  },
  {
    "id": "c1_355",
    "word": "denial",
    "pos": "n.",
    "meaning": "การปฏิเสธ",
    "reading": "",
    "ipa": "dɪˈnaɪəɫ",
    "level": "C1"
  },
  {
    "id": "c1_356",
    "word": "denounce",
    "pos": "v.",
    "meaning": "ประณาม",
    "reading": "",
    "ipa": "dɪˈnaʊns",
    "level": "C1"
  },
  {
    "id": "c1_357",
    "word": "dense",
    "pos": "adj.",
    "meaning": "หนาแน่น",
    "reading": "",
    "ipa": "ˈdɛns",
    "level": "C1"
  },
  {
    "id": "c1_358",
    "word": "density",
    "pos": "n.",
    "meaning": "ความหนาแน่น",
    "reading": "",
    "ipa": "ˈdɛnsəti",
    "level": "C1"
  },
  {
    "id": "c1_359",
    "word": "dependence",
    "pos": "n.",
    "meaning": "การพึ่งพา",
    "reading": "",
    "ipa": "dɪˈpɛndəns",
    "level": "C1"
  },
  {
    "id": "c1_360",
    "word": "depict",
    "pos": "v.",
    "meaning": "พรรณนา",
    "reading": "",
    "ipa": "dɪˈpɪkt",
    "level": "C1"
  },
  {
    "id": "c1_361",
    "word": "deploy",
    "pos": "v.",
    "meaning": "จัดเพื่อใช้",
    "reading": "",
    "ipa": "dɪˈpɫɔɪ",
    "level": "C1"
  },
  {
    "id": "c1_362",
    "word": "deployment",
    "pos": "n.",
    "meaning": "การปรับใช้",
    "reading": "",
    "ipa": "dɪˈpɫɔɪmənt",
    "level": "C1"
  },
  {
    "id": "c1_363",
    "word": "deprive",
    "pos": "v.",
    "meaning": "พราก",
    "reading": "",
    "ipa": "dɪˈpɹaɪv",
    "level": "C1"
  },
  {
    "id": "c1_364",
    "word": "deputy",
    "pos": "n.",
    "meaning": "ตัวแทน",
    "reading": "",
    "ipa": "ˈdɛpjəti",
    "level": "C1"
  },
  {
    "id": "c1_365",
    "word": "descend",
    "pos": "v.",
    "meaning": "ลงมา",
    "reading": "",
    "ipa": "dɪˈsɛnd",
    "level": "C1"
  },
  {
    "id": "c1_366",
    "word": "descent",
    "pos": "n.",
    "meaning": "การตก",
    "reading": "",
    "ipa": "dɪˈsɛnt",
    "level": "C1"
  },
  {
    "id": "c1_367",
    "word": "designate",
    "pos": "v.",
    "meaning": "แต่งตั้ง",
    "reading": "",
    "ipa": "ˈdɛzəɡˌneɪt",
    "level": "C1"
  },
  {
    "id": "c1_368",
    "word": "desirable",
    "pos": "adj.",
    "meaning": "น่าปรารถนา",
    "reading": "",
    "ipa": "dɪˈzaɪɝəbəɫ",
    "level": "C1"
  },
  {
    "id": "c1_369",
    "word": "desktop",
    "pos": "n.",
    "meaning": "เดสก์ท็อป",
    "reading": "",
    "ipa": "ˈdɛskˌtɑp",
    "level": "C1"
  },
  {
    "id": "c1_370",
    "word": "destructive",
    "pos": "adj.",
    "meaning": "เป็นการทำลาย",
    "reading": "",
    "ipa": "dɪˈstɹəktɪv",
    "level": "C1"
  },
  {
    "id": "c1_371",
    "word": "detain",
    "pos": "v.",
    "meaning": "กักขัง",
    "reading": "",
    "ipa": "dɪˈteɪn",
    "level": "C1"
  },
  {
    "id": "c1_372",
    "word": "detection",
    "pos": "n.",
    "meaning": "การตรวจจับ",
    "reading": "",
    "ipa": "dɪˈtɛkʃən",
    "level": "C1"
  },
  {
    "id": "c1_373",
    "word": "detention",
    "pos": "n.",
    "meaning": "การกักขัง",
    "reading": "",
    "ipa": "dɪˈtɛnʃən",
    "level": "C1"
  },
  {
    "id": "c1_374",
    "word": "deteriorate",
    "pos": "v.",
    "meaning": "เสื่อมโทรม",
    "reading": "",
    "ipa": "dɪˈtɪɹiɝˌeɪt",
    "level": "C1"
  },
  {
    "id": "c1_375",
    "word": "devastate",
    "pos": "v.",
    "meaning": "ทำลายล้าง",
    "reading": "",
    "ipa": "ˈdɛvəˌsteɪt",
    "level": "C1"
  },
  {
    "id": "c1_376",
    "word": "devil",
    "pos": "n.",
    "meaning": "ปีศาจ",
    "reading": "",
    "ipa": "ˈdɛvəɫ",
    "level": "C1"
  },
  {
    "id": "c1_377",
    "word": "devise",
    "pos": "v.",
    "meaning": "ประดิษฐ์",
    "reading": "",
    "ipa": "dɪˈvaɪs",
    "level": "C1"
  },
  {
    "id": "c1_378",
    "word": "diagnose",
    "pos": "v.",
    "meaning": "วินิจฉัย",
    "reading": "",
    "ipa": "ˌdaɪəɡˈnoʊs",
    "level": "C1"
  },
  {
    "id": "c1_379",
    "word": "diagnosis",
    "pos": "n.",
    "meaning": "การวินิจฉัย",
    "reading": "",
    "ipa": "ˌdaɪəɡˈnoʊsəs",
    "level": "C1"
  },
  {
    "id": "c1_380",
    "word": "dictate",
    "pos": "v.",
    "meaning": "บงการ",
    "reading": "",
    "ipa": "ˈdɪkˌteɪt",
    "level": "C1"
  },
  {
    "id": "c1_381",
    "word": "dictator",
    "pos": "n.",
    "meaning": "เผด็จการ",
    "reading": "",
    "ipa": "ˈdɪkteɪtɝ",
    "level": "C1"
  },
  {
    "id": "c1_382",
    "word": "differentiate",
    "pos": "v.",
    "meaning": "แยกความแตกต่าง",
    "reading": "",
    "ipa": "ˌdɪfɝˈɛnʃiˌeɪt",
    "level": "C1"
  },
  {
    "id": "c1_383",
    "word": "dignity",
    "pos": "n.",
    "meaning": "ศักดิ์ศรี",
    "reading": "",
    "ipa": "ˈdɪɡnəti",
    "level": "C1"
  },
  {
    "id": "c1_384",
    "word": "dilemma",
    "pos": "n.",
    "meaning": "สภาวะลำบาก",
    "reading": "",
    "ipa": "dɪˈɫɛmə",
    "level": "C1"
  },
  {
    "id": "c1_385",
    "word": "dimension",
    "pos": "n.",
    "meaning": "มิติ",
    "reading": "",
    "ipa": "dɪˈmɛnʃən",
    "level": "C1"
  },
  {
    "id": "c1_386",
    "word": "diminish",
    "pos": "v.",
    "meaning": "ลดลง",
    "reading": "",
    "ipa": "dɪˈmɪnɪʃ",
    "level": "C1"
  },
  {
    "id": "c1_387",
    "word": "dip",
    "pos": "v.",
    "meaning": "จุ่ม",
    "reading": "",
    "ipa": "ˈdɪp",
    "level": "C1"
  },
  {
    "id": "c1_388",
    "word": "diplomat",
    "pos": "n.",
    "meaning": "นักการทูต",
    "reading": "",
    "ipa": "ˈdɪpɫəˌmæt",
    "level": "C1"
  },
  {
    "id": "c1_389",
    "word": "diplomatic",
    "pos": "adj.",
    "meaning": "ทางการทูต",
    "reading": "",
    "ipa": "ˌdɪpɫəˈmætɪk",
    "level": "C1"
  },
  {
    "id": "c1_390",
    "word": "directory",
    "pos": "n.",
    "meaning": "ไดเรกทอรี",
    "reading": "",
    "ipa": "daɪˈɹɛktɝi",
    "level": "C1"
  },
  {
    "id": "c1_391",
    "word": "disastrous",
    "pos": "adj.",
    "meaning": "เลวร้าย",
    "reading": "",
    "ipa": "dɪˈzæstɹəs",
    "level": "C1"
  },
  {
    "id": "c1_392",
    "word": "discard",
    "pos": "v.",
    "meaning": "ทิ้ง",
    "reading": "",
    "ipa": "dɪˈskɑɹd",
    "level": "C1"
  },
  {
    "id": "c1_393",
    "word": "discharge",
    "pos": "v.",
    "meaning": "ปล่อย",
    "reading": "",
    "ipa": "ˈdɪsˌtʃɑɹdʒ",
    "level": "C1"
  },
  {
    "id": "c1_394",
    "word": "disclose",
    "pos": "v.",
    "meaning": "เปิดเผย",
    "reading": "",
    "ipa": "dɪˈskɫoʊz",
    "level": "C1"
  },
  {
    "id": "c1_395",
    "word": "disclosure",
    "pos": "n.",
    "meaning": "การเปิดเผย",
    "reading": "",
    "ipa": "dɪˈskɫoʊʒɝ",
    "level": "C1"
  },
  {
    "id": "c1_396",
    "word": "discourse",
    "pos": "n.",
    "meaning": "การสนทนา",
    "reading": "",
    "ipa": "ˈdɪskɔɹs",
    "level": "C1"
  },
  {
    "id": "c1_397",
    "word": "discretion",
    "pos": "n.",
    "meaning": "ดุลยพินิจ",
    "reading": "",
    "ipa": "dɪsˈkɹɛʃən",
    "level": "C1"
  },
  {
    "id": "c1_398",
    "word": "discrimination",
    "pos": "n.",
    "meaning": "การเลือกปฏิบัติ",
    "reading": "",
    "ipa": "dɪsˌkɹɪməˈneɪʃən",
    "level": "C1"
  },
  {
    "id": "c1_399",
    "word": "dismissal",
    "pos": "n.",
    "meaning": "การเลิกจ้าง",
    "reading": "",
    "ipa": "dɪsˈmɪsəɫ",
    "level": "C1"
  },
  {
    "id": "c1_400",
    "word": "displace",
    "pos": "v.",
    "meaning": "แทนที่",
    "reading": "",
    "ipa": "dɪsˈpɫeɪs",
    "level": "C1"
  },
  {
    "id": "c1_401",
    "word": "disposal",
    "pos": "n.",
    "meaning": "การกำจัด",
    "reading": "",
    "ipa": "dɪˈspoʊzəɫ",
    "level": "C1"
  },
  {
    "id": "c1_402",
    "word": "dispose",
    "pos": "v.",
    "meaning": "จัดการ",
    "reading": "",
    "ipa": "dɪˈspoʊz",
    "level": "C1"
  },
  {
    "id": "c1_403",
    "word": "dispute",
    "pos": "n., v.",
    "meaning": "ข้อพิพาท",
    "reading": "",
    "ipa": "dɪˈspjut",
    "level": "C1"
  },
  {
    "id": "c1_404",
    "word": "disrupt",
    "pos": "v.",
    "meaning": "ขัดจังหวะ",
    "reading": "",
    "ipa": "dɪsˈɹəpt",
    "level": "C1"
  },
  {
    "id": "c1_405",
    "word": "disruption",
    "pos": "n.",
    "meaning": "ความวุ่นวาย",
    "reading": "",
    "ipa": "dɪsˈɹəpʃən",
    "level": "C1"
  },
  {
    "id": "c1_406",
    "word": "dissolve",
    "pos": "v.",
    "meaning": "ละลาย",
    "reading": "",
    "ipa": "dɪˈzɑɫv",
    "level": "C1"
  },
  {
    "id": "c1_407",
    "word": "distinction",
    "pos": "n.",
    "meaning": "ความแตกต่าง",
    "reading": "",
    "ipa": "dɪˈstɪŋkʃən",
    "level": "C1"
  },
  {
    "id": "c1_408",
    "word": "distinctive",
    "pos": "adj.",
    "meaning": "โดดเด่น",
    "reading": "",
    "ipa": "dɪˈstɪŋktɪv",
    "level": "C1"
  },
  {
    "id": "c1_409",
    "word": "distort",
    "pos": "v.",
    "meaning": "บิดเบือน",
    "reading": "",
    "ipa": "dɪˈstɔɹt",
    "level": "C1"
  },
  {
    "id": "c1_410",
    "word": "distress",
    "pos": "n., v.",
    "meaning": "ความทุกข์",
    "reading": "",
    "ipa": "dɪˈstɹɛs",
    "level": "C1"
  },
  {
    "id": "c1_411",
    "word": "disturbing",
    "pos": "adj.",
    "meaning": "น่ารบกวน",
    "reading": "",
    "ipa": "dɪˈstɝbɪŋ",
    "level": "C1"
  },
  {
    "id": "c1_412",
    "word": "divert",
    "pos": "v.",
    "meaning": "เบี่ยงเบน",
    "reading": "",
    "ipa": "daɪˈvɝt",
    "level": "C1"
  },
  {
    "id": "c1_413",
    "word": "divine",
    "pos": "adj.",
    "meaning": "เกี่ยวกับพระเจ้า",
    "reading": "",
    "ipa": "dɪˈvaɪn",
    "level": "C1"
  },
  {
    "id": "c1_414",
    "word": "doctrine",
    "pos": "n.",
    "meaning": "หลักคำสอน",
    "reading": "",
    "ipa": "ˈdɑktɹən",
    "level": "C1"
  },
  {
    "id": "c1_415",
    "word": "documentation",
    "pos": "n.",
    "meaning": "เอกสาร",
    "reading": "",
    "ipa": "ˌdɑkjəmɛnˈteɪʃən",
    "level": "C1"
  },
  {
    "id": "c1_416",
    "word": "domain",
    "pos": "n.",
    "meaning": "โดเมน",
    "reading": "",
    "ipa": "doʊˈmeɪn",
    "level": "C1"
  },
  {
    "id": "c1_417",
    "word": "dominance",
    "pos": "n.",
    "meaning": "อำนาจครอบงำ",
    "reading": "",
    "ipa": "ˈdɑmənəns",
    "level": "C1"
  },
  {
    "id": "c1_418",
    "word": "donor",
    "pos": "n.",
    "meaning": "ผู้บริจาค",
    "reading": "",
    "ipa": "ˈdoʊnɝ",
    "level": "C1"
  },
  {
    "id": "c1_419",
    "word": "dose",
    "pos": "n.",
    "meaning": "ปริมาณยา",
    "reading": "",
    "ipa": "ˈdoʊs",
    "level": "C1"
  },
  {
    "id": "c1_420",
    "word": "drain",
    "pos": "v.",
    "meaning": "ระบาย",
    "reading": "",
    "ipa": "ˈdɹeɪn",
    "level": "C1"
  },
  {
    "id": "c1_421",
    "word": "drift",
    "pos": "v.",
    "meaning": "ลอยไป",
    "reading": "",
    "ipa": "ˈdɹɪft",
    "level": "C1"
  },
  {
    "id": "c1_422",
    "word": "driving",
    "pos": "adj.",
    "meaning": "ที่ขับเคลื่อน",
    "reading": "",
    "ipa": "ˈdɹaɪvɪŋ",
    "level": "C1"
  },
  {
    "id": "c1_423",
    "word": "drown",
    "pos": "v.",
    "meaning": "จมน้ำ",
    "reading": "",
    "ipa": "ˈdɹaʊn",
    "level": "C1"
  },
  {
    "id": "c1_424",
    "word": "dual",
    "pos": "adj.",
    "meaning": "สองเท่า",
    "reading": "",
    "ipa": "ˈduəɫ",
    "level": "C1"
  },
  {
    "id": "c1_425",
    "word": "dub",
    "pos": "v.",
    "meaning": "ตั้งชื่อ",
    "reading": "",
    "ipa": "ˈdəb",
    "level": "C1"
  },
  {
    "id": "c1_426",
    "word": "dumb",
    "pos": "adj.",
    "meaning": "โง่",
    "reading": "",
    "ipa": "ˈdəm",
    "level": "C1"
  },
  {
    "id": "c1_427",
    "word": "duo",
    "pos": "n.",
    "meaning": "คู่",
    "reading": "",
    "ipa": "ˈduoʊ",
    "level": "C1"
  },
  {
    "id": "c1_428",
    "word": "eager",
    "pos": "adj.",
    "meaning": "กระตือรือร้น",
    "reading": "",
    "ipa": "ˈiɡɝ",
    "level": "C1"
  },
  {
    "id": "c1_429",
    "word": "earnings",
    "pos": "n.",
    "meaning": "รายได้",
    "reading": "",
    "ipa": "ˈɝnɪŋz",
    "level": "C1"
  },
  {
    "id": "c1_430",
    "word": "ease",
    "pos": "n., v.",
    "meaning": "ความสะดวก",
    "reading": "",
    "ipa": "ˈiz",
    "level": "C1"
  },
  {
    "id": "c1_431",
    "word": "echo",
    "pos": "v., n.",
    "meaning": "สะท้อน",
    "reading": "",
    "ipa": "ˈɛkoʊ",
    "level": "C1"
  },
  {
    "id": "c1_432",
    "word": "ecological",
    "pos": "adj.",
    "meaning": "เชิงนิเวศ",
    "reading": "",
    "ipa": "ɛkəˈɫɑdʒɪkəɫ",
    "level": "C1"
  },
  {
    "id": "c1_433",
    "word": "educator",
    "pos": "n.",
    "meaning": "ผู้สอน",
    "reading": "",
    "ipa": "ˈɛdʒəˌkeɪtɝ",
    "level": "C1"
  },
  {
    "id": "c1_434",
    "word": "effectiveness",
    "pos": "n.",
    "meaning": "ความมีประสิทธิภาพ",
    "reading": "",
    "ipa": "ˈifɛktɪvnəs",
    "level": "C1"
  },
  {
    "id": "c1_435",
    "word": "efficiency",
    "pos": "n.",
    "meaning": "ประสิทธิภาพ",
    "reading": "",
    "ipa": "ɪˈfɪʃənsi",
    "level": "C1"
  },
  {
    "id": "c1_436",
    "word": "ego",
    "pos": "n.",
    "meaning": "อัตตา",
    "reading": "",
    "ipa": "ˈiɡoʊ",
    "level": "C1"
  },
  {
    "id": "c1_437",
    "word": "elaborate",
    "pos": "adj.",
    "meaning": "ซับซ้อน",
    "reading": "",
    "ipa": "ɪˈɫæbɝˌeɪt",
    "level": "C1"
  },
  {
    "id": "c1_438",
    "word": "electoral",
    "pos": "adj.",
    "meaning": "เกี่ยวกับการเลือกตั้ง",
    "reading": "",
    "ipa": "ɪˈɫɛktɝəɫ",
    "level": "C1"
  },
  {
    "id": "c1_439",
    "word": "elevate",
    "pos": "v.",
    "meaning": "ยกระดับ",
    "reading": "",
    "ipa": "ˈɛɫəˌveɪt",
    "level": "C1"
  },
  {
    "id": "c1_440",
    "word": "eligible",
    "pos": "adj.",
    "meaning": "มีสิทธิ์",
    "reading": "",
    "ipa": "ˈɛɫədʒəbəɫ",
    "level": "C1"
  },
  {
    "id": "c1_441",
    "word": "elite",
    "pos": "n.",
    "meaning": "ชนชั้นสูง",
    "reading": "",
    "ipa": "eɪˈɫit",
    "level": "C1"
  },
  {
    "id": "c1_442",
    "word": "embark",
    "pos": "v.",
    "meaning": "เริ่มต้น",
    "reading": "",
    "ipa": "ɛmˈbɑɹk",
    "level": "C1"
  },
  {
    "id": "c1_443",
    "word": "embarrassment",
    "pos": "n.",
    "meaning": "ความอับอาย",
    "reading": "",
    "ipa": "ɪmˈbɛɹəsmənt",
    "level": "C1"
  },
  {
    "id": "c1_444",
    "word": "embassy",
    "pos": "n.",
    "meaning": "สถานทูต",
    "reading": "",
    "ipa": "ˈɛmbəsi",
    "level": "C1"
  },
  {
    "id": "c1_445",
    "word": "embed",
    "pos": "v.",
    "meaning": "ฝัง",
    "reading": "",
    "ipa": "ɪmˈbɛd",
    "level": "C1"
  },
  {
    "id": "c1_446",
    "word": "embody",
    "pos": "v.",
    "meaning": "เป็นตัวแทน",
    "reading": "",
    "ipa": "ɪmˈbɑdi",
    "level": "C1"
  },
  {
    "id": "c1_447",
    "word": "emergence",
    "pos": "n.",
    "meaning": "การปรากฏขึ้น",
    "reading": "",
    "ipa": "ˈimɝdʒəns",
    "level": "C1"
  },
  {
    "id": "c1_448",
    "word": "empirical",
    "pos": "adj.",
    "meaning": "เชิงประจักษ์",
    "reading": "",
    "ipa": "ˌɛmˈpɪɹɪkəɫ",
    "level": "C1"
  },
  {
    "id": "c1_449",
    "word": "empower",
    "pos": "v.",
    "meaning": "เพิ่มพลัง",
    "reading": "",
    "ipa": "ɪmˈpaʊɝ",
    "level": "C1"
  },
  {
    "id": "c1_450",
    "word": "enact",
    "pos": "v.",
    "meaning": "ออกกฎหมาย",
    "reading": "",
    "ipa": "ɪˈnækt",
    "level": "C1"
  },
  {
    "id": "c1_451",
    "word": "encompass",
    "pos": "v.",
    "meaning": "ครอบคลุม",
    "reading": "",
    "ipa": "ɛnˈkəmpəs",
    "level": "C1"
  },
  {
    "id": "c1_452",
    "word": "encouragement",
    "pos": "n.",
    "meaning": "การสนับสนุน",
    "reading": "",
    "ipa": "ɛnˈkɝɪdʒmənt",
    "level": "C1"
  },
  {
    "id": "c1_453",
    "word": "encouraging",
    "pos": "adj.",
    "meaning": "ที่ให้กำลังใจ",
    "reading": "",
    "ipa": "ɛnˈkɝɪdʒɪŋ",
    "level": "C1"
  },
  {
    "id": "c1_454",
    "word": "endeavour",
    "pos": "n.",
    "meaning": "ความพยายาม",
    "reading": "",
    "ipa": "ɪnˈdɛvɝ",
    "level": "C1"
  },
  {
    "id": "c1_455",
    "word": "endless",
    "pos": "adj.",
    "meaning": "ไม่มีที่สิ้นสุด",
    "reading": "",
    "ipa": "ˈɛndɫəs",
    "level": "C1"
  },
  {
    "id": "c1_456",
    "word": "endorse",
    "pos": "v.",
    "meaning": "สนับสนุน",
    "reading": "",
    "ipa": "ɛnˈdɔɹs",
    "level": "C1"
  },
  {
    "id": "c1_457",
    "word": "endorsement",
    "pos": "n.",
    "meaning": "การสนับสนุน",
    "reading": "",
    "ipa": "ɛnˈdɔɹsmənt",
    "level": "C1"
  },
  {
    "id": "c1_458",
    "word": "endure",
    "pos": "v.",
    "meaning": "ทน",
    "reading": "",
    "ipa": "ɛnˈdjʊɹ",
    "level": "C1"
  },
  {
    "id": "c1_459",
    "word": "enforce",
    "pos": "v.",
    "meaning": "บังคับใช้",
    "reading": "",
    "ipa": "ɛnˈfɔɹs",
    "level": "C1"
  },
  {
    "id": "c1_460",
    "word": "enforcement",
    "pos": "n.",
    "meaning": "การบังคับใช้",
    "reading": "",
    "ipa": "ɛnˈfɔɹsmənt",
    "level": "C1"
  },
  {
    "id": "c1_461",
    "word": "engagement",
    "pos": "n.",
    "meaning": "การมีส่วนร่วม",
    "reading": "",
    "ipa": "ɛnˈɡeɪdʒmənt",
    "level": "C1"
  },
  {
    "id": "c1_462",
    "word": "engaging",
    "pos": "adj.",
    "meaning": "ที่น่าสนใจ",
    "reading": "",
    "ipa": "ɛnˈɡeɪdʒɪŋ",
    "level": "C1"
  },
  {
    "id": "c1_463",
    "word": "enquire",
    "pos": "v.",
    "meaning": "สอบถาม",
    "reading": "",
    "ipa": "ɪnˈkwaɪɝ",
    "level": "C1"
  },
  {
    "id": "c1_464",
    "word": "enrich",
    "pos": "v.",
    "meaning": "เพิ่มคุณค่า",
    "reading": "",
    "ipa": "ɛnˈɹɪtʃ",
    "level": "C1"
  },
  {
    "id": "c1_465",
    "word": "enrol",
    "pos": "v.",
    "meaning": "ลงทะเบียน",
    "reading": "",
    "ipa": "ɛnˈɹoʊɫ",
    "level": "C1"
  },
  {
    "id": "c1_466",
    "word": "ensue",
    "pos": "v.",
    "meaning": "ติดตามผลใกล้ชิด",
    "reading": "",
    "ipa": "ɪnˈsu",
    "level": "C1"
  },
  {
    "id": "c1_467",
    "word": "enterprise",
    "pos": "n.",
    "meaning": "องค์กร",
    "reading": "",
    "ipa": "ˈɛnɝˌpɹaɪz",
    "level": "C1"
  },
  {
    "id": "c1_468",
    "word": "enthusiast",
    "pos": "n.",
    "meaning": "ผู้ที่กระตือรือร้น",
    "reading": "",
    "ipa": "ɛnˈθuziˌæst",
    "level": "C1"
  },
  {
    "id": "c1_469",
    "word": "entitle",
    "pos": "v.",
    "meaning": "ให้สิทธิ์",
    "reading": "",
    "ipa": "ɛnˈtaɪtəɫ",
    "level": "C1"
  },
  {
    "id": "c1_470",
    "word": "entity",
    "pos": "n.",
    "meaning": "หน่วยงาน",
    "reading": "",
    "ipa": "ˈɛntəti",
    "level": "C1"
  },
  {
    "id": "c1_471",
    "word": "epidemic",
    "pos": "n.",
    "meaning": "โรคระบาด",
    "reading": "",
    "ipa": "ˌɛpəˈdɛmɪk",
    "level": "C1"
  },
  {
    "id": "c1_472",
    "word": "equality",
    "pos": "n.",
    "meaning": "ความเท่าเทียม",
    "reading": "",
    "ipa": "ɪˈkwɑɫəti",
    "level": "C1"
  },
  {
    "id": "c1_473",
    "word": "equation",
    "pos": "n.",
    "meaning": "สมการ",
    "reading": "",
    "ipa": "ɪˈkweɪʒən",
    "level": "C1"
  },
  {
    "id": "c1_474",
    "word": "erect",
    "pos": "v.",
    "meaning": "สร้างขึ้น",
    "reading": "",
    "ipa": "ɪˈɹɛkt",
    "level": "C1"
  },
  {
    "id": "c1_475",
    "word": "escalate",
    "pos": "v.",
    "meaning": "ยกระดับ",
    "reading": "",
    "ipa": "ˈɛskəˌɫeɪt",
    "level": "C1"
  },
  {
    "id": "c1_476",
    "word": "essence",
    "pos": "n.",
    "meaning": "แก่นแท้",
    "reading": "",
    "ipa": "ˈɛsəns",
    "level": "C1"
  },
  {
    "id": "c1_477",
    "word": "establishment",
    "pos": "n.",
    "meaning": "การก่อตั้ง",
    "reading": "",
    "ipa": "ɪˈstæbɫɪʃmənt",
    "level": "C1"
  },
  {
    "id": "c1_478",
    "word": "eternal",
    "pos": "adj.",
    "meaning": "นิรันดร์",
    "reading": "",
    "ipa": "iˈtɝnəɫ",
    "level": "C1"
  },
  {
    "id": "c1_479",
    "word": "evacuate",
    "pos": "v.",
    "meaning": "อพยพ",
    "reading": "",
    "ipa": "iˈvækjəˌeɪt",
    "level": "C1"
  },
  {
    "id": "c1_480",
    "word": "evoke",
    "pos": "v.",
    "meaning": "กระตุ้น",
    "reading": "",
    "ipa": "iˈvoʊk",
    "level": "C1"
  },
  {
    "id": "c1_481",
    "word": "evolutionary",
    "pos": "adj.",
    "meaning": "เกี่ยวกับวิวัฒนาการ",
    "reading": "",
    "ipa": "ˌɛvəˈɫuʃəˌnɛɹi",
    "level": "C1"
  },
  {
    "id": "c1_482",
    "word": "exaggerate",
    "pos": "v.",
    "meaning": "พูดเกินจริง",
    "reading": "",
    "ipa": "ɪɡˈzædʒɝˌeɪt",
    "level": "C1"
  },
  {
    "id": "c1_483",
    "word": "excellence",
    "pos": "n.",
    "meaning": "ความเป็นเลิศ",
    "reading": "",
    "ipa": "ˈɛksəɫəns",
    "level": "C1"
  },
  {
    "id": "c1_484",
    "word": "exceptional",
    "pos": "adj.",
    "meaning": "ยอดเยี่ยม",
    "reading": "",
    "ipa": "ɪkˈsɛpʃənəɫ",
    "level": "C1"
  },
  {
    "id": "c1_485",
    "word": "excess",
    "pos": "n., adj.",
    "meaning": "ส่วนเกิน",
    "reading": "",
    "ipa": "ˈɛkˌsɛs",
    "level": "C1"
  },
  {
    "id": "c1_486",
    "word": "exclusion",
    "pos": "n.",
    "meaning": "การยกเว้น",
    "reading": "",
    "ipa": "ɪkˈskɫuʒən",
    "level": "C1"
  },
  {
    "id": "c1_487",
    "word": "exclusive",
    "pos": "adj.",
    "meaning": "พิเศษ",
    "reading": "",
    "ipa": "ɪkˈskɫusɪv",
    "level": "C1"
  },
  {
    "id": "c1_488",
    "word": "exclusively",
    "pos": "adv.",
    "meaning": "โดยเฉพาะ",
    "reading": "",
    "ipa": "ɪkˈskɫusɪvɫi",
    "level": "C1"
  },
  {
    "id": "c1_489",
    "word": "execute",
    "pos": "v.",
    "meaning": "ดำเนินการ",
    "reading": "",
    "ipa": "ˈɛksəkˌjut",
    "level": "C1"
  },
  {
    "id": "c1_490",
    "word": "execution",
    "pos": "n.",
    "meaning": "การดำเนินการ",
    "reading": "",
    "ipa": "ˌɛksəkˈjuʃən",
    "level": "C1"
  },
  {
    "id": "c1_491",
    "word": "exert",
    "pos": "v.",
    "meaning": "ใช้ (กำลัง)",
    "reading": "",
    "ipa": "ɪɡˈzɝt",
    "level": "C1"
  },
  {
    "id": "c1_492",
    "word": "exile",
    "pos": "n.",
    "meaning": "เนรเทศ",
    "reading": "",
    "ipa": "ˈɛɡˌzaɪɫ",
    "level": "C1"
  },
  {
    "id": "c1_493",
    "word": "expenditure",
    "pos": "n.",
    "meaning": "ค่าใช้จ่าย",
    "reading": "",
    "ipa": "ɪkˈspɛndətʃɝ",
    "level": "C1"
  },
  {
    "id": "c1_494",
    "word": "experimental",
    "pos": "adj.",
    "meaning": "ที่เป็นการทดลอง",
    "reading": "",
    "ipa": "ɪkˌspɛɹɪˈmɛntəɫ",
    "level": "C1"
  },
  {
    "id": "c1_495",
    "word": "expire",
    "pos": "v.",
    "meaning": "หมดอายุ",
    "reading": "",
    "ipa": "ɪkˈspaɪɹ",
    "level": "C1"
  },
  {
    "id": "c1_496",
    "word": "explicit",
    "pos": "adj.",
    "meaning": "ชัดเจน",
    "reading": "",
    "ipa": "ɪksˈpɫɪsət",
    "level": "C1"
  },
  {
    "id": "c1_497",
    "word": "explicitly",
    "pos": "adv.",
    "meaning": "อย่างชัดเจน",
    "reading": "",
    "ipa": "ɪksˈpɫɪsətɫi",
    "level": "C1"
  },
  {
    "id": "c1_498",
    "word": "exploitation",
    "pos": "n.",
    "meaning": "การหาประโยชน์จากคนอื่น",
    "reading": "",
    "ipa": "ˌɛksˌpɫɔɪˈteɪʃən",
    "level": "C1"
  },
  {
    "id": "c1_499",
    "word": "explosive",
    "pos": "adj., n.",
    "meaning": "ระเบิด",
    "reading": "",
    "ipa": "ɪksˈpɫoʊsɪv",
    "level": "C1"
  },
  {
    "id": "c1_500",
    "word": "extremist",
    "pos": "n.",
    "meaning": "ผู้คลั่งไคล้",
    "reading": "",
    "ipa": "ɛkˈstɹimɪst",
    "level": "C1"
  },
  {
    "id": "c1_501",
    "word": "facilitate",
    "pos": "v.",
    "meaning": "อำนวยความสะดวก",
    "reading": "",
    "ipa": "fəˈsɪɫəˌteɪt",
    "level": "C1"
  },
  {
    "id": "c1_502",
    "word": "faction",
    "pos": "n.",
    "meaning": "กลุ่ม",
    "reading": "",
    "ipa": "ˈfækʃən",
    "level": "C1"
  },
  {
    "id": "c1_503",
    "word": "faculty",
    "pos": "n.",
    "meaning": "คณะ",
    "reading": "",
    "ipa": "ˈfækəɫti",
    "level": "C1"
  },
  {
    "id": "c1_504",
    "word": "fade",
    "pos": "v.",
    "meaning": "จางลง",
    "reading": "",
    "ipa": "ˈfeɪd",
    "level": "C1"
  },
  {
    "id": "c1_505",
    "word": "fairness",
    "pos": "n.",
    "meaning": "ความยุติธรรม",
    "reading": "",
    "ipa": "ˈfɛɹnəs",
    "level": "C1"
  },
  {
    "id": "c1_506",
    "word": "fatal",
    "pos": "adj.",
    "meaning": "ถึงตาย",
    "reading": "",
    "ipa": "ˈfeɪtəɫ",
    "level": "C1"
  },
  {
    "id": "c1_507",
    "word": "fate",
    "pos": "n.",
    "meaning": "โชคชะตา",
    "reading": "",
    "ipa": "ˈfeɪt",
    "level": "C1"
  },
  {
    "id": "c1_508",
    "word": "favourable",
    "pos": "adj.",
    "meaning": "ที่น่าพอใจ",
    "reading": "",
    "ipa": "ˈfeɪvɝəbəɫ",
    "level": "C1"
  },
  {
    "id": "c1_509",
    "word": "feat",
    "pos": "n.",
    "meaning": "ความสำเร็จ",
    "reading": "",
    "ipa": "ˈfit",
    "level": "C1"
  },
  {
    "id": "c1_510",
    "word": "feminist",
    "pos": "adj., n.",
    "meaning": "สตรีนิยม",
    "reading": "",
    "ipa": "ˈfɛmənɪst",
    "level": "C1"
  },
  {
    "id": "c1_511",
    "word": "fibre",
    "pos": "n.",
    "meaning": "เส้นใย",
    "reading": "",
    "ipa": "ˈfaɪbɝ",
    "level": "C1"
  },
  {
    "id": "c1_512",
    "word": "fierce",
    "pos": "adj.",
    "meaning": "ดุร้าย",
    "reading": "",
    "ipa": "ˈfɪɹs",
    "level": "C1"
  },
  {
    "id": "c1_513",
    "word": "film-maker",
    "pos": "n.",
    "meaning": "ผู้สร้างภาพยนตร์",
    "reading": "",
    "ipa": "ˈfɪɫm ˈmeɪkɝ",
    "level": "C1"
  },
  {
    "id": "c1_514",
    "word": "filter",
    "pos": "n., v.",
    "meaning": "กรอง",
    "reading": "",
    "ipa": "ˈfɪɫtɝ",
    "level": "C1"
  },
  {
    "id": "c1_515",
    "word": "fine",
    "pos": "n., v.",
    "meaning": "ปรับ (เงิน)",
    "reading": "",
    "ipa": "ˈfaɪn",
    "level": "C1"
  },
  {
    "id": "c1_516",
    "word": "firearm",
    "pos": "n.",
    "meaning": "อาวุธปืน",
    "reading": "",
    "ipa": "ˈfaɪˌɹɑɹm",
    "level": "C1"
  },
  {
    "id": "c1_517",
    "word": "fit",
    "pos": "n.",
    "meaning": "พอดี",
    "reading": "",
    "ipa": "ˈfɪt",
    "level": "C1"
  },
  {
    "id": "c1_518",
    "word": "fixture",
    "pos": "n.",
    "meaning": "ของติดตั้ง",
    "reading": "",
    "ipa": "ˈfɪkstʃɝ",
    "level": "C1"
  },
  {
    "id": "c1_519",
    "word": "flaw",
    "pos": "n.",
    "meaning": "ข้อบกพร่อง",
    "reading": "",
    "ipa": "ˈfɫɔ",
    "level": "C1"
  },
  {
    "id": "c1_520",
    "word": "flawed",
    "pos": "adj.",
    "meaning": "ที่มีข้อบกพร่อง",
    "reading": "",
    "ipa": "ˈfɫɔd",
    "level": "C1"
  },
  {
    "id": "c1_521",
    "word": "flee",
    "pos": "v.",
    "meaning": "หนี เผ่นหนี",
    "reading": "",
    "ipa": "ˈfɫi",
    "level": "C1"
  },
  {
    "id": "c1_522",
    "word": "fleet",
    "pos": "n.",
    "meaning": "กองเรือรบ",
    "reading": "",
    "ipa": "ˈfɫit",
    "level": "C1"
  },
  {
    "id": "c1_523",
    "word": "flesh",
    "pos": "n.",
    "meaning": "เนื้อ",
    "reading": "",
    "ipa": "ˈfɫɛʃ",
    "level": "C1"
  },
  {
    "id": "c1_524",
    "word": "flexibility",
    "pos": "n.",
    "meaning": "ความยืดหยุ่น",
    "reading": "",
    "ipa": "ˌfɫɛksəˈbɪɫəti",
    "level": "C1"
  },
  {
    "id": "c1_525",
    "word": "flourish",
    "pos": "v.",
    "meaning": "เจริญรุ่งเรือง",
    "reading": "",
    "ipa": "ˈfɫɝɪʃ",
    "level": "C1"
  },
  {
    "id": "c1_526",
    "word": "fluid",
    "pos": "n.",
    "meaning": "ของเหลว",
    "reading": "",
    "ipa": "ˈfɫuəd",
    "level": "C1"
  },
  {
    "id": "c1_527",
    "word": "footage",
    "pos": "n.",
    "meaning": "ฟุตเทจ",
    "reading": "",
    "ipa": "ˈfʊtɪdʒ",
    "level": "C1"
  },
  {
    "id": "c1_528",
    "word": "foreigner",
    "pos": "n.",
    "meaning": "ชาวต่างชาติ",
    "reading": "",
    "ipa": "ˈfɑɹənɝ",
    "level": "C1"
  },
  {
    "id": "c1_529",
    "word": "forge",
    "pos": "v.",
    "meaning": "ปลอมแปลง",
    "reading": "",
    "ipa": "ˈfɔɹdʒ",
    "level": "C1"
  },
  {
    "id": "c1_530",
    "word": "formula",
    "pos": "n.",
    "meaning": "สูตร",
    "reading": "",
    "ipa": "ˈfɔɹmjəɫə",
    "level": "C1"
  },
  {
    "id": "c1_531",
    "word": "formulate",
    "pos": "v.",
    "meaning": "กำหนด",
    "reading": "",
    "ipa": "ˈfɔɹmjəˌɫeɪt",
    "level": "C1"
  },
  {
    "id": "c1_532",
    "word": "forth",
    "pos": "adv.",
    "meaning": "ไปข้างหน้า",
    "reading": "",
    "ipa": "ˈfɔɹθ",
    "level": "C1"
  },
  {
    "id": "c1_533",
    "word": "forthcoming",
    "pos": "adj.",
    "meaning": "ที่จะเกิดขึ้น",
    "reading": "",
    "ipa": "ˈfɔɹθˈkəmɪŋ",
    "level": "C1"
  },
  {
    "id": "c1_534",
    "word": "foster",
    "pos": "v.",
    "meaning": "ส่งเสริม",
    "reading": "",
    "ipa": "ˈfɑstɝ",
    "level": "C1"
  },
  {
    "id": "c1_535",
    "word": "fragile",
    "pos": "adj.",
    "meaning": "เปราะบาง",
    "reading": "",
    "ipa": "ˈfɹædʒəɫ",
    "level": "C1"
  },
  {
    "id": "c1_536",
    "word": "franchise",
    "pos": "n.",
    "meaning": "สิทธิพิเศษ",
    "reading": "",
    "ipa": "ˈfɹænˌtʃaɪz",
    "level": "C1"
  },
  {
    "id": "c1_537",
    "word": "frankly",
    "pos": "adv.",
    "meaning": "อย่างตรงไปตรงมา",
    "reading": "",
    "ipa": "ˈfɹæŋkɫi",
    "level": "C1"
  },
  {
    "id": "c1_538",
    "word": "frustrated",
    "pos": "adj.",
    "meaning": "หงุดหงิด",
    "reading": "",
    "ipa": "ˈfɹəsˌtɹeɪtəd",
    "level": "C1"
  },
  {
    "id": "c1_539",
    "word": "frustrating",
    "pos": "adj.",
    "meaning": "น่าหงุดหงิด",
    "reading": "",
    "ipa": "ˈfɹəsˌtɹeɪtɪŋ",
    "level": "C1"
  },
  {
    "id": "c1_540",
    "word": "frustration",
    "pos": "n.",
    "meaning": "ความหงุดหงิด",
    "reading": "",
    "ipa": "fɹəˈstɹeɪʃən",
    "level": "C1"
  },
  {
    "id": "c1_541",
    "word": "functional",
    "pos": "adj.",
    "meaning": "ใช้งานได้จริง",
    "reading": "",
    "ipa": "ˈfəŋkʃənəɫ",
    "level": "C1"
  },
  {
    "id": "c1_542",
    "word": "fundraising",
    "pos": "n.",
    "meaning": "การระดมทุน",
    "reading": "",
    "ipa": "ˈfənˌdɹeɪsɪŋ",
    "level": "C1"
  },
  {
    "id": "c1_543",
    "word": "funeral",
    "pos": "n.",
    "meaning": "งานศพ",
    "reading": "",
    "ipa": "ˈfjunɝəɫ",
    "level": "C1"
  },
  {
    "id": "c1_544",
    "word": "gallon",
    "pos": "n.",
    "meaning": "แกลลอน",
    "reading": "",
    "ipa": "ˈɡæɫən",
    "level": "C1"
  },
  {
    "id": "c1_545",
    "word": "gambling",
    "pos": "n.",
    "meaning": "การพนัน",
    "reading": "",
    "ipa": "ˈɡæmbəɫɪŋ",
    "level": "C1"
  },
  {
    "id": "c1_546",
    "word": "gathering",
    "pos": "n.",
    "meaning": "การรวมตัว",
    "reading": "",
    "ipa": "ˈɡæðɝɪŋ",
    "level": "C1"
  },
  {
    "id": "c1_547",
    "word": "gaze",
    "pos": "n., v.",
    "meaning": "จ้องมอง",
    "reading": "",
    "ipa": "ˈɡeɪz",
    "level": "C1"
  },
  {
    "id": "c1_548",
    "word": "gear",
    "pos": "n.",
    "meaning": "เกียร์",
    "reading": "",
    "ipa": "ˈɡɪɹ",
    "level": "C1"
  },
  {
    "id": "c1_549",
    "word": "generic",
    "pos": "adj.",
    "meaning": "ทั่วไป",
    "reading": "",
    "ipa": "dʒəˈnɛɹɪk",
    "level": "C1"
  },
  {
    "id": "c1_550",
    "word": "genocide",
    "pos": "n.",
    "meaning": "การฆ่าล้างเผ่าพันธุ์",
    "reading": "",
    "ipa": "ˈdʒɛnəˌsaɪd",
    "level": "C1"
  },
  {
    "id": "c1_551",
    "word": "glance",
    "pos": "n., v.",
    "meaning": "ชำเลืองมอง",
    "reading": "",
    "ipa": "ˈɡɫæns",
    "level": "C1"
  },
  {
    "id": "c1_552",
    "word": "glimpse",
    "pos": "n.",
    "meaning": "การมองแวบหนึ่ง",
    "reading": "",
    "ipa": "ˈɡɫɪmps",
    "level": "C1"
  },
  {
    "id": "c1_553",
    "word": "glorious",
    "pos": "adj.",
    "meaning": "รุ่งโรจน์",
    "reading": "",
    "ipa": "ˈɡɫɔɹiəs",
    "level": "C1"
  },
  {
    "id": "c1_554",
    "word": "glory",
    "pos": "n.",
    "meaning": "เกียรติยศ",
    "reading": "",
    "ipa": "ˈɡɫɔɹi",
    "level": "C1"
  },
  {
    "id": "c1_555",
    "word": "governance",
    "pos": "n.",
    "meaning": "การปกครอง",
    "reading": "",
    "ipa": "ˈɡəvɝnəns",
    "level": "C1"
  },
  {
    "id": "c1_556",
    "word": "grace",
    "pos": "n.",
    "meaning": "ความสง่างาม",
    "reading": "",
    "ipa": "ˈɡɹeɪs",
    "level": "C1"
  },
  {
    "id": "c1_557",
    "word": "grasp",
    "pos": "v., n.",
    "meaning": "จับ",
    "reading": "",
    "ipa": "ˈɡɹæsp",
    "level": "C1"
  },
  {
    "id": "c1_558",
    "word": "grave",
    "pos": "n.",
    "meaning": "หลุมศพ",
    "reading": "",
    "ipa": "ˈɡɹeɪv",
    "level": "C1"
  },
  {
    "id": "c1_559",
    "word": "gravity",
    "pos": "n.",
    "meaning": "แรงโน้มถ่วง",
    "reading": "",
    "ipa": "ˈɡɹævəti",
    "level": "C1"
  },
  {
    "id": "c1_560",
    "word": "grid",
    "pos": "n.",
    "meaning": "โครงข่าย",
    "reading": "",
    "ipa": "ˈɡɹɪd",
    "level": "C1"
  },
  {
    "id": "c1_561",
    "word": "grief",
    "pos": "n.",
    "meaning": "ความเศร้าโศก",
    "reading": "",
    "ipa": "ˈɡɹif",
    "level": "C1"
  },
  {
    "id": "c1_562",
    "word": "grin",
    "pos": "v., n.",
    "meaning": "ยิ้มแฉ่ง",
    "reading": "",
    "ipa": "ˈɡɹɪn",
    "level": "C1"
  },
  {
    "id": "c1_563",
    "word": "grind",
    "pos": "v.",
    "meaning": "บด",
    "reading": "",
    "ipa": "ˈɡɹaɪnd",
    "level": "C1"
  },
  {
    "id": "c1_564",
    "word": "grip",
    "pos": "n., v.",
    "meaning": "จับแน่น",
    "reading": "",
    "ipa": "ˈɡɹɪp",
    "level": "C1"
  },
  {
    "id": "c1_565",
    "word": "gross",
    "pos": "adj.",
    "meaning": "รวมทั้งหมด",
    "reading": "",
    "ipa": "ˈɡɹoʊs",
    "level": "C1"
  },
  {
    "id": "c1_566",
    "word": "guerrilla",
    "pos": "n.",
    "meaning": "กองโจร",
    "reading": "",
    "ipa": "ɡɝˈɪɫə",
    "level": "C1"
  },
  {
    "id": "c1_567",
    "word": "guidance",
    "pos": "n.",
    "meaning": "คำแนะนำ",
    "reading": "",
    "ipa": "ˈɡaɪdəns",
    "level": "C1"
  },
  {
    "id": "c1_568",
    "word": "guilt",
    "pos": "n.",
    "meaning": "ความรู้สึกผิด",
    "reading": "",
    "ipa": "ˈɡɪɫt",
    "level": "C1"
  },
  {
    "id": "c1_569",
    "word": "gut",
    "pos": "n.",
    "meaning": "ความกล้า",
    "reading": "",
    "ipa": "ˈɡət",
    "level": "C1"
  },
  {
    "id": "c1_570",
    "word": "hail",
    "pos": "v.",
    "meaning": "ลูกเห็บ",
    "reading": "",
    "ipa": "ˈheɪɫ",
    "level": "C1"
  },
  {
    "id": "c1_571",
    "word": "halfway",
    "pos": "adv.",
    "meaning": "ครึ่งทาง",
    "reading": "",
    "ipa": "ˈhæfˈweɪ",
    "level": "C1"
  },
  {
    "id": "c1_572",
    "word": "halt",
    "pos": "v., n.",
    "meaning": "หยุด",
    "reading": "",
    "ipa": "ˈhɔɫt",
    "level": "C1"
  },
  {
    "id": "c1_573",
    "word": "handful",
    "pos": "n.",
    "meaning": "หนึ่งกำมือ",
    "reading": "",
    "ipa": "ˈhændˌfʊɫ",
    "level": "C1"
  },
  {
    "id": "c1_574",
    "word": "handling",
    "pos": "n.",
    "meaning": "การจัดการ",
    "reading": "",
    "ipa": "ˈhændəɫɪŋ",
    "level": "C1"
  },
  {
    "id": "c1_575",
    "word": "handy",
    "pos": "adj.",
    "meaning": "สะดวก",
    "reading": "",
    "ipa": "ˈhændi",
    "level": "C1"
  },
  {
    "id": "c1_576",
    "word": "harassment",
    "pos": "n.",
    "meaning": "การคุกคาม",
    "reading": "",
    "ipa": "hɝˈæsmənt",
    "level": "C1"
  },
  {
    "id": "c1_577",
    "word": "hardware",
    "pos": "n.",
    "meaning": "ฮาร์ดแวร์",
    "reading": "",
    "ipa": "ˈhɑɹdˌwɛɹ",
    "level": "C1"
  },
  {
    "id": "c1_578",
    "word": "harmony",
    "pos": "n.",
    "meaning": "ความสามัคคี",
    "reading": "",
    "ipa": "ˈhɑɹməni",
    "level": "C1"
  },
  {
    "id": "c1_579",
    "word": "harsh",
    "pos": "adj.",
    "meaning": "รุนแรง",
    "reading": "",
    "ipa": "ˈhɑɹʃ",
    "level": "C1"
  },
  {
    "id": "c1_580",
    "word": "harvest",
    "pos": "n., v.",
    "meaning": "เก็บเกี่ยว",
    "reading": "",
    "ipa": "ˈhɑɹvəst",
    "level": "C1"
  },
  {
    "id": "c1_581",
    "word": "hatred",
    "pos": "n.",
    "meaning": "ความเกลียดชัง",
    "reading": "",
    "ipa": "ˈheɪtɹəd",
    "level": "C1"
  },
  {
    "id": "c1_582",
    "word": "haunt",
    "pos": "v.",
    "meaning": "หลอกหลอน",
    "reading": "",
    "ipa": "ˈhɔnt",
    "level": "C1"
  },
  {
    "id": "c1_583",
    "word": "hazard",
    "pos": "n.",
    "meaning": "อันตราย",
    "reading": "",
    "ipa": "ˈhæzɝd",
    "level": "C1"
  },
  {
    "id": "c1_584",
    "word": "heighten",
    "pos": "v.",
    "meaning": "เพิ่มขึ้น",
    "reading": "",
    "ipa": "ˈhaɪtən",
    "level": "C1"
  },
  {
    "id": "c1_585",
    "word": "heritage",
    "pos": "n.",
    "meaning": "มรดก",
    "reading": "",
    "ipa": "ˈhɛɹətədʒ",
    "level": "C1"
  },
  {
    "id": "c1_586",
    "word": "hierarchy",
    "pos": "n.",
    "meaning": "ลำดับขั้น",
    "reading": "",
    "ipa": "ˈhaɪˌɹɑɹki",
    "level": "C1"
  },
  {
    "id": "c1_587",
    "word": "high-profile",
    "pos": "adj.",
    "meaning": "ที่เป็นที่รู้จัก",
    "reading": "",
    "ipa": "ˌhaɪˈpɹoʊfaɪɫ",
    "level": "C1"
  },
  {
    "id": "c1_588",
    "word": "hint",
    "pos": "n., v.",
    "meaning": "คำใบ้",
    "reading": "",
    "ipa": "ˈhɪnt",
    "level": "C1"
  },
  {
    "id": "c1_589",
    "word": "homeland",
    "pos": "n.",
    "meaning": "บ้านเกิด",
    "reading": "",
    "ipa": "ˈhoʊmˌɫænd",
    "level": "C1"
  },
  {
    "id": "c1_590",
    "word": "hopeful",
    "pos": "adj.",
    "meaning": "มีความหวัง",
    "reading": "",
    "ipa": "ˈhoʊpfəɫ",
    "level": "C1"
  },
  {
    "id": "c1_591",
    "word": "horizon",
    "pos": "n.",
    "meaning": "ขอบฟ้า",
    "reading": "",
    "ipa": "hɝˈaɪzən",
    "level": "C1"
  },
  {
    "id": "c1_592",
    "word": "horn",
    "pos": "n.",
    "meaning": "เขา",
    "reading": "",
    "ipa": "ˈhɔɹn",
    "level": "C1"
  },
  {
    "id": "c1_593",
    "word": "hostage",
    "pos": "n.",
    "meaning": "ตัวประกัน",
    "reading": "",
    "ipa": "ˈhɑstɪdʒ",
    "level": "C1"
  },
  {
    "id": "c1_594",
    "word": "hostile",
    "pos": "adj.",
    "meaning": "ไม่เป็นมิตร",
    "reading": "",
    "ipa": "ˈhɑstəɫ",
    "level": "C1"
  },
  {
    "id": "c1_595",
    "word": "hostility",
    "pos": "n.",
    "meaning": "ความเป็นศัตรู",
    "reading": "",
    "ipa": "hɑˈstɪɫəti",
    "level": "C1"
  },
  {
    "id": "c1_596",
    "word": "humanitarian",
    "pos": "adj.",
    "meaning": "มนุษยธรรม",
    "reading": "",
    "ipa": "ˌhjuˌmænəˈtɛɹiən",
    "level": "C1"
  },
  {
    "id": "c1_597",
    "word": "humanity",
    "pos": "n.",
    "meaning": "มนุษยชาติ",
    "reading": "",
    "ipa": "hjuˈmænɪti",
    "level": "C1"
  },
  {
    "id": "c1_598",
    "word": "humble",
    "pos": "adj.",
    "meaning": "ถ่อมตัว",
    "reading": "",
    "ipa": "ˈhəmbəɫ",
    "level": "C1"
  },
  {
    "id": "c1_599",
    "word": "hydrogen",
    "pos": "n.",
    "meaning": "ไฮโดรเจน",
    "reading": "",
    "ipa": "ˈhaɪdɹədʒən",
    "level": "C1"
  },
  {
    "id": "c1_600",
    "word": "identification",
    "pos": "n.",
    "meaning": "การระบุตัวตน",
    "reading": "",
    "ipa": "aɪˌdɛntəfəˈkeɪʃən",
    "level": "C1"
  },
  {
    "id": "c1_601",
    "word": "ideological",
    "pos": "adj.",
    "meaning": "เชิงอุดมการณ์",
    "reading": "",
    "ipa": "ˌaɪdiəˈɫɑdʒɪkəɫ",
    "level": "C1"
  },
  {
    "id": "c1_602",
    "word": "ideology",
    "pos": "n.",
    "meaning": "อุดมการณ์",
    "reading": "",
    "ipa": "ˌaɪdiˈɑɫədʒi",
    "level": "C1"
  },
  {
    "id": "c1_603",
    "word": "idiot",
    "pos": "n.",
    "meaning": "คนโง่",
    "reading": "",
    "ipa": "ˈɪˌdiət",
    "level": "C1"
  },
  {
    "id": "c1_604",
    "word": "ignorance",
    "pos": "n.",
    "meaning": "ความไม่รู้",
    "reading": "",
    "ipa": "ˈɪɡnɝəns",
    "level": "C1"
  },
  {
    "id": "c1_605",
    "word": "imagery",
    "pos": "n.",
    "meaning": "ภาพลักษณ์",
    "reading": "",
    "ipa": "ˈɪmədʒɹi",
    "level": "C1"
  },
  {
    "id": "c1_606",
    "word": "immense",
    "pos": "adj.",
    "meaning": "มหาศาล",
    "reading": "",
    "ipa": "ˌɪˈmɛns",
    "level": "C1"
  },
  {
    "id": "c1_607",
    "word": "imminent",
    "pos": "adj.",
    "meaning": "ใกล้เข้ามา",
    "reading": "",
    "ipa": "ˈɪmənənt",
    "level": "C1"
  },
  {
    "id": "c1_608",
    "word": "implementation",
    "pos": "n.",
    "meaning": "การดำเนินการ",
    "reading": "",
    "ipa": "ˌɪmpɫəmɛnˈteɪʃən",
    "level": "C1"
  },
  {
    "id": "c1_609",
    "word": "imprison",
    "pos": "v.",
    "meaning": "จำคุก",
    "reading": "",
    "ipa": "ˌɪmˈpɹɪzən",
    "level": "C1"
  },
  {
    "id": "c1_610",
    "word": "imprisonment",
    "pos": "n.",
    "meaning": "การจำคุก",
    "reading": "",
    "ipa": "ˌɪmˈpɹɪzənmənt",
    "level": "C1"
  },
  {
    "id": "c1_611",
    "word": "inability",
    "pos": "n.",
    "meaning": "ความไร้ความสามารถ",
    "reading": "",
    "ipa": "ˌɪnəˈbɪɫɪti",
    "level": "C1"
  },
  {
    "id": "c1_612",
    "word": "inadequate",
    "pos": "adj.",
    "meaning": "ไม่เพียงพอ",
    "reading": "",
    "ipa": "ˌɪˈnædəˌkweɪt",
    "level": "C1"
  },
  {
    "id": "c1_613",
    "word": "inappropriate",
    "pos": "adj.",
    "meaning": "ไม่เหมาะสม",
    "reading": "",
    "ipa": "ˌɪnəˈpɹoʊpɹiɪt",
    "level": "C1"
  },
  {
    "id": "c1_614",
    "word": "incidence",
    "pos": "n.",
    "meaning": "อัตราการเกิด",
    "reading": "",
    "ipa": "ˈɪnsədəns",
    "level": "C1"
  },
  {
    "id": "c1_615",
    "word": "inclined",
    "pos": "adj.",
    "meaning": "มีแนวโน้ม",
    "reading": "",
    "ipa": "ˌɪnˈkɫaɪnd",
    "level": "C1"
  },
  {
    "id": "c1_616",
    "word": "inclusion",
    "pos": "n.",
    "meaning": "การรวม",
    "reading": "",
    "ipa": "ˌɪnˈkɫuʒən",
    "level": "C1"
  },
  {
    "id": "c1_617",
    "word": "incur",
    "pos": "v.",
    "meaning": "ก่อให้เกิด",
    "reading": "",
    "ipa": "ˌɪnˈkɝ",
    "level": "C1"
  },
  {
    "id": "c1_618",
    "word": "indicator",
    "pos": "n.",
    "meaning": "ตัวบ่งชี้",
    "reading": "",
    "ipa": "ˈɪndəˌkeɪtɝ",
    "level": "C1"
  },
  {
    "id": "c1_619",
    "word": "indictment",
    "pos": "n.",
    "meaning": "คำฟ้อง",
    "reading": "",
    "ipa": "ˌɪnˈdaɪtmənt",
    "level": "C1"
  },
  {
    "id": "c1_620",
    "word": "indigenous",
    "pos": "adj.",
    "meaning": "พื้นเมือง",
    "reading": "",
    "ipa": "ˌɪnˈdɪdʒənəs",
    "level": "C1"
  },
  {
    "id": "c1_621",
    "word": "induce",
    "pos": "v.",
    "meaning": "กระตุ้น",
    "reading": "",
    "ipa": "ˌɪnˈdus",
    "level": "C1"
  },
  {
    "id": "c1_622",
    "word": "indulge",
    "pos": "v.",
    "meaning": "ปล่อยตัว",
    "reading": "",
    "ipa": "ˌɪnˈdəɫdʒ",
    "level": "C1"
  },
  {
    "id": "c1_623",
    "word": "inequality",
    "pos": "n.",
    "meaning": "ความไม่เท่าเทียม",
    "reading": "",
    "ipa": "ˈɪniˈkwɑɫəti",
    "level": "C1"
  },
  {
    "id": "c1_624",
    "word": "infamous",
    "pos": "adj.",
    "meaning": "น่าอับอาย",
    "reading": "",
    "ipa": "ˈɪnfəməs",
    "level": "C1"
  },
  {
    "id": "c1_625",
    "word": "infant",
    "pos": "n.",
    "meaning": "ทารก",
    "reading": "",
    "ipa": "ˈɪnfənt",
    "level": "C1"
  },
  {
    "id": "c1_626",
    "word": "infect",
    "pos": "v.",
    "meaning": "ติดเชื้อ",
    "reading": "",
    "ipa": "ˌɪnˈfɛkt",
    "level": "C1"
  },
  {
    "id": "c1_627",
    "word": "inflict",
    "pos": "v.",
    "meaning": "ทำให้เกิด",
    "reading": "",
    "ipa": "ˌɪnˈfɫɪkt",
    "level": "C1"
  },
  {
    "id": "c1_628",
    "word": "influential",
    "pos": "adj.",
    "meaning": "มีอิทธิพล",
    "reading": "",
    "ipa": "ˌɪnfɫuˈɛnʃəɫ",
    "level": "C1"
  },
  {
    "id": "c1_629",
    "word": "inherent",
    "pos": "adj.",
    "meaning": "โดยธรรมชาติ",
    "reading": "",
    "ipa": "ɪnˈhɛɹənt",
    "level": "C1"
  },
  {
    "id": "c1_630",
    "word": "inhibit",
    "pos": "v.",
    "meaning": "ยับยั้ง",
    "reading": "",
    "ipa": "ˌɪnˈhɪbət",
    "level": "C1"
  },
  {
    "id": "c1_631",
    "word": "initiate",
    "pos": "v.",
    "meaning": "เริ่มต้น",
    "reading": "",
    "ipa": "ˌɪˈnɪʃiˌeɪt",
    "level": "C1"
  },
  {
    "id": "c1_632",
    "word": "inject",
    "pos": "v.",
    "meaning": "ฉีด",
    "reading": "",
    "ipa": "ˌɪnˈdʒɛkt",
    "level": "C1"
  },
  {
    "id": "c1_633",
    "word": "injection",
    "pos": "n.",
    "meaning": "การฉีด",
    "reading": "",
    "ipa": "ˌɪnˈdʒɛkʃən",
    "level": "C1"
  },
  {
    "id": "c1_634",
    "word": "injustice",
    "pos": "n.",
    "meaning": "ความอยุติธรรม",
    "reading": "",
    "ipa": "ˌɪnˈdʒəstɪs",
    "level": "C1"
  },
  {
    "id": "c1_635",
    "word": "inmate",
    "pos": "n.",
    "meaning": "นักโทษ",
    "reading": "",
    "ipa": "ˈɪnˌmeɪt",
    "level": "C1"
  },
  {
    "id": "c1_636",
    "word": "insertion",
    "pos": "n.",
    "meaning": "การแทรก",
    "reading": "",
    "ipa": "ˌɪnˈsɝʃən",
    "level": "C1"
  },
  {
    "id": "c1_637",
    "word": "insider",
    "pos": "n.",
    "meaning": "บุคคลภายใน",
    "reading": "",
    "ipa": "ˌɪnˈsaɪdɝ",
    "level": "C1"
  },
  {
    "id": "c1_638",
    "word": "inspect",
    "pos": "v.",
    "meaning": "ตรวจสอบ",
    "reading": "",
    "ipa": "ˌɪnˈspɛkt",
    "level": "C1"
  },
  {
    "id": "c1_639",
    "word": "inspection",
    "pos": "n.",
    "meaning": "การตรวจสอบ",
    "reading": "",
    "ipa": "ˌɪnˈspɛkʃən",
    "level": "C1"
  },
  {
    "id": "c1_640",
    "word": "inspiration",
    "pos": "n.",
    "meaning": "แรงบันดาลใจ",
    "reading": "",
    "ipa": "ˌɪnspɝˈeɪʃən",
    "level": "C1"
  },
  {
    "id": "c1_641",
    "word": "instinct",
    "pos": "n.",
    "meaning": "สัญชาตญาณ",
    "reading": "",
    "ipa": "ˈɪnstɪŋkt",
    "level": "C1"
  },
  {
    "id": "c1_642",
    "word": "institutional",
    "pos": "adj.",
    "meaning": "ที่เกี่ยวกับสถาบัน",
    "reading": "",
    "ipa": "ˌɪnstɪˈtuʃənəɫ",
    "level": "C1"
  },
  {
    "id": "c1_643",
    "word": "instruct",
    "pos": "v.",
    "meaning": "สั่งสอน/แนะนำ",
    "reading": "",
    "ipa": "ˌɪnˈstɹəkt",
    "level": "C1"
  },
  {
    "id": "c1_644",
    "word": "instrumental",
    "pos": "adj.",
    "meaning": "มีบทบาทสำคัญ",
    "reading": "",
    "ipa": "ˌɪnstɹəˈmɛnəɫ",
    "level": "C1"
  },
  {
    "id": "c1_645",
    "word": "insufficient",
    "pos": "adj.",
    "meaning": "ไม่เพียงพอ",
    "reading": "",
    "ipa": "ˌɪnsəˈfɪʃənt",
    "level": "C1"
  },
  {
    "id": "c1_646",
    "word": "insult",
    "pos": "n., v.",
    "meaning": "ดูถูก",
    "reading": "",
    "ipa": "ˈɪnˌsəɫt",
    "level": "C1"
  },
  {
    "id": "c1_647",
    "word": "intact",
    "pos": "adj.",
    "meaning": "สมบูรณ์",
    "reading": "",
    "ipa": "ˌɪnˈtækt",
    "level": "C1"
  },
  {
    "id": "c1_648",
    "word": "intake",
    "pos": "n.",
    "meaning": "การบริโภค",
    "reading": "",
    "ipa": "ˈɪnˌteɪk",
    "level": "C1"
  },
  {
    "id": "c1_649",
    "word": "integral",
    "pos": "adj.",
    "meaning": "สำคัญ",
    "reading": "",
    "ipa": "ˈɪnəɡɹəɫ",
    "level": "C1"
  },
  {
    "id": "c1_650",
    "word": "integrated",
    "pos": "adj.",
    "meaning": "บูรณาการ",
    "reading": "",
    "ipa": "ˈɪnəˌɡɹeɪtəd",
    "level": "C1"
  },
  {
    "id": "c1_651",
    "word": "integration",
    "pos": "n.",
    "meaning": "การรวมกัน",
    "reading": "",
    "ipa": "ˌɪnəˈɡɹeɪʃən",
    "level": "C1"
  },
  {
    "id": "c1_652",
    "word": "integrity",
    "pos": "n.",
    "meaning": "ความซื่อสัตย์",
    "reading": "",
    "ipa": "ˌɪnˈtɛɡɹəti",
    "level": "C1"
  },
  {
    "id": "c1_653",
    "word": "intensify",
    "pos": "v.",
    "meaning": "ทำให้เข้มข้น",
    "reading": "",
    "ipa": "ɪnˈtɛnsəˌfaɪ",
    "level": "C1"
  },
  {
    "id": "c1_654",
    "word": "intensity",
    "pos": "n.",
    "meaning": "ความเข้มข้น",
    "reading": "",
    "ipa": "ɪnˈtɛnsəti",
    "level": "C1"
  },
  {
    "id": "c1_655",
    "word": "intensive",
    "pos": "adj.",
    "meaning": "ที่เข้มข้น",
    "reading": "",
    "ipa": "ˌɪnˈtɛnsɪv",
    "level": "C1"
  },
  {
    "id": "c1_656",
    "word": "intent",
    "pos": "n.",
    "meaning": "เจตนา",
    "reading": "",
    "ipa": "ˌɪnˈtɛnt",
    "level": "C1"
  },
  {
    "id": "c1_657",
    "word": "interactive",
    "pos": "adj.",
    "meaning": "โต้ตอบ",
    "reading": "",
    "ipa": "ˌɪnɝˈæktɪv",
    "level": "C1"
  },
  {
    "id": "c1_658",
    "word": "interface",
    "pos": "n.",
    "meaning": "พื้นที่ร่วมของสองสิ่ง",
    "reading": "",
    "ipa": "ˈɪnɝˌfeɪs",
    "level": "C1"
  },
  {
    "id": "c1_659",
    "word": "interfere",
    "pos": "v.",
    "meaning": "แทรกแซง",
    "reading": "",
    "ipa": "ˌɪnɝˈfɪɹ",
    "level": "C1"
  },
  {
    "id": "c1_660",
    "word": "interference",
    "pos": "n.",
    "meaning": "การแทรกแซง",
    "reading": "",
    "ipa": "ˌɪnɝˈfɪɹəns",
    "level": "C1"
  },
  {
    "id": "c1_661",
    "word": "interim",
    "pos": "adj.",
    "meaning": "ชั่วคราว, ระหว่าง",
    "reading": "",
    "ipa": "ˈɪnɝəm",
    "level": "C1"
  },
  {
    "id": "c1_662",
    "word": "interior",
    "pos": "adj., n.",
    "meaning": "ภายใน",
    "reading": "",
    "ipa": "ˌɪnˈtɪɹiɝ",
    "level": "C1"
  },
  {
    "id": "c1_663",
    "word": "intermediate",
    "pos": "adj.",
    "meaning": "กลาง, ระหว่าง",
    "reading": "",
    "ipa": "ˌɪnɝˈmidiɪt",
    "level": "C1"
  },
  {
    "id": "c1_664",
    "word": "intervene",
    "pos": "v.",
    "meaning": "แทรกแซง, เข้ามา",
    "reading": "",
    "ipa": "ˌɪntɝˈvin",
    "level": "C1"
  },
  {
    "id": "c1_665",
    "word": "intervention",
    "pos": "n.",
    "meaning": "เกี่ยวข้อง",
    "reading": "",
    "ipa": "ˌɪntɝˈvɛnʃən",
    "level": "C1"
  },
  {
    "id": "c1_666",
    "word": "intimate",
    "pos": "adj.",
    "meaning": "สนิทสนม, ลึกซึ้ง",
    "reading": "",
    "ipa": "ˈɪnəmət",
    "level": "C1"
  },
  {
    "id": "c1_667",
    "word": "intriguing",
    "pos": "adj.",
    "meaning": "น่าสนใจ, น่าติดตาม",
    "reading": "",
    "ipa": "ˌɪnˈtɹiɡɪŋ",
    "level": "C1"
  },
  {
    "id": "c1_668",
    "word": "investigator",
    "pos": "n.",
    "meaning": "นักสืบ, ผู้สอบสวน",
    "reading": "",
    "ipa": "ˌɪnˈvɛstəˌɡeɪtɝ",
    "level": "C1"
  },
  {
    "id": "c1_669",
    "word": "invisible",
    "pos": "adj.",
    "meaning": "มองไม่เห็น",
    "reading": "",
    "ipa": "ˌɪnˈvɪzəbəɫ",
    "level": "C1"
  },
  {
    "id": "c1_670",
    "word": "invoke",
    "pos": "v.",
    "meaning": "อัญเชิญ, อ้างถึง",
    "reading": "",
    "ipa": "ˌɪnˈvoʊk",
    "level": "C1"
  },
  {
    "id": "c1_671",
    "word": "involvement",
    "pos": "n.",
    "meaning": "การมีส่วนร่วม",
    "reading": "",
    "ipa": "ˌɪnˈvɑɫvmənt",
    "level": "C1"
  },
  {
    "id": "c1_672",
    "word": "ironic",
    "pos": "adj.",
    "meaning": "ที่ขัดแย้ง, ที่ตลกร้าย",
    "reading": "",
    "ipa": "aɪˈɹɑnɪk",
    "level": "C1"
  },
  {
    "id": "c1_673",
    "word": "ironically",
    "pos": "adv.",
    "meaning": "อย่างขัดแย้ง",
    "reading": "",
    "ipa": "aɪˈɹɑnɪkɫi",
    "level": "C1"
  },
  {
    "id": "c1_674",
    "word": "irony",
    "pos": "n.",
    "meaning": "การประชด",
    "reading": "",
    "ipa": "ˈaɪɹəni",
    "level": "C1"
  },
  {
    "id": "c1_675",
    "word": "irrelevant",
    "pos": "adj.",
    "meaning": "ไม่เกี่ยวข้อง",
    "reading": "",
    "ipa": "ˌɪˈɹɛɫəvənt",
    "level": "C1"
  },
  {
    "id": "c1_676",
    "word": "isolation",
    "pos": "n.",
    "meaning": "การแยกตัว",
    "reading": "",
    "ipa": "ˌaɪsəˈɫeɪʃən",
    "level": "C1"
  },
  {
    "id": "c1_677",
    "word": "judicial",
    "pos": "adj.",
    "meaning": "เกี่ยวกับการพิจารณาคดี",
    "reading": "",
    "ipa": "dʒuˈdɪʃəɫ",
    "level": "C1"
  },
  {
    "id": "c1_678",
    "word": "junction",
    "pos": "n.",
    "meaning": "จุดเชื่อมต่อ, ทางแยก",
    "reading": "",
    "ipa": "ˈdʒəŋkʃən",
    "level": "C1"
  },
  {
    "id": "c1_679",
    "word": "jurisdiction",
    "pos": "n.",
    "meaning": "อำนาจศาล, เขตอำนาจ",
    "reading": "",
    "ipa": "ˌdʒʊɹəsˈdɪkʃən",
    "level": "C1"
  },
  {
    "id": "c1_680",
    "word": "just",
    "pos": "adj.",
    "meaning": "ยุติธรรม, เพียงพอ",
    "reading": "",
    "ipa": "ˈdʒəst",
    "level": "C1"
  },
  {
    "id": "c1_681",
    "word": "justification",
    "pos": "n.",
    "meaning": "เหตุผล, การพิสูจน์",
    "reading": "",
    "ipa": "ˌdʒəstəfəˈkeɪʃən",
    "level": "C1"
  },
  {
    "id": "c1_682",
    "word": "kidnap",
    "pos": "v.",
    "meaning": "ลักพาตัว",
    "reading": "",
    "ipa": "ˈkɪdˌnæp",
    "level": "C1"
  },
  {
    "id": "c1_683",
    "word": "kidney",
    "pos": "n.",
    "meaning": "ไต",
    "reading": "",
    "ipa": "ˈkɪdni",
    "level": "C1"
  },
  {
    "id": "c1_684",
    "word": "kingdom",
    "pos": "n.",
    "meaning": "ราชอาณาจักร",
    "reading": "",
    "ipa": "ˈkɪŋdəm",
    "level": "C1"
  },
  {
    "id": "c1_685",
    "word": "lad",
    "pos": "n.",
    "meaning": "เด็กหนุ่ม",
    "reading": "",
    "ipa": "ˈɫæd",
    "level": "C1"
  },
  {
    "id": "c1_686",
    "word": "landlord",
    "pos": "n.",
    "meaning": "เจ้าของที่ดิน",
    "reading": "",
    "ipa": "ˈɫændˌɫɔɹd",
    "level": "C1"
  },
  {
    "id": "c1_687",
    "word": "landmark",
    "pos": "n.",
    "meaning": "สถานที่สำคัญ",
    "reading": "",
    "ipa": "ˈɫændˌmɑɹk",
    "level": "C1"
  },
  {
    "id": "c1_688",
    "word": "lap",
    "pos": "n.",
    "meaning": "ส่วนที่เกินออกมา",
    "reading": "",
    "ipa": "ˈɫæp",
    "level": "C1"
  },
  {
    "id": "c1_689",
    "word": "large-scale",
    "pos": "adj.",
    "meaning": "ในวงกว้าง, ในระดับใหญ่",
    "reading": "",
    "ipa": "ˈɫɑɹdʒˌskeɪɫ",
    "level": "C1"
  },
  {
    "id": "c1_690",
    "word": "laser",
    "pos": "n.",
    "meaning": "เลเซอร์",
    "reading": "",
    "ipa": "ˈɫeɪzɝ",
    "level": "C1"
  },
  {
    "id": "c1_691",
    "word": "latter",
    "pos": "adj., n.",
    "meaning": "หลัง, ท้าย",
    "reading": "",
    "ipa": "ˈɫætɝ",
    "level": "C1"
  },
  {
    "id": "c1_692",
    "word": "lawn",
    "pos": "n.",
    "meaning": "สนามหญ้า",
    "reading": "",
    "ipa": "ˈɫɔn",
    "level": "C1"
  },
  {
    "id": "c1_693",
    "word": "lawsuit",
    "pos": "n.",
    "meaning": "คดีความ",
    "reading": "",
    "ipa": "ˈɫɔˌsut",
    "level": "C1"
  },
  {
    "id": "c1_694",
    "word": "layout",
    "pos": "n.",
    "meaning": "แบบงาน",
    "reading": "",
    "ipa": "ˈɫeɪˌaʊt",
    "level": "C1"
  },
  {
    "id": "c1_695",
    "word": "leak",
    "pos": "v., n.",
    "meaning": "รั่ว, รั่วไหล",
    "reading": "",
    "ipa": "ˈɫik",
    "level": "C1"
  },
  {
    "id": "c1_696",
    "word": "leap",
    "pos": "v., n.",
    "meaning": "กระโดด",
    "reading": "",
    "ipa": "ˈɫip",
    "level": "C1"
  },
  {
    "id": "c1_697",
    "word": "legacy",
    "pos": "n.",
    "meaning": "มรดก",
    "reading": "",
    "ipa": "ˈɫɛɡəsi",
    "level": "C1"
  },
  {
    "id": "c1_698",
    "word": "legendary",
    "pos": "adj.",
    "meaning": "อันเป็นตำนาน",
    "reading": "",
    "ipa": "ˈɫɛdʒənˌdɛɹi",
    "level": "C1"
  },
  {
    "id": "c1_699",
    "word": "legislation",
    "pos": "n.",
    "meaning": "กฎหมาย",
    "reading": "",
    "ipa": "ˌɫɛdʒəˈsɫeɪʃən",
    "level": "C1"
  },
  {
    "id": "c1_700",
    "word": "legislative",
    "pos": "adj.",
    "meaning": "เกี่ยวกับกฎหมาย",
    "reading": "",
    "ipa": "ˈɫɛdʒəˌsɫeɪtɪv",
    "level": "C1"
  },
  {
    "id": "c1_701",
    "word": "legislature",
    "pos": "n.",
    "meaning": "สภานิติบัญญัติ",
    "reading": "",
    "ipa": "ˈɫɛdʒəˌsɫeɪtʃɝ",
    "level": "C1"
  },
  {
    "id": "c1_702",
    "word": "legitimate",
    "pos": "adj.",
    "meaning": "ถูกต้องตามกฎหมาย",
    "reading": "",
    "ipa": "ɫəˈdʒɪtəmət",
    "level": "C1"
  },
  {
    "id": "c1_703",
    "word": "lengthy",
    "pos": "adj.",
    "meaning": "ยาวนาน",
    "reading": "",
    "ipa": "ˈɫɛŋθi",
    "level": "C1"
  },
  {
    "id": "c1_704",
    "word": "lesbian",
    "pos": "adj.",
    "meaning": "หญิงรักหญิง",
    "reading": "",
    "ipa": "ˈɫɛzbiən",
    "level": "C1"
  },
  {
    "id": "c1_705",
    "word": "lesser",
    "pos": "adj.",
    "meaning": "น้อยกว่า",
    "reading": "",
    "ipa": "ˈɫɛsɝ",
    "level": "C1"
  },
  {
    "id": "c1_706",
    "word": "lethal",
    "pos": "adj.",
    "meaning": "ร้ายแรง",
    "reading": "",
    "ipa": "ˈɫiθəɫ",
    "level": "C1"
  },
  {
    "id": "c1_707",
    "word": "liable",
    "pos": "adj.",
    "meaning": "รับผิดชอบ",
    "reading": "",
    "ipa": "ˈɫaɪəbəɫ",
    "level": "C1"
  },
  {
    "id": "c1_708",
    "word": "liberal",
    "pos": "adj., n.",
    "meaning": "เกี่ยวกับเสรีนิยม",
    "reading": "",
    "ipa": "ˈɫɪˌbɝəɫ",
    "level": "C1"
  },
  {
    "id": "c1_709",
    "word": "liberation",
    "pos": "n.",
    "meaning": "การได้สิทธิเท่าเทียม",
    "reading": "",
    "ipa": "ˌɫɪˌbɝˈeɪʃən",
    "level": "C1"
  },
  {
    "id": "c1_710",
    "word": "liberty",
    "pos": "n.",
    "meaning": "สิทธิขั้นพื้นฐาน",
    "reading": "",
    "ipa": "ˈɫɪbɝˌti",
    "level": "C1"
  },
  {
    "id": "c1_711",
    "word": "license",
    "pos": "v.",
    "meaning": "ใบอนุญาต",
    "reading": "",
    "ipa": "ˈɫaɪsəns",
    "level": "C1"
  },
  {
    "id": "c1_712",
    "word": "lifelong",
    "pos": "adj.",
    "meaning": "ตลอดชีวิต",
    "reading": "",
    "ipa": "ˈɫaɪˈfɫɔŋ",
    "level": "C1"
  },
  {
    "id": "c1_713",
    "word": "likelihood",
    "pos": "n.",
    "meaning": "ความเป็นไปได้",
    "reading": "",
    "ipa": "ˈɫaɪkɫiˌhʊd",
    "level": "C1"
  },
  {
    "id": "c1_714",
    "word": "limb",
    "pos": "n.",
    "meaning": "แขนขา",
    "reading": "",
    "ipa": "ˈɫɪm",
    "level": "C1"
  },
  {
    "id": "c1_715",
    "word": "linear",
    "pos": "adj.",
    "meaning": "เชิงเส้น",
    "reading": "",
    "ipa": "ˈɫɪniɝ",
    "level": "C1"
  },
  {
    "id": "c1_716",
    "word": "line-up",
    "pos": "n.",
    "meaning": "การจัดเรียง",
    "reading": "",
    "ipa": "ˈɫaɪˌnəp",
    "level": "C1"
  },
  {
    "id": "c1_717",
    "word": "linger",
    "pos": "v.",
    "meaning": "อยู่นาน",
    "reading": "",
    "ipa": "ˈɫɪŋɝ",
    "level": "C1"
  },
  {
    "id": "c1_718",
    "word": "listing",
    "pos": "n.",
    "meaning": "รายการ",
    "reading": "",
    "ipa": "ˈɫɪstɪŋ",
    "level": "C1"
  },
  {
    "id": "c1_719",
    "word": "literacy",
    "pos": "n.",
    "meaning": "การรู้หนังสือ",
    "reading": "",
    "ipa": "ˈɫɪtɝəsi",
    "level": "C1"
  },
  {
    "id": "c1_720",
    "word": "liver",
    "pos": "n.",
    "meaning": "ตับ",
    "reading": "",
    "ipa": "ˈɫɪvɝ",
    "level": "C1"
  },
  {
    "id": "c1_721",
    "word": "lobby",
    "pos": "n., v.",
    "meaning": "ล็อบบี้",
    "reading": "",
    "ipa": "ˈɫɑbi",
    "level": "C1"
  },
  {
    "id": "c1_722",
    "word": "log",
    "pos": "n., v.",
    "meaning": "บันทึก",
    "reading": "",
    "ipa": "ˈɫɔɡ",
    "level": "C1"
  },
  {
    "id": "c1_723",
    "word": "logic",
    "pos": "n.",
    "meaning": "ตรรกะ",
    "reading": "",
    "ipa": "ˈɫɑdʒɪk",
    "level": "C1"
  },
  {
    "id": "c1_724",
    "word": "long-standing",
    "pos": "adj.",
    "meaning": "ที่มีมานาน",
    "reading": "",
    "ipa": "ˈɫɔŋ ˈstændɪŋ",
    "level": "C1"
  },
  {
    "id": "c1_725",
    "word": "long-time",
    "pos": "adj.",
    "meaning": "ระยะยาว",
    "reading": "",
    "ipa": "ˈɫɔŋ ˈtaɪm",
    "level": "C1"
  },
  {
    "id": "c1_726",
    "word": "loom",
    "pos": "v.",
    "meaning": "ปรากฏขึ้น",
    "reading": "",
    "ipa": "ˈɫum",
    "level": "C1"
  },
  {
    "id": "c1_727",
    "word": "loop",
    "pos": "n.",
    "meaning": "วง",
    "reading": "",
    "ipa": "ˈɫup",
    "level": "C1"
  },
  {
    "id": "c1_728",
    "word": "loyalty",
    "pos": "n.",
    "meaning": "ความจงรักภักดี",
    "reading": "",
    "ipa": "ˈɫɔɪəɫti",
    "level": "C1"
  },
  {
    "id": "c1_729",
    "word": "machinery",
    "pos": "n.",
    "meaning": "เครื่องจักร",
    "reading": "",
    "ipa": "məˈʃinɝi",
    "level": "C1"
  },
  {
    "id": "c1_730",
    "word": "magical",
    "pos": "adj.",
    "meaning": "มหัศจรรย์",
    "reading": "",
    "ipa": "ˈmædʒɪkəɫ",
    "level": "C1"
  },
  {
    "id": "c1_731",
    "word": "magistrate",
    "pos": "n.",
    "meaning": "ผู้พิพากษา",
    "reading": "",
    "ipa": "ˈmædʒəˌstɹeɪt",
    "level": "C1"
  },
  {
    "id": "c1_732",
    "word": "magnetic",
    "pos": "adj.",
    "meaning": "แม่เหล็ก",
    "reading": "",
    "ipa": "mæɡˈnɛtɪk",
    "level": "C1"
  },
  {
    "id": "c1_733",
    "word": "magnitude",
    "pos": "n.",
    "meaning": "ขนาด",
    "reading": "",
    "ipa": "ˈmæɡnəˌtud",
    "level": "C1"
  },
  {
    "id": "c1_734",
    "word": "mainland",
    "pos": "n.",
    "meaning": "แผ่นดินใหญ่",
    "reading": "",
    "ipa": "ˈmeɪnˌɫænd",
    "level": "C1"
  },
  {
    "id": "c1_735",
    "word": "mainstream",
    "pos": "n., adj.",
    "meaning": "กระแสหลัก",
    "reading": "",
    "ipa": "ˈmeɪnˌstɹim",
    "level": "C1"
  },
  {
    "id": "c1_736",
    "word": "maintenance",
    "pos": "n.",
    "meaning": "การบำรุงรักษา",
    "reading": "",
    "ipa": "ˈmeɪntənəns",
    "level": "C1"
  },
  {
    "id": "c1_737",
    "word": "mandate",
    "pos": "n.",
    "meaning": "อำนาจหน้าที่",
    "reading": "",
    "ipa": "ˈmænˌdeɪt",
    "level": "C1"
  },
  {
    "id": "c1_738",
    "word": "mandatory",
    "pos": "adj.",
    "meaning": "บังคับ",
    "reading": "",
    "ipa": "ˈmændəˌtɔɹi",
    "level": "C1"
  },
  {
    "id": "c1_739",
    "word": "manifest",
    "pos": "v.",
    "meaning": "แสดงออก",
    "reading": "",
    "ipa": "ˈmænəˌfɛst",
    "level": "C1"
  },
  {
    "id": "c1_740",
    "word": "manipulate",
    "pos": "v.",
    "meaning": "จัดการ",
    "reading": "",
    "ipa": "məˈnɪpjəˌɫeɪt",
    "level": "C1"
  },
  {
    "id": "c1_741",
    "word": "manipulation",
    "pos": "n.",
    "meaning": "การจัดการ",
    "reading": "",
    "ipa": "məˌnɪpjəˈɫeɪʃən",
    "level": "C1"
  },
  {
    "id": "c1_742",
    "word": "manuscript",
    "pos": "n.",
    "meaning": "ต้นฉบับ",
    "reading": "",
    "ipa": "ˈmænjəsˌkɹɪpt",
    "level": "C1"
  },
  {
    "id": "c1_743",
    "word": "march",
    "pos": "n., v.",
    "meaning": "เดินขบวน",
    "reading": "",
    "ipa": "ˈmɑɹtʃ",
    "level": "C1"
  },
  {
    "id": "c1_744",
    "word": "marginal",
    "pos": "adj.",
    "meaning": "ขอบเขต",
    "reading": "",
    "ipa": "ˈmɑɹdʒənəɫ",
    "level": "C1"
  },
  {
    "id": "c1_745",
    "word": "marine",
    "pos": "adj.",
    "meaning": "ทางทะเล",
    "reading": "",
    "ipa": "mɝˈin",
    "level": "C1"
  },
  {
    "id": "c1_746",
    "word": "marketplace",
    "pos": "n.",
    "meaning": "ตลาด",
    "reading": "",
    "ipa": "ˈmɑɹkətˌpɫeɪs",
    "level": "C1"
  },
  {
    "id": "c1_747",
    "word": "mask",
    "pos": "n.",
    "meaning": "หน้ากาก",
    "reading": "",
    "ipa": "ˈmæsk",
    "level": "C1"
  },
  {
    "id": "c1_748",
    "word": "massacre",
    "pos": "n.",
    "meaning": "การสังหารหมู่",
    "reading": "",
    "ipa": "ˈmæsəkɝ",
    "level": "C1"
  },
  {
    "id": "c1_749",
    "word": "mathematical",
    "pos": "adj.",
    "meaning": "ทางคณิตศาสตร์",
    "reading": "",
    "ipa": "ˌmæθəˈmætɪkəɫ",
    "level": "C1"
  },
  {
    "id": "c1_750",
    "word": "mature",
    "pos": "adj., v.",
    "meaning": "เป็นผู้ใหญ่",
    "reading": "",
    "ipa": "məˈtʃʊɹ",
    "level": "C1"
  },
  {
    "id": "c1_751",
    "word": "maximize",
    "pos": "v.",
    "meaning": "เพิ่มให้มากที่สุด",
    "reading": "",
    "ipa": "ˈmæksəˌmaɪz",
    "level": "C1"
  },
  {
    "id": "c1_752",
    "word": "meaningful",
    "pos": "adj.",
    "meaning": "มีความหมาย",
    "reading": "",
    "ipa": "ˈminɪŋfəɫ",
    "level": "C1"
  },
  {
    "id": "c1_753",
    "word": "meantime",
    "pos": "n.",
    "meaning": "ในขณะเดียวกัน",
    "reading": "",
    "ipa": "ˈminˌtaɪm",
    "level": "C1"
  },
  {
    "id": "c1_754",
    "word": "medieval",
    "pos": "adj.",
    "meaning": "ยุคกลาง",
    "reading": "",
    "ipa": "miˈdivəɫ",
    "level": "C1"
  },
  {
    "id": "c1_755",
    "word": "meditation",
    "pos": "n.",
    "meaning": "การทำสมาธิ",
    "reading": "",
    "ipa": "ˌmɛdəˈteɪʃən",
    "level": "C1"
  },
  {
    "id": "c1_756",
    "word": "melody",
    "pos": "n.",
    "meaning": "ทำนองเพลง",
    "reading": "",
    "ipa": "ˈmɛɫədi",
    "level": "C1"
  },
  {
    "id": "c1_757",
    "word": "memo",
    "pos": "n.",
    "meaning": "บันทึก",
    "reading": "",
    "ipa": "ˈmɛˌmoʊ",
    "level": "C1"
  },
  {
    "id": "c1_758",
    "word": "memoir",
    "pos": "n.",
    "meaning": "บันทึกความทรงจำ",
    "reading": "",
    "ipa": "ˈmɛmˌwɑɹ",
    "level": "C1"
  },
  {
    "id": "c1_759",
    "word": "memorial",
    "pos": "n.",
    "meaning": "อนุสรณ์",
    "reading": "",
    "ipa": "məˈmɔɹiəɫ",
    "level": "C1"
  },
  {
    "id": "c1_760",
    "word": "mentor",
    "pos": "n.",
    "meaning": "ที่ปรึกษา",
    "reading": "",
    "ipa": "ˈmɛnˌtɔɹ",
    "level": "C1"
  },
  {
    "id": "c1_761",
    "word": "merchant",
    "pos": "n.",
    "meaning": "พ่อค้า",
    "reading": "",
    "ipa": "ˈmɝtʃənt",
    "level": "C1"
  },
  {
    "id": "c1_762",
    "word": "mercy",
    "pos": "n.",
    "meaning": "ความเมตตา",
    "reading": "",
    "ipa": "ˈmɝsi",
    "level": "C1"
  },
  {
    "id": "c1_763",
    "word": "mere",
    "pos": "adj.",
    "meaning": "เพียงแค่",
    "reading": "",
    "ipa": "ˈmɪɹ",
    "level": "C1"
  },
  {
    "id": "c1_764",
    "word": "merely",
    "pos": "adv.",
    "meaning": "เพียงแค่",
    "reading": "",
    "ipa": "ˈmɪɹɫi",
    "level": "C1"
  },
  {
    "id": "c1_765",
    "word": "merge",
    "pos": "v.",
    "meaning": "รวม",
    "reading": "",
    "ipa": "ˈmɝdʒ",
    "level": "C1"
  },
  {
    "id": "c1_766",
    "word": "merger",
    "pos": "n.",
    "meaning": "การควบรวม",
    "reading": "",
    "ipa": "ˈmɝdʒɝ",
    "level": "C1"
  },
  {
    "id": "c1_767",
    "word": "merit",
    "pos": "n.",
    "meaning": "คุณงามความดี",
    "reading": "",
    "ipa": "ˈmɛɹət",
    "level": "C1"
  },
  {
    "id": "c1_768",
    "word": "methodology",
    "pos": "n.",
    "meaning": "วิธีการ",
    "reading": "",
    "ipa": "ˌmɛθəˈdɑɫədʒi",
    "level": "C1"
  },
  {
    "id": "c1_769",
    "word": "midst",
    "pos": "n.",
    "meaning": "ท่ามกลาง",
    "reading": "",
    "ipa": "ˈmɪdst",
    "level": "C1"
  },
  {
    "id": "c1_770",
    "word": "migration",
    "pos": "n.",
    "meaning": "การอพยพ",
    "reading": "",
    "ipa": "maɪˈɡɹeɪʃən",
    "level": "C1"
  },
  {
    "id": "c1_771",
    "word": "militant",
    "pos": "n., adj.",
    "meaning": "นักรบ",
    "reading": "",
    "ipa": "ˈmɪɫətənt",
    "level": "C1"
  },
  {
    "id": "c1_772",
    "word": "militia",
    "pos": "n.",
    "meaning": "กองกำลังติดอาวุธ",
    "reading": "",
    "ipa": "məˈɫɪʃə",
    "level": "C1"
  },
  {
    "id": "c1_773",
    "word": "mill",
    "pos": "n.",
    "meaning": "โรงงาน",
    "reading": "",
    "ipa": "ˈmɪɫ",
    "level": "C1"
  },
  {
    "id": "c1_774",
    "word": "minimal",
    "pos": "adj.",
    "meaning": "น้อยที่สุด",
    "reading": "",
    "ipa": "ˈmɪnəməɫ",
    "level": "C1"
  },
  {
    "id": "c1_775",
    "word": "minimize",
    "pos": "v.",
    "meaning": "ลดให้น้อยที่สุด",
    "reading": "",
    "ipa": "ˈmɪnəˌmaɪz",
    "level": "C1"
  },
  {
    "id": "c1_776",
    "word": "mining",
    "pos": "n.",
    "meaning": "การทำเหมือง",
    "reading": "",
    "ipa": "ˈmaɪnɪŋ",
    "level": "C1"
  },
  {
    "id": "c1_777",
    "word": "ministry",
    "pos": "n.",
    "meaning": "กระทรวง",
    "reading": "",
    "ipa": "ˈmɪnəstɹi",
    "level": "C1"
  },
  {
    "id": "c1_778",
    "word": "minute",
    "pos": "adj.",
    "meaning": "เล็กมาก",
    "reading": "",
    "ipa": "ˈmɪnət",
    "level": "C1"
  },
  {
    "id": "c1_779",
    "word": "miracle",
    "pos": "n.",
    "meaning": "ปาฏิหาริย์",
    "reading": "",
    "ipa": "ˈmɪɹəkəɫ",
    "level": "C1"
  },
  {
    "id": "c1_780",
    "word": "misery",
    "pos": "n.",
    "meaning": "ความทุกข์ทรมาน",
    "reading": "",
    "ipa": "ˈmɪzɝi",
    "level": "C1"
  },
  {
    "id": "c1_781",
    "word": "misleading",
    "pos": "adj.",
    "meaning": "ทำให้เข้าใจผิด",
    "reading": "",
    "ipa": "mɪˈsɫidɪŋ",
    "level": "C1"
  },
  {
    "id": "c1_782",
    "word": "missile",
    "pos": "n.",
    "meaning": "ขีปนาวุธ",
    "reading": "",
    "ipa": "ˈmɪsəɫ",
    "level": "C1"
  },
  {
    "id": "c1_783",
    "word": "mob",
    "pos": "n.",
    "meaning": "ฝูงชน",
    "reading": "",
    "ipa": "ˈmɑb",
    "level": "C1"
  },
  {
    "id": "c1_784",
    "word": "mobility",
    "pos": "n.",
    "meaning": "ความคล่องตัว",
    "reading": "",
    "ipa": "moʊˈbɪɫəti",
    "level": "C1"
  },
  {
    "id": "c1_785",
    "word": "mobilize",
    "pos": "v.",
    "meaning": "ระดมพล",
    "reading": "",
    "ipa": "ˈmoʊbəˌɫaɪz",
    "level": "C1"
  },
  {
    "id": "c1_786",
    "word": "moderate",
    "pos": "adj.",
    "meaning": "ปานกลาง",
    "reading": "",
    "ipa": "ˈmɑdɝˌeɪt",
    "level": "C1"
  },
  {
    "id": "c1_787",
    "word": "modification",
    "pos": "n.",
    "meaning": "การปรับเปลี่ยน",
    "reading": "",
    "ipa": "ˌmɑdəfəˈkeɪʃən",
    "level": "C1"
  },
  {
    "id": "c1_788",
    "word": "momentum",
    "pos": "n.",
    "meaning": "แรงผลักดัน",
    "reading": "",
    "ipa": "moʊˈmɛntəm",
    "level": "C1"
  },
  {
    "id": "c1_789",
    "word": "monk",
    "pos": "n.",
    "meaning": "พระสงฆ์",
    "reading": "",
    "ipa": "ˈməŋk",
    "level": "C1"
  },
  {
    "id": "c1_790",
    "word": "monopoly",
    "pos": "n.",
    "meaning": "การผูกขาด",
    "reading": "",
    "ipa": "məˈnɑpəɫi",
    "level": "C1"
  },
  {
    "id": "c1_791",
    "word": "morality",
    "pos": "n.",
    "meaning": "ศีลธรรม",
    "reading": "",
    "ipa": "mɝˈæɫəti",
    "level": "C1"
  },
  {
    "id": "c1_792",
    "word": "motive",
    "pos": "n.",
    "meaning": "แรงจูงใจ",
    "reading": "",
    "ipa": "ˈmoʊtɪv",
    "level": "C1"
  },
  {
    "id": "c1_793",
    "word": "motorist",
    "pos": "n.",
    "meaning": "ผู้ขับขี่",
    "reading": "",
    "ipa": "ˈmoʊtɝɪst",
    "level": "C1"
  },
  {
    "id": "c1_794",
    "word": "municipal",
    "pos": "adj.",
    "meaning": "เทศบาล",
    "reading": "",
    "ipa": "mjuˈnɪsəpəɫ",
    "level": "C1"
  },
  {
    "id": "c1_795",
    "word": "mutual",
    "pos": "adj.",
    "meaning": "ซึ่งกันและกัน",
    "reading": "",
    "ipa": "ˈmjutʃuəɫ",
    "level": "C1"
  },
  {
    "id": "c1_796",
    "word": "namely",
    "pos": "adv.",
    "meaning": "กล่าวคือ",
    "reading": "",
    "ipa": "ˈneɪmɫi",
    "level": "C1"
  },
  {
    "id": "c1_797",
    "word": "nationwide",
    "pos": "adj.",
    "meaning": "ทั่วประเทศ",
    "reading": "",
    "ipa": "ˈneɪʃənˈwaɪd",
    "level": "C1"
  },
  {
    "id": "c1_798",
    "word": "naval",
    "pos": "adj.",
    "meaning": "ทางเรือ",
    "reading": "",
    "ipa": "ˈneɪvəɫ",
    "level": "C1"
  },
  {
    "id": "c1_799",
    "word": "neglect",
    "pos": "v., n.",
    "meaning": "ไม่สนใจ",
    "reading": "",
    "ipa": "nəˈɡɫɛkt",
    "level": "C1"
  },
  {
    "id": "c1_800",
    "word": "neighbouring",
    "pos": "adj.",
    "meaning": "ใกล้เคียง",
    "reading": "",
    "ipa": "ˈneɪbɝɪŋ",
    "level": "C1"
  },
  {
    "id": "c1_801",
    "word": "nest",
    "pos": "n.",
    "meaning": "รัง",
    "reading": "",
    "ipa": "ˈnɛst",
    "level": "C1"
  },
  {
    "id": "c1_802",
    "word": "net",
    "pos": "adj.",
    "meaning": "สุทธิ",
    "reading": "",
    "ipa": "ˈnɛt",
    "level": "C1"
  },
  {
    "id": "c1_803",
    "word": "newsletter",
    "pos": "n.",
    "meaning": "จดหมายข่าว",
    "reading": "",
    "ipa": "ˈnuzˌɫɛtɝ",
    "level": "C1"
  },
  {
    "id": "c1_804",
    "word": "niche",
    "pos": "n.",
    "meaning": "ตลาดเฉพาะ",
    "reading": "",
    "ipa": "ˈnɪtʃ",
    "level": "C1"
  },
  {
    "id": "c1_805",
    "word": "noble",
    "pos": "adj.",
    "meaning": "สูงส่ง",
    "reading": "",
    "ipa": "ˈnoʊbəɫ",
    "level": "C1"
  },
  {
    "id": "c1_806",
    "word": "nod",
    "pos": "v.",
    "meaning": "พยักหน้า",
    "reading": "",
    "ipa": "ˈnɑd",
    "level": "C1"
  },
  {
    "id": "c1_807",
    "word": "nominate",
    "pos": "v.",
    "meaning": "เสนอชื่อ",
    "reading": "",
    "ipa": "ˈnɑməˌneɪt",
    "level": "C1"
  },
  {
    "id": "c1_808",
    "word": "nomination",
    "pos": "n.",
    "meaning": "การเสนอชื่อ",
    "reading": "",
    "ipa": "ˌnɑməˈneɪʃən",
    "level": "C1"
  },
  {
    "id": "c1_809",
    "word": "nominee",
    "pos": "n.",
    "meaning": "ผู้ได้รับการเสนอชื่อ",
    "reading": "",
    "ipa": "ˌnɑməˈni",
    "level": "C1"
  },
  {
    "id": "c1_810",
    "word": "nonetheless",
    "pos": "adv.",
    "meaning": "อย่างไรก็ตาม",
    "reading": "",
    "ipa": "ˌnənðəˈɫɛs",
    "level": "C1"
  },
  {
    "id": "c1_811",
    "word": "non-profit",
    "pos": "adj.",
    "meaning": "ไม่แสวงหากำไร",
    "reading": "",
    "ipa": "ˌnɑnˈpɹɔfɪt",
    "level": "C1"
  },
  {
    "id": "c1_812",
    "word": "nonsense",
    "pos": "n.",
    "meaning": "เรื่องไร้สาระ",
    "reading": "",
    "ipa": "ˈnɑnsɛns",
    "level": "C1"
  },
  {
    "id": "c1_813",
    "word": "noon",
    "pos": "n.",
    "meaning": "เที่ยงวัน",
    "reading": "",
    "ipa": "ˈnun",
    "level": "C1"
  },
  {
    "id": "c1_814",
    "word": "notable",
    "pos": "adj.",
    "meaning": "โดดเด่น",
    "reading": "",
    "ipa": "ˈnoʊtəbəɫ",
    "level": "C1"
  },
  {
    "id": "c1_815",
    "word": "notably",
    "pos": "adv.",
    "meaning": "อย่างโดดเด่น",
    "reading": "",
    "ipa": "ˈnoʊtəbɫi",
    "level": "C1"
  },
  {
    "id": "c1_816",
    "word": "notify",
    "pos": "v.",
    "meaning": "แจ้ง",
    "reading": "",
    "ipa": "ˈnoʊtəˌfaɪ",
    "level": "C1"
  },
  {
    "id": "c1_817",
    "word": "notorious",
    "pos": "adj.",
    "meaning": "มีชื่อเสียงในทางไม่ดี",
    "reading": "",
    "ipa": "noʊˈtɔɹiəs",
    "level": "C1"
  },
  {
    "id": "c1_818",
    "word": "novel",
    "pos": "adj.",
    "meaning": "นวนิยาย",
    "reading": "",
    "ipa": "ˈnɑvəɫ",
    "level": "C1"
  },
  {
    "id": "c1_819",
    "word": "nursery",
    "pos": "n.",
    "meaning": "สถานเลี้ยงเด็ก",
    "reading": "",
    "ipa": "ˈnɝsɝi",
    "level": "C1"
  },
  {
    "id": "c1_820",
    "word": "objection",
    "pos": "n.",
    "meaning": "การคัดค้าน",
    "reading": "",
    "ipa": "əbˈdʒɛkʃən",
    "level": "C1"
  },
  {
    "id": "c1_821",
    "word": "oblige",
    "pos": "v.",
    "meaning": "บังคับ",
    "reading": "",
    "ipa": "əˈbɫaɪdʒ",
    "level": "C1"
  },
  {
    "id": "c1_822",
    "word": "obsess",
    "pos": "v.",
    "meaning": "หมกมุ่น",
    "reading": "",
    "ipa": "əbˈsɛs",
    "level": "C1"
  },
  {
    "id": "c1_823",
    "word": "obsession",
    "pos": "n.",
    "meaning": "ความหมกมุ่น",
    "reading": "",
    "ipa": "əbˈsɛʃən",
    "level": "C1"
  },
  {
    "id": "c1_824",
    "word": "occasional",
    "pos": "adj.",
    "meaning": "เป็นครั้งคราว",
    "reading": "",
    "ipa": "əˈkeɪʒənəɫ",
    "level": "C1"
  },
  {
    "id": "c1_825",
    "word": "occurrence",
    "pos": "n.",
    "meaning": "การเกิดขึ้น",
    "reading": "",
    "ipa": "əˈkɝəns",
    "level": "C1"
  },
  {
    "id": "c1_826",
    "word": "odds",
    "pos": "n.",
    "meaning": "โอกาส",
    "reading": "",
    "ipa": "ˈɑdz",
    "level": "C1"
  },
  {
    "id": "c1_827",
    "word": "offering",
    "pos": "n.",
    "meaning": "ข้อเสนอ",
    "reading": "",
    "ipa": "ˈɔfɝɪŋ",
    "level": "C1"
  },
  {
    "id": "c1_828",
    "word": "offspring",
    "pos": "n.",
    "meaning": "ลูกหลาน",
    "reading": "",
    "ipa": "ˈɔfsˌpɹɪŋ",
    "level": "C1"
  },
  {
    "id": "c1_829",
    "word": "operational",
    "pos": "adj.",
    "meaning": "การดำเนินงาน",
    "reading": "",
    "ipa": "ˌɑpɝˈeɪʃənəɫ",
    "level": "C1"
  },
  {
    "id": "c1_830",
    "word": "opt",
    "pos": "v.",
    "meaning": "เลือก",
    "reading": "",
    "ipa": "ˈɑpt",
    "level": "C1"
  },
  {
    "id": "c1_831",
    "word": "optical",
    "pos": "adj.",
    "meaning": "ทางสายตา",
    "reading": "",
    "ipa": "ˈɑptɪkəɫ",
    "level": "C1"
  },
  {
    "id": "c1_832",
    "word": "optimism",
    "pos": "n.",
    "meaning": "ความมองโลกในแง่ดี",
    "reading": "",
    "ipa": "ˈɑptəˌmɪzəm",
    "level": "C1"
  },
  {
    "id": "c1_833",
    "word": "oral",
    "pos": "adj.",
    "meaning": "ปากเปล่า",
    "reading": "",
    "ipa": "ˈɔɹəɫ",
    "level": "C1"
  },
  {
    "id": "c1_834",
    "word": "organizational",
    "pos": "adj.",
    "meaning": "เชิงองค์กร",
    "reading": "",
    "ipa": "ˌɔɹɡənəˈzeɪʃənəɫ",
    "level": "C1"
  },
  {
    "id": "c1_835",
    "word": "orientation",
    "pos": "n.",
    "meaning": "การปฐมนิเทศ",
    "reading": "",
    "ipa": "ˌɔɹiɛnˈteɪʃən",
    "level": "C1"
  },
  {
    "id": "c1_836",
    "word": "originate",
    "pos": "v.",
    "meaning": "มีต้นกำเนิด",
    "reading": "",
    "ipa": "ɝˈɪdʒəˌneɪt",
    "level": "C1"
  },
  {
    "id": "c1_837",
    "word": "outbreak",
    "pos": "n.",
    "meaning": "การระบาด",
    "reading": "",
    "ipa": "ˈaʊtˌbɹeɪk",
    "level": "C1"
  },
  {
    "id": "c1_838",
    "word": "outing",
    "pos": "n.",
    "meaning": "การออกนอกบ้าน",
    "reading": "",
    "ipa": "ˈaʊtɪŋ",
    "level": "C1"
  },
  {
    "id": "c1_839",
    "word": "outlet",
    "pos": "n.",
    "meaning": "ร้านค้า",
    "reading": "",
    "ipa": "ˈaʊtˌɫɛt",
    "level": "C1"
  },
  {
    "id": "c1_840",
    "word": "outlook",
    "pos": "n.",
    "meaning": "มุมมอง",
    "reading": "",
    "ipa": "ˈaʊtˌɫʊk",
    "level": "C1"
  },
  {
    "id": "c1_841",
    "word": "outrage",
    "pos": "n., v.",
    "meaning": "ความโกรธแค้น",
    "reading": "",
    "ipa": "ˈaʊˌtɹeɪdʒ",
    "level": "C1"
  },
  {
    "id": "c1_842",
    "word": "outsider",
    "pos": "n.",
    "meaning": "คนนอก",
    "reading": "",
    "ipa": "aʊtˈsaɪdɝ",
    "level": "C1"
  },
  {
    "id": "c1_843",
    "word": "overlook",
    "pos": "v.",
    "meaning": "มองข้าม",
    "reading": "",
    "ipa": "ˈoʊvɝˌɫʊk",
    "level": "C1"
  },
  {
    "id": "c1_844",
    "word": "overly",
    "pos": "adv.",
    "meaning": "เกินไป",
    "reading": "",
    "ipa": "ˈoʊvɝɫi",
    "level": "C1"
  },
  {
    "id": "c1_845",
    "word": "oversee",
    "pos": "v.",
    "meaning": "ดูแล",
    "reading": "",
    "ipa": "ˈoʊvɝˌsi",
    "level": "C1"
  },
  {
    "id": "c1_846",
    "word": "overturn",
    "pos": "v.",
    "meaning": "พลิกคว่ำ",
    "reading": "",
    "ipa": "ˈoʊvɝˌtɝn",
    "level": "C1"
  },
  {
    "id": "c1_847",
    "word": "overwhelm",
    "pos": "v.",
    "meaning": "ล้นหลาม",
    "reading": "",
    "ipa": "ˌoʊvɝˈwɛɫm",
    "level": "C1"
  },
  {
    "id": "c1_848",
    "word": "overwhelming",
    "pos": "adj.",
    "meaning": "ที่ล้นหลาม",
    "reading": "",
    "ipa": "ˌoʊvɝˈwɛɫmɪŋ",
    "level": "C1"
  },
  {
    "id": "c1_849",
    "word": "pad",
    "pos": "n.",
    "meaning": "แผ่นรอง",
    "reading": "",
    "ipa": "ˈpæd",
    "level": "C1"
  },
  {
    "id": "c1_850",
    "word": "parameter",
    "pos": "n.",
    "meaning": "พารามิเตอร์",
    "reading": "",
    "ipa": "pɝˈæmətɝ",
    "level": "C1"
  },
  {
    "id": "c1_851",
    "word": "parental",
    "pos": "adj.",
    "meaning": "เกี่ยวกับพ่อแม่",
    "reading": "",
    "ipa": "pɝˈɛntəɫ",
    "level": "C1"
  },
  {
    "id": "c1_852",
    "word": "parish",
    "pos": "n.",
    "meaning": "ตำบล",
    "reading": "",
    "ipa": "ˈpæɹɪʃ",
    "level": "C1"
  },
  {
    "id": "c1_853",
    "word": "parliamentary",
    "pos": "adj.",
    "meaning": "เกี่ยวกับรัฐสภา",
    "reading": "",
    "ipa": "ˌpɑɹɫəˈmɛnɝi",
    "level": "C1"
  },
  {
    "id": "c1_854",
    "word": "partial",
    "pos": "adj.",
    "meaning": "บางส่วน",
    "reading": "",
    "ipa": "ˈpɑɹʃəɫ",
    "level": "C1"
  },
  {
    "id": "c1_855",
    "word": "partially",
    "pos": "adv.",
    "meaning": "บางส่วน",
    "reading": "",
    "ipa": "ˈpɑɹʃəɫi",
    "level": "C1"
  },
  {
    "id": "c1_856",
    "word": "passing",
    "pos": "n.",
    "meaning": "การผ่าน",
    "reading": "",
    "ipa": "ˈpæsɪŋ",
    "level": "C1"
  },
  {
    "id": "c1_857",
    "word": "passive",
    "pos": "adj.",
    "meaning": "อยู่เฉยๆ",
    "reading": "",
    "ipa": "ˈpæsɪv",
    "level": "C1"
  },
  {
    "id": "c1_858",
    "word": "pastor",
    "pos": "n.",
    "meaning": "ศาสนาจารย์",
    "reading": "",
    "ipa": "ˈpæstɝ",
    "level": "C1"
  },
  {
    "id": "c1_859",
    "word": "patch",
    "pos": "n.",
    "meaning": "แผ่นปะ",
    "reading": "",
    "ipa": "ˈpætʃ",
    "level": "C1"
  },
  {
    "id": "c1_860",
    "word": "patent",
    "pos": "n.",
    "meaning": "สิทธิบัตร",
    "reading": "",
    "ipa": "ˈpætənt",
    "level": "C1"
  },
  {
    "id": "c1_861",
    "word": "pathway",
    "pos": "n.",
    "meaning": "เส้นทาง",
    "reading": "",
    "ipa": "ˈpæθˌweɪ",
    "level": "C1"
  },
  {
    "id": "c1_862",
    "word": "patrol",
    "pos": "n., v.",
    "meaning": "การลาดตระเวน",
    "reading": "",
    "ipa": "pəˈtɹoʊɫ",
    "level": "C1"
  },
  {
    "id": "c1_863",
    "word": "patron",
    "pos": "n.",
    "meaning": "ผู้อุปถัมภ์",
    "reading": "",
    "ipa": "ˈpeɪtɹən",
    "level": "C1"
  },
  {
    "id": "c1_864",
    "word": "peak",
    "pos": "n.",
    "meaning": "จุดสูงสุด",
    "reading": "",
    "ipa": "ˈpik",
    "level": "C1"
  },
  {
    "id": "c1_865",
    "word": "peasant",
    "pos": "n.",
    "meaning": "ชาวนา",
    "reading": "",
    "ipa": "ˈpɛzənt",
    "level": "C1"
  },
  {
    "id": "c1_866",
    "word": "peculiar",
    "pos": "adj.",
    "meaning": "แปลก",
    "reading": "",
    "ipa": "pəkˈjuɫjɝ",
    "level": "C1"
  },
  {
    "id": "c1_867",
    "word": "persist",
    "pos": "v.",
    "meaning": "ยังคงอยู่",
    "reading": "",
    "ipa": "pɝˈsɪst",
    "level": "C1"
  },
  {
    "id": "c1_868",
    "word": "persistent",
    "pos": "adj.",
    "meaning": "ที่คงอยู่",
    "reading": "",
    "ipa": "pɝˈsɪstənt",
    "level": "C1"
  },
  {
    "id": "c1_869",
    "word": "personnel",
    "pos": "n.",
    "meaning": "บุคลากร",
    "reading": "",
    "ipa": "ˌpɝsəˈnɛɫ",
    "level": "C1"
  },
  {
    "id": "c1_870",
    "word": "petition",
    "pos": "n.",
    "meaning": "คำร้อง",
    "reading": "",
    "ipa": "pəˈtɪʃən",
    "level": "C1"
  },
  {
    "id": "c1_871",
    "word": "philosopher",
    "pos": "n.",
    "meaning": "นักปรัชญา",
    "reading": "",
    "ipa": "fəˈɫɑsəfɝ",
    "level": "C1"
  },
  {
    "id": "c1_872",
    "word": "philosophical",
    "pos": "adj.",
    "meaning": "เชิงปรัชญา",
    "reading": "",
    "ipa": "ˌfɪɫəˈsɑfɪkəɫ",
    "level": "C1"
  },
  {
    "id": "c1_873",
    "word": "physician",
    "pos": "n.",
    "meaning": "แพทย์",
    "reading": "",
    "ipa": "fəˈzɪʃən",
    "level": "C1"
  },
  {
    "id": "c1_874",
    "word": "pioneer",
    "pos": "n., v.",
    "meaning": "ผู้บุกเบิก",
    "reading": "",
    "ipa": "ˌpaɪəˈnɪɹ",
    "level": "C1"
  },
  {
    "id": "c1_875",
    "word": "pipeline",
    "pos": "n.",
    "meaning": "ท่อส่ง",
    "reading": "",
    "ipa": "ˈpaɪˌpɫaɪn",
    "level": "C1"
  },
  {
    "id": "c1_876",
    "word": "pirate",
    "pos": "n.",
    "meaning": "โจรสลัด",
    "reading": "",
    "ipa": "ˈpaɪɹət",
    "level": "C1"
  },
  {
    "id": "c1_877",
    "word": "pit",
    "pos": "n.",
    "meaning": "หลุม",
    "reading": "",
    "ipa": "ˈpɪt",
    "level": "C1"
  },
  {
    "id": "c1_878",
    "word": "plea",
    "pos": "n.",
    "meaning": "คำร้องทุกข์",
    "reading": "",
    "ipa": "ˈpɫi",
    "level": "C1"
  },
  {
    "id": "c1_879",
    "word": "plead",
    "pos": "v.",
    "meaning": "อ้อนวอน",
    "reading": "",
    "ipa": "ˈpɫid",
    "level": "C1"
  },
  {
    "id": "c1_880",
    "word": "pledge",
    "pos": "v., n.",
    "meaning": "คำมั่น",
    "reading": "",
    "ipa": "ˈpɫɛdʒ",
    "level": "C1"
  },
  {
    "id": "c1_881",
    "word": "plug",
    "pos": "v., n.",
    "meaning": "ปลั๊ก",
    "reading": "",
    "ipa": "ˈpɫəɡ",
    "level": "C1"
  },
  {
    "id": "c1_882",
    "word": "plunge",
    "pos": "v.",
    "meaning": "พุ่ง",
    "reading": "",
    "ipa": "ˈpɫəndʒ",
    "level": "C1"
  },
  {
    "id": "c1_883",
    "word": "pole",
    "pos": "n.",
    "meaning": "เสา",
    "reading": "",
    "ipa": "ˈpoʊɫ",
    "level": "C1"
  },
  {
    "id": "c1_884",
    "word": "poll",
    "pos": "n.",
    "meaning": "การสำรวจความคิดเห็น",
    "reading": "",
    "ipa": "ˈpoʊɫ",
    "level": "C1"
  },
  {
    "id": "c1_885",
    "word": "pond",
    "pos": "n.",
    "meaning": "สระน้ำ",
    "reading": "",
    "ipa": "ˈpɑnd",
    "level": "C1"
  },
  {
    "id": "c1_886",
    "word": "pop",
    "pos": "v.",
    "meaning": "ปรากฏขึ้น",
    "reading": "",
    "ipa": "ˈpɑp",
    "level": "C1"
  },
  {
    "id": "c1_887",
    "word": "portfolio",
    "pos": "n.",
    "meaning": "แฟ้มผลงาน",
    "reading": "",
    "ipa": "pɔɹtˈfoʊɫiˌoʊ",
    "level": "C1"
  },
  {
    "id": "c1_888",
    "word": "portray",
    "pos": "v.",
    "meaning": "พรรณนา",
    "reading": "",
    "ipa": "pɔɹˈtɹeɪ",
    "level": "C1"
  },
  {
    "id": "c1_889",
    "word": "postpone",
    "pos": "v.",
    "meaning": "เลื่อน",
    "reading": "",
    "ipa": "poʊˈspoʊn",
    "level": "C1"
  },
  {
    "id": "c1_890",
    "word": "post-war",
    "pos": "adj.",
    "meaning": "หลังสงคราม",
    "reading": "",
    "ipa": "ˈpoʊst ˈwɔɹ",
    "level": "C1"
  },
  {
    "id": "c1_891",
    "word": "practitioner",
    "pos": "n.",
    "meaning": "ผู้ประกอบวิชาชีพ",
    "reading": "",
    "ipa": "pɹækˈtɪʃənɝ",
    "level": "C1"
  },
  {
    "id": "c1_892",
    "word": "preach",
    "pos": "v.",
    "meaning": "เทศนา",
    "reading": "",
    "ipa": "ˈpɹitʃ",
    "level": "C1"
  },
  {
    "id": "c1_893",
    "word": "precedent",
    "pos": "n.",
    "meaning": "ตัวอย่างก่อนหน้า",
    "reading": "",
    "ipa": "ˈpɹɛsɪdənt",
    "level": "C1"
  },
  {
    "id": "c1_894",
    "word": "precision",
    "pos": "n.",
    "meaning": "ความแม่นยำ",
    "reading": "",
    "ipa": "pɹiˈsɪʒən",
    "level": "C1"
  },
  {
    "id": "c1_895",
    "word": "predator",
    "pos": "n.",
    "meaning": "นักล่า",
    "reading": "",
    "ipa": "ˈpɹɛdətɝ",
    "level": "C1"
  },
  {
    "id": "c1_896",
    "word": "predecessor",
    "pos": "n.",
    "meaning": "ผู้มาก่อน",
    "reading": "",
    "ipa": "ˈpɹɛdəˌsɛsɝ",
    "level": "C1"
  },
  {
    "id": "c1_897",
    "word": "predominantly",
    "pos": "adv.",
    "meaning": "ส่วนใหญ่",
    "reading": "",
    "ipa": "ˌpɹɪˈdɑmənəntˌɫi",
    "level": "C1"
  },
  {
    "id": "c1_898",
    "word": "pregnancy",
    "pos": "n.",
    "meaning": "การตั้งครรภ์",
    "reading": "",
    "ipa": "ˈpɹɛɡnənsi",
    "level": "C1"
  },
  {
    "id": "c1_899",
    "word": "prejudice",
    "pos": "n.",
    "meaning": "อคติ",
    "reading": "",
    "ipa": "ˈpɹɛdʒədɪs",
    "level": "C1"
  },
  {
    "id": "c1_900",
    "word": "preliminary",
    "pos": "adj.",
    "meaning": "เบื้องต้น",
    "reading": "",
    "ipa": "pɹiˈɫɪməˌnɛɹi",
    "level": "C1"
  },
  {
    "id": "c1_901",
    "word": "premier",
    "pos": "n.",
    "meaning": "นายกรัฐมนตรี",
    "reading": "",
    "ipa": "pɹɛˈmɪɹ",
    "level": "C1"
  },
  {
    "id": "c1_902",
    "word": "premise",
    "pos": "n.",
    "meaning": "หลักฐาน",
    "reading": "",
    "ipa": "ˈpɹɛmɪs",
    "level": "C1"
  },
  {
    "id": "c1_903",
    "word": "premium",
    "pos": "n.",
    "meaning": "พรีเมียม",
    "reading": "",
    "ipa": "ˈpɹimiəm",
    "level": "C1"
  },
  {
    "id": "c1_904",
    "word": "prescribe",
    "pos": "v.",
    "meaning": "สั่งยา",
    "reading": "",
    "ipa": "pɹəsˈkɹaɪb",
    "level": "C1"
  },
  {
    "id": "c1_905",
    "word": "prescription",
    "pos": "n.",
    "meaning": "ใบสั่งยา",
    "reading": "",
    "ipa": "pɹəsˈkɹɪpʃən",
    "level": "C1"
  },
  {
    "id": "c1_906",
    "word": "presently",
    "pos": "adv.",
    "meaning": "ในปัจจุบัน",
    "reading": "",
    "ipa": "ˈpɹɛzəntɫi",
    "level": "C1"
  },
  {
    "id": "c1_907",
    "word": "preservation",
    "pos": "n.",
    "meaning": "การสงวนรักษา",
    "reading": "",
    "ipa": "ˌpɹɛzɝˈveɪʃən",
    "level": "C1"
  },
  {
    "id": "c1_908",
    "word": "preside",
    "pos": "v.",
    "meaning": "เป็นประธาน",
    "reading": "",
    "ipa": "pɹiˈzaɪd",
    "level": "C1"
  },
  {
    "id": "c1_909",
    "word": "presidency",
    "pos": "n.",
    "meaning": "ตำแหน่งประธานาธิบดี",
    "reading": "",
    "ipa": "ˈpɹɛzədənsi",
    "level": "C1"
  },
  {
    "id": "c1_910",
    "word": "presidential",
    "pos": "adj.",
    "meaning": "เกี่ยวกับประธานาธิบดี",
    "reading": "",
    "ipa": "ˌpɹɛzəˈdɛnʃəɫ",
    "level": "C1"
  },
  {
    "id": "c1_911",
    "word": "prestigious",
    "pos": "adj.",
    "meaning": "มีชื่อเสียง",
    "reading": "",
    "ipa": "pɝˈstidʒəs",
    "level": "C1"
  },
  {
    "id": "c1_912",
    "word": "presumably",
    "pos": "adv.",
    "meaning": "อาจเป็นไปได้",
    "reading": "",
    "ipa": "pɹəˈzuməbɫi",
    "level": "C1"
  },
  {
    "id": "c1_913",
    "word": "presume",
    "pos": "v.",
    "meaning": "สันนิษฐาน",
    "reading": "",
    "ipa": "pɹɪˈzum",
    "level": "C1"
  },
  {
    "id": "c1_914",
    "word": "prevail",
    "pos": "v.",
    "meaning": "มีชัย",
    "reading": "",
    "ipa": "pɹiˈveɪɫ",
    "level": "C1"
  },
  {
    "id": "c1_915",
    "word": "prevalence",
    "pos": "n.",
    "meaning": "ความแพร่หลาย",
    "reading": "",
    "ipa": "ˈpɹɛvəɫəns",
    "level": "C1"
  },
  {
    "id": "c1_916",
    "word": "prevention",
    "pos": "n.",
    "meaning": "การป้องกัน",
    "reading": "",
    "ipa": "pɹiˈvɛnʃən",
    "level": "C1"
  },
  {
    "id": "c1_917",
    "word": "prey",
    "pos": "n.",
    "meaning": "เหยื่อ",
    "reading": "",
    "ipa": "ˈpɹeɪ",
    "level": "C1"
  },
  {
    "id": "c1_918",
    "word": "privatization",
    "pos": "n.",
    "meaning": "การแปรรูป",
    "reading": "",
    "ipa": "ˈpɹaɪvətəˈzeɪʃən",
    "level": "C1"
  },
  {
    "id": "c1_919",
    "word": "privilege",
    "pos": "n.",
    "meaning": "สิทธิพิเศษ",
    "reading": "",
    "ipa": "ˈpɹɪvɪɫədʒ",
    "level": "C1"
  },
  {
    "id": "c1_920",
    "word": "probe",
    "pos": "n., v.",
    "meaning": "สอบสวน",
    "reading": "",
    "ipa": "ˈpɹoʊb",
    "level": "C1"
  },
  {
    "id": "c1_921",
    "word": "problematic",
    "pos": "adj.",
    "meaning": "มีปัญหา",
    "reading": "",
    "ipa": "ˌpɹɑbɫəˈmætɪk",
    "level": "C1"
  },
  {
    "id": "c1_922",
    "word": "proceedings",
    "pos": "n.",
    "meaning": "กระบวนการ",
    "reading": "",
    "ipa": "pɹəˈsidɪŋz",
    "level": "C1"
  },
  {
    "id": "c1_923",
    "word": "proceeds",
    "pos": "n.",
    "meaning": "รายได้",
    "reading": "",
    "ipa": "pɹəˈsidz",
    "level": "C1"
  },
  {
    "id": "c1_924",
    "word": "processing",
    "pos": "n.",
    "meaning": "การประมวลผล",
    "reading": "",
    "ipa": "ˈpɹɑsɛsɪŋ",
    "level": "C1"
  },
  {
    "id": "c1_925",
    "word": "processor",
    "pos": "n.",
    "meaning": "ตัวประมวลผล",
    "reading": "",
    "ipa": "ˈpɹɑˌsɛsɝ",
    "level": "C1"
  },
  {
    "id": "c1_926",
    "word": "proclaim",
    "pos": "v.",
    "meaning": "ประกาศ",
    "reading": "",
    "ipa": "pɹoʊˈkɫeɪm",
    "level": "C1"
  },
  {
    "id": "c1_927",
    "word": "productive",
    "pos": "adj.",
    "meaning": "มีผลผลิต",
    "reading": "",
    "ipa": "pɝˈdəktɪv",
    "level": "C1"
  },
  {
    "id": "c1_928",
    "word": "productivity",
    "pos": "n.",
    "meaning": "ผลผลิต",
    "reading": "",
    "ipa": "ˌpɹoʊdəkˈtɪvəti",
    "level": "C1"
  },
  {
    "id": "c1_929",
    "word": "profitable",
    "pos": "adj.",
    "meaning": "ทำกำไร",
    "reading": "",
    "ipa": "ˈpɹɑfətəbəɫ",
    "level": "C1"
  },
  {
    "id": "c1_930",
    "word": "profound",
    "pos": "adj.",
    "meaning": "ลึกซึ้ง",
    "reading": "",
    "ipa": "pɹoʊˈfaʊnd",
    "level": "C1"
  },
  {
    "id": "c1_931",
    "word": "projection",
    "pos": "n.",
    "meaning": "การคาดการณ์",
    "reading": "",
    "ipa": "pɹəˈdʒɛkʃən",
    "level": "C1"
  },
  {
    "id": "c1_932",
    "word": "prominent",
    "pos": "adj.",
    "meaning": "เด่น",
    "reading": "",
    "ipa": "ˈpɹɑmənənt",
    "level": "C1"
  },
  {
    "id": "c1_933",
    "word": "pronounced",
    "pos": "adj.",
    "meaning": "ชัดเจน",
    "reading": "",
    "ipa": "pɹəˈnaʊnst",
    "level": "C1"
  },
  {
    "id": "c1_934",
    "word": "propaganda",
    "pos": "n.",
    "meaning": "การโฆษณาชวนเชื่อ",
    "reading": "",
    "ipa": "ˌpɹɑpəˈɡændə",
    "level": "C1"
  },
  {
    "id": "c1_935",
    "word": "proposition",
    "pos": "n.",
    "meaning": "ข้อเสนอ",
    "reading": "",
    "ipa": "ˌpɹɑpəˈzɪʃən",
    "level": "C1"
  },
  {
    "id": "c1_936",
    "word": "prosecute",
    "pos": "v.",
    "meaning": "ดำเนินคดี",
    "reading": "",
    "ipa": "ˈpɹɑsəkˌjut",
    "level": "C1"
  },
  {
    "id": "c1_937",
    "word": "prosecution",
    "pos": "n.",
    "meaning": "การดำเนินคดี",
    "reading": "",
    "ipa": "ˌpɹɑsəkˈjuʃən",
    "level": "C1"
  },
  {
    "id": "c1_938",
    "word": "prosecutor",
    "pos": "n.",
    "meaning": "อัยการ",
    "reading": "",
    "ipa": "ˈpɹɑsɪkˌjutɝ",
    "level": "C1"
  },
  {
    "id": "c1_939",
    "word": "prospective",
    "pos": "adj.",
    "meaning": "ความเป็นไปได้",
    "reading": "",
    "ipa": "pɹəˈspɛktɪv",
    "level": "C1"
  },
  {
    "id": "c1_940",
    "word": "prosperity",
    "pos": "n.",
    "meaning": "ความเจริญรุ่งเรือง",
    "reading": "",
    "ipa": "pɹɑˈspɛɹəti",
    "level": "C1"
  },
  {
    "id": "c1_941",
    "word": "protective",
    "pos": "adj.",
    "meaning": "ที่ปกป้อง",
    "reading": "",
    "ipa": "pɹəˈtɛktɪv",
    "level": "C1"
  },
  {
    "id": "c1_942",
    "word": "protocol",
    "pos": "n.",
    "meaning": "ระเบียบวิธี",
    "reading": "",
    "ipa": "ˈpɹoʊtəˌkɑɫ",
    "level": "C1"
  },
  {
    "id": "c1_943",
    "word": "province",
    "pos": "n.",
    "meaning": "จังหวัด",
    "reading": "",
    "ipa": "ˈpɹɑvəns",
    "level": "C1"
  },
  {
    "id": "c1_944",
    "word": "provincial",
    "pos": "adj.",
    "meaning": "ในท้องถิ่น",
    "reading": "",
    "ipa": "pɹəˈvɪnʃəɫ",
    "level": "C1"
  },
  {
    "id": "c1_945",
    "word": "provision",
    "pos": "n.",
    "meaning": "การจัดหา",
    "reading": "",
    "ipa": "pɹəˈvɪʒən",
    "level": "C1"
  },
  {
    "id": "c1_946",
    "word": "provoke",
    "pos": "v.",
    "meaning": "กระตุ้น",
    "reading": "",
    "ipa": "pɹəˈvoʊk",
    "level": "C1"
  },
  {
    "id": "c1_947",
    "word": "psychiatric",
    "pos": "adj.",
    "meaning": "ทางจิตเวช",
    "reading": "",
    "ipa": "ˌsaɪkiˈætɹɪk",
    "level": "C1"
  },
  {
    "id": "c1_948",
    "word": "pulse",
    "pos": "n.",
    "meaning": "ชีพจร",
    "reading": "",
    "ipa": "ˈpəɫs",
    "level": "C1"
  },
  {
    "id": "c1_949",
    "word": "pump",
    "pos": "v., n.",
    "meaning": "ปั๊ม",
    "reading": "",
    "ipa": "ˈpəmp",
    "level": "C1"
  },
  {
    "id": "c1_950",
    "word": "punch",
    "pos": "n., v.",
    "meaning": "ต่อย",
    "reading": "",
    "ipa": "ˈpəntʃ",
    "level": "C1"
  },
  {
    "id": "c1_951",
    "word": "query",
    "pos": "n.",
    "meaning": "คำถาม",
    "reading": "",
    "ipa": "ˈkwiɹi",
    "level": "C1"
  },
  {
    "id": "c1_952",
    "word": "quest",
    "pos": "n.",
    "meaning": "การแสวงหา",
    "reading": "",
    "ipa": "ˈkwɛst",
    "level": "C1"
  },
  {
    "id": "c1_953",
    "word": "quota",
    "pos": "n.",
    "meaning": "โควตา",
    "reading": "",
    "ipa": "ˈkwoʊtə",
    "level": "C1"
  },
  {
    "id": "c1_954",
    "word": "radar",
    "pos": "n.",
    "meaning": "เรดาร์",
    "reading": "",
    "ipa": "ˈɹeɪˌdɑɹ",
    "level": "C1"
  },
  {
    "id": "c1_955",
    "word": "radical",
    "pos": "adj.",
    "meaning": "หัวรุนแรง",
    "reading": "",
    "ipa": "ˈɹædəkəɫ",
    "level": "C1"
  },
  {
    "id": "c1_956",
    "word": "rage",
    "pos": "n.",
    "meaning": "ความโกรธ",
    "reading": "",
    "ipa": "ˈɹeɪdʒ",
    "level": "C1"
  },
  {
    "id": "c1_957",
    "word": "raid",
    "pos": "n., v.",
    "meaning": "การจู่โจม",
    "reading": "",
    "ipa": "ˈɹeɪd",
    "level": "C1"
  },
  {
    "id": "c1_958",
    "word": "rally",
    "pos": "n., v.",
    "meaning": "ชุมนุม",
    "reading": "",
    "ipa": "ˈɹæɫi",
    "level": "C1"
  },
  {
    "id": "c1_959",
    "word": "ranking",
    "pos": "n.",
    "meaning": "การจัดอันดับ",
    "reading": "",
    "ipa": "ˈɹæŋkɪŋ",
    "level": "C1"
  },
  {
    "id": "c1_960",
    "word": "rape",
    "pos": "n., v.",
    "meaning": "การข่มขืน",
    "reading": "",
    "ipa": "ˈɹeɪp",
    "level": "C1"
  },
  {
    "id": "c1_961",
    "word": "ratio",
    "pos": "n.",
    "meaning": "อัตราส่วน",
    "reading": "",
    "ipa": "ˈɹeɪʃiˌoʊ",
    "level": "C1"
  },
  {
    "id": "c1_962",
    "word": "rational",
    "pos": "adj.",
    "meaning": "มีเหตุผล",
    "reading": "",
    "ipa": "ˈɹæʃənəɫ",
    "level": "C1"
  },
  {
    "id": "c1_963",
    "word": "ray",
    "pos": "n.",
    "meaning": "ลำแสง",
    "reading": "",
    "ipa": "ˈɹeɪ",
    "level": "C1"
  },
  {
    "id": "c1_964",
    "word": "readily",
    "pos": "adv.",
    "meaning": "อย่างง่ายดาย",
    "reading": "",
    "ipa": "ˈɹɛdəɫi",
    "level": "C1"
  },
  {
    "id": "c1_965",
    "word": "realization",
    "pos": "n.",
    "meaning": "การตระหนัก",
    "reading": "",
    "ipa": "ˈɹiɫəˈzeɪʃən",
    "level": "C1"
  },
  {
    "id": "c1_966",
    "word": "realm",
    "pos": "n.",
    "meaning": "อาณาจักร",
    "reading": "",
    "ipa": "ˈɹɛɫm",
    "level": "C1"
  },
  {
    "id": "c1_967",
    "word": "rear",
    "pos": "adj., n.",
    "meaning": "ด้านหลัง",
    "reading": "",
    "ipa": "ˈɹɪɹ",
    "level": "C1"
  },
  {
    "id": "c1_968",
    "word": "reasoning",
    "pos": "n.",
    "meaning": "การใช้เหตุผล",
    "reading": "",
    "ipa": "ˈɹizənɪŋ",
    "level": "C1"
  },
  {
    "id": "c1_969",
    "word": "reassure",
    "pos": "v.",
    "meaning": "สร้างความมั่นใจ",
    "reading": "",
    "ipa": "ˌɹiəˈʃʊɹ",
    "level": "C1"
  },
  {
    "id": "c1_970",
    "word": "rebel",
    "pos": "n.",
    "meaning": "กบฏ",
    "reading": "",
    "ipa": "ˈɹɛbəɫ",
    "level": "C1"
  },
  {
    "id": "c1_971",
    "word": "rebellion",
    "pos": "n.",
    "meaning": "การกบฏ",
    "reading": "",
    "ipa": "ɹɪˈbɛɫjən",
    "level": "C1"
  },
  {
    "id": "c1_972",
    "word": "recipient",
    "pos": "n.",
    "meaning": "ผู้รับ",
    "reading": "",
    "ipa": "ɹəˈsɪpiənt",
    "level": "C1"
  },
  {
    "id": "c1_973",
    "word": "reconstruction",
    "pos": "n.",
    "meaning": "การสร้างใหม่",
    "reading": "",
    "ipa": "ˌɹikənˈstɹəkʃən",
    "level": "C1"
  },
  {
    "id": "c1_974",
    "word": "recount",
    "pos": "v.",
    "meaning": "เล่าใหม่",
    "reading": "",
    "ipa": "ˌɹiˈkaʊnt",
    "level": "C1"
  },
  {
    "id": "c1_975",
    "word": "referendum",
    "pos": "n.",
    "meaning": "ประชามติ",
    "reading": "",
    "ipa": "ˌɹɛfɝˈɛndəm",
    "level": "C1"
  },
  {
    "id": "c1_976",
    "word": "reflection",
    "pos": "n.",
    "meaning": "การสะท้อน",
    "reading": "",
    "ipa": "ɹɪˈfɫɛkʃən",
    "level": "C1"
  },
  {
    "id": "c1_977",
    "word": "reform",
    "pos": "n., v.",
    "meaning": "การปฏิรูป",
    "reading": "",
    "ipa": "ɹəˈfɔɹm",
    "level": "C1"
  },
  {
    "id": "c1_978",
    "word": "refuge",
    "pos": "n.",
    "meaning": "ที่หลบภัย",
    "reading": "",
    "ipa": "ˈɹɛfjudʒ",
    "level": "C1"
  },
  {
    "id": "c1_979",
    "word": "refusal",
    "pos": "n.",
    "meaning": "การปฏิเสธ",
    "reading": "",
    "ipa": "ɹəfˈjuzəɫ",
    "level": "C1"
  },
  {
    "id": "c1_980",
    "word": "regain",
    "pos": "v.",
    "meaning": "ได้กลับมา",
    "reading": "",
    "ipa": "ɹɪˈɡeɪn",
    "level": "C1"
  },
  {
    "id": "c1_981",
    "word": "regardless",
    "pos": "adv.",
    "meaning": "ไม่คำนึงถึง",
    "reading": "",
    "ipa": "ɹəˈɡɑɹdɫəs",
    "level": "C1"
  },
  {
    "id": "c1_982",
    "word": "regime",
    "pos": "n.",
    "meaning": "ระบบการปกครอง",
    "reading": "",
    "ipa": "ɹeɪˈʒim",
    "level": "C1"
  },
  {
    "id": "c1_983",
    "word": "regulator",
    "pos": "n.",
    "meaning": "ผู้ควบคุม",
    "reading": "",
    "ipa": "ˈɹɛɡjəˌɫeɪtɝ",
    "level": "C1"
  },
  {
    "id": "c1_984",
    "word": "regulatory",
    "pos": "adj.",
    "meaning": "ที่เกี่ยวกับกฎระเบียบ",
    "reading": "",
    "ipa": "ˈɹɛɡjəɫəˌtɔɹi",
    "level": "C1"
  },
  {
    "id": "c1_985",
    "word": "rehabilitation",
    "pos": "n.",
    "meaning": "การฟื้นฟู",
    "reading": "",
    "ipa": "ˌɹiəˌbɪɫəˈteɪʃən",
    "level": "C1"
  },
  {
    "id": "c1_986",
    "word": "reign",
    "pos": "n., v.",
    "meaning": "การครองราชย์",
    "reading": "",
    "ipa": "ˈɹeɪn",
    "level": "C1"
  },
  {
    "id": "c1_987",
    "word": "rejection",
    "pos": "n.",
    "meaning": "การปฏิเสธ",
    "reading": "",
    "ipa": "ɹiˈdʒɛkʃən",
    "level": "C1"
  },
  {
    "id": "c1_988",
    "word": "relevance",
    "pos": "n.",
    "meaning": "ความเกี่ยวข้อง",
    "reading": "",
    "ipa": "ˈɹɛɫəvəns",
    "level": "C1"
  },
  {
    "id": "c1_989",
    "word": "reliability",
    "pos": "n.",
    "meaning": "ความน่าเชื่อถือ",
    "reading": "",
    "ipa": "ɹiˌɫaɪəˈbɪɫəti",
    "level": "C1"
  },
  {
    "id": "c1_990",
    "word": "reluctant",
    "pos": "adj.",
    "meaning": "ลังเล",
    "reading": "",
    "ipa": "ɹiˈɫəktənt",
    "level": "C1"
  },
  {
    "id": "c1_991",
    "word": "remainder",
    "pos": "n.",
    "meaning": "ส่วนที่เหลือ",
    "reading": "",
    "ipa": "ɹiˈmeɪndɝ",
    "level": "C1"
  },
  {
    "id": "c1_992",
    "word": "remains",
    "pos": "n.",
    "meaning": "ซาก",
    "reading": "",
    "ipa": "ɹiˈmeɪnz",
    "level": "C1"
  },
  {
    "id": "c1_993",
    "word": "remedy",
    "pos": "n.",
    "meaning": "การเยียวยา",
    "reading": "",
    "ipa": "ˈɹɛmədi",
    "level": "C1"
  },
  {
    "id": "c1_994",
    "word": "reminder",
    "pos": "n.",
    "meaning": "การเตือน",
    "reading": "",
    "ipa": "ɹiˈmaɪndɝ",
    "level": "C1"
  },
  {
    "id": "c1_995",
    "word": "removal",
    "pos": "n.",
    "meaning": "การลบออก",
    "reading": "",
    "ipa": "ɹɪˈmuvəɫ",
    "level": "C1"
  },
  {
    "id": "c1_996",
    "word": "render",
    "pos": "v.",
    "meaning": "ทำให้เกิด",
    "reading": "",
    "ipa": "ˈɹɛndɝ",
    "level": "C1"
  },
  {
    "id": "c1_997",
    "word": "renew",
    "pos": "v.",
    "meaning": "ต่ออายุ",
    "reading": "",
    "ipa": "ɹɪˈnu",
    "level": "C1"
  },
  {
    "id": "c1_998",
    "word": "renowned",
    "pos": "adj.",
    "meaning": "มีชื่อเสียง",
    "reading": "",
    "ipa": "ɹɪˈnaʊnd",
    "level": "C1"
  },
  {
    "id": "c1_999",
    "word": "rental",
    "pos": "n.",
    "meaning": "การเช่า",
    "reading": "",
    "ipa": "ˈɹɛntəɫ",
    "level": "C1"
  },
  {
    "id": "c1_1000",
    "word": "replacement",
    "pos": "n.",
    "meaning": "การแทนที่",
    "reading": "",
    "ipa": "ɹɪˈpɫeɪsmənt",
    "level": "C1"
  },
  {
    "id": "c1_1001",
    "word": "reportedly",
    "pos": "adv.",
    "meaning": "ตามรายงาน",
    "reading": "",
    "ipa": "ɹiˈpɔɹtədɫi",
    "level": "C1"
  },
  {
    "id": "c1_1002",
    "word": "representation",
    "pos": "n.",
    "meaning": "การนำเสนอ",
    "reading": "",
    "ipa": "ˌɹɛpɹəzɛnˈteɪʃən",
    "level": "C1"
  },
  {
    "id": "c1_1003",
    "word": "reproduce",
    "pos": "v.",
    "meaning": "สืบพันธุ์",
    "reading": "",
    "ipa": "ˌɹipɹəˈdus",
    "level": "C1"
  },
  {
    "id": "c1_1004",
    "word": "reproduction",
    "pos": "n.",
    "meaning": "การสืบพันธุ์",
    "reading": "",
    "ipa": "ˌɹipɹəˈdəkʃən",
    "level": "C1"
  },
  {
    "id": "c1_1005",
    "word": "republic",
    "pos": "n.",
    "meaning": "สาธารณรัฐ",
    "reading": "",
    "ipa": "ɹiˈpəbɫək",
    "level": "C1"
  },
  {
    "id": "c1_1006",
    "word": "resemble",
    "pos": "v.",
    "meaning": "คล้ายคลึง",
    "reading": "",
    "ipa": "ɹiˈzɛmbəɫ",
    "level": "C1"
  },
  {
    "id": "c1_1007",
    "word": "reside",
    "pos": "v.",
    "meaning": "อาศัย",
    "reading": "",
    "ipa": "ɹiˈzaɪd",
    "level": "C1"
  },
  {
    "id": "c1_1008",
    "word": "residence",
    "pos": "n.",
    "meaning": "ที่อยู่อาศัย",
    "reading": "",
    "ipa": "ˈɹɛzɪdəns",
    "level": "C1"
  },
  {
    "id": "c1_1009",
    "word": "residential",
    "pos": "adj.",
    "meaning": "ที่อยู่อาศัย",
    "reading": "",
    "ipa": "ˌɹɛzɪˈdɛnʃəɫ",
    "level": "C1"
  },
  {
    "id": "c1_1010",
    "word": "residue",
    "pos": "n.",
    "meaning": "เศษ",
    "reading": "",
    "ipa": "ˈɹɛzəˌdu",
    "level": "C1"
  },
  {
    "id": "c1_1011",
    "word": "resignation",
    "pos": "n.",
    "meaning": "การลาออก",
    "reading": "",
    "ipa": "ˌɹɛzəɡˈneɪʃən",
    "level": "C1"
  },
  {
    "id": "c1_1012",
    "word": "resistance",
    "pos": "n.",
    "meaning": "การต่อต้าน",
    "reading": "",
    "ipa": "ɹiˈzɪstəns",
    "level": "C1"
  },
  {
    "id": "c1_1013",
    "word": "respective",
    "pos": "adj.",
    "meaning": "ตามลำดับ",
    "reading": "",
    "ipa": "ɹiˈspɛktɪv",
    "level": "C1"
  },
  {
    "id": "c1_1014",
    "word": "respectively",
    "pos": "adv.",
    "meaning": "ตามลำดับ",
    "reading": "",
    "ipa": "ɹɪˈspɛktɪvɫi",
    "level": "C1"
  },
  {
    "id": "c1_1015",
    "word": "restoration",
    "pos": "n.",
    "meaning": "การฟื้นฟู",
    "reading": "",
    "ipa": "ˌɹɛstɝˈeɪʃən",
    "level": "C1"
  },
  {
    "id": "c1_1016",
    "word": "restraint",
    "pos": "n.",
    "meaning": "การยับยั้ง",
    "reading": "",
    "ipa": "ɹiˈstɹeɪnt",
    "level": "C1"
  },
  {
    "id": "c1_1017",
    "word": "resume",
    "pos": "v.",
    "meaning": "ดำเนินต่อ",
    "reading": "",
    "ipa": "ˈɹɛzəˌmeɪ",
    "level": "C1"
  },
  {
    "id": "c1_1018",
    "word": "retreat",
    "pos": "n., v.",
    "meaning": "ล่าถอย",
    "reading": "",
    "ipa": "ɹiˈtɹit",
    "level": "C1"
  },
  {
    "id": "c1_1019",
    "word": "retrieve",
    "pos": "v.",
    "meaning": "เรียกคืน",
    "reading": "",
    "ipa": "ɹiˈtɹiv",
    "level": "C1"
  },
  {
    "id": "c1_1020",
    "word": "revelation",
    "pos": "n.",
    "meaning": "การเปิดเผย",
    "reading": "",
    "ipa": "ˌɹɛvəˈɫeɪʃən",
    "level": "C1"
  },
  {
    "id": "c1_1021",
    "word": "revenge",
    "pos": "n.",
    "meaning": "การแก้แค้น",
    "reading": "",
    "ipa": "ɹiˈvɛndʒ",
    "level": "C1"
  },
  {
    "id": "c1_1022",
    "word": "reverse",
    "pos": "v., n., adj.",
    "meaning": "ย้อนกลับ",
    "reading": "",
    "ipa": "ɹiˈvɝs",
    "level": "C1"
  },
  {
    "id": "c1_1023",
    "word": "revival",
    "pos": "n.",
    "meaning": "การฟื้นตัว",
    "reading": "",
    "ipa": "ɹiˈvaɪvəɫ",
    "level": "C1"
  },
  {
    "id": "c1_1024",
    "word": "revive",
    "pos": "v.",
    "meaning": "ฟื้นฟู",
    "reading": "",
    "ipa": "ɹiˈvaɪv",
    "level": "C1"
  },
  {
    "id": "c1_1025",
    "word": "revolutionary",
    "pos": "adj.",
    "meaning": "เกี่ยวกับการปฏิวัติ",
    "reading": "",
    "ipa": "ˌɹɛvəˈɫuʃəˌnɛɹi",
    "level": "C1"
  },
  {
    "id": "c1_1026",
    "word": "rhetoric",
    "pos": "n.",
    "meaning": "วาทศิลป์",
    "reading": "",
    "ipa": "ˈɹɛtɝɪk",
    "level": "C1"
  },
  {
    "id": "c1_1027",
    "word": "rifle",
    "pos": "n.",
    "meaning": "ปืนยาว",
    "reading": "",
    "ipa": "ˈɹaɪfəɫ",
    "level": "C1"
  },
  {
    "id": "c1_1028",
    "word": "riot",
    "pos": "n.",
    "meaning": "การจลาจล",
    "reading": "",
    "ipa": "ˈɹaɪət",
    "level": "C1"
  },
  {
    "id": "c1_1029",
    "word": "rip",
    "pos": "v.",
    "meaning": "ฉีก",
    "reading": "",
    "ipa": "ˈɹɪp",
    "level": "C1"
  },
  {
    "id": "c1_1030",
    "word": "ritual",
    "pos": "n.",
    "meaning": "พิธีกรรม",
    "reading": "",
    "ipa": "ˈɹɪtʃuəɫ",
    "level": "C1"
  },
  {
    "id": "c1_1031",
    "word": "robust",
    "pos": "adj.",
    "meaning": "แข็งแรง",
    "reading": "",
    "ipa": "ɹoʊˈbəst",
    "level": "C1"
  },
  {
    "id": "c1_1032",
    "word": "rock",
    "pos": "v.",
    "meaning": "โยก",
    "reading": "",
    "ipa": "ˈɹɑk",
    "level": "C1"
  },
  {
    "id": "c1_1033",
    "word": "rod",
    "pos": "n.",
    "meaning": "แท่ง",
    "reading": "",
    "ipa": "ˈɹɑd",
    "level": "C1"
  },
  {
    "id": "c1_1034",
    "word": "rotate",
    "pos": "v.",
    "meaning": "หมุน",
    "reading": "",
    "ipa": "ˈɹoʊˌteɪt",
    "level": "C1"
  },
  {
    "id": "c1_1035",
    "word": "rotation",
    "pos": "n.",
    "meaning": "การหมุน",
    "reading": "",
    "ipa": "ɹoʊˈteɪʃən",
    "level": "C1"
  },
  {
    "id": "c1_1036",
    "word": "ruling",
    "pos": "n.",
    "meaning": "คำตัดสิน",
    "reading": "",
    "ipa": "ˈɹuɫɪŋ",
    "level": "C1"
  },
  {
    "id": "c1_1037",
    "word": "rumour",
    "pos": "n.",
    "meaning": "ข่าวลือ",
    "reading": "",
    "ipa": "ˈɹumɝ",
    "level": "C1"
  },
  {
    "id": "c1_1038",
    "word": "sack",
    "pos": "v.",
    "meaning": "ไล่ออก",
    "reading": "",
    "ipa": "ˈsæk",
    "level": "C1"
  },
  {
    "id": "c1_1039",
    "word": "sacred",
    "pos": "adj.",
    "meaning": "ศักดิ์สิทธิ์",
    "reading": "",
    "ipa": "ˈseɪkɹəd",
    "level": "C1"
  },
  {
    "id": "c1_1040",
    "word": "sacrifice",
    "pos": "n., v.",
    "meaning": "การเสียสละ",
    "reading": "",
    "ipa": "ˈsækɹəˌfaɪs",
    "level": "C1"
  },
  {
    "id": "c1_1041",
    "word": "saint",
    "pos": "n.",
    "meaning": "นักบุญ",
    "reading": "",
    "ipa": "ˈseɪnt",
    "level": "C1"
  },
  {
    "id": "c1_1042",
    "word": "sake",
    "pos": "n.",
    "meaning": "เพื่อเห็นแก่",
    "reading": "",
    "ipa": "ˈseɪk",
    "level": "C1"
  },
  {
    "id": "c1_1043",
    "word": "sanction",
    "pos": "n.",
    "meaning": "การลงโทษ",
    "reading": "",
    "ipa": "ˈsæŋkʃən",
    "level": "C1"
  },
  {
    "id": "c1_1044",
    "word": "say",
    "pos": "n.",
    "meaning": "คำพูด",
    "reading": "",
    "ipa": "ˈseɪ",
    "level": "C1"
  },
  {
    "id": "c1_1045",
    "word": "scattered",
    "pos": "adj.",
    "meaning": "กระจัดกระจาย",
    "reading": "",
    "ipa": "ˈskætɝd",
    "level": "C1"
  },
  {
    "id": "c1_1046",
    "word": "sceptical",
    "pos": "adj.",
    "meaning": "สงสัย",
    "reading": "",
    "ipa": "ˈskɛptəkəɫ",
    "level": "C1"
  },
  {
    "id": "c1_1047",
    "word": "scope",
    "pos": "n.",
    "meaning": "ขอบเขต",
    "reading": "",
    "ipa": "ˈskoʊp",
    "level": "C1"
  },
  {
    "id": "c1_1048",
    "word": "screw",
    "pos": "v., n.",
    "meaning": "สกรู",
    "reading": "",
    "ipa": "ˈskɹu",
    "level": "C1"
  },
  {
    "id": "c1_1049",
    "word": "scrutiny",
    "pos": "n.",
    "meaning": "การตรวจสอบอย่างละเอียด",
    "reading": "",
    "ipa": "ˈskɹutəni",
    "level": "C1"
  },
  {
    "id": "c1_1050",
    "word": "seal",
    "pos": "v., n.",
    "meaning": "ปิดผนึก",
    "reading": "",
    "ipa": "ˈsiɫ",
    "level": "C1"
  },
  {
    "id": "c1_1051",
    "word": "secular",
    "pos": "adj.",
    "meaning": "ทางโลก",
    "reading": "",
    "ipa": "ˈsɛkjəɫɝ",
    "level": "C1"
  },
  {
    "id": "c1_1052",
    "word": "seemingly",
    "pos": "adv.",
    "meaning": "ดูเหมือน",
    "reading": "",
    "ipa": "ˈsimɪŋɫi",
    "level": "C1"
  },
  {
    "id": "c1_1053",
    "word": "segment",
    "pos": "n.",
    "meaning": "ส่วน",
    "reading": "",
    "ipa": "ˈsɛɡmənt",
    "level": "C1"
  },
  {
    "id": "c1_1054",
    "word": "seize",
    "pos": "v.",
    "meaning": "ยึด",
    "reading": "",
    "ipa": "ˈsiz",
    "level": "C1"
  },
  {
    "id": "c1_1055",
    "word": "seldom",
    "pos": "adv.",
    "meaning": "ไม่บ่อย",
    "reading": "",
    "ipa": "ˈsɛɫdəm",
    "level": "C1"
  },
  {
    "id": "c1_1056",
    "word": "selective",
    "pos": "adj.",
    "meaning": "คัดเลือก",
    "reading": "",
    "ipa": "səˈɫɛktɪv",
    "level": "C1"
  },
  {
    "id": "c1_1057",
    "word": "senator",
    "pos": "n.",
    "meaning": "สมาชิกวุฒิสภา",
    "reading": "",
    "ipa": "ˈsɛnətɝ",
    "level": "C1"
  },
  {
    "id": "c1_1058",
    "word": "sensation",
    "pos": "n.",
    "meaning": "ความรู้สึก",
    "reading": "",
    "ipa": "sɛnˈseɪʃən",
    "level": "C1"
  },
  {
    "id": "c1_1059",
    "word": "sensitivity",
    "pos": "n.",
    "meaning": "ความไว",
    "reading": "",
    "ipa": "ˌsɛnsɪˈtɪvɪti",
    "level": "C1"
  },
  {
    "id": "c1_1060",
    "word": "sentiment",
    "pos": "n.",
    "meaning": "อารมณ์",
    "reading": "",
    "ipa": "ˈsɛnəmənt",
    "level": "C1"
  },
  {
    "id": "c1_1061",
    "word": "separation",
    "pos": "n.",
    "meaning": "การแยก",
    "reading": "",
    "ipa": "ˌsɛpɝˈeɪʃən",
    "level": "C1"
  },
  {
    "id": "c1_1062",
    "word": "serial",
    "pos": "adj.",
    "meaning": "เป็นชุด",
    "reading": "",
    "ipa": "ˈsɪˌɹiəɫ",
    "level": "C1"
  },
  {
    "id": "c1_1063",
    "word": "settlement",
    "pos": "n.",
    "meaning": "การตั้งถิ่นฐาน",
    "reading": "",
    "ipa": "ˈsɛtəɫmənt",
    "level": "C1"
  },
  {
    "id": "c1_1064",
    "word": "set-up",
    "pos": "n.",
    "meaning": "การจัดตั้ง",
    "reading": "",
    "ipa": "ˈsɛˌtəp",
    "level": "C1"
  },
  {
    "id": "c1_1065",
    "word": "sexuality",
    "pos": "n.",
    "meaning": "เพศ",
    "reading": "",
    "ipa": "ˌsɛkʃuˈæɫəti",
    "level": "C1"
  },
  {
    "id": "c1_1066",
    "word": "shareholder",
    "pos": "n.",
    "meaning": "ผู้ถือหุ้น",
    "reading": "",
    "ipa": "ˈʃɛɹˌhoʊɫdɝ",
    "level": "C1"
  },
  {
    "id": "c1_1067",
    "word": "shatter",
    "pos": "v.",
    "meaning": "แตกละเอียด",
    "reading": "",
    "ipa": "ˈʃætɝ",
    "level": "C1"
  },
  {
    "id": "c1_1068",
    "word": "shed",
    "pos": "v.",
    "meaning": "ปล่อย",
    "reading": "",
    "ipa": "ˈʃɛd",
    "level": "C1"
  },
  {
    "id": "c1_1069",
    "word": "sheer",
    "pos": "adj.",
    "meaning": "แท้จริง",
    "reading": "",
    "ipa": "ˈʃɪɹ",
    "level": "C1"
  },
  {
    "id": "c1_1070",
    "word": "shipping",
    "pos": "n.",
    "meaning": "การจัดส่ง",
    "reading": "",
    "ipa": "ˈʃɪpɪŋ",
    "level": "C1"
  },
  {
    "id": "c1_1071",
    "word": "shoot",
    "pos": "n.",
    "meaning": "ยิง",
    "reading": "",
    "ipa": "ˈʃut",
    "level": "C1"
  },
  {
    "id": "c1_1072",
    "word": "shrink",
    "pos": "v.",
    "meaning": "หดตัว",
    "reading": "",
    "ipa": "ˈʃɹɪŋk",
    "level": "C1"
  },
  {
    "id": "c1_1073",
    "word": "shrug",
    "pos": "v.",
    "meaning": "ยักไหล่",
    "reading": "",
    "ipa": "ˈʃɹəɡ",
    "level": "C1"
  },
  {
    "id": "c1_1074",
    "word": "sigh",
    "pos": "v., n.",
    "meaning": "ถอนหายใจ",
    "reading": "",
    "ipa": "ˈsaɪ",
    "level": "C1"
  },
  {
    "id": "c1_1075",
    "word": "simulate",
    "pos": "v.",
    "meaning": "จำลอง",
    "reading": "",
    "ipa": "ˈsɪmjəˌɫeɪt",
    "level": "C1"
  },
  {
    "id": "c1_1076",
    "word": "simulation",
    "pos": "n.",
    "meaning": "การจำลอง",
    "reading": "",
    "ipa": "ˌsɪmjəˈɫeɪʃən",
    "level": "C1"
  },
  {
    "id": "c1_1077",
    "word": "simultaneously",
    "pos": "adv.",
    "meaning": "ที่เกิดขึ้นพร้อมกัน",
    "reading": "",
    "ipa": "ˌsaɪməɫˈteɪniəsɫi",
    "level": "C1"
  },
  {
    "id": "c1_1078",
    "word": "sin",
    "pos": "n.",
    "meaning": "บาป",
    "reading": "",
    "ipa": "ˈsɪn",
    "level": "C1"
  },
  {
    "id": "c1_1079",
    "word": "situated",
    "pos": "adj.",
    "meaning": "ตั้งอยู่",
    "reading": "",
    "ipa": "ˈsɪtʃuˌeɪtɪd",
    "level": "C1"
  },
  {
    "id": "c1_1080",
    "word": "sketch",
    "pos": "n.",
    "meaning": "ภาพร่าง",
    "reading": "",
    "ipa": "ˈskɛtʃ",
    "level": "C1"
  },
  {
    "id": "c1_1081",
    "word": "skip",
    "pos": "v.",
    "meaning": "ข้าม",
    "reading": "",
    "ipa": "ˈskɪp",
    "level": "C1"
  },
  {
    "id": "c1_1082",
    "word": "slam",
    "pos": "v.",
    "meaning": "กระแทก",
    "reading": "",
    "ipa": "ˈsɫæm",
    "level": "C1"
  },
  {
    "id": "c1_1083",
    "word": "slap",
    "pos": "v.",
    "meaning": "ตบ",
    "reading": "",
    "ipa": "ˈsɫæp",
    "level": "C1"
  },
  {
    "id": "c1_1084",
    "word": "slash",
    "pos": "v.",
    "meaning": "ฟัน",
    "reading": "",
    "ipa": "ˈsɫæʃ",
    "level": "C1"
  },
  {
    "id": "c1_1085",
    "word": "slavery",
    "pos": "n.",
    "meaning": "การเป็นทาส",
    "reading": "",
    "ipa": "ˈsɫeɪvɝi",
    "level": "C1"
  },
  {
    "id": "c1_1086",
    "word": "slot",
    "pos": "n.",
    "meaning": "ช่อง",
    "reading": "",
    "ipa": "ˈsɫɑt",
    "level": "C1"
  },
  {
    "id": "c1_1087",
    "word": "smash",
    "pos": "v.",
    "meaning": "ทุบ",
    "reading": "",
    "ipa": "ˈsmæʃ",
    "level": "C1"
  },
  {
    "id": "c1_1088",
    "word": "snap",
    "pos": "v.",
    "meaning": "ฉีก",
    "reading": "",
    "ipa": "ˈsnæp",
    "level": "C1"
  },
  {
    "id": "c1_1089",
    "word": "soak",
    "pos": "v.",
    "meaning": "แช่",
    "reading": "",
    "ipa": "ˈsoʊk",
    "level": "C1"
  },
  {
    "id": "c1_1090",
    "word": "soar",
    "pos": "v.",
    "meaning": "พุ่งสูงขึ้น",
    "reading": "",
    "ipa": "ˈsɔɹ",
    "level": "C1"
  },
  {
    "id": "c1_1091",
    "word": "socialist",
    "pos": "adj.",
    "meaning": "สังคมนิยม",
    "reading": "",
    "ipa": "ˈsoʊʃəɫəst",
    "level": "C1"
  },
  {
    "id": "c1_1092",
    "word": "sole",
    "pos": "adj.",
    "meaning": "คนเดียว",
    "reading": "",
    "ipa": "ˈsoʊɫ",
    "level": "C1"
  },
  {
    "id": "c1_1093",
    "word": "solely",
    "pos": "adv.",
    "meaning": "เฉพาะ",
    "reading": "",
    "ipa": "ˈsoʊəɫi",
    "level": "C1"
  },
  {
    "id": "c1_1094",
    "word": "solicitor",
    "pos": "n.",
    "meaning": "ทนายความ",
    "reading": "",
    "ipa": "səˈɫɪsətɝ",
    "level": "C1"
  },
  {
    "id": "c1_1095",
    "word": "solidarity",
    "pos": "n.",
    "meaning": "ความสามัคคี",
    "reading": "",
    "ipa": "ˌsɑɫəˈdɛɹəti",
    "level": "C1"
  },
  {
    "id": "c1_1096",
    "word": "solo",
    "pos": "adj., n.",
    "meaning": "เดี่ยว",
    "reading": "",
    "ipa": "ˈsoʊˌɫoʊ",
    "level": "C1"
  },
  {
    "id": "c1_1097",
    "word": "sound",
    "pos": "adj.",
    "meaning": "เสียง",
    "reading": "",
    "ipa": "ˈsaʊnd",
    "level": "C1"
  },
  {
    "id": "c1_1098",
    "word": "sovereignty",
    "pos": "n.",
    "meaning": "อธิปไตย",
    "reading": "",
    "ipa": "ˈsɑvɹənti",
    "level": "C1"
  },
  {
    "id": "c1_1099",
    "word": "spam",
    "pos": "n.",
    "meaning": "สแปม",
    "reading": "",
    "ipa": "ˈspæm",
    "level": "C1"
  },
  {
    "id": "c1_1100",
    "word": "span",
    "pos": "v., n.",
    "meaning": "ช่วง",
    "reading": "",
    "ipa": "ˈspæn",
    "level": "C1"
  },
  {
    "id": "c1_1101",
    "word": "spark",
    "pos": "v.",
    "meaning": "จุดประกาย",
    "reading": "",
    "ipa": "ˈspɑɹk",
    "level": "C1"
  },
  {
    "id": "c1_1102",
    "word": "specialized",
    "pos": "adj.",
    "meaning": "เฉพาะทาง",
    "reading": "",
    "ipa": "ˈspɛʃəˌɫaɪzd",
    "level": "C1"
  },
  {
    "id": "c1_1103",
    "word": "specification",
    "pos": "n.",
    "meaning": "ข้อกำหนด",
    "reading": "",
    "ipa": "ˌspɛsɪfɪˈkeɪʃən",
    "level": "C1"
  },
  {
    "id": "c1_1104",
    "word": "specimen",
    "pos": "n.",
    "meaning": "ตัวอย่าง",
    "reading": "",
    "ipa": "ˈspɛsəmən",
    "level": "C1"
  },
  {
    "id": "c1_1105",
    "word": "spectacle",
    "pos": "n.",
    "meaning": "การแสดง",
    "reading": "",
    "ipa": "ˈspɛktəkəɫ",
    "level": "C1"
  },
  {
    "id": "c1_1106",
    "word": "spectrum",
    "pos": "n.",
    "meaning": "สเปกตรัม",
    "reading": "",
    "ipa": "ˈspɛktɹəm",
    "level": "C1"
  },
  {
    "id": "c1_1107",
    "word": "spell",
    "pos": "n.",
    "meaning": "สะกด",
    "reading": "",
    "ipa": "ˈspɛɫ",
    "level": "C1"
  },
  {
    "id": "c1_1108",
    "word": "sphere",
    "pos": "n.",
    "meaning": "ทรงกลม",
    "reading": "",
    "ipa": "ˈsfɪɹ",
    "level": "C1"
  },
  {
    "id": "c1_1109",
    "word": "spin",
    "pos": "v., n.",
    "meaning": "หมุน",
    "reading": "",
    "ipa": "ˈspɪn",
    "level": "C1"
  },
  {
    "id": "c1_1110",
    "word": "spine",
    "pos": "n.",
    "meaning": "กระดูกสันหลัง",
    "reading": "",
    "ipa": "ˈspaɪn",
    "level": "C1"
  },
  {
    "id": "c1_1111",
    "word": "spotlight",
    "pos": "n.",
    "meaning": "ไฟสปอร์ตไลท์",
    "reading": "",
    "ipa": "ˈspɑtˌɫaɪt",
    "level": "C1"
  },
  {
    "id": "c1_1112",
    "word": "spouse",
    "pos": "n.",
    "meaning": "คู่สมรส",
    "reading": "",
    "ipa": "ˈspaʊs",
    "level": "C1"
  },
  {
    "id": "c1_1113",
    "word": "spy",
    "pos": "n., v.",
    "meaning": "สายลับ",
    "reading": "",
    "ipa": "ˈspaɪ",
    "level": "C1"
  },
  {
    "id": "c1_1114",
    "word": "squad",
    "pos": "n.",
    "meaning": "ทีม",
    "reading": "",
    "ipa": "ˈskwɑd",
    "level": "C1"
  },
  {
    "id": "c1_1115",
    "word": "squeeze",
    "pos": "v.",
    "meaning": "บีบ",
    "reading": "",
    "ipa": "ˈskwiz",
    "level": "C1"
  },
  {
    "id": "c1_1116",
    "word": "stab",
    "pos": "v.",
    "meaning": "แทง",
    "reading": "",
    "ipa": "ˈstæb",
    "level": "C1"
  },
  {
    "id": "c1_1117",
    "word": "stability",
    "pos": "n.",
    "meaning": "ความมั่นคง",
    "reading": "",
    "ipa": "stəˈbɪɫɪti",
    "level": "C1"
  },
  {
    "id": "c1_1118",
    "word": "stabilize",
    "pos": "v.",
    "meaning": "ทำให้มั่นคง",
    "reading": "",
    "ipa": "ˈsteɪbəˌɫaɪz",
    "level": "C1"
  },
  {
    "id": "c1_1119",
    "word": "stake",
    "pos": "n.",
    "meaning": "เดิมพัน",
    "reading": "",
    "ipa": "ˈsteɪk",
    "level": "C1"
  },
  {
    "id": "c1_1120",
    "word": "standing",
    "pos": "adj.",
    "meaning": "ที่ยืน",
    "reading": "",
    "ipa": "ˈstændɪŋ",
    "level": "C1"
  },
  {
    "id": "c1_1121",
    "word": "stark",
    "pos": "adj.",
    "meaning": "เด่นชัด",
    "reading": "",
    "ipa": "ˈstɑɹk",
    "level": "C1"
  },
  {
    "id": "c1_1122",
    "word": "statistical",
    "pos": "adj.",
    "meaning": "ทางสถิติ",
    "reading": "",
    "ipa": "stəˈtɪstɪkəɫ",
    "level": "C1"
  },
  {
    "id": "c1_1123",
    "word": "steer",
    "pos": "v.",
    "meaning": "นำทาง",
    "reading": "",
    "ipa": "ˈstɪɹ",
    "level": "C1"
  },
  {
    "id": "c1_1124",
    "word": "stem",
    "pos": "n., v.",
    "meaning": "ลำต้น",
    "reading": "",
    "ipa": "ˈstɛm",
    "level": "C1"
  },
  {
    "id": "c1_1125",
    "word": "stereotype",
    "pos": "n.",
    "meaning": "แบบแผน",
    "reading": "",
    "ipa": "ˈstɛɹiəˌtaɪp",
    "level": "C1"
  },
  {
    "id": "c1_1126",
    "word": "stimulus",
    "pos": "n.",
    "meaning": "สิ่งเร้า",
    "reading": "",
    "ipa": "ˈstɪmjəɫəs",
    "level": "C1"
  },
  {
    "id": "c1_1127",
    "word": "stir",
    "pos": "v.",
    "meaning": "กวน",
    "reading": "",
    "ipa": "ˈstɝ",
    "level": "C1"
  },
  {
    "id": "c1_1128",
    "word": "storage",
    "pos": "n.",
    "meaning": "การเก็บรักษา",
    "reading": "",
    "ipa": "ˈstɔɹədʒ",
    "level": "C1"
  },
  {
    "id": "c1_1129",
    "word": "straightforward",
    "pos": "adj.",
    "meaning": "ตรงไปตรงมา",
    "reading": "",
    "ipa": "ˈstɹeɪtˈfɔɹwɝd",
    "level": "C1"
  },
  {
    "id": "c1_1130",
    "word": "strain",
    "pos": "n.",
    "meaning": "ความตึงเครียด",
    "reading": "",
    "ipa": "ˈstɹeɪn",
    "level": "C1"
  },
  {
    "id": "c1_1131",
    "word": "strand",
    "pos": "n.",
    "meaning": "เกลียว",
    "reading": "",
    "ipa": "ˈstɹænd",
    "level": "C1"
  },
  {
    "id": "c1_1132",
    "word": "strategic",
    "pos": "adj.",
    "meaning": "กลยุทธ์",
    "reading": "",
    "ipa": "stɹəˈtidʒɪk",
    "level": "C1"
  },
  {
    "id": "c1_1133",
    "word": "striking",
    "pos": "adj.",
    "meaning": "โดดเด่น",
    "reading": "",
    "ipa": "ˈstɹaɪkɪŋ",
    "level": "C1"
  },
  {
    "id": "c1_1134",
    "word": "strip",
    "pos": "n.",
    "meaning": "แถบ",
    "reading": "",
    "ipa": "ˈstɹɪp",
    "level": "C1"
  },
  {
    "id": "c1_1135",
    "word": "strive",
    "pos": "v.",
    "meaning": "พยายาม",
    "reading": "",
    "ipa": "ˈstɹaɪv",
    "level": "C1"
  },
  {
    "id": "c1_1136",
    "word": "structural",
    "pos": "adj.",
    "meaning": "เชิงโครงสร้าง",
    "reading": "",
    "ipa": "ˈstɹəktʃɝəɫ",
    "level": "C1"
  },
  {
    "id": "c1_1137",
    "word": "stumble",
    "pos": "v.",
    "meaning": "สะดุด",
    "reading": "",
    "ipa": "ˈstəmbəɫ",
    "level": "C1"
  },
  {
    "id": "c1_1138",
    "word": "stun",
    "pos": "v.",
    "meaning": "ทำให้ตกใจ",
    "reading": "",
    "ipa": "ˈstən",
    "level": "C1"
  },
  {
    "id": "c1_1139",
    "word": "submission",
    "pos": "n.",
    "meaning": "การยอมส่ง",
    "reading": "",
    "ipa": "səbˈmɪʃən",
    "level": "C1"
  },
  {
    "id": "c1_1140",
    "word": "subscriber",
    "pos": "n.",
    "meaning": "ผู้สมัครสมาชิก",
    "reading": "",
    "ipa": "səbsˈkɹaɪbɝ",
    "level": "C1"
  },
  {
    "id": "c1_1141",
    "word": "subscription",
    "pos": "n.",
    "meaning": "การสมัครสมาชิก",
    "reading": "",
    "ipa": "səbsˈkɹɪpʃən",
    "level": "C1"
  },
  {
    "id": "c1_1142",
    "word": "subsidy",
    "pos": "n.",
    "meaning": "เงินอุดหนุน",
    "reading": "",
    "ipa": "ˈsəbsɪdi",
    "level": "C1"
  },
  {
    "id": "c1_1143",
    "word": "substantial",
    "pos": "adj.",
    "meaning": "สำคัญ",
    "reading": "",
    "ipa": "səbˈstænʃəɫ",
    "level": "C1"
  },
  {
    "id": "c1_1144",
    "word": "substantially",
    "pos": "adv.",
    "meaning": "อย่างสำคัญ",
    "reading": "",
    "ipa": "səbˈstænʃəɫi",
    "level": "C1"
  },
  {
    "id": "c1_1145",
    "word": "substitute",
    "pos": "n., v.",
    "meaning": "ตัวแทน",
    "reading": "",
    "ipa": "ˈsəbstəˌtut",
    "level": "C1"
  },
  {
    "id": "c1_1146",
    "word": "substitution",
    "pos": "n.",
    "meaning": "การแทนที่",
    "reading": "",
    "ipa": "ˌsəbstɪˈtuʃən",
    "level": "C1"
  },
  {
    "id": "c1_1147",
    "word": "subtle",
    "pos": "adj.",
    "meaning": "ละเอียดอ่อน",
    "reading": "",
    "ipa": "ˈsətəɫ",
    "level": "C1"
  },
  {
    "id": "c1_1148",
    "word": "suburban",
    "pos": "adj.",
    "meaning": "ชานเมือง",
    "reading": "",
    "ipa": "səˈbɝbən",
    "level": "C1"
  },
  {
    "id": "c1_1149",
    "word": "succession",
    "pos": "n.",
    "meaning": "การสืบทอด",
    "reading": "",
    "ipa": "səkˈsɛʃən",
    "level": "C1"
  },
  {
    "id": "c1_1150",
    "word": "successive",
    "pos": "adj.",
    "meaning": "ต่อเนื่อง",
    "reading": "",
    "ipa": "səkˈsɛsɪv",
    "level": "C1"
  },
  {
    "id": "c1_1151",
    "word": "successor",
    "pos": "n.",
    "meaning": "ผู้สืบทอด",
    "reading": "",
    "ipa": "səkˈsɛsɝ",
    "level": "C1"
  },
  {
    "id": "c1_1152",
    "word": "suck",
    "pos": "v.",
    "meaning": "ดูด",
    "reading": "",
    "ipa": "ˈsək",
    "level": "C1"
  },
  {
    "id": "c1_1153",
    "word": "sue",
    "pos": "v.",
    "meaning": "ฟ้องร้อง",
    "reading": "",
    "ipa": "ˈsu",
    "level": "C1"
  },
  {
    "id": "c1_1154",
    "word": "suicide",
    "pos": "n.",
    "meaning": "การฆ่าตัวตาย",
    "reading": "",
    "ipa": "ˈsuəˌsaɪd",
    "level": "C1"
  },
  {
    "id": "c1_1155",
    "word": "suite",
    "pos": "n.",
    "meaning": "ชุด",
    "reading": "",
    "ipa": "ˈswit",
    "level": "C1"
  },
  {
    "id": "c1_1156",
    "word": "summit",
    "pos": "n.",
    "meaning": "ยอดเขา",
    "reading": "",
    "ipa": "ˈsəmət",
    "level": "C1"
  },
  {
    "id": "c1_1157",
    "word": "superb",
    "pos": "adj.",
    "meaning": "ยอดเยี่ยม",
    "reading": "",
    "ipa": "sʊˈpɝb",
    "level": "C1"
  },
  {
    "id": "c1_1158",
    "word": "superior",
    "pos": "adj.",
    "meaning": "เหนือกว่า",
    "reading": "",
    "ipa": "suˈpɪɹiɝ",
    "level": "C1"
  },
  {
    "id": "c1_1159",
    "word": "supervise",
    "pos": "v.",
    "meaning": "ควบคุม",
    "reading": "",
    "ipa": "ˈsupɝˌvaɪz",
    "level": "C1"
  },
  {
    "id": "c1_1160",
    "word": "supervision",
    "pos": "n.",
    "meaning": "การควบคุม",
    "reading": "",
    "ipa": "ˌsupɝˈvɪʒən",
    "level": "C1"
  },
  {
    "id": "c1_1161",
    "word": "supervisor",
    "pos": "n.",
    "meaning": "หัวหน้างาน",
    "reading": "",
    "ipa": "ˈsupɝˌvaɪzɝ",
    "level": "C1"
  },
  {
    "id": "c1_1162",
    "word": "supplement",
    "pos": "n., v.",
    "meaning": "เสริม",
    "reading": "",
    "ipa": "ˈsəpɫəmənt",
    "level": "C1"
  },
  {
    "id": "c1_1163",
    "word": "supportive",
    "pos": "adj.",
    "meaning": "สนับสนุน",
    "reading": "",
    "ipa": "səˈpɔɹtɪv",
    "level": "C1"
  },
  {
    "id": "c1_1164",
    "word": "supposedly",
    "pos": "adv.",
    "meaning": "ตามที่คาดว่า",
    "reading": "",
    "ipa": "səˈpoʊzədɫi",
    "level": "C1"
  },
  {
    "id": "c1_1165",
    "word": "suppress",
    "pos": "v.",
    "meaning": "ปราบปราม",
    "reading": "",
    "ipa": "səˈpɹɛs",
    "level": "C1"
  },
  {
    "id": "c1_1166",
    "word": "supreme",
    "pos": "adj.",
    "meaning": "สูงสุด",
    "reading": "",
    "ipa": "səˈpɹim",
    "level": "C1"
  },
  {
    "id": "c1_1167",
    "word": "surge",
    "pos": "n., v.",
    "meaning": "เพิ่มขึ้นอย่างรวดเร็ว",
    "reading": "",
    "ipa": "ˈsɝdʒ",
    "level": "C1"
  },
  {
    "id": "c1_1168",
    "word": "surgical",
    "pos": "adj.",
    "meaning": "เกี่ยวกับการผ่าตัด",
    "reading": "",
    "ipa": "ˈsɝdʒɪkəɫ",
    "level": "C1"
  },
  {
    "id": "c1_1169",
    "word": "surplus",
    "pos": "n.",
    "meaning": "ส่วนเกิน",
    "reading": "",
    "ipa": "ˈsɝpɫəs",
    "level": "C1"
  },
  {
    "id": "c1_1170",
    "word": "surrender",
    "pos": "v.",
    "meaning": "ยอมจำนน",
    "reading": "",
    "ipa": "sɝˈɛndɝ",
    "level": "C1"
  },
  {
    "id": "c1_1171",
    "word": "surveillance",
    "pos": "n.",
    "meaning": "การเฝ้าระวัง",
    "reading": "",
    "ipa": "sɝˈveɪɫəns",
    "level": "C1"
  },
  {
    "id": "c1_1172",
    "word": "suspension",
    "pos": "n.",
    "meaning": "การพักงาน",
    "reading": "",
    "ipa": "səˈspɛnʃən",
    "level": "C1"
  },
  {
    "id": "c1_1173",
    "word": "suspicion",
    "pos": "n.",
    "meaning": "ความสงสัย",
    "reading": "",
    "ipa": "səˈspɪʃən",
    "level": "C1"
  },
  {
    "id": "c1_1174",
    "word": "suspicious",
    "pos": "adj.",
    "meaning": "ที่น่าสงสัย",
    "reading": "",
    "ipa": "səˈspɪʃəs",
    "level": "C1"
  },
  {
    "id": "c1_1175",
    "word": "sustain",
    "pos": "v.",
    "meaning": "รักษาไว้",
    "reading": "",
    "ipa": "səˈsteɪn",
    "level": "C1"
  },
  {
    "id": "c1_1176",
    "word": "swing",
    "pos": "v., n.",
    "meaning": "แกว่ง",
    "reading": "",
    "ipa": "ˈswɪŋ",
    "level": "C1"
  },
  {
    "id": "c1_1177",
    "word": "sword",
    "pos": "n.",
    "meaning": "ดาบ",
    "reading": "",
    "ipa": "ˈsɔɹd",
    "level": "C1"
  },
  {
    "id": "c1_1178",
    "word": "symbolic",
    "pos": "adj.",
    "meaning": "เชิงสัญลักษณ์",
    "reading": "",
    "ipa": "sɪmˈbɑɫɪk",
    "level": "C1"
  },
  {
    "id": "c1_1179",
    "word": "syndrome",
    "pos": "n.",
    "meaning": "กลุ่มอาการ",
    "reading": "",
    "ipa": "ˈsɪnˌdɹoʊm",
    "level": "C1"
  },
  {
    "id": "c1_1180",
    "word": "synthesis",
    "pos": "n.",
    "meaning": "การสังเคราะห์",
    "reading": "",
    "ipa": "ˈsɪnθəsəs",
    "level": "C1"
  },
  {
    "id": "c1_1181",
    "word": "systematic",
    "pos": "adj.",
    "meaning": "เป็นระบบ",
    "reading": "",
    "ipa": "ˌsɪstəˈmætɪk",
    "level": "C1"
  },
  {
    "id": "c1_1182",
    "word": "tactic",
    "pos": "n.",
    "meaning": "ยุทธวิธี",
    "reading": "",
    "ipa": "ˈtæktɪk",
    "level": "C1"
  },
  {
    "id": "c1_1183",
    "word": "tactical",
    "pos": "adj.",
    "meaning": "เชิงกลยุทธ์",
    "reading": "",
    "ipa": "ˈtæktɪkəɫ",
    "level": "C1"
  },
  {
    "id": "c1_1184",
    "word": "taxpayer",
    "pos": "n.",
    "meaning": "ผู้เสียภาษี",
    "reading": "",
    "ipa": "ˈtækˌspeɪɝ",
    "level": "C1"
  },
  {
    "id": "c1_1185",
    "word": "tempt",
    "pos": "v.",
    "meaning": "ล่อใจ",
    "reading": "",
    "ipa": "ˈtɛmpt",
    "level": "C1"
  },
  {
    "id": "c1_1186",
    "word": "tenant",
    "pos": "n.",
    "meaning": "ผู้เช่า",
    "reading": "",
    "ipa": "ˈtɛnənt",
    "level": "C1"
  },
  {
    "id": "c1_1187",
    "word": "tender",
    "pos": "adj.",
    "meaning": "อ่อนโยน",
    "reading": "",
    "ipa": "ˈtɛndɝ",
    "level": "C1"
  },
  {
    "id": "c1_1188",
    "word": "tenure",
    "pos": "n.",
    "meaning": "วาระ",
    "reading": "",
    "ipa": "ˈtɛnjɝ",
    "level": "C1"
  },
  {
    "id": "c1_1189",
    "word": "terminate",
    "pos": "v.",
    "meaning": "ยุติ",
    "reading": "",
    "ipa": "ˈtɝməˌneɪt",
    "level": "C1"
  },
  {
    "id": "c1_1190",
    "word": "terrain",
    "pos": "n.",
    "meaning": "ภูมิประเทศ",
    "reading": "",
    "ipa": "tɝˈeɪn",
    "level": "C1"
  },
  {
    "id": "c1_1191",
    "word": "terrific",
    "pos": "adj.",
    "meaning": "ยอดเยี่ยม",
    "reading": "",
    "ipa": "tɝˈɪfɪk",
    "level": "C1"
  },
  {
    "id": "c1_1192",
    "word": "testify",
    "pos": "v.",
    "meaning": "ให้การ",
    "reading": "",
    "ipa": "ˈtɛstəˌfaɪ",
    "level": "C1"
  },
  {
    "id": "c1_1193",
    "word": "testimony",
    "pos": "n.",
    "meaning": "คำให้การ",
    "reading": "",
    "ipa": "ˈtɛstəˌmoʊni",
    "level": "C1"
  },
  {
    "id": "c1_1194",
    "word": "texture",
    "pos": "n.",
    "meaning": "พื้นผิว",
    "reading": "",
    "ipa": "ˈtɛkstʃɝ",
    "level": "C1"
  },
  {
    "id": "c1_1195",
    "word": "thankfully",
    "pos": "adv.",
    "meaning": "อย่างน่าขอบคุณ",
    "reading": "",
    "ipa": "ˈθæŋkfəɫi",
    "level": "C1"
  },
  {
    "id": "c1_1196",
    "word": "theatrical",
    "pos": "adj.",
    "meaning": "เกี่ยวกับการละคร",
    "reading": "",
    "ipa": "θiˈætɹɪkəɫ",
    "level": "C1"
  },
  {
    "id": "c1_1197",
    "word": "theology",
    "pos": "n.",
    "meaning": "เทววิทยา",
    "reading": "",
    "ipa": "θiˈɑɫədʒi",
    "level": "C1"
  },
  {
    "id": "c1_1198",
    "word": "theoretical",
    "pos": "adj.",
    "meaning": "เชิงทฤษฎี",
    "reading": "",
    "ipa": "ˌθiɝˈɛtɪkəɫ",
    "level": "C1"
  },
  {
    "id": "c1_1199",
    "word": "thereafter",
    "pos": "adv.",
    "meaning": "ต่อจากนั้น",
    "reading": "",
    "ipa": "ðɛˈɹæftɝ",
    "level": "C1"
  },
  {
    "id": "c1_1200",
    "word": "thereby",
    "pos": "adv.",
    "meaning": "ด้วยเหตุนี้",
    "reading": "",
    "ipa": "ˈðɛɹˈbaɪ",
    "level": "C1"
  },
  {
    "id": "c1_1201",
    "word": "thoughtful",
    "pos": "adj.",
    "meaning": "รอบคอบ",
    "reading": "",
    "ipa": "ˈθɔtfəɫ",
    "level": "C1"
  },
  {
    "id": "c1_1202",
    "word": "thought-provoking",
    "pos": "adj.",
    "meaning": "ชวนคิด",
    "reading": "",
    "ipa": "ˈθɔt pɹəˈvoʊkɪŋ",
    "level": "C1"
  },
  {
    "id": "c1_1203",
    "word": "thread",
    "pos": "n.",
    "meaning": "ด้าย",
    "reading": "",
    "ipa": "ˈθɹɛd",
    "level": "C1"
  },
  {
    "id": "c1_1204",
    "word": "threshold",
    "pos": "n.",
    "meaning": "ขีดจำกัด",
    "reading": "",
    "ipa": "ˈθɹɛˌʃoʊɫd",
    "level": "C1"
  },
  {
    "id": "c1_1205",
    "word": "thrilled",
    "pos": "adj.",
    "meaning": "ตื่นเต้น",
    "reading": "",
    "ipa": "ˈθɹɪɫd",
    "level": "C1"
  },
  {
    "id": "c1_1206",
    "word": "thrive",
    "pos": "v.",
    "meaning": "เจริญรุ่งเรือง",
    "reading": "",
    "ipa": "ˈθɹaɪv",
    "level": "C1"
  },
  {
    "id": "c1_1207",
    "word": "tide",
    "pos": "n.",
    "meaning": "กระแสน้ำ",
    "reading": "",
    "ipa": "ˈtaɪd",
    "level": "C1"
  },
  {
    "id": "c1_1208",
    "word": "tighten",
    "pos": "v.",
    "meaning": "กระชับ",
    "reading": "",
    "ipa": "ˈtaɪtən",
    "level": "C1"
  },
  {
    "id": "c1_1209",
    "word": "timber",
    "pos": "n.",
    "meaning": "ไม้ซุง",
    "reading": "",
    "ipa": "ˈtɪmbɝ",
    "level": "C1"
  },
  {
    "id": "c1_1210",
    "word": "timely",
    "pos": "adj.",
    "meaning": "ทันเวลา",
    "reading": "",
    "ipa": "ˈtaɪmɫi",
    "level": "C1"
  },
  {
    "id": "c1_1211",
    "word": "tobacco",
    "pos": "n.",
    "meaning": "ยาสูบ",
    "reading": "",
    "ipa": "təˈbæˌkoʊ",
    "level": "C1"
  },
  {
    "id": "c1_1212",
    "word": "tolerance",
    "pos": "n.",
    "meaning": "ความอดทน",
    "reading": "",
    "ipa": "ˈtɑɫɝəns",
    "level": "C1"
  },
  {
    "id": "c1_1213",
    "word": "tolerate",
    "pos": "v.",
    "meaning": "ยอมทน",
    "reading": "",
    "ipa": "ˈtɑɫɝˌeɪt",
    "level": "C1"
  },
  {
    "id": "c1_1214",
    "word": "toll",
    "pos": "n.",
    "meaning": "ค่าผ่านทาง",
    "reading": "",
    "ipa": "ˈtoʊɫ",
    "level": "C1"
  },
  {
    "id": "c1_1215",
    "word": "top",
    "pos": "v.",
    "meaning": "สูงสุด",
    "reading": "",
    "ipa": "ˈtɑp",
    "level": "C1"
  },
  {
    "id": "c1_1216",
    "word": "torture",
    "pos": "n., v.",
    "meaning": "ทรมาน",
    "reading": "",
    "ipa": "ˈtɔɹtʃɝ",
    "level": "C1"
  },
  {
    "id": "c1_1217",
    "word": "toss",
    "pos": "v.",
    "meaning": "โยน",
    "reading": "",
    "ipa": "ˈtɔs",
    "level": "C1"
  },
  {
    "id": "c1_1218",
    "word": "total",
    "pos": "v.",
    "meaning": "รวมทั้งหมด",
    "reading": "",
    "ipa": "ˈtoʊtəɫ",
    "level": "C1"
  },
  {
    "id": "c1_1219",
    "word": "toxic",
    "pos": "adj.",
    "meaning": "เป็นพิษ",
    "reading": "",
    "ipa": "ˈtɑksɪk",
    "level": "C1"
  },
  {
    "id": "c1_1220",
    "word": "trademark",
    "pos": "n.",
    "meaning": "เครื่องหมายการค้า",
    "reading": "",
    "ipa": "ˈtɹeɪdˌmɑɹk",
    "level": "C1"
  },
  {
    "id": "c1_1221",
    "word": "trail",
    "pos": "n., v.",
    "meaning": "ทางเดิน",
    "reading": "",
    "ipa": "ˈtɹeɪɫ",
    "level": "C1"
  },
  {
    "id": "c1_1222",
    "word": "trailer",
    "pos": "n.",
    "meaning": "รถพ่วง",
    "reading": "",
    "ipa": "ˈtɹeɪɫɝ",
    "level": "C1"
  },
  {
    "id": "c1_1223",
    "word": "transaction",
    "pos": "n.",
    "meaning": "การทำธุรกรรม",
    "reading": "",
    "ipa": "tɹænˈzækʃən",
    "level": "C1"
  },
  {
    "id": "c1_1224",
    "word": "transcript",
    "pos": "n.",
    "meaning": "ใบแสดงผลการเรียน",
    "reading": "",
    "ipa": "ˈtɹænsˌkɹɪpt",
    "level": "C1"
  },
  {
    "id": "c1_1225",
    "word": "transformation",
    "pos": "n.",
    "meaning": "การเปลี่ยนแปลง",
    "reading": "",
    "ipa": "ˌtɹænsfɝˈmeɪʃən",
    "level": "C1"
  },
  {
    "id": "c1_1226",
    "word": "transit",
    "pos": "n.",
    "meaning": "การขนส่ง",
    "reading": "",
    "ipa": "ˈtɹænzɪt",
    "level": "C1"
  },
  {
    "id": "c1_1227",
    "word": "transmission",
    "pos": "n.",
    "meaning": "การส่งต่อ",
    "reading": "",
    "ipa": "tɹænsˈmɪʃən",
    "level": "C1"
  },
  {
    "id": "c1_1228",
    "word": "transparency",
    "pos": "n.",
    "meaning": "ความโปร่งใส",
    "reading": "",
    "ipa": "tɹænˈspɛɹənsi",
    "level": "C1"
  },
  {
    "id": "c1_1229",
    "word": "transparent",
    "pos": "adj.",
    "meaning": "โปร่งใส",
    "reading": "",
    "ipa": "tɹænˈspɛɹənt",
    "level": "C1"
  },
  {
    "id": "c1_1230",
    "word": "trauma",
    "pos": "n.",
    "meaning": "บาดแผลทางจิตใจ",
    "reading": "",
    "ipa": "ˈtɹɔmə",
    "level": "C1"
  },
  {
    "id": "c1_1231",
    "word": "treaty",
    "pos": "n.",
    "meaning": "สนธิสัญญา",
    "reading": "",
    "ipa": "ˈtɹiti",
    "level": "C1"
  },
  {
    "id": "c1_1232",
    "word": "tremendous",
    "pos": "adj.",
    "meaning": "อย่างมหาศาล",
    "reading": "",
    "ipa": "tɹəˈmɛndəs",
    "level": "C1"
  },
  {
    "id": "c1_1233",
    "word": "tribal",
    "pos": "adj.",
    "meaning": "เกี่ยวกับชนเผ่า",
    "reading": "",
    "ipa": "ˈtɹaɪbəɫ",
    "level": "C1"
  },
  {
    "id": "c1_1234",
    "word": "tribunal",
    "pos": "n.",
    "meaning": "ศาล",
    "reading": "",
    "ipa": "tɹəbˈjunəɫ",
    "level": "C1"
  },
  {
    "id": "c1_1235",
    "word": "tribute",
    "pos": "n.",
    "meaning": "การยกย่อง",
    "reading": "",
    "ipa": "ˈtɹɪbjut",
    "level": "C1"
  },
  {
    "id": "c1_1236",
    "word": "trio",
    "pos": "n.",
    "meaning": "สามคน",
    "reading": "",
    "ipa": "ˈtɹiˌoʊ",
    "level": "C1"
  },
  {
    "id": "c1_1237",
    "word": "triumph",
    "pos": "n.",
    "meaning": "ชัยชนะ",
    "reading": "",
    "ipa": "ˈtɹaɪəmf",
    "level": "C1"
  },
  {
    "id": "c1_1238",
    "word": "trophy",
    "pos": "n.",
    "meaning": "ถ้วยรางวัล",
    "reading": "",
    "ipa": "ˈtɹoʊfi",
    "level": "C1"
  },
  {
    "id": "c1_1239",
    "word": "troubled",
    "pos": "adj.",
    "meaning": "มีปัญหา",
    "reading": "",
    "ipa": "ˈtɹəbəɫd",
    "level": "C1"
  },
  {
    "id": "c1_1240",
    "word": "trustee",
    "pos": "n.",
    "meaning": "ผู้ดูแลผลประโยชน์",
    "reading": "",
    "ipa": "ˌtɹəsˈti",
    "level": "C1"
  },
  {
    "id": "c1_1241",
    "word": "tuition",
    "pos": "n.",
    "meaning": "ค่าเล่าเรียน",
    "reading": "",
    "ipa": "tjuˈɪʃən",
    "level": "C1"
  },
  {
    "id": "c1_1242",
    "word": "turnout",
    "pos": "n.",
    "meaning": "จำนวนผู้เข้าร่วม",
    "reading": "",
    "ipa": "ˈtɝˌnaʊt",
    "level": "C1"
  },
  {
    "id": "c1_1243",
    "word": "turnover",
    "pos": "n.",
    "meaning": "ยอดขาย",
    "reading": "",
    "ipa": "ˈtɝˌnoʊvɝ",
    "level": "C1"
  },
  {
    "id": "c1_1244",
    "word": "twist",
    "pos": "v., n.",
    "meaning": "บิด",
    "reading": "",
    "ipa": "ˈtwɪst",
    "level": "C1"
  },
  {
    "id": "c1_1245",
    "word": "undergraduate",
    "pos": "n.",
    "meaning": "ระดับปริญญาตรี",
    "reading": "",
    "ipa": "ˌəndɝˈɡɹædʒəwət",
    "level": "C1"
  },
  {
    "id": "c1_1246",
    "word": "underlying",
    "pos": "adj.",
    "meaning": "ซ่อนอยู่",
    "reading": "",
    "ipa": "ˌəndɝˈɫaɪɪŋ",
    "level": "C1"
  },
  {
    "id": "c1_1247",
    "word": "undermine",
    "pos": "v.",
    "meaning": "บ่อนทำลาย",
    "reading": "",
    "ipa": "ˈəndɝˌmaɪn",
    "level": "C1"
  },
  {
    "id": "c1_1248",
    "word": "undoubtedly",
    "pos": "adv.",
    "meaning": "อย่างไม่ต้องสงสัย",
    "reading": "",
    "ipa": "ənˈdaʊtɪdɫi",
    "level": "C1"
  },
  {
    "id": "c1_1249",
    "word": "unify",
    "pos": "v.",
    "meaning": "รวมเป็นหนึ่ง",
    "reading": "",
    "ipa": "ˈjunəˌfaɪ",
    "level": "C1"
  },
  {
    "id": "c1_1250",
    "word": "unprecedented",
    "pos": "adj.",
    "meaning": "ไม่เคยเกิดขึ้นมาก่อน",
    "reading": "",
    "ipa": "ənˈpɹɛsɪˌdɛntɪd",
    "level": "C1"
  },
  {
    "id": "c1_1251",
    "word": "unveil",
    "pos": "v.",
    "meaning": "เปิดเผย",
    "reading": "",
    "ipa": "ənˈveɪɫ",
    "level": "C1"
  },
  {
    "id": "c1_1252",
    "word": "upcoming",
    "pos": "adj.",
    "meaning": "ที่จะมาถึง",
    "reading": "",
    "ipa": "ˈəpˌkəmɪŋ",
    "level": "C1"
  },
  {
    "id": "c1_1253",
    "word": "upgrade",
    "pos": "v., n.",
    "meaning": "ยกระดับ",
    "reading": "",
    "ipa": "ˈəpˈɡɹeɪd",
    "level": "C1"
  },
  {
    "id": "c1_1254",
    "word": "uphold",
    "pos": "v.",
    "meaning": "สนับสนุน",
    "reading": "",
    "ipa": "əpˈhoʊɫd",
    "level": "C1"
  },
  {
    "id": "c1_1255",
    "word": "utility",
    "pos": "n.",
    "meaning": "สาธารณูปโภค",
    "reading": "",
    "ipa": "juˈtɪɫəti",
    "level": "C1"
  },
  {
    "id": "c1_1256",
    "word": "utilize",
    "pos": "v.",
    "meaning": "ใช้ประโยชน์",
    "reading": "",
    "ipa": "ˈjutəˌɫaɪz",
    "level": "C1"
  },
  {
    "id": "c1_1257",
    "word": "utterly",
    "pos": "adv.",
    "meaning": "อย่างสิ้นเชิง",
    "reading": "",
    "ipa": "ˈətɝɫi",
    "level": "C1"
  },
  {
    "id": "c1_1258",
    "word": "vacuum",
    "pos": "n.",
    "meaning": "สูญญากาศ",
    "reading": "",
    "ipa": "ˈvækjum",
    "level": "C1"
  },
  {
    "id": "c1_1259",
    "word": "vague",
    "pos": "adj.",
    "meaning": "คลุมเครือ",
    "reading": "",
    "ipa": "ˈveɪɡ",
    "level": "C1"
  },
  {
    "id": "c1_1260",
    "word": "validity",
    "pos": "n.",
    "meaning": "ความถูกต้อง",
    "reading": "",
    "ipa": "vəˈɫɪdəti",
    "level": "C1"
  },
  {
    "id": "c1_1261",
    "word": "vanish",
    "pos": "v.",
    "meaning": "หายไป",
    "reading": "",
    "ipa": "ˈvænɪʃ",
    "level": "C1"
  },
  {
    "id": "c1_1262",
    "word": "variable",
    "pos": "n., adj.",
    "meaning": "แปรผัน",
    "reading": "",
    "ipa": "ˈvɛɹiəbəɫ",
    "level": "C1"
  },
  {
    "id": "c1_1263",
    "word": "varied",
    "pos": "adj.",
    "meaning": "หลากหลาย",
    "reading": "",
    "ipa": "ˈvɛɹid",
    "level": "C1"
  },
  {
    "id": "c1_1264",
    "word": "vein",
    "pos": "n.",
    "meaning": "เส้นเลือด",
    "reading": "",
    "ipa": "ˈveɪn",
    "level": "C1"
  },
  {
    "id": "c1_1265",
    "word": "venture",
    "pos": "n., v.",
    "meaning": "การลงทุน",
    "reading": "",
    "ipa": "ˈvɛntʃɝ",
    "level": "C1"
  },
  {
    "id": "c1_1266",
    "word": "verbal",
    "pos": "adj.",
    "meaning": "ทางวาจา",
    "reading": "",
    "ipa": "ˈvɝbəɫ",
    "level": "C1"
  },
  {
    "id": "c1_1267",
    "word": "verdict",
    "pos": "n.",
    "meaning": "คำตัดสิน",
    "reading": "",
    "ipa": "ˈvɝdɪkt",
    "level": "C1"
  },
  {
    "id": "c1_1268",
    "word": "verify",
    "pos": "v.",
    "meaning": "ยืนยัน",
    "reading": "",
    "ipa": "ˈvɛɹəˌfaɪ",
    "level": "C1"
  },
  {
    "id": "c1_1269",
    "word": "verse",
    "pos": "n.",
    "meaning": "บทกวี",
    "reading": "",
    "ipa": "ˈvɝs",
    "level": "C1"
  },
  {
    "id": "c1_1270",
    "word": "versus",
    "pos": "prep.",
    "meaning": "เทียบกับ",
    "reading": "",
    "ipa": "ˈvɝsəs",
    "level": "C1"
  },
  {
    "id": "c1_1271",
    "word": "vessel",
    "pos": "n.",
    "meaning": "เรือ",
    "reading": "",
    "ipa": "ˈvɛsəɫ",
    "level": "C1"
  },
  {
    "id": "c1_1272",
    "word": "veteran",
    "pos": "n.",
    "meaning": "ทหารผ่านศึก",
    "reading": "",
    "ipa": "ˈvɛtɝən",
    "level": "C1"
  },
  {
    "id": "c1_1273",
    "word": "viable",
    "pos": "adj.",
    "meaning": "ใช้งานได้",
    "reading": "",
    "ipa": "ˈvaɪəbəɫ",
    "level": "C1"
  },
  {
    "id": "c1_1274",
    "word": "vibrant",
    "pos": "adj.",
    "meaning": "สดใส",
    "reading": "",
    "ipa": "ˈvaɪbɹənt",
    "level": "C1"
  },
  {
    "id": "c1_1275",
    "word": "vice",
    "pos": "n.",
    "meaning": "ความชั่ว",
    "reading": "",
    "ipa": "ˈvaɪs",
    "level": "C1"
  },
  {
    "id": "c1_1276",
    "word": "vicious",
    "pos": "adj.",
    "meaning": "ร้ายกาจ",
    "reading": "",
    "ipa": "ˈvɪʃəs",
    "level": "C1"
  },
  {
    "id": "c1_1277",
    "word": "villager",
    "pos": "n.",
    "meaning": "ชาวบ้าน",
    "reading": "",
    "ipa": "ˈvɪɫɪdʒɝ",
    "level": "C1"
  },
  {
    "id": "c1_1278",
    "word": "violate",
    "pos": "v.",
    "meaning": "ละเมิด",
    "reading": "",
    "ipa": "ˈvaɪəɫeɪt",
    "level": "C1"
  },
  {
    "id": "c1_1279",
    "word": "violation",
    "pos": "n.",
    "meaning": "การละเมิด",
    "reading": "",
    "ipa": "vaɪəˈɫeɪʃən",
    "level": "C1"
  },
  {
    "id": "c1_1280",
    "word": "virtue",
    "pos": "n.",
    "meaning": "คุณธรรม",
    "reading": "",
    "ipa": "ˈvɝtʃu",
    "level": "C1"
  },
  {
    "id": "c1_1281",
    "word": "vocal",
    "pos": "adj.",
    "meaning": "เสียง",
    "reading": "",
    "ipa": "ˈvoʊkəɫ",
    "level": "C1"
  },
  {
    "id": "c1_1282",
    "word": "vow",
    "pos": "v.",
    "meaning": "สาบาน",
    "reading": "",
    "ipa": "ˈvaʊ",
    "level": "C1"
  },
  {
    "id": "c1_1283",
    "word": "vulnerability",
    "pos": "n.",
    "meaning": "ความเปราะบาง",
    "reading": "",
    "ipa": "ˌvəɫnɝəˈbɪɫɪti",
    "level": "C1"
  },
  {
    "id": "c1_1284",
    "word": "vulnerable",
    "pos": "adj.",
    "meaning": "เปราะบาง",
    "reading": "",
    "ipa": "ˈvəɫnɝəbəɫ",
    "level": "C1"
  },
  {
    "id": "c1_1285",
    "word": "ward",
    "pos": "n.",
    "meaning": "วอร์ด",
    "reading": "",
    "ipa": "ˈwɔɹd",
    "level": "C1"
  },
  {
    "id": "c1_1286",
    "word": "warehouse",
    "pos": "n.",
    "meaning": "คลังสินค้า",
    "reading": "",
    "ipa": "ˈwɛɹˌhaʊs",
    "level": "C1"
  },
  {
    "id": "c1_1287",
    "word": "warfare",
    "pos": "n.",
    "meaning": "การทำสงคราม",
    "reading": "",
    "ipa": "ˈwɔɹˌfɛɹ",
    "level": "C1"
  },
  {
    "id": "c1_1288",
    "word": "warrant",
    "pos": "n., v.",
    "meaning": "ใบรับประกัน",
    "reading": "",
    "ipa": "ˈwɔɹənt",
    "level": "C1"
  },
  {
    "id": "c1_1289",
    "word": "warrior",
    "pos": "n.",
    "meaning": "นักรบ",
    "reading": "",
    "ipa": "ˈwɔɹiɝ",
    "level": "C1"
  },
  {
    "id": "c1_1290",
    "word": "weaken",
    "pos": "v.",
    "meaning": "ทำให้อ่อนแอ",
    "reading": "",
    "ipa": "ˈwikən",
    "level": "C1"
  },
  {
    "id": "c1_1291",
    "word": "weave",
    "pos": "v.",
    "meaning": "ทอ",
    "reading": "",
    "ipa": "ˈwiv",
    "level": "C1"
  },
  {
    "id": "c1_1292",
    "word": "weed",
    "pos": "n.",
    "meaning": "วัชพืช",
    "reading": "",
    "ipa": "ˈwid",
    "level": "C1"
  },
  {
    "id": "c1_1293",
    "word": "well",
    "pos": "n.",
    "meaning": "บ่อน้ำ",
    "reading": "",
    "ipa": "ˈwɛɫ",
    "level": "C1"
  },
  {
    "id": "c1_1294",
    "word": "well-being",
    "pos": "n.",
    "meaning": "ความเป็นอยู่ที่ดี",
    "reading": "",
    "ipa": "ˌwɛɫˈbiɪŋ",
    "level": "C1"
  },
  {
    "id": "c1_1295",
    "word": "whatsoever",
    "pos": "adv.",
    "meaning": "อะไรก็ตาม",
    "reading": "",
    "ipa": "ˌhwətsoʊˈɛvɝ",
    "level": "C1"
  },
  {
    "id": "c1_1296",
    "word": "whereby",
    "pos": "adv.",
    "meaning": "โดยที่",
    "reading": "",
    "ipa": "hwɛɹˈbaɪ",
    "level": "C1"
  },
  {
    "id": "c1_1297",
    "word": "whilst",
    "pos": "conj.",
    "meaning": "ในขณะที่",
    "reading": "",
    "ipa": "ˈwaɪɫst",
    "level": "C1"
  },
  {
    "id": "c1_1298",
    "word": "whip",
    "pos": "v.",
    "meaning": "ฟาด",
    "reading": "",
    "ipa": "ˈhwɪp",
    "level": "C1"
  },
  {
    "id": "c1_1299",
    "word": "wholly",
    "pos": "adv.",
    "meaning": "โดยสมบูรณ์",
    "reading": "",
    "ipa": "ˈhoʊɫi",
    "level": "C1"
  },
  {
    "id": "c1_1300",
    "word": "widen",
    "pos": "v.",
    "meaning": "ขยาย",
    "reading": "",
    "ipa": "ˈwaɪdən",
    "level": "C1"
  },
  {
    "id": "c1_1301",
    "word": "widow",
    "pos": "n.",
    "meaning": "แม่หม้าย",
    "reading": "",
    "ipa": "ˈwɪdoʊ",
    "level": "C1"
  },
  {
    "id": "c1_1302",
    "word": "width",
    "pos": "n.",
    "meaning": "ความกว้าง",
    "reading": "",
    "ipa": "ˈwɪdθ",
    "level": "C1"
  },
  {
    "id": "c1_1303",
    "word": "willingness",
    "pos": "n.",
    "meaning": "ความเต็มใจ",
    "reading": "",
    "ipa": "ˈwɪɫɪŋnəs",
    "level": "C1"
  },
  {
    "id": "c1_1304",
    "word": "wipe",
    "pos": "v.",
    "meaning": "เช็ด",
    "reading": "",
    "ipa": "ˈwaɪp",
    "level": "C1"
  },
  {
    "id": "c1_1305",
    "word": "wit",
    "pos": "n.",
    "meaning": "ปัญญา",
    "reading": "",
    "ipa": "ˈwɪt",
    "level": "C1"
  },
  {
    "id": "c1_1306",
    "word": "withdrawal",
    "pos": "n.",
    "meaning": "การถอน",
    "reading": "",
    "ipa": "wɪðˈdɹɔəɫ",
    "level": "C1"
  },
  {
    "id": "c1_1307",
    "word": "workout",
    "pos": "n.",
    "meaning": "การออกกำลังกาย",
    "reading": "",
    "ipa": "ˈwɝˌkaʊt",
    "level": "C1"
  },
  {
    "id": "c1_1308",
    "word": "worship",
    "pos": "n., v.",
    "meaning": "บูชา",
    "reading": "",
    "ipa": "ˈwɝʃəp",
    "level": "C1"
  },
  {
    "id": "c1_1309",
    "word": "worthwhile",
    "pos": "adj.",
    "meaning": "คุ้มค่า",
    "reading": "",
    "ipa": "ˈwɝθˈwaɪɫ",
    "level": "C1"
  },
  {
    "id": "c1_1310",
    "word": "worthy",
    "pos": "adj.",
    "meaning": "คู่ควร",
    "reading": "",
    "ipa": "ˈwɝði",
    "level": "C1"
  },
  {
    "id": "c1_1311",
    "word": "yell",
    "pos": "v.",
    "meaning": "ตะโกน",
    "reading": "",
    "ipa": "ˈjɛɫ",
    "level": "C1"
  },
  {
    "id": "c1_1312",
    "word": "yield",
    "pos": "n., v.",
    "meaning": "ผลผลิต",
    "reading": "",
    "ipa": "ˈjiɫd",
    "level": "C1"
  },
  {
    "id": "c1_1313",
    "word": "youngster",
    "pos": "n.",
    "meaning": "เด็กหนุ่มสาว",
    "reading": "",
    "ipa": "ˈjəŋstɝ",
    "level": "C1"
  },
  {
    "id": "c2_1",
    "word": "aesthetic",
    "pos": "adj.",
    "meaning": "เกี่ยวกับความงาม, สุนทรียศาสตร์",
    "reading": "เอส เต ติก",
    "ipa": "es ˈθ e t ɪ k",
    "level": "C2"
  },
  {
    "id": "c2_2",
    "word": "ameliorate",
    "pos": "v.",
    "meaning": "ทำให้ดีขึ้น, บรรเทา",
    "reading": "เออะ มี เลีย เรท",
    "ipa": "ə ˈm iː l i ə ˌr eɪ t",
    "level": "C2"
  },
  {
    "id": "c2_3",
    "word": "anachronistic",
    "pos": "adj.",
    "meaning": "ล้าสมัย, ไม่เข้ากับยุคสมัย",
    "reading": "แอ น เคลอะ นิส ติก",
    "ipa": "ə ˌn æ k r ə ˈn ɪ s t ɪ k",
    "level": "C2"
  },
  {
    "id": "c2_4",
    "word": "anomaly",
    "pos": "n.",
    "meaning": "ความผิดปกติ, สิ่งที่ผิดแผกไป",
    "reading": "เออะ นอ มะ ลี",
    "ipa": "ə ˈn ɑː m ə l i",
    "level": "C2"
  },
  {
    "id": "c2_5",
    "word": "antithesis",
    "pos": "n.",
    "meaning": "สิ่งที่ตรงกันข้ามอย่างสิ้นเชิง",
    "reading": "แอน ทิ เธอะ สิส",
    "ipa": "æn ˈt ɪ θ ə s ɪ s",
    "level": "C2"
  },
  {
    "id": "c2_6",
    "word": "aplomb",
    "pos": "n.",
    "meaning": "ความสุขุมเยือกเย็น, ความมั่นใจ",
    "reading": "เออะ พลอม",
    "ipa": "ə ˈp l ɑː m",
    "level": "C2"
  },
  {
    "id": "c2_7",
    "word": "audacious",
    "pos": "adj.",
    "meaning": "กล้าหาญ, บ้าระห่ำ, ไม่เกรงกลัว",
    "reading": "ออ เด เชิส",
    "ipa": "ɔː ˈd eɪ ʃ ə s",
    "level": "C2"
  },
  {
    "id": "c2_8",
    "word": "bellicose",
    "pos": "adj.",
    "meaning": "ก้าวร้าว, ชอบก่อสงคราม",
    "reading": "เบล ลิ โคส",
    "ipa": "ˈb e l ɪ ˌk oʊ s",
    "level": "C2"
  },
  {
    "id": "c2_9",
    "word": "benevolent",
    "pos": "adj.",
    "meaning": "มีเมตตากรุณา, ใจบุญ",
    "reading": "เบอะ เนฝ เฝอะ เลินท",
    "ipa": "b ə ˈn e v ə l ə n t",
    "level": "C2"
  },
  {
    "id": "c2_10",
    "word": "cacophony",
    "pos": "n.",
    "meaning": "เสียงอึกทึกสับสน, เสียงไม่เข้ากัน",
    "reading": "แค เคอะ เฟอะ นี",
    "ipa": "k æ ˈk ɑː f ə n i",
    "level": "C2"
  },
  {
    "id": "c2_11",
    "word": "capricious",
    "pos": "adj.",
    "meaning": "เปลี่ยนแปลงง่าย, เอาแน่ไม่ได้",
    "reading": "เคอะ พริช เชิส",
    "ipa": "k ə ˈp r ɪ ʃ ə s",
    "level": "C2"
  },
  {
    "id": "c2_12",
    "word": "circumspect",
    "pos": "adj.",
    "meaning": "รอบคอบ, ระมัดระวังรอบด้าน",
    "reading": "เซอ คัม สเปกท",
    "ipa": "ˈs ɜː k ə m ˌs p e k t",
    "level": "C2"
  },
  {
    "id": "c2_13",
    "word": "cogent",
    "pos": "adj.",
    "meaning": "หนักแน่น, น่าเชื่อถือ, ชัดเจน",
    "reading": "โค เจินท",
    "ipa": "ˈk oʊ dʒ ə n t",
    "level": "C2"
  },
  {
    "id": "c2_14",
    "word": "conundrum",
    "pos": "n.",
    "meaning": "ปริศนา, ปัญหายากจะแก้ไข",
    "reading": "เคอะ นัน เดรอม",
    "ipa": "k ə ˈn ʌ n d r ə m",
    "level": "C2"
  },
  {
    "id": "c2_15",
    "word": "cumbersome",
    "pos": "adj.",
    "meaning": "เทอะทะ, เกะกะ, จัดการยาก",
    "reading": "คัม เบอ ซัม",
    "ipa": "ˈk ʌ m b ɜː s ə m",
    "level": "C2"
  },
  {
    "id": "c2_16",
    "word": "deleterious",
    "pos": "adj.",
    "meaning": "เป็นอันตราย, ก่อความเสียหาย",
    "reading": "เดล เลอะ เทีย เรียส",
    "ipa": "ˌd e l ə ˈt ɪ r i ə s",
    "level": "C2"
  },
  {
    "id": "c2_17",
    "word": "dichotomy",
    "pos": "n.",
    "meaning": "การแบ่งแยกเป็นสองขั้วตรงข้าม",
    "reading": "ได คอ เทอะ มี",
    "ipa": "d aɪ ˈk ɑː t ə m i",
    "level": "C2"
  },
  {
    "id": "c2_18",
    "word": "disparate",
    "pos": "adj.",
    "meaning": "แตกต่างกันโดยสิ้นเชิง",
    "reading": "ดิส เพอะ เรท",
    "ipa": "ˈd ɪ s p ə r ɪ t",
    "level": "C2"
  },
  {
    "id": "c2_19",
    "word": "ebullient",
    "pos": "adj.",
    "meaning": "ร่าเริงกระตือรือร้น, ล้นพ้น",
    "reading": "อิ บัล เลียนท",
    "ipa": "ɪ ˈb ʌ l i ə n t",
    "level": "C2"
  },
  {
    "id": "c2_20",
    "word": "eclectic",
    "pos": "adj.",
    "meaning": "คัดสรรจากหลากหลายแหล่ง",
    "reading": "เอ็ก เคลก ติก",
    "ipa": "e k ˈl e k t ɪ k",
    "level": "C2"
  },
  {
    "id": "c2_21",
    "word": "effervescent",
    "pos": "adj.",
    "meaning": "สดใสมีชีวิตชีวา, ซ่าฟู่",
    "reading": "เอฟ เฟอ เวส เซินท",
    "ipa": "ˌe f ɜː ˈv e s n t",
    "level": "C2"
  },
  {
    "id": "c2_22",
    "word": "eloquent",
    "pos": "adj.",
    "meaning": "คมคาย, มีคารมสละสลวย",
    "reading": "เอล เลอะ เควินท",
    "ipa": "ˈe l ə k w ə n t",
    "level": "C2"
  },
  {
    "id": "c2_23",
    "word": "ephemeral",
    "pos": "adj.",
    "meaning": "ชั่วคราว, มีอายุสั้น, ไม่จีรัง",
    "reading": "อิ เฟม เมอ รอล",
    "ipa": "ɪ ˈf e m ə r ə l",
    "level": "C2"
  },
  {
    "id": "c2_24",
    "word": "equivocal",
    "pos": "adj.",
    "meaning": "คลุมเครือ, สองแง่สองง่าม",
    "reading": "อิ ควิฝ เฝอะ เคิล",
    "ipa": "ɪ ˈk w ɪ v ə k l",
    "level": "C2"
  },
  {
    "id": "c2_25",
    "word": "esoteric",
    "pos": "adj.",
    "meaning": "ลึกซึ้งเฉพาะกลุ่ม, เข้าใจยาก",
    "reading": "เอส เซอะ เทีย ริก",
    "ipa": "ˌe s ə ˈt e r ɪ k",
    "level": "C2"
  },
  {
    "id": "c2_26",
    "word": "exacerbate",
    "pos": "v.",
    "meaning": "ทำให้รุนแรงขึ้น, ซ้ำเติม",
    "reading": "อิก แซส เซอ เบท",
    "ipa": "ɪ g ˈz æ s ɜː ˌb eɪ t",
    "level": "C2"
  },
  {
    "id": "c2_27",
    "word": "fastidious",
    "pos": "adj.",
    "meaning": "พิถีพิถันมาก, จู้จี้จุกจิก",
    "reading": "แฟส ทิด เดียส",
    "ipa": "f æ ˈs t ɪ d i ə s",
    "level": "C2"
  },
  {
    "id": "c2_28",
    "word": "fortuitous",
    "pos": "adj.",
    "meaning": "โชคดีโดยบังเอิญ",
    "reading": "ฟอร์ ชู อิ เทิส",
    "ipa": "f ɔːr ˈt uː ɪ t ə s",
    "level": "C2"
  },
  {
    "id": "c2_29",
    "word": "garrulous",
    "pos": "adj.",
    "meaning": "ช่างพูด, น้ำท่วมทุ่ง",
    "reading": "แก รู เลิส",
    "ipa": "ˈg æ r ə l ə s",
    "level": "C2"
  },
  {
    "id": "c2_30",
    "word": "gregarious",
    "pos": "adj.",
    "meaning": "ชอบเข้าสังคม, อยู่รวมกลุ่ม",
    "reading": "กริ แกร เรียส",
    "ipa": "g r ɪ ˈg e r i ə s",
    "level": "C2"
  },
  {
    "id": "c2_31",
    "word": "hegemony",
    "pos": "n.",
    "meaning": "ความเป็นผู้นำ, อำนาจครอบงำ",
    "reading": "ฮิ เจม เมอะ นี",
    "ipa": "h ɪ ˈdʒ e m ə n i",
    "level": "C2"
  },
  {
    "id": "c2_32",
    "word": "idiosyncrasy",
    "pos": "n.",
    "meaning": "ลักษณะเฉพาะตัว, นิสัยเฉพาะตน",
    "reading": "อิด เดีย ซิง เครอะ ซี",
    "ipa": "ˌɪ d i ə ˈs ɪ ŋ k r ə s i",
    "level": "C2"
  },
  {
    "id": "c2_33",
    "word": "impeccable",
    "pos": "adj.",
    "meaning": "ไร้ที่ติ, ไร้ข้อบกพร่อง",
    "reading": "อิม เพก เคอะ เบิล",
    "ipa": "ɪ m ˈp e k ə b l",
    "level": "C2"
  },
  {
    "id": "c2_34",
    "word": "impervious",
    "pos": "adj.",
    "meaning": "ไม่ยอมให้ผ่าน, ไม่สะทกสะท้าน",
    "reading": "อิม เพอ เวียส",
    "ipa": "ɪ m ˈp ɜː v i ə s",
    "level": "C2"
  },
  {
    "id": "c2_35",
    "word": "incongruous",
    "pos": "adj.",
    "meaning": "ไม่เข้ากัน, แปลกแยก",
    "reading": "อิน คอง กรู เอิส",
    "ipa": "ɪ n ˈk ɑː ŋ g r u ə s",
    "level": "C2"
  },
  {
    "id": "c2_36",
    "word": "indefatigable",
    "pos": "adj.",
    "meaning": "ไม่ย่อท้อ, ไม่รู้จักเหน็ดเหนื่อย",
    "reading": "อิน ดิ แฟท ทิ เกอะ เบิล",
    "ipa": "ˌɪ n d ɪ ˈf æ t ɪ g ə b l",
    "level": "C2"
  },
  {
    "id": "c2_37",
    "word": "indolent",
    "pos": "adj.",
    "meaning": "เกียจคร้าน, เฉื่อยชา",
    "reading": "อิน เดอะ เลินท",
    "ipa": "ˈɪ n d ə l ə n t",
    "level": "C2"
  },
  {
    "id": "c2_38",
    "word": "ineffable",
    "pos": "adj.",
    "meaning": "เกินกว่าจะบรรยาย, พรรณนาไม่ถูก",
    "reading": "อิน เอฟ เฟอะ เบิล",
    "ipa": "ɪ n ˈe f ə b l",
    "level": "C2"
  },
  {
    "id": "c2_39",
    "word": "innocuous",
    "pos": "adj.",
    "meaning": "ไม่มีพิษภัย, ไร้โทษ",
    "reading": "อิ นอค คิว เอิส",
    "ipa": "ɪ ˈn ɑː k j u ə s",
    "level": "C2"
  },
  {
    "id": "c2_40",
    "word": "insidious",
    "pos": "adj.",
    "meaning": "แฝงภัยเงียบ, มีพิษภัยซ่อนเร้น",
    "reading": "อิน ซิด เดียส",
    "ipa": "ɪ n ˈs ɪ d i ə s",
    "level": "C2"
  },
  {
    "id": "c2_41",
    "word": "juxtaposition",
    "pos": "n.",
    "meaning": "การวางเคียงคู่เพื่อเปรียบเทียบ",
    "reading": "จัก สตะ เพอะ ซิช ชัน",
    "ipa": "ˌdʒ ʌ k s t ə p ə ˈz ɪ ʃ n",
    "level": "C2"
  },
  {
    "id": "c2_42",
    "word": "laconic",
    "pos": "adj.",
    "meaning": "พูดสั้นกระชับ, ประหยัดถ้อยคำ",
    "reading": "เลอะ คอน นิก",
    "ipa": "l ə ˈk ɑː n ɪ k",
    "level": "C2"
  },
  {
    "id": "c2_43",
    "word": "lucid",
    "pos": "adj.",
    "meaning": "กระจ่างชัด, แจ่มแจ้ง",
    "reading": "ลู ซิด",
    "ipa": "ˈl uː s ɪ d",
    "level": "C2"
  },
  {
    "id": "c2_44",
    "word": "magnanimous",
    "pos": "adj.",
    "meaning": "ใจกว้าง, มีน้ำใจสูงส่ง",
    "reading": "แมก แนน นิ เมิส",
    "ipa": "m æ g ˈn æ n ɪ m ə s",
    "level": "C2"
  },
  {
    "id": "c2_45",
    "word": "malevolent",
    "pos": "adj.",
    "meaning": "มุ่งร้าย, คิดทำลาย",
    "reading": "มะ เลฝ เฝอะ เลินท",
    "ipa": "m ə ˈl e v ə l ə n t",
    "level": "C2"
  },
  {
    "id": "c2_46",
    "word": "mellifluous",
    "pos": "adj.",
    "meaning": "ไพเราะเสนาะหู, นุ่มนวลรื่นหู",
    "reading": "เมล ลิฟ ลู เอิส",
    "ipa": "m e ˈl ɪ f l u ə s",
    "level": "C2"
  },
  {
    "id": "c2_47",
    "word": "meticulous",
    "pos": "adj.",
    "meaning": "ละเอียดรอบคอบ, พิถีพิถัน",
    "reading": "มะ ทิก คิว เลิส",
    "ipa": "m ə ˈt ɪ k j u l ə s",
    "level": "C2"
  },
  {
    "id": "c2_48",
    "word": "mitigate",
    "pos": "v.",
    "meaning": "บรรเทา, ผ่อนปรน",
    "reading": "มิท ทิ เกท",
    "ipa": "ˈm ɪ t ɪ ˌg eɪ t",
    "level": "C2"
  },
  {
    "id": "c2_49",
    "word": "nebulous",
    "pos": "adj.",
    "meaning": "เลือนราง, คลุมเครือไม่ชัดเจน",
    "reading": "เนบ บิว เลิส",
    "ipa": "ˈn e b j ə l ə s",
    "level": "C2"
  },
  {
    "id": "c2_50",
    "word": "nostalgia",
    "pos": "n.",
    "meaning": "ความถวิลหาอดีต, คิดถึงความหลัง",
    "reading": "นอ สแทล เจีย",
    "ipa": "n ɑː ˈs t æ l dʒ ə",
    "level": "C2"
  },
  {
    "id": "c2_51",
    "word": "obfuscate",
    "pos": "v.",
    "meaning": "ทำให้สับสนงุนงง, ทำให้มืดมน",
    "reading": "ออบ ฟัส เคท",
    "ipa": "ˈɑː b f ə ˌs k eɪ t",
    "level": "C2"
  },
  {
    "id": "c2_52",
    "word": "oblivious",
    "pos": "adj.",
    "meaning": "ไม่ตระหนักรู้, หลงลืม",
    "reading": "เออะ บลิฝ เฝียส",
    "ipa": "ə ˈb l ɪ v i ə s",
    "level": "C2"
  },
  {
    "id": "c2_53",
    "word": "paradigm",
    "pos": "n.",
    "meaning": "กระบวนทัศน์, แบบอย่างความคิด",
    "reading": "แพ เรอะ ไดม",
    "ipa": "ˈp æ r ə ˌd aɪ m",
    "level": "C2"
  },
  {
    "id": "c2_54",
    "word": "perfunctory",
    "pos": "adj.",
    "meaning": "ทำพอผ่านๆ, ทำตามหน้าที่",
    "reading": "เพอ ฟังค เทอะ รี",
    "ipa": "p ər ˈf ʌ ŋ k t ə r i",
    "level": "C2"
  },
  {
    "id": "c2_55",
    "word": "pernicious",
    "pos": "adj.",
    "meaning": "เป็นอันตรายร้ายแรงเงียบๆ",
    "reading": "เพอ นิช เชิส",
    "ipa": "p ər ˈn ɪ ʃ ə s",
    "level": "C2"
  },
  {
    "id": "c2_56",
    "word": "platitude",
    "pos": "n.",
    "meaning": "ถ้อยคำซ้ำซาก, คำจำเจ",
    "reading": "แพล ทิ ทูด",
    "ipa": "ˈp l æ t ɪ ˌt uː d",
    "level": "C2"
  },
  {
    "id": "c2_57",
    "word": "plethora",
    "pos": "n.",
    "meaning": "ความมีล้นเหลือ, จำนวนมากมาย",
    "reading": "เพลธ เธอะ เรอะ",
    "ipa": "ˈp l e θ ə r ə",
    "level": "C2"
  },
  {
    "id": "c2_58",
    "word": "precocious",
    "pos": "adj.",
    "meaning": "ฉลาดเกินวัย, พัฒนาการเร็ว",
    "reading": "พริ โค เชิส",
    "ipa": "p r ɪ ˈk oʊ ʃ ə s",
    "level": "C2"
  },
  {
    "id": "c2_59",
    "word": "prolific",
    "pos": "adj.",
    "meaning": "มีผลงานชิ้นสำคัญมากมาย",
    "reading": "พรอ ลิฟ ฟิก",
    "ipa": "p r ə ˈl ɪ f ɪ k",
    "level": "C2"
  },
  {
    "id": "c2_60",
    "word": "propensity",
    "pos": "n.",
    "meaning": "ความโน้มเอียง, แนวโน้มธรรมชาติ",
    "reading": "พรอ เพน ซิ ที",
    "ipa": "p r ə ˈp e n s ə t i",
    "level": "C2"
  },
  {
    "id": "c2_61",
    "word": "quandary",
    "pos": "n.",
    "meaning": "ภาวะกลืนไม่เข้าคายไม่ออก",
    "reading": "ควอน เดรอะ รี",
    "ipa": "ˈk w ɑː n d r i",
    "level": "C2"
  },
  {
    "id": "c2_62",
    "word": "quintessential",
    "pos": "adj.",
    "meaning": "เป็นแบบฉบับแท้จริง, เป็นยอด",
    "reading": "ควิน เทส เซน เชิล",
    "ipa": "ˌk w ɪ n t ə ˈs e n ʃ l",
    "level": "C2"
  },
  {
    "id": "c2_63",
    "word": "recalcitrant",
    "pos": "adj.",
    "meaning": "ดื้อดึง, ไม่อยู่ในโอวาท",
    "reading": "ริ แคล ซิ เทรินท",
    "ipa": "r ɪ ˈk æ l s ɪ t r ə n t",
    "level": "C2"
  },
  {
    "id": "c2_64",
    "word": "resilient",
    "pos": "adj.",
    "meaning": "ยืดหยุ่น, ฟื้นตัวได้เร็ว",
    "reading": "ริ ซิล เลียนท",
    "ipa": "r ɪ ˈz ɪ l i ə n t",
    "level": "C2"
  },
  {
    "id": "c2_65",
    "word": "sagacious",
    "pos": "adj.",
    "meaning": "ฉลาดหลักแหลม, มีวิจารณญาณ",
    "reading": "เซอะ เก เชิส",
    "ipa": "s ə ˈg eɪ ʃ ə s",
    "level": "C2"
  },
  {
    "id": "c2_66",
    "word": "salient",
    "pos": "adj.",
    "meaning": "โดดเด่น, เป็นประเด็นสำคัญ",
    "reading": "เซ เลียนท",
    "ipa": "ˈs eɪ l i ə n t",
    "level": "C2"
  },
  {
    "id": "c2_67",
    "word": "scrupulous",
    "pos": "adj.",
    "meaning": "ซื่อตรง, ละเอียดถี่ถ้วน",
    "reading": "สครู เพียว เลิส",
    "ipa": "ˈs k r uː p j ə l ə s",
    "level": "C2"
  },
  {
    "id": "c2_68",
    "word": "serendipity",
    "pos": "n.",
    "meaning": "โชคชะตาที่พาให้พบสิ่งดีๆ",
    "reading": "เซอ รัน ดิพ พิ ที",
    "ipa": "ˌs e r ə n ˈd ɪ p ə t i",
    "level": "C2"
  },
  {
    "id": "c2_69",
    "word": "spurious",
    "pos": "adj.",
    "meaning": "ปลอมแปลง, ไม่จริงใจ",
    "reading": "สปิว เรียส",
    "ipa": "ˈs p j ʊ r i ə s",
    "level": "C2"
  },
  {
    "id": "c2_70",
    "word": "superfluous",
    "pos": "adj.",
    "meaning": "ฟุ่มเฟือย, เกินความจำเป็น",
    "reading": "ซู เพอ ฟลู เอิส",
    "ipa": "s uː ˈp ɜː f l u ə s",
    "level": "C2"
  },
  {
    "id": "c2_71",
    "word": "surreptitious",
    "pos": "adj.",
    "meaning": "แอบทำอย่างลับๆ",
    "reading": "เซอ เรพ ทิช เชิส",
    "ipa": "ˌs ɜː r ə p ˈt ɪ ʃ ə s",
    "level": "C2"
  },
  {
    "id": "c2_72",
    "word": "sycophant",
    "pos": "n.",
    "meaning": "คนประจบสอพลอ",
    "reading": "ซิก เคอะ แฟนท",
    "ipa": "ˈs ɪ k ə f ə n t",
    "level": "C2"
  },
  {
    "id": "c2_73",
    "word": "taciturn",
    "pos": "adj.",
    "meaning": "เงียบขรึม, พูดน้อย",
    "reading": "แทส ซิ เทอน",
    "ipa": "ˈt æ s ɪ ˌt ɜː n",
    "level": "C2"
  },
  {
    "id": "c2_74",
    "word": "tenacious",
    "pos": "adj.",
    "meaning": "เหนียวแน่น, ยึดมั่นไม่ยอมแพ้",
    "reading": "เทอะ เน เชิส",
    "ipa": "t ə ˈn eɪ ʃ ə s",
    "level": "C2"
  },
  {
    "id": "c2_75",
    "word": "transient",
    "pos": "adj.",
    "meaning": "ชั่วคราว, แปรเปลี่ยนตามกาล",
    "reading": "แตรน เจียนท",
    "ipa": "ˈt r æ n ʃ n t",
    "level": "C2"
  },
  {
    "id": "c2_76",
    "word": "ubiquitous",
    "pos": "adj.",
    "meaning": "พบได้ทั่วไปทุกหนทุกแห่ง",
    "reading": "ยู บิก ควิ เทิส",
    "ipa": "j uː ˈb ɪ k w ɪ t ə s",
    "level": "C2"
  },
  {
    "id": "c2_77",
    "word": "unfathomable",
    "pos": "adj.",
    "meaning": "ยากจะหยั่งถึง, ลึกซึ้งยิ่งนัก",
    "reading": "อัน แฟธ เธอะ เมอะ เบิล",
    "ipa": "ʌ n ˈf æ ð ə m ə b l",
    "level": "C2"
  },
  {
    "id": "c2_78",
    "word": "vacillate",
    "pos": "v.",
    "meaning": "ลังเลใจ, โลเลแปรปรวน",
    "reading": "แวส ซิล เลท",
    "ipa": "ˈv æ s ə ˌl eɪ t",
    "level": "C2"
  },
  {
    "id": "c2_79",
    "word": "venerable",
    "pos": "adj.",
    "meaning": "น่าเคารพนับถือ, ทรงเกียรติ",
    "reading": "เวน เนอ เรอะ เบิล",
    "ipa": "ˈv e n r ə b l",
    "level": "C2"
  },
  {
    "id": "c2_80",
    "word": "vicarious",
    "pos": "adj.",
    "meaning": "รู้สึกเสมือนได้กระทำด้วยตนเอง",
    "reading": "ฝิ แคร เรียส",
    "ipa": "v aɪ ˈk e r i ə s",
    "level": "C2"
  },
  {
    "id": "c2_81",
    "word": "vindicate",
    "pos": "v.",
    "meaning": "พิสูจน์ความบริสุทธิ์, กู้ชื่อเสียง",
    "reading": "วิน ดิ เคท",
    "ipa": "ˈv ɪ n d ɪ ˌk eɪ t",
    "level": "C2"
  },
  {
    "id": "c2_82",
    "word": "voracious",
    "pos": "adj.",
    "meaning": "ตะกละ, กระหายความรู้อย่างมาก",
    "reading": "ฝอ เร เชิส",
    "ipa": "v ə ˈr eɪ ʃ ə s",
    "level": "C2"
  },
  {
    "id": "c2_83",
    "word": "zealous",
    "pos": "adj.",
    "meaning": "กระตือรือร้น, ทุ่มเทใจอย่างแรงกล้า",
    "reading": "เซล เลิส",
    "ipa": "ˈz e l ə s",
    "level": "C2"
  }
];

export const OXFORD_3000 = RAW_WORDS as OxfordWord[];

export const OXFORD_STATS = {
  "total": 5292,
  "a1": 815,
  "a2": 867,
  "b1": 807,
  "b2": 1407,
  "c1": 1313,
  "c2": 83
};
