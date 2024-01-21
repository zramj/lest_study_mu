//TODO: 欄位驗證還沒做 (活動發表編輯)

$(function(){
    //註冊欄位驗證
    $('#signupForm').validate({
        onkeyup: function(element, event) {
            //去除左側空白
            var value = this.elementValue(element).replace(/^\s+/g, "");
            $(element).val(value);
        },
        rules: {
            signUpEmailInput: {
                required: true,
                email: true
            },
            signUpPwInput: {
                required: true,
                minlength: 8
            },
            signUpPwAgainInput: {
                required: true,
                equalTo: "#signUpPwInput"
            },
            nickNameInput: {
                required: true
            }
        },
        messages: {
            signUpEmailInput: {
              required: "請輸入註冊信箱",
              email: "請輸入有效的電子郵件地址"
            },
            signUpPwInput: {
              required: "請輸入密碼",
              minlength: "請輸入至少8個字元"
            },
            signUpPwAgainInput: {
              required: "請再次輸入密碼",
              equalTo: "兩次輸入的密碼不一致"
            },
            nickNameInput: {
              required: "請輸入暱稱"
            }
        },
        submitHandler: function(form) {
            // form.submit();
            // 跳转到 signup-success.html 页面
            window.location.href = 'signup-success.html'; 
        }
    });

    //登入欄位驗證
    $('#loginForm').validate({
        onkeyup: function(element, event) {
            //去除左側空白
            var value = this.elementValue(element).replace(/^\s+/g, "");
            $(element).val(value);
        },
        rules: {
            logInEmailInput: {
                required: true,
                email: true
            },
            passwordInput: {
                required: true,
                minlength: 8
            }
        },
        messages: {
            logInEmailInput: {
              required: "請輸入註冊信箱",
              email: "請輸入有效的電子郵件地址"
            },
            passwordInput: {
              required: "請輸入密碼",
              minlength: "請輸入至少8個字元"
            }
        },
        submitHandler: function(form) {
            // form.submit();
            // 跳转到 index.html 页面
            window.location.href = 'index.html'; 
        }
    });

    //忘記密碼欄位驗證
    $('#forgetPasswordForm').validate({
        onkeyup: function(element, event) {
            //去除左側空白
            var value = this.elementValue(element).replace(/^\s+/g, "");
            $(element).val(value);
        },
        rules: {
            forgetPwEmailInput: {
                required: true,
                email: true
            }
        },
        messages: {
            forgetPwEmailInput: {
              required: "請輸入註冊信箱",
              email: "請輸入有效的電子郵件地址"
            }
        },
        submitHandler: function(form) {
            // form.submit();
            // 跳转到 signup-success.html 页面
            window.location.href = 'signup-success.html'; 
        }
    });    

    //修改密碼欄位驗證
    $('#changePasswordForm').validate({
        onkeyup: function(element, event) {
            //去除左側空白
            var value = this.elementValue(element).replace(/^\s+/g, "");
            $(element).val(value);
        },
        rules: {
            pwNowInput: {
                required: true,
                minlength: 8
            },
            pwInput: {
                required: true,
                minlength: 8
            },
            pwAgainInput: {
                required: true,
                equalTo: "#pwInput"
            }
        },
        messages: {
            pwNowInput: {
              required: "請輸入密碼",
              minlength: "請輸入至少8個字元"
            },
            pwInput: {
                required: "請輸入密碼",
                minlength: "請輸入至少8個字元"
            },
            pwAgainInput: {
              required: "請再次輸入密碼",
              equalTo: "兩次輸入的密碼不一致"
            }
        },
        submitHandler: function(form) {
            form.submit(); 
        }
    });    

    //個人帳號欄位驗證
    $('#accountForm').validate({
        onkeyup: function(element, event) {
            //去除左側空白
            var value = this.elementValue(element).replace(/^\s+/g, "");
            $(element).val(value);
        },
        rules: {
            nickNameInput: {
                required: true
            },
            phoneNumInput: {
                required: true,
                minlength: 8,
                number: true
            },
            genderOption: {
                required: true
            }       
        },
        messages: {
            nickNameInput: {
                required: "請輸入暱稱"
            },
            phoneNumInput: {
                required: "請輸入聯絡電話",
                minlength: "請輸入至少8個數字",
                number:"電話須為數字"
            },
            genderOption: {
                required: "請填寫性別"
            }              
        },
        errorPlacement: function(error, element) {
            if (element.attr("name") === "genderOption") {
                error.insertAfter(".gender-option"); 
                // 将错误消息插入到指定的 <div> 后面
            } else {
                error.insertAfter(element);
            }
        },
        submitHandler: function(form) {
            form.submit();
        }
    });    

    //參加活動欄位驗證
    $('#registrationForm').validate({
        onkeyup: function(element, event) {
            //去除左側空白
            var value = this.elementValue(element).replace(/^\s+/g, "");
            $(element).val(value);
        },
        rules: {
            joinMemberInput: {
                required: true
            },
            contactEmailInput: {
                required: true,
                email: true
            },            
            contactNumberInput: {
                required: true,
                minlength: 8,
                number: true
            },
            joinCheck: {
                required: true
            }       
        },
        messages: {
            joinMemberInput: {
                required: "請輸入姓名"
            },
            contactEmailInput: {
                required: "請輸入連絡 Email",
                email: "請輸入有效的電子郵件地址"
            },            
            contactNumberInput: {
                required: "請輸入聯絡電話",
                minlength: "請輸入至少8個數字",
                number:"電話須為數字"
            },
            joinCheck: {
                required: "請同意遵守相關規定"
            }              
        },
        errorPlacement: function(error, element) {
            if (element.attr("name") === "joinCheck") {
                error.insertAfter(".join-check"); 
                // 将错误消息插入到指定的 <div> 后面
            } else {
                error.insertAfter(element);
            }
        },
        submitHandler: function(form) {
            // form.submit();
            // 跳转到 activity-detail.html 页面
            window.location.href = 'activity-detail.html'; 
        }
    }); 


    $.validator.addMethod("quillContentNotEmpty", function(value, element) {
        var quillContent = quill.getText().trim(); 
        // 获取 Quill 编辑器的内容

        // 输出 Quill 编辑器内容到控制台
        console.log("Quill Content: ", quillContent);

        // 返回验证结果
        return quillContent !== "" && quillContent !== "<p><br></p>";
    }, "請輸入活動詳細內容");

    //活動發表編輯欄位驗證
    $('#activityManageForm').validate({
        onkeyup: function(element, event) {
            //去除左側空白
            var value = this.elementValue(element).replace(/^\s+/g, "");
            $(element).val(value);
        },
        rules: {
            amTitleInput: {
                required: true
            },
            deadlineInput: {
                required: true
            },
            joinNumberInput: {
                required: true
            },
            activityStartDateInput: {
                required: true
            },
            activityStartTimeInput: {
                required: true
            },
            activityEndDateInput: {
                required: true
            },
            activityEndTimeDInput: {
                required: true
            },
            amLocationInput: {
                required: true
            },
            organiserEmailInput: {
                required: true,
                email: true
            },
            organizerInfoTextarea: {
                required: true
            },  
            amGoalPlanTextarea: {
                required: true
            },
            amGoalPlanTextarea: {
                required: true
            },
            amDetailsTextarea: {
                quillContentNotEmpty: true // 使用自定义验证方法验证 Quill 编辑器内容
            }  
        },
        messages: {
            amTitleInput: {
                required: "請輸入活動標題"
            },
            deadlineInput: {
                required: "請輸入報名截止日"
            },
            joinNumberInput: {
                required: "請輸入參加人數"
            },
            activityStartDateInput: {
                required: "請輸入開始日期"
            },
            activityStartTimeInput: {
                required: "請輸入開始時間"
            },
            activityEndDateInput: {
                required: "請輸入結束日期"
            },
            activityEndTimeDInput: {
                required: "請輸入結束時間"
            },
            amLocationInput: {
                required: "請輸入活動地點"
            },
            organiserEmailInput: {
                required: "請輸入主辦人 Email",
                email: "請輸入有效的電子郵件地址"
            },
            organizerInfoTextarea: {
                required: "請輸入主辦單位簡介"
            },
            amGoalPlanTextarea: {
                required: "請輸入活動目標計畫"
            }, 
            amDetailsTextarea: {
                quillContentNotEmpty: "請輸入活動詳細內容" 
                // 自定义 Quill 编辑器的错误消息
            }         
        },
        submitHandler: function(form) {
            // form.submit();
            // 跳转到 activity-detail.html 页面
            window.location.href = 'activity-detail.html'; 
        }
    }); 

});



// $(function(){
    
//     $('#form').validate({
//         /* 常用檢測屬性
//         required:必填
//         noSpace:空白
//         minlength:最小長度
//         maxlength:最大長度
//         email:信箱格式
//         number:數字格式
//         url:網址格式https://www.minwt.com
//         */
//         onkeyup: function(element, event) {
//             //去除左側空白
//             var value = this.elementValue(element).replace(/^\s+/g, "");
//             $(element).val(value);
//         },
//         rules: {
//             fname: {
//                 required: true
//             },
//             phone:{
//                 required: true,
//                 minlength: 8,
//                         number: true
//             },
//             address: 'required',
//             url:{
//                 url: true
//             },
//             email: {
//                 required: true,
//                 email: true
//             }
//         },
//         messages: {
//             fname: {
//                 required:'必填'
//             },
//             phone: {
//                 required:'必填',
//                 minlength:'不得少於8位',
//                 number:'電話需為數字'
//             },
//             address: '必填',
//             email: {
//                 required:'必填',
//                 email:'Email格式不正確'
//             },
//             url:'網址格式不正確'        
//         },
//         submitHandler: function(form) {
//             form.submit();
//         }
//     });


// });