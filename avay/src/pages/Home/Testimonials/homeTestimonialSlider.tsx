import React, { Component } from "react";

export default class homeTestimonialSlider extends Component {
  render() {
    return (
      <div className="home-testimonials">
        <div className="wrap cols">
          <div className="col-8 centered-col home-testimonial-wrap">
            <div className="text-center">
              <h2 className="title-h2">Khách hàng nói về AVAY</h2>
            </div>
            <div className="home-testimonials-list-wrap">
              <ul id="customer-tag" className="home-testimonials-list">
                <li className="cs-experience active">
                  <p>
                    Đăng ký quá dễ dàng, nhân viên tư vấn nhiệt tình, thời gian
                    từ lúc đăng ký online cho tới khi giải ngân chi mất hai
                    ngày.
                  </p>
                  <div className="home-testimonial-client">
                    <strong>Anh T. Sinh</strong>
                    <small>Bắc Từ Liêm, Hà Nội - Vay mua sắm cá nhân</small>
                  </div>
                </li>
                <li className="cs-experience">
                  <p>
                    Thời gian giải ngân mất 4 ngày kể từ khi hoàn thành đăng ký
                    online. Việc đăng ký dễ dàng, không phải làm lại nhiều lần.
                    Rất hài lòng về thái độ phục vụ của nhân viên tư vấn cũng
                    như nhân viên hỗ trợ làm hồ sơ.
                  </p>
                  <div className="home-testimonial-client">
                    <strong>Chị Đỗ Thu</strong>
                    <small>Kiên Thành, Hải Dương - Vay mua đồ nội thất</small>
                  </div>
                </li>
                <li className="cs-experience">
                  <p>
                    Tôi không biết nhiều về công nghệ nên nhờ con đăng ký hộ.
                    Các bạn nhân viên tư vấn và thu hồ sơ rất nhiệt tình, thời
                    gian từ khi làm hồ sơ cho tới lúc nhận khoản vay trong vòng
                    3 ngày. Tôi sẽ quay lại AVAY.vn trong tương lai khi có nhu
                    cầu vay.
                  </p>
                  <div className="home-testimonial-client">
                    <strong>Chị. N. Phượng</strong>
                    <small>Thanh Xuân, Hà Nội - Vay sửa nhà</small>
                  </div>
                </li>
                <li className="cs-experience">
                  <p>
                    Tôi thấy quy trình đăng ký online rất dễ dàng, tuy nhiên
                    thông tin giải thích trên website hơi rườm rà, nhân viên tư
                    vấn gọi điện rất nhiệt tình dù hỏi hơi nhiều câu hỏi. Tổng
                    thời gian giải ngân rất nhanh, chỉ mất chưa tới 3 ngày.
                  </p>
                  <div className="home-testimonial-client">
                    <strong>Anh Nguyễn Vũ</strong>
                    <small>Lâm Đồng - Vay sản xuất nông nghiệp</small>
                  </div>
                </li>
              </ul>
              <div className="home-testimonials-pag">
                <a className="cs-experience-dot show-pointer active"> </a>
                <a className="cs-experience-dot show-pointer"> </a>
                <a className="cs-experience-dot show-pointer"> </a>
                <a className="cs-experience-dot show-pointer"> </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
