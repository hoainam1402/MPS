import {httpClient} from "./httpClient"

const baseUrl = `${import.meta.env.VITE_DOMAIN_BE}/api/v1`;

class BaseRepository extends httpClient{
    //#region Propertiesa
	resource;
    //#endregion

    //#region Constructor
    constructor(resource, baseDomain = baseUrl){
		super(baseDomain);
        this.resource = resource;
    }
    //#endregion

    //#region Methods

    //getter 

    /**
	 * lấy ra danh sách dữ liệu kèm theo thông tin phân trang
	 * @author: TNLAM (20-07-2022)
	 * @param {Number} pageIndex số trang bắt đầu từ 1
	 * @param {Number} pageSize số item/trang
	 * @param {String} filters từ khoá tìm kiếm
	 * @returns Promise chứa data để tiếp tục xử lý
	 */
	// getPaging(pageIndex, pageSize, filters) {
	// 	return this._repository.get(`${this.resource}?pageIndex=${pageIndex}&pageSize=${pageSize}&filter=${filters}`);
	// }

    /**
	 * lấy ra đối tượng dựa vào id
	 * @author: TNLAM (20-07-2022)
	 * @param {String} id id của employee
	 * @returns Promise chứa data để tiếp tục xử lý
	 */
	async getById(id, onSuccess, onFailure) {
		let url = `${this.resource}/${id}`;
		return await this._repository.get(url, onSuccess, onFailure);
	}

    /**
	 * lấy ra tất cả dữ liệu
	 * @author: TNLAM (20-07-2022)
	 * @param
	 * @returns Promise chứa data để tiếp tục xử lý
	 */
	async getAll() {
		return await this._repository.get(`${this.resource}/all`);
	}

    /**
	 * tạo mới một đối tượng dữ liệu
	 * @author: TNLAM (20-07-2022)
	 * @param {Object} dataObject cần tạo
	 * @returns Promise chứa data để tiếp tục xử lý
	 */
	create(dataObject) {
		return this._repository.post(`${this.resource}`, dataObject);
	}

    /**
	 * cập nhật mới một đối tượng dữ liệu
	 * @author: TNLAM (20-07-2022)
	 * @param {Object} dataObject cần sửa
	 * @returns Promise chứa data để tiếp tục xử lý
	 */
	update(dataObject) {
		return this._repository.put(`${this.resource}`, dataObject);
	}

    /**
	 * xóa một đối tượng dữ liệu
	 * @author: TNLAM (20-07-2022)
	 * @param {String} id dataObject cần xóa
	 * @returns Promise chứa data để tiếp tục xử lý
	 */
	delete(id) {
		return this._repository.delete(`${this.resource}/${id}`);
	}

    //#endregion
}

export {BaseRepository};


