import React from "react";
import "./rightPane.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function RightPane() {
  return (
    <div className="rightPaneBox">
      <div className="rightPaneContainer">
        <div className="adContainer">
          <div className="addHeader">
            <span className="sponcered">
              <b> Ad:</b>{" "}
            </span>
            <span className="otherIcon">
              <MoreVertIcon />
            </span>
          </div>

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzGNJd1jeD5vwfYAPEVgMJEL25VjfHtIlr1Q&s"
            alt="error"
            className="adImg"
          />
          <span className="addText">
            order your meal from us we can give you more offers! Come tast your
            meals..
          </span>
        </div>
        <div className="birthDayContainer">
          <img
            src="https://thumbs.dreamstime.com/z/vector-happy-birthday-card-cute-cake-sweets-109379997.jpg"
            alt="error"
            className="birthdayImage"
          />
          <span className="birthdayText">
            <strong>kavindu kavindu</strong> and <strong>two others</strong>{" "}
            having birthday today!{" "}
          </span>
        </div>

        <div className="friendList">
          <li className="onlineFriend">
            <div className="onlineFriendImgContainer">
              <img
                src=" data:image/jpeg;base64,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"
                alt="error"
                className="onlineFrindImg"
              />
              <span className="onlineState"></span>
              <span className="onlineFriendName"> Rohan Gunaratna</span>
            </div>
          </li>
          <li className="onlineFriend">
            <div className="onlineFriendImgContainer">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoSEznJhm79eRcFl9csNirhTq6drn3Wh5Ro45h3eRYuN3UNjgRt_qo8NKh0DfahaLE7Co&usqp=CAU"
                alt="error"
                className="onlineFrindImg"
              />
              <span className="onlineState"></span>
              <span className="onlineFriendName">Nirmal Ranjith Dewasiri</span>
            </div>
          </li>
          <li className="onlineFriend">
            <div className="onlineFriendImgContainer">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqlIsjUKMRJpvNQ_1MDlKW4G9aRu1KuW6LTg&s"
                alt="error"
                className="onlineFrindImg"
              />
              <span className="onlineState"></span>
              <span className="onlineFriendName"> G. L. Perera</span>
            </div>
          </li>
          <li className="onlineFriend">
            <div className="onlineFriendImgContainer">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwJfz2yScu1HUMsQdcIIcyTsnZFR-z48499w&s"
                alt="error"
                className="onlineFrindImg"
              />
              <span className="onlineState"></span>
              <span className="onlineFriendName">Kumar Siriwardena</span>
            </div>
          </li>
          <li className="onlineFriend">
            <div className="onlineFriendImgContainer">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQou0GezgFiP93UIrtKj8-5LBcKjG-VZPjcHg&s"
                alt="error"
                className="onlineFrindImg"
              />
              <span className="onlineState"></span>
              <span className="onlineFriendName"> Walpola Rahula</span>
            </div>
          </li>
          <li className="onlineFriend">
            <div className="onlineFriendImgContainer">
              <img
                src=" https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29ufGVufDB8fDB8fHww"
                alt="error"
                className="onlineFrindImg"
              />
              <span className="onlineState"></span>
              <span className="onlineFriendName">Sam Karunaratne</span>
            </div>
          </li>
          <li className="onlineFriend">
            <div className="onlineFriendImgContainer">
              <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSExIVFRUVFxUVFRUVFxUVFRUVFRUWGBUVFRUYHSggGBolHRUWITEhJikrLi4uGB8zODMtNygtLisBCgoKDg0OGhAQGi0fHSUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIARMAtwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAAECAwQGB//EADoQAAEDAgQEAwcCBAcBAQAAAAEAAhEDIQQSMUEFUWFxBiKBEzJCkaGx8MHhFCNS8QczYnKCwtGyFf/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACIRAQEBAQACAwEAAgMAAAAAAAABEQIDIRIxQVEEEyIyYf/aAAwDAQACEQMRAD8A3NKkFRScrwsGpwEk4CTkUkU0Jyq8ymqi0FSCozKxrk9Kw7gqsqsLkF4p4lw9E5c/tH3inT87rc4sPUqpNIaZqrsy834j43rkE0xTpXLQ10vq2i7mxDex5HpIXGeJcS8n+bUjYlxa6J3FMtafUFa8xNewVLrC7FU2+9UYO7mj7leN4nitd4h9d5A0BJjWfVVsE6u66H7Ks1Ovb6NRrvdc13+0g/ZaWLwUPDTmaYI0IkH7I1wnxli6JE1DUb/TU89ujj5h8/RZ3jFTp7MwqeZc94c8TUcUIb5KgEupkyepafiH1G4CN5llfS14UwqWOVzUiqTQphqQTEpgoSUC9JBgbAtDVCIUmFEOrQqyrAmeE/xMVvKgrHBRhSuGIWXH41lFhe8wB8yeQG61OMXOi5XiXCa+NeXFwpUgB7PM5uepmuMjQdSGkyYFwbo9fov/AIDY7i+Ixhdld7Gg2MxkwTM5MzR5nxfKIsDOxQHiWNYwgYcZIGU1L+0dYA3nyDaGxa10XxWIzhwgMp0yWtYIytDSfKY1OpJiSVzGLaSdI/OS2jKqfacykHJNw5Kl7Ej8laJVu9Fa020+RKi4n8CQcmSLwmamLlJglRTacPXcwtc1xa5pkFtiDzXq3hHxIMUzK+BWaPMBo8f1t+kjaRsV5CVt4Tjn0arajDDmmRyPMHoRI9VHU1XNe7MK0sKGcMxja1NlVnu1Ghw6TqD1Bt3CJU1nF1eEyYFIFAistSVqSXsAlQpqZTuClTama5qZ4UgE6opFJCirnFVvYopqK1D2gcC0uaBJA+N0jLTgEG832jup4ihVnM6o4Cn7N1YsHmqVGQfZsGoZE2J1cboxwmhYE3Pma2TaPeJHK9v+C0YUNBIEQf5gy6HM5wJHSWz6rHq10cSPIeOcJdSqVHBhbSqOzUwZtmElruTwZJAmAQuTxIg3j6r2rjmAphhNVzqhdU8g+IS1wikPdbaJ2MXleceJ/Dj6YdUF2yLtvGeS1rmjQ5YPqF0ePyb9sPJ489xyZePwz90vbdVQ/VRK31zpOekohJAKVIOUE6QWB3NWMd8xp1WeVqwGEqVHZKbHOdyAJgczGgSpx6x/h3/kFodmE+0aP6Q9zg5vKzmOP/LaQuwYuQ8JVqdJzaGactNlKbkGp/mEt5sOcweQ6SevCyt9tbE4SATBym0pEeEk6SD0CaVe0KACszJwJtScUzXKNUoNAlPmTBiVSGgkmAASTyA1Ugfogimx1ohocTAa1ojXuI576rPgsOQ9z7wWNbLrFxBcZy/CPNACItY0gaEDTl0UcTiGNHmIHUkBYW66pzgRjNUHxeEz1nVqj3ANYQ1rGgx5IkNPvOm/oAiuI4lhp/zWfOVnquBEtII5i4U+40yVwGK4HSxDHYitS9g2mWMc6lDYbu5zJMu2MD4hyK50+E3PBfQrU3tyuqNBOV5aH5WjK7ckEXi7SOU+hce4WKzHNBImCQDZxbMEjeJK4TxFi6hZQo1GD2eHkQPKagzT5jtYRbvqurx965PL4894E1/DWLYMxoPjMGyBmkkZhGWbQNdFjfw+sImk8ZgCJabhxLRtuQR6LrG+JKDsex/8ylhpDnta5wmqWQajm36C2zZUcF4lBdiC/EYhrWsH8LDgXSypmaHOIu4i0kXEytdrDI5inwmuS4Ci8luafKfhOV3eDay1s8MYotzmkWNlwzPIYBlAJJLotB16FFsb4inDUntxNY13uqiuwEBuR5veLSMobyuoYzj+GGKe9tN9TDuY4ZHvd/mPp5S5otFoZ2nonvQzlUPD9Ck7+dXzglzW+wa4hzxkcG5iIlzHiOrhyROvW/h21GMYyg7Dvph7SQ6riKbnEHzRoRkPSO0cseMVf4c4aQKRf7SBNjB8szdt5vyWWvWc9xe9xc4xJNyYEX+QRn9G/wAdFguO5K4LBFJk06TXSXCmXki/OTr6L1LgWOziQ3WAbgE+US8NFok300MLyXwnBrFrtHU3MI/3Fo/e/Io3j+KCjSpNo1/5jXHPkiPI4EN3LWh1spN77TM2aW+3qxVlMrBwvGe2o060RnaHEcj8Q+crY1yyaNCSZpSTIGe6FV7RWPaqSEqqLqblfCzUgtDSgHJQ7inGaNAsbWMNfuRLbah0IgQs3EOH0qzctVge0Xg8+Y5FMNPhPjNGrScyk/MKdw0k5mtdcNMibaA8o1QniWBD6jn1ahDRfWIHUnRbfC3CjSfUrRkp5MjKesFxaSSd/d5ze6uq4IVfaB4kOaQAdCdpXJ3M69O7ifLnaH4GpgMoGRrupufuSFVXotac2FqZedN3mYf1C5HivAg0U2MpFrwGh9UTTLXCc0ASHCZO+o5KfCsPiBVyhznNHxGxPoFrecmyo5625Y7DD1y73m5XbjUeh3WHi/BmVhcAHmimHwrokpyFlta3l5L4g4C+gSfh5oGSvVfFLQacW9fyy8uxNEtcf0XZ4e/lPbg83E5vpQUy6bwt4cFZ2euSyi0Ekj3nRsF3NLgmBfT8uGDWaZ3t83cu1CO/8jjm4fj/AMbvub9PIFbSKIeJeF/w+IfSGggtnWDt91gZoT/Za7LNjGyy5RjhLCxlSqPfIdTpEPa0hwYXPdJMiG36m2qGU/3JKI0caRRbRbGZxfnOWHNa7J5cw94OgSD/AEx3zvoyMoF9g0XPQcylp49N8H1ajGUmNDX03NcXPa6Q0g9TfloF2IXBeBoD6bBbVj2Ew4PaDmD26gjKfkvQAs+hEmpJApKdVKEZwoG5VakwoNc0K5qpCsYnB+pqTGkkAakwO5TFbeDZfaS7YEjv+Eotyacm1p4gAxraY216nmlgqQcIUcW5tR+tkJPE/Y1W38pIB9TErjtm69GTOcgni+Gtf7zZPNZv/wA1lMWACP1HCJQXHVk8wubaxYioBZDKj1fWqSsVQ3S08DON0w6x0IQDBcCa6pcSB+ui6jHszNWPAU3NB5n+yPlZEXiWquJPFP8AkEZQ9liNBeA0xpMLpMK5zsPldcjLB5gkAShzuFPq1DUqEezbZjW3cQOci17rfVqijQLiTA0nUke6AOSjGryz/EGvnxryNAA0Hnl1+srP4WpUn1f52XIBu4NGYny5hqW6zy3TeIGudVDQCXOiBzLv3XRYDg7GOoRRMmKbmlwcalV0FzhBIygTcWs3kSvQ46k4keX5Jb11SxvAsLScHZwWVG5m+cjKRGZxcDec07CAg/D6tN+Jpsp+Wm2oHZ3EZnZDmJJeCAPIYBEc9UW/xKq0gaVCm0ZmNMuHKdAepBNuXVcfReAOq0z9ZQW4XxSpSOdjiHueKk9ZNnDkZHyXt+Frh7Q8AgG4kQfz/wAXhPBaJdWZOxDjyht49Yhe48MYRSZIIsDBJJE3uTcm5Pqo6U1gJKYTKcVgApBRUkjqxjlYxVUwtDUBJSY6DPJRSVU1tbgrKsPBcINgHENI6hVV+EMzBxBcRcSbW6b+qk5ryyGPyEHWJtaQbhDMTXxLLCux/TIfvMrivj95Hp+PeuZ06dtfyxuAg2NqyVDhBxbnj2jaYZvGbNHY2V3EaUFZ3YcyBzllqStpasmKKNFU5rLPnAMnQH+6k9yoqmyLSH28QpBlnMjMDnBBI/021kBw/suZ43jjWdvl0A/VX4egBRcbXe0RvZrj/wBvohuI1T937Z245etRzYg1CfLSdTzBph5Bd8I5gAkoxxTj5o52Myh7XFwDpc4ZiG+9I+Euho2WjwjhW1atR+UPcHEAFpbDD5S4Oi5JbAE2h3MohxfwOys99QPc1wgxq0jTXbQ9p3Xpc5JJXmdbbQXG0BXwDazpNQHOXBpGUF0OFgYaGjlsFj4dVr1HBmCowwOb5ixjyXAAj2lRwjXMQLalHsDxP2VR+EoUc7W6N9pnaCW5XtqANJeJAsNL3CXDeF4rDuLKDCHuyuqAGmQx9zDGOOkAgCQbnWBD2WF7lwQ4b4SZRYHVT5szXEeUtc4G+ZsRGoABIXb4J+ZjTmDzF3AQCdyBshnDMDVqAHEjSCAQBJF/MA4gQY05I0XKLTkM5JMXJKT9grwoKdRMxqFp01c0qDQpJwlhVRKsUCEqK14LDioS06QT8oWqjwdrbwFXwioGuPb9b/ot2IxwAXP5c+Xt2+D5fH0g8hqFYyqCo43Hyh7q65+q6OZhVakIbiKqsxFZYtSovSsOSlRoF7g0AmdYBJgCSQB0BV1OiplpbcEgwRI6iD9CVXMTRjHPYKZo+yAinmAbq1wIkXvN9TeWlcVxBpEjcSF02P4v/LplhIq5XNqvIEkZhAB7MZHZctjXl2YkyTJJO5OpW1c8jT/h885H5RJFQi5Aze7mg7e9aeZXZ5TSY95GhkAmZuSG7gXd+WXmHBONuwjngMztJzEAwRaCR1s35bI0/j9euCH0xSpmC17g+rJkZRmmB3grs2Z8nDZdxTj21m06GVuSoXvfVc17gPO45oBIBtBtOl11fhankJApkuBDaj3gNMETmFySDayF8IGKqGKrWQDDRfLAIIknyONhoZuu2a4wM2sXjRGlftNzlW4pFyiSlQiSkokpIUGqQKZMAmSYerAqMqsYg1wScFDMnFRBpNdyUKoJ+JPKZR1xz19xXPk64/61nfg83x/T91Olw9nxEn1gfRXAqbSlPDx/Ff7u7+huKwEG2h0VFPB3XQU6Ic2+yrNABcnfE56sjs8fd65lob7ABZMSiWJcG/tc/JBqzXVZDdWzLbAgXOYuPlHuuEXO+ifPO/R3rPsOxL5MNEkXMbBYjSJ2JAGZw92GZgJkiXa7DbXSS7sCGlrnENOYWByCHAGRTILswbmN5guFyp1wJJ8z/M8+aA24GrTMiQNgYb1Ebc8cz7c/XVv0552AyljiWy1zXZYDmi7g4OixcDzsZXoI4TQv/JpjNqWtDZnmRBK5Bjn5thedD63J7n1K7XA4kVGZt9x1Ws61h1zY0Yek1gysaGtGgaABfoFZKqBUsytmT1USrCCUwpoBURdJW0qcJ08IFTgpkiFOmm0qaoCuCDRcUgk5O1JSYSSCdUhFTa6yiUyMMS4e7Ucx9ksW6Bp+QT66aKrAuiTyE97jTqqqFJ1V4dcOBdBAJAa6n5QY+IzJOwhcvln/ADdXh6zkPex7wypTz5nEgZWl2W1nEg+UGW2uRLtrLQzhbQXwxrZyjJkytAy6Ah029JBjoCmF4e3RrRlIIJAguJicsmwN+WpGi3sw1oAtpbQdOic3Mirn3a5qtge+5AvadYnTQfILDVwq6rGUCNWn5IPXAR8bL7Gyz0AmhdEOEVMjwNjY/oo1GJmhWy69ugqmFBtQKYoF7GuG4WrD8IqH4T6rolmOWqmBWsYt9HgT9yAt1HgYGriVPx6/Ir0EiikuiZw5g2Tq/h0Xy5eaKTVEFSaoNKEpTqO6Rk5MCmeoBGmtDlOVnVrEjTSSRjgXDi4+0IgD3Z0J3Pp91e+iSwOEiAQM0FxvsR5Wx9fRacPwwkNaBkpANzAzmcWxHpznX7FadICSAZ5nW39ypOBM/wBoUTxbd6V/tyZyrbRYCBN/2hQqmnIbv/pEehIUyY22sf3WNuMZmDQ8OeJJa2+nPktfpn9rX0yd7fWUD4nlzFpGgibSD+FX1+KZNGPETJsfmFjpt9oC8Oa8O94jUHqE51vosz2wYrBkCWnNa+gIPb5LG1yNva25ZOUHQ3PqUJ4g2HzaD+X/ADZZ98T7jTnu31XTcBrtDA07GR2J2XW0CIXmvCjmcGzsR84I+x+a6bB16jLB5I63T8dxHc9uqUXVANSgYrvOrj9kxaN1pe04LVOIUx8SZCHUwkidDHBUitAKz0xCvaslJ5lAp1JGDVZTJ3JlKjtVrQoNC6LgPDoArPH+wf8AY/onIWo8M4JID6ulobMEjqduyPU4NwMoHlFot0HJRZSm7hvYX20srHOWialKzV8SRZrS420iBO5KlUqwcs3OnXr2CspNDRYTqSdyUwH8Qwb3H3jkAktbYnmCU4w1Km0ua0NIEE732RGpWGkwUN4g6RGx/AlknsbQOtjbgFou71vsquN4F1qlFxpvFy4RlcP6XDdaKtABwW6owOZE7G3PkUYNBeG1zUpiply5mkOHJ4MFYqokX9Tb567IrkyNcwbHN6nVDBoSd5J6eiY1mwGIyvB6wV09PGrjMRma+T8RJB2PNFH1zlB5hYc3LjXqbNdNT4gOa0NxQOi5PD03ORXh2HcHXWuOf5ex+ndJSYAAkn8Va8/c5Sp1FQVbRChTSE6YJEpgxCYBSzJ2idFJ63cFwXtakEeVt3dtm9ybfNdg2gLTNojYbQPoNP1Q/hHDTSZcw5x8xAuBFg10+sog5/4VcmROoVqoGvoOauiAZOvLZRp0t5vuqapzmNA4R1IGqc/oZ8CM1RzzOWzG25cuiIP+X6qQpQ2Btp/4q8u5PztCcmQrdVYmmYmbgT+yDufJMA7x25IzUJO149EMbUDXkESfulTjBVfoCDMHt81NlSAJOtiOp0VOJeSYNpMgdFowrW5C6Y3vv2SNjxPvkt0y+uu4Qp5MiLd+iLCC8kbi/dDqrTcAEwbDuqiaH42lLTGu/LS3ZW4Bjn0ogyxxaRy3/VO10lwO+mu3flZb/C9EZqrRceVw6G4II22U9Tbq51kwQ4ZQgXCIzGytZShWikE/eJ9KqVQlJXspwkiQa88aZVzCFmY4Kl9fK5LFYKNcoves38SEmvJ0BRZRi+V0fAOEkxVqaC4b9iY33hB+F8NdXdlBgC7jynQAcyu49n5cuggDrayUmlfS3N9LXVZpZjc+XSImZmR9vkme0xIgQZvYRvPSJWgHlpP5Cv7SrecogfnSTqbKrCMl2c9QOUbrPi6pEuM79uQg72k+q304gAchE6o/QmXc9eihUE63CTiAZ9D03kqp75kgHSx59kwtcRHJB6lMm5F9JCIudYmdY/dD61W9rwbQlTgf7MiBB31uVle4zYmDz6IhVcNDaB+FYqzwJnQQJUmnRAPQGD9Vlrsu7LM2iJB5W3Wmk8QT1AScZDnOPQHsnKVBSId1u0jlEbc5C2cCqhuIBNs7S31tH1A+awNN5meZ1mZve6VYkAOGrSCI7oJ3wISlDhVJAcNCAR2IlOK5VkIpIecVzSQNef4ek5xjTutWI4eIlzvkiTn0ql2kShPFMLVg5XWStv400SwFKllgwSE7HBzxTZGZxDQNpPM8ly2Aa9p87iu98JYFuX+Im/maBHYTJ31+ays6p/U2jmAwTKTA3KMxDcxAPmcAdT6n5rdTYTqZ9IA5KmgJlxMgmw5Rr3uCrXVAJHIB1hMt+WttFcRasc0HboQdAL7c9VGq4hp0J2i3b6Qk0HWIvMak6j02VGKqkSY031116BUQNxypEi9zAk2NteyP0DLWncgH6SuRxFcOeQbESOvc9yF1+FdLGmNWg/RZcXerV9zJDOnsNY581HEO8oIgBWu5D6qiuwRpPZa1CktkEA63WLGhrTkaYMTbmVqxb4EjY/gWLESbwBMSdypps2ckgN1PMLDi2GnqZvB781udULSIm+nSFgxLpLiZdM3trtM7IC5s5G3Bm/aVS82Pqph5FNo0sJChVIy9gSgBVO0X2vG56/JTeJB7FV06t9jAg/JSL7XSDp+EumhTJj3RpcWtqtDmrHwURQpj/TN+pJ/VayVpE1kxrbJJse6ySCea8So1aZmk7TZFeBcUc8ZauqKYbw82oJz69VMeCxMhxHYrLjnqfbbyd833yy8Vw4y5gQuk8ECp/DZajXt8zi0PtLCA4FotLTmOs7ofU8LeTLmPzXQeH8KadNjC4vLRBc4lztdJjYQtOr6R8rRaq/y3Frz2jS33SgRlGzt+cknXsfomqDv11Agb9+ikGkmZtewFiPXdIjPJ0kWnb5WQziGKDW6XuQLSXH6fXdEKrjYnnIGsm8NAQHHPD6oaDYWMdhB+QU9X0rmKMHhg6HPGs6kgzrEDUWldThwQxtrwOkBD2U2gWgGZJ17/AEROm8kadyUcTB1dO53qqnO7/wBlKxkzZUOO4NldSqxMGJggye/JYsRABtyV+Mk3AFhZYatSYi0Kaams36R6FYaoJ7WgK6riL3v1+yzgkuaJGt0g01tQFnxRAab3jSNBtdaXQb8pn9FgxGhnQkDrE3TJgLvMelvpsoPBIyi5MAdyYH1KgHAT1JRHgTQaonYEiedv/Sg3Q0KWRrWa5WhveBEqRKg+q0akDuQFU7EN/qb8wqL43+KuIOskq8ebJJpcZ/GVKTTlzDpBRvglfGuDXOIibiDMLqKmDpnVoUPb02CEM/Hxefu630n2E6q3CPGogiTcWt+qCHigLg0WkxJ26wtXAcW6oHGZh0AaDYnzdZ5WU3W0GhMEai4mbmR+8J3mASbyRFtjoPndN7M6z5hedoJkiN7CJVPEKhA065tSLEaTawN7oAdxPHlrC4fES2ddJAjkLLLwuh8RJJm/KwvrssvEcaHuiwDdOVrERtobdFq4YNJ2kAm5i30WW7WmZBECABaRmOswe2+qJsp+UTewug7ao36DTck/SEbpuAAHQLTlFVOO+x1Cz1M2sdh0WqoARzVNTvv81VJh4jVJDcsDmUMdWBPKTuNbLZVZJvfX5FY8XNvKbmOw5qaaGOytaIMncclmwZBdB1BmZ6aQnq1Bm8zZGkXiY1lV4R3mI2j0nRINL7NPeUNxxOUdJMDeAiOKaNjNpQ7HOs0QLAnrfomGGm0wRAvF/wDxFOBAZnHkI+v7LBNls4K4AuFpIED1M/dEKihec5jcN1BP9ac1XWiLmCLnQ+a86W5cuagBckOiwGk6TH3SbTvZ2nMTvJPqjK1nXLNiD5G9m/YJkseIbHKAkrjHq7ahXruOpKxucUklcIsNUIcYMeWp/wDDl0/hwRh2EanMT3zkadkkllftQxhzIBOpAn89ShfFnkMJB+EfXN/6UklN+lT7CMQ0Fvq39R+iuwDjmHd30cAEklhy1ojSEX9Po5GSLpJLfhl0oJsT3UWmZ7JJKksWJH6LDU1H+4/ZMkpDHVGvYfdNgdXfnNJJBpVRcoTxRol3/D7hOkmTM42RPhYs7s3/ALJJJwVuapBMkqpfjHxLRJJJBP/Z"
                alt="error"
                className="onlineFrindImg"
              />
              <span className="onlineState"></span>
              <span className="onlineFriendName">Bhagya Sachini</span>
            </div>
          </li>
          <li className="onlineFriend">
            <div className="onlineFriendImgContainer">
              <img
                src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ1eT4P8QDFLm76X5IumED7XqWtjOHnu2_lCcQEA3keD-sz8B6-TtFoMWweuFz6V_oIaA&usqp=CAU"
                alt="error"
                className="onlineFrindImg"
              />
              <span className="onlineState"></span>
              <span className="onlineFriendName">Samadhi Nethmi</span>
            </div>
          </li>
          <li className="onlineFriend">
            <div className="onlineFriendImgContainer">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR-XmO81AeszI0HTwxJHfJrYcEMkhi2FUhwg&s"
                alt="error"
                className="onlineFrindImg"
              />
              <span className="onlineState"></span>
              <span className="onlineFriendName"> Sanduni Ama</span>
            </div>
          </li>
          <li className="onlineFriend">
            <div className="onlineFriendImgContainer">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNMzkZ0oW1nX-2yGYkB-QHTlFbMFOiEieihQ&s"
                alt="error"
                className="onlineFrindImg"
              />
              <span className="onlineState"></span>
              <span className="onlineFriendName">kaushi Nimesha</span>
            </div>
          </li>
        </div>
      </div>
    </div>
  );
}

export default RightPane;
