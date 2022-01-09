import React, {
  useMemo,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
import Select from "react-select";
import "../static/tagSelector.css";

const TagSeletor = forwardRef((props, ref) => {
  function Change() {
    const newTagArr = [
      ...selectedOption1,
      ...selectedOption2,
      ...selectedOption3,
      ...selectedOption4,
      ...selectedOption5,
    ];

    props.setPostObj({
      ...props.postObj,
      tagList: props.postObj.tagList.push(newTagArr),
    });

    console.log(props.postObj);
  }

  useImperativeHandle(ref, () => ({
    // 부모에서 사용하고 싶었던 함수
    Change,
  }));

  const option1 = useMemo(
    () => [
      { value: "none", label: "선택안함" },
      { value: "데이트", label: "데이트" },
      { value: "여행", label: "여행" },
      { value: "공부", label: "공부" },
      { value: "산책", label: "산책" },
      { value: "운동", label: "운동" },
      { value: "모임", label: "모임" },
      { value: "회의", label: "회의" },
    ],
    []
  );
  const option2 = useMemo(
    () => [
      { value: "none", label: "선택안함" },
      { value: "카페", label: "카페" },
      { value: "식당", label: "식당" },
      { value: "산", label: "산" },
      { value: "바다", label: "바다" },
      { value: "실내", label: "실내" },
      { value: "실외", label: "실외" },
      { value: "노키즈존", label: "노키즈존" },
      { value: "주차가능", label: "주차가능" },
      { value: "애견동반가능", label: "애견동반가능" },
      { value: "테라스", label: "테라스" },
    ],
    []
  );
  const option3 = useMemo(
    () => [
      { value: "none", label: "선택안함" },
      { value: "한식", label: "한식" },
      { value: "중식", label: "중식" },
      { value: "일식", label: "일식" },
      { value: "양식", label: "양식" },
      { value: "아시안음식", label: "아시안음식" },
      { value: "오마카세", label: "오마카세" },
      { value: "뷔페", label: "뷔페" },
      { value: "무한리필", label: "무한리필" },
    ],
    []
  );
  const option4 = useMemo(
    () => [
      { value: "none", label: "선택안함" },
      { value: "조용한", label: "조용한" },
      { value: "편안한", label: "편안한" },
      { value: "신나는", label: "신나는" },
      { value: "힙한", label: "힙한" },
      { value: "아기자기한", label: "아기자기한" },
      { value: "모던한", label: "모던한" },
      { value: "격식있는", label: "격식있는" },
      { value: "빈티지", label: "빈티지" },
    ],
    []
  );
  const option5 = useMemo(
    () => [
      { value: "none", label: "선택안함" },
      { value: "20대 미만", label: "20대 미만" },
      { value: "20대", label: "20대" },
      { value: "30대", label: "30대" },
      { value: "40대", label: "40대" },
      { value: "50대", label: "50대" },
      { value: "60대 이상", label: "60대 이상" },
    ],
    []
  );

  const customStyles = useMemo(
    () => ({
      option: (provided, state) => ({
        ...provided,
        opacity: 0.8,
        padding: 10,
      }),
      control: (provided) => ({
        ...provided,
        width: 310,
      }),
      menuList: (base) => ({
        ...base,
        maxHeight: "120px",
      }),
    }),
    []
  );

  const [selectedOption1, setSelectedOption1] = useState([]);
  const [selectedOption2, setSelectedOption2] = useState([]);
  const [selectedOption3, setSelectedOption3] = useState([]);
  const [selectedOption4, setSelectedOption4] = useState([]);
  const [selectedOption5, setSelectedOption5] = useState([]);

  return (
    <div className="tagSelector-container">
      <div className="tagSelector-selected">
        <span>종류</span>
        <Select
          options={option1}
          defaultValue={option1[0]}
          styles={customStyles}
          isMulti
          value={selectedOption1}
          onChange={(o) => setSelectedOption1(o)}
          isOptionDisabled={() => selectedOption1.length >= 5}
        />
      </div>

      <div className="tagSelector-selected">
        <span>장소</span>
        <Select
          options={option2}
          defaultValue={option2[0]}
          styles={customStyles}
          isMulti
          value={selectedOption2}
          onChange={(o) => setSelectedOption2(o)}
          isOptionDisabled={() => selectedOption2.length >= 5}
        />
      </div>
      <div className="tagSelector-selected">
        <span>음식</span>
        <Select
          options={option3}
          defaultValue={option3[0]}
          styles={customStyles}
          isMulti
          value={selectedOption3}
          onChange={(o) => setSelectedOption3(o)}
          isOptionDisabled={() => selectedOption3.length >= 5}
        />
      </div>
      <div className="tagSelector-selected">
        <span>분위기</span>
        <Select
          options={option4}
          defaultValue={option4[0]}
          styles={customStyles}
          isMulti
          value={selectedOption4}
          onChange={(o) => setSelectedOption4(o)}
          isOptionDisabled={() => selectedOption4.length >= 5}
        />
      </div>
      <div className="tagSelector-selected">
        <span>연령대</span>
        <Select
          options={option5}
          defaultValue={option5[0]}
          styles={customStyles}
          isMulti
          value={selectedOption5}
          onChange={(o) => setSelectedOption5(o)}
          isOptionDisabled={() => selectedOption5.length >= 5}
        />
      </div>
    </div>
  );
});

export default TagSeletor;
