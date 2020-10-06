import React from 'react'
import '../term.css';

const Terms = ({onCheck}) => {
    return (
        <form name="userForm" class="join_form">
        <div class="join_tit">
            <div class="chk_box">
                <input type="checkbox" id="all_agree" name="agree_box01" onclick="allcheck();" />
                <label for="all_agree"><p>모든 약관을 확인하고 전체 동의합니다.</p><span></span></label>
            </div>
        </div>
        <strong>이용약관</strong>
        <div class="data_box">
            <div class="data">
                <p class="tit">제1장 총칙</p>
                <p class="sub_tit">제1조 (목 적)</p>
                <p class="txt">
                    이 약관은 학원프젝(이하 "사이트"라 합니다)에서 제공하는 인터넷서비스(이하 "서비스"라 합니다)의 이용 조건 및 절차에 관한 기본적인 사항을 규정함을 목적으로 합니다.
                </p>
                
                <p class="sub_tit">제 2 조 (약관의 효력 및 변경)</p>
                <p class="txt">
                    ① 이 약관은 서비스 화면이나 기타의 방법으로 이용고객에게 공지함으로써 효력을 발생합니다.<br/>
                    ② 사이트는 이 약관의 내용을 변경할 수 있으며, 변경된 약관은 제1항과 같은 방법으로 공지 또는 통지함으로써 효력을 발생합니다.
                </p>
                
                <p class="sub_tit">제 3 조 (용어의 정의)</p>
                <p class="txt">
                    이 약관에서 사용하는 용어의 정의는 다음과 같습니다.<br/>
                    ① 회원 : 사이트와 서비스 이용계약을 체결하거나 이용자 아이디(ID)를 부여받은 개인 또는 단체를 말합니다.<br/>
                    ② 신청자 : 회원가입을 신청하는 개인 또는 단체를 말합니다.<br/>
                    ③ 아이디(ID) : 회원의 식별과 서비스 이용을 위하여 회원이 정하고 사이트가 승인하는 문자와 숫자의 조합을 말합니다.<br/>
                    ④ 비밀번호 : 회원이 부여 받은 아이디(ID)와 일치된 회원임을 확인하고, 회원 자신의 비밀을 보호하기 위하여 회원이 정한 문자와 숫자의 조합을 말합니다.<br/>|
                    ⑤ 해지 : 사이트 또는 회원이 서비스 이용계약을 취소하는 것을 말합니다.
                </p>
                
                <p class="tit">제 2 장 서비스 이용계약</p>
                <p class="sub_tit">제 4 조 (이용계약의 성립)</p>
                <p class="txt">
                    ① 이용약관 하단의 동의 버튼을 누르면 이 약관에 동의하는 것으로 간주됩니다.<br/>
                    ② 이용계약은 서비스 이용희망자의 이용약관 동의 후 이용 신청에 대하여 사이트가 승낙함으로써 성립합니다.
                </p>
                
                <p class="sub_tit">제5조 (이용신청)</p>
                <p class="txt">
                    ① 신청자가 본 서비스를 이용하기 위해서는 사이트 소정의 가입신청 양식에서 요구하는 이용자 정보를 기록하여 제출해야 합니다.<br/>
                    ② 가입신청 양식에 기재하는 모든 이용자 정보는 모두 실제 데이터인 것으로 간주됩니다. 실명이나 실제 정보를 입력하지 않은 사용자는 법적인 보호를 받을 수 없으며, 서비스의 제한을 받을 수 있습니다.
                </p>
                
                <p class="sub_tit">제 6 조 (이용신청의 승낙)</p>
                <p class="txt">
                    ① 사이트는 신청자에 대하여 제2항, 제3항의 경우를 예외로 하여 서비스 이용신청을 승낙합니다.<br/>
                    ② 사이트는 다음에 해당하는 경우에 그 신청에 대한 승낙 제한사유가 해소될 때까지 승낙을 유보할 수 있습니다.<br/>
                        가. 서비스 관련 설비에 여유가 없는 경우<br/>
                        나. 기술상 지장이 있는 경우<br/>
                        다. 기타 사이트가 필요하다고 인정되는 경우<br/>
                    ③ 사이트는 신청자가 다음에 해당하는 경우에는 승낙을 거부할 수 있습니다.<br/>
                        가. 다른 개인(사이트)의 명의를 사용하여 신청한 경우<br/>
                        나. 이용자 정보를 허위로 기재하여 신청한 경우<br/>
                        다. 사회의 안녕질서 또는 미풍양속을 저해할 목적으로 신청한 경우<br/>
                        라. 기타 사이트 소정의 이용신청요건을 충족하지 못하는 경우<br/>
                </p>
                
                <p class="sub_tit">제 7 조 (이용자정보의 변경)</p>
                <p class="txt">
                    회원은 이용 신청시에 기재했던 회원정보가 변경되었을 경우에는, 온라인으로 수정하여야 하며 변경하지 않음으로 인하여 발생되는 모든 문제의 책임은 회원에게 있습니다.
                </p>
                
                
                <p class="tit">제 3 장 계약 당사자의 의무</p>
                <p class="sub_tit">제 8 조 (사이트의 의무)</p>
                <p class="txt">
                    ① 사이트는 회원에게 각 호의 서비스를 제공합니다.<br/>
                        가. 신규서비스와 도메인 정보에 대한 뉴스레터 발송<br/>
                        나. 추가 도메인 등록시 개인정보 자동 입력<br/>
                        다. 도메인 등록, 관리를 위한 각종 부가서비스<br/>
                    ② 사이트는 서비스 제공과 관련하여 취득한 회원의 개인정보를 회원의 동의없이 타인에게 누설, 공개 또는 배포할 수 없으며, 서비스관련 업무 이외의 상업적 목적으로 사용할 수 없습니다. 단, 다음 각 호의 1에 해당하는 경우는 예외입니다.<br/>
                        가. 전기통신기본법 등 법률의 규정에 의해 국가기관의 요구가 있는 경우<br/>
                        나. 범죄에 대한 수사상의 목적이 있거나 정보통신윤리 위원회의 요청이 있는 경우<br/>
                        다. 기타 관계법령에서 정한 절차에 따른 요청이 있는 경우<br/>
                    ③ 사이트는 이 약관에서 정한 바에 따라 지속적, 안정적으로 서비스를 제공할 의무가 있습니다.
                </p>
                
                <p class="sub_tit">제 9 조 (회원의 의무)</p>
                <p class="txt">
                    ① 회원은 서비스 이용 시 다음 각 호의 행위를 하지 않아야 합니다.<br/>
                        가. 다른 회원의 ID를 부정하게 사용하는 행위<br/>
                        나. 서비스에서 얻은 정보를 사이트의 사전승낙 없이 회원의 이용 이외의 목적으로 복제하거나 이를 변경, 출판 및 방송 등에 사용하거나 타인에게 제공하는 행위<br/>
                        다. 사이트의 저작권, 타인의 저작권 등 기타 권리를 침해하는 행위<br/>
                        라. 공공질서 및 미풍양속에 위반되는 내용의 정보, 문장, 도형 등을 타인에게 유포하는 행위<br/>
                        마. 범죄와 결부된다고 객관적으로 판단되는 행위<br/>
                        바. 기타 관계법령에 위배되는 행위<br/>
                    ② 회원은 관계법령, 이 약관에서 규정하는 사항, 서비스 이용 안내 및 주의 사항을 준수하여야 합니다.<br/>
                    ③ 회원은 내용별로 사이트가 서비스 공지사항에 게시하거나 별도로 공지한 이용 제한 사항을 준수하여야 합니다.
                </p>
                
                <p class="tit">제 4 장 서비스 제공 및 이용</p>
                <p class="sub_tit">제 10 조 (회원 아이디(ID)와 비밀번호 관리에 대한 회원의 의무)</p>
                <p class="txt">
                    ① 아이디(ID)와 비밀번호에 대한 모든 관리는 회원에게 책임이 있습니다. 회원에게 부여된 아이디(ID)와 비밀번호의 관리소홀, 부정사용에 의하여 발생하는 모든 결과에 대한 전적인 책임은 회원에게 있습니다.<br/>
                    ② 자신의 아이디(ID)가 부정하게 사용된 경우 또는 기타 보안 위반에 대하여, 회원은 반드시 사이트에 그 사실을 통보해야 합니다.
                </p>
                
                <p class="sub_tit">제 11 조 (서비스 제한 및 정지)</p>
                <p class="txt">
                    ① 사이트는 전시, 사변, 천재지변 또는 이에 준하는 국가비상사태가 발생하거나 발생할 우려가 있는 경우와 전기통신사업법에 의한 기간통신 사업자가 전기통신서비스를 중지하는 등 기타 불가항력적 사유가 있는 경우에는 서비스의 전부 또는 일부를 제한하거나 정지할 수 있습니다.<br/>
                    ② 사이트는 제1항의 규정에 의하여 서비스의 이용을 제한하거나 정지할 때에는 그 사유 및 제한기간 등을 지체없이 회원에게 알려야 합니다.
                </p>
                
                
                <p class="tit">제5장 계약사항의 변경, 해지</p>
                <p class="sub_tit">제 12 조 (정보의 변경)</p>
                <p class="txt">
                    회원이 주소, 비밀번호 등 고객정보를 변경하고자 하는 경우에는 홈페이지의 회원정보 변경 서비스를 이용하여 변경할 수 있습니다.
                </p>
                
                <p class="sub_tit">제 13 조 (계약사항의 해지)</p>
                <p class="txt">
                    회원은 서비스 이용계약을 해지할 수 있으며, 해지할 경우에는 본인이 직접 서비스를 통하거나 전화 또는 온라인 등으로 사이트에 해지신청을 하여야 합니다. 사이트는 해지신청이 접수된 당일부터 해당 회원의 서비스 이용을 제한합니다. <br/>사이트는 회원이 다음 각 항의 1에 해당하여 이용계약을 해지하고자 할 경우에는 해지조치 7일전까지 그 뜻을 이용고객에게 통지하여 소명할 기회를 주어야 합니다.<br/>
                    ① 이용고객이 이용제한 규정을 위반하거나 그 이용제한 기간 내에 제한 사유를 해소하지 않는 경우<br/>
                    ② 정보통신윤리위원회가 이용해지를 요구한 경우<br/>
                    ③ 이용고객이 정당한 사유 없이 의견진술에 응하지 아니한 경우<br/>
                    ④ 타인 명의로 신청을 하였거나 신청서 내용의 허위 기재 또는 허위서류를 첨부하여 이용계약을 체결한 경우<br/>
                    사이트는 상기 규정에 의하여 해지된 이용고객에 대해서는 별도로 정한 기간동안 가입을 제한할 수 있습니다.
                </p>
                
                <p class="tit">제6장 손해배상</p>
                <p class="sub_tit">제 14 조 (면책조항)</p>
                <p class="txt">
                    ① 사이트는 회원이 서비스 제공으로부터 기대되는 이익을 얻지 못하였거나 서비스 자료에 대한 취사선택 또는 이용으로 발생하는 손해 등에 대해서는 책임이 면제됩니다.<br/>
                    ② 사이트는 회원의 귀책사유나 제3자의 고의로 인하여 서비스에 장애가 발생하거나 회원의 데이터가 훼손된 경우에 책임이 면제됩니다.<br/>
                    ③ 사이트는 회원이 게시 또는 전송한 자료의 내용에 대해서는 책임이 면제됩니다.<br/>
                    ④ 상표권이 있는 도메인의 경우, 이로 인해 발생할 수도 있는 손해나 배상에 대한 책임은 구매한 회원 당사자에게 있으며, 사이트는 이에 대한 일체의 책임을 지지 않습니다.
                </p>
                
                <p class="sub_tit">제 15 조 (관할법원)</p>
                <p class="txt">
                    서비스와 관련하여 사이트와 회원간에 분쟁이 발생할 경우 사이트의 본사 소재지를 관할하는 법원을 관할법원으로 합니다.
                </p>
                
                <p class="sub_tit">[부칙]</p>
                <p class="txt">
                    (시행일) 이 약관은 2019년 12월부터 시행합니다.
                </p>
            </div>
        </div>
        {/* 체크박스 */}
        <div class="chk_box">
            <input type="checkbox" id="agree01" name="agree_box02" onClick={(e) => onCheck(e)}/>
            <label for="agree01"><span></span><p>동의합니다.</p></label>
        </div>
        <strong>개인정보처리방침</strong>
        <div class="data_box">
            <div class="data">
                <p class="txt">('www.project.com'이하 '제일종합관리서비스(주)')은(는) 개인정보보호법에 따라 이용자의 개인정보 보호 및 권익을 보호하고 개인정보와 관련한 이용자의 고충을 원활하게 처리할 수 있도록 다음과 같은 처리방침을 두고 있습니다.	<br/><br/>
                ('제일종합관리서비스(주)') 은(는) 회사는 개인정보처리방침을 개정하는 경우 웹사이트 공지사항(또는 개별공지)을 통하여 공지할 것입니다.<br/>
                <br/>
                ○ 본 방침은부터 2019년 10월 20일부터 시행됩니다.
                </p>



                <p class="sub_tit">1. 개인정보의 처리 목적</p>


                <p class="txt"> ('www.project.com'이하 '제일종합관리서비스(주)')은(는) 개인정보를 다음의 목적을 위해 처리합니다. 처리한 개인정보는 다음의 목적이외의 용도로는 사용되지 않으며 이용 목적이 변경될 시에는 사전동의를 구할 예정입니다.<br/>
                    가. 홈페이지 회원가입 및 관리<br/>
                    회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증, 회원자격 유지·관리, 제한적 본인확인제 시행에 따른 본인확인, 서비스 부정이용 방지, 만14세 미만 아동 개인정보 수집 시 법정대리인 동의 여부 확인, 각종 고지·통지, 고충처리, 분쟁 조정을 위한 기록 보존 등을 목적으로 개인정보를 처리합니다.			<br/>
                    나. 재화 또는 서비스 제공<br/>
                    문의응대 등을 목적으로 개인정보를 처리합니다.
                </p>



                <p class="sub_tit">2. 개인정보 파일 현황</p>


                <p class="txt">1. 개인정보 파일명 : 개인정보처리<br/>	
                    - 개인정보 항목 : 문의시 받음<br/>
                    - 수집방법 : 홈페이지<br/>
                    - 보유근거 : 정보주체의 동의<br/>	
                    - 보유기간 : 3년<br/>
                    - 관련법령 : 신용정보의 수집/처리 및 이용 등에 관한 기록 : 3년
                </p>


                <p class="sub_tit">3. 개인정보의 처리 및 보유 기간</p>



                <p class="txt">① ('제일종합관리서비스(주)')은(는) 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집시에 동의 받은 개인정보 보유,이용기간 내에서 개인정보를 처리,보유합니다.<br/>
                    ② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.<br/>
                    와 관련한 개인정보는 수집.이용에 관한 동의일로부터까지 위 이용목적을 위하여 보유.이용됩니다.<br/>
                    -보유근거 : 정보주체의 동의<br/>
                    -관련법령 : 신용정보의 수집/처리 및 이용 등에 관한 기록 : 3년<br/>
                    -예외사유 :
                </p>


                <p class="sub_tit">4. 정보주체와 법정대리인의 권리·의무 및 그 행사방법 이용자는 개인정보주체로써 다음과 같은 권리를 행사할 수 있습니다.</p>
                <p class="txt">
                    ① 정보주체는 제일종합관리서비스(주)에 대해 언제든지 개인정보 열람,정정,삭제,처리정지 요구 등의 권리를 행사할 수 있습니다.<br/>
                    ② 제1항에 따른 권리 행사는제일종합관리서비스(주)에 대해 개인정보 보호법 시행령 제41조제1항에 따라 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 제일종합관리서비스(주)은(는) 이에 대해 지체 없이 조치하겠습니다.<br/>
                    ③ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다. 이 경우 개인정보 보호법 시행규칙 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.			<br/>
                    ④ 개인정보 열람 및 처리정지 요구는 개인정보보호법 제35조 제5항, 제37조 제2항에 의하여 정보주체의 권리가 제한 될 수 있습니다.<br/>
                    ⑤ 개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집 대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다.<br/>
                    ⑥ 제일종합관리서비스(주)은(는) 정보주체 권리에 따른 열람의 요구, 정정·삭제의 요구, 처리정지의 요구 시 열람 등 요구를 한 자가 본인이거나 정당한 대리인인지를 확인합니다.			
                </p>



                <p class="sub_tit">5. 처리하는 개인정보의 항목 작성 </p>
                <p class="txt">① ('www.project.com'이하 '제일종합관리서비스(주)')은(는) 다음의 개인정보 항목을 처리하고 있습니다.<br/>	
                <br/>
                    - 필수항목 : 이메일, 휴대전화번호, 자택주소, 비밀번호 질문과 답, 비밀번호, 로그인ID, 성별, 생년월일, 이름, 회사전화번호, 직책, 회사명, 직업<br/>
                    - 선택항목 :
                </p>


                <p class="sub_tit">6. 개인정보의 파기('제일종합관리서비스(주)')은(는) 원칙적으로 개인정보 처리목적이 달성된 경우에는 지체없이 해당 개인정보를 파기합니다. 파기의 절차, 기한 및 방법은 다음과 같습니다.</p>
                <p class="txt">-파기절차<br/>
                    이용자가 입력한 정보는 목적 달성 후 별도의 DB에 옮겨져(종이의 경우 별도의 서류) 내부 방침 및 기타 관련 법령에 따라 일정기간 저장된 후 혹은 즉시 파기됩니다. 이 때, DB로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는 다른 목적으로 이용되지 않습니다.<br/>	
                    -파기기한<br/>
                    이용자의 개인정보는 개인정보의 보유기간이 경과된 경우에는 보유기간의 종료일로부터 5일 이내에, 개인정보의 처리 목적 달성, 해당 서비스의 폐지, 사업의 종료 등 그 개인정보가 불필요하게 되었을 때에는 개인정보의 처리가 불필요한 것으로 인정되는 날로부터 5일 이내에 그 개인정보를 파기합니다.<br/>
                    -파기방법<br/>
                    전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용합니다.			
                </p>


                <p class="sub_tit">7. 개인정보 자동 수집 장치의 설치•운영 및 거부에 관한 사항</p>
                <p class="txt">제일종합관리서비스(주) 은 정보주체의 이용정보를 저장하고 수시로 불러오는 ‘쿠키’를 사용하지 않습니다.</p>



                <p class="sub_tit">8. 개인정보 보호책임자 작성</p>



                <p class="txt">① 제일종합관리서비스(주)(‘www.project.com’이하 ‘제일종합관리서비스(주)) 은(는) 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.		<br/>	
                    ▶ 개인정보 보호책임자<br/>
                    성명 : 김돈<br/>
                    직급 : 대표<br/>
                    연락처 : 1877-3855<br/>
                    ② 정보주체께서는 제일종합관리서비스(주)(‘www.project.com’이하 ‘제일종합관리서비스(주)) 의 서비스(또는 사업)을 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다. 제일종합관리서비스(주)(‘www.project.com’이하 ‘제일종합관리서비스(주)) 은(는) 정보주체의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.			
                </p>


                <p class="sub_tit">9. 개인정보 처리방침 변경</p>


                <p class="txt">
                ①이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
                </p>


                <p class="sub_tit">10. 개인정보의 안전성 확보 조치 ('제일종합관리서비스(주)')은(는) 개인정보보호법 제29조에 따라 다음과 같이 안전성 확보에 필요한 기술적/관리적 및 물리적 조치를 하고 있습니다.</p>



                <p class="txt">1. 정기적인 자체 감사 실시<br/>	
                    개인정보 취급 관련 안정성 확보를 위해 정기적(분기 1회)으로 자체 감사를 실시하고 있습니다.<br/>
                    2. 개인정보 취급 직원의 최소화 및 교육<br/>
                    개인정보를 취급하는 직원을 지정하고 담당자에 한정시켜 최소화 하여 개인정보를 관리하는 대책을 시행하고 있습니다.<br/>
                    3. 개인정보의 암호화<br/>
                    이용자의 개인정보는 비밀번호는 암호화 되어 저장 및 관리되고 있어, 본인만이 알 수 있으며 중요한 데이터는 파일 및 전송 데이터를 암호화 하거나 파일 잠금 기능을 사용하는 등의 별도 보안기능을 사용하고 있습니다.
                </p>
            </div>
        </div>
        <div class="chk_box">
            <input type="checkbox" id="agree02" name="agree_box03" onClick={(e) => onCheck(e)}/>
            <label for="agree02"><span></span><p>동의합니다.</p></label>
        </div>
    </form>
    )
}

export default Terms
