import React from 'react';

function QuestionButtons() {
  return (
        <div className="col-12 ">
            <input type="button" className="button button-green" value="Onceki"/>
            <input type="button" className="button button-green" value="Sonraki"/>

            <input type="button" className="button button-blue disabled button-right" value="Tamamla"/>
        </div>
  );
}
// systemctl stop nginx
// /opt/letsencrypt/certbot-auto renew
// systemctl start nginx
export default QuestionButtons;
