const audioItems = [{
    id: 1,
    stream: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/emaan-central.appspot.com/o/001-al-fatihah.mp3?alt=media",
        format: "mp3"
      }
    ],
    title: "Al Fatihah",
    subtitle: "The Opening",
    chapter: "One",
    artist: "Sheikh Sa'ad Al-Ghamdi",
    albumName: "Quran",
    albumArtUrl: "https://firebasestorage.googleapis.com/v0/b/emaan-central.appspot.com/o/quran_logo.png?alt=media"
  },
  {
    id: 2,
    stream: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/emaan-central.appspot.com/o/002-al-baqarah.mp3?alt=media",
        format: "mp3"
      }
    ],
    title: "Al Baqarah",
    subtitle: "The Cow",
    chapter: "Two",
    artist: "Sheikh Sa'ad Al-Ghamdi",
    albumName: "Quran",
    albumArtUrl: "https://firebasestorage.googleapis.com/v0/b/emaan-central.appspot.com/o/quran_logo.png?alt=media"
  },
  {
    id: 3,
    stream: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/emaan-central.appspot.com/o/003-al-imran.mp3?alt=media",
        format: "mp3"
      }
    ],
    title: "Al Imran",
    subtitle: "The Family of Imran",
    chapter: "Three",
    artist: "Sheikh Sa'ad Al-Ghamdi",
    albumName: "Quran",
    albumArtUrl: "https://firebasestorage.googleapis.com/v0/b/emaan-central.appspot.com/o/quran_logo.png?alt=media"
  },
  {
    id: 4,
    stream: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/emaan-central.appspot.com/o/004-an-nisa.mp3?alt=media",
        format: "mp3"
      }
    ],
    title: "An Nisa",
    subtitle: "The Women",
    chapter: "Four",
    artist: "Sheikh Sa'ad Al-Ghamdi",
    albumName: "Quran",
    albumArtUrl: "https://firebasestorage.googleapis.com/v0/b/emaan-central.appspot.com/o/quran_logo.png?alt=media"
  },
  {
    id: 5,
    stream: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/emaan-central.appspot.com/o/005-al-maidah.mp3?alt=media",
        format: "mp3"
      }
    ],
    title: "Al Maidah",
    subtitle: "The table spread with Food",
    chapter: "Five",
    artist: "Sheikh Sa'ad Al-Ghamdi",
    albumName: "Quran",
    albumArtUrl: "https://firebasestorage.googleapis.com/v0/b/emaan-central.appspot.com/o/quran_logo.png?alt=media"
  },
  {
    id: 6,
    stream: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/emaan-central.appspot.com/o/006-al-anam.mp3?alt=media",
        format: "mp3"
      }
    ],
    title: "Al Anam",
    subtitle: "The Cattle",
    chapter: "Six",
    artist: "Sheikh Sa'ad Al-Ghamdi",
    albumName: "Quran",
    albumArtUrl: "https://firebasestorage.googleapis.com/v0/b/emaan-central.appspot.com/o/quran_logo.png?alt=media"
  },
  {
    id: 7,
    stream: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/emaan-central.appspot.com/o/007-al-araf.mp3?alt=media",
        format: "mp3"
      }
    ],
    title: "Al Araf",
    subtitle: "The Heights",
    chapter: "Seven",
    artist: "Sheikh Sa'ad Al-Ghamdi",
    albumName: "Quran",
    albumArtUrl: "https://firebasestorage.googleapis.com/v0/b/emaan-central.appspot.com/o/quran_logo.png?alt=media"
  },
  {
    id: 8,
    stream: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/emaan-central.appspot.com/o/008-al-anfal.mp3?alt=media",
        format: "mp3"
      }
    ],
    title: "Al Anfal",
    subtitle: "The Spoils of War",
    chapter: "Eight",
    artist: "Sheikh Sa'ad Al-Ghamdi",
    albumName: "Quran",
    albumArtUrl: "https://firebasestorage.googleapis.com/v0/b/emaan-central.appspot.com/o/quran_logo.png?alt=media"
  },
  {
    id: 9,
    stream: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/emaan-central.appspot.com/o/009-at-taubah.mp3?alt=media",
        format: "mp3"
      }
    ],
    title: "At Taubah",
    subtitle: "The Repentance",
    chapter: "Nine",
    artist: "Sheikh Sa'ad Al-Ghamdi",
    albumName: "Quran",
    albumArtUrl: "https://firebasestorage.googleapis.com/v0/b/emaan-central.appspot.com/o/quran_logo.png?alt=media"
  },
  {
    id: 10,
    stream: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/emaan-central.appspot.com/o/010-yunus.mp3?alt=media",
        format: "mp3"
      }
    ],
    title: "Yunus",
    subtitle: "Jonah",
    chapter: "Ten",
    artist: "Sheikh Sa'ad Al-Ghamdi",
    albumName: "Quran",
    albumArtUrl: "https://firebasestorage.googleapis.com/v0/b/emaan-central.appspot.com/o/quran_logo.png?alt=media"
  },
  {
    id: 11,
    stream: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/emaan-central.appspot.com/o/011-hud.mp3?alt=media",
        format: "mp3"
      }
    ],
    title: "Hud",
    subtitle: "Hud",
    chapter: "Eleven",
    artist: "Sheikh Sa'ad Al-Ghamdi",
    albumName: "Quran",
    albumArtUrl: "https://firebasestorage.googleapis.com/v0/b/emaan-central.appspot.com/o/quran_logo.png?alt=media"
  },
  {
    id: 12,
    stream: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/emaan-central.appspot.com/o/012-yusuf.mp3?alt=media",
        format: "mp3"
      }
    ],
    title: "Yusuf",
    subtitle: "Joseph",
    chapter: "Twelve",
    artist: "Sheikh Sa'ad Al-Ghamdi",
    albumName: "Quran",
    albumArtUrl: "https://firebasestorage.googleapis.com/v0/b/emaan-central.appspot.com/o/quran_logo.png?alt=media"
  },
  {
    id: 13,
    stream: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/emaan-central.appspot.com/o/013-ar-rad.mp3?alt=media",
        format: "mp3"
      }
    ],
    title: "Ar Rad",
    subtitle: "The Thunder",
    chapter: "Thirteen",
    artist: "Sheikh Sa'ad Al-Ghamdi",
    albumName: "Quran",
    albumArtUrl: "https://firebasestorage.googleapis.com/v0/b/emaan-central.appspot.com/o/quran_logo.png?alt=media"
  },
  {
    id: 14,
    stream: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/emaan-central.appspot.com/o/014-ibrahim.mp3?alt=media",
        format: "mp3"
      }
    ],
    title: "Ibrahim",
    subtitle: "Abraham",
    chapter: "Fourteen",
    artist: "Sheikh Sa'ad Al-Ghamdi",
    albumName: "Quran",
    albumArtUrl: "https://firebasestorage.googleapis.com/v0/b/emaan-central.appspot.com/o/quran_logo.png?alt=media"
  },
  {
    id: 15,
    stream: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/emaan-central.appspot.com/o/015-al-hijr.mp3?alt=media",
        format: "mp3"
      }
    ],
    title: "Al Hijr",
    subtitle: "The Rocky Tract",
    chapter: "Fifteen",
    artist: "Sheikh Sa'ad Al-Ghamdi",
    albumName: "Quran",
    albumArtUrl: "https://firebasestorage.googleapis.com/v0/b/emaan-central.appspot.com/o/quran_logo.png?alt=media"
  },
  {
    id: 16,
    stream: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/emaan-central.appspot.com/o/016-an-nahl.mp3?alt=media",
        format: "mp3"
      }
    ],
    title: "An Nahl",
    subtitle: "The Bees",
    chapter: "Sixteen",
    artist: "Sheikh Sa'ad Al-Ghamdi",
    albumName: "Quran",
    albumArtUrl: "https://firebasestorage.googleapis.com/v0/b/emaan-central.appspot.com/o/quran_logo.png?alt=media"
  },
  {
    id: 17,
    stream: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/emaan-central.appspot.com/o/017-al-isra.mp3?alt=media",
        format: "mp3"
      }
    ],
    title: "Al Isra",
    subtitle: "The Journey by Night",
    chapter: "Seventeen",
    artist: "Sheikh Sa'ad Al-Ghamdi",
    albumName: "Quran",
    albumArtUrl: "https://firebasestorage.googleapis.com/v0/b/emaan-central.appspot.com/o/quran_logo.png?alt=media"
  },
  {
    id: 18,
    stream: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/emaan-central.appspot.com/o/018-al-kahf.mp3?alt=media",
        format: "mp3"
      }
    ],
    title: "Al Kahf",
    subtitle: "The Cave",
    chapter: "Eighteen",
    artist: "Sheikh Sa'ad Al-Ghamdi",
    albumName: "Quran",
    albumArtUrl: "https://firebasestorage.googleapis.com/v0/b/emaan-central.appspot.com/o/quran_logo.png?alt=media"
  },
  {
    id: 19,
    stream: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/emaan-central.appspot.com/o/019-maryam.mp3?alt=media",
        format: "mp3"
      }
    ],
    title: "Maryam",
    subtitle: "Mary",
    chapter: "Nineteen",
    artist: "Sheikh Sa'ad Al-Ghamdi",
    albumName: "Quran",
    albumArtUrl: "https://firebasestorage.googleapis.com/v0/b/emaan-central.appspot.com/o/quran_logo.png?alt=media"
  },
  {
    id: 20,
    stream: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/emaan-central.appspot.com/o/020-ta-ha.mp3?alt=media",
        format: "mp3"
      }
    ],
    title: "Ta Ha",
    subtitle: "Ta Ha",
    chapter: "Twenty",
    artist: "Sheikh Sa'ad Al-Ghamdi",
    albumName: "Quran",
    albumArtUrl: "https://firebasestorage.googleapis.com/v0/b/emaan-central.appspot.com/o/quran_logo.png?alt=media"
  },
  {
    id: 21,
    stream: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/emaan-central.appspot.com/o/021-al-anbiya.mp3",
        format: "mp3"
      }
    ],
    title: "Al Anbiya",
    subtitle: "The Prophets",
    chapter: "Twenty One",
    artist: "Sheikh Sa'ad Al-Ghamdi",
    albumName: "Quran",
    albumArtUrl: "https://firebasestorage.googleapis.com/v0/b/emaan-central.appspot.com/o/quran_logo.png?alt=media"
  },
  {
    id: 22,
    stream: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/emaan-central.appspot.com/o/022-al-hajj.mp3?alt=media",
        format: "mp3"
      }
    ],
    title: "Al Hajj",
    subtitle: "The Pilgrimage",
    chapter: "Twenty Two",
    artist: "Sheikh Sa'ad Al-Ghamdi",
    albumName: "Quran",
    albumArtUrl: "https://firebasestorage.googleapis.com/v0/b/emaan-central.appspot.com/o/quran_logo.png?alt=media"
  },
  {
    id: 23,
    stream: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/emaan-central.appspot.com/o/023-al-muminun.mp3?alt=media",
        format: "mp3"
      }
    ],
    title: "Al Muminun",
    subtitle: "The Believers",
    chapter: "Twenty Three",
    artist: "Sheikh Sa'ad Al-Ghamdi",
    albumName: "Quran",
    albumArtUrl: "https://firebasestorage.googleapis.com/v0/b/emaan-central.appspot.com/o/quran_logo.png?alt=media"
  },
  {
    id: 24,
    stream: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/emaan-central.appspot.com/o/024-an-nur.mp3?alt=media",
        format: "mp3"
      }
    ],
    title: "An Nur",
    subtitle: "The Light",
    chapter: "Twenty Four",
    artist: "Sheikh Sa'ad Al-Ghamdi",
    albumName: "Quran",
    albumArtUrl: "https://firebasestorage.googleapis.com/v0/b/emaan-central.appspot.com/o/quran_logo.png?alt=media"
  },
  {
    id: 25,
    stream: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/emaan-central.appspot.com/o/025-al-furqan.mp3?alt=media",
        format: "mp3"
      }
    ],
    title: "Al Furqan",
    subtitle: "The Criterion",
    chapter: "Twenty Five",
    artist: "Sheikh Sa'ad Al-Ghamdi",
    albumName: "Quran",
    albumArtUrl: "https://firebasestorage.googleapis.com/v0/b/emaan-central.appspot.com/o/quran_logo.png?alt=media"
  },
  {
    id: 26,
    stream: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/emaan-central.appspot.com/o/026-ash-shuara.mp3?alt=media",
        format: "mp3"
      }
    ],
    title: "Ash Shuara",
    subtitle: "The Poets",
    chapter: "Twenty Six",
    artist: "Sheikh Sa'ad Al-Ghamdi",
    albumName: "Quran",
    albumArtUrl: "https://firebasestorage.googleapis.com/v0/b/emaan-central.appspot.com/o/quran_logo.png?alt=media"
  },
  {
    id: 27,
    stream: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/emaan-central.appspot.com/o/027-an-naml.mp3?alt=media",
        format: "mp3"
      }
    ],
    title: "An Naml",
    subtitle: "The Ants",
    chapter: "Twenty Seven",
    artist: "Sheikh Sa'ad Al-Ghamdi",
    albumName: "Quran",
    albumArtUrl: "https://firebasestorage.googleapis.com/v0/b/emaan-central.appspot.com/o/quran_logo.png?alt=media"
  },
  {
    id: 28,
    stream: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/emaan-central.appspot.com/o/028-al-qasas.mp3?alt=media",
        format: "mp3"
      }
    ],
    title: "Al Qasas",
    subtitle: "The Narration",
    chapter: "Twenty Eight",
    artist: "Sheikh Sa'ad Al-Ghamdi",
    albumName: "Quran",
    albumArtUrl: "https://firebasestorage.googleapis.com/v0/b/emaan-central.appspot.com/o/quran_logo.png?alt=media"
  },
  {
    id: 29,
    stream: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/emaan-central.appspot.com/o/029-al-ankabut.mp3?alt=media",
        format: "mp3"
      }
    ],
    title: "Al Ankabut",
    subtitle: "The Spider",
    chapter: "Twenty Nine",
    artist: "Sheikh Sa'ad Al-Ghamdi",
    albumName: "Quran",
    albumArtUrl: "https://firebasestorage.googleapis.com/v0/b/emaan-central.appspot.com/o/quran_logo.png?alt=media"
  },
  {
    id: 30,
    stream: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/emaan-central.appspot.com/o/030-ar-rum.mp3?alt=media",
        format: "mp3"
      }
    ],
    title: "Ar Rum",
    subtitle: "The Romans",
    chapter: "Thirty",
    artist: "Sheikh Sa'ad Al-Ghamdi",
    albumName: "Quran",
    albumArtUrl: "https://firebasestorage.googleapis.com/v0/b/emaan-central.appspot.com/o/quran_logo.png?alt=media"
  }]

  exports.audioItems = audioItems