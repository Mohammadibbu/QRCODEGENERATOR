//footer
document.getElementById("footer").innerHTML = `
<div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-6">
          <h6>About</h6>
          <p class="text-justify">
            QR Code [quick response] seem to appear everywhere these days. we
            can see them on posters, magazine ads, using qr codes is one of the
            most intriguing ways of digitally connecting consumers to the
            internet via mobile phones since the mobile phones have become a
            basic necessity thing of everyone.
          </p>
        </div>
      </div>

      <div class="col-xs-6 col-md-3">
        <h6>Quick Links</h6>
        <ul class="footer-links">
          <li><a href="https://en.wikipedia.org/wiki/QR_code">About Us</a></li>
          <li>
            <a
              href="mailto:mohammadibbu008@gmail.com?subject=QR_code generator!&body=This project is done by Satheesh kumar.s,Sirajudhin,Muhamed ibrahim.S"
              >Contact Us</a
            >
          </li>
          <!-- <li><a href="">Contribute</a></li> -->
        </ul>
      </div>
    </div>
    <hr />

    <div class="container">
      <div class="row">
        <div class="col-md-8 col-sm-6 col-xs-12">
          <p class="copyright-text">
            Copyright &copy; 2023 All Rights Reserved by <a href="#">SSMI</a>.
          </p>
        </div>

        <div class="col-md-4 col-sm-6 col-xs-12">
          <ul class="social-icons">
            <li>
              <a
                class="facebook"
                href="https://www.facebook.com/apolloartsandsciencecollege/"
                ><i class="fa fa-facebook"></i
              ></a>
            </li>
            <!-- <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li> -->
            <li>
              <a
                class="dribbble"
                href="https://www.instagram.com/ravi_vikram7201/"
                ><i class="fa fa-instagram"></i
              ></a>
            </li>
            <li>
              <a class="linkedin" href="https://wa.me/+918220563861?text=HEllo"
                ><i class="fa fa-whatsapp"></i
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </div>`;
//--------footer-------------------
//--------------url SHow--------------
function urlshow(id, qrContentInput) {
  document.getElementById(
    id
  ).innerHTML = `<a href='${qrContentInput}' target='_blank' style='color:red;'>Click here to Follow link...</a>`;
}
