import React, { useState, useReducer } from "react";
import {
  Image,
  Icon,
  Modal,
  Button,
  Header,
  Menu,
  Grid,
  List,
} from "semantic-ui-react";

export default function ModalResume() {
  const [activeItem, setActiveItem] = useState("");
  const [resumeTab, dispatch] = useReducer(reducer, <ResumeEn />);

  const handleItemClick = (e, name) => {
    e.preventDefault();
    setActiveItem(name);
    dispatch({ type: name });
  };

  const styles = {
    topTitle: {
      // marginLeft: "40%",
    },
    title: {
      textDecoration: "underline",
    },
    subTitle: {
      fontWeight: "bold",
      marginLeft: ".5em",
    },
    subTime: {
      display: "block",
      marginLeft: "1em",
      fontStyle: "italic",
    },
    subContent: {
      marginLeft: "1em",
    },
    listContent: {
      marginLeft: "1em",
      lineHeight: "1.8em",
    },
    highLight: {
      fontWeight: "bold",
    },
  };

  function reducer(state, action) {
    switch (action.type) {
      case "English":
        return <ResumeEn />;
      case "中文":
        return <ResumeCn />;
      default:
        return <ResumeEn />;
    }
  }
  function ResumeEn() {
    return (
      <>
        <Grid centered>
          <Grid.Row centered>
            <Grid.Column>
              <h3>
                Chao Feng{" "}
                <a
                  style={{ fontSize: ".8em", textDecoration: "underline" }}
                  href="https://docs.google.com/document/d/16SiKF7Py9bA-2XBfr4C4E6SXzhISMR0kmrNQJ8gAZ1M/edit#"
                >
                  (Full Version)
                </a>
              </h3>
              <p>
                <a href="https://goo.gl/maps/CGy8mmSajrxYQSNu6">
                  Irvine, CA 92602
                </a>
              </p>
              <p>
                <a href="mailto:fnchao@hotmail.com">
                  Email: fnchao@hotmail.com
                </a>
              </p>
              <p>
                <List.Item
                  icon="linkedin"
                  href="https://www.linkedin.com/in/chaofeng16/"
                />
                <List.Item icon="github" href="https://github.com/iTh1nk" />
                <List.Item icon="twitter" href="https://twitter.com/_ith1nk" />
                <List.Item
                  icon="facebook"
                  href="https://www.facebook.com/iTh1nk"
                />
                <List.Item
                  icon="user"
                  href="https://github.com/iTh1nk/portfolio-django"
                />
              </p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row></Grid.Row>
        </Grid>

        <hr />

        <h3 style={styles.title}>Skills</h3>
        <span>
          <p style={styles.subContent}>
            HTML / CSS / Bootstrap / JavaScript / JQuery / Java / Python
          </p>
          <p style={styles.subContent}>
            React / React Native / Node / Spring / Django / Vue{" "}
          </p>
          <p style={styles.subContent}>MySQL / MongoDB / PostgreSQL</p>
          <p style={styles.subContent}>
            AWS / Linux / macOS / Git / RESTful API / Xcode / MVC / Agile{" "}
          </p>
        </span>

        <h3 style={styles.title}>Experience</h3>
        <span>
          <span>
            <p>
              <span style={styles.subTitle}>
                Polycis | Full Stack Developer
              </span>
              <span style={styles.subTime}>January 2018 - Present</span>
            </p>
            <span>
              <span style={styles.listContent}>
                • Develop company official public and internal website using
                React, Django, Spring and PostgreSQL <br />
              </span>
              <span style={styles.listContent}>
                • Help develop internal employee chat app using React Native
                <br />
              </span>
              <span style={styles.listContent}>
                • Develop application through Alibaba Cloud and AWS <br />
              </span>
              <span style={styles.listContent}>
                • Help review codes and communicate with different teams <br />
              </span>
              <span style={styles.listContent}>
                • Implement agile project management by using Zentao <br />
              </span>
            </span>
          </span>
          <br />
          <span>
            <p>
              <span style={styles.subTitle}>{"AT&T"} | Sales Consultant</span>
              <span style={styles.subTime}>November 2016 - 2020</span>
            </p>
            <span>
              <span style={styles.listContent}>
                • Provide integrated entertainment solution <br />
              </span>
              <span style={styles.listContent}>
                • Personalized solution based on customers' needs <br />
              </span>
              <span style={styles.listContent}>
                • Frequently communicate with customers <br />
              </span>
              <span style={styles.listContent}>
                • Provide post-sale services <br />
              </span>
              <span style={styles.listContent}>
                • Manager on duty and new hire training <br />
              </span>
            </span>
          </span>
        </span>

        <h3 style={styles.title}>Education</h3>
        <span>
          <h5> - Certification</h5>
          <p style={styles.subContent}>
            Bootcamp Certificate: University of California Irvine, CA, US
          </p>
          <p style={styles.subContent}>
            Certified Associate in Project Management (CAPM), Project Management
            Institute, License 1933042
          </p>
        </span>
        <br />
        <span>
          <h5> - Degree</h5>
          <p style={styles.subContent}>
            Master of Business Administration, Oregon State University,
            Corvallis, OR
          </p>
          <p style={styles.subContent}>
            Master of Engineering, Oregon State University, Corvallis, OR
          </p>
          <p style={styles.subContent}>
            Bachelor of Science in Electrical Engineering, University of Science
            and Technology Beijing, China
          </p>
        </span>
      </>
    );
  }
  function ResumeCn() {
    return (
      <>
        <Grid centered>
          <Grid.Row centered>
            <Grid.Column>
              <h3>冯 超</h3>
              <p>
                <a href="mailto:fnchao@hotmail.com">
                  Email: fnchao@hotmail.com
                </a>
              </p>
              <p>
                <List.Item
                  icon="linkedin"
                  href="https://www.linkedin.com/in/chaofeng16/"
                />
                <List.Item icon="github" href="https://github.com/iTh1nk" />
                <List.Item
                  icon="user"
                  href="https://github.com/iTh1nk/portfolio-django"
                />
              </p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row></Grid.Row>
        </Grid>

        <hr />

        <h3 style={styles.title}>专业技能</h3>
        <span>
          <p style={styles.subContent}>
            HTML / CSS / Bootstrap / JavaScript / JQuery / Java / Python
          </p>
          <p style={styles.subContent}>
            React / React Native / Node / Spring / Django / Vue{" "}
          </p>
          <p style={styles.subContent}>MySQL / MongoDB / PostgreSQL</p>
          <p style={styles.subContent}>
            AWS / Linux / macOS / Git / RESTful API / Xcode / MVC / Agile{" "}
          </p>
        </span>

        <h3 style={styles.title}>工作经验</h3>
        <span>
          <span>
            <p>
              <span style={styles.subTitle}>Polycis | 全栈工程师</span>
              <span style={styles.subTime}>2018.01 - 至今</span>
            </p>
            <span>
              <span style={styles.listContent}>
                • 创建并维护公司官方网站以及内部员工网站 (React, Django, Spring
                and PostgreSQL)
                <br />
              </span>
              <span style={styles.listContent}>
                • 创建员工内部通讯软件 (React Native)
                <br />
              </span>
              <span style={styles.listContent}>
                • 通过阿里云以及亚马逊网络服务部署项目 <br />
              </span>
              <span style={styles.listContent}>
                • 协助团队协查代码保证各组建整合后正常工作 <br />
              </span>
              <span style={styles.listContent}>
                • 使用禅道进行敏捷开发管理 <br />
              </span>
            </span>
          </span>
          <br />
          <span>
            <p>
              <span style={styles.subTitle}>项目经验</span>
            </p>
            <span>
              <p>
                <span style={styles.listContent}>
                  • 多功能账单管理系统 (MERN)
                  <br />
                  <span style={styles.listContent}>这个是一个描述</span>
                  <br />
                </span>
              </p>
              <p>
                <span style={styles.listContent}>
                  • 新冠肺炎数据追踪 (React, Spring, MySQL)
                  <br />
                  <span style={styles.listContent}>这个是一个描述</span>
                  <br />
                </span>
              </p>
              <p>
                <span style={styles.listContent}>
                  • 大众社区安全-通讯平台 (MERN)
                  <br />
                  <span style={styles.listContent}>这个是一个描述</span>
                  <br />
                </span>
              </p>
              <p>
                <span style={styles.listContent}>
                  • 个人主页 (React, Django, PostgreSQL)
                  <br />
                  <span style={styles.listContent}>这个是一个描述</span>
                  <br />
                </span>
              </p>
            </span>
          </span>
          <br />
          <span>
            <p>
              <span style={styles.subTitle}>{"AT&T"} | 销售顾问</span>
              <span style={styles.subTime}>2016.11 - 2020</span>
            </p>
            <span>
              <span style={styles.listContent}>
                • 提供全面以及个性化定制的解决方案 <br />
              </span>
              <span style={styles.listContent}>
                • 着重针对光纤网络, 数字电视, 以及移动电话服务 <br />
              </span>
              <span style={styles.listContent}>
                • 与客户深度交流并提供完善的售后服务 <br />
              </span>
              <span style={styles.listContent}>
                • 参与新人的培训工作 <br />
              </span>
            </span>
          </span>
        </span>

        <h3 style={styles.title}>教育经历</h3>
        <span>
          <h5> - 证书</h5>
          <p style={styles.subContent}>
            Bootcamp Certificate: 加州大学尔湾分校
          </p>
          <p style={styles.subContent}>
            项目管理专业助理师资格认证 (CAPM), Project Management Institute,
            License 1933042
          </p>
        </span>
        <br />
        <span>
          <h5> - 学位</h5>
          <p style={styles.subContent}>工商管理硕士, 俄勒冈州立大学</p>
          <p style={styles.subContent}>硕士学位, 俄勒冈州立大学</p>
          <p style={styles.subContent}>学士学位 电子信息工程, 北京科技大学</p>
        </span>
      </>
    );
  }
  return (
    <Modal
      // open={true}
      dimmer="blurring"
      trigger={
        <a href="">
          <Icon name="sticky note" size="small" />
        </a>
      }
      closeIcon
    >
      <Modal.Header>Resume</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Header>
            <Menu pointing>
              <Menu.Item
                name="English"
                active={activeItem === "English"}
                onClick={(e, { name }) => handleItemClick(e, name)}
              />
              <Menu.Item
                name="中文"
                active={activeItem === "中文"}
                onClick={(e, { name }) => handleItemClick(e, name)}
              />
            </Menu>
          </Header>
          {resumeTab}
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button secondary>Close</Button>
      </Modal.Actions>
    </Modal>
  );
}
