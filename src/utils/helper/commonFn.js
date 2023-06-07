export default{
    addCollapsedPropertyForTree(data){
        data.forEach(item => {
            if (item.children) {
              item.collapsed = true;
              this.addCollapsedPropertyForTree(item.children);
            }
        });

        return data;
    }
}