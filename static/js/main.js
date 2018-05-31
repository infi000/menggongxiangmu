$(document).ready(function(e) {
    createDOM_navModal();


    $(".g-hd-nav a").mouseover(function(e) {
        event.stopPropagation();
        $(".g-hd-modal").stop();
        var dt = $(this).attr("datatype");
        $(".g-hd-modal-con").hide();
        if (dt) {

            $(".g-hd-modal").slideDown();
            $(".g-hd-modal-con[datatype=" + dt + "]").show();

        } else {
            $(".g-hd-modal").hide();
        }
    });
    $(".g-hd").mouseleave(function(e) {
        event.stopPropagation();
        $(".g-hd-modal").stop();
        $(".g-hd-modal").hide();
    });
});



function createDOM_navModal(argument) {
    var html='<div class="g-hd-modal-con" datatype="about" style="display: none">\
                    <div class="g-hd-modal-l">\
                        <ul>\
                            <li class="f-bg-main"><a href="">公司简介 <embed src="./static/img/arrow.svg" type="image/svg+xml" pluginspage="http://www.adobe.com/svg/viewer/install/" /></a></li>\
                            <li><a href="">企业文化<embed src="./static/img/arrow.svg" type="image/svg+xml" pluginspage="http://www.adobe.com/svg/viewer/install/" /></a></li>\
                            <li><a href="">企业资质<embed src="./static/img/arrow.svg" type="image/svg+xml" pluginspage="http://www.adobe.com/svg/viewer/install/" /></a></li>\
                        </ul>\
                    </div>\
                    <div class="g-hd-modal-r">\
                        <div class="pull-left">\
                            <dl class="title-nav">\
                                <dt class="f-c-main">企业文化</dt>\
                                <dd>精研、创新、忠信、共享</dd>\
                            </dl>\
                            <ul class="title-link">\
                                <li><span>快速链接</span></li>\
                                <li><a href="">文化链接跳</a></li>\
                                <li><a href="">文化链接跳</a></li>\
                                <li><a href="">文化链接跳</a></li>\
                                <li><a href="">文化链接跳</a></li>\
                            </ul>\
                        </div>\
                        <div class="pull-right">\
                            <div class="title-img">\
                                <p>企业文化建设</p>\
                                <img src="./static/img/about1.png" alt="">\
                                <p><a href="">企业文化建设链接跳转</a></p>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="clear"></div>\
                </div>\
                <div class="g-hd-modal-con" datatype="product" style="display: none">\
                    <div class="g-hd-modal-l">\
                        <ul>\
                            <li class="f-bg-main"><a href="">微模块IDC数据中心建设 <embed src="./static/img/arrow.svg" type="image/svg+xml" pluginspage="http://www.adobe.com/svg/viewer/install/" /></a></li>\
                            <li><a href="">软件项目开发与实施<embed src="./static/img/arrow.svg" type="image/svg+xml" pluginspage="http://www.adobe.com/svg/viewer/install/" /></a></li>\
                            <li><a href="">大数据平台建设与应用开发<embed src="./static/img/arrow.svg" type="image/svg+xml" pluginspage="http://www.adobe.com/svg/viewer/install/" /></a></li>\
                            <li><a href="">重点数据安全保护<embed src="./static/img/arrow.svg" type="image/svg+xml" pluginspage="http://www.adobe.com/svg/viewer/install/" /></a></li>\
                            <li><a href="">IT系统监控与运维<embed src="./static/img/arrow.svg" type="image/svg+xml" pluginspage="http://www.adobe.com/svg/viewer/install/" /></a></li>\
                        </ul>\
                    </div>\
                    <div class="g-hd-modal-r">\
                        <div class="pull-left">\
                            <dl class="title-nav">\
                                <dt class="f-c-main">微模块IDC数据中心建</dt>\
                                <dd> </dd>\
                            </dl>\
                            <ul class="title-link">\
                                <li><a href="">在线工频系列UPS</a></li>\
                                <li><a href="">后备系列UPS</a></li>\
                                <li><a href="">在线高频系列UPS</a></li>\
                                <li><a href="">户外系列UPS</a></li>\
                                <li><a href="">监控设备选配件</a></li>\
                            </ul>\
                        </div>\
                        <div class="pull-right">\
                            <div class="title-product">\
                                <a href="">\
                                    <dt><img src="./static/img/product3.png" alt=""></dt>\
                                    <dd>EA660系列模块化 20-160kVA UPS</dd>\
                                </a>\
                                <a href="">\
                                    <dt><img src="./static/img/product3.png" alt=""></dt>\
                                    <dd>EA660系列模块化 20-160kVA UPS</dd>\
                                </a>\
                                <a href="">\
                                    <dt><img src="./static/img/product3.png" alt=""></dt>\
                                    <dd>EA660系列模块化 20-160kVA UPS</dd>\
                                </a>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="clear"></div>\
                </div>\
                <div class="g-hd-modal-con" datatype="news" style="display: none">\
                    <div class="g-hd-modal-l">\
                        <ul>\
                            <li class="f-bg-main"><a href="">企业新闻 <embed src="./static/img/arrow.svg" type="image/svg+xml" pluginspage="http://www.adobe.com/svg/viewer/install/" /></a></li>\
                            <li><a href="">业内新闻<embed src="./static/img/arrow.svg" type="image/svg+xml" pluginspage="http://www.adobe.com/svg/viewer/install/" /></a></li>\
                        </ul>\
                    </div>\
                    <div class="g-hd-modal-r">\
                        <div class="pull-left" style="width: 80%;">\
                            <dl class="title-nav">\
                                <dt class="f-c-main">企业新闻</dt>\
                                <dd> </dd>\
                            </dl>\
                            <ul class="title-link">\
                                <li><a href="">镝普为东莞产业转型升级树立典范</a><span>2017-11-23</span></li>\
                                <li><a href="">洞察企业转型之道 助力企业转型之举的主线</a><span>2017-08-22</span></li>\
                                <li><a href="">中企跨境并购十年回顾</a><span>2017-08-20</span></li>\
                                <li><a href="">潘家铮获第九届光华工程科技奖成就奖</a><span>2017-09-29</span></li>\
                                <li><a href="">潘家铮获第九届光华工程科技奖成就奖</a><span>2017-09-22</span></li>\
                            </ul>\
                        </div>\
                    </div>\
                    <div class="clear"></div>\
                </div>\
                <div class="g-hd-modal-con" datatype="contact" style="display: none">\
                    <div class="g-hd-modal-l">\
                        <ul>\
                            <li class="f-bg-main"><a href="">服务支持 <embed src="./static/img/arrow.svg" type="image/svg+xml" pluginspage="http://www.adobe.com/svg/viewer/install/" /></a></li>\
                            <li><a href="">加入我们<embed src="./static/img/arrow.svg" type="image/svg+xml" pluginspage="http://www.adobe.com/svg/viewer/install/" /></a></li>\
                        </ul>\
                    </div>\
                    <div class="g-hd-modal-r">\
                        <div class="pull-left">\
                            <dl class="title-nav">\
                                <dt class="f-c-main">服务支持</dt>\
                                <dd></dd>\
                            </dl>\
                            <ul class="title-link">\
                                <li>联系电话：+68 13810586885</li>\
                                <li>联系邮箱： service@deeputech.com</li>\
                                <li>地理位置: 海淀区海淀南路甲21号</li>\
                                <li>中关村知识产权大厦A座两层</li>\
                            </ul>\
                        </div>\
                        <div class="pull-right">\
                            <div class="title-img">\
                                <p>地图</p>\
                                <img src="./static/img/about1.png" alt="">\
                            </div>\
                        </div>\
                    </div>\
                    <div class="clear"></div>\
                </div>';

    $(".g-hd-modal").html(html);
}