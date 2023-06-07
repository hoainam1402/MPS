<script>
export default {
  name: "MBasePage",
  setup(props) {
    let init = (props) => {

      // khởi tạo dữ liệu
      initData();

      // khởi tạo và đăng ký các sự kiện 
      registerEvent();
      
    }

    const initData = () => {

    }

    const registerEvent = () => {
      var me = this;
      debugger
    }

    return { init}
  },
};
</script>
