import Select from "react-select";
import { FaUpload } from "react-icons/fa";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import { IMerch, ITable } from "../../types/types";
import { useState } from "react";
import ts from "typescript";

export default function MerchForm() {
  const [merch, setMerch] = useState<IMerch>({
    name: "",
    imageFront: "",
    imageBack: "",
    price: 0,
    description: "",
    size: [],
    color: [],
    stock: 0,
  });

  const [colorBars, setColorBars] = useState<ITable[]>([
    {
      color1: "#fff",
      color2: "#fff",
      imageFront: null,
      imageBack: null,
    },
  ]);

  const handleChange = (e: any) => {
    setMerch({ ...merch, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const form = new FormData();
    for (const key in merch) {
      if (merch.hasOwnProperty(key)) {
        //@ts-ignore
        form.append(key, merch[key]);
      }
    }
  };
  return (
    <div className="card">
      <div className="card-body">
        <form className="row mt-3" onSubmit={handleSubmit}>
          <h3 className="bold_text">Mearch Details</h3>
          <div className="col-12 mt-5">
            <div className="input-field">
              <input type="text" name="name" onChange={handleChange} required />
              <label>Name</label>
              <p className="ghost" aria-hidden="true">
                Name
              </p>
            </div>
          </div>
          <div className="col-6">
            <div className="input-field">
              <input
                type="number"
                name="price"
                onChange={handleChange}
                required
              />
              <label>Price</label>
              <p className="ghost" aria-hidden="true">
                Price
              </p>
            </div>
          </div>
          <div className="col-6">
            <Select
              options={[
                { value: "S", label: "S" },
                { value: "M", label: "M" },
                { value: "L", label: "L" },
                { value: "XL", label: "XL" },
              ]}
              isMulti={true}
              isClearable={false}
              onChange={(e: any) => {
                setMerch({ ...merch, size: [...merch.size, e[0].value] });
              }}
              styles={{
                control: (base) => ({
                  ...base,
                  height: "46px",
                }),
              }}
            />
          </div>
          <div className="col-12">
            <Table className="table table-bordered">
              <Thead>
                <Tr>
                  <Th>Primary Color</Th>
                  <Th>Seconday Color</Th>
                  <Th>Front Image</Th>
                  <Th>Back Image</Th>
                </Tr>
              </Thead>
              <Tbody>
                {colorBars.map((colorBar, index) => (
                  <Tr key={index}>
                    <Td>
                      <input
                        type="color"
                        className="form-control"
                        value={colorBar.color1}
                        onChange={(e) => {
                          let temp_colorBars = [...colorBars];
                          temp_colorBars[index].color1 = e.target.value;
                          setColorBars(temp_colorBars);
                        }}
                        name="primary_color"
                      />
                    </Td>
                    <Td>
                      <input
                        type="color"
                        className="form-control"
                        value={colorBar.color2}
                        onChange={(e) => {
                          let temp_colorBars = [...colorBars];
                          temp_colorBars[index].color2 = e.target.value;
                          setColorBars(temp_colorBars);
                        }}
                        name="secondary_color"
                      />
                    </Td>
                    <Td>
                      <div className="file-input">
                        <input
                          type="file"
                          name="imageFront"
                          id="imageFront"
                          onChange={(e) => {
                            if (!e.target.files) return;
                            let temp_colorBars = [...colorBars];
                            temp_colorBars[index].imageFront =
                              e.target.files[0];
                            setColorBars(temp_colorBars);
                          }}
                          className="file-input__input"
                        />
                        <label
                          className="file-input__label"
                          htmlFor="imageFront"
                        >
                          <FaUpload />
                          <span>
                            {colorBar.imageFront?.name || "Upload File"}
                          </span>
                        </label>
                      </div>
                    </Td>
                    <Td>
                      <div className="file-input">
                        <input
                          type="file"
                          name="imageBack"
                          id="imageBack"
                          className="file-input__input"
                          onChange={(e) => {
                            if (!e.target.files) return;
                            let temp_colorBars = [...colorBars];
                            temp_colorBars[index].imageBack = e.target.files[0];
                            setColorBars(temp_colorBars);
                          }}
                        />
                        <label
                          className="file-input__label"
                          htmlFor="imageBack"
                        >
                          <FaUpload />
                          <span>
                            {colorBar.imageBack?.name || "Upload file"}
                          </span>
                        </label>
                      </div>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </div>
          <div className="col-12">
            <div className="input-field">
              <textarea
                name="phone"
                rows={4}
                onChange={handleChange}
                required
              />
              <label>Describtion </label>
              <p className="ghost" aria-hidden="true">
                Describtion
              </p>
            </div>
          </div>
          <div className="col-12">
            <button
              type="submit"
              className="theme_btn btn-block mt-4"
              //   onClick={() => props.setCart("shipping")}
            >
              Create Merch
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
