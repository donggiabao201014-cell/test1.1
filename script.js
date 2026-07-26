// =========================================================================
// CONSOLIDATED ENGLISH FLASHCARDS DATASET (360 Irregular Verbs)
// =========================================================================
const elements = [
    {n: 1, s: "Abide - Abode/Abided", name: "abide - abode /əˈbaɪd/ - /əˈboʊd/", w: "", c: "verb", catName: "VERB", config: "Tôn trọng, tuân theo, chịu đựng", state: "Irregular", disc: ""},
    {n: 2, s: "Arise - Arose", name: "arise - arose /əˈraɪz/ - /əˈroʊz/", w: "", c: "verb", catName: "VERB", config: "Nảy sinh, phát sinh", state: "Irregular", disc: ""},
    {n: 3, s: "Awake - Awoke", name: "awake - awoke /əˈweɪk/ - /əˈwoʊk/", w: "", c: "verb", catName: "VERB", config: "Thức giấc, đánh thức", state: "Irregular", disc: ""},
    {n: 4, s: "Backslide - Backslid", name: "backslide - backslid /ˈbæk.slaɪd/ - /ˈbæk.slɪd/", w: "", c: "verb", catName: "VERB", config: "Tái phạm, tái phát", state: "Irregular", disc: ""},
    {n: 5, s: "Be - Was/Were", name: "be - was/were /biː/ - /wɒz/, /wɜː(r)/", w: "", c: "verb", catName: "VERB", config: "Thì, là, ở", state: "Irregular", disc: ""},
    {n: 6, s: "Bear - Bore", name: "bear - bore /ber/ - /bɔːr/", w: "", c: "verb", catName: "VERB", config: "Mang, chịu đựng, sinh ra", state: "Irregular", disc: ""},
    {n: 7, s: "Beat - Beat", name: "beat - beat /biːt/ - /biːt/", w: "", c: "verb", catName: "VERB", config: "Đánh, đập", state: "Irregular", disc: ""},
    {n: 8, s: "Become - Became", name: "become - became /bɪˈkʌm/ - /bɪˈkeɪm/", w: "", c: "verb", catName: "VERB", config: "Trở nên, trở thành", state: "Irregular", disc: ""},
    {n: 9, s: "Befall - Befell", name: "befall - befell /bɪˈfɔːl/ - /bɪˈfel/", w: "", c: "verb", catName: "VERB", config: "Xảy đến, giáng xuống", state: "Irregular", disc: ""},
    {n: 10, s: "Beget - Begot", name: "beget - begot /bɪˈɡet/ - /bɪˈɡɑːt/", w: "", c: "verb", catName: "VERB", config: "Gây ra, sinh ra", state: "Irregular", disc: ""},
    {n: 11, s: "Begin - Began", name: "begin - began /bɪˈɡɪn/ - /bɪˈɡæn/", w: "", c: "verb", catName: "VERB", config: "Bắt đầu", state: "Irregular", disc: ""},
    {n: 12, s: "Behold - Beheld", name: "behold - beheld /bɪˈhoʊld/ - /bɪˈheld/", w: "", c: "verb", catName: "VERB", config: "Ngắm nhìn, quan sát", state: "Irregular", disc: ""},
    {n: 13, s: "Bend - Bent", name: "bend - bent /bend/ - /bent/", w: "", c: "verb", catName: "VERB", config: "Bẻ cong, uốn cong", state: "Irregular", disc: ""},
    {n: 14, s: "Bereave - Bereft", name: "bereave - bereft /bɪˈriːv/ - /bɪˈreft/", w: "", c: "verb", catName: "VERB", config: "Cướp đi, tước đoạt", state: "Irregular", disc: ""},
    {n: 15, s: "Beseech - Besought", name: "beseech - besought /bɪˈsiːtʃ/ - /bɪˈsɔːt/", w: "", c: "verb", catName: "VERB", config: "Van xin, nài xin", state: "Irregular", disc: ""},
    {n: 16, s: "Beset - Beset", name: "beset - beset /bɪˈset/ - /bɪˈset/", w: "", c: "verb", catName: "VERB", config: "Bao vây, bám riết", state: "Irregular", disc: ""},
    {n: 17, s: "Bespeak - Bespoke", name: "bespeak - bespoke /bɪˈspiːk/ - /bɪˈspoʊk/", w: "", c: "verb", catName: "VERB", config: "Chứng tỏ, đặt trước", state: "Irregular", disc: ""},
    {n: 18, s: "Bestride - Bestrode", name: "bestride - bestrode /bɪˈstraɪd/ - /bɪˈstroʊd/", w: "", c: "verb", catName: "VERB", config: "Cưỡi, bước qua", state: "Irregular", disc: ""},
    {n: 19, s: "Bet - Bet", name: "bet - bet /bet/ - /bet/", w: "", c: "verb", catName: "VERB", config: "Đánh cược, cá cược", state: "Irregular", disc: ""},
    {n: 20, s: "Betake - Betook", name: "betake - betook /bɪˈteɪk/ - /bɪˈtʊk/", w: "", c: "verb", catName: "VERB", config: "Dấn thân, đi đến", state: "Irregular", disc: ""},
    {n: 21, s: "Bethink - Bethought", name: "bethink - bethought /bɪˈθɪŋk/ - /bɪˈθɔːt/", w: "", c: "verb", catName: "VERB", config: "Suy xét, nhớ lại", state: "Irregular", disc: ""},
    {n: 22, s: "Bid - Bid", name: "bid - bid /bɪd/ - /bɪd/", w: "", c: "verb", catName: "VERB", config: "Trả giá, ra giá", state: "Irregular", disc: ""},
    {n: 23, s: "Bind - Bound", name: "bind - bound /baɪnd/ - /baʊnd/", w: "", c: "verb", catName: "VERB", config: "Buộc, ràng buộc", state: "Irregular", disc: ""},
    {n: 24, s: "Bite - Bit", name: "bite - bit /baɪt/ - /bɪt/", w: "", c: "verb", catName: "VERB", config: "Cắn", state: "Irregular", disc: ""},
    {n: 25, s: "Bleed - Bled", name: "bleed - bled /bliːd/ - /bled/", w: "", c: "verb", catName: "VERB", config: "Chảy máu", state: "Irregular", disc: ""},
    {n: 26, s: "Blend - Blent/Blended", name: "blend - blent /blend/ - /blent/", w: "", c: "verb", catName: "VERB", config: "Pha trộn, hòa hợp", state: "Irregular", disc: ""},
    {n: 27, s: "Bless - Blest/Blessed", name: "bless - blest /bles/ - /blest/", w: "", c: "verb", catName: "VERB", config: "Ban phúc, cầu nguyện", state: "Irregular", disc: ""},
    {n: 28, s: "Blow - Blew", name: "blow - blew /bloʊ/ - /bluː/", w: "", c: "verb", catName: "VERB", config: "Thổi", state: "Irregular", disc: ""},
    {n: 29, s: "Break - Broke", name: "break - broke /breɪk/ - /broʊk/", w: "", c: "verb", catName: "VERB", config: "Làm vỡ, bẻ gãy", state: "Irregular", disc: ""},
    {n: 30, s: "Breed - Bred", name: "breed - bred /briːd/ - /bred/", w: "", c: "verb", catName: "VERB", config: "Nuôi dưỡng, sinh sản", state: "Irregular", disc: ""},
    {n: 31, s: "Bring - Brought", name: "bring - brought /brɪŋ/ - /brɔːt/", w: "", c: "verb", catName: "VERB", config: "Mang đến", state: "Irregular", disc: ""},
    {n: 32, s: "Broadcast - Broadcast", name: "broadcast - broadcast /ˈbrɔːd.kæst/ - /ˈbrɔːd.kæst/", w: "", c: "verb", catName: "VERB", config: "Phát sóng, truyền thanh", state: "Irregular", disc: ""},
    {n: 33, s: "Browbeat - Browbeat", name: "browbeat - browbeat /ˈbraʊ.biːt/ - /ˈbraʊ.biːt/", w: "", c: "verb", catName: "VERB", config: "Hăm dọa, đe dọa", state: "Irregular", disc: ""},
    {n: 34, s: "Build - Built", name: "build - built /bɪld/ - /bɪlt/", w: "", c: "verb", catName: "VERB", config: "Xây dựng", state: "Irregular", disc: ""},
    {n: 35, s: "Burn - Burnt/Burned", name: "burn - burnt /bɜːrn/ - /bɜːrnt/", w: "", c: "verb", catName: "VERB", config: "Đốt cháy, bỏng", state: "Irregular", disc: ""},
    {n: 36, s: "Burst - Burst", name: "burst - burst /bɜːrst/ - /bɜːrst/", w: "", c: "verb", catName: "VERB", config: "Nổ tung, vỡ tung", state: "Irregular", disc: ""},
    {n: 37, s: "Bust - Bust/Busted", name: "bust - bust /bʌst/ - /bʌst/", w: "", c: "verb", catName: "VERB", config: "Làm vỡ, bắt giữ", state: "Irregular", disc: ""},
    {n: 38, s: "Buy - Bought", name: "buy - bought /baɪ/ - /bɔːt/", w: "", c: "verb", catName: "VERB", config: "Mua, mua sắm", state: "Irregular", disc: ""},
    {n: 39, s: "Cast - Cast", name: "cast - cast /kæst/ - /kæst/", w: "", c: "verb", catName: "VERB", config: "Ném, đúc khuôn, đóng vai", state: "Irregular", disc: ""},
    {n: 40, s: "Catch - Caught", name: "catch - caught /kætʃ/ - /kɔːt/", w: "", c: "verb", catName: "VERB", config: "Bắt, chụp được", state: "Irregular", disc: ""},
    {n: 41, s: "Chide - Chid/Chided", name: "chide - chid /tʃaɪd/ - /tʃɪd/", w: "", c: "verb", catName: "VERB", config: "Mắng mỏ, trách phạt", state: "Irregular", disc: ""},
    {n: 42, s: "Choose - Chose", name: "choose - chose /tʃuːz/ - /tʃoʊz/", w: "", c: "verb", catName: "VERB", config: "Lựa chọn, chọn lựa", state: "Irregular", disc: ""},
    {n: 43, s: "Cleave - Cleft/Clove", name: "cleave - cleft /kliːv/ - /kleft/", w: "", c: "verb", catName: "VERB", config: "Chẻ, chẻ đôi", state: "Irregular", disc: ""},
    {n: 44, s: "Cling - Clung", name: "cling - clung /klɪŋ/ - /klʌŋ/", w: "", c: "verb", catName: "VERB", config: "Bám chặt, dính vào", state: "Irregular", disc: ""},
    {n: 45, s: "Clothe - Clad/Clothed", name: "clothe - clad /kloʊð/ - /klæd/", w: "", c: "verb", catName: "VERB", config: "Mặc quần áo, che phủ", state: "Irregular", disc: ""},
    {n: 46, s: "Colorbreed - Colorbred", name: "colorbreed - colorbred /ˈkʌl.ɚ.briːd/ - /ˈkʌl.ɚ.bred/", w: "", c: "verb", catName: "VERB", config: "Phối giống màu sắc", state: "Irregular", disc: ""},
    {n: 47, s: "Come - Came", name: "come - came /kʌm/ - /keɪm/", w: "", c: "verb", catName: "VERB", config: "Đến, đi đến", state: "Irregular", disc: ""},
    {n: 48, s: "Cost - Cost", name: "cost - cost /kɔːst/ - /kɔːst/", w: "", c: "verb", catName: "VERB", config: "Có giá là", state: "Irregular", disc: ""},
    {n: 49, s: "Creep - Crept", name: "creep - crept /kriːp/ - /krept/", w: "", c: "verb", catName: "VERB", config: "Bò, trườn, rón rén", state: "Irregular", disc: ""},
    {n: 50, s: "Crossbreed - Crossbred", name: "crossbreed - crossbred /ˈkrɑːs.briːd/ - /ˈkrɑːs.bred/", w: "", c: "verb", catName: "VERB", config: "Lai giống", state: "Irregular", disc: ""},
    {n: 51, s: "Crow - Crew/Crowed", name: "crow - crew /kroʊ/ - /kruː/", w: "", c: "verb", catName: "VERB", config: "Gáy (gà), reo mừng", state: "Irregular", disc: ""},
    {n: 52, s: "Cut - Cut", name: "cut - cut /kʌt/ - /kʌt/", w: "", c: "verb", catName: "VERB", config: "Cắt, chặt", state: "Irregular", disc: ""},
    {n: 53, s: "Dare - Dared/Durt", name: "dare - dared /der/ - /derd/", w: "", c: "verb", catName: "VERB", config: "Dám, thách thức", state: "Irregular", disc: ""},
    {n: 54, s: "Daydream - Daydreamt", name: "daydream - daydreamt /ˈdeɪ.driːm/ - /ˈdeɪ.dremt/", w: "", c: "verb", catName: "VERB", config: "Mơ ban ngày, mơ mộng", state: "Irregular", disc: ""},
    {n: 55, s: "Deal - Dealt", name: "deal - dealt /diːl/ - /delt/", w: "", c: "verb", catName: "VERB", config: "Xử lý, giao dịch, chia bài", state: "Irregular", disc: ""},
    {n: 56, s: "Dig - Dug", name: "dig - dug /dɪɡ/ - /dʌɡ/", w: "", c: "verb", catName: "VERB", config: "Đào đất", state: "Irregular", disc: ""},
    {n: 57, s: "Disprove - Disproved", name: "disprove - disproved /dɪsˈpruːv/ - /dɪsˈpruːvd/", w: "", c: "verb", catName: "VERB", config: "Bác bỏ, chứng minh sai", state: "Irregular", disc: ""},
    {n: 58, s: "Dive - Dove/Dived", name: "dive - dove /daɪv/ - /doʊv/", w: "", c: "verb", catName: "VERB", config: "Lặn, lao xuống", state: "Irregular", disc: ""},
    {n: 59, s: "Do - Did", name: "do - did /duː/ - /dɪd/", w: "", c: "verb", catName: "VERB", config: "Làm", state: "Irregular", disc: ""},
    {n: 60, s: "Draw - Drew", name: "draw - drew /drɔː/ - /druː/", w: "", c: "verb", catName: "VERB", config: "Vẽ, kéo", state: "Irregular", disc: ""},
    {n: 61, s: "Dream - Dreamt/Dreamed", name: "dream - dreamt /driːm/ - /dremt/", w: "", c: "verb", catName: "VERB", config: "Mơ thấy", state: "Irregular", disc: ""},
    {n: 62, s: "Drink - Drank", name: "drink - drank /drɪŋk/ - /dræŋk/", w: "", c: "verb", catName: "VERB", config: "Uống", state: "Irregular", disc: ""},
    {n: 63, s: "Drive - Drove", name: "drive - drove /draɪv/ - /droʊv/", w: "", c: "verb", catName: "VERB", config: "Lái xe, điều khiển xe", state: "Irregular", disc: ""},
    {n: 64, s: "Dwell - Dwelt", name: "dwell - dwelt /dwel/ - /dwelt/", w: "", c: "verb", catName: "VERB", config: "Trú ngụ, ở", state: "Irregular", disc: ""},
    {n: 65, s: "Eat - Ate", name: "eat - ate /iːt/ - /eɪt/", w: "", c: "verb", catName: "VERB", config: "Ăn", state: "Irregular", disc: ""},
    {n: 66, s: "Fall - Fell", name: "fall - fell /fɔːl/ - /fel/", w: "", c: "verb", catName: "VERB", config: "Ngã, rơi", state: "Irregular", disc: ""},
    {n: 67, s: "Feed - Fed", name: "feed - fed /fiːd/ - /fed/", w: "", c: "verb", catName: "VERB", config: "Cho ăn", state: "Irregular", disc: ""},
    {n: 68, s: "Feel - Felt", name: "feel - felt /fiːl/ - /felt/", w: "", c: "verb", catName: "VERB", config: "Cảm thấy, cảm giác", state: "Irregular", disc: ""},
    {n: 69, s: "Fight - Fought", name: "fight - fought /faɪt/ - /fɔːt/", w: "", c: "verb", catName: "VERB", config: "Chiến đấu, đánh nhau", state: "Irregular", disc: ""},
    {n: 70, s: "Find - Found", name: "find - found /faɪnd/ - /faʊnd/", w: "", c: "verb", catName: "VERB", config: "Tìm thấy", state: "Irregular", disc: ""},
    {n: 71, s: "Fit - Fit/Fitted", name: "fit - fit /fɪt/ - /fɪt/", w: "", c: "verb", catName: "VERB", config: "Vừa vặn, hợp", state: "Irregular", disc: ""},
    {n: 72, s: "Flee - Fled", name: "flee - fled /fliː/ - /fled/", w: "", c: "verb", catName: "VERB", config: "Bỏ chạy, tẩu thoát", state: "Irregular", disc: ""},
    {n: 73, s: "Fling - Flung", name: "fling - flung /flɪŋ/ - /flʌŋ/", w: "", c: "verb", catName: "VERB", config: "Quăng, ném mạnh", state: "Irregular", disc: ""},
    {n: 74, s: "Fly - Flew", name: "fly - flew /flaɪ/ - /fluː/", w: "", c: "verb", catName: "VERB", config: "Bay", state: "Irregular", disc: ""},
    {n: 75, s: "Forbear - Forbore", name: "forbear - forbore /fɔːrˈber/ - /fɔːrˈbɔːr/", w: "", c: "verb", catName: "VERB", config: "Nhẫn nại, kiềm chế", state: "Irregular", disc: ""},
    {n: 76, s: "Forbid - Forbade", name: "forbid - forbade /fərˈbɪd/ - /fərˈbæd/", w: "", c: "verb", catName: "VERB", config: "Cấm, cấm đoán", state: "Irregular", disc: ""},
    {n: 77, s: "Forecast - Forecast", name: "forecast - forecast /ˈfɔːr.kæst/ - /ˈfɔːr.kæst/", w: "", c: "verb", catName: "VERB", config: "Dự báo thời tiết", state: "Irregular", disc: ""},
    {n: 78, s: "Foreknow - Foreknew", name: "foreknow - foreknew /fɔːrˈnoʊ/ - /fɔːrˈnuː/", w: "", c: "verb", catName: "VERB", config: "Biết trước", state: "Irregular", disc: ""},
    {n: 79, s: "Foresee - Foresaw", name: "foresee - foresaw /fɔːrˈsiː/ - /fɔːrˈsɔː/", w: "", c: "verb", catName: "VERB", config: "Nhìn thấy trước", state: "Irregular", disc: ""},
    {n: 80, s: "Foretell - Foretold", name: "foretell - foretold /fɔːrˈtel/ - /fɔːrˈtoʊld/", w: "", c: "verb", catName: "VERB", config: "Dự đoán, nói trước", state: "Irregular", disc: ""},
    {n: 81, s: "Forget - Forgot", name: "forget - forgot /fərˈɡet/ - /fərˈɡɑːt/", w: "", c: "verb", catName: "VERB", config: "Quên", state: "Irregular", disc: ""},
    {n: 82, s: "Forgive - Forgave", name: "forgive - forgave /fərˈɡɪv/ - /fərˈɡeɪv/", w: "", c: "verb", catName: "VERB", config: "Tha thứ", state: "Irregular", disc: ""},
    {n: 83, s: "Forsake - Forsook", name: "forsake - forsook /fərˈseɪk/ - /fərˈsʊk/", w: "", c: "verb", catName: "VERB", config: "Từ bỏ, ruồng bỏ", state: "Irregular", disc: ""},
    {n: 84, s: "Forswear - Forswore", name: "forswear - forswore /fɔːrˈswer/ - /fɔːrˈswɔːr/", w: "", c: "verb", catName: "VERB", config: "Thề bỏ, thề thốt sai", state: "Irregular", disc: ""},
    {n: 85, s: "Freeze - Froze", name: "freeze - froze /friːz/ - /froʊz/", w: "", c: "verb", catName: "VERB", config: "Đóng băng, đông cứng", state: "Irregular", disc: ""},
    {n: 86, s: "Gainsay - Gainsaid", name: "gainsay - gainsaid /ɡeɪnˈseɪ/ - /ɡeɪnˈsed/", w: "", c: "verb", catName: "VERB", config: "Chối cãi, phủ nhận", state: "Irregular", disc: ""},
    {n: 87, s: "Get - Got", name: "get - got /ɡet/ - /ɡɑːt/", w: "", c: "verb", catName: "VERB", config: "Có được, lấy được", state: "Irregular", disc: ""},
    {n: 88, s: "Gild - Gilt/Gilded", name: "gild - gilt /ɡɪld/ - /ɡɪlt/", w: "", c: "verb", catName: "VERB", config: "Mạ vàng, tô điểm", state: "Irregular", disc: ""},
    {n: 89, s: "Gird - Girt/Girded", name: "gird - girt /ɡɜːrd/ - /ɡɜːrt/", w: "", c: "verb", catName: "VERB", config: "Đeo, bao quanh", state: "Irregular", disc: ""},
    {n: 90, s: "Give - Gave", name: "give - gave /ɡɪv/ - /ɡeɪv/", w: "", c: "verb", catName: "VERB", config: "Cho, tặng", state: "Irregular", disc: ""},
    {n: 91, s: "Go - Went", name: "go - went /ɡoʊ/ - /went/", w: "", c: "verb", catName: "VERB", config: "Đi", state: "Irregular", disc: ""},
    {n: 92, s: "Grave - Graved", name: "grave - graved /ɡreɪv/ - /ɡreɪvd/", w: "", c: "verb", catName: "VERB", config: "Khắc sâu, khắc ghi", state: "Irregular", disc: ""},
    {n: 93, s: "Grind - Ground", name: "grind - ground /ɡraɪnd/ - /ɡraʊnd/", w: "", c: "verb", catName: "VERB", config: "Xay, nghiền", state: "Irregular", disc: ""},
    {n: 94, s: "Grow - Grew", name: "grow - grew /ɡroʊ/ - /ɡruː/", w: "", c: "verb", catName: "VERB", config: "Lớn lên, mọc", state: "Irregular", disc: ""},
    {n: 95, s: "Hamstring - Hamstrung", name: "hamstring - hamstrung /ˈhæm.strɪŋ/ - /ˈhæm.strʌŋ/", w: "", c: "verb", catName: "VERB", config: "Làm tàn phế, cắt gân chân", state: "Irregular", disc: ""},
    {n: 96, s: "Hand-feed - Hand-fed", name: "hand-feed - hand-fed /ˈhænd.fiːd/ - /ˈhænd.fed/", w: "", c: "verb", catName: "VERB", config: "Cho ăn bằng tay", state: "Irregular", disc: ""},
    {n: 97, s: "Handwrite - Handwrote", name: "handwrite - handwrote /ˈhænd.raɪt/ - /ˈhænd.roʊt/", w: "", c: "verb", catName: "VERB", config: "Viết tay", state: "Irregular", disc: ""},
    {n: 98, s: "Hang - Hung", name: "hang - hung /hæŋ/ - /hʌŋ/", w: "", c: "verb", catName: "VERB", config: "Treo lên", state: "Irregular", disc: ""},
    {n: 99, s: "Have - Had", name: "have - had /hæv/ - /hæd/", w: "", c: "verb", catName: "VERB", config: "Có", state: "Irregular", disc: ""},
    {n: 100, s: "Hear - Heard", name: "hear - heard /hɪr/ - /hɜːrd/", w: "", c: "verb", catName: "VERB", config: "Nghe thấy", state: "Irregular", disc: ""},
    {n: 101, s: "Heave - Hove/Heaved", name: "heave - hove /hiːv/ - /hoʊv/", w: "", c: "verb", catName: "VERB", config: "Nâng lên, kéo lên", state: "Irregular", disc: ""},
    {n: 102, s: "Hew - Hewed", name: "hew - hewed /hjuː/ - /hjuːd/", w: "", c: "verb", catName: "VERB", config: "Đốn, đẽo", state: "Irregular", disc: ""},
    {n: 103, s: "Hide - Hid", name: "hide - hid /haɪd/ - /hɪd/", w: "", c: "verb", catName: "VERB", config: "Trốn, giấu", state: "Irregular", disc: ""},
    {n: 104, s: "Hit - Hit", name: "hit - hit /hɪt/ - /hɪt/", w: "", c: "verb", catName: "VERB", config: "Đụng, đập, đánh", state: "Irregular", disc: ""},
    {n: 105, s: "Hold - Held", name: "hold - held /hoʊld/ - /held/", w: "", c: "verb", catName: "VERB", config: "Cầm, nắm, giữ", state: "Irregular", disc: ""},
    {n: 106, s: "Hurt - Hurt", name: "hurt - hurt /hɜːrt/ - /hɜːrt/", w: "", c: "verb", catName: "VERB", config: "Làm đau, bị đau", state: "Irregular", disc: ""},
    {n: 107, s: "Inbreed - Inbred", name: "inbreed - inbred /ˈɪn.briːd/ - /ˈɪn.bred/", w: "", c: "verb", catName: "VERB", config: "Giao phối cận huyết", state: "Irregular", disc: ""},
    {n: 108, s: "Inlay - Inlaid", name: "inlay - inlaid /ˌɪnˈleɪ/ - /ˌɪnˈleɪd/", w: "", c: "verb", catName: "VERB", config: "Khảm, cẩn", state: "Irregular", disc: ""},
    {n: 109, s: "Input - Input", name: "input - input /ˈɪn.pʊt/ - /ˈɪn.pʊt/", w: "", c: "verb", catName: "VERB", config: "Nhập dữ liệu", state: "Irregular", disc: ""},
    {n: 110, s: "Inset - Inset", name: "inset - inset /ˌɪnˈset/ - /ˌɪnˈset/", w: "", c: "verb", catName: "VERB", config: "Gắn vào, dán vào", state: "Irregular", disc: ""},
    {n: 111, s: "Interbreed - Interbred", name: "interbreed - interbred /ˌɪn.t̬ɚˈbriːd/ - /ˌɪn.t̬ɚˈbred/", w: "", c: "verb", catName: "VERB", config: "Giao phối khác loài", state: "Irregular", disc: ""},
    {n: 112, s: "Interweave - Interwove", name: "interweave - interwove /ˌɪn.t̬ɚˈwiːv/ - /ˌɪn.t̬ɚˈwoʊv/", w: "", c: "verb", catName: "VERB", config: "Dệt lẫn, đan xen", state: "Irregular", disc: ""},
    {n: 113, s: "Keep - Kept", name: "keep - kept /kiːp/ - /kept/", w: "", c: "verb", catName: "VERB", config: "Giữ", state: "Irregular", disc: ""},
    {n: 114, s: "Kneel - Knelt/Kneeled", name: "kneel - knelt /niːl/ - /nelt/", w: "", c: "verb", catName: "VERB", config: "Quỳ xuống", state: "Irregular", disc: ""},
    {n: 115, s: "Knit - Knit/Knitted", name: "knit - knit /nɪt/ - /nɪt/", w: "", c: "verb", catName: "VERB", config: "Đan len, kết nối", state: "Irregular", disc: ""},
    {n: 116, s: "Know - Knew", name: "know - knew /noʊ/ - /nuː/", w: "", c: "verb", catName: "VERB", config: "Biết, hiểu biết", state: "Irregular", disc: ""},
    {n: 117, s: "Lade - Laded", name: "lade - laded /leɪd/ - /leɪdɪd/", w: "", c: "verb", catName: "VERB", config: "Chất hàng, múc nước", state: "Irregular", disc: ""},
    {n: 118, s: "Landslide - Landslid", name: "landslide - landslid /ˈlænd.slaɪd/ - /ˈlænd.slɪd/", w: "", c: "verb", catName: "VERB", config: "Sạt lở đất", state: "Irregular", disc: ""},
    {n: 119, s: "Lay - Laid", name: "lay - laid /leɪ/ - /leɪd/", w: "", c: "verb", catName: "VERB", config: "Đặt, để, đẻ trứng", state: "Irregular", disc: ""},
    {n: 120, s: "Lead - Led", name: "lead - led /liːd/ - /led/", w: "", c: "verb", catName: "VERB", config: "Dẫn dắt, lãnh đạo", state: "Irregular", disc: ""},
    {n: 121, s: "Lean - Leant/Leaned", name: "lean - leant /liːn/ - /lent/", w: "", c: "verb", catName: "VERB", config: "Dựa vào, nghiêng", state: "Irregular", disc: ""},
    {n: 122, s: "Leap - Leapt/Leaped", name: "leap - leapt /liːp/ - /lept/", w: "", c: "verb", catName: "VERB", config: "Nhảy vọt, nhảy qua", state: "Irregular", disc: ""},
    {n: 123, s: "Learn - Learnt/Learned", name: "learn - learnt /lɜːrn/ - /lɜːrnt/", w: "", c: "verb", catName: "VERB", config: "Học, học tập", state: "Irregular", disc: ""},
    {n: 124, s: "Leave - Left", name: "leave - left /liːv/ - /left/", w: "", c: "verb", catName: "VERB", config: "Rời đi, để lại", state: "Irregular", disc: ""},
    {n: 125, s: "Lend - Lent", name: "lend - lent /lend/ - /lent/", w: "", c: "verb", catName: "VERB", config: "Cho vay, cho mượn", state: "Irregular", disc: ""},
    {n: 126, s: "Let - Let", name: "let - let /let/ - /let/", w: "", c: "verb", catName: "VERB", config: "Cho phép, để cho", state: "Irregular", disc: ""},
    {n: 127, s: "Lie - Lay", name: "lie - lay /laɪ/ - /leɪ/", w: "", c: "verb", catName: "VERB", config: "Nằm", state: "Irregular", disc: ""},
    {n: 128, s: "Light - Lit/Lighted", name: "light - lit /laɪt/ - /lɪt/", w: "", c: "verb", catName: "VERB", config: "Thắp sáng, đốt đèn", state: "Irregular", disc: ""},
    {n: 129, s: "Lip-read - Lip-read", name: "lip-read - lip-read /ˈlɪp.riːd/ - /ˈlɪp.red/", w: "", c: "verb", catName: "VERB", config: "Đọc khẩu hình miệng", state: "Irregular", disc: ""},
    {n: 130, s: "Lose - Lost", name: "lose - lost /luːz/ - /lɔːst/", w: "", c: "verb", catName: "VERB", config: "Mất, đánh mất, thua", state: "Irregular", disc: ""},
    {n: 131, s: "Make - Made", name: "make - made /meɪk/ - /meɪd/", w: "", c: "verb", catName: "VERB", config: "Chế tạo, làm ra", state: "Irregular", disc: ""},
    {n: 132, s: "Mean - Meant", name: "mean - meant /miːn/ - /ment/", w: "", c: "verb", catName: "VERB", config: "Có nghĩa là", state: "Irregular", disc: ""},
    {n: 133, s: "Meet - Met", name: "meet - met /miːt/ - /met/", w: "", c: "verb", catName: "VERB", config: "Gặp gỡ, đón gặp", state: "Irregular", disc: ""},
    {n: 134, s: "Miscast - Miscast", name: "miscast - miscast /ˌmɪsˈkæst/ - /ˌmɪsˈkæst/", w: "", c: "verb", catName: "VERB", config: "Phân vai không hợp", state: "Irregular", disc: ""},
    {n: 135, s: "Misdeal - Misdealt", name: "misdeal - misdealt /ˌmɪsˈdiːl/ - /ˌmɪsˈdelt/", w: "", c: "verb", catName: "VERB", config: "Chia bài sai", state: "Irregular", disc: ""},
    {n: 136, s: "Misgive - Misgave", name: "misgive - misgave /ˌmɪsˈɡɪv/ - /ˌmɪsˈɡeɪv/", w: "", c: "verb", catName: "VERB", config: "Làm lo ngại, nghi ngờ", state: "Irregular", disc: ""},
    {n: 137, s: "Mishear - Misheard", name: "mishear - misheard /ˌmɪsˈhɪr/ - /ˌmɪsˈhɜːrd/", w: "", c: "verb", catName: "VERB", config: "Nghe nhầm", state: "Irregular", disc: ""},
    {n: 138, s: "Mishit - Mishit", name: "mishit - mishit /ˌmɪsˈhɪt/ - /ˌmɪsˈhɪt/", w: "", c: "verb", catName: "VERB", config: "Đánh trượt, đánh hỏng", state: "Irregular", disc: ""},
    {n: 139, s: "Mislay - Mislaid", name: "mislay - mislaid /ˌmɪsˈleɪ/ - /ˌmɪsˈleɪd/", w: "", c: "verb", catName: "VERB", config: "Để thất lạc", state: "Irregular", disc: ""},
    {n: 140, s: "Mislead - Misled", name: "mislead - misled /ˌmɪsˈliːd/ - /ˌmɪsˈled/", w: "", c: "verb", catName: "VERB", config: "Làm lạc đường, dối lừa", state: "Irregular", disc: ""},
    {n: 141, s: "Misread - Misread", name: "misread - misread /ˌmɪsˈriːd/ - /ˌmɪsˈred/", w: "", c: "verb", catName: "VERB", config: "Đọc sai, hiểu sai", state: "Irregular", disc: ""},
    {n: 142, s: "Misspell - Misspelt", name: "misspell - misspelt /ˌmɪsˈspel/ - /ˌmɪsˈspelt/", w: "", c: "verb", catName: "VERB", config: "Viết sai chính tả", state: "Irregular", disc: ""},
    {n: 143, s: "Misspend - Misspent", name: "misspend - misspent /ˌmɪsˈspend/ - /ˌmɪsˈspent/", w: "", c: "verb", catName: "VERB", config: "Tiêu xài lãng phí", state: "Irregular", disc: ""},
    {n: 144, s: "Mistake - Mistook", name: "mistake - mistook /mɪˈsteɪk/ - /mɪˈstʊk/", w: "", c: "verb", catName: "VERB", config: "Phạm lỗi, nhầm lẫn", state: "Irregular", disc: ""},
    {n: 145, s: "Misunderstand - Misunderstood", name: "misunderstand - misunderstood /ˌmɪs.ʌn.dɚˈstænd/ - /ˌmɪs.ʌn.dɚˈstʊd/", w: "", c: "verb", catName: "VERB", config: "Hiểu nhầm", state: "Irregular", disc: ""},
    {n: 146, s: "Mow - Mowed", name: "mow - mowed /moʊ/ - /moʊd/", w: "", c: "verb", catName: "VERB", config: "Cắt cỏ", state: "Irregular", disc: ""},
    {n: 147, s: "Outbid - Outbid", name: "outbid - outbid /ˌaʊtˈbɪd/ - /ˌaʊtˈbɪd/", w: "", c: "verb", catName: "VERB", config: "Trả giá cao hơn", state: "Irregular", disc: ""},
    {n: 148, s: "Outdo - Outdid", name: "outdo - outdid /ˌaʊtˈduː/ - /ˌaʊtˈdɪd/", w: "", c: "verb", catName: "VERB", config: "Vượt trội hơn", state: "Irregular", disc: ""},
    {n: 149, s: "Outfight - Outfought", name: "outfight - outfought /ˌaʊtˈfaɪt/ - /ˌaʊtˈfɔːt/", w: "", c: "verb", catName: "VERB", config: "Đánh giỏi hơn", state: "Irregular", disc: ""},
    {n: 150, s: "Outgrow - Outgrew", name: "outgrow - outgrew /ˌaʊtˈɡroʊ/ - /ˌaʊtˈɡruː/", w: "", c: "verb", catName: "VERB", config: "Lớn nhanh hơn, bỏ được thói quen", state: "Irregular", disc: ""},
    {n: 151, s: "Outoutput - Outoutput", name: "outoutput - outoutput /ˌaʊtˈaʊt.pʊt/ - /ˌaʊtˈaʊt.pʊt/", w: "", c: "verb", catName: "VERB", config: "Sản xuất vượt trội", state: "Irregular", disc: ""},
    {n: 152, s: "Outride - Outrode", name: "outride - outrode /ˌaʊtˈraɪd/ - /ˌaʊtˈroʊd/", w: "", c: "verb", catName: "VERB", config: "Cưỡi ngựa giỏi hơn", state: "Irregular", disc: ""},
    {n: 153, s: "Outrun - Outran", name: "outrun - outran /ˌaʊtˈrʌn/ - /ˌaʊtˈræn/", w: "", c: "verb", catName: "VERB", config: "Chạy nhanh hơn", state: "Irregular", disc: ""},
    {n: 154, s: "Outsell - Outsold", name: "outsell - outsold /ˌaʊtˈsel/ - /ˌaʊtˈsoʊld/", w: "", c: "verb", catName: "VERB", config: "Bán chạy hơn", state: "Irregular", disc: ""},
    {n: 155, s: "Outshine - Outshone", name: "outshine - outshone /ˌaʊtˈʃaɪn/ - /ˌaʊtˈʃɒn/", w: "", c: "verb", catName: "VERB", config: "Sáng hơn, nổi bật hơn", state: "Irregular", disc: ""},
    {n: 156, s: "Overbear - Overbore", name: "overbear - overbore /ˌoʊ.vɚˈber/ - /ˌoʊ.vɚˈbɔːr/", w: "", c: "verb", catName: "VERB", config: "Đè bẹp, áp đảo", state: "Irregular", disc: ""},
    {n: 157, s: "Overcast - Overcast", name: "overcast - overcast /ˌoʊ.vɚˈkæst/ - /ˌoʊ.vɚˈkæst/", w: "", c: "verb", catName: "VERB", config: "U ám, che phủ", state: "Irregular", disc: ""},
    {n: 158, s: "Overcome - Overcame", name: "overcome - overcame /ˌoʊ.vɚˈkʌm/ - /ˌoʊ.vɚˈkeɪm/", w: "", c: "verb", catName: "VERB", config: "Vượt qua, khắc phục", state: "Irregular", disc: ""},
    {n: 159, s: "Overdo - Overdid", name: "overdo - overdid /ˌoʊ.vɚˈduː/ - /ˌoʊ.vɚˈdɪd/", w: "", c: "verb", catName: "VERB", config: "Làm quá sức, làm quá trớn", state: "Irregular", disc: ""},
    {n: 160, s: "Overdraw - Overdrew", name: "overdraw - overdrew /ˌoʊ.vɚˈdrɔː/ - /ˌoʊ.vɚˈdruː/", w: "", c: "verb", catName: "VERB", config: "Rút tiền quá số dư", state: "Irregular", disc: ""},
    {n: 161, s: "Overeat - Overate", name: "overeat - overate /ˌoʊ.vɚˈiːt/ - /ˌoʊ.vɚˈeɪt/", w: "", c: "verb", catName: "VERB", config: "Ăn quá nhiều", state: "Irregular", disc: ""},
    {n: 162, s: "Overfly - Overflew", name: "overfly - overflew /ˌoʊ.vɚˈflaɪ/ - /ˌoʊ.vɚˈfluː/", w: "", c: "verb", catName: "VERB", config: "Bay qua", state: "Irregular", disc: ""},
    {n: 163, s: "Overhang - Overhung", name: "overhang - overhung /ˌoʊ.vɚˈhæŋ/ - /ˌoʊ.vɚˈhʌŋ/", w: "", c: "verb", catName: "VERB", config: "Treo nhô ra", state: "Irregular", disc: ""},
    {n: 164, s: "Overhear - Overheard", name: "overhear - overheard /ˌoʊ.vɚˈhɪr/ - /ˌoʊ.vɚˈhɜːrd/", w: "", c: "verb", catName: "VERB", config: "Nghe lỏm, vô tình nghe thấy", state: "Irregular", disc: ""},
    {n: 165, s: "Overlay - Overlaid", name: "overlay - overlaid /ˌoʊ.vɚˈleɪ/ - /ˌoʊ.vɚˈleɪd/", w: "", c: "verb", catName: "VERB", config: "Phủ lên, đè lên", state: "Irregular", disc: ""},
    {n: 166, s: "Overpay - Overpaid", name: "overpay - overpaid /ˌoʊ.vɚˈpeɪ/ - /ˌoʊ.vɚˈpeɪd/", w: "", c: "verb", catName: "VERB", config: "Trả quá tiền", state: "Irregular", disc: ""},
    {n: 167, s: "Override - Overrode", name: "override - overrode /ˌoʊ.vɚˈraɪd/ - /ˌoʊ.vɚˈroʊd/", w: "", c: "verb", catName: "VERB", config: "Gạt bỏ, đè lên", state: "Irregular", disc: ""},
    {n: 168, s: "Overrun - Overran", name: "overrun - overran /ˌoʊ.vɚˈrʌn/ - /ˌoʊ.vɚˈræn/", w: "", c: "verb", catName: "VERB", config: "Tràn qua, xâm chiếm", state: "Irregular", disc: ""},
    {n: 169, s: "Oversee - Oversaw", name: "oversee - oversaw /ˌoʊ.vɚˈsiː/ - /ˌoʊ.vɚˈsɔː/", w: "", c: "verb", catName: "VERB", config: "Giám sát, trông nom", state: "Irregular", disc: ""},
    {n: 170, s: "Overshoot - Overshot", name: "overshoot - overshot /ˌoʊ.vɚˈʃuːt/ - /ˌoʊ.vɚˈʃɑːt/", w: "", c: "verb", catName: "VERB", config: "Bắn quá đích, đi quá tầm", state: "Irregular", disc: ""},
    {n: 171, s: "Oversleep - Overslept", name: "oversleep - overslept /ˌoʊ.vɚˈsliːp/ - /ˌoʊ.vɚˈslept/", w: "", c: "verb", catName: "VERB", config: "Ngủ quên", state: "Irregular", disc: ""},
    {n: 172, s: "Overtake - Overtook", name: "overtake - overtook /ˌoʊ.vɚˈteɪk/ - /ˌoʊ.vɚˈtʊk/", w: "", c: "verb", catName: "VERB", config: "Vượt mặt, bắt kịp", state: "Irregular", disc: ""},
    {n: 173, s: "Overthrow - Overthrew", name: "overthrow - overthrew /ˌoʊ.vɚˈθroʊ/ - /ˌoʊ.vɚˈθruː/", w: "", c: "verb", catName: "VERB", config: "Lật đổ", state: "Irregular", disc: ""},
    {n: 174, s: "Partake - Partook", name: "partake - partook /pɑːrˈteɪk/ - /pɑːrˈtʊk/", w: "", c: "verb", catName: "VERB", config: "Tham gia, tham dự", state: "Irregular", disc: ""},
    {n: 175, s: "Pay - Paid", name: "pay - paid /peɪ/ - /peɪd/", w: "", c: "verb", catName: "VERB", config: "Trả tiền", state: "Irregular", disc: ""},
    {n: 176, s: "Pen - Pent/Penned", name: "pen - pent /pen/ - /pent/", w: "", c: "verb", catName: "VERB", config: "Nhốt lại, viết", state: "Irregular", disc: ""},
    {n: 177, s: "Plead - Pled/Pleaded", name: "plead - pled /pliːd/ - /pled/", w: "", c: "verb", catName: "VERB", config: "Bào chữa, van xin", state: "Irregular", disc: ""},
    {n: 178, s: "Preach - Preached", name: "preach - preached /priːtʃ/ - /priːtʃt/", w: "", c: "verb", catName: "VERB", config: "Thuyết giáo, giảng đạo", state: "Irregular", disc: ""},
    {n: 179, s: "Proofread - Proofread", name: "proofread - proofread /ˈpruːf.riːd/ - /ˈpruːf.red/", w: "", c: "verb", catName: "VERB", config: "Hiệu đính, đọc sửa lỗi", state: "Irregular", disc: ""},
    {n: 180, s: "Prove - Proved", name: "prove - proved /pruːv/ - /pruːvd/", w: "", c: "verb", catName: "VERB", config: "Chứng minh", state: "Irregular", disc: ""},
    {n: 181, s: "Put - Put", name: "put - put /pʊt/ - /pʊt/", w: "", c: "verb", catName: "VERB", config: "Đặt, để", state: "Irregular", disc: ""},
    {n: 182, s: "Quit - Quit/Quitted", name: "quit - quit /kwɪt/ - /kwɪt/", w: "", c: "verb", catName: "VERB", config: "Thôi, từ bỏ", state: "Irregular", disc: ""},
    {n: 183, s: "Read - Read", name: "read - read /riːd/ - /red/", w: "", c: "verb", catName: "VERB", config: "Đọc (quá khứ phát âm giống red)", state: "Irregular", disc: ""},
    {n: 184, s: "Rebind - Rebound", name: "rebind - rebound /ˌriːˈbaɪnd/ - /ˌriːˈbaʊnd/", w: "", c: "verb", catName: "VERB", config: "Đóng lại (sách)", state: "Irregular", disc: ""},
    {n: 185, s: "Rebroadcast - Rebroadcast", name: "rebroadcast - rebroadcast /ˌriːˈbrɔːd.kæst/ - /ˌriːˈbrɔːd.kæst/", w: "", c: "verb", catName: "VERB", config: "Phát sóng lại", state: "Irregular", disc: ""},
    {n: 186, s: "Rebuild - Rebuilt", name: "rebuild - rebuilt /ˌriːˈbɪld/ - /ˌriːˈbɪlt/", w: "", c: "verb", catName: "VERB", config: "Xây dựng lại", state: "Irregular", disc: ""},
    {n: 187, s: "Recast - Recast", name: "recast - recast /ˌriːˈkæst/ - /ˌriːˈkæst/", w: "", c: "verb", catName: "VERB", config: "Đúc lại, sửa đổi", state: "Irregular", disc: ""},
    {n: 188, s: "Redo - Redid", name: "redo - redid /ˌriːˈduː/ - /ˌriːˈdɪd/", w: "", c: "verb", catName: "VERB", config: "Làm lại", state: "Irregular", disc: ""},
    {n: 189, s: "Redraw - Redrew", name: "redraw - redrew /ˌriːˈdrɔː/ - /ˌriːˈdruː/", w: "", c: "verb", catName: "VERB", config: "Vẽ lại", state: "Irregular", disc: ""},
    {n: 190, s: "Re-fit - Re-fit/Re-fitted", name: "re-fit - re-fit /ˌriːˈfɪt/ - /ˌriːˈfɪt/", w: "", c: "verb", catName: "VERB", config: "Trang bị lại", state: "Irregular", disc: ""},
    {n: 191, s: "Regrind - Reground", name: "regrind - reground /ˌriːˈɡraɪnd/ - /ˌriːˈɡraʊnd/", w: "", c: "verb", catName: "VERB", config: "Mài lại", state: "Irregular", disc: ""},
    {n: 192, s: "Regrow - Regrew", name: "regrow - regrew /ˌriːˈɡroʊ/ - /ˌriːˈɡruː/", w: "", c: "verb", catName: "VERB", config: "Mọc lại", state: "Irregular", disc: ""},
    {n: 193, s: "Rehang - Rehung", name: "rehang - rehung /ˌriːˈhæŋ/ - /ˌriːˈhʌŋ/", w: "", c: "verb", catName: "VERB", config: "Treo lại", state: "Irregular", disc: ""},
    {n: 194, s: "Remake - Remade", name: "remake - remade /ˌriːˈmeɪk/ - /ˌriːˈmeɪd/", w: "", c: "verb", catName: "VERB", config: "Làm lại, làm lại phim", state: "Irregular", disc: ""},
    {n: 195, s: "Rend - Rent", name: "rend - rent /rend/ - /rent/", w: "", c: "verb", catName: "VERB", config: "Xé xé rách", state: "Irregular", disc: ""},
    {n: 196, s: "Repay - Repaid", name: "repay - repaid /ˌriːˈpeɪ/ - /ˌriːˈpeɪd/", w: "", c: "verb", catName: "VERB", config: "Hoàn tiền, trả lại", state: "Irregular", disc: ""},
    {n: 197, s: "Reread - Reread", name: "reread - reread /ˌriːˈriːd/ - /ˌriːˈred/", w: "", c: "verb", catName: "VERB", config: "Đọc lại", state: "Irregular", disc: ""},
    {n: 198, s: "Rerun - Reran", name: "rerun - reran /ˌriːˈrʌn/ - /ˌriːˈræn/", w: "", c: "verb", catName: "VERB", config: "Chạy lại, chiếu lại", state: "Irregular", disc: ""},
    {n: 199, s: "Resell - Resold", name: "resell - resold /ˌriːˈsel/ - /ˌriːˈsoʊld/", w: "", c: "verb", catName: "VERB", config: "Bán lại", state: "Irregular", disc: ""},
    {n: 200, s: "Resend - Resent", name: "resend - resent /ˌriːˈsend/ - /ˌriːˈsent/", w: "", c: "verb", catName: "VERB", config: "Gửi lại", state: "Irregular", disc: ""},
    {n: 201, s: "Reset - Reset", name: "reset - reset /ˌriːˈset/ - /ˌriːˈset/", w: "", c: "verb", catName: "VERB", config: "Đặt lại, cài đặt lại", state: "Irregular", disc: ""},
    {n: 202, s: "Resit - Resat", name: "resit - resat /ˌriːˈsɪt/ - /ˌriːˈsæt/", w: "", c: "verb", catName: "VERB", config: "Thi lại", state: "Irregular", disc: ""},
    {n: 203, s: "Retake - Retook", name: "retake - retook /ˌriːˈteɪk/ - /ˌriːˈtʊk/", w: "", c: "verb", catName: "VERB", config: "Lấy lại, chụp lại", state: "Irregular", disc: ""},
    {n: 204, s: "Retell - Retold", name: "retell - retold /ˌriːˈtel/ - /ˌriːˈtoʊld/", w: "", c: "verb", catName: "VERB", config: "Kể lại", state: "Irregular", disc: ""},
    {n: 205, s: "Rethink - Rethought", name: "rethink - rethought /ˌriːˈθɪŋk/ - /ˌriːˈθɔːt/", w: "", c: "verb", catName: "VERB", config: "Suy nghĩ lại", state: "Irregular", disc: ""},
    {n: 206, s: "Rewind - Rewound", name: "rewind - rewound /ˌriːˈwaɪnd/ - /ˌriːˈwaʊnd/", w: "", c: "verb", catName: "VERB", config: "Tua lại", state: "Irregular", disc: ""},
    {n: 207, s: "Rewrite - Rewrote", name: "rewrite - rewrote /ˌriːˈraɪt/ - /ˌriːˈroʊt/", w: "", c: "verb", catName: "VERB", config: "Viết lại", state: "Irregular", disc: ""},
    {n: 208, s: "Rid - Rid", name: "rid - rid /rɪd/ - /rɪd/", w: "", c: "verb", catName: "VERB", config: "Giải thoát, loại bỏ", state: "Irregular", disc: ""},
    {n: 209, s: "Ride - Rode", name: "ride - rode /raɪd/ - /roʊd/", w: "", c: "verb", catName: "VERB", config: "Đi xe, cưỡi ngựa", state: "Irregular", disc: ""},
    {n: 210, s: "Ring - Rang", name: "ring - rang /rɪŋ/ - /ræŋ/", w: "", c: "verb", catName: "VERB", config: "Reo chuông, gọi điện", state: "Irregular", disc: ""},
    {n: 211, s: "Rise - Rose", name: "rise - rose /raɪz/ - /roʊz/", w: "", c: "verb", catName: "VERB", config: "Mọc lên, gia tăng", state: "Irregular", disc: ""},
    {n: 212, s: "Rive - Rived", name: "rive - rived /raɪv/ - /raɪvd/", w: "", c: "verb", catName: "VERB", config: "Chẻ, tách ra", state: "Irregular", disc: ""},
    {n: 213, s: "Run - Ran", name: "run - ran /rʌn/ - /ræn/", w: "", c: "verb", catName: "VERB", config: "Chạy", state: "Irregular", disc: ""},
    {n: 214, s: "Saw - Sawed", name: "saw - sawed /sɔː/ - /sɔːd/", w: "", c: "verb", catName: "VERB", config: "Cưa gỗ", state: "Irregular", disc: ""},
    {n: 215, s: "Say - Said", name: "say - said /seɪ/ - /sed/", w: "", c: "verb", catName: "VERB", config: "Nói", state: "Irregular", disc: ""},
    {n: 216, s: "See - Saw", name: "see - saw /siː/ - /sɔː/", w: "", c: "verb", catName: "VERB", config: "Nhìn thấy", state: "Irregular", disc: ""},
    {n: 217, s: "Seek - Sought", name: "seek - sought /siːk/ - /sɔːt/", w: "", c: "verb", catName: "VERB", config: "Tìm kiếm", state: "Irregular", disc: ""},
    {n: 218, s: "Sell - Sold", name: "sell - sold /sel/ - /soʊld/", w: "", c: "verb", catName: "VERB", config: "Bán hàng", state: "Irregular", disc: ""},
    {n: 219, s: "Send - Sent", name: "send - sent /send/ - /sent/", w: "", c: "verb", catName: "VERB", config: "Gửi đi", state: "Irregular", disc: ""},
    {n: 220, s: "Set - Set", name: "set - set /set/ - /set/", w: "", c: "verb", catName: "VERB", config: "Cài đặt, thiết lập", state: "Irregular", disc: ""},
    {n: 221, s: "Sew - Sewed", name: "sew - sewed /soʊ/ - /soʊd/", w: "", c: "verb", catName: "VERB", config: "May vá", state: "Irregular", disc: ""},
    {n: 222, s: "Shake - Shook", name: "shake - shook /ʃeɪk/ - /ʃʊk/", w: "", c: "verb", catName: "VERB", config: "Bắt tay, rung lắc", state: "Irregular", disc: ""},
    {n: 223, s: "Shave - Shaved", name: "shave - shaved /ʃeɪv/ - /ʃeɪvd/", w: "", c: "verb", catName: "VERB", config: "Cạo râu", state: "Irregular", disc: ""},
    {n: 224, s: "Shear - Sheared", name: "shear - sheared /ʃɪr/ - /ʃɪrd/", w: "", c: "verb", catName: "VERB", config: "Cắt lông cừu", state: "Irregular", disc: ""},
    {n: 225, s: "Shed - Shed", name: "shed - shed /ʃed/ - /ʃed/", w: "", c: "verb", catName: "VERB", config: "Rụng lá, trút bỏ", state: "Irregular", disc: ""},
    {n: 226, s: "Shine - Shone", name: "shine - shone /ʃaɪn/ - /ʃɒn/", w: "", c: "verb", catName: "VERB", config: "Chiếu sáng", state: "Irregular", disc: ""},
    {n: 227, s: "Shit - Shit/Shat", name: "shit - shit /ʃɪt/ - /ʃɪt/", w: "", c: "verb", catName: "VERB", config: "Đi tiêu", state: "Irregular", disc: ""},
    {n: 228, s: "Shoe - Shod/Shoed", name: "shoe - shod /ʃuː/ - /ʃɑːd/", w: "", c: "verb", catName: "VERB", config: "Đóng móng ngựa", state: "Irregular", disc: ""},
    {n: 229, s: "Shoot - Shot", name: "shoot - shot /ʃuːt/ - /ʃɒt/", w: "", c: "verb", catName: "VERB", config: "Bắn súng", state: "Irregular", disc: ""},
    {n: 230, s: "Show - Showed", name: "show - showed /ʃoʊ/ - /ʃoʊd/", w: "", c: "verb", catName: "VERB", config: "Chỉ ra, cho xem, trình diễn", state: "Irregular", disc: ""},
    {n: 231, s: "Shred - Shred/Shredded", name: "shred - shred /ʃred/ - /ʃred/", w: "", c: "verb", catName: "VERB", config: "Xé nhỏ, cắt vụn", state: "Irregular", disc: ""},
    {n: 232, s: "Shrink - Shrank", name: "shrink - shrank /ʃrɪŋk/ - /ʃræŋk/", w: "", c: "verb", catName: "VERB", config: "Co lại, rút lại", state: "Irregular", disc: ""},
    {n: 233, s: "Shrive - Shrove", name: "shrive - shrove /ʃraɪv/ - /ʃroʊv/", w: "", c: "verb", catName: "VERB", config: "Xưng tội, giải tội", state: "Irregular", disc: ""},
    {n: 234, s: "Shut - Shut", name: "shut - shut /ʃʌt/ - /ʃʌt/", w: "", c: "verb", catName: "VERB", config: "Đóng lại", state: "Irregular", disc: ""},
    {n: 235, s: "Sight-read - Sight-read", name: "sight-read - sight-read /ˈsaɪt.riːd/ - /ˈsaɪt.red/", w: "", c: "verb", catName: "VERB", config: "Đọc nhạc không chuẩn bị", state: "Irregular", disc: ""},
    {n: 236, s: "Sing - Sang", name: "sing - sang /sɪŋ/ - /sæŋ/", w: "", c: "verb", catName: "VERB", config: "Hát, ca hát", state: "Irregular", disc: ""},
    {n: 237, s: "Sink - Sank", name: "sink - sank /sɪŋk/ - /sæŋk/", w: "", c: "verb", catName: "VERB", config: "Chìm, đắm tàu", state: "Irregular", disc: ""},
    {n: 238, s: "Sit - Sat", name: "sit - sat /sɪt/ - /sæt/", w: "", c: "verb", catName: "VERB", config: "Ngồi", state: "Irregular", disc: ""},
    {n: 239, s: "Slay - Slew", name: "slay - slew /sleɪ/ - /sluː/", w: "", c: "verb", catName: "VERB", config: "Sát hại, tàn sát", state: "Irregular", disc: ""},
    {n: 240, s: "Sleep - Slept", name: "sleep - slept /sliːp/ - /slept/", w: "", c: "verb", catName: "VERB", config: "Ngủ", state: "Irregular", disc: ""},
    {n: 241, s: "Slide - Slid", name: "slide - slid /slaɪd/ - /slɪd/", w: "", c: "verb", catName: "VERB", config: "Trượt, trượt dài", state: "Irregular", disc: ""},
    {n: 242, s: "Sling - Slung", name: "sling - slung /slɪŋ/ - /slʌŋ/", w: "", c: "verb", catName: "VERB", config: "Ném, quăng", state: "Irregular", disc: ""},
    {n: 243, s: "Slink - Slunk", name: "slink - slunk /slɪŋk/ - /slʌŋk/", w: "", c: "verb", catName: "VERB", config: "Lẻn đi, rón rén", state: "Irregular", disc: ""},
    {n: 244, s: "Slit - Slit", name: "slit - slit /slɪt/ - /slɪt/", w: "", c: "verb", catName: "VERB", config: "Rạch, xẻ", state: "Irregular", disc: ""},
    {n: 245, s: "Smell - Smelt/Smelled", name: "smell - smelt /smel/ - /smelt/", w: "", c: "verb", catName: "VERB", config: "Ngửi thấy, có mùi", state: "Irregular", disc: ""},
    {n: 246, s: "Smite - Smote", name: "smite - smote /smaɪt/ - /smoʊt/", w: "", c: "verb", catName: "VERB", config: "Đánh mạnh, tàn phá", state: "Irregular", disc: ""},
    {n: 247, s: "Sneak - Sneaked/Snuck", name: "sneak - snuck /sniːk/ - /snʌk/", w: "", c: "verb", catName: "VERB", config: "Lén lút, trốn đi", state: "Irregular", disc: ""},
    {n: 248, s: "Sow - Sowed", name: "sow - sowed /soʊ/ - /soʊd/", w: "", c: "verb", catName: "VERB", config: "Gieo hạt", state: "Irregular", disc: ""},
    {n: 249, s: "Speak - Spoke", name: "speak - spoke /spiːk/ - /spoʊk/", w: "", c: "verb", catName: "VERB", config: "Nói (ngôn ngữ)", state: "Irregular", disc: ""},
    {n: 250, s: "Speed - Sped/Speeded", name: "speed - sped /spiːd/ - /sped/", w: "", c: "verb", catName: "VERB", config: "Tăng tốc, chạy nhanh", state: "Irregular", disc: ""},
    {n: 251, s: "Spell - Spelt/Spelled", name: "spell - spelt /spel/ - /spelt/", w: "", c: "verb", catName: "VERB", config: "Đánh vần", state: "Irregular", disc: ""},
    {n: 252, s: "Spend - Spent", name: "spend - spent /spend/ - /spent/", w: "", c: "verb", catName: "VERB", config: "Tiêu tiền, dành thời gian", state: "Irregular", disc: ""},
    {n: 253, s: "Spill - Spilt/Spilled", name: "spill - spilt /spɪl/ - /spɪlt/", w: "", c: "verb", catName: "VERB", config: "Làm đổ, tràn ra", state: "Irregular", disc: ""},
    {n: 254, s: "Spin - Span/Spun", name: "spin - spun /spɪn/ - /spʌn/", w: "", c: "verb", catName: "VERB", config: "Xoay tròn, kéo sợi", state: "Irregular", disc: ""},
    {n: 255, s: "Spit - Spat/Spit", name: "spit - spat /spɪt/ - /spæt/", w: "", c: "verb", catName: "VERB", config: "Nhổ nước bọt", state: "Irregular", disc: ""},
    {n: 256, s: "Split - Split", name: "split - split /splɪt/ - /splɪt/", w: "", c: "verb", catName: "VERB", config: "Chia tách, chẻ đôi", state: "Irregular", disc: ""},
    {n: 257, s: "Spoil - Spoilt/Spoiled", name: "spoil - spoilt /spɔɪl/ - /spɔɪlt/", w: "", c: "verb", catName: "VERB", config: "Làm hư, chiều hư", state: "Irregular", disc: ""},
    {n: 258, s: "Spoon-feed - Spoon-fed", name: "spoon-feed - spoon-fed /ˈspuːn.fiːd/ - /ˈspuːn.fed/", w: "", c: "verb", catName: "VERB", config: "Món ăn bằng thìa, chiều chuộng quá mức", state: "Irregular", disc: ""},
    {n: 259, s: "Spread - Spread", name: "spread - spread /spred/ - /spred/", w: "", c: "verb", catName: "VERB", config: "Lan truyền, trải ra", state: "Irregular", disc: ""},
    {n: 260, s: "Spring - Sprang", name: "spring - sprang /sprɪŋ/ - /spræŋ/", w: "", c: "verb", catName: "VERB", config: "Nhảy vọt, bật lên", state: "Irregular", disc: ""},
    {n: 261, s: "Stand - Stood", name: "stand - stood /stænd/ - /stʊd/", w: "", c: "verb", catName: "VERB", config: "Đứng", state: "Irregular", disc: ""},
    {n: 262, s: "Stave - Staved/Stove", name: "stave - staved /steɪv/ - /steɪvd/", w: "", c: "verb", catName: "VERB", config: "Thủng, phòng ngừa", state: "Irregular", disc: ""},
    {n: 263, s: "Steal - Stole", name: "steal - stole /stiːl/ - /stoʊl/", w: "", c: "verb", catName: "VERB", config: "Ăn trộm, ăn cắp", state: "Irregular", disc: ""},
    {n: 264, s: "Stick - Stuck", name: "stick - stuck /stɪk/ - /stʌk/", w: "", c: "verb", catName: "VERB", config: "Dán, dính, kẹt lại", state: "Irregular", disc: ""},
    {n: 265, s: "Sting - Stung", name: "sting - stung /stɪŋ/ - /stʌŋ/", w: "", c: "verb", catName: "VERB", config: "Châm, đốt, chích", state: "Irregular", disc: ""},
    {n: 266, s: "Stink - Stank", name: "stink - stank /stɪŋk/ - /stæŋk/", w: "", c: "verb", catName: "VERB", config: "Bốc mùi hôi", state: "Irregular", disc: ""},
    {n: 267, s: "Strew - Strewed", name: "strew - strewed /struː/ - /struːd/", w: "", c: "verb", catName: "VERB", config: "Rắc, rải", state: "Irregular", disc: ""},
    {n: 268, s: "Stride - Strode", name: "stride - strode /straɪd/ - /stroʊd/", w: "", c: "verb", catName: "VERB", config: "Bước dài", state: "Irregular", disc: ""},
    {n: 269, s: "Strike - Struck", name: "strike - struck /straɪk/ - /strʌk/", w: "", c: "verb", catName: "VERB", config: "Đánh, đình công", state: "Irregular", disc: ""},
    {n: 270, s: "String - Strung", name: "string - strung /strɪŋ/ - /strʌŋ/", w: "", c: "verb", catName: "VERB", config: "Xỏ dây, lên dây đàn", state: "Irregular", disc: ""},
    {n: 271, s: "Strip - Stripped/Stript", name: "strip - stripped /strɪp/ - /strɪpt/", w: "", c: "verb", catName: "VERB", config: "Lột đồ, tước bỏ", state: "Irregular", disc: ""},
    {n: 272, s: "Strive - Strove", name: "strive - strove /straɪv/ - /stroʊv/", w: "", c: "verb", catName: "VERB", config: "Cố gắng, nỗ lực", state: "Irregular", disc: ""},
    {n: 273, s: "Sublet - Sublet", name: "sublet - sublet /ˌsʌbˈlet/ - /ˌsʌbˈlet/", w: "", c: "verb", catName: "VERB", config: "Cho thuê lại", state: "Irregular", disc: ""},
    {n: 274, s: "Sunburn - Sunburnt", name: "sunburn - sunburnt /ˈsʌn.bɜːrn/ - /ˈsʌn.bɜːrnt/", w: "", c: "verb", catName: "VERB", config: "Cháy nắng", state: "Irregular", disc: ""},
    {n: 275, s: "Swear - Swore", name: "swear - swore /swer/ - /swɔːr/", w: "", c: "verb", catName: "VERB", config: "Thề, chửi thề", state: "Irregular", disc: ""},
    {n: 276, s: "Sweat - Sweat/Sweated", name: "sweat - sweat /swet/ - /swet/", w: "", c: "verb", catName: "VERB", config: "Đổ mồ hôi", state: "Irregular", disc: ""},
    {n: 277, s: "Sweep - Swept", name: "sweep - swept /swiːp/ - /swept/", w: "", c: "verb", catName: "VERB", config: "Quét nhà", state: "Irregular", disc: ""},
    {n: 278, s: "Swell - Swelled", name: "swell - swelled /swel/ - /sweld/", w: "", c: "verb", catName: "VERB", config: "Sưng lên, phồng lên", state: "Irregular", disc: ""},
    {n: 279, s: "Swim - Swam", name: "swim - swam /swɪm/ - /swæm/", w: "", c: "verb", catName: "VERB", config: "Bơi lội", state: "Irregular", disc: ""},
    {n: 280, s: "Swing - Swung", name: "swing - swung /swɪŋ/ - /swʌŋ/", w: "", c: "verb", catName: "VERB", config: "Đung đưa, đu quay", state: "Irregular", disc: ""},
    {n: 281, s: "Take - Took", name: "take - took /teɪk/ - /tʊk/", w: "", c: "verb", catName: "VERB", config: "Cầm, lấy, dẫn đi", state: "Irregular", disc: ""},
    {n: 282, s: "Teach - Taught", name: "teach - taught /tiːtʃ/ - /tɔːt/", w: "", c: "verb", catName: "VERB", config: "Dạy học", state: "Irregular", disc: ""},
    {n: 283, s: "Tear - Tore", name: "tear - tore /ter/ - /tɔːr/", w: "", c: "verb", catName: "VERB", config: "Xé rách", state: "Irregular", disc: ""},
    {n: 284, s: "Telecast - Telecast", name: "telecast - telecast /ˈtel.ə.kæst/ - /ˈtel.ə.kæst/", w: "", c: "verb", catName: "VERB", config: "Phát sóng truyền hình", state: "Irregular", disc: ""},
    {n: 285, s: "Tell - Told", name: "tell - told /tel/ - /toʊld/", w: "", c: "verb", catName: "VERB", config: "Kể, bảo, nói với ai", state: "Irregular", disc: ""},
    {n: 286, s: "Test-drive - Test-drove", name: "test-drive - test-drove /ˈtest.draɪv/ - /ˈtest.droʊv/", w: "", c: "verb", catName: "VERB", config: "Lái thử xe", state: "Irregular", disc: ""},
    {n: 287, s: "Test-fly - Test-flew", name: "test-fly - test-flew /ˈtest.flaɪ/ - /ˈtest.fluː/", w: "", c: "verb", catName: "VERB", config: "Bay thử", state: "Irregular", disc: ""},
    {n: 288, s: "Think - Thought", name: "think - thought /θɪŋk/ - /θɔːt/", w: "", c: "verb", catName: "VERB", config: "Suy nghĩ", state: "Irregular", disc: ""},
    {n: 289, s: "Thrive - Throve/Thrived", name: "thrive - throve /θraɪv/ - /θroʊv/", w: "", c: "verb", catName: "VERB", config: "Phát triển mạnh, thịnh vượng", state: "Irregular", disc: ""},
    {n: 290, s: "Throw - Threw", name: "throw - threw /θroʊ/ - /θruː/", w: "", c: "verb", catName: "VERB", config: "Ném, quăng", state: "Irregular", disc: ""},
    {n: 291, s: "Thrust - Thrust", name: "thrust - thrust /θrʌst/ - /θrʌst/", w: "", c: "verb", catName: "VERB", config: "Đẩy mạnh, ấn mạnh", state: "Irregular", disc: ""},
    {n: 292, s: "Tread - Trod", name: "tread - trod /tred/ - /trɑːd/", w: "", c: "verb", catName: "VERB", config: "Giẫm lên, dẫm chân", state: "Irregular", disc: ""},
    {n: 293, s: "Unbend - Unbent", name: "unbend - unbent /ʌnˈbend/ - /ʌnˈbent/", w: "", c: "verb", catName: "VERB", config: "Làm thẳng lại, thư giãn", state: "Irregular", disc: ""},
    {n: 294, s: "Unbind - Unbound", name: "unbind - unbound /ʌnˈbaɪnd/ - /ʌnˈbaʊnd/", w: "", c: "verb", catName: "VERB", config: "Cởi trói, tháo gỡ", state: "Irregular", disc: ""},
    {n: 295, s: "Unclothe - Unclad/Unclothed", name: "unclothe - unclad /ʌnˈkloʊð/ - /ʌnˈklæd/", w: "", c: "verb", catName: "VERB", config: "Cởi quần áo", state: "Irregular", disc: ""},
    {n: 296, s: "Underbuy - Underbought", name: "underbuy - underbought /ˌʌn.dɚˈbaɪ/ - /ˌʌn.dɚˈbɔːt/", w: "", c: "verb", catName: "VERB", config: "Mua ít hơn cần thiết", state: "Irregular", disc: ""},
    {n: 297, s: "Undercut - Undercut", name: "undercut - undercut /ˌʌn.dɚˈkʌt/ - /ˌʌn.dɚˈkʌt/", w: "", c: "verb", catName: "VERB", config: "Bán giá thấp hơn đối thủ", state: "Irregular", disc: ""},
    {n: 298, s: "Underfeed - Underfed", name: "underfeed - underfed /ˌʌn.dɚˈfiːd/ - /ˌʌn.dɚˈfed/", w: "", c: "verb", catName: "VERB", config: "Cho ăn thiếu thiếu thốn", state: "Irregular", disc: ""},
    {n: 299, s: "Undergo - Underwent", name: "undergo - underwent /ˌʌn.dɚˈɡoʊ/ - /ˌʌn.dɚˈwent/", w: "", c: "verb", catName: "VERB", config: "Trải qua, chịu đựng", state: "Irregular", disc: ""},
    {n: 300, s: "Underlay - Underlaid", name: "underlay - underlaid /ˌʌn.dɚˈleɪ/ - /ˌʌn.dɚˈleɪd/", w: "", c: "verb", catName: "VERB", config: "Lót ở dưới", state: "Irregular", disc: ""},
    {n: 301, s: "Underlet - Underlet", name: "underlet - underlet /ˌʌn.dɚˈlet/ - /ˌʌn.dɚˈlet/", w: "", c: "verb", catName: "VERB", config: "Cho thuê lại giá rẻ", state: "Irregular", disc: ""},
    {n: 302, s: "Underlie - Underlay", name: "underlie - underlay /ˌʌn.dɚˈlaɪ/ - /ˌʌn.dɚˈleɪ/", w: "", c: "verb", catName: "VERB", config: "Nằm dưới, làm nền tảng", state: "Irregular", disc: ""},
    {n: 303, s: "Underpay - Underpaid", name: "underpay - underpaid /ˌʌn.dɚˈpeɪ/ - /ˌʌn.dɚˈpeɪd/", w: "", c: "verb", catName: "VERB", config: "Trả lương thấp", state: "Irregular", disc: ""},
    {n: 304, s: "Undersell - Undersold", name: "undersell - undersold /ˌʌn.dɚˈsel/ - /ˌʌn.dɚˈsoʊld/", w: "", c: "verb", catName: "VERB", config: "Bán rẻ hơn", state: "Irregular", disc: ""},
    {n: 305, s: "Undershoot - Undershot", name: "undershoot - undershot /ˌʌn.dɚˈʃuːt/ - /ˌʌn.dɚˈʃɑːt/", w: "", c: "verb", catName: "VERB", config: "Bắn chưa tới target", state: "Irregular", disc: ""},
    {n: 306, s: "Understand - Understood", name: "understand - understood /ˌʌndərˈstænd/ - /ˌʌndərˈstʊd/", w: "", c: "verb", catName: "VERB", config: "Hiểu, thấu hiểu", state: "Irregular", disc: ""},
    {n: 307, s: "Undertake - Undertook", name: "undertake - undertook /ˌʌn.dɚˈteɪk/ - /ˌʌn.dɚˈtʊk/", w: "", c: "verb", catName: "VERB", config: "Đảm nhận, gánh vác", state: "Irregular", disc: ""},
    {n: 308, s: "Underwrite - Underwrote", name: "underwrite - underwrote /ˌʌn.dɚˈraɪt/ - /ˌʌn.dɚˈroʊt/", w: "", c: "verb", catName: "VERB", config: "Bảo hiểm, cam kết tài trợ", state: "Irregular", disc: ""},
    {n: 309, s: "Undo - Undid", name: "undo - undid /ʌnˈduː/ - /ʌnˈdɪd/", w: "", c: "verb", catName: "VERB", config: "Tháo, hủy bỏ hành động", state: "Irregular", disc: ""},
    {n: 310, s: "Unfold - Unfolded", name: "unfold - unfolded /ʌnˈfoʊld/ - /ʌnˈfoʊldɪd/", w: "", c: "verb", catName: "VERB", config: "Mở ra, bộc lộ", state: "Irregular", disc: ""},
    {n: 311, s: "Unfreeze - Unfroze", name: "unfreeze - unfroze /ʌnˈfriːz/ - /ʌnˈfroʊz/", w: "", c: "verb", catName: "VERB", config: "Rã đông, làm tan băng", state: "Irregular", disc: ""},
    {n: 312, s: "Unhang - Unhung", name: "unhang - unhung /ʌnˈhæŋ/ - /ʌnˈhʌŋ/", w: "", c: "verb", catName: "VERB", config: "Tháo xuống", state: "Irregular", disc: ""},
    {n: 313, s: "Unhide - Unhid", name: "unhide - unhid /ʌnˈhaɪd/ - /ʌnˈhɪd/", w: "", c: "verb", catName: "VERB", config: "Bỏ ẩn, hiện ra", state: "Irregular", disc: ""},
    {n: 314, s: "Unknit - Unknit", name: "unknit - unknit /ʌnˈnɪt/ - /ʌnˈnɪt/", w: "", c: "verb", catName: "VERB", config: "Tháo len", state: "Irregular", disc: ""},
    {n: 315, s: "Unlearn - Unlearnt/Unlearned", name: "unlearn - unlearnt /ʌnˈlɜːrn/ - /ʌnˈlɜːrnt/", w: "", c: "verb", catName: "VERB", config: "Gạt bỏ thói quen cũ", state: "Irregular", disc: ""},
    {n: 316, s: "Unmake - Unmade", name: "unmake - unmade /ʌnˈmeɪk/ - /ʌnˈmeɪd/", w: "", c: "verb", catName: "VERB", config: "Phá hủy, hủy hoại", state: "Irregular", disc: ""},
    {n: 317, s: "Unsay - Unsaid", name: "unsay - unsaid /ʌnˈseɪ/ - /ʌnˈsed/", w: "", c: "verb", catName: "VERB", config: "Rút lại lời nói", state: "Irregular", disc: ""},
    {n: 318, s: "Unsew - Unsewed", name: "unsew - unsewed /ʌnˈsoʊ/ - /ʌnˈsoʊd/", w: "", c: "verb", catName: "VERB", config: "Tháo đường chỉ may", state: "Irregular", disc: ""},
    {n: 319, s: "Unsling - Unslung", name: "unsling - unslung /ʌnˈslɪŋ/ - /ʌnˈslʌŋ/", w: "", c: "verb", catName: "VERB", config: "Cởi dây đeo", state: "Irregular", disc: ""},
    {n: 320, s: "Unspin - Unspun", name: "unspin - unspun /ʌnˈspɪn/ - /ʌnˈspʌn/", w: "", c: "verb", catName: "VERB", config: "Tháo xoắn", state: "Irregular", disc: ""},
    {n: 321, s: "Stick - Unstuck", name: "unstick - unstuck /ʌnˈstɪk/ - /ʌnˈstʌk/", w: "", c: "verb", catName: "VERB", config: "Gỡ dính, gỡ kẹt", state: "Irregular", disc: ""},
    {n: 322, s: "Unstring - Unstrung", name: "unstring - unstrung /ʌnˈstrɪŋ/ - /ʌnˈstrʌŋ/", w: "", c: "verb", catName: "VERB", config: "Tháo dây", state: "Irregular", disc: ""},
    {n: 323, s: "Unweave - Unwove", name: "unweave - unwove /ʌnˈwiːv/ - /ʌnˈwoʊv/", w: "", c: "verb", catName: "VERB", config: "Tháo dệt", state: "Irregular", disc: ""},
    {n: 324, s: "Unwind - Unwound", name: "unwind - unwound /ʌnˈwaɪnd/ - /ʌnˈwaʊnd/", w: "", c: "verb", catName: "VERB", config: "Tháo cuộn, thư giãn", state: "Irregular", disc: ""},
    {n: 325, s: "Upbuild - Upbuilt", name: "upbuild - upbuilt /ʌpˈbɪld/ - /ʌpˈbɪlt/", w: "", c: "verb", catName: "VERB", config: "Xây dựng phát triển", state: "Irregular", disc: ""},
    {n: 326, s: "Uphold - Upheld", name: "uphold - upheld /ʌpˈhoʊld/ - /ʌpˈheld/", w: "", c: "verb", catName: "VERB", config: "Ủng hộ, duy trì", state: "Irregular", disc: ""},
    {n: 327, s: "Uprise - Uprose", name: "uprise - uprose /ʌpˈraɪz/ - /ʌpˈroʊz/", w: "", c: "verb", catName: "VERB", config: "Trỗi dậy, mọc lên", state: "Irregular", disc: ""},
    {n: 328, s: "Upset - Upset", name: "upset - upset /ʌpˈset/ - /ʌpˈset/", w: "", c: "verb", catName: "VERB", config: "Làm xáo trộn, làm tức giận", state: "Irregular", disc: ""},
    {n: 329, s: "Upspring - Upsprang", name: "upspring - upsprang /ʌpˈsprɪŋ/ - /ʌpˈspræŋ/", w: "", c: "verb", catName: "VERB", config: "Mọc lên nhanh chóng", state: "Irregular", disc: ""},
    {n: 330, s: "Upsweep - Upswept", name: "upsweep - upswept /ʌpˈswiːp/ - /ʌpˈswept/", w: "", c: "verb", catName: "VERB", config: "Quét ngược lên", state: "Irregular", disc: ""},
    {n: 331, s: "Upwell - Upwelled", name: "upwell - upwelled /ʌpˈwel/ - /ʌpˈweld/", w: "", c: "verb", catName: "VERB", config: "Phun trào, dâng lên", state: "Irregular", disc: ""},
    {n: 332, s: "Wake - Woke", name: "wake - woke /weɪk/ - /woʊk/", w: "", c: "verb", catName: "VERB", config: "Thức dậy", state: "Irregular", disc: ""},
    {n: 333, s: "Waylay - Waylaid", name: "waylay - waylaid /ˌweɪˈleɪ/ - /ˌweɪˈleɪd/", w: "", c: "verb", catName: "VERB", config: "Phục kích, mai phục", state: "Irregular", disc: ""},
    {n: 334, s: "Wear - Wore", name: "wear - wore /wer/ - /wɔːr/", w: "", c: "verb", catName: "VERB", config: "Mặc áo, đeo kính", state: "Irregular", disc: ""},
    {n: 335, s: "Weave - Wove", name: "weave - wove /wiːv/ - /woʊv/", w: "", c: "verb", catName: "VERB", config: "Dệt vải", state: "Irregular", disc: ""},
    {n: 336, s: "Wed - Wed/Wedded", name: "wed - wed /wed/ - /wed/", w: "", c: "verb", catName: "VERB", config: "Kết hôn", state: "Irregular", disc: ""},
    {n: 337, s: "Weep - Wept", name: "weep - wept /wiːp/ - /wept/", w: "", c: "verb", catName: "VERB", config: "Khóc lóc", state: "Irregular", disc: ""},
    {n: 338, s: "Wet - Wet/Wetted", name: "wet - wet /wet/ - /wet/", w: "", c: "verb", catName: "VERB", config: "Làm ướt", state: "Irregular", disc: ""},
    {n: 339, s: "Whet - Whetted", name: "whet - whetted /wet/ - /wetɪd/", w: "", c: "verb", catName: "VERB", config: "Mài sắc, kích thích", state: "Irregular", disc: ""},
    {n: 340, s: "Win - Won", name: "win - won /wɪn/ - /wʌn/", w: "", c: "verb", catName: "VERB", config: "Chiến thắng", state: "Irregular", disc: ""},
    {n: 341, s: "Wind - Wound", name: "wind - wound /waɪnd/ - /waʊnd/", w: "", c: "verb", catName: "VERB", config: "Cuộn lại, lên dây cót", state: "Irregular", disc: ""},
    {n: 342, s: "Withdraw - Withdrew", name: "withdraw - withdrew /wɪðˈdrɔː/ - /wɪðˈdruː/", w: "", c: "verb", catName: "VERB", config: "Rút tiền, rút lui", state: "Irregular", disc: ""},
    {n: 343, s: "Withhold - Withheld", name: "withhold - withheld /wɪðˈhoʊld/ - /wɪðˈheld/", w: "", c: "verb", catName: "VERB", config: "Giữ lại, giấu đi", state: "Irregular", disc: ""},
    {n: 344, s: "Withstand - Withstood", name: "withstand - withstood /wɪðˈstænd/ - /wɪðˈstʊd/", w: "", c: "verb", catName: "VERB", config: "Chịu đựng, chống lại", state: "Irregular", disc: ""},
    {n: 345, s: "Wring - Wrung", name: "wring - wrung /rɪŋ/ - /rʌŋ/", w: "", c: "verb", catName: "VERB", config: "Vắt nước, vặn quẹo", state: "Irregular", disc: ""},
    {n: 346, s: "Write - Wrote", name: "write - wrote /raɪt/ - /roʊt/", w: "", c: "verb", catName: "VERB", config: "Viết", state: "Irregular", disc: ""},
    {n: 347, s: "Zinc - Zincked/Zinced", name: "zinc - zincked /zɪŋk/ - /zɪŋkt/", w: "", c: "verb", catName: "VERB", config: "Mạ kẽm", state: "Irregular", disc: ""},
    {n: 348, s: "Backbite - Backbit", name: "backbite - backbit /ˈbæk.baɪt/ - /ˈbæk.bɪt/", w: "", c: "verb", catName: "VERB", config: "Nói xấu sau lưng", state: "Irregular", disc: ""},
    {n: 349, s: "Bellyache - Bellyached", name: "bellyache - bellyached /ˈbel.i.eɪk/ - /ˈbel.i.eɪkt/", w: "", c: "verb", catName: "VERB", config: "Phàn nàn, cào nhàu", state: "Irregular", disc: ""},
    {n: 350, s: "Bespatter - Bespattered", name: "bespatter - bespattered /bɪˈspæt.ɚ/ - /bɪˈspæt.ɚd/", w: "", c: "verb", catName: "VERB", config: "Bắn bẩn, làm dơ", state: "Irregular", disc: ""},
    {n: 351, s: "Bestrew - Bestrewed", name: "bestrew - bestrewed /bɪˈstruː/ - /bɪˈstruːd/", w: "", c: "verb", catName: "VERB", config: "Rải rác khắp", state: "Irregular", disc: ""},
    {n: 352, s: "Bottle-feed - Bottle-fed", name: "bottle-feed - bottle-fed /ˈbɑː.t̬əl.fiːd/ - /ˈbɑː.t̬əl.fed/", w: "", c: "verb", catName: "VERB", config: "Cho bú bình", state: "Irregular", disc: ""},
    {n: 353, s: "Ghostwrite - Ghostwrote", name: "ghostwrite - ghostwrote /ˈɡoʊst.raɪt/ - /ˈɡoʊst.roʊt/", w: "", c: "verb", catName: "VERB", config: "Viết thuê", state: "Irregular", disc: ""},
    {n: 354, s: "Force-feed - Force-fed", name: "force-feed - force-fed /ˈfɔːrs.fiːd/ - /ˈfɔːrs.fed/", w: "", c: "verb", catName: "VERB", config: "Ép ăn", state: "Irregular", disc: ""},
    {n: 355, s: "Housebreak - Housebroke", name: "housebreak - housebroke /ˈhaʊs.breɪk/ - /ˈhaʊs.broʊk/", w: "", c: "verb", catName: "VERB", config: "Dạy đi vệ sinh đúng chỗ", state: "Irregular", disc: ""},
    {n: 356, s: "Pencil-push - Pencil-pushed", name: "pencil-push - pencil-pushed /ˈpen.səl.pʊʃ/ - /ˈpen.səl.pʊʃt/", w: "", c: "verb", catName: "VERB", config: "Làm việc bàn giấy", state: "Irregular", disc: ""},
    {n: 357, s: "Skywrite - Skywrote", name: "skywrite - skywrote /ˈskaɪ.raɪt/ - /ˈskaɪ.roʊt/", w: "", c: "verb", catName: "VERB", config: "Viết chữ bằng khói máy bay", state: "Irregular", disc: ""},
    {n: 358, s: "Typewrite - Typewrote", name: "typewrite - typewrote /ˈtaɪp.raɪt/ - /ˈtaɪp.roʊt/", w: "", c: "verb", catName: "VERB", config: "Đánh máy chữ", state: "Irregular", disc: ""},
    {n: 359, s: "Wiretap - Wiretapped", name: "wiretap - wiretapped /ˈwaɪɚ.tæp/ - /ˈwaɪɚ.tæpt/", w: "", c: "verb", catName: "VERB", config: "Nghe lén điện thoại", state: "Irregular", disc: ""},
    {n: 360, s: "Quick-freeze - Quick-froze", name: "quick-freeze - quick-froze /ˈkwɪk.friːz/ - /ˈkwɪk.froʊz/", w: "", c: "verb", catName: "VERB", config: "Cấp đông nhanh", state: "Irregular", disc: ""}
];

let currentIndex = 0;
const total = elements.length;
let autoPlayTimer = null;
let currentSpeed = 5000; // Updated default speed to 5s

// DOM Element Registry 
const cardContainer = document.getElementById('card-container');
const card = document.getElementById('card');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const playHub = document.getElementById('play-hub');
const mainPlayBtn = document.getElementById('main-play-btn');
const speedButtons = document.querySelectorAll('.speed-options button');
const searchInput = document.getElementById('search-input');

const fNumber = document.getElementById('f-number');
const fSymbol = document.getElementById('f-symbol');
const fName = document.getElementById('f-name');
const fWeight = document.getElementById('f-weight');

const bCategory = document.getElementById('b-category');
const bConfig = document.getElementById('b-config');
const bState = document.getElementById('b-state');
const bDiscoverer = document.getElementById('b-discoverer');
const progressText = document.getElementById('progress-text');

// Text to Speech Engine Controller 
function speakElement(item) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel(); 
        
        // Formats string to pronounce both words with a natural delay/pause
        const textToRead = item.s
            .replace(/\//g, ' or ')  // Converts "Was/Were" -> "Was or Were"
            .replace(' - ', ', ');   // Replaces hyphen with a pause between V1 and V2
            
        const utterance = new SpeechSynthesisUtterance(textToRead);
        utterance.lang = 'en-US'; 
        utterance.rate = 0.9; 
        window.speechSynthesis.speak(utterance);
    }
}

// Active Interface Component Builder
function updateCard(index, triggerVoice = false) {
    const item = elements[index];
    
    // Dynamic Translation Locale Catch
    const currentLang = localStorage.getItem("pageLang") || "en";
    if(currentLang === "vi") {
         progressText.innerText = `Từ ${item.n} trên ${total}`;
    } else {
         progressText.innerText = `Word ${item.n} of ${total}`;
    }

    // Front View updates
    fNumber.innerText = item.n;
    fSymbol.innerText = item.s;
    fName.innerText = item.name;
    fWeight.innerText = item.w;

    // Back View updates
    bCategory.innerText = item.catName;
    bConfig.innerText = item.config;
    bState.innerText = item.state;
    bDiscoverer.innerText = item.disc;

    // Execute speech synthesis audio
    if (triggerVoice) {
        speakElement(item);
    }
}

// Flashcard Real-Time Search Handler
searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (!query) return;

    const foundIndex = elements.findIndex(item => 
        item.s.toLowerCase().includes(query) || 
        item.name.toLowerCase().includes(query) || 
        item.config.toLowerCase().includes(query)
    );

    if (foundIndex !== -1) {
        currentIndex = foundIndex;
        card.classList.remove('flipped'); 
        updateCard(currentIndex, false); 
    }
});

searchInput.addEventListener('click', (e) => {
    e.stopPropagation();
});

// Flashcard 3D Perspective Flip Toggle 
cardContainer.addEventListener('click', () => {
    card.classList.toggle('flipped');
});

// Autoplay Loop Sequence Task
function startAutoPlay() {
    autoPlayTimer = setInterval(() => {
        if (card.classList.contains('flipped')) {
            card.classList.remove('flipped');
            setTimeout(() => {
                currentIndex = (currentIndex + 1) % total;
                updateCard(currentIndex, true);
            }, 250);
        } else {
            currentIndex = (currentIndex + 1) % total;
            updateCard(currentIndex, true);
        }
    }, currentSpeed);
}

// Play Hub Button Action Handling
mainPlayBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (autoPlayTimer) {
        clearInterval(autoPlayTimer);
        autoPlayTimer = null;
        playHub.classList.remove('expanded');
        mainPlayBtn.innerText = "Play";
        speedButtons.forEach(btn => btn.classList.remove('active-speed'));
    } else {
        playHub.classList.add('expanded');
        mainPlayBtn.innerText = "Pause";
        // Defaulting active speed button to 5s (5000ms)
        const defaultSpeedBtn = document.querySelector('.speed-options button[data-speed="5000"]');
        if (defaultSpeedBtn) defaultSpeedBtn.classList.add('active-speed');
        currentSpeed = 5000;
        startAutoPlay();
        speakElement(elements[currentIndex]);
    }
});

// Play Hub Speed Choice Switch Hooks (Updated to 2s / 5s / 10s)
speedButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        speedButtons.forEach(btn => btn.classList.remove('active-speed'));
        button.classList.add('active-speed');
        currentSpeed = parseInt(button.getAttribute('data-speed'));
        
        if (autoPlayTimer) {
            clearInterval(autoPlayTimer);
            startAutoPlay();
        }
    });
});

// Next Navigation Controller
nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (autoPlayTimer) { clearInterval(autoPlayTimer); autoPlayTimer = null; }
    playHub.classList.remove('expanded');
    mainPlayBtn.innerText = "Play";
    speedButtons.forEach(btn => btn.classList.remove('active-speed'));

    if (card.classList.contains('flipped')) {
        card.classList.remove('flipped');
        setTimeout(() => { 
            currentIndex = (currentIndex + 1) % total; 
            updateCard(currentIndex, true); 
        }, 250);
    } else {
        currentIndex = (currentIndex + 1) % total;
        updateCard(currentIndex, true);
    }
});

// Previous Navigation Controller
prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (autoPlayTimer) { clearInterval(autoPlayTimer); autoPlayTimer = null; }
    playHub.classList.remove('expanded');
    mainPlayBtn.innerText = "Play";
    speedButtons.forEach(btn => btn.classList.remove('active-speed'));

    if (card.classList.contains('flipped')) {
        card.classList.remove('flipped');
        setTimeout(() => { 
            currentIndex = (currentIndex - 1 + total) % total; 
            updateCard(currentIndex, true); 
        }, 250);
    } else {
        currentIndex = (currentIndex - 1 + total) % total;
        updateCard(currentIndex, true);
    }
});

// Global user out-of-bounds reset catch
document.addEventListener('click', (e) => {
    if (!e.target.closest('.controls') && !e.target.closest('#card-container') && !e.target.closest('.search-container')) {
        if (autoPlayTimer) {
            clearInterval(autoPlayTimer);
            autoPlayTimer = null;
            playHub.classList.remove('expanded');
            mainPlayBtn.innerText = "Play";
            speedButtons.forEach(btn => btn.classList.remove('active-speed'));
        }
    }
});

// Initial Setup Launch View Call 
updateCard(currentIndex, false);
