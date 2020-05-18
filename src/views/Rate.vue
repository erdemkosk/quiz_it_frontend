<template>
  <div>
    <Header />
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="main-box clearfix">
            <div class="table-responsive">
              <table class="table user-list">
                <thead>
                  <tr>
                    
                    <th>
                      <span>Kullanıcı</span>
                    </th>
                    <th>
                      <span>Kayıt Tarihi</span>
                    </th>
                    <th class="text-center">
                      <span>Seviye</span>
                    </th>
                    <th>
                      <span>Deneyim</span>
                    </th>
                    <th>&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                
                  <tr v-for="  (user, userIndex) in users" v-bind:key="user">
                   
                    <td class="text-center">
                      <div class="img">
                        <b-avatar
                          variant="primary"
                          rounded="lg"
                          :text="user.nameSurname.split(' ').map(w => w[0].toUpperCase() + w.substr(1).toLowerCase()).join(' ').match(/[A-Z]/g).join('')"
                          size="4em"
                        ></b-avatar>
                      </div>
                      <b> {{user.nameSurname}} </b>
                      <br>
                         <small v-if="userIndex<3">
                        <svg
                          version="1.1"
                          id="Layer_1"
                          viewBox="3.4 0 189.9 200"
                          height="50px"
                          enable-background="new 3.4 0 189.9 200"
                          xml:space="preserve"
                        >
                          <g id="rays" class="animated">
                            <g id="XMLID_89_">
                              <g id="XMLID_91_" class="animated-1 flash">
                                <path
                                  id="XMLID_139_"
                                  fill="#189DA8"
                                  d="M98.5,21.1c-0.8,0-1.5-0.7-1.5-1.5V2c0-0.8,0.7-1.5,1.5-1.5S100,1.2,100,2v17.6
				C100,20.4,99.3,21.1,98.5,21.1z"
                                />
                              </g>
                              <g id="XMLID_90_" class="animated-6 flash">
                                <path
                                  id="XMLID_138_"
                                  fill="#189DA8"
                                  d="M98.5,199.5c-0.8,0-1.5-0.7-1.5-1.5v-17.6c0-0.8,0.7-1.5,1.5-1.5s1.5,0.7,1.5,1.5V198
				C100,198.8,99.3,199.5,98.5,199.5z"
                                />
                              </g>
                            </g>
                            <g id="XMLID_86_">
                              <g id="XMLID_88_" class="animated-10 flash">
                                <path
                                  id="XMLID_137_"
                                  fill="#189DA8"
                                  d="M50.9,36.4c-0.5,0-0.9-0.2-1.2-0.6L39.3,21.6c-0.5-0.7-0.3-1.6,0.3-2.1
				c0.7-0.5,1.6-0.3,2.1,0.3l10.4,14.3c0.5,0.7,0.3,1.6-0.3,2.1C51.5,36.3,51.2,36.4,50.9,36.4z"
                                />
                              </g>
                              <g id="XMLID_87_" class="animated-5 flash">
                                <path
                                  id="XMLID_136_"
                                  fill="#189DA8"
                                  d="M155.8,180.8c-0.5,0-0.9-0.2-1.2-0.6l-10.4-14.3c-0.5-0.7-0.3-1.6,0.3-2.1
				c0.7-0.5,1.6-0.3,2.1,0.3l10.4,14.3c0.5,0.7,0.3,1.6-0.3,2.1C156.4,180.7,156.1,180.8,155.8,180.8z"
                                />
                              </g>
                            </g>
                            <g id="XMLID_83_">
                              <g id="XMLID_85_" class="animated-9 flash">
                                <path
                                  id="XMLID_135_"
                                  fill="#189DA8"
                                  d="M21.7,76.6c-0.2,0-0.3,0-0.5-0.1L4.5,71.1c-0.8-0.3-1.2-1.1-0.9-1.9s1.1-1.2,1.9-0.9
				l16.8,5.4c0.8,0.3,1.2,1.1,0.9,1.9C22.9,76.2,22.3,76.6,21.7,76.6z"
                                />
                              </g>
                              <g id="XMLID_84_" class="animated-4 flash">
                                <path
                                  id="XMLID_134_"
                                  fill="#189DA8"
                                  d="M191.4,131.8c-0.2,0-0.3,0-0.5-0.1l-16.8-5.4c-0.8-0.3-1.2-1.1-0.9-1.9s1.1-1.2,1.9-0.9
				l16.8,5.4c0.8,0.3,1.2,1.1,0.9,1.9C192.6,131.4,192,131.8,191.4,131.8z"
                                />
                              </g>
                            </g>
                            <g id="XMLID_80_">
                              <g id="XMLID_82_" class="animated-8 flash">
                                <path
                                  id="XMLID_133_"
                                  fill="#189DA8"
                                  d="M4.9,131.8c-0.6,0-1.2-0.4-1.4-1c-0.3-0.8,0.2-1.6,0.9-1.9l16.8-5.4
				c0.8-0.2,1.6,0.2,1.9,0.9c0.3,0.8-0.2,1.6-0.9,1.9l-16.8,5.4C5.2,131.7,5.1,131.8,4.9,131.8z"
                                />
                              </g>
                              <g id="XMLID_81_" class="animated-3 flash">
                                <path
                                  id="XMLID_132_"
                                  fill="#189DA8"
                                  d="M174.6,76.6c-0.6,0-1.2-0.4-1.4-1c-0.3-0.8,0.2-1.6,0.9-1.9l16.8-5.4
				c0.8-0.3,1.6,0.2,1.9,0.9c0.3,0.8-0.2,1.6-0.9,1.9l-16.8,5.4C174.9,76.6,174.8,76.6,174.6,76.6z"
                                />
                              </g>
                            </g>
                            <g id="XMLID_76_">
                              <g id="XMLID_79_" class="animated-7 flash">
                                <path
                                  id="XMLID_131_"
                                  fill="#189DA8"
                                  d="M40.5,180.8c-0.3,0-0.6-0.1-0.9-0.3c-0.7-0.5-0.8-1.4-0.3-2.1l10.4-14.3
				c0.5-0.7,1.4-0.8,2.1-0.3c0.7,0.5,0.8,1.4,0.3,2.1l-10.4,14.3C41.4,180.6,41,180.8,40.5,180.8z"
                                />
                              </g>
                              <g id="XMLID_77_" class="animated-2 flash">
                                <path
                                  id="XMLID_130_"
                                  fill="#189DA8"
                                  d="M145.4,36.4c-0.3,0-0.6-0.1-0.9-0.3c-0.7-0.5-0.8-1.4-0.3-2.1l10.4-14.3
				c0.5-0.7,1.4-0.8,2.1-0.3c0.7,0.5,0.8,1.4,0.3,2.1l-10.4,14.3C146.3,36.2,145.9,36.4,145.4,36.4z"
                                />
                              </g>
                            </g>
                            <g id="XMLID_71_">
                              <g id="XMLID_74_" class="animated-11 flash">
                                <path
                                  id="XMLID_129_"
                                  fill="#189DA8"
                                  d="M70.4,186.8c-0.2,0-0.3,0-0.5-0.1c-0.8-0.3-1.2-1.1-0.9-1.9l2.3-7.2
				c0.3-0.8,1.1-1.2,1.9-0.9s1.2,1.1,0.9,1.9l-2.3,7.2C71.6,186.4,71,186.8,70.4,186.8z"
                                />
                              </g>
                              <g id="XMLID_73_" class="animated-11 flash">
                                <path
                                  id="XMLID_128_"
                                  fill="#189DA8"
                                  d="M123.4,23.8c-0.2,0-0.3,0-0.5-0.1c-0.8-0.3-1.2-1.1-0.9-1.9l2.5-7.7
				c0.3-0.8,1.1-1.2,1.9-0.9s1.2,1.1,0.9,1.9l-2.5,7.7C124.6,23.4,124,23.8,123.4,23.8z"
                                />
                              </g>
                            </g>
                            <g id="XMLID_67_">
                              <g id="XMLID_70_" class="animated-11 flash">
                                <path
                                  id="XMLID_127_"
                                  fill="#189DA8"
                                  d="M25.5,154.2c-0.5,0-0.9-0.2-1.2-0.6c-0.5-0.7-0.3-1.6,0.3-2.1l6.1-4.5
				c0.7-0.5,1.6-0.3,2.1,0.3c0.5,0.7,0.3,1.6-0.3,2.1l-6.1,4.5C26.1,154.1,25.8,154.2,25.5,154.2z"
                                />
                              </g>
                              <g id="XMLID_68_" class="animated-11 flash">
                                <path
                                  id="XMLID_126_"
                                  fill="#189DA8"
                                  d="M164.2,53.4c-0.5,0-0.9-0.2-1.2-0.6c-0.5-0.7-0.3-1.6,0.3-2.1l6.5-4.7
				c0.7-0.5,1.6-0.3,2.1,0.3c0.5,0.7,0.3,1.6-0.3,2.1l-6.5,4.7C164.8,53.4,164.5,53.4,164.2,53.4z"
                                />
                              </g>
                            </g>
                            <g id="XMLID_58_">
                              <g id="XMLID_61_" class="animated-11 flash">
                                <path
                                  id="XMLID_123_"
                                  fill="#189DA8"
                                  d="M31.3,53.3c-0.3,0-0.6-0.1-0.9-0.3l-6-4.3c-0.7-0.5-0.8-1.4-0.3-2.1
				c0.5-0.7,1.4-0.8,2.1-0.3l6,4.3c0.7,0.5,0.8,1.4,0.3,2.1C32.2,53.1,31.8,53.3,31.3,53.3z"
                                />
                              </g>
                              <g id="XMLID_59_" class="animated-11 flash">
                                <path
                                  id="XMLID_122_"
                                  fill="#189DA8"
                                  d="M170.6,154.5c-0.3,0-0.6-0.1-0.9-0.3l-6.4-4.7c-0.7-0.5-0.8-1.4-0.3-2.1
				c0.5-0.7,1.4-0.8,2.1-0.3l6.4,4.7c0.7,0.5,0.8,1.4,0.3,2.1C171.5,154.3,171.1,154.5,170.6,154.5z"
                                />
                              </g>
                            </g>
                            <g id="XMLID_2_">
                              <g id="XMLID_5_" class="animated-11 flash">
                                <path
                                  id="XMLID_6_"
                                  fill="#189DA8"
                                  d="M16.4,101.6c-0.2,0.2-0.5,0.4-0.9,0.4H8.2c-0.8,0-1.5-0.7-1.5-1.5S7.4,99,8.2,99h7.4
				c0.8,0,1.5,0.6,1.5,1.4C17,100.9,16.8,101.3,16.4,101.6z"
                                />
                              </g>
                              <g id="XMLID_3_" class="animated-11 flash">
                                <path
                                  id="XMLID_4_"
                                  fill="#189DA8"
                                  d="M188.6,101.6c-0.2,0.2-0.5,0.4-0.9,0.4h-8c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5h8
				c0.8,0,1.5,0.6,1.5,1.4C189.2,100.9,189,101.3,188.6,101.6z"
                                />
                              </g>
                            </g>
                            <g id="XMLID_53_" class="animated-11 flash">
                              <g id="XMLID_56_">
                                <path
                                  id="XMLID_121_"
                                  fill="#189DA8"
                                  d="M72.4,23.2c-0.6,0-1.2-0.4-1.4-1l-2.3-7c-0.3-0.8,0.2-1.6,0.9-1.9
				c0.8-0.2,1.6,0.2,1.9,0.9l2.3,7c0.3,0.8-0.2,1.6-0.9,1.9C72.7,23.2,72.5,23.2,72.4,23.2z"
                                />
                              </g>
                              <g id="XMLID_55_" class="animated-11 flash">
                                <path
                                  id="XMLID_120_"
                                  fill="#189DA8"
                                  d="M125.6,187c-0.6,0-1.2-0.4-1.4-1l-2.5-7.6c-0.3-0.8,0.2-1.6,0.9-1.9
				c0.8-0.2,1.6,0.2,1.9,0.9l2.5,7.6c0.3,0.8-0.2,1.6-0.9,1.9C125.9,187,125.8,187,125.6,187z"
                                />
                              </g>
                            </g>
                          </g>
                          <g class="animated-12 flash">
                            <g id="XMLID_50_">
                              <rect
                                id="XMLID_48_"
                                x="91.4"
                                y="117.6"
                                fill="#FDEFA5"
                                width="12.9"
                                height="32.1"
                              />
                              <path
                                id="XMLID_49_"
                                fill="#189DA8"
                                d="M105.8,151.2H89.9v-35.1h15.9V151.2z M92.9,148.3h10v-29.2h-10V148.3z"
                              />
                            </g>
                            <g id="XMLID_47_">
                              <path
                                id="XMLID_44_"
                                fill="#FDEFA5"
                                d="M138.7,66H116v44h9.1c9.4,0,20.3-5.4,22.7-15.4c1.9-7.6,2-17.2,1.5-21.7
			C148.7,66.7,143.6,66,138.7,66z M140.2,90.1c-1,9.2-10.2,11.8-16.2,11.8V74h14.7c1.7,0,2.6-0.9,2.6,2.8
			C141.3,76.8,140.9,83.2,140.2,90.1z"
                              />
                              <path
                                id="XMLID_112_"
                                fill="#189DA8"
                                d="M125.1,111.8h-9.4v-48h23c7.4,0,11.5,2.9,12.1,8.7c0.5,4.8,0.4,15-1.5,22.7
			C146.6,105.9,134.9,111.8,125.1,111.8z M118.7,108.8h6.5c8.6,0,19-5,21.3-14.4c1.8-7.4,2-17.1,1.5-21.7c-0.4-4.2-3.3-6.1-9.2-6.1
			h-20v42.2H118.7z M125.1,103.4h-1.5V71.6h15.1c0.2,0,0.3,0,0.4,0c0.9,0,1.9-0.1,2.8,0.8c0.8,0.7,1.1,1.9,1.1,3.9
			c0,0.1-0.1,7-0.8,14l0,0C141.2,100,132.3,103.4,125.1,103.4z M126.5,74.5v25.9c3.5-0.3,11.9-1.9,12.7-10.4l0,0
			c0.7-6.8,0.8-13.6,0.8-13.7c0-1.1-0.1-1.6-0.2-1.8c-0.2,0-0.4,0-0.6,0c-0.2,0-0.3,0-0.5,0H126.5z"
                              />
                            </g>
                            <g id="XMLID_43_">
                              <path
                                id="XMLID_103_"
                                fill="#FDEFA5"
                                d="M45,73c-0.5,4.5-0.4,14.2,1.5,21.8C49,104.7,59.9,110,69.2,110H77V66H55.6
			C50.7,66,45.6,66.8,45,73z M52.8,76.8c0-3.7,1.2-2.8,2.8-2.8H69v28c-6,0-14.6-2.4-15.5-11.6C52.7,83.4,52.8,76.8,52.8,76.8z"
                              />
                              <path
                                id="XMLID_106_"
                                fill="#189DA8"
                                d="M78.5,111.8h-9.3c-9.7,0-21.5-5.8-24.2-16.6c-1.9-7.7-2-17.9-1.5-22.7
			c0.6-5.8,4.7-8.7,12.1-8.7h22.8v48H78.5z M55.6,66.7c-5.9,0-8.8,1.9-9.2,6.1l0,0c-0.5,4.6-0.4,14.3,1.5,21.7
			c2.3,9.4,12.7,14.4,21.3,14.4h6.3V66.7H55.6z M70.6,103.4h-1.5c-7.2,0-16.1-3.4-17.1-13.1c-0.7-7-0.8-13.9-0.8-14l0,0
			c0-2,0.3-3.2,1.1-3.9c0.9-0.8,1.9-0.8,2.8-0.8c0.1,0,0.3,0,0.4,0h15L70.6,103.4L70.6,103.4z M54.3,76.3c0,0.2,0.1,7,0.8,13.7
			c0.9,8.5,9.1,10.1,12.7,10.4V74.5H55.6c-0.2,0-0.4,0-0.5,0c-0.2,0-0.5,0-0.6,0C54.4,74.7,54.3,75.1,54.3,76.3z"
                              />
                            </g>
                            <g id="XMLID_42_">
                              <path
                                id="XMLID_159_"
                                fill="#FFFFFF"
                                stroke="#000000"
                                stroke-miterlimit="10"
                                d="M113.8,106.5"
                              />
                            </g>
                            <g id="XMLID_41_">
                              <path
                                id="XMLID_99_"
                                fill="#FDEFA5"
                                d="M97.6,125.7c-11.2,0-28.5-8.8-28.5-26.6s0.1-43.9,0.1-43.9c0-3.6,1.1-4.7,4.3-4.7h48.1
			c3.2,0,4.4,1.1,4.4,4.7c0,0,0.3,26.5-0.1,43.9S108.7,125.7,97.6,125.7z"
                              />
                              <path
                                id="XMLID_100_"
                                fill="#189DA8"
                                d="M97.6,127.1c-12.6,0-30-9.8-30-28.1c0-17.6,0.1-43.7,0.1-44c0-4.3,1.7-6.2,5.8-6.2h48.1
			c4.1,0,5.8,1.8,5.8,6.2c0,0.2,0.3,26.7-0.1,44C127,117.2,109.5,127.1,97.6,127.1z M73.5,51.9c-2.3,0-2.9,0.3-2.9,3.2
			c0,0.3-0.1,26.3-0.1,43.9c0,9.5,5.2,15.5,9.5,18.8c5,3.9,11.8,6.3,17.6,6.3c10.7,0,26.5-9,26.8-25.2c0.4-17.2,0.1-43.6,0.1-43.9
			c0-2.9-0.6-3.2-2.9-3.2L73.5,51.9L73.5,51.9z"
                              />
                            </g>
                            <g id="XMLID_40_">
                              <path
                                id="XMLID_11_"
                                fill="#FDEFA5"
                                d="M124,156L124,156c0-6.8-3.7-12-10.5-12H82c-6.8,0-13,5.2-13,12l0,0v1h55V156z"
                              />
                              <path
                                id="XMLID_96_"
                                fill="#189DA8"
                                d="M126,158H68v-2c0-7.5,6.3-14,14-14h31.5c7.4,0,12.5,6.1,12.5,14V158z M70.7,155h52.8
			c-0.5-6-4.6-10-10-10H82C76.3,145,71.3,149,70.7,155z"
                              />
                            </g>
                            <g id="XMLID_39_">
                              <rect
                                id="XMLID_95_"
                                x="69"
                                y="60"
                                fill="#189DA8"
                                width="56"
                                height="3"
                              />
                            </g>
                            <g id="XMLID_38_">
                              <path
                                id="XMLID_94_"
                                fill="#FFFFFF"
                                d="M114.5,94.6c-0.8,0-1.5-0.7-1.5-1.5V70.6c0-0.8,0.7-1.5,1.5-1.5s1.5,0.7,1.5,1.5v22.5
			C116,93.9,115.3,94.6,114.5,94.6z"
                              />
                            </g>
                            <g id="XMLID_37_">
                              <path
                                id="XMLID_93_"
                                fill="#FFFFFF"
                                d="M108.2,113.1c-0.3,0-0.5-0.1-0.8-0.2c-0.7-0.4-0.9-1.3-0.5-2c0.2-0.4,0.6-0.6,0.9-0.7
			c0.6-0.3,2.3-1.1,4.2-3.5c1.4-1.8,1.7-5.1,1.7-6.2c0-0.8,0.7-1.5,1.5-1.5s1.5,0.7,1.5,1.5c0,0.2,0,5.1-2.3,8c-2.3,3-4.5,4-5.3,4.3
			H109C108.8,113,108.5,113.1,108.2,113.1z"
                              />
                            </g>
                            <g id="XMLID_33_">
                              <path
                                id="XMLID_92_"
                                fill="#FFFFFF"
                                d="M113.8,72H98.1c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5h15.7c0.8,0,1.5,0.7,1.5,1.5
			S114.6,72,113.8,72z"
                              />
                            </g>
                          </g>
                        </svg>
                      </small>
                    
                      <h4 v-if="userIndex > 2">{{userSmiley[userIndex]}}</h4>
                    </td>
                    <td>
                      {{
                      new Date(user.createdAt).getDate() +
                      "/" +
                      (new Date(user.createdAt).getMonth() + 1) +
                      "/" +
                      new Date(user.createdAt).getFullYear()}}
                    </td>
                    <td class="text-center">
                      <span class="user-subhead">
                        <b>{{user.level}}</b>. Seviye
                      </span>
                    </td>
                    <td>
                      <span style="display:block; height: 18px;"></span>
                      <b-progress :max="user.levelExperience" class="mb-3" striped :animated="true">
                        <b-progress-bar :value="user.currentExperience">
                          <strong>{{user.currentExperience}} / {{user.levelExperience}}</strong>
                        </b-progress-bar>
                      </b-progress>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import { getTopTen } from "../services/api.service";

export default {
  components: {
    Header
  },
  data: function() {
    return {
      users: [],
      userSmiley: ['😎', '😁', '🙃','😎', '😁', '🙃','🤗', '🤫', '🤔','🙄', '😁', '🙃','🙄'],
    };
  },
  methods: {},
  mounted() {
    getTopTen().then(data => {
      this.users = data.data;
    });
  }
};
</script>


<style scoped>
body {
  margin-top: 20px;
}

/* USER LIST TABLE */
.img {
  position: relative;

  float: left;
  margin-right: 15px;
}
.user-list tbody td .user-link {
  display: block;

  padding-top: 3px;
  margin-left: 60px;
}
.user-list tbody td .user-subhead {
  font-size: 0.875em;
  font-style: italic;
}

/* TABLES */
.table {
  border-collapse: separate;
}
.table-hover > tbody > tr:hover > td,
.table-hover > tbody > tr:hover > th {
  background-color: #eee;
}
.table thead > tr > th {
  border-bottom: 1px solid #c2c2c2;
  padding-bottom: 0;
}
.table tbody > tr > td {
  font-size: 0.875em;
  background: #f5f5f5;
  border-top: 10px solid #fff;
  vertical-align: middle;
  padding: 12px 8px;
}
.table tbody > tr > td:first-child,
.table thead > tr > th:first-child {
  padding-left: 20px;
}
.table thead > tr > th span {
  border-bottom: 2px solid #c2c2c2;
  display: inline-block;
  padding: 0 5px;
  padding-bottom: 5px;
  font-weight: normal;
}
.table thead > tr > th > a span {
  color: #344644;
}
.table thead > tr > th > a span:after {
  content: "\f0dc";
  font-family: FontAwesome;
  font-style: normal;
  font-weight: normal;
  text-decoration: inherit;
  margin-left: 5px;
  font-size: 0.75em;
}
.table thead > tr > th > a.asc span:after {
  content: "\f0dd";
}
.table thead > tr > th > a.desc span:after {
  content: "\f0de";
}
.table thead > tr > th > a:hover span {
  text-decoration: none;
  color: #2bb6a3;
  border-color: #2bb6a3;
}
.table.table-hover tbody > tr > td {
  -webkit-transition: background-color 0.15s ease-in-out 0s;
  transition: background-color 0.15s ease-in-out 0s;
}
.table tbody tr td .call-type {
  display: block;
  font-size: 0.75em;
  text-align: center;
}
.table tbody tr td .first-line {
  line-height: 1.5;
  font-weight: 400;
  font-size: 1.125em;
}
.table tbody tr td .first-line span {
  font-size: 0.875em;
  color: #969696;
  font-weight: 300;
}
.table tbody tr td .second-line {
  font-size: 0.875em;
  line-height: 1.2;
}
.table a.table-link {
  margin: 0 5px;
  font-size: 1.125em;
}
.table a.table-link:hover {
  text-decoration: none;
  color: #2aa493;
}
.table a.table-link.danger {
  color: #fe635f;
}
.table a.table-link.danger:hover {
  color: #dd504c;
}

.table-products tbody > tr > td {
  background: none;
  border: none;
  border-bottom: 1px solid #ebebeb;
  -webkit-transition: background-color 0.15s ease-in-out 0s;
  transition: background-color 0.15s ease-in-out 0s;
  position: relative;
}
.table-products tbody > tr:hover > td {
  text-decoration: none;
  background-color: #f6f6f6;
}
.table-products .name {
  display: block;
  font-weight: 600;
  padding-bottom: 7px;
}
.table-products .price {
  display: block;
  text-decoration: none;
  width: 50%;
  float: left;
  font-size: 0.875em;
}
.table-products .price > i {
  color: #8dc859;
}
.table-products .warranty {
  display: block;
  text-decoration: none;
  width: 50%;
  float: left;
  font-size: 0.875em;
}
.table-products .warranty > i {
  color: #f1c40f;
}
.table tbody > tr.table-line-fb > td {
  background-color: #9daccb;
  color: #262525;
}
.table tbody > tr.table-line-twitter > td {
  background-color: #9fccff;
  color: #262525;
}
.table tbody > tr.table-line-plus > td {
  background-color: #eea59c;
  color: #262525;
}
.table-stats .status-social-icon {
  font-size: 1.9em;
  vertical-align: bottom;
}
.table-stats .table-line-fb .status-social-icon {
  color: #556484;
}
.table-stats .table-line-twitter .status-social-icon {
  color: #5885b8;
}
.table-stats .table-line-plus .status-social-icon {
  color: #a75d54;
}
.animated-1 {
  -webkit-animation: 0.2s ease-in-out 0.2s both;
}

.animated-2 {
  -webkit-animation: 0.1s ease-in-out 0.3s both;
}

.animated-3 {
  -webkit-animation: 0.1s ease-in-out 0.35s both;
}

.animated-4 {
  -webkit-animation: 0.1s ease-in-out 0.4s both;
}

.animated-5 {
  -webkit-animation: 0.1s ease-in-out 0.45s both;
}

.animated-6 {
  -webkit-animation: 0.1s ease-in-out 0.5s both;
}

.animated-7 {
  -webkit-animation: 0.1s ease-in-out 0.54s both;
}

.animated-8 {
  -webkit-animation: 0.1s ease-in-out 0.57s both;
}

.animated-9 {
  -webkit-animation: 0.1s ease-in-out 0.6s both;
}

.animated-10 {
  -webkit-animation: 0.1s ease-in-out 0.63s both;
}

.animated-11 {
  -webkit-animation: 0.3s ease-in-out 0.85s both;
}

.animated-12 {
  -webkit-animation: 1.5s ease-in-out 1.2s both;
}

@-webkit-keyframes flash {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    -webkit-transition-timing-function: cubic-bezier(0.58, 0.05, 0.63, 1.27);
  }
}

.flash {
  -webkit-animation-name: flash;
  animation-name: flash;
}
</style>