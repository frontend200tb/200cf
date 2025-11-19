// Создаем массив pages со страницами из aside меню
import html1        from './../pages/elem-1-Round1.html';
import html2        from './../pages/elem-2-Round2.html';
import html3        from './../pages/elem-3-Round3.html';
import html4        from './../pages/elem-4-Round4.html';
import html5        from './../pages/elem-5-Round5.html';
import html6        from './../pages/elem-6-Round6.html';
import html7        from './../pages/elem-7-Round7.html';
import html8        from './../pages/elem-8-Round8.html';
import html9        from './../pages/elem-9-Round9.html';
import html10       from './../pages/elem-10-Round10.html';
import html11       from './../pages/elem-11-Round11.html';
import html12       from './../pages/elem-12-Round12.html';
import html34       from './../pages/elem-34-Round34.html';
import html38       from './../pages/elem-38-sio1.html';
import html39       from './../pages/elem-39-sko1.html';
import html44       from './../pages/elem-44-sko2.html';
import html45       from './../pages/elem-45-sko3.html';
import html46       from './../pages/elem-46-sio2.html';
import html48       from './../pages/elem-48-sio3.html';
import html50       from './../pages/elem-50-Round47.html';
import html52       from './../pages/elem-52-TRound1.html';
import html59       from './../pages/elem-59-Round55.html';
import html70       from './../pages/elem-70-Round64.html';
import html71       from './../pages/elem-71-Round65.html';
import html76       from './../pages/elem-76-vuos.html';
import html81       from './../pages/elem-81-yandex-q1.html';
import html82       from './../pages/elem-82-yandex-q2.html';
import html85       from './../pages/elem-85-yandex-r1.html';
import html86       from './../pages/elem-86-yandex-r2.html';
import html97       from './../pages/elem-97-yandex-f.html';
import html110      from './../pages/elem-110-Round84.html';
import html112      from './../pages/elem-112-Round85.html';
import html116      from './../pages/elem-116-Round87.html';
import html120      from './../pages/elem-120-kosSaratov.html';
import html134      from './../pages/elem-134-TRound3.html';
import html136      from './../pages/elem-136-Round97.html';
import html141      from './../pages/elem-141-Round101.html';
import html155      from './../pages/elem-155-Round109.html';
import html158      from './../pages/elem-158-vk-q1.html';
import html159      from './../pages/elem-159-vk-q2.html';
import html163      from './../pages/elem-163-vk-r2.html';
import html169      from './../pages/elem-169-vk-r2.html';
import html200      from './../pages/elem-200-Round126.html';
import html228      from './../pages/elem-228-Round141.html';
import html230      from './../pages/elem-230-Round142.html';
import html268      from './../pages/elem-268-Round164.html';
import html278      from './../pages/elem-278-Round170.html';
import html313      from './../pages/elem-313-Round186.html';
import html318      from './../pages/elem-318-Round188.html';
import html339      from './../pages/elem-339-Round197.html';
import html381      from './../pages/elem-381-Round223.html';
import html427      from './../pages/elem-427-Round244.html';
import html467      from './../pages/elem-467-Round267.html';
import html469      from './../pages/elem-469-Round268.html';
import html490      from './../pages/elem-490-Round279.html';
import html492      from './../pages/elem-492-Round280.html';
import html509      from './../pages/elem-509-Round289.html';
import html520      from './../pages/elem-520-Round295.html';
import html546      from './../pages/elem-546-Round304.html';
import html580      from './../pages/elem-580-Round321.html';
import html617      from './../pages/elem-617-Round340.html';
import html646      from './../pages/elem-646-Techno1z.html';
import html647      from './../pages/elem-647-Techno2z.html';
import html648      from './../pages/elem-648-Techno1o.html';
import html649      from './../pages/elem-649-Techno2o.html';
import html705      from './../pages/elem-705-Round366.html';
import html723      from './../pages/elem-723-Round375.html';
import html727      from './../pages/elem-727-Techno2017o1.html';
import html732      from './../pages/elem-732-Round377.html';
import html733      from './../pages/elem-733-Round378.html';
import html743      from './../pages/elem-743-Round384.html';
import html758      from './../pages/elem-758-Round392.html';
import html791      from './../pages/elem-791-Round405.html';
import html895      from './../pages/elem-895-Round448.html';
import html1030     from './../pages/elem-1030-Techno2019o1.html';
import html1041     from './../pages/elem-1041-Round509.html';
import html1296     from './../pages/elem-1296-Round617.html';
import html1313     from './../pages/elem-1313-Round622.html';
import html1325     from './../pages/elem-1325-Round628.html';
import html1351     from './../pages/elem-1351-TRound16.html';
import html1352     from './../pages/elem-1352-Round640.html';
import html1360     from './../pages/elem-1360-Round644.html';
import html1367     from './../pages/elem-1367-Round650.html';
import html1420     from './../pages/elem-1420-Round672.html';
import html1490     from './../pages/elem-1490-Round702.html';
import html1512     from './../pages/elem-1512-Round713.html';
import html1520     from './../pages/elem-1520-Round719.html';
import html1634     from './../pages/elem-1634-Round770.html';
import html1669     from './../pages/elem-1669-Round784.html';
import html1676     from './../pages/elem-1676-Round790.html';
import html1692     from './../pages/elem-1692-Round799.html';
import html1703     from './../pages/elem-1703-Round806.html';
import html1722     from './../pages/elem-1722-Round817.html';
import html1725     from './../pages/elem-1725-compfest.html';
import html1726     from './../pages/elem-1726-Round819.html';
import html1728     from './../pages/elem-1728-EdRound135.html';
import html1729     from './../pages/elem-1729-Round820.html';
import html1730     from './../pages/elem-1730-Round823.html';
import html1733     from './../pages/elem-1733-Round821.html';
import html1734     from './../pages/elem-1734-Round822.html';
import html1738     from './../pages/elem-1738-GlRound22.html';
import html1739     from './../pages/elem-1739-EdRound136.html';
import html1740     from './../pages/elem-1740-Round831.html';
import html1741     from './../pages/elem-1741-Round826.html';
import html1742     from './../pages/elem-1742-Round827.html';
import html1760     from './../pages/elem-1760-Round835.html';
import html1789     from './../pages/elem-1789-Round853.html';
import html1791     from './../pages/elem-1791-Round849.html';
import html1798     from './../pages/elem-1798-Round860.html';
import html1807     from './../pages/elem-1807-Round859.html';
import html1824     from './../pages/elem-1824-Round872.html';
import html1825     from './../pages/elem-1825-Round872.html';
import html1829     from './../pages/elem-1829-Round871.html';
import html1850     from './../pages/elem-1850-Round886.html';
import html1873     from './../pages/elem-1873-Round898.html';
import html1915     from './../pages/elem-1915-Round918.html';
import html1926     from './../pages/elem-1926-Round928.html';
import html1950     from './../pages/elem-1950-Round937.html';
import html1971     from './../pages/elem-1971-Round944.html';
import html1985     from './../pages/elem-1985-Round952.html';
import html1999     from './../pages/elem-1999-Round964.html';
import html2009     from './../pages/elem-2009-Round971.html';
import html2037     from './../pages/elem-2037-Round988.html';
import html2044     from './../pages/elem-2044-Round993.html';
import html2050     from './../pages/elem-2050-Round991.html';
import html2051     from './../pages/elem-2051-Round995.html';
import html2060     from './../pages/elem-2060-Round998.html';
import html2065     from './../pages/elem-2065-Round1003.html';
import html2072     from './../pages/elem-2072-Round1006.html';
import html2091     from './../pages/elem-2091-Round1013.html';
import html2093     from './../pages/elem-2093-Round1016.html';
import html2094     from './../pages/elem-2094-Round1017.html';
import html2106     from './../pages/elem-2106-Round1020.html';
import html2114     from './../pages/elem-2114-Round1027.html';
import html2117     from './../pages/elem-2117-Round1029.html';
import html2119     from './../pages/elem-2119-Round1035.html';
import html2121     from './../pages/elem-2121-Round1032.html';
import html2123     from './../pages/elem-2123-Round1034.html';
import html2126     from './../pages/elem-2126-Round1037.html';
import html2131     from './../pages/elem-2131-Round1042.html';
import html2132     from './../pages/elem-2132-Round1043.html';
import html2133     from './../pages/elem-2133-Round1044.html';
import html2134     from './../pages/elem-2134-Round1045.html';
import html2136     from './../pages/elem-2136-Round1046.html';
import html2137     from './../pages/elem-2137-Round1047.html';
import html2148     from './../pages/elem-2148-Round1050.html';
import html2149     from './../pages/elem-2149-Round1054.html';
import html2152     from './../pages/elem-2152-Round1055.html';
import html2162     from './../pages/elem-2162-Round1059.html';
import html2166     from './../pages/elem-2166-Round1064.html';
import html2167     from './../pages/elem-2167-Round1062.html';

export const pages = [
  html1,
  html2,
  html3,
  html4,
  html5,
  html6,
  html7,
  html8,
  html9,
  html10,
  html11,
  html12,
  html34,
  html38,
  html39,
  html44,
  html45,
  html46,
  html48,
  html50,
  html52,
  html59,
  html70,
  html71,
  html76,
  html81,
  html82,
  html85,
  html86,
  html97,
  html110,
  html112,
  html116,
  html120,
  html134,
  html136,
  html141,
  html155,
  html158,
  html159,
  html163,
  html169,
  html200,
  html228,
  html230,
  html268,
  html278,
  html313,
  html318,
  html339,
  html381,
  html427,
  html467,
  html469,
  html490,
  html492,
  html509,
  html520,
  html546,
  html580,
  html617,
  html646,
  html647,
  html648,
  html649,
  html705,
  html723,
  html727,
  html732,
  html733,
  html743,
  html758,
  html791,
  html895,
  html1030,
  html1041,
  html1296,
  html1313,
  html1325,
  html1351,
  html1352,
  html1360,
  html1367,
  html1420,
  html1490,
  html1512,
  html1520,
  html1634,
  html1669,
  html1676,
  html1692,
  html1703,
  html1722,
  html1725,
  html1726,
  html1728,
  html1729,
  html1730,
  html1733,
  html1734,
  html1738,
  html1739,
  html1740,
  html1741,
  html1742,
  html1760,
  html1789,
  html1791,
  html1798,
  html1807,
  html1824,
  html1825,
  html1829,
  html1850,
  html1873,
  html1915,
  html1926,
  html1950,
  html1971,
  html1985,
  html1999,
  html2009,
  html2037,
  html2044,
  html2050,
  html2051,
  html2060,
  html2065,
  html2072,
  html2091,
  html2093,
  html2094,
  html2106,
  html2114,
  html2117,
  html2119,
  html2121,
  html2123,
  html2126,
  html2131,
  html2132,
  html2133,
  html2134,
  html2136,
  html2137,
  html2148,
  html2149,
  html2152,
  html2162,
  html2166,
  html2167,
];
