import { Statistic, Progress, Divider, Col, Spin } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

export default function AnalyticCustomerCard({
  isLoading = false,
  activeCustomer = 0,
  newCustomer = 0,
}) {
  return (
    <Col className="gutter-row" xs={{ span: 0 }} sm={{ span: 0 }} md={{ span: 0 }} lg={{ span: 6 }}>
      <div className="whiteBox shadow" style={{ height: '380px' }}>
        <div
          className="pad20"
          style={{
            textAlign: 'center',
            justifyContent: 'center',
          }}
        >
          <h3 style={{ color: '#22075e', marginBottom: 30 }}>Customer Preview</h3>

          {isLoading ? (
            <Spin />
          ) : (
            <>
              <Progress type="dashboard" percent={newCustomer} width={148} />
              <p>New Customer this Month</p>
              <Divider />
              <Statistic
                title="Active Customer"
                value={activeCustomer}
                precision={2}
                valueStyle={
                  // color default gray
                  activeCustomer > 0 ? { color: '#3f8600' } : activeCustomer < 0 ? { color: '#cf1322' } : {color: '#000000'}
                }
                prefix={
                  activeCustomer > 0 ? (
                    <ArrowUpOutlined />
                  ) : activeCustomer < 0 ? (
                    <ArrowDownOutlined />
                  ) : null
                }
                suffix="%"
              />
            </>
          )}
        </div>
      </div>
    </Col>
  );
}
