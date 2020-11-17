import React from 'react';
import '../css/medical.css'
import premium_img01 from "../assets/images/premium_img01.jpg"
import premium_img02 from "../assets/images/premium_img02.jpg"
import premium_img03 from "../assets/images/premium_img03.jpg"
import premium_icon01 from "../assets/images/premium_icon01.png"
import premium_icon02 from "../assets/images/premium_icon02.png"
import premium_icon03 from "../assets/images/premium_icon03.png"
import premium_icon04 from "../assets/images/premium_icon04.png"
import medical01 from "../assets/images/medical01.jpg"
import cleaning_public02 from "../assets/images/cleaning public02.jpg"
import publicstate from "../assets/images/publicstate.jpg"
import medical from "../assets/images/medical.jpg"
import cleaning_process from "../assets/images/cleaning_process_img.png"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
const Medical = () => {
    return (
    <>
        <Navbar />
        <div id="inner_medi">
        <h2 className="h2_medi">의료시설</h2>
            <div className="con_img_medi">
                <div className="img_text_medi">
                    <span className="img_text_tit_edu"> 프로젝트에서 제공하는 특별한 청소! </span><br/>
                    <p>11월 한달 간 프로젝트에서 청소를 진행하시는 고객님께 프로젝트의 <strong>프리미엄 서비스</strong>를 제공해드립니다</p>
                    <i>프로젝트 Premium </i>
                    <span>프로젝트 마스터가 기본청소에 오염방지 코팅서비스, 스팀 살균 청소,<br/>
                        친환경 청소, 하자체크 등의 고급서비스를 포함한 차별화된 서비스입니다.
                        <br/>Premium 서비스 신청으로 차별화된 고품질의 서비스를 느껴보세요~</span><br/>
                    </div>
                    <div className="flex_contents_medi">
                        <div className="flex_contents_box">
                            <img src={premium_img01} className="img1_medi"/><br/>
                            <span className="flex_contents_txt_medi">PROFESSIONAL SERVICE</span>
                        </div>
                        <div className="flex_contents_box">
                            <img src={premium_img02} className="img2_medi"/><br/>
                            <span className="flex_contents_txt_medi">PROMISE TO CUSTMOER</span>
                        </div>
                        <div className="flex_contents_box">
                            <img src={premium_img03} className="img3"/><br/>
                            <span className="flex_contents_txt_medi">PERFECT CLEANING</span>
                        </div>
                        <br/>
                    </div>
                    <div className="flex_contents2_medi">
                        <div className="flex_contents_box2">
                            <div className="png_box_medi">
                                <img src={premium_icon01} className="png1_medi"/><br/>
                            </div>
                            <span className="flex_contents_txt_medi2">오염방지 코팅 <br/>서비스</span>
                        </div>
                        <div className="flex_contents_box2">
                            <div className="png_box_medi">
                                <img src={premium_icon02} className="png2_medi"/><br/>
                            </div>
                            <span className="flex_contents_txt_medi2">스팀살균청소</span>
                        </div>
                        <div className="flex_contents_box2">
                            <div className="png_box_medi">
                                <img src={premium_icon03} className="png3_medi"/><br/>
                            </div>
                            <span className="flex_contents_txt_medi2">친환경 청소</span>
                        </div>
                        <div className="flex_contents_box2">
                            <div className="png_box_medi">
                                <img src={premium_icon04} className="png4_medi"/><br/>
                            </div>
                            <span className="flex_contents_txt_medi2">꼼꼼함이 돋보이는<br/> 서비스 용도별</span>
                        </div>
                    </div>
            </div>
                    <div className="intro_b_medi"/>
                        <div className="intro_medi">
                            <h2 className="h2_medi">의료시설 청소란?</h2>
                            <p className="p_medi">
                                병원은 의료진과 환자등 많은 사람들이 이용하는 공간입니다.<br/>
                                특히 질병을 치료하러 오는 곳이기에 위생과 청결은 필수입니다.<br/>
                                많은 의료진과 환자들의 보다 편안한 치료를 위해 병원의 컨디션을 최상으로 만들어<br/>
                                모두가 웃을 수 있는 공간으로 케어할 수 있는 프로젝트의 의료시설청소 서비스 입니다.<br/>
                            </p>
                        </div>
                <div className="flex_contents3_medi">
                    <h2 className="tit_medi">청소범위</h2>
                        <div className="number_medi">01</div>
                        <ul className="list_1_medi">
                            <li>
                                <div className="position_medi">진료실</div>
                            </li>
                            <li>책상,의자 등 사무용 가구 청소</li>
                            <li>각종 OA기기 청소</li>
                            <li>업무공간,기타공간 청소</li>
                            <li>실내등, 스위치, 콘센트, 기타 조명 시설 먼지 및 오염 제거</li>
                            <li>마루, 바닥 이물질 제거 및 찌든 때 제거</li>
                            <li>출입문 먼지 및 오염 제거</li>
                            <li>오염 방지 코팅 시공 (프리미엄 청소)</li>
                            <li>스팀살균청소 (프리미엄 청소)</li>
                            <li>구역별 전용 걸레 사용 (프리미엄 청소)</li>
                            <li>인체에 무해한 천연세제 사용 (프리미엄 청소)</li>
                            <li><img src={medical01} alt="진료실" className="list_img1_medi"/></li>
                        </ul>   
                        <div className="number_medi">02</div>
                        <ul className="list_1_medi">
                            <li>
                                <div className="position_medi">화장실</div>
                            </li>
                            <li>배수구 오염제거</li>
                            <li>타일 먼지 및 오염제거</li>
                            <li>바닥, 타일 사이의 이물질 제거 및 광택</li>
                            <li>스테인리스 부분 세척 및 광택</li>
                            <li>오염 방지 코팅 시공 (프리미엄 청소)</li>
                            <li>스팀살균청소 (프리미엄 청소)</li>
                            <li>구역별 전용 걸레 사용 (프리미엄 청소)</li>
                            <li>인체에 무해한 천연세제 사용 (프리미엄 청소)</li>
                            <li><img src={cleaning_public02} alt="화장실" className="list_img2_medi"/></li>
                        </ul>
                        <div className="number_medi">03</div>
                        <ul className="list_1_medi">
                            <li>
                                <div className="position_medi">공용시설</div>
                            </li>
                            <li>승강기/엘리베이터 내,외부 청소</li>
                            <li>벽, 천장 부위 먼지 및 이물질 제거</li>
                            <li>문틀, 창문틀, 유리, 방충망, 오염 및 먼지 제거</li>
                            <li>내부 유리창 오염물 제거</li>
                            <li>실내등, 스위치, 콘센트, 기타 조명 시설 먼지 및 오염 제거</li>
                            <li>마루, 바닥 이물질 제거 및 찌든 때 제거</li>
                            <li>출입문 먼지 및 오염 제거</li>
                            <li>오염 방지 코팅 시공 (프리미엄 청소)</li>
                            <li>스팀살균청소 (프리미엄 청소)</li>
                            <li>구역별 전용 걸레 사용 (프리미엄 청소)</li>
                            <li>인체에 무해한 천연세제 사용 (프리미엄 청소)</li>
                            <li><img src={publicstate} alt="공용시설" className="list_img3_medi"/></li>
                        </ul>
                        <div className="number_medi">04</div>
                        <ul className="list_1_medi">
                            <li>
                                <div className="position_medi">병실</div>
                            </li>
                            <li>매트리스,침대커버 세탁 및 오염 먼지 제거</li>
                            <li>샤시, 유리, 창틀 오염 및 먼지 제거</li>
                            <li>건물 내.외부 유리 이물질 제거</li>
                            <li>벽,천장,바닥 등의 먼지 및 오염제거</li>
                            <li>외벽타일 오염 및 먼지 제거</li>
                            <li>스팀살균청소 (프리미엄 청소)</li>
                            <li>구역별 전용 걸레 사용 (프리미엄 청소)</li>
                            <li>하자 체크 리스트 제공 (프리미엄 청소)</li>
                            <li>인체에 무해한 천연세제 사용 (프리미엄 청소)</li>
                            <li><img src={medical} alt="건물외벽" className="list_img4_medi"/></li>
                        </ul>
                </div>
                        <div className="con_img2_medi">
                            <h2 className="h2_medi">서비스 프로세스</h2>
                            <img src={cleaning_process} alt="서비스 프로세스" className="serv_1_medi"/>
                            <div className="serv_2_medi">
                                <ul>
                                    <li>
                                        <div className="flex_row1_medi">
                                            <span className="flax_r_1_medi">1</span>
                                            <span>전문 해피콜 상담</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex_row1_medi">
                                            <span className="flax_r_1_medi">2</span>
                                            <span>프로젝트 마스터 출동</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex_row1_medi">
                                            <span className="flax_r_1_medi">3</span>
                                            <span>보양지, 전장, 몰딩, 벽면 바닥청소</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex_row1_medi">
                                            <span className="flax_r_1_medi">4</span>
                                            <span>각 구역별 세부 청소 (유해물질, 먼지제거)</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex_row1_medi">
                                            <span className="flax_r_1_medi">5</span>
                                            <span>구역별 오염 방지 유리막 코팅 (주방상판, 욕실 거울 및 유리, 현관 거울, 화장대 거울)</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex_row1_medi">
                                            <span className="flax_r_1_medi">6</span>
                                            <span>마스터 자체 검수</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex_row1_medi">
                                            <span className="flax_r_1_medi">7</span>
                                            <span>고객 검수 및 점검표 작성</span>
                                        </div>
                                    </li>
                                </ul>
                                <p className="fd_1_medi"> -평균 청소시간은 6-7시간 소요<br/>
                                    -단계별 청소와 스팀살균을 진행하고 마무리 단계에서 오염 방지 유리막 코팅<br/>
                                    &nbsp;작업을 하여 청소를 마무리 합니다.(프리미엄 청소)
                                </p>
                            </div>
                        </div>
                    <div className="flex_contents5_medi">
                        <h2 className="h2_medi">서비스 기준</h2>
                        <ul className="bg_1_medi">
                            <li>
                                <div className="flex_row2_medi">
                                    <h4 className="flax_r_2_medi">01</h4>
                                    <span>실평수가 아닌 분양평수 기준이며 평형대가 맞지 않을 경우 추가 비용이 발생합니다</span>
                                </div>
                            </li>
                            <li>
                                <div className="flex_row2_medi">
                                    <h4 className="flax_r_2_medi">02</h4>
                                    <span>유리창의 시트지 제거 요청할 경우나 끈적이는 종류의 스티커(문풍지 포함) 또는
                                        곰팡이가 아주 많을 경우 추가 비용이 있을 수 있습니다</span>
                                </div>
                            </li>
                            <li>
                                <div className="flex_row2_medi">
                                    <h4 className="flax_r_2_medi">03</h4>
                                    <span>신축 또는 인터리어 후 사전청소(준공 청소)가 안된 현장은 현장 조율을 합니다.</span>
                                </div>
                            </li>
                            <li>
                                <div className="flex_row2_medi">
                                    <h4 className="flax_r_2_medi">04</h4>
                                    <span>청소하는 장소의 노후 정도 혹은 오염 상태가 일반적인 공간보다 심각하여
                                        평균 청소시간보다 훨씬 더 많은 시간이 소요될 경우 추가 비용이 발생합니다</span>
                                </div>
                            </li>
                            <li>
                                <div className="flex_row2_medi">
                                    <h4 className="flax_r_2_medi">05</h4>
                                    <span>외부 유리창과 난간은 추가 비용이 발생합니다</span>
                                </div>
                            </li>
                            <li>
                                <div className="flex_row2_medi">
                                    <h4 className="flax_r_2_medi">06</h4>
                                    <span>분진,바닥의 시멘트 자국,실리콘 자국 석회 자국의 경우 100% 제거는 어려울 수 있습니다</span>
                                </div>
                            </li>
                            <li>
                                <div className="flex_row2_medi">
                                    <h4 className="flax_r_2_medi">07</h4>
                                    <span>주차비와 폐기물 처리에 대한 비용이 발생할 경우, 고객님 부담 사항입니다</span>
                                </div>
                            </li>
                            <li>
                                <div className="flex_row2_medi">
                                    <h4 className="flax_r_2_medi">08</h4>
                                    <span>본사에 직접 신청하지 않은 서비스에 대해 프로젝트 본사에서는 일절 책입지지 않습니다</span>
                                </div>
                            </li>
                            <li>
                                <div className="flex_row2_medi">
                                    <h4 className="flax_r_2_medi">09</h4>
                                    <span>A/S는 작업 완료 후 24시간 이내에 신청 가능합니다. 생활 먼지나 하자 보수 등으로 재오염 될 수 있기 때문입니다. </span>
                                </div>
                            </li>
                            <li>
                                <div className="flex_row2_medi">
                                    <h4 className="flax_r_2_medi">10</h4>
                                    <span>하루 전날 취소나 변경 시 위약금 20%, 당일 취소나 변경 시 위약금 30%가 발생합니다.</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="flex_contents6_medi">
                        <h2 className="h2_medi">청소가격(부가세별도)</h2>
                        <table className="tab_medi">
                            <tr>
                                <th>주거시설</th>
                                <th>공공기관</th>
                                <th>교육기관</th>
                                <th>의료기관</th>
                                <th>요식업</th>
                            </tr>
                            <tr>
                                <td>평당 10,000원</td>
                                <td>평당 15,000원</td>
                                <td>평당 20,000원</td>
                                <td>평당 50,000원</td>
                                <td>평당 30,000원</td>
                            </tr>
                        </table>
                        <p className="tab_bottom_medi">
                            ※주거시설 최소 서비스 가격은 20만원입니다 (20평이하 단일 가격)<br/>
                            금액은 실평수가 아닌 분양평수 기준으로 책정합니다.<br/>
                            빌라 및 단독주택, 오피스텔은 실평수에 8평이 추가된 평수로 서비스 비용이 계산 됩니다.<br/>
                            프로젝트는 고객님의 부담을 덜어 드리기 위해 부가가치세법 제29조에 따라 현금영수증,현금영수증, 카드 결제, 세금계산서 발행을 희망하시는 고객에 한해
                            VAT(10%)를 별도로 받고
                            있습니다.
                        </p>
                </div>
            </div>
        <Footer />
    </>
    );
};

export default Medical;