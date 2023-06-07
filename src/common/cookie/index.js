/***
 * Làm việc với cookie
 * @author : TNLAM (20-10-2022)
 */

var cookie = cookie || {};

export default {
  /***
   * Tạo cookie
   * @author : TNLAM (20-10-2022)
   * @param {String} fieldName tên trường 
   * @param {String} value giá trị
   * @param {Number}  exdays thời gian (giờ)
   * @return {}
   */
  setCookie: (fieldName, value, exdays = 12) => {
    var d = new Date();
    // Tạo thời gian kết thúc là 1 ngày.
    d.setTime(d.getTime() + exdays * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = fieldName + "=" + value + "; " + expires;
  },

  /***
   * Lấy trường trong cookie
   * @author : TNLAM (20-10-2022)
   * @param {String} fieldName tên trường 
   * @return {}
   */
  getCookie: (fieldName) => {
    var name = fieldName + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") c = c.substring(1);
      if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
  },

  /***
   * Xóa cookie
   * @author : TNLAM (20-10-2022)
   * @param {} fieldName tên trường 
   * @return {}
   */
  deleteCookie: () => {
    document.cookie = "Token=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    document.cookie = "role=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    document.cookie = "EmployeeID=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    document.cookie = "EmployeeName=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    document.cookie = "PositionName=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
  },

  /***
   * Lấy ra user
   * @author : TNLAM (20-10-2022)
   * @param {} 
   * @return {Object} user
   */
  getUser() {
    let user = {
      Token: this.getCookie("Token"),
      Level: this.getCookie("role"),
      EmployeeID: this.getCookie("EmployeeID"),
      EmployeeName: this.getCookie("EmployeeName"),
      PositionName: this.getCookie("PositionName"),
    };
    return user;
  },
};

