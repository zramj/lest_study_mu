window.onload = function() {
    flatpickr(".anotherSelector", {});
    flatpickr("#activityStartDateInput", {
        minDate: "today",
        dateFormat: "Y-m-d",
        onClose: function(selectedDates) {
            // 在選擇日期後的操作
            if (selectedDates.length > 0) {
                // 如果選擇了日期，將相應的時間輸入框解除禁用
                $('#activityStartTimeInput').prop('disabled', false);
            } else {
                // 如果未選擇日期，保持相應的時間輸入框禁用
                $('#activityStartTimeInput').prop('disabled', true);
            }
        }
    });
    flatpickr("#activityEndDateInput", {
        minDate: "today",
        dateFormat: "Y-m-d",
        onClose: function(selectedDates) {
            // 在選擇日期後的操作
            if (selectedDates.length > 0) {
                // 如果選擇了日期，將相應的時間輸入框解除禁用
                $('#activityEndTimeDInput').prop('disabled', false);
            } else {
                // 如果未選擇日期，保持相應的時間輸入框禁用
                $('#activityEndTimeDInput').prop('disabled', true);
            }
        }
    });
    flatpickr("#activityStartTimeInput", {
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i", // 24 小时制
        // 或者使用下面的选项进行 12 小时制
        // dateFormat: "h:i K", // 12 小时制
        disableMobile: true // 在移动设备上禁用原生时间选择器
    });
    flatpickr("#activityEndTimeDInput", {
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i", // 24 小时制
        // 或者使用下面的选项进行 12 小时制
        // dateFormat: "h:i K", // 12 小时制
        disableMobile: true // 在移动设备上禁用原生时间选择器
    });
};

$(function() {
    // 監聽checkbox改變事件
    $('#disableDate').on('change',function() {
        if(this.checked) {
            // 當checkbox被勾選時，設定日期和時間輸入框為disabled狀態
            $('#activityEndDateInput').prop('disabled', true).val('');
            $('#activityEndTimeDInput').prop('disabled', true).val('');
            $('#activityEndDateInput-error').remove();
        } else {
            // 當checkbox未被勾選時，移除日期和時間輸入框的disabled狀態
            $('#activityEndDateInput').prop('disabled', false);
        }
    });
});