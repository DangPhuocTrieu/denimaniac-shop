const express = require("express")
const app = express()
const path = require("path")


const data = [
    category = [
        {
            id: 1,
            name: "Denim"
        },
        {
            id: 2,
            name: "Jackets"
        },
        {
            id: 3,
            name: "T-shirts"
        }
    ],

    products = [
        {
            id: 1,
            categoryId: 1,
            name: '639 Denim – Deep Blue SS2022',
            originPrice: 500000,
            salePrice: 0,
            urlImage: [
                "https://www.thedenimaniac.com/wp-content/uploads/2021/12/DN-222web-e1639737877197.jpg",
                "https://www.thedenimaniac.com/wp-content/uploads/2021/12/DN-224web-e1639737887753.jpg",
                "https://www.thedenimaniac.com/wp-content/uploads/2021/12/DN-225web-e1639737896566.jpg"
            ],
            description: [
                "Slim Fit 98% cotton denim 13oz & 2% spandex",
                "*Vui lòng tham khảo bảng số đo và chọn size theo khuyến nghị cân nặng phía dưới – các khuyến nghị được tổng hợp từ feedback của nhiều khách hàng và có độ chính xác cao",
                "**Chiều dài từ size 29-36 giao động khoảng 100-101cm. Nếu bạn cao trên 182cm, sản phẩm sẽ có thể chỉ đến mắt cá. Nếu bạn cao dưới 166cm, có thể bạn sẽ cần lên line gấu quần để vừa vặn",
                "***Chính sách đổi trả trong 14 ngày tại mục Shipping ở cuối trang"
            ],
            size: [29, 30, 31, 32, 34, 36, 38],
            addInfor: {
                weight: "0.4kg",
                size: "35 × 20 × 8 cm",
                color: "Blue",
                fit: "639 Slim Fit"
            }
        },
        {
            id: 2,
            categoryId: 1,
            name: '639 Denim – Smoked Grey SS2022',
            originPrice: 550000,
            salePrice: 0,
            urlImage: [
                "https://www.thedenimaniac.com/wp-content/uploads/2021/12/aDN-248web-e1639816138713.jpg",
                "https://www.thedenimaniac.com/wp-content/uploads/2021/12/aDN-250web-e1639816164447.jpg",
                "https://www.thedenimaniac.com/wp-content/uploads/2021/12/aDN-251web-e1639816174536.jpg"
            ],
            description: [
                "Slim Fit 98% cotton denim 13oz & 2% spandex",
                "*Vui lòng tham khảo bảng số đo và chọn size theo khuyến nghị cân nặng phía dưới – các khuyến nghị được tổng hợp từ feedback của nhiều khách hàng và có độ chính xác cao",
                "**Chiều dài từ size 29-36 giao động khoảng 100-101cm. Nếu bạn cao trên 182cm, sản phẩm sẽ có thể chỉ đến mắt cá. Nếu bạn cao dưới 166cm, có thể bạn sẽ cần lên line gấu quần để vừa vặn",
                "***Chính sách đổi trả trong 14 ngày tại mục Shipping ở cuối trang"
            ],
            size: [29, 30, 31, 32, 34, 36, 38],
            addInfor: {
                weight: "0.4kg",
                size: "35 × 20 × 8 cm",
                color: "Black",
                fit: "639 Slim Fit"
            }
        },
        {
            id: 3,
            categoryId: 1,
            name: '639 Essential Denim – Dust Blue',
            originPrice: 530000,
            salePrice: 470000,
            urlImage: [
                "https://www.thedenimaniac.com/wp-content/uploads/2021/04/63988-a-e1618377698549.jpg",
                "https://www.thedenimaniac.com/wp-content/uploads/2021/04/63988-b-e1618377709415.jpg",
                "https://www.thedenimaniac.com/wp-content/uploads/2021/04/63988-c-e1618377722212.jpg"
            ],
            description: [
                "Slim Fit 98% cotton denim 13oz & 2% spandex",
                "[Size 38: 86~96kg]",
                "*Vui lòng tham khảo bảng số đo và chọn size theo khuyến nghị cân nặng phía dưới – các khuyến nghị được tổng hợp từ feedback của nhiều khách hàng và có độ chính xác cao",
                "**Chiều dài từ size 29-36 giao động khoảng 100-101cm. Nếu bạn cao trên 182cm, sản phẩm sẽ có thể chỉ đến mắt cá. Nếu bạn cao dưới 166cm, có thể bạn sẽ cần lên line gấu quần để vừa vặn",
                "***Chính sách đổi trả trong 14 ngày tại mục Shipping ở cuối trang"
            ],
            size: [29, 30, 31, 32, 34, 36, 38],
            addInfor: {
                weight: "0.4kg",
                size: "35 × 20 × 8 cm",
                color: "Light Wash",
                fit: "639 Slim Fit"
            }
        },
        {
            id: 4,
            categoryId: 1,
            name: '639 Essential Denim – Silver Blue',
            originPrice: 510000,
            salePrice: 450000,
            urlImage: [
                "https://www.thedenimaniac.com/wp-content/uploads/2021/04/63983-a-e1618378191706.jpg",
                "https://www.thedenimaniac.com/wp-content/uploads/2021/04/63983-b-e1618378201631.jpg",
                "https://www.thedenimaniac.com/wp-content/uploads/2021/04/63983-c-e1618378212919.jpg"
            ],
            description: [
                "Slim Fit 98% cotton denim 13oz & 2% spandex",
                "[Size 28: 46~53kg]",
                "[Size 38: 83~92kg]",
                "*Vui lòng tham khảo bảng số đo và chọn size theo khuyến nghị cân nặng phía dưới – các khuyến nghị được tổng hợp từ feedback của nhiều khách hàng và có độ chính xác cao",
                "**Chiều dài từ size 29-36 giao động khoảng 100-101cm. Nếu bạn cao trên 182cm, sản phẩm sẽ có thể chỉ đến mắt cá. Nếu bạn cao dưới 166cm, có thể bạn sẽ cần lên line gấu quần để vừa vặn",
                "***Chính sách đổi trả trong 14 ngày tại mục Shipping ở cuối trang"
            ],
            size: [28, 29, 30, 31, 34, 36],
            addInfor: {
                weight: "0.4kg",
                size: "35 × 20 × 8 cm",
                color: "Medium Wash",
                fit: "639 Slim Fit"
            }
        },
        {
            id: 5,
            categoryId: 1,
            name: '819 Denim – Dark Indigo SS22 – Delivery 2',
            originPrice: 530000,
            salePrice: 0,
            urlImage: "https://www.thedenimaniac.com/wp-content/uploads/2022/01/webD29816-e1643168546857.jpg",
            description: [
                "Slim Fit 98% cotton denim 13oz & 2% spandex",
                "*Vui lòng tham khảo bảng số đo và chọn size theo khuyến nghị cân nặng phía dưới – các khuyến nghị được tổng hợp từ feedback của nhiều khách hàng và có độ chính xác cao",
                "**Chiều dài từ size 29-36 giao động khoảng 100-101cm. Nếu bạn cao trên 182cm, sản phẩm sẽ có thể chỉ đến mắt cá. Nếu bạn cao dưới 166cm, có thể bạn sẽ cần lên line gấu quần để vừa vặn",
                "***Chính sách đổi trả trong 14 ngày tại mục Shipping ở cuối trang"
            ],
            size: [29, 30, 31, 32, 34, 36],
            addInfor: {
                weight: "0.4kg",
                size: "35 × 20 × 8 cm",
                color: "Blue",
                fit: "819 Slim Tapered Fit"
            }
        },
        {
            id: 6,
            categoryId: 1,
            name: '819 Denim – Deep Blue SS2022',
            originPrice: 500000,
            salePrice: 0,
            urlImage: [
                "https://www.thedenimaniac.com/wp-content/uploads/2021/12/DN-192web-e1639739417353.jpg",
                "https://www.thedenimaniac.com/wp-content/uploads/2021/12/DN-194web-e1639739426976.jpg",
                "https://www.thedenimaniac.com/wp-content/uploads/2021/12/DN-197web-e1639739434467.jpg"
            ],
            description: [
                "Slim Fit 98% cotton denim 13oz & 2% spandex",
                "*Vui lòng tham khảo bảng số đo và chọn size theo khuyến nghị cân nặng phía dưới – các khuyến nghị được tổng hợp từ feedback của nhiều khách hàng và có độ chính xác cao",
                "**Chiều dài từ size 29-36 giao động khoảng 100-101cm. Nếu bạn cao trên 182cm, sản phẩm sẽ có thể chỉ đến mắt cá. Nếu bạn cao dưới 166cm, có thể bạn sẽ cần lên line gấu quần để vừa vặn",
                "***Chính sách đổi trả trong 14 ngày tại mục Shipping ở cuối trang"
            ],
            size: [29, 30, 31, 32, 34, 36],
            addInfor: {
                weight: "0.4kg",
                size: "35 × 20 × 8 cm",
                color: "Blue",
                fit: "819 Slim Tapered Fit"
            }
        },
        {
            id: 7,
            categoryId: 1,
            name: '819 Denim – Light Cement SS2022',
            originPrice: 500000,
            salePrice: 0,
            urlImage: [
                "https://www.thedenimaniac.com/wp-content/uploads/2021/12/DN-241web-e1639740140312.jpg",
                "https://www.thedenimaniac.com/wp-content/uploads/2021/12/DN-244web-e1639740162189.jpg",
                "https://www.thedenimaniac.com/wp-content/uploads/2021/12/DN-245web-e1639740154114.jpg"
            ],
            description: [
                "Slim Fit 98% cotton denim 13oz & 2% spandex",
                "*Vui lòng tham khảo bảng số đo và chọn size theo khuyến nghị cân nặng phía dưới – các khuyến nghị được tổng hợp từ feedback của nhiều khách hàng và có độ chính xác cao",
                "**Chiều dài từ size 29-36 giao động khoảng 100-101cm. Nếu bạn cao trên 182cm, sản phẩm sẽ có thể chỉ đến mắt cá. Nếu bạn cao dưới 166cm, có thể bạn sẽ cần lên line gấu quần để vừa vặn",
                "***Chính sách đổi trả trong 14 ngày tại mục Shipping ở cuối trang"
            ],
            size: [29, 30, 31, 32, 33],
            addInfor: {
                weight: "0.4kg",
                size: "35 × 20 × 8 cm",
                color: "Blue",
                fit: "819 Slim Tapered Fit"
            }
        },
        {
            id: 8,
            categoryId: 1,
            name: '819 Denim – Pale Blue SS22 – Delivery 2',
            originPrice: 550000,
            salePrice: 0,
            urlImage: "https://www.thedenimaniac.com/wp-content/uploads/2022/01/webD29787-e1643168901314.jpg",
            description: [
                "Slim Fit 98% cotton denim 13oz & 2% spandex",
                "Màu wash này rộng hơn 1/2 size so với các màu Season trước, vui lòng chọn lùi 1 size nếu bạn đã đặt hàng mẫu 819 trước đây.",
                "*Vui lòng tham khảo bảng số đo và chọn size theo khuyến nghị cân nặng phía dưới – các khuyến nghị được tổng hợp từ feedback của nhiều khách hàng và có độ chính xác cao",
                "**Chiều dài từ size 29-36 giao động khoảng 100-101cm. Nếu bạn cao trên 182cm, sản phẩm sẽ có thể chỉ đến mắt cá. Nếu bạn cao dưới 166cm, có thể bạn sẽ cần lên line gấu quần để vừa vặn",
                "***Chính sách đổi trả trong 14 ngày tại mục Shipping ở cuối trang"
            ],
            size: [29, 30, 31, 32, 34, 36],
            addInfor: {
                weight: "0.4kg",
                size: "35 × 20 × 8 cm",
                color: "Blue",
                fit: "819 Slim Tapered Fit"
            }
        },
        {
            id: 9,
            categoryId: 1,
            name: '819 Essential Denim – Black',
            originPrice: 530000,
            salePrice: 480000,
            urlImage: [
                "https://www.thedenimaniac.com/wp-content/uploads/2018/09/DN-264web-e1639457332625.jpg",
                "https://www.thedenimaniac.com/wp-content/uploads/2018/09/DN-262web-e1639457321585.jpg",
                "https://www.thedenimaniac.com/wp-content/uploads/2018/09/DN-267web-e1639457341647.jpg"
            ],
            description: [
                "Slim Fit 98% cotton denim 12oz & 2% spandex",
                "Gợi ý chọn size : 176cm – 74kg & jeans size 34",
                "165cm – 65kg & jeans size 32",
                "*Vui lòng tham khảo bảng số đo và chọn size theo khuyến nghị cân nặng phía dưới – các khuyến nghị được tổng hợp từ feedback của nhiều khách hàng và có độ chính xác cao",
                "**Chiều dài từ size 29-36 giao động khoảng 100-101cm. Nếu bạn cao trên 182cm, sản phẩm sẽ có thể chỉ đến mắt cá. Nếu bạn cao dưới 166cm, có thể bạn sẽ cần lên line gấu quần để vừa vặn",
                "***Chính sách đổi trả trong 14 ngày tại mục Shipping ở cuối trang"
            ],
            size: [29, 30, 31, 32, 34, 36],
            addInfor: {
                weight: "0.4kg",
                size: "35 × 20 × 8 cm",
                color: "Black",
                fit: "819 Slim Tapered Fit"
            }
        },
        {
            id: 10,
            categoryId: 1,
            name: '819 Essential Denim – Dual Grey – Summer21',
            originPrice: 530000,
            salePrice: 380000,
            urlImage: [
                "https://www.thedenimaniac.com/wp-content/uploads/2021/04/81982dd-a-1-e1618323155228.jpg",
                "https://www.thedenimaniac.com/wp-content/uploads/2021/04/81982dd-b-1-e1618323166259.jpg",
                "https://www.thedenimaniac.com/wp-content/uploads/2021/04/81982dd-c-1-e1618323181160.jpg"
            ],
            description: [
                "Slim Fit 98% cotton denim 13oz & 2% spandex",
                "*Vui lòng tham khảo bảng số đo và chọn size theo khuyến nghị cân nặng phía dưới – các khuyến nghị được tổng hợp từ feedback của nhiều khách hàng và có độ chính xác cao",
                "**Chiều dài từ size 29-36 giao động khoảng 100-101cm. Nếu bạn cao trên 182cm, sản phẩm sẽ có thể chỉ đến mắt cá. Nếu bạn cao dưới 166cm, có thể bạn sẽ cần lên line gấu quần để vừa vặn",
                "***Chính sách đổi trả trong 14 ngày tại mục Shipping ở cuối trang"
            ],
            size: [29, 30, 31, 32, 34, 36, 38],
            addInfor: {
                weight: "0.4kg",
                size: "35 × 20 × 8 cm",
                color: "Gray",
                fit: "819 Slim Tapered Fit"
            }
        },
        {
            id: 11,
            categoryId: 1,
            name: 'Essential Shorts – Faded Black',
            originPrice: 360000,
            salePrice: 320000,
            urlImage: [
                "https://www.thedenimaniac.com/wp-content/uploads/2021/04/639S81d-a-1-e1618325366880.jpg",
                "https://www.thedenimaniac.com/wp-content/uploads/2021/04/639S81d-b-1-e1618325376223.jpg",
                "https://www.thedenimaniac.com/wp-content/uploads/2021/04/639S81d-b-1-e1618325376223.jpg"
            ],
            description: [
                "Slim Fit 98% cotton denim 12oz & 2% spandex",
                "Gợi ý chọn size: 175cm – 60kg & jeans size 30",
                "164cm – 68kg & jeans size 32",
                "[Size 29: 46-54kg]    [Size 30: 55-61kg]",
                "[Size 31: 62-67kg]    [Size 32: 68-72kg]",
                "[Size 34: 73-77kg]    [Size 36: 78-83kg]",
                "***Chính sách đổi trả trong 14 ngày tại mục Shipping ở cuối trang"
            ],
            size: [29, 30, 31, 32, 34, 36],
            addInfor: {
                weight: "0.4kg",
                size: "35 × 20 × 8 cm",
                color: "Black, Gray",
                fit: "639 Slim Fit"
            }
        },
        {
            id: 12,
            categoryId: 1,
            name: 'Essential Shorts – Vintage Black',
            originPrice: 360000,
            salePrice: 240000,
            urlImage: [
                "https://www.thedenimaniac.com/wp-content/uploads/2021/04/639S89c-a-1-e1618324837335.jpg",
                "https://www.thedenimaniac.com/wp-content/uploads/2021/04/639S89c-b-1-e1618324848503.jpg",
                "https://www.thedenimaniac.com/wp-content/uploads/2021/04/639S89c-c-1-e1618324859146.jpg"
            ],
            description: [
                "Slim Fit 98% cotton denim 12oz & 2% spandex",
                "Gợi ý chọn size: 175cm – 60kg & jeans size 30",
                "164cm – 68kg & jeans size 32",
                "[Size 29: 46-54kg]    [Size 30: 55-61kg]",
                "[Size 31: 62-67kg]    [Size 32: 68-72kg]",
                "[Size 34: 73-77kg]    [Size 36: 78-83kg]",
                "***Chính sách đổi trả trong 14 ngày tại mục Shipping ở cuối trang"
            ],
            size: [29, 30, 31, 32, 34, 36, 38],
            addInfor: {
                weight: "0.4kg",
                size: "35 × 20 × 8 cm",
                color: "Black, Gray",
                fit: "639 Slim Fit"
            }
        },
    
        // jacker
        {
            id: 13,
            categoryId: 2,
            name: 'Button Down Denim Overshirt – Escape Blue',
            originPrice: 500000,
            salePrice: 350000,
            urlImage: [
                "https://www.thedenimaniac.com/wp-content/uploads/2020/07/DN-107web-e1636006901864.jpg",
                "https://www.thedenimaniac.com/wp-content/uploads/2020/07/DN-108web-e1636006910738.jpg",
                "https://www.thedenimaniac.com/wp-content/uploads/2020/07/DN-109web-e1636006918129.jpg"
            ],
            description: [
                "Relaxed Fit – 100% cotton denim 11oz",
                "Sản phẩm được thiết kế dạng rộng cùng việc sắp xếp 2 túi hộp đặc thù của phong cách workwear",
                "Model 180cm – 69kg & shirt size XL",
                "Size M [dưới 165cm: 45-60kg  //  dưới 175cm: 55-65kg]",
                "***Chính sách đổi trả trong 14 ngày tại mục Shipping ở cuối trang."
            ],
            size: "M",
            addInfor: {
                weight: "0.6kg",
                size: "35 × 25 × 8 cm",
                color: "Gray",
            }
        },
        {
            id: 14,
            categoryId: 2,
            name: 'Denim Work Shirt – Blue',
            originPrice: 550000,
            salePrice: 390000,
            urlImage: [
                "https://www.thedenimaniac.com/wp-content/uploads/2021/11/DN-103web-e1636714696359.jpg",
                "https://www.thedenimaniac.com/wp-content/uploads/2021/11/DN-104web-e1636714706988.jpg",
                "https://www.thedenimaniac.com/wp-content/uploads/2021/11/DN-105web-e1636714716362.jpg"
            ],
            description: [
                "Relaxed Fit – 100% cotton denim 11oz",
                "Sản phẩm được thiết kế dạng rộng cùng việc sắp xếp 2 túi hộp đặc thù của phong cách workwear",
                "Model 178cm – 65kg & shirt size L",
                "Size M [dưới 70kg ]",
                "Size L [70-77kg hoặc trên 174cm]",
                "Size XL [78-90kg hoặc trên 180cm]",
                "***Chính sách đổi trả trong 14 ngày tại mục Shipping ở cuối trang."
            ],
            size: ["M", "L", "XL"],
            addInfor: {
                weight: "0.6kg",
                size: "35 × 25 × 8 cm",
                color: "Black",
            }
        },
        {
            id: 15,
            categoryId: 2,
            name: 'Denim Work Shirt – Light Bleach',
            originPrice: 550000,
            salePrice: 0,
            urlImage: [
                "https://www.thedenimaniac.com/wp-content/uploads/2021/11/DN-98web-e1636714820658.jpg",
                "https://www.thedenimaniac.com/wp-content/uploads/2021/11/DN-97web-e1636714806240.jpg",
                "https://www.thedenimaniac.com/wp-content/uploads/2021/11/DN-100web-e1636714831528.jpg"
            ],
            description: [
                "Relaxed Fit – 100% cotton denim 11oz",
                "Sản phẩm được thiết kế dạng rộng cùng việc sắp xếp 2 túi hộp đặc thù của phong cách workwear",
                "Model 178cm – 65kg & shirt size L",
                "Size M [dưới 70kg ]",
                "Size L [70-77kg hoặc trên 174cm]",
                "Size XL [78-90kg hoặc trên 180cm]",
                "***Chính sách đổi trả trong 14 ngày tại mục Shipping ở cuối trang."
            ],
            size: ["M", "L", "XL"],
            addInfor: {
                weight: "0.6kg",
                size: "35 × 25 × 8 cm",
                color: "Black",
            }
        },
        {
            id: 16,
            categoryId: 2,
            name: 'Denim Work Shirt – Marble Black',
            originPrice: 550000,
            salePrice: 0,
            urlImage: [
                "https://www.thedenimaniac.com/wp-content/uploads/2021/11/DN-78web-e1636713055945.jpg",
                "https://www.thedenimaniac.com/wp-content/uploads/2021/11/DN-76web-e1636713068649.jpg",
                "https://www.thedenimaniac.com/wp-content/uploads/2021/11/DN-81web-e1636713046867.jpg"
            ],
            description: [
                "Relaxed Fit – 100% cotton denim 11oz",
                "Sản phẩm được thiết kế dạng rộng cùng việc sắp xếp 2 túi hộp đặc thù của phong cách workwear",
                "Model 178cm – 65kg & shirt size L",
                "Size M [dưới 70kg ]",
                "Size L [70-77kg hoặc trên 174cm]",
                "Size XL [78-90kg hoặc trên 180cm]",
                "***Chính sách đổi trả trong 14 ngày tại mục Shipping ở cuối trang."
            ],
            size: ["M", "L", "XL"],
            addInfor: {
                weight: "0.6kg",
                size: "35 × 25 × 8 cm",
                color: "Black",
            }
        },
        {
            id: 17,
            categoryId: 2,
            name: 'Essential Denim Jacket – Abyss Black',
            originPrice: 680000,
            salePrice: 0,
            urlImage: [
                "https://www.thedenimaniac.com/wp-content/uploads/2021/12/DN-135web-e1638689891981.jpg",
                "https://www.thedenimaniac.com/wp-content/uploads/2021/12/DN-132web-e1638689902381.jpg",
                "https://www.thedenimaniac.com/wp-content/uploads/2021/12/DN-136web-e1638689914844.jpg"
            ],
            description: [
                "Relaxed Fit – 100% cotton denim 11oz",
                "Sản phẩm được thiết kế dạng rộng cùng việc sắp xếp 2 túi hộp đặc thù của phong cách workwear",
                "Model 178cm – 65kg & shirt size L",
                "Size M [dưới 70kg ]",
                "Size L [70-77kg hoặc trên 174cm]",
                "Size XL [78-90kg hoặc trên 180cm]",
                "*Với mẫu khoác rộng này, khuyến nghị bạn chọn nhỏ hơn 1 size nếu cần mặc vừa, không quá rộng hoặc dài.",
                "***Chính sách đổi trả trong 14 ngày tại mục Shipping ở cuối trang."
            ],
            size: ["M", "L", "XL"],
            addInfor: {
                weight: "0.6kg",
                size: "35 × 25 × 8 cm",
                color: "Gray",
            }
        },
        {
            id: 18,
            categoryId: 2,
            name: 'Essential Denim Jacket – Dirty Blue',
            originPrice: 680000,
            salePrice: 0,
            urlImage: [
                "https://www.thedenimaniac.com/wp-content/uploads/2021/11/DN-122web-e1636627852302.jpg",
                "https://www.thedenimaniac.com/wp-content/uploads/2021/11/DN-120web-e1636627842257.jpg",
                "https://www.thedenimaniac.com/wp-content/uploads/2021/11/DN-124web-e1636627859518.jpg"
            ],
            description: [
                "Relaxed Fit – 100% cotton denim 11oz",
                "Sản phẩm được thiết kế dạng rộng cùng việc sắp xếp 2 túi hộp đặc thù của phong cách workwear",
                "Model 178cm – 65kg & shirt size L",
                "Size M [dưới 70kg ]",
                "Size L [70-77kg hoặc trên 174cm]",
                "Size XL [78-90kg hoặc trên 180cm]",
                "*Với mẫu khoác rộng này, khuyến nghị bạn chọn nhỏ hơn 1 size nếu cần mặc vừa, không quá rộng hoặc dài.",
                "***Chính sách đổi trả trong 14 ngày tại mục Shipping ở cuối trang."
            ],
            size: ["M", "L", "XL"],
            addInfor: {
                weight: "0.6kg",
                size: "35 × 25 × 8 cm",
                color: "Medium Wash",
            }
        },
        {
            id: 19,
            categoryId: 2,
            name: 'Signature Denim Jacket – Light Blue',
            originPrice: 680000,
            salePrice: 610000,
            urlImage: [
                "https://www.thedenimaniac.com/wp-content/uploads/2021/05/SDJLB_b-e1620554144383.jpg",
                "https://www.thedenimaniac.com/wp-content/uploads/2021/05/SDJLB_a-e1620554180955.jpg",
                "https://www.thedenimaniac.com/wp-content/uploads/2021/05/SDJLB_c-e1620554153788.jpg"
            ],
            description: [
                "Relaxed Fit – 100% cotton denim 13oz",
                "Sản phẩm được thiết kế dạng suôn, đứng form và mặc ngắn hơn các form dạng rộng.",
                "Thiết kế điểm nhấn biker tại 2 khuỷa tay cùng 6 túi cơ bản – trước ngực, bên sườn và phía trong áo.",
                "Lên 1 size so với khuyến nghị nếu bạn có vai rộng hoặc tập thể hình (bodybuilding)",
                "Model 179cm – 66kg & jacket size L",
                "[Size M: dưới 63kg & dưới 168cm]",
                "[Size L: 63-71kg]",
                "[Size XL: 72-77kg]",
                "***Chính sách đổi trả trong 14 ngày tại mục Shipping ở cuối trang."
            ],
            size: ["M", "L", "XL"],
            addInfor: {
                weight: "0.6kg",
                size: "35 × 25 × 8 cm",
                color: "Blue",
            }
        },
        {
            id: 20,
            categoryId: 2,
            name: 'Signature Denim Jacket – Smoke Black',
            originPrice: 680000,
            salePrice: 610000,
            urlImage: [
                "https://www.thedenimaniac.com/wp-content/uploads/2021/05/nSDJSB_b-e1638692106713.jpg",
                "https://www.thedenimaniac.com/wp-content/uploads/2021/05/SDJSB_c-e1620553952297.jpg",
                "https://www.thedenimaniac.com/wp-content/uploads/2021/05/nSDJSB_a-e1638692097270.jpg"
            ],
            description: [
                "Relaxed Fit – 100% cotton denim 13oz",
                "Sản phẩm được thiết kế dạng suôn, đứng form và mặc ngắn hơn các form dạng rộng.",
                "Thiết kế điểm nhấn biker tại 2 khuỷa tay cùng 6 túi cơ bản – trước ngực, bên sườn và phía trong áo.",
                "Lên 1 size so với khuyến nghị nếu bạn có vai rộng hoặc tập thể hình (bodybuilding)",
                "Model 179cm – 66kg & jacket size L",
                "[Size M: dưới 63kg & dưới 168cm]",
                "[Size L: 63-71kg]",
                "[Size XL: 72-77kg]",
                "***Chính sách đổi trả trong 14 ngày tại mục Shipping ở cuối trang."
            ],
            size: ["M", "L", "XL"],
            addInfor: {
                weight: "0.6kg",
                size: "35 × 25 × 8 cm",
                color: "Black",
            }
        },
        {
            id: 21,
            categoryId: 2,
            name: 'Signature Denim Jacket – Smoke Grey',
            originPrice: 610000,
            salePrice: 680000,
            urlImage: [
                "https://www.thedenimaniac.com/wp-content/uploads/2021/05/SDJSG_b-e1620553740366.jpg",
                "https://www.thedenimaniac.com/wp-content/uploads/2021/05/SDJSG_a-e1620553729310.jpg",
                "https://www.thedenimaniac.com/wp-content/uploads/2021/05/SDJSG_c-e1620553753880.jpg"
            ],
            description: [
                "Relaxed Fit – 100% cotton denim 13oz",
                "Sản phẩm được thiết kế dạng suôn, đứng form và mặc ngắn hơn các form dạng rộng.",
                "Thiết kế điểm nhấn biker tại 2 khuỷa tay cùng 6 túi cơ bản – trước ngực, bên sườn và phía trong áo.",
                "Lên 1 size so với khuyến nghị nếu bạn có vai rộng hoặc tập thể hình (bodybuilding)",
                "Model 179cm – 66kg & jacket size L",
                "[Size M: dưới 63kg & dưới 168cm]",
                "[Size L: 63-71kg]",
                "[Size XL: 72-77kg]",
                "***Chính sách đổi trả trong 14 ngày tại mục Shipping ở cuối trang."
            ],
            size: ["M", "L", "XL"],
            addInfor: {
                weight: "0.6kg",
                size: "35 × 25 × 8 cm",
                color: "Gray",
            }
        },
        {
            id: 22,
            categoryId: 2,
            name: 'Sleeveless Denim Jacket – Black',
            originPrice: 580000,
            salePrice: 0,
            urlImage: [
                "https://www.thedenimaniac.com/wp-content/uploads/2021/11/DN-126web-e1636628872129.jpg",
                "https://www.thedenimaniac.com/wp-content/uploads/2021/11/DN-127web-e1636628882255.jpg",
                "https://www.thedenimaniac.com/wp-content/uploads/2021/11/DN-130web-e1636628891175.jpg"
            ],
            description: [
                "Relaxed Fit – 100% cotton denim 12oz",
                "Sản phẩm được thiết kế dạng rộng để khoác thoải mái, cùng 6 túi cơ bản – trước ngực, bên sườn và phía trong áo.",
                "Model 180cm – 66kg & jacket size L",
                "[Size M: dưới 75kg – dưới 175cm]",
                "[Size L: 65-90kg hoặc trên 175cm ]",
                "***Chính sách đổi trả trong 14 ngày tại mục Shipping ở cuối trang."
            ],
            size: ["M", "L"],
            addInfor: {
                weight: "0.6kg",
                size: "35 × 25 × 8 cm",
                color: "Dark Wash",
            }
        },
        {
            id: 23,
            categoryId: 2,
            name: 'Sleeveless Denim Jacket – Sky Blue',
            originPrice: 580000,
            salePrice: 0,
            urlImage: [
                "https://www.thedenimaniac.com/wp-content/uploads/2021/11/DN-70web-e1636629814594.jpg",
                "https://www.thedenimaniac.com/wp-content/uploads/2021/11/DN-73web-e1636629824235.jpg",
                "https://www.thedenimaniac.com/wp-content/uploads/2021/11/DN-74web-e1636629833710.jpg"
            ],
            description: [
                "Relaxed Fit – 100% cotton denim 12oz",
                "Sản phẩm được thiết kế dạng rộng để khoác thoải mái, cùng 6 túi cơ bản – trước ngực, bên sườn và phía trong áo.",
                "Model 180cm – 66kg & jacket size L",
                "[Size M: dưới 75kg – dưới 175cm]",
                "[Size L: 65-90kg hoặc trên 175cm ]",
                "***Chính sách đổi trả trong 14 ngày tại mục Shipping ở cuối trang."
            ],
            size: ["M", "L"],
            addInfor: {
                weight: "0.6kg",
                size: "35 × 25 × 8 cm",
                color: "Light Wash",
            }
        },
        {
            id: 24,
            categoryId: 2,
            name: 'Sleeveless Denim Jacket – Vintage',
            originPrice: 580000,
            salePrice: 0,
            urlImage: [
                "https://www.thedenimaniac.com/wp-content/uploads/2021/11/DN-85web-e1636628700228.jpg",
                "https://www.thedenimaniac.com/wp-content/uploads/2021/11/DN-83web-e1636628689580.jpg",
                "https://www.thedenimaniac.com/wp-content/uploads/2021/11/DN-87web-e1636628708123.jpg"
            ],
            description: [
                "Relaxed Fit – 100% cotton denim 12oz",
                "Sản phẩm được thiết kế dạng rộng để khoác thoải mái, cùng 6 túi cơ bản – trước ngực, bên sườn và phía trong áo.",
                "Model 180cm – 66kg & jacket size L",
                "[Size M: dưới 75kg – dưới 175cm]",
                "[Size L: 65-90kg hoặc trên 175cm ]",
                "***Chính sách đổi trả trong 14 ngày tại mục Shipping ở cuối trang."
            ],
            size: ["M", "L"],
            addInfor: {
                weight: "0.6kg",
                size: "35 × 25 × 8 cm",
                color: "Dark Wash",
            }
        },
        {
            id: 25,
            categoryId: 3,
            name: 'Bumblebee Striped L/S Tee',
            originPrice: 300000,
            salePrice: 150000,
            urlImage: [
                "https://www.thedenimaniac.com/wp-content/uploads/2018/09/DN5309-e1539859482121.jpg",
                "https://www.thedenimaniac.com/wp-content/uploads/2018/09/IMG_6295web-e1539859464817.jpg",
            ],
            description: [
                "100% vicose [cotton] Model 178cm – 68kg & tee size L",
                "[Size M: 50-63kg; dưới 172cm]",
                "[Size L: 64-74kg; trên 165cm]",
                "**Sản phẩm này được thiết kế rũ và thoải mái cùng độ co giãn của chất vải vicose",
                "***Chính sách đổi trả trong 14 ngày tại mục Shipping ở cuối trang."
            ],
            size: ["M", "L"],
            addInfor: {
                weight: "0.3kg",
                size: "30 × 25 × 5 cm",
                color: "Yellow/Black",
            }
        },
        {
            id: 26,
            categoryId: 3,
            name: 'BW Striped L/S Tee',
            originPrice: 300000,
            salePrice: 150000,
            urlImage: [
                "https://www.thedenimaniac.com/wp-content/uploads/2018/09/DN5303-e1539859426317.jpg",
                "https://www.thedenimaniac.com/wp-content/uploads/2018/09/IMG_6143web-e1539859410225.jpg",
                "https://www.thedenimaniac.com/wp-content/uploads/2018/09/IMG_6326web-e1539859393745.jpg"
            ],
            description: [
                "100% vicose [cotton] Model 178cm – 68kg & tee size L",
                "[Size M: 50-63kg; dưới 172cm]",
                "[Size L: 64-74kg; trên 165cm]",
                "**Sản phẩm này được thiết kế rũ và thoải mái cùng độ co giãn của chất vải vicose",
                "***Chính sách đổi trả trong 14 ngày tại mục Shipping ở cuối trang."
            ],
            size: "L",
            addInfor: {
                weight: "0.3kg",
                size: "30 × 25 × 5 cm",
                color: "Black/White",
            }
        },
        {
            id: 27,
            categoryId: 3,
            name: 'Classic Sweatshirt – Salmon',
            originPrice: 360000,
            salePrice: 150000,
            urlImage: [
                "https://www.thedenimaniac.com/wp-content/uploads/2019/01/sss.jpg",
                "https://www.thedenimaniac.com/wp-content/uploads/2019/01/sss_2.jpg"
            ],
            description: [
                "100% vicose [cotton] Model 178cm – 68kg & tee size L",
                "[Size M: 50-63kg; dưới 172cm]",
                "[Size L: 64-74kg; trên 165cm]",
                "**Sản phẩm này được thiết kế rũ và thoải mái cùng độ co giãn của chất vải vicose",
                "***Chính sách đổi trả trong 14 ngày tại mục Shipping ở cuối trang."
            ],
            size: ["M", "L"],
            addInfor: {
                weight: "0.2kg",
                size: "30 × 25 × 5 cm",
                color: "Orange",
            }
        },
        {
            id: 28,
            categoryId: 3,
            name: 'Classic Sweatshirt – Wine',
            originPrice: 360000,
            salePrice: 150000,
            urlImage: [
                "https://www.thedenimaniac.com/wp-content/uploads/2019/01/ssw.jpg",
                "https://www.thedenimaniac.com/wp-content/uploads/2019/01/ssw_2.jpg"
            ],
            description: [
                "100% vicose [cotton] Model 178cm – 68kg & tee size L",
                "[Size M: 50-63kg; dưới 172cm]",
                "[Size L: 64-74kg; trên 165cm]",
                "**Sản phẩm này được thiết kế rũ và thoải mái cùng độ co giãn của chất vải vicose",
                "***Chính sách đổi trả trong 14 ngày tại mục Shipping ở cuối trang."
            ],
            size: ["M", "L"],
            addInfor: {
                weight: "0.2kg",
                size: "30 × 25 × 5 cm",
                color: "Orange",
            }
        },
        {
            id: 29,
            categoryId: 3,
            name: 'Essential Loose Tee – Black',
            originPrice: 240000,
            salePrice: 120000,
            urlImage: "https://www.thedenimaniac.com/wp-content/uploads/2019/04/AFT_2528web-e1556180430935.jpg",
            description: [
                "100% cotton – Regular Fit / Form áo suôn vừa",
                "Model 177cm – 68kg & tee size L",
                "[Size S: 40-50kg – dưới 166cm]",
                "[Size M: 50-60kg – dưới 174cm]",
                "***Chính sách đổi trả trong 14 ngày tại mục Shipping ở cuối trang."
            ],
            size: ["S", "M"],
            addInfor: {
                weight: "0.3kg",
                size: "30 × 25 × 5 cm",
                color: "Black",
            }
        },
        {
            id: 30,
            categoryId: 3,
            name: 'Logo L/S Tee – Black',
            originPrice: 320000,
            salePrice: 280000,
            urlImage: [
                "https://www.thedenimaniac.com/wp-content/uploads/2021/04/B-lstee-a-1-e1618383428987.jpg",
                "https://www.thedenimaniac.com/wp-content/uploads/2021/04/B-lstee-b-e1618383438370.jpg",
                "https://www.thedenimaniac.com/wp-content/uploads/2021/04/B-lstee-c-e1618383447308.jpg"
            ],
            description: [
                "100% cotton – Regular Fit / Form áo suôn vừa",
                "Model 179cm – 67kg & tee size L",
                "[Size M: dưới 62kg hoặc dưới 167cm]",
                "[Size L: 63-72kg hoặc trên 167cm]",
                "[Size XL: 73-80kg hoặc trên 178cm]",
                "***Chính sách đổi trả trong 14 ngày tại mục Shipping ở cuối trang."
            ],
            size: ["M", "L", "XL"],
            addInfor: {
                weight: "0.3kg",
                size: "30 × 25 × 5 cm",
                color: "Black",
            }
        },
        {
            id: 31,
            categoryId: 3,
            name: 'Logo L/S Tee – Cream White',
            originPrice: 320000,
            salePrice: 280000,
            urlImage: [
                "https://www.thedenimaniac.com/wp-content/uploads/2021/04/CW-lstee-a-1-e1618383305521.jpg",
                "https://www.thedenimaniac.com/wp-content/uploads/2021/04/CW-lstee-b-e1618383316267.jpg",
                "https://www.thedenimaniac.com/wp-content/uploads/2021/04/CW-lstee-c-e1618383327818.jpg"
            ],
            description: [
                "100% cotton – Regular Fit / Form áo suôn vừa",
                "Model 179cm – 67kg & tee size L",
                "[Size M: dưới 62kg hoặc dưới 167cm]",
                "[Size L: 63-72kg hoặc trên 167cm]",
                "[Size XL: 73-80kg hoặc trên 178cm]",
                "***Chính sách đổi trả trong 14 ngày tại mục Shipping ở cuối trang."
            ],
            size: ["M", "L", "XL"],
            addInfor: {
                weight: "0.3kg",
                size: "30 × 25 × 5 cm",
                color: "White",
            }
        },
        {
            id: 32,
            categoryId: 3,
            name: 'Logo L/S Tee – Moss Green',
            originPrice: 320000,
            salePrice: 280000,
            urlImage: [
                "https://www.thedenimaniac.com/wp-content/uploads/2021/04/MG-lstee-a-1-e1618382747672.jpg",
                "https://www.thedenimaniac.com/wp-content/uploads/2021/04/MG-lstee-b-e1618382759932.jpg",
                "https://www.thedenimaniac.com/wp-content/uploads/2021/04/MG-lstee-c-e1618382769475.jpg"
            ],
            description: [
                "100% cotton – Regular Fit / Form áo suôn vừa",
                "Model 179cm – 67kg & tee size L",
                "[Size M: dưới 62kg hoặc dưới 167cm]",
                "[Size L: 63-72kg hoặc trên 167cm]",
                "[Size XL: 73-80kg hoặc trên 178cm]",
                "***Chính sách đổi trả trong 14 ngày tại mục Shipping ở cuối trang."
            ],
            size: ["M", "L", "XL"],
            addInfor: {
                weight: "0.3kg",
                size: "30 × 25 × 5 cm",
                color: "Green",
            }
        },
    ]
]

app.get("/v1/products", (req, res) => {
    res.status(200).json(data)
})

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    })
}

app.listen(process.env.PORT||"8080", () => {
    console.log("Server is running...");
})