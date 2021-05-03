(function($) {
    // 本函数每次调用只负责一个轮播图的功能 
    // 也就是说只会产生一个轮播图，这个函数的作用域只能分配给一个轮播图
    // 要求在调用本函数的时候务必把当前轮播图的根标签传递过来
    // 这里的形参 ele 就是某个轮播的根标签

    // This function is only responsible for the function of a carousel diagram each time it is called
    // In other words, only one carousel graph will be generated, and the scope of this function can only be assigned to one carousel graph
    // It is required to pass the root label of the current carousel picture when calling this function
    // The formal parameter ele here is the root label of a certain carousel


    var slide = function(ele,options) {
        console.log('Accessed');
        var $ele = $(ele);
        // 默认设置选项
        // default setting options
        var setting = {
        		// 控制轮播的动画时间
                // Control the animation time of the carousel
            speed: 1000,
            // 控制 interval 的时间 (轮播速度)
            // Control interval time (carousel speed)
            interval: 2000,
            
        };
        // 对象合并
        // object merger
        $.extend(true, setting, options);
        // 规定好每张图片处于的位置和状态
        // Prescribe the position and state of each picture
        var states = [
            { $zIndex: 1, width: 120, height: 250, top: 69, left: 134, $opacity: 0.2 },
            { $zIndex: 2, width: 130, height: 270, top: 59, left: 0, $opacity: 0.4 },
            { $zIndex: 3, width: 170, height: 318, top: 35, left: 110, $opacity: 0.7 },
            { $zIndex: 4, width: 224, height: 400, top: 0, left: 263, $opacity: 1 },
            { $zIndex: 3, width: 170, height: 318, top: 35, left: 470, $opacity: 0.7 },
            { $zIndex: 2, width: 130, height: 270, top: 59, left: 620, $opacity: 0.4 },
            { $zIndex: 1, width: 120, height: 250, top: 69, left: 500, $opacity: 0.2 }
        ];

        var $lis = $ele.find('li');
        var timer = null;

        // 事件
        // Event
        $ele.find('.hi-next').on('click', function() {
            next();
        });
        $ele.find('.hi-prev').on('click', function() {
            states.push(states.shift());
            move();
        });
        
        /*
        $ele.on('mouseenter', function() {
            clearInterval(timer);
            timer = null;
        }).on('mouseleave', function() {
            autoPlay();
        });
        */

        move();
        //autoPlay();

        // 让每个 li 对应上面 states 的每个状态
        // Let each li correspond to each state of the above states
        // 让 li 从正中间展开
        // Let li spread out from the middle
        function move() {
            $lis.each(function(index, element) {
                var state = states[index];
                $(element).css('zIndex', state.$zIndex).finish().animate(state, setting.speed).find('img').css('opacity', state.$opacity);
            });
        }

        // 切换到下一张
        // Switch to next
        function next() {
            // 原理：把数组最后一个元素移到第一个
            // Principle: Move the last element of the array to the first
            states.unshift(states.pop());
            move();
        }
        
        /*
        function autoPlay() {
            timer = setInterval(next, setting.interval);
        }
        */
    }
    // 找到要轮播的轮播图的根标签，调用 slide()
    // Find the root label of the carousel picture you want to rotate, and call slide()
    $.fn.hiSlide = function(options) {
        console.log(this);
        $(this).each(function(index, ele) {
            console.log(ele);
            slide(ele,options);
        });
        // 返回值，以便支持链式调用
        // Return value in order to support chained calls
        return this;
    }
})(jQuery);
